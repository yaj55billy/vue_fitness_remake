import axios from "axios";
import { useRoute } from 'vue-router';


// Products
export const apiGetProducts = (num = 1) => {
  const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${num}`;
  
  return axios.get(url);
}
export const apiGetProduct = () => {
  const route = useRoute();
  const { id } = route.params;
  const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`;
  return axios.get(url);
} 

// addToCart
export const apiPostAddCart = (cart) => {
  const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`;
  return axios.post(url, cart);
}

// // put
// export const apiPutSquatData = (data) =>
//   recordRequest.put(`/squatdata/${data.id}`, data);

// // delete
// export const apiDeleteSquatData = (id) =>
//   recordRequest.delete(`/squatdata/${id}`);
