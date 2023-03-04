import { useState, memo } from "react";
import { CollapseContainer, SearchBarContainer } from "./SearchBar.styles.js";
import "rsuite/dist/rsuite.min.css";
import { Input, InputNumber, InputPicker } from "rsuite";
import { BiSearch, BiSliderAlt } from "react-icons/bi";
import { Collapse } from "react-collapse";
import { useNavigate } from "react-router-dom";

const SearchFilter = ({
  handleFilterOptions,
  handleSearch,
  selectedCategory,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const data = ["Baku", "Absheron", "Sumgayit", "Xirdalan"].map((item) => ({
    label: item,
    value: item,
  }));
  const categories = [
    "Ustalar",
    "Fasad tikinti",
    "Elektrik",
    "Qapılar və pəncərələr",
  ].map((item) => ({
    label: item,
    value: item,
  }));

  const subCategories = ["Test1", "Test2", "Test3"].map((item) => ({
    label: item,
    value: item,
  }));

  return (
    <CollapseContainer>
      <div className="mt-2 shadow-sm p-3">
        <div className="row justify-content-center">
          <div className="col-12 mb-3">
            <InputPicker
              data={data}
              size={"lg"}
              className="select-picker"
              searchable={false}
              menuStyle={{
                zIndex: 2000,
                marginTop: "8px",
              }}
              placeholder="Şəhər seçin"
              style={{ width: "100%" }}
              onChange={(value) => {
                handleFilterOptions(value, "city");
              }}
            />
          </div>
          <div className="col-12">
            <InputPicker
              data={categories}
              size={"lg"}
              searchable={false}
              value={selectedCategory ? selectedCategory : null}
              className="select-picker"
              menuStyle={{
                zIndex: 2000,
                marginTop: "8px",
              }}
              placeholder="Kateqoriya seçin"
              style={{ width: "100%" }}
              onChange={(value) => {
                if (value) {
                  setIsSelected(true);
                } else {
                  setIsSelected(false);
                }
                handleFilterOptions(value, "category");
              }}
            />
          </div>
          {isSelected && (
            <div className="col-12 mt-3">
              <InputPicker
                data={subCategories}
                size={"lg"}
                searchable={false}
                className="select-picker"
                menuStyle={{
                  zIndex: 2000,
                  marginTop: "8px",
                }}
                placeholder="Alt kateqoriya seçin"
                style={{ width: "100%" }}
                onChange={(value) => {
                  handleFilterOptions(value, "category");
                }}
              />
            </div>
          )}
          <div className="col-lg-6">
            <InputNumber
              size={"lg"}
              className="mt-3"
              placeholder="Min qiymət"
              style={{ width: "100%" }}
              onChange={(value) => {
                handleFilterOptions(value, "minPrice");
              }}
            />
          </div>
          <div className="col-lg-6">
            <InputNumber
              size={"lg"}
              className="mt-3"
              placeholder="Max qiymət"
              style={{ width: "100%" }}
              onChange={(value) => {
                handleFilterOptions(value, "maxPrice");
              }}
            />
          </div>
          <div className="col-12 mt-3">
            <button
              onClick={() => {
                handleSearch();
              }}
              className="btn btn-primary w-100 search-btn"
            >
              <BiSearch className="me-2" size={25} />
              <span>Axtarış edin</span>
            </button>
          </div>
        </div>
      </div>
    </CollapseContainer>
  );
};

const SearchBar = ({ selectedCategory }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    city: "",
    category: selectedCategory ? selectedCategory : "",
    minPrice: 0,
    maxPrice: 0,
  });

  const handleFilterOptions = (value, name) => {
    setFilterOptions({ ...filterOptions, [name]: value });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    const newData = {
      value: searchValue,
      options: filterOptions,
    };
    navigate("/search", { state: newData });
  };

  return (
    <SearchBarContainer>
      <BiSearch onClick={handleSearch} className="search-icon" size={25} />
      <Input
        value={searchValue}
        style={{
          boxShadow: isOpened ? "0 0 0 0.2rem var(--blue)" : "none",
          "--webkit-box-shadow": isOpened ? "0 0 0 0.2rem var(--gold)" : "none",
          // border: border ? "3px solid var(--blue)" : "none",
        }}
        autoFocus={false}
        className="search-input"
        placeholder="Axtarış edin..."
        onChange={(value) => setSearchValue(value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <BiSliderAlt
        onClick={() => setIsOpened(!isOpened)}
        className="setting-icon"
        size={25}
      />
      <Collapse isOpened={isOpened}>
        <SearchFilter
          selectedCategory={selectedCategory}
          handleSearch={handleSearch}
          handleFilterOptions={handleFilterOptions}
        />
      </Collapse>
    </SearchBarContainer>
  );
};

export default memo(SearchBar);
