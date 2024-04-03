const Car = require('../Models/CarSchema.js');
const Deal = require('../Models/DealSchema.js');
const mongoose = require('mongoose');
const CustomError = require('../Utils/errorMiddleware');
// Create a new car
const create_car = async (req, res, next) => {
  const {
    title,
    make,
    model,
    year,
    location,
    price,
    description,
    mileage,
    n_of_doors,
    n_of_seats,
    colour,
    fuel_type,
    fuel_tank_capacity,
    transmission,
    engine_capacity,
    gears,
  } = req.body;

  const image = req.file.filename;
  const owner = req.user._id;
  if (!owner) {
    throw new CustomError('you must be logged in to add a car', 400);
  }
  if (!image || !title || !make || !model || !year || !price) {
    throw new CustomError('missing required fields', 400);
  }

  try {
    const newCar = new Car({
      title,
      make,
      model,
      year: +year,
      location,
      owner,
      price: +price,
      description,
      image: image,
      mileage: +mileage,
      n_of_doors: +n_of_doors,
      n_of_seats: +n_of_seats,
      colour,
      fuel_type,
      fuel_tank_capacity: +fuel_tank_capacity,
      transmission,
      engine_capacity: +engine_capacity,
      gears: +gears,
    });
    await newCar.save().then((car) => {
      res.json({ message: 'Car sell request sent to admin', car: car });
    });
  } catch (error) {
    next(error);
  }
};

//buy car

const buy_car = async (req, res, next) => {
  const { car_id, payment_method } = req.body;
  const buyer = req.user._id;
  //info checking
  if (!mongoose.Types.ObjectId.isValid(car_id)) {
    throw new CustomError('Invalid car_id', 400);
  }
  if (!buyer) {
    throw new CustomError('you must be logged in to buy a car', 400);
  }
  if (!car_id) {
    throw new CustomError('internal server error', 500);
  }
  if (payment_method !== 'cash' && payment_method !== 'credit_card') {
    throw new CustomError('invalid payment method', 400);
  }
  //buying process
  try {
    const car = await Car.findById(car_id);
    if (!car) {
      return res.json({ message: 'Car not found' });
    }
    const seller = car.owner;
    const newDeal = new Deal({
      buyer,
      seller,
      car: car_id,
      payment_method,
    });
    await newDeal.save().then((deal) => {
      res.json({ message: 'Car buying request in process', deal: deal });
    });
  } catch (error) {
    next(error);
  }
};

//get all cars for user

const get_available_cars = async (req, res, next) => {
  let cars = [];
  try {
    const id = req.user ? req.user._id : null;
    if (!id) {
      cars = await Car.find({
        status: 'available',
      });
    } else {
      cars = await Car.find({
        status: 'available',
        owner: { $ne: id },
      });
    }
    if (cars.length === 0) {
      return res.json({ message: 'No available cars right now' });
    } else {
      return res.json(cars);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//get single car

const get_single_car = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new CustomError('Invalid car id', 400);
  }
  try {
    const car = await Car.findById(id);
    if (!car) {
      return res.json({ message: 'Car Not found' });
    } else {
      return res.json(car);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { create_car, buy_car, get_available_cars, get_single_car };
