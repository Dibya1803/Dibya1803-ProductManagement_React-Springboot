import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "../service/productService";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (id) {
      ProductService.getProductById(id)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ProductService.editProduct(product)
      .then((res) => {
        setMessage("Product updated successfully");
        navigate("/");
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
            <div className="card-header fs-3 text-center">Edit Product</div>
            {message && (
              <p className="fs-4 text-center text-success">{message}</p>
            )}
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                <button className="btn btn-primary w-100">
                  Update Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
