import React, { useEffect, useState } from "react";
import ContactContainer from "./Contact.styles.js";
import { connect } from "react-redux";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Input } from "rsuite";
import Swal from "sweetalert2";
import PageBanner from "../../components/PageBanner/PageBanner.component.jsx";
import postContact from "../../actions/contact/postContact.action.js";
import { InfinitySpin } from "react-loader-spinner";

const Contact = ({ postContact, contact }) => {
  const initialData = {
    name: "",
    email: "",
    surname: "",
    description: "",
    subject: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const validate = (formData) => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Adınızı daxil edin";
    }
    if (!formData.surname) {
      errors.surname = "Soyadınızı daxil edin";
    }
    if (!formData.email) {
      errors.email = "Email daxil edin";
    }
    if (!formData.subject) {
      errors.subject = "Mövzu daxil edin";
    }
    if (!formData.description) {
      errors.description = "Mesajınızı daxil edin";
    }

    return errors;
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = () => {
    setLoading(true);
    setIsShow(true);
    postContact(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      submitForm();
    }
  }, [formErrors]);

  useEffect(() => {
    if (contact.success) {
      setLoading(false);
      if (isShow) {
        Swal.fire("Təbriklər!", "Mesajınız uğurla göndərildi", "success");
        setIsShow(false);
      }
    }
  }, [contact.success]);

  useEffect(() => {
    if (contact.error) {
      setLoading(false);
      Swal.fire("Oops...", "Mesajınız göndərilmədi", "error");
    }
  }, [contact.error]);

  return (
    <ContactContainer>
      <PageBanner page="Əlaqə" />
      {loading ? (
        <div className="py-5 d-flex justify-content-center align-items-center">
          <InfinitySpin width="200" color="#034efd" />
        </div>
      ) : (
        <div className="container py-5">
          <div className="row pb-5 justify-content-center align-items-center">
            <div className="col-12 col-lg-6">
              <h1
                style={{
                  color: "var(--blue)",
                }}
                className="fw-bold mb-2"
              >
                Əlaqə
              </h1>
              <p className="mb-4 fs-6 fw-bold">
                Əlaqə saxlamaq üçün aşağıdakı formu doldurun
              </p>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
                className="contact-form"
              >
                <div className="form-group mb-2">
                  <label htmlFor="name">Adınız</label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    size="lg"
                    placeholder="Adınızı daxil edin"
                    className="mt-2"
                    onChange={(value) => {
                      handleChange("name", value);
                    }}
                  />
                  {formErrors.name && (
                    <div className="text-danger mt-2">{formErrors.name}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="surname">Soyadınız</label>
                  <Input
                    type="text"
                    name="surname"
                    id="surname"
                    size="lg"
                    placeholder="Soyadınızı daxil edin"
                    className="mt-2"
                    onChange={(value) => {
                      handleChange("surname", value);
                    }}
                  />
                  {formErrors.surname && (
                    <div className="text-danger mt-2">{formErrors.surname}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    size="lg"
                    placeholder="Email daxil edin"
                    className="mt-2"
                    onChange={(value) => {
                      handleChange("email", value);
                    }}
                  />
                  {formErrors.email && (
                    <div className="text-danger mt-2">{formErrors.email}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="subject">Mövzu</label>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    size="lg"
                    placeholder="Mövzu daxil edin"
                    className="mt-2"
                    onChange={(value) => {
                      handleChange("subject", value);
                    }}
                  />
                  {formErrors.subject && (
                    <div className="text-danger mt-2">{formErrors.subject}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="description">Mesaj</label>
                  <Input
                    as="textarea"
                    name="description"
                    rows={5}
                    id="description"
                    size="lg"
                    placeholder="Mesajınızı daxil edin"
                    className="mt-2"
                    onChange={(value) => {
                      handleChange("description", value);
                    }}
                  />
                  {formErrors.description && (
                    <div className="text-danger mt-2">
                      {formErrors.description}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Göndər
                </button>
                {contact.error && (
                  <div className="text-danger mt-2">
                    {contact.error.message}
                  </div>
                )}
              </form>
            </div>
            <div className="col-12 col-lg-4 mt-3 mt-lg-0">
              <div className="card shadow-sm">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <FaMapMarkerAlt
                      className="me-2"
                      size={35}
                      color="#241f65"
                    />
                    <h2
                      style={{
                        color: "var(--blue)",
                      }}
                      className="fw-bold"
                    >
                      Ofis
                    </h2>
                  </div>
                  <h5 className="fw-bold">Bakı ş. Azərbaycan</h5>
                </div>
              </div>
              <div className="card shadow-sm mt-3">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <FaPhoneAlt className="me-2" size={35} color="#241f65" />
                    <h2
                      style={{
                        color: "var(--blue)",
                      }}
                      className="fw-bold"
                    >
                      Zəng
                    </h2>
                  </div>
                  <h5 className="fw-bold">+994 55-661-90-54</h5>
                </div>
              </div>
              <div className="card shadow-sm mt-3">
                <div className="card-body d-flex flex-column  align-items-center">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <FaEnvelope className="me-2" size={35} color="#241f65" />
                    <h2
                      style={{
                        color: "var(--blue)",
                      }}
                      className="fw-bold"
                    >
                      E-Mail
                    </h2>
                  </div>
                  <h5 className="fw-bold">info@azhome.azinfo@azhome.az</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ContactContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    contact: state.contact,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postContact: (data) => dispatch(postContact(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
