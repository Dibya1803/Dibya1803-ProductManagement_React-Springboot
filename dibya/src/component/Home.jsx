import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import productService from "../service/productService";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    init();
  }, []); // Empty dependency array to run only on component mount

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
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
        console.log(error);
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
                    {productList.map((product, index) => (
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

export default Home;
