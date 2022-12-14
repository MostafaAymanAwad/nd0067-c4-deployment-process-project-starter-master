import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed
export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: String(process.env.POSTGRES_PASSWORD),
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
 // port : Number(process.env.PORT),
  //database_port : Number(process.env.DATABASE_PORT),
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  accessKeyId : process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey : process.env.AWS_SECRET_ACCESS_KEY,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};

/*export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  //username: "postgres",
  password: `${process.env.POSTGRES_PASSWORD}`,
  //password: "12345",
  database: process.env.POSTGRES_DB,
  //database: "udagram",
  host: process.env.POSTGRES_HOST,
  //dbport: Number(process.env.DB_PORT),
  //port: Number(process.env.PORT),
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};*/
