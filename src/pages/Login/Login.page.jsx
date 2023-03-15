import React, { useState, useEffect } from "react";
import LoginContainer from "./Login.styles.js";
import logo from "../../assets/logo.png";
import { Input, Button, ButtonToolbar } from "rsuite";
import parsePhoneNumber, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "libphonenumber-js";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import OtpInput from "react-otp-input";
import Loader from "../Loader/Loader.page.jsx";
import signup from "../../actions/auth/signup.action.js";
import getOtp from "../../actions/auth/otp.action.js";
import signin from "../../actions/auth/signin.action.js";
import { getToken } from "../../actions/auth/token.action.js";
import { BiLogIn, BiStore, BiUserPlus } from "react-icons/bi";

const OTP = ({ getToken, signin, token, phone, signinData }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const handleOtpChange = (otp) => setOtp(otp);
  const setToLocalStorage = (token) => {
    localStorage.setItem(
      "token",
      JSON.stringify({
        token: token.access,
        refresh: token.refresh,
      })
    );
    localStorage.setItem(
      "session",
      JSON.stringify({
        userEmail: token.user_email,
        userId: token.user_id,
      })
    );
  };

  useEffect(() => {
    if (token) {
      setToLocalStorage(token);
      getToken();

      navigate("/profile");
    }
  }, [token]);

  const sendOtp = () => {
    // send otp to server

    signin({
      phone: phone,
      password: otp,
    });
  };

  useEffect(() => {
    if (signinData.error) {
      setError("Daxil etdiyiniz kod yanlışdır");
    }
  }, [signinData.error]);

  return (
    <div className="h-100 d-flex flex-column align-items-center justify-content-center">
      <h4 className="fw-bold mb-4">Telefonunuza gələn kodu daxil edin</h4>
      <OtpInput
        value={otp}
        onChange={handleOtpChange}
        numInputs={6}
        isInputNum={true}
        separator={<span>-</span>}
        inputStyle={{
          width: "3rem",
          height: "3rem",
          borderRadius: "0.5rem",
          border: "1px solid #e0e0e0",
          fontSize: "1.5rem",
          textAlign: "center",
          margin: "0 0.3rem",
        }}
      />
      {error && <div className="text-danger mt-2">{error}</div>}
      <ButtonToolbar className="mt-4">
        <Button appearance="primary" onClick={sendOtp} className="w-100 submit">
          Təsdiqlə
        </Button>
      </ButtonToolbar>
    </div>
  );
};

const Login = ({
  register,
  getOtp,
  signin,
  code,
  token,
  registerUser,
  success,
  getToken,
  signinData,
}) => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const [formError, setFormError] = useState({
    username: null,
    email: null,
    phone: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState(null);

  const phoneFormatter = (value) => {
    const phoneNumber = parsePhoneNumber(value, "AZ", {
      extended: true,
    });

    if (!phoneNumber) {
      return value;
    }

    return phoneNumber.formatInternational();
  };

  const validatePhone = (value) => {
    return (
      isPossiblePhoneNumber(value, "AZ") && isValidPhoneNumber(value, "AZ")
    );
  };

  const onSubmit = (e) => {
    const newFormError = {};
    setError(null);
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!formValue.username) {
      newFormError.username = "Adınız boş ola bilməz!";
      setIsSubmitting(false);
    }

    // if (!formValue.email) {
    //   newFormError.email = "Email boş ola bilməz!";
    //   setIsSubmitting(false);
    // }

    if (formValue.email) {
      if (!emailRegex.test(formValue.email)) {
        newFormError.email = "Email düzgün deyil!";
        setIsSubmitting(false);
      }
    }

    if (!formValue.phone) {
      newFormError.phone = "Telefon nömrəsi boş ola bilməz!";
      setIsSubmitting(false);
    }

    if (formValue.phone) {
      if (!validatePhone(formValue.phone)) {
        newFormError.phone = "Telefon nömrəsi düzgün deyil!";
        setIsSubmitting(false);
      }
    }

    setFormError(newFormError);

    if (Object.keys(newFormError).length === 0) {
      const phone = phoneFormatter(formValue.phone).split(" ").join("");
      const data = {
        email: formValue.email,
        phone: phone,
        username: formValue.username,
      };

      registerUser(data);
    }

    e.preventDefault();
  };

  useEffect(() => {
    if (success) {
      setIsSubmitting(true);
      getOtp({
        phone: phoneFormatter(formValue.phone).split(" ").join(""),
      });
    }
  }, [success]);

  useEffect(() => {
    setError(register?.error?.message);
  }, [register.error]);

  useEffect(() => {
    if (code) {
      setOtpCode(code);
    }
  }, [code]);

  const checkSession = () => {
    if (localStorage.getItem("session")) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return register.pending ? (
    <Loader />
  ) : (
    <LoginContainer>
      <div className="py-3 px-3 shadow-sm d-flex d-md-none align-items-center justify-content-between">
        <div onClick={() => navigate("/")} className="back-btn">
          <FiArrowLeft size={25} />
        </div>
        <Link to="/">
          <img src={logo} alt="logo" width={100} />
        </Link>
      </div>
      <div className="row justify-content-center">
        <div className="col-6 pe-0 col-lg-7 d-none d-md-block">
          <div className="login-banner">
            <div className="row justify-content-center h-100">
              <div className="col-11 d-flex flex-column align-items-center justify-content-center text-center">
                <div onClick={() => navigate("/")} className="back-btn ">
                  <FiArrowLeft size={30} />
                </div>
                <img src={logo} alt="logo" className="img-fluid mb-3" />
                <h1 className="fw-bold mb-3">
                  Axtardığınız hərşey burada <br /> tapa bilərsiniz.
                </h1>
                <h4>
                  İxtisaslaşmış elanlar platforması sizin xidmətinizdədir.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5 ps-0 position-relative">
          {!isSubmitting && (
            <div className="link-tabs">
              <ul>
                <li>
                  <Link to="/signin">
                    <BiLogIn size={20} className="me-2" />
                    <span>GİRİŞ</span>
                  </Link>
                </li>
                <li className="active">
                  <Link to="/signup">
                    <BiUserPlus size={20} className="me-2" />
                    <span>QEYDİYYAT</span>
                  </Link>
                </li>
                <li>
                  <Link to="/signin">
                    <BiStore size={20} className="me-2" />
                    <span>MAĞAZA AÇ</span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {isSubmitting ? (
            <OTP
              getToken={getToken}
              phone={phoneFormatter(formValue.phone).split(" ").join("")}
              token={token}
              signin={signin}
              signinData={signinData}
              otpCode={otpCode}
            />
          ) : (
            <div className="login-form ps-3 h-100 mt-3 pt-5 pt-md-0 mt-md-0">
              <div className="row h-100 pt-5 pt-md-0 align-items-md-center justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                  <div className="container">
                    <h1 className="fw-bold text-center">Xoş gördük sizi!</h1>
                    <p className="text-center">
                      Məlumatlarınızı daxil edərək qeydiyyatdan keçin.
                    </p>
                    <form className="mt-4" onSubmit={onSubmit} noValidate>
                      <div className="mb-3 form-group">
                        <label htmlFor="username">Adınız</label>
                        <Input
                          name="username"
                          value={formValue.username}
                          onChange={(value) => {
                            setFormValue({ ...formValue, username: value });
                          }}
                          placeholder="Adınızı daxil edin"
                        />
                        {formError.username && (
                          <div className="text-danger mt-2">
                            {formError.username}
                          </div>
                        )}
                      </div>
                      <div className="mb-3 form-group">
                        <label htmlFor="email">
                          Email ünvanı (boş buraxa bilərsiniz)
                        </label>
                        <Input
                          name="email"
                          value={formValue.email}
                          onChange={(value) => {
                            setFormValue({ ...formValue, email: value });
                          }}
                          placeholder="Email ünvanınızı daxil edin"
                        />
                        {formError.email && (
                          <div className="text-danger mt-2">
                            {formError.email}
                          </div>
                        )}
                      </div>
                      <div className="mb-3 form-group">
                        <label htmlFor="phone">Telefon nömrəsi </label>
                        <Input
                          placeholder={"(+994) 00 000-00-00"}
                          name="phone"
                          value={phoneFormatter(formValue.phone)}
                          maxLength={17}
                          datatype="phone"
                          onChange={(value) => {
                            setFormValue({ ...formValue, phone: value });
                          }}
                        />
                        {formError.phone && (
                          <div className="text-danger mt-2">
                            {formError.phone}
                          </div>
                        )}
                      </div>
                      {error && (
                        <div className="text-danger mb-3 w-100 text-start d-flex justify-content-start">
                          <span>{error}</span>
                        </div>
                      )}
                      <div className="text-start col-12 mb-3  d-flex align-items-start justify-content-start">
                        Hesabınız var?{" "}
                        <Link
                          to="/signin"
                          className="text-primary fw-bold ps-1"
                        >
                          Daxil olun
                        </Link>
                      </div>

                      <ButtonToolbar>
                        <Button
                          className="submit"
                          appearance="primary"
                          type="submit"
                        >
                          Qeydiyyatdan Keç
                        </Button>
                      </ButtonToolbar>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </LoginContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    register: state.signup.register,
    code: state.otp.otp.code,
    success: state.signup.register.success,
    token: state.login.login.token,
    signinData: state.login.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (data) => dispatch(signup(data)),
    getOtp: (data) => dispatch(getOtp(data)),
    signin: (data) => dispatch(signin(data)),
    getToken: () => dispatch(getToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
