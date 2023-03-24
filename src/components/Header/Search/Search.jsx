import { useState } from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$containsi]=${query}`
  );

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-feild">
        <input
          type="text"
          autoFocus
          placeholder="Search For Products"
          value={query}
          onChange={onChange}
        />
        <MdClose
          onClick={() => {
            setShowSearch(false);
          }}
        />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img src={item.attributes.img.data.attributes.url} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
