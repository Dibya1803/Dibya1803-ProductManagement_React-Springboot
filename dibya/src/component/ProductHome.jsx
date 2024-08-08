import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/productService";

const ProductHome = () => {
  const [productList, setProductList] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        console.log("Response:", res);
        const contentType = res.headers["content-type"];
        if (contentType && contentType.indexOf("application/json") !== -1) {
          console.log(res.data);
          if (Array.isArray(res.data)) {
            setProductList(res.data);
          } else {
            console.error("Expected an array but got:", res.data);
            setProductList([]);
          }
        } else {
          console.error("Expected JSON response but got:", res);
          setProductList([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setProductList([]);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMessage("Product Deleted Successfully");
        init();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">
              All Product List
              {message && (
                <p className="fs-4 text-center text-success">{message}</p>
              )}
            </div>
            <div className="card-body">
              {productList.length === 0 ? (
                <p className="text-center">No products available</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl No</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(productList) &&
                      productList.map((product, index) => (
                        <tr key={product.id}>
                          <td>{index + 1}</td>
                          <td>{product.productName}</td>
                          <td>{product.description}</td>
                          <td>{product.price}</td>
                          <td>{product.status}</td>
                          <td>
                            <Link
                              to={"editProduct/" + product.id}
                              className="btn btn-sm btn-primary"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => deleteProduct(product.id)}
                              className="btn btn-sm btn-danger ms-1"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
