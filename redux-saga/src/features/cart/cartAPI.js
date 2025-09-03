import axios from "axios";

// A mock function to mimic making an async request for data
export function fetchItems() {
  return axios.get(`http://localhost:8000/cart`);
}
export function addItem(item) {
  return axios.post(`http://localhost:8000/cart`, item);
}
// Put vs Patch
export function updateItem(id, updatedItem) {
  return axios.patch(`http://localhost:8000/cart/${id}`, updatedItem);
}
export function deleteItem(id) {
  return axios.delete(`http://localhost:8000/cart/${id}`);
}
