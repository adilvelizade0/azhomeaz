import React, { useState, useEffect } from "react";
import AdsDetailsContainer from "./AdsDetails.styles.js";
import { useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import warning from "../../assets/product/warning.png";
import SameAds from "../../components/SameAds/SameAds.component.jsx";
import PlatinumAds from "../../components/PlatinumAds/PlatinumAds.component.jsx";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import ImageSliders from "../../components/ImageSliders/ImageSliders.component.jsx";
import { connect } from "react-redux";
import getAnnouncement from "../../actions/announcement/getAnnouncement.action.js";
import getUser from "../../actions/user/getUser.action.js";

const AdsDetails = ({
  announcementInfo,
  getAnnouncement,
  cities,
  user,
  getUser,
}) => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const product = {
    id: id,
    ad_attribute_price: 10,
    ad_code: "123456",
    ad_price_agreement: true,
    ad_title: "Kərpiç Məhsullarının Satışı",
    ad_main_image:
      "https://www.build-review.com/wp-content/uploads/2022/03/Building-Materials-red-bricks.jpg",
    ad_views: 200,
    isFavorite: false,
    ad_is_new: true,
    ad_city: "Mingəçevir",
    created_at: "16.03.2021",
    updated_at: "16.03.2021 14:15",
    ad_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [1, 2, 3, 4, 5],
    ad_author: {
      id: 1,
      avatar:
        "https://www.build-review.com/wp-content/uploads/2022/03/Building-Materials-red-bricks.jpg",
      username: "Elvin",
      phone: "055 555 55 55",
    },
  };
  const [announcement, setAnnouncement] = useState(product);

  const loadCity = (id) => {
    return cities.find((city) => city.id === id);
  };

  useEffect(() => {
    getAnnouncement(id);
  }, []);

  useEffect(() => {
    if (announcementInfo.success) {
      const newData = {
        ...announcementInfo.data,
        ad_city: loadCity(announcementInfo.data.ad_city).name,
      };
      getUser(announcementInfo.data.ad_author);
      setAnnouncement(newData);
    }
  }, [announcementInfo.success]);

  useEffect(() => {
    if (user.success) {
      const newData = {
        ...announcement,
        ad_author: user.user,
      };
      setAnnouncement(newData);
    }
  }, [user.success]);

  console.log(announcement);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <AdsDetailsContainer>
      <div className="container-fluid py-4 px-3">
        <div className="row justify-content-center">
          <div className="col-11 pb-3 col-lg-4 px-0">
            <div className="ads-price mb-2 d-flex align-items-center">
              <h5
                style={{
                  backgroundColor: "#ff5a5a",
                  color: "#fff",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {announcement.ad_price_agreement
                  ? "Razılaşma ilə"
                  : announcement.ad_attribute_price + "AZN"}
              </h5>
              <h5
                style={{
                  fontSize: "18px",
                }}
                className="ms-2 fw-bold"
              >
                {announcement.ad_title}
              </h5>
            </div>
            <ImageSliders images={announcement.images} />
          </div>
          <div className="col-lg-3 px-0">
            <div className="info px-3">
              <div className="services mx-xl-3 d-flex flex-lg-column align-items-center justify-content-evenly justify-content-lg-center">
                <button className="mb-lg-2 me-2 me-lg-0 btn platinum">
                  Platin Et
                </button>
                <button className="mb-lg-2 me-2 me-lg-0 btn vip">Vip Et</button>
                <button className="btn premium">Önə çək</button>
              </div>
              <div className="d-flex mt-4 favorite-container mx-xl-3 align-items-center">
                {isFavorite ? (
                  <div onClick={handleFavorite}>
                    <AiFillHeart
                      color="#FF0000"
                      size={25}
                      className="favorite me-2"
                    />
                    <span>Seçilmişlərdən çıxart</span>
                  </div>
                ) : (
                  <div onClick={handleFavorite}>
                    <AiOutlineHeart size={25} className="favorite me-2" />
                    <span>Seçilmişlərə əlavə et</span>
                  </div>
                )}
              </div>
              <div className="info-details mt-4 d-flex mx-xl-3">
                <ul className="list-unstyled">
                  <li>
                    Şəhər:{" "}
                    <span className="fw-bold">{announcement.ad_city}</span>
                  </li>
                  <li>
                    Elan nömrəsi:{" "}
                    <span className="fw-bold">{announcement.ad_code}</span>
                  </li>
                  <li>
                    Baxış sayı:{" "}
                    <span className="fw-bold">{announcement.ad_views}</span>
                  </li>
                  <li>
                    Yeniləndi:{" "}
                    <span className="fw-bold">
                      {new Date(announcement.updated_at).toLocaleDateString()}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="warning mx-xl-3">
                <div className="row">
                  <div className="col-4 col-lg-12 d-flex justify-content-center align-items-center">
                    <img src={warning} alt="warning" width={50} height={50} />
                  </div>
                  <div className="col-8 col-lg-12 mt-lg-3 px-3">
                    <h5 className="text-danger fw-bold text-lg-center">
                      Diqqət!
                    </h5>
                    <p className="mb-0 text-lg-center">
                      Beh göndərməmişdən öncə sövdələşmənin təhlükəsiz olduğuna
                      əmin olun!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-5 pe-lg-2 mt-4 mt-lg-0 px-3 px-lg-0">
            <PlatinumAds />
          </div>
        </div>
        <div className="row mt-4 py-4">
          <div className="col-12 col-lg-5">
            <div className="row user-info">
              <div className="ps-5 ps-lg-0 col-3 col-md-2 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-center">
                <img
                  src={announcement.ad_author.avatar}
                  alt="user"
                  width={90}
                  height={90}
                  className="rounded-circle user-image"
                />
              </div>
              <div className="ps-4 ps-lg-0 col-9 col-md-6 col-lg-8 d-flex align-items-center">
                <div className="user-info">
                  <h6 className="fw-bold">{announcement.ad_author.username}</h6>
                  <div className="d-flex align-items-center">
                    <FaShoppingCart size={20} className="me-2" />
                    <span>istifadəçinin digər elanları</span>
                  </div>
                  <div className="mt-1 d-flex align-items-center">
                    <FaPhoneAlt size={18} className="me-2" />
                    <span>{announcement.ad_author.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 mt-lg-0 col-lg-7 d-flex align-items-center">
            <div className="ads-details d-flex flex-column ps-4 ps-lg-0 pe-lg-4">
              <h5 className="fw-bold">Elan Haqqında</h5>
              <p>
                {isShow
                  ? announcement.ad_description
                  : announcement.ad_description.slice(0, 80) + "..."}
              </p>
              <span
                onClick={() => setIsShow(!isShow)}
                className="text-primary fw-bold"
              >
                {isShow ? "Daha az" : "Daha çox"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-block d-lg-none px-4">
        <PlatinumAds />
      </div>
      <SameAds />
    </AdsDetailsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    announcementInfo: state.announcement.announcement,
    cities: state.city.cities.data,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAnnouncement: (id) => dispatch(getAnnouncement(id)),
    getUser: (id) => dispatch(getUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(AdsDetails));
