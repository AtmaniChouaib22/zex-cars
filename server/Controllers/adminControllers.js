const Car = require('../Models/CarSchema.js');
const Deal = require('../Models/DealSchema.js');

// get all cars waiting for validation
const get_pending_cars = async (req, res) => {
  try {
    const cars = await Car.find({ status: 'pending' });
    res.json(cars);
  } catch (error) {
    next(error);
  }
};

//get all car deals waiting for validation
const get_unconfirmed_deals = async (req, res) => {
  try {
    const deals = await Deal.find({ confirmed: 'unconfirmed' }).populate('car');
    res.json(deals);
  } catch (error) {
    next(error);
  }
};

//set car status to available sell requests
const set_available_car = async (req, res) => {
  const car_id = req.body.id;
  try {
    const car = await Car.findByIdAndUpdate(
      car_id,
      { status: 'available' },
      { new: true },
    );
    res.json(car);
  } catch (error) {
    next(error);
  }
};
// set car status to refused sell requests
const set_rejected_car = async (req, res) => {
  const car_id = req.body.id;
  try {
    const car = await Car.findByIdAndUpdate(
      car_id,
      { status: 'rejected' },
      { new: true },
    );
    res.json(car);
  } catch (error) {
    next(error);
  }
};

//set car status to confirmed  buying request

const confirm_deal = async (req, res, next) => {
  const deal_id = req.body.id;
  try {
    await Deal.findByIdAndUpdate(deal_id, { confirmed: 'confirmed' });
    const deal = await Deal.findById(deal_id).populate('car');
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    if (deal.car) {
      deal.car.status = 'sold';
      await deal.car.save();
    }
    res.json(deal);
  } catch (error) {
    next(error);
  }
};
// reject deal
const reject_deal = async (req, res) => {
  const deal_id = req.body.id;
  try {
    const deal = await Deal.findByIdAndUpdate(deal_id, {
      confirmed: 'rejected',
    });
    if (!deal) {
      return res.status(404).json({ message: 'Deal not found' });
    }
    await deal.save();
    res.json(deal);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get_pending_cars,
  get_unconfirmed_deals,
  set_available_car,
  set_rejected_car,
  confirm_deal,
  reject_deal,
};
