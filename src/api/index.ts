import axios from "axios";
import { Review } from "types";

export const getProducts = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
  return data;
};

export const getProduct = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/products/${id}`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postReview = async (id: string, reviews: Review[]) => {
  axios
    .patch(`${process.env.REACT_APP_API_URL}/products/${id}`, { reviews })
    .then(() => alert("리뷰 등록 !"))
    .catch((err) => console.error(err));
};

export const order = async (productId: string, cnt: number) =>
  axios
    .post(`${process.env.REACT_APP_API_URL}/order`, { productId, cnt })
    .then(() => alert("주문 성공 !"))
    .catch((err) => console.error(err));
