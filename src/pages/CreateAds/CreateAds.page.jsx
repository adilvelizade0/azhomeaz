import React, { useState, useEffect } from "react";
import CreateAdsContainer from "./CreateAds.styles.js";
import PageBanner from "../../components/PageBanner/PageBanner.component.jsx";
import {
  Input,
  InputNumber,
  InputPicker,
  Radio,
  RadioGroup,
  Checkbox,
  Form,
} from "rsuite";
import { Collapse } from "react-collapse";
import ImageUploader from "react-images-upload";
import warning from "../../assets/product/warning.png";
import video from "../../assets/videos/video.mp4";
import { connect } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import createAnnouncement from "../../actions/announcement/createAnnouncement.action.js";
import getAllCategory from "../../actions/category/getAllCategory.action.js";
import getAllCities from "../../actions/city/getAllCity.action.js";
import { getToken } from "../../actions/auth/token.action.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

const CreateAds = ({
  createdData,
  createAnnouncement,
  getAllCategories,
  categoryInfo,
  getAllCities,
  cityInfo,
  getToken,
}) => {
  const initialFormState = {
    title: "",
    price: 0,
    category: "",
    subcategory: "",
    status: "new",
    description: "",
    city: "",
    rules: false,
    agreement: false,
  };
  const [form, setForm] = useState(initialFormState);
  const [pictures, setPictures] = useState([]);
  const [banner, setBanner] = useState(null);
  const [collapse, setCollapse] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const onDrop = (pictureFiles) => {
    setPictures(pictureFiles);
  };
  const onDropBanner = (pictureFiles) => {
    setBanner(pictureFiles[0]);
  };
  const handleChanges = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const getAccessTokenFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("token")).access;
  };

  const setPhotos = (id) => {
    const formData = new FormData();
    pictures.forEach((picture) => {
      formData.append("images", picture);
    });

    formData.append("ad_id", id);

    axios.post(
      `${import.meta.env.VITE_BASE_URL}/announcement/image/add/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getAccessTokenFromLocalStorage()}`,
        },
      }
    );
  };

  useEffect(() => {
    if (createdData.success) {
      setPhotos(createdData.announcement.id);
      setLoading(false);
      Swal.fire(
        "Elan Yaradıldı!",
        "Elanınız əlavə olundu, yoxlanıldıqdan sonra dərc ediləcək",
        "success"
      );
      setForm(initialFormState);
    }
  }, [createdData.success]);

  const navigate = useNavigate();

  const checkSession = () => {
    if (!localStorage.getItem("session")) {
      navigate("/signin");
    } else {
      getToken();
      getAllCategories();
      getAllCities();
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  // * Get all categories
  useEffect(() => {
    setCategories(categoryInfo.data);
    const accessToken = JSON.parse(localStorage.getItem("token")).access;
    setToken(accessToken);
  }, [categoryInfo.success]);

  // * Get all cities
  useEffect(() => {
    setCities(cityInfo.data);
  }, [cityInfo.success]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(form));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = "* Elan başlığı bölməsi doldurulmalıdır!";
    }
    if (!values.agreement && !values.price) {
      errors.price = "* Qiymət bölməsi doldurulmalıdır!";
    }
    if (!values.category) {
      errors.category = "* Kateqoriya bölməsi seçilməlidir!";
    }
    if (!values.subcategory) {
      errors.subcategory = "* Alt kateqoriya bölməsi seçilməlidir!";
    }
    if (!values.description) {
      errors.description = "* Təsvir bölməsi doldurulmalıdır!";
    }
    if (!values.city) {
      errors.city = "* Şəhər bölməsi seçilməlidir!";
    }

    if (pictures.length === 0) {
      errors.pictures = "* Şəkil bölməsi doldurulmalıdır!";
    }

    if (!banner) {
      errors.banner = "* Başlıq şəkli bölməsi doldurulmalıdır!";
    }

    return errors;
  };

  const submit = () => {
    setLoading(true);
    const newAd = {
      ad_title: form.title,
      ad_attribute_price: form.price,
      ad_price_agreement: form.agreement,
      ad_is_new: form.status === "new" ? true : false,
      ad_main_image: banner,
      ad_city: form.city,
      ad_category: form.category,
      ad_description: form.description,
      ad_rule_agreement: form.rules,
    };

    let formData = new FormData();
    formData.append("ad_title", newAd.ad_title);
    formData.append("ad_attribute_price", newAd.ad_attribute_price);
    formData.append("ad_price_agreement", newAd.ad_price_agreement);
    formData.append("ad_is_new", newAd.ad_is_new);
    formData.append("ad_main_image", newAd.ad_main_image);
    formData.append("ad_city", newAd.ad_city);
    formData.append("ad_category", newAd.ad_category);
    formData.append("ad_description", newAd.ad_description);
    formData.append("ad_rule_agreement", newAd.ad_rule_agreement);
    createAnnouncement(formData);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <CreateAdsContainer>
      <PageBanner page="Elan Yarat" />
      {loading ? (
        <div className="py-5 d-flex justify-content-center align-items-center">
          <InfinitySpin width="200" color="#034efd" />
        </div>
      ) : (
        <div className="container py-5">
          <div className="row justify-content-center justify-content-xl-start">
            <div className="col-12 col-lg-9">
              <div className="mb-3">
                <div className="rules-container d-flex flex-column justify-content-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-bold d-flex align-items-center">
                      <img src={warning} width={30} alt="warning" />
                      <span className="ms-2">Qaydalar</span>
                    </h4>
                    <div
                      className="collapse-btn"
                      onClick={() => {
                        setCollapse(!collapse);
                      }}
                    >
                      {collapse ? (
                        <IoIosArrowUp size={25} />
                      ) : (
                        <IoIosArrowDown size={25} />
                      )}
                    </div>
                  </div>
                  <Collapse isOpened={collapse}>
                    <ul>
                      <li>Eyni elanı bir neçə dəfə təqdim etməyin.</li>
                      <li>
                        Təsvir və ya şəkillərdə telefon, email və ya sayt ünvanı
                        göstərməyin.
                      </li>
                      <li>
                        Ad yerində qiymət yazmayın - bunun üçün ayrıca yer var.
                      </li>
                      <li>Qadağan olunmuş məhsulları satmayın.</li>
                      <li>
                        <a href="#">Saytın tam qaydaları</a>
                      </li>
                    </ul>
                  </Collapse>
                </div>
              </div>
              <div className="create-container px-4">
                <h2 className="fw-bold mb-3">Elan Məlumatları</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="title" className="mb-2 fw-bold">
                      Elan Başlığı
                    </label>
                    <Input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Elanınızın Adı"
                      className="py-2"
                      value={form.title}
                      onChange={(value) => {
                        handleChanges(
                          "title",
                          value.replace(/[^a-zA-Z0-9 ]/g, "")
                        );
                      }}
                    />
                    {formErrors.title && (
                      <div className="text-danger fw-bold mt-2">
                        {formErrors.title}
                      </div>
                    )}
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="banner" className=" fw-bold">
                      Başlıq Şəkli
                    </label>
                    <ImageUploader
                      withIcon={true}
                      withPreview={true}
                      buttonText="Şəkil seçin"
                      onChange={onDropBanner}
                      imgExtension={[".jpg", ".jpeg", ".png"]}
                      maxFileSize={5242880}
                      singleImage={true}
                      name="banner"
                      id="banner"
                      defaultImage={[banner]}
                    />
                    {formErrors.banner && (
                      <div className="text-danger fw-bold mt-2">
                        {formErrors.banner}
                      </div>
                    )}
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="pictures" className=" fw-bold">
                      Elan Şəkilləri
                    </label>
                    <ImageUploader
                      withIcon={true}
                      withPreview={true}
                      buttonText="Choose images"
                      onChange={onDrop}
                      imgExtension={[".jpg", ".png", ".jpeg"]}
                      maxFileSize={5242880}
                      name="pictures"
                      defaultImage={pictures}
                      id="pictures"
                    />
                    {formErrors.pictures && (
                      <div className="text-danger fw-bold mt-2">
                        {formErrors.pictures}
                      </div>
                    )}
                  </div>
                  <div className="form-group mt-4">
                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column">
                        <label htmlFor="category" className="mb-2 fw-bold">
                          Əsas Kateqoriya
                        </label>
                        <InputPicker
                          id="category"
                          name="category"
                          data={
                            categories.length > 0
                              ? categories.map((category) => {
                                  return {
                                    label: category.category_name,
                                    value: category.id,
                                  };
                                })
                              : [
                                  {
                                    label: "Test Category",
                                    value: 0,
                                  },
                                ]
                          }
                          value={form.category}
                          size="lg"
                          placeholder="Kateqoriya seçin"
                          onChange={(value) => {
                            handleChanges("category", value);
                          }}
                        />
                        {formErrors.category && (
                          <div className="text-danger fw-bold mt-2">
                            {formErrors.category}
                          </div>
                        )}
                      </div>
                      <div className="col-lg-6 mt-4 mt-lg-0 d-flex flex-column">
                        <label htmlFor="subcategory" className="mb-2 fw-bold">
                          Alt Kateqoriya
                        </label>
                        <InputPicker
                          id="subcategory"
                          name="subcategory"
                          data={[
                            {
                              label: "Salam",
                              value: "Salam",
                            },
                          ]}
                          value={form.subcategory}
                          size="lg"
                          placeholder="Kateqoriya seçin"
                          onChange={(value) => {
                            handleChanges("subcategory", value);
                          }}
                        />
                        {formErrors.subcategory && (
                          <div className="text-danger fw-bold mt-2">
                            {formErrors.subcategory}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <div className="row">
                      <div className="col-lg-6 d-flex flex-column">
                        <label htmlFor="city" className="mb-2 fw-bold">
                          Şəhər
                        </label>
                        <InputPicker
                          id="city"
                          name="city"
                          value={form.city}
                          data={
                            cities.length > 0
                              ? cities.map((city) => {
                                  return {
                                    label: city.name,
                                    value: city.id,
                                  };
                                })
                              : [
                                  {
                                    label: "Test City",
                                    value: 0,
                                  },
                                ]
                          }
                          size="lg"
                          onChange={(value) => {
                            handleChanges("city", value);
                          }}
                          placeholder="Şəhər seçin"
                        />
                        {formErrors.city && (
                          <div className="text-danger fw-bold mt-2">
                            {formErrors.city}
                          </div>
                        )}
                      </div>
                      <div className="col-lg-6 mt-4 mt-lg-0  d-flex flex-column">
                        <label htmlFor="price" className="mb-2 fw-bold">
                          Qiymət
                        </label>
                        <InputNumber
                          id="price"
                          name="price"
                          placeholder="Qiymət"
                          disabled={form.agreement}
                          value={form.price}
                          onChange={(value) => {
                            handleChanges(
                              "price",
                              value.replace(/[^a-zA-Z0-9 ]/g, "")
                            );
                          }}
                        />
                        <div>
                          <Checkbox
                            id="agreement"
                            name="agreement"
                            checked={form.agreement}
                            value={form.agreement}
                            onChange={(value, checked) => {
                              handleChanges("agreement", checked);
                            }}
                            className="fw-bold"
                          >
                            Razılaşma yolu ilə
                          </Checkbox>
                        </div>
                        {formErrors.price && (
                          <div className="text-danger fw-bold mt-2">
                            {formErrors.price}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <div className="row">
                      <label htmlFor="status" className="mb-2 fw-bold">
                        Vəziyyəti
                      </label>
                      <Form.Group id="status" controlId="radioList">
                        <RadioGroup
                          onChange={(value) => {
                            handleChanges(
                              "status",
                              value.replace(/[^a-zA-Z0-9 ]/g, "")
                            );
                          }}
                          name="city"
                          inline
                          value={form.status}
                        >
                          <Radio value="new">
                            <span className="new">Yeni</span>
                          </Radio>
                          <Radio value="old">
                            <span className="old">İkinci Əl</span>
                          </Radio>
                        </RadioGroup>
                      </Form.Group>
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label htmlFor="description" className="mb-2 fw-bold">
                      Elanın Təsviri
                    </label>
                    <Input
                      id="description"
                      name="description"
                      as="textarea"
                      value={form.description}
                      onChange={(value) => {
                        handleChanges(
                          "description",
                          value.replace(/[^a-zA-Z0-9 ]/g, "")
                        );
                      }}
                      rows={3}
                      className="fw-bold fs-6"
                      placeholder="Elan haqqında məlumat verin"
                    />
                    {formErrors.description && (
                      <div className="text-danger fw-bold mt-2">
                        {formErrors.description}
                      </div>
                    )}
                  </div>
                  <div className="form-group mt-4 d-flex align-items-center">
                    <Checkbox
                      onChange={(value, checked) => {
                        handleChanges("rules", checked);
                      }}
                      value={form.rules}
                      checked={form.rules}
                      id="rules"
                      name="rules"
                      className="mb-2"
                    />
                    <span className="mb-2 fw-bold">
                      Qaydalarla tanış oldum,{" "}
                      <a href="https://azhome.az/az/telimatlar/">
                        istifadəçi təlimatları ilə razıyam
                      </a>
                    </span>
                  </div>
                  <div className="form-group mt-4">
                    <button
                      disabled={!form.rules}
                      className="btn btn-primary create-ads-btn"
                      type="submit"
                    >
                      Elanı Yarat
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-3 d-none d-xl-block ">
              <div className="ads-area">
                <video
                  className="ads-video"
                  width="100%"
                  height="100%"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </CreateAdsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    createdData: state.announcement.createdData,
    categoryInfo: state.category.categories,
    cityInfo: state.city.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAnnouncement: (data) => dispatch(createAnnouncement(data)),
    getAllCategories: () => dispatch(getAllCategory()),
    getAllCities: () => dispatch(getAllCities()),
    getToken: (data) => dispatch(getToken(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(CreateAds));
