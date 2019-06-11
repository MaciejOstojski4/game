import * as mongoose from 'mongoose';

export interface Card {
  meta: {
    brand: String;
    model: String;
    production: Number;
  };
  spec: {
    horsePower: Number;
    displacement: Number;
    weight: Number;
    cylinders: Number;
    velocity: Number;
    acceleration: Number;
    fuelConsumption: Number;
  };
  category: string[];
}

export interface CardCategory {
  symbol: String;
  title: String;
}
