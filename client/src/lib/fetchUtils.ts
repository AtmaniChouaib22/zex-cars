import axios from "axios";

//fetchAvailableCars
const fetchAvailableCars = async () => {
  const response = await axios.get("http://localhost:3000/api/cars-av", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// login

const login = async (loginData: any) => {
  const response = await axios.post(
    "http://localhost:3000/api/login",
    loginData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

//sell car

const sellCar = async (carData: any, file: File) => {
  const formData = new FormData();

  // Append all carData properties to formData
  for (const key in carData) {
    formData.append(key, carData[key]);
  }

  // Append file to formData
  formData.append("image", file);

  const response = await axios.post(
    "http://localhost:3000/api/sellcar",
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

//register user

const register = async (userData: any) => {
  const response = await axios.post(
    "http://localhost:3000/api/register",
    userData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

//fetch user deals (buy/sell)

const fetchUserDeals = async () => {
  const response = await axios.get("http://localhost:3000/api/mydeals", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

//user avatar

const fetchUserAvatar = async (file: File) => {
  const formData = new FormData();
  formData.append("avatar", file);
  const response = await axios.post(
    "http://localhost:3000/api/avatar",
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

export {
  fetchAvailableCars,
  login,
  sellCar,
  register,
  fetchUserDeals,
  fetchUserAvatar,
};
