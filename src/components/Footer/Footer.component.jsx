import React, { useEffect, useState } from "react";
import FooterWrapper from "./Footer.styles.js";
import { Input, InputGroup } from "rsuite";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/logo.png";
import Swal from "sweetalert2";
import postSubscribe from "../../actions/subscribe/postSubscribe.action.js";

const Footer = ({ subscribe, subscriber }) => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      subscribe(email);
      setEmail("");
      setIsSubscribed(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email boş ola bilməz!",
      });
    }
  };

  useEffect(() => {
    if (subscriber.success) {
      if (isSubscribed) {
        Swal.fire({
          icon: "success",
          title: "Abunə olundu",
          text: "Abunəliyiniz qeydə alındı!",
        });
        setIsSubscribed(false);
      }
    }
  }, [subscriber.success]);

  useEffect(() => {
    if (subscriber.error) {
      if (isSubscribed) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Bu email artıq abunədir!",
        });
        setIsSubscribed(false);
      }
    }
  }, [subscriber.error]);

  return (
    <FooterWrapper className="mb-5 mb-md-0">
      <div className="container">
        <div className="row justify-content-center py-5">
          <div className="col-11 ">
            <div className="row my-3">
              <div className="col-12 col-lg-7 d-flex flex-column justify-content-center ">
                <h5 className="fw-bold mb-2">Xəbərlərə Abunəlik</h5>
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.9rem",
                    lineHeight: "1.5rem",
                    fontWeight: "500",
                  }}
                >
                  Ən son yeniliklərimizdən xəbərdar olmaq üçün abunə ola
                  bilərsiniz.
                </p>
              </div>
              <div className="col-12 col-lg-5">
                <div className="newsletter-form">
                  <form onSubmit={handleSubmit}>
                    <InputGroup
                      style={{
                        borderColor: "#fff",
                        borderWidth: "3px",
                      }}
                    >
                      <Input
                        style={{
                          borderRadius: "0",
                        }}
                        value={email}
                        onChange={(value) => setEmail(value)}
                        type="email"
                        size="lg"
                        placeholder="E-poçt ünvanınız"
                      />
                      <InputGroup.Button
                        type="submit"
                        style={{
                          backgroundColor: "#ffe600",
                        }}
                      >
                        <FaEnvelope className="me-2" />
                        <span className="fw-bold">Abunə ol</span>
                      </InputGroup.Button>
                    </InputGroup>
                  </form>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 mt-md-0 col-md-6 col-lg-3 px-2">
                <h5 className="fw-bold">Haqqımızda</h5>
                <hr />
                <div className="d-flex align-items-center ">
                  <FaEnvelope size={25} className="me-3" />
                  <div className="d-flex flex-column justify-content-center">
                    <a
                      className="text-decoration-none text-dark"
                      href="mailto:support@azhome.az"
                    >
                      support@azhome.az
                    </a>
                    <a
                      className="text-decoration-none text-dark"
                      href="mailto:info@azhome.az"
                    >
                      info@azhome.az
                    </a>
                  </div>
                </div>
                <div className="mt-3">
                  <FaWhatsapp size={25} className="me-3" />
                  <a
                    className="text-decoration-none text-dark"
                    href="https://api.whatsapp.com/send?phone=994556619054&text=Salam"
                  >
                    +994 55-661-90-54
                  </a>
                </div>
              </div>
              <div className="col-12 mt-4 mt-md-0 col-md-6 col-lg-3 px-2">
                <h5 className="fw-bold">Qısa yollar</h5>
                <hr />
                <ul className="p-0">
                  <li
                    className="mb-2"
                    style={{
                      listStyle: "none",
                      fontSize: "1rem",
                    }}
                  >
                    <Link
                      className="text-decoration-none text-dark"
                      to="/rules"
                    >
                      Qaydalar
                    </Link>
                  </li>
                  <li
                    className="mb-2"
                    style={{
                      listStyle: "none",
                      fontSize: "1rem",
                    }}
                  >
                    <Link
                      className="text-decoration-none text-dark"
                      to="/contact"
                    >
                      Şikayət və təkliflər
                    </Link>
                  </li>
                  <li
                    className="mb-2"
                    style={{
                      listStyle: "none",
                      fontSize: "1rem",
                    }}
                  >
                    <Link
                      className="text-decoration-none text-dark"
                      to="/profile"
                    >
                      Şəxsi kabinet
                    </Link>
                  </li>
                  <li
                    className="mb-2"
                    style={{
                      listStyle: "none",
                      fontSize: "1rem",
                    }}
                  >
                    <Link
                      className="text-decoration-none text-dark"
                      to="/signup"
                    >
                      Qeydiyyat
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 mt-3 mt-lg-0 col-lg-3 px-2">
                <h5 className="fw-bold">Digər linklər</h5>
                <hr />
                <ul className="p-0">
                  <li
                    className="mb-2"
                    style={{
                      listStyle: "none",
                      fontSize: "1rem",
                    }}
                  >
                    <Link
                      className="text-decoration-none text-dark"
                      to="/about"
                    >
                      Haqqımızda
                    </Link>
                  </li>
                  <li
                    className="mb-2"
                    style={{
                      listStyle: "none",
                      fontSize: "1rem",
                    }}
                  >
                    <Link
                      className="text-decoration-none text-dark"
                      to="/about"
                    >
                      Məxfilik siyasəti
                    </Link>
                  </li>
                  <li
                    className="mb-2"
                    style={{
                      listStyle: "none",
                      fontSize: "1rem",
                    }}
                  >
                    <Link
                      className="text-decoration-none text-dark"
                      to="/instructions"
                    >
                      İstifadəçi təlimatı
                    </Link>
                  </li>
                  <li
                    className="mb-2"
                    style={{
                      listStyle: "none",
                      fontSize: "1rem",
                    }}
                  >
                    <Link
                      className="text-decoration-none text-dark"
                      to="/contact"
                    >
                      Bizimlə əlaqə
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 mt-3 mt-lg-0  col-lg-3 px-2 d-flex flex-column align-items-center">
                <img src={logo} width={120} alt="logo" />
                <div className="d-flex mt-5">
                  <div className="d-flex flex-column justify-content-center align-items-center me-3">
                    <h5 className="fw-bold mb-1">306</h5>
                    <p>İstifadəçi sayı</p>
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <h5 className="fw-bold mb-1">506</h5>
                    <p>Elan sayı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer pb-5 pb-md-0 py-3">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5 d-flex justify-content-center justify-content-lg-start">
              <p
                style={{
                  color: "#fff",
                }}
              >
                Bütün hüquqlar qorunur © 2023 - Hazırladı{" "}
                <a className="text-decoration-none fw-bold text-light" href="#">
                  pipro.az
                </a>
              </p>
            </div>
            <div className="col-lg-5 d-flex justify-content-center justify-content-lg-end">
              <div className="social-icons d-flex">
                <div className="social-icon me-3">
                  <a className="text-light" href="#">
                    <FaFacebook size={22} />
                  </a>
                </div>
                <div className="social-icon me-3">
                  <a className="text-light" href="#">
                    <FaInstagram size={22} />
                  </a>
                </div>
                <div className="social-icon me-3">
                  <a className="text-light" href="#">
                    <FaYoutube size={22} />
                  </a>
                </div>
                <div className="social-icon">
                  <a className="text-light" href="#">
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    subscriber: state.subscriber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribe: (email) => dispatch(postSubscribe(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
