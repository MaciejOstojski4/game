import * as mongoose from 'mongoose';

export const CardsSchema = new mongoose.Schema({
  meta: {
    brand: String,
    model: String,
    production: Number,
  },
  spec: {
    horsePower: Number,
    displacement: Number,
    weight: Number,
    cylinders: Number,
    velocity: Number,
    acceleration: Number,
    fuelConsumption: Number,
  },
  category: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
});

export const CardCategorySchema = new mongoose.Schema({
  symbol: String,
  title: String,
});
