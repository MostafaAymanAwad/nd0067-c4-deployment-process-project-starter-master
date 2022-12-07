import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  // username: `${process.env.POSTGRES_USERNAME}`,
  username: "postgres",
  //password: `${process.env.POSTGRES_PASSWORD}`,
  password: "12345",
  //database: process.env.POSTGRES_DB,
  database: "udagram",
  host: process.env.POSTGRES_HOST,
  dbport: Number(process.env.DB_PORT),
  port: Number(process.env.PORT),
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
