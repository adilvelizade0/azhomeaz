import React, { useState } from "react";
import AdsDetailsContainer from "./AdsDetails.styles.js";
import { useParams } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import warning from "../../assets/product/warning.png";
import SameAds from "../../components/SameAds/SameAds.component.jsx";
import PlatinumAds from "../../components/PlatinumAds/PlatinumAds.component.jsx";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";

const AdsDetails = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const product = {
    id: id,
    price: 10,
    title: "Kərpiç Məhsullarının Satışı",
    image:
      "https://www.build-review.com/wp-content/uploads/2022/03/Building-Materials-red-bricks.jpg",
    views: 200,
    isFavorite: false,
    isVip: true,
    isPlatinum: true,
    isNew: true,
    location: "Mingəçevir",
    date: "16.03.2021",
    updatedDate: "16.03.2021 14:15",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <AdsDetailsContainer>
      <div className="container-fluid py-4 px-3">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-lg-3 px-3">
            <div className="info">
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
                    Şəhər: <span className="fw-bold">{product.location}</span>
                  </li>
                  <li>
                    Elan nömrəsi: <span className="fw-bold">{product.id}</span>
                  </li>
                  <li>
                    Baxış sayı: <span className="fw-bold">{product.views}</span>
                  </li>
                  <li>
                    Yeniləndi:{" "}
                    <span className="fw-bold">{product.updatedDate}</span>
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
                  src="https://azhome.az/media/rr.jpg"
                  alt="user"
                  width={90}
                  height={90}
                  className="rounded-circle user-image"
                />
              </div>
              <div className="ps-4 ps-lg-0 col-9 col-md-6 col-lg-8 d-flex align-items-center">
                <div className="user-info">
                  <h6 className="fw-bold">Rəşad Rəşadov</h6>
                  <div className="d-flex align-items-center">
                    <FaShoppingCart size={20} className="me-2" />
                    <span>istifadəçinin digər elanları</span>
                  </div>
                  <div className="mt-1 d-flex align-items-center">
                    <FaPhoneAlt size={18} className="me-2" />
                    <span>+994505815696</span>
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
                  ? product.description
                  : product.description.slice(0, 80) + "..."}
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

export default AdsDetails;
