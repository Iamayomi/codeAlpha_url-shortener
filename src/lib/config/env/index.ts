export const customEnvs = {
  env: process.env.NODE_ENV as "development" | "production" | "test",

  port: process.env.PORT as string,

  mongo_url: process.env.MONGO_URL as string,

  baseUrlProd: process.env.BASEURLPROD as string,

  baseUrlDev: `http://localhost:${process.env.PORT}` as string,

  baseUrl: (process.env.NODE_ENV === "development" ? `http://localhost:${process.env.PORT}/api/v1` : process.env.BASEURLPROD) as string,
};
