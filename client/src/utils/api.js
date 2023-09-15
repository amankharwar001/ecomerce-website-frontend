import axios from "axios";

const headers = {
  Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_DEV_URL + url,
      { headers } // Pass headers directly
    );
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error or handle it accordingly
  }
};

export const  makePaymentRequest=axios.create({
  baseURL:process.env.REACT_APP_DEV_URL,
  headers : {
    Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
  }
})