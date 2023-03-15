import React, { useState, useEffect } from "react";
import ProfileInfoContainer from "./ProfileInfo.styles.js";
import { Input } from "rsuite";
import ImageUploader from "react-images-upload";

const ProfileUpdate = ({ data, updateUser, setLoading }) => {
  const [username, setUsername] = useState(data.username);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [avatar, setAvatar] = useState(null);
  const [location, setLocation] = useState(data.location);

  const onDrop = (pictureFiles) => {
    setAvatar(pictureFiles[0]);
  };

  const onSend = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("location", location);

    if (avatar) {
      formData.append("avatar", avatar);
    }

    updateUser(data.id, formData);

    // updateUser(data.id, {
    //   first_name: firstName,
    //   last_name: lastName,
    //   email: email,
    //   avatar: avatar,
    // });
  };

  return (
    <form onSubmit={onSend}>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            {/*<input*/}
            {/*  className="*/}
            {/*    form-control*/}
            {/*    form-control-file*/}
            {/*    border-0*/}
            {/*    shadow-none*/}
            {/*    rounded-0*/}
            {/*"*/}
            {/*  type="file"*/}
            {/*  id="avatar"*/}
            {/*/>*/}

            <label htmlFor="avatar" className=" fw-bold">
              Profil Şəkli
            </label>
            <ImageUploader
              withIcon={false}
              withPreview={true}
              buttonText="Şəkil seçin"
              onChange={onDrop}
              imgExtension={[".jpg", ".png", ".jpeg"]}
              maxFileSize={5242880}
              singleImage={true}
              name="avatar"
              id="avatar"
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="username">Ad</label>
            <Input
              type="text"
              value={username}
              onChange={(value) => {
                setUsername(value);
              }}
              id="username"
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              value={email}
              onChange={(value) => {
                setEmail(value);
              }}
              type="email"
              id="email"
            />
          </div>
        </div>
        <div className="col-12 mt-3 mt-md-0 col-md-6">
          <div className="form-group">
            <label htmlFor="phone">Telefon</label>
            <Input
              value={phone}
              disabled
              onChange={(value) => {
                setPhone(value);
              }}
              type="text"
              id="phone"
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="address">Ünvan</label>
            <Input
              value={location}
              onChange={(value) => {
                setLocation(value);
              }}
              type="text"
              id="address"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <button className="btn btn-success fw-bold px-4 py-2">Dəyiş</button>
      </div>
    </form>
  );
};

const ProfileInfo = ({ userData, updateUser, setLoading }) => {
  return (
    <ProfileInfoContainer>
      <div className="container">
        <div className="row">
          <div className="col-12 px-4">
            <h5 className="fw-bold">Hesab Məlumatları</h5>
            <hr />
            <ul className="p-0">
              <li className="d-flex mb-3 py-2 border-bottom justify-content-between align-items-center">
                <h6 className="fw-bold">Tarif</h6>
                <span className="text-warning fw-bold">Standart</span>
              </li>

              <li className="d-flex mb-3 py-2 border-bottom justify-content-between align-items-center">
                <h6 className="fw-bold">Qeydiyyat tarixi</h6>
                <span className="fw-bold">
                  {new Date(userData.date_joined).toLocaleDateString()}
                </span>
              </li>

              <li className="d-flex mb-3 py-2 border-bottom justify-content-between align-items-center">
                <h6 className="fw-bold">Toplam elanlar</h6>
                <span className="text-success fw-bold">0</span>
              </li>

              <li className="d-flex mb-3 py-2 border-bottom justify-content-between align-items-center">
                <h6 className="fw-bold">Aktiv Elanlar</h6>
                <span className="text-danger fw-bold">0</span>
              </li>
            </ul>
          </div>
          <div className="col-12 mt-3 px-4">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fw-bold">Şəxsi məlumatlar</h5>
            </div>
            <hr />
            <ProfileUpdate
              updateUser={updateUser}
              setLoading={setLoading}
              data={userData}
            />
          </div>
        </div>
      </div>
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
