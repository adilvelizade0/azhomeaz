import React, { useEffect, useState } from "react";
import SignInContainer from "./SignIn.styles.js";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { connect } from "react-redux";
import { Button, ButtonToolbar, Input } from "rsuite";
import parsePhoneNumber, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "libphonenumber-js";
import OtpInput from "react-otp-input";
import getOtp from "../../actions/auth/otp.action.js";
import signin from "../../actions/auth/signin.action.js";
import { getToken } from "../../actions/auth/token.action.js";
import { BiLogIn, BiUserPlus, BiStore } from "react-icons/bi";

const OTP = ({
  phone,
  getToken,
  signInState,
  signInRequest,
  setIsSubmitting,
}) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const handleOtpChange = (otp) => setOtp(otp);
  const sendOtp = () => {
    // send otp to server
    signInRequest({
      phone: phone,
      password: otp,
    });
  };

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
    if (signInState.success) {
      setToLocalStorage(signInState.token);
      getToken();
      navigate("/profile");
    }
  }, [signInState.success]);

  useEffect(() => {
    if (signInState.error) {
      setError("Daxil etdiyiniz kod yanlışdır");
    }
  }, [signInState.error]);
  return (
    <div className="h-100 d-flex flex-column align-items-center pt-5 pt-lg-0 mt-5 mt-lg-0 justify-content-lg-center">
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
      <p className="mt-2">
        Kodu almadınız?{" "}
        <span
          style={{
            cursor: "pointer",
            color: "#241f65",
          }}
          onClick={() => {
            setError("");
            setOtp("");
            setIsSubmitting(false);
          }}
        >
          Yenidən göndər
        </span>
      </p>
      <ButtonToolbar>
        <Button appearance="primary" onClick={sendOtp} className="w-100 submit">
          Təsdiqlə
        </Button>
      </ButtonToolbar>
    </div>
  );
};

const SignIn = ({
  signInState,
  otpRequest,
  signInRequest,
  otpState,
  getToken,
}) => {
  const navigate = useNavigate();
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [otpCode, setOtpCode] = React.useState(null);

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
    e.preventDefault();

    if (!validatePhone(phone)) {
      setPhoneError("Telefon nömrəsi düzgün deyil!");
    }

    if (!phone) {
      setPhoneError("Telefon nömrəsi boş ola bilməz!");
    }

    if (phone && validatePhone(phone)) {
      setPhoneError(null);

      otpRequest({
        phone: phoneFormatter(phone, "AZ").split(" ").join(""),
      });
    }
  };

  const checkSession = () => {
    if (localStorage.getItem("session")) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    if (otpState.success) {
      setOtpCode(otpState.code);
      setIsSubmitting(true);
    }
  }, [otpState.success]);

  useEffect(() => {
    if (otpState.error) {
      setPhoneError(otpState.error.message);
    }
  }, [otpState.error]);

  return (
    <SignInContainer>
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
          <div className="signin-banner">
            <div className="row justify-content-center w-100 h-100">
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
        <div className="col-12 col-md-6 col-lg-5 position-relative">
          {!isSubmitting && (
            <div className="link-tabs">
              <ul>
                <li className="active">
                  <Link to="/signin">
                    <BiLogIn size={20} className="me-2" />
                    <span>GİRİŞ</span>
                  </Link>
                </li>
                <li>
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
              setIsSubmitting={setIsSubmitting}
              getToken={getToken}
              signInState={signInState}
              signInRequest={signInRequest}
              otpCode={otpCode}
              phone={phoneFormatter(phone, "AZ").split(" ").join("")}
            />
          ) : (
            <div className="signin-form ps-3 h-100 mt-3 pt-5 pt-md-0 mt-md-0">
              <div className="row h-100 pt-5 pt-md-0 align-items-md-center justify-content-center">
                <div className="col-12 d-flex justify-content-center">
                  <div className="container">
                    <h1 className="fw-bold text-center">Xoş gördük sizi!</h1>
                    <p className="text-center">
                      Məlumatlarınızı daxil edərək hesabınıza daxil olun.
                    </p>
                    <form className="mt-4" onSubmit={onSubmit} noValidate>
                      <div className="mb-3 form-group">
                        <label htmlFor="phone">Telefon nömrəsi </label>
                        <Input
                          name="phone"
                          value={phoneFormatter(phone)}
                          onChange={(value) => {
                            setPhone(value);
                          }}
                          maxLength={17}
                          datatype="phone"
                          placeholder={"(+994) 00 000-00-00"}
                        />
                        {phoneError && (
                          <div className="text-danger mt-2">{phoneError}</div>
                        )}
                      </div>
                      <div className="text-start col-12 mb-3 d-flex align-items-start justify-content-start">
                        Hesabınız yoxdur?
                        <Link to="/signup" className="fw-bold ps-1">
                          <span>Qeydiyyatdan keç</span>
                        </Link>
                      </div>
                      <ButtonToolbar>
                        <Button
                          className="submit"
                          appearance="primary"
                          type="submit"
                        >
                          Daxil Ol
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
    </SignInContainer>
  );
};

const mapStateToProps = (state) => ({
  signInState: state.login.login,
  otpState: state.otp.otp,
});

const mapDispatchToProps = (dispatch) => ({
  otpRequest: (phone) => dispatch(getOtp(phone)),
  signInRequest: (data) => dispatch(signin(data)),
  getToken: () => dispatch(getToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
