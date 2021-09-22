import axios from "axios";

// Products
export const apiGetProducts = (url) => axios.get(url);

// // post
// export const apiPostSquatData = (data) =>
//   recordRequest.post("/squatdata", data);

// addToCart
export const apiPostAddCart = (url, cart) => axios.post(url, cart);

// // put
// export const apiPutSquatData = (data) =>
//   recordRequest.put(`/squatdata/${data.id}`, data);

// // delete
// export const apiDeleteSquatData = (id) =>
//   recordRequest.delete(`/squatdata/${id}`);
