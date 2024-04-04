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

//fetch single available car

const fetchSingleCar = async (id: string) => {
  const response = await axios.get(`http://localhost:3000/api/cars-av/${id}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// buy car
const buyCar = async (car_id: string, payment_method: string) => {
  const response = await axios.post(
    "http://localhost:3000/api/buycar",
    { car_id, payment_method },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

//logout

const logout = async () => {
  const response = await axios.post(
    "http://localhost:3000/api/logout",
    {},
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

// admin fetch waiting cars

const fetchWaitingCars = async () => {
  const response = await axios.get("http://localhost:3000/api/waitingcars", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

//admin fetch pending deals

const fetchUnconfirmedDeals = async () => {
  const response = await axios.get(
    "http://localhost:3000/api/unconfirmeddeals",
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

//admin set car to available

const setCarToAvailable = async (id: string) => {
  const response = await axios.patch(
    "http://localhost:3000/api/setavailable",
    { id },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

//set car to rejected

const setCarToRefused = async (id: string) => {
  const response = await axios.patch(
    "http://localhost:3000/api/setrejected",
    { id },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

//confirm deal

const confirmDeal = async (id: string) => {
  const response = await axios.patch(
    "http://localhost:3000/api/confirmdeal",
    { id },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

//reject deal

const rejectDeal = async (id: string) => {
  const response = await axios.patch(
    "http://localhost:3000/api/rejectdeal",
    { id },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
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
  fetchSingleCar,
  buyCar,
  logout,
  fetchWaitingCars,
  fetchUnconfirmedDeals,
  setCarToAvailable,
  setCarToRefused,
  confirmDeal,
  rejectDeal,
};
