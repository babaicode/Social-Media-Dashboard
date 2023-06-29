import { Options } from '@mikro-orm/core';
import * as dotenv from "dotenv";
import { User } from 'src/user/user.entity';

dotenv.config();

const config: Options = {
  type: 'postgresql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as unknown as number,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  entities: [User],
  migrations: {
    pathTs: './migrations',
    path: './dist/migrations',
  },
};
export default config;
