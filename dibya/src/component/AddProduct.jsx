import React, { useState } from "react";
import ProductService from "../service/productService";

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();

    ProductService.saveProduct(product)
      .then((res) => {
        setMessage("Product Added Successfully");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header fs-3 text-center">Add Product</div>
            {message && (
              <p className="fs-4 text-center text-success">{message}</p>
            )}
            <div className="card-body">
              <form onSubmit={(e) => ProductRegister(e)}>
                <div className="mb-3">
                  <label className="form-label">Enter Product Name</label>
                  <input
                    type="text"
                    name="productName"
                    className="form-control"
                    onChange={handleChange}
                    value={product.productName}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Enter Product Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={handleChange}
                    value={product.description}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Product Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control"
                    onChange={handleChange}
                    value={product.price}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Product Status</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    onChange={handleChange}
                    value={product.status}
                  />
                </div>
                <button className="btn btn-primary w-100">Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
