import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProductCard from "../ProductCard/ProductCard.component.jsx";
import getAllAnnouncements from "../../actions/announcement/getAllAnnouncements.action.js";
import { InfinitySpin } from "react-loader-spinner";

const MyAnnouncements = ({ userId, allAnnouncements, getAllAnnouncements }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllAnnouncements();
  }, []);

  useEffect(() => {
    if (allAnnouncements.success) {
      console.log(allAnnouncements.data);
      const filteredAnnouncements = allAnnouncements.data.filter(
        (announcement) => announcement.ad_author.id === userId
      );
      setAnnouncements(filteredAnnouncements);
    }
  }, [allAnnouncements.success]);

  useEffect(() => {
    if (allAnnouncements.pending) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [allAnnouncements.pending]);

  console.log(announcements);

  return (
    <div>
      {loading ? (
        <div className="py-5 d-flex justify-content-center align-items-center">
          <InfinitySpin width="200" color="#034efd" />
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            {announcements.map((announcement, index) => (
              <div
                key={announcement.id}
                className="col-9 col-lg-6 col-xl-4 mb-3"
              >
                <ProductCard
                  product={{
                    id: announcement.id,
                    title: announcement.ad_title,
                    price: announcement.ad_attribute_price,
                    image: announcement.ad_main_image,
                    date: new Date(
                      announcement.created_at
                    ).toLocaleDateString(),
                    views: announcement.ad_views,
                    location: announcement.ad_city,
                    isNew: announcement.ad_is_new,
                    isVip: announcement.is_vip,
                    isPlatinum: announcement.is_platin,
                    priceAgreement: announcement.ad_price_agreement,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  allAnnouncements: state.announcement.allAnnouncements,
}); // mapStateToProps

const mapDispatchToProps = (dispatch) => ({
  getAllAnnouncements: () => dispatch(getAllAnnouncements()),
}); // mapDispatchToProps

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(MyAnnouncements));
