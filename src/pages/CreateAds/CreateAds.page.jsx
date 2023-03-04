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
  Button,
} from "rsuite";
import { Collapse } from "react-collapse";
import ImageUploader from "react-images-upload";
import warning from "../../assets/product/warning.png";
import video from "../../assets/videos/video.mp4";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CreateAds = () => {
  const initialFormState = {
    title: "",
    price: "",
    category: "",
    subcategory: "",
    status: "new",
    description: "",
    city: "",
    rules: "",
    agreement: false,
  };
  const [form, setForm] = useState(initialFormState);
  const [pictures, setPictures] = useState([]);
  const [banner, setBanner] = useState([]);
  const [collapse, setCollapse] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onDrop = (pictureFiles, pictureDataURL) => {
    setPictures(pictureFiles);
  };
  const onDropBanner = (pictureFiles, pictureDataURL) => {
    setBanner(pictureFiles);
  };

  const handleChanges = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const submit = () => {
    const newAd = {
      ...form,
      pictures: pictures,
      banner: banner,
    };

    alert(`
        Elan başlığı: ${newAd.title}
        Qiymət: ${newAd.agreement ? "Razılaşma yolu ilə" : +newAd.price}
        Kateqoriya: ${newAd.category}
        Alt kateqoriya: ${newAd.subcategory}
        Status: ${newAd.status}
        Təsvir: ${newAd.description}
        Şəhər: ${newAd.city}
        Şərtlər: ${newAd.rules}
        Şəkillər: ${newAd.pictures}
        Banner: ${newAd.banner}
        
    `);
  };

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

    if (banner.length === 0) {
      errors.banner = "* Başlıq şəkli bölməsi doldurulmalıdır!";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <CreateAdsContainer>
      <PageBanner page="Elan Yarat" />
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
              <form onSubmit={handleSubmit} noValidate>
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
                    buttonText="Choose images"
                    onChange={onDropBanner}
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    singleImage={true}
                    name="banner"
                    id="banner"
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
                    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                    maxFileSize={5242880}
                    name="pictures"
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
                        data={[
                          {
                            label: "Mənzillər",
                            value: "menziller",
                          },
                        ]}
                        size="lg"
                        placeholder="Kateqoriya seçin"
                        onChange={(value) => {
                          handleChanges(
                            "category",
                            value.replace(/[^a-zA-Z0-9 ]/g, "")
                          );
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
                            label: "Mənzillər",
                            value: "menziller",
                          },
                        ]}
                        size="lg"
                        placeholder="Kateqoriya seçin"
                        onChange={(value) => {
                          handleChanges(
                            "subcategory",
                            value.replace(/[^a-zA-Z0-9 ]/g, "")
                          );
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
                        data={[
                          {
                            label: "Bakı",
                            value: "baki",
                          },
                        ]}
                        size="lg"
                        onChange={(value) => {
                          handleChanges(
                            "city",
                            value.replace(/[^a-zA-Z0-9 ]/g, "")
                          );
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
    </CreateAdsContainer>
  );
};

export default CreateAds;
