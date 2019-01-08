const config = {
  //mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/wed-site',
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:admin1234@ds251284.mlab.com:51284/wed-site',
  port: process.env.PORT || 8000,
};

export default config;