import axios from "axios";

const API_URL = "http://localhost:8080";

class ProductService {
  getAllProduct() {
    return axios.get(`${API_URL}/`);
  }

  getProductById(id) {
    return axios.get(`${API_URL}/${id}`);
  }

  deleteProduct(id) {
    return axios.delete(`${API_URL}/deleteProduct/${id}`);
  }

  editProduct(product) {
    return axios.post(`${API_URL}/editProduct`, product, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  saveProduct(product) {
    return axios.post(`${API_URL}/saveProduct`, product, {
    });
  }
}

export default new ProductService();
