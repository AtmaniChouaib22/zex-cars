const Car = require('../Models/CarSchema.js');
const Deal = require('../Models/DealSchema.js');

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
    const err = new Error('you must be logged in to add a car');
    err.status = 400;
    return next(err);
  }
  if (!image || !title || !make || !model || !year || !price) {
    const err = new Error('missing required fields');
    err.status = 400;
    return next(err);
  }

  try {
    const newCar = new Car({
      title,
      make,
      model,
      year,
      location,
      owner,
      price,
      description,
      image,
      mileage,
      n_of_doors,
      n_of_seats,
      colour,
      fuel_type,
      fuel_tank_capacity,
      transmission,
      engine_capacity,
      gears,
    });
    await newCar.save().then((car) => {
      res.json({ message: 'Car added', car: car });
    });
  } catch (error) {
    const err = new Error('error adding car');
    err.status = 400;
    next(err);
  }
};

//buy car

const buy_car = async (req, res, next) => {
  const { car_id, payment_method } = req.body;
  const buyer = req.user._id;
  //info checking
  if (!buyer) {
    const err = new Error('you must be logged in to buy a car');
    err.status = 400;
    return next(err);
  }
  if (!car_id) {
    const err = new Error('missing required fields');
    err.status = 400;
    return next(err);
  }
  if (payment_method !== 'cash' && payment_method !== 'credit card') {
    const err = new Error('invalid payment method');
    err.status = 400;
    return next(err);
  }
  //buying process
  try {
    const car = await Car.findById(car_id);
    if (!car) {
      const err = new Error('car not found');
      err.status = 404;
      return next(err);
    }
    const seller = car.owner;
    const newDeal = new Deal({
      buyer,
      seller,
      car: car_id,
      payment_method,
    });
    await newDeal.save().then((deal) => {
      res.json({ message: 'Car bought', deal: deal });
    });
  } catch (error) {
    const err = new Error('error buying car');
    err.status = 400;
    next(err);
  }
};

module.exports = { create_car, buy_car };
