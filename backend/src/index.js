import dotenv from 'dotenv';
import { app } from './app.js';
import { connectDB } from './db/index.js';

dotenv.config();

connectDB()
  .then(() => {
    app.listen(3002, () => {
      console.log('Server is running on port 3002');
    });
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
