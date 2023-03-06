import "./Category.scss";
import { useNavigate } from "react-router-dom";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories &&
          categories.data &&
          categories.data.map((item) => (
            <div
              key={item.id}
              className="category"
              onClick={() => navigate(`category/${item.id}`)}
            >
              <img alt="" src={item.attributes.img.data.attributes.url} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
