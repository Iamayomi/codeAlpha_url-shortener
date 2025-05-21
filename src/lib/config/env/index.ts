export const customEnvs = {
  env: process.env.NODE_ENV as "development" | "production" | "test",

  port: process.env.PORT as string,

  mongo_Url: process.env.MONGO_URL as string,

  baseUrlProd: process.env.BASEURLPROD as string,

  baseUrlDev: `http://localhost:${process.env.PORT}` as string,

  baseUrl: (process.env.NODE_ENV === "development" ? `http://localhost:${process.env.PORT}` : process.env.BASEURLPROD) as string,
};
