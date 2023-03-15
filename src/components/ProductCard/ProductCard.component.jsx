import React, { useState, useEffect } from "react";
import ProductCardWrapper from "./ProductCard.styles.js";
import { AiFillEye, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import crown from "../../assets/product/crown.png";
import diamond from "../../assets/product/diamond.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const ProductCard = ({
  product = {
    id: 1,
    price: 10,
    title: "Kərpiç Məhsullarının Satışı",
    image:
      "https://www.build-review.com/wp-content/uploads/2022/03/Building-Materials-red-bricks.jpg",
    views: 200,
    isFavorite: false,
    isVip: true,
    isPlatinum: true,
    isNew: true,
    location: 0,
    date: "16.03.2021",
    priceAgreement: false,
  },
  cities,
  user,
}) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [address, setAddress] = useState("loading...");

  const navigate = useNavigate();

  const handleFavorite = () => {
    if (!user) {
      navigate("/signin");
    } else {
      setIsFavorite(!isFavorite);
    }
  };

  useEffect(() => {
    if (cities.success) {
      const city = cities.data.find((city) => city.id === product.location);
      if (city) {
        setAddress(city.name);
      } else {
        setAddress("Yoxdur");
      }
    }
  }, []);

  return (
    <ProductCardWrapper>
      <div className="card">
        <div className="card-head">
          {product.isNew && (
            <div className="new-badge">
              <span>Yeni</span>
            </div>
          )}

          {product.isVip || product.isPlatinum ? (
            <div className="premium-badge d-flex justify-content-center align-items-center">
              <Tooltip anchorSelect="#vip-anchor-element" content="VIP Elan" />
              <Tooltip
                anchorSelect="#platinum-anchor-element"
                content="Platin Elan"
              />

              {product.isVip && (
                <img
                  id="vip-anchor-element"
                  src={crown}
                  className="me-2"
                  alt="crown"
                  width={20}
                />
              )}
              {product.isPlatinum && (
                <img
                  id="platinum-anchor-element"
                  src={diamond}
                  alt="diamond"
                  width={20}
                />
              )}
            </div>
          ) : null}
          {isFavorite ? (
            <AiFillHeart
              className="card-icon favorite-icon"
              size={30}
              color={"#FF0000"}
              onClick={handleFavorite}
            />
          ) : (
            <AiOutlineHeart
              className="favorite-icon"
              size={30}
              onClick={handleFavorite}
            />
          )}
          <img
            height={150}
            className="card-img"
            src={product.image}
            alt="product image"
          />
          <div
            onClick={() => {
              navigate(`/ads/${product.id}`);
            }}
            className="card-img-overlay product-views"
          >
            <AiFillEye className="card-icon" size={20} />
            <span className="ms-1 fw-bold ">{product.views}</span>
          </div>
        </div>
        <div
          className="card-body"
          onClick={() => navigate(`/ads/${product.id}`)}
        >
          <h4 className="card-price fw-bold">
            {product.priceAgreement ? "Razılaşma ilə" : product.price + " AZN"}
          </h4>
          <h5 className="card-title fw-normal ms-1">
            {product.title.length > 20
              ? product.title.slice(0, 20) + "..."
              : product.title}
          </h5>
          <div className="d-flex mt-2 align-items-center card-info">
            <div className="mb-sm-0 d-flex align-items-center me-1 me-md-2">
              <FaMapMarkerAlt size={16} className="me-1" />
              <span>{address}</span>
            </div>
            <div className="d-flex align-items-center">
              <FaClock size={16} className="me-1" />
              <span>{product.date}</span>
            </div>
          </div>
        </div>
      </div>
    </ProductCardWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    cities: state.city.cities,
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(React.memo(ProductCard));
