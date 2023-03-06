import Product from "./Product/Product";

import "./Products.scss";
const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map(
          (
            item //this products?. is called optional Chaining if the products is falsy value then it will not execute the codes after it
          ) => (
            <Product key={item.id} id={item.id} data={item.attributes} />
          )
        )}
      </div>
    </div>
  );
};

export default Products;
