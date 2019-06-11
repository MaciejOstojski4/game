import { Seeder } from 'mongo-seeding';

const config = {
  database: {
    host: '127.0.0.1',
    port: 27017,
    name: 'car_game',
  },
  dropDatabase: true,
};

const seeder = new Seeder(config);
seeder
  .import(collections)
  .then(() => {
    // Do whatever you want after successful import
  })
  .catch(err => {
    // Handle errors
  });

export interface SeederCollection {
  name: string;
  documents: object[];
}
