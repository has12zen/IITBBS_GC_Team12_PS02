const dotenv=require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const app=require('./app');

const port=process.env.PORT || 5000;
(async ()=>{
  const data=await mongoose.connect(process.env.MONGODB_URL);
  console.log(data);
})();

const server=app.listen(port,()=>{
  console.log(`App running on port ${port}`);
});

server.on('unhandledRejection', error => {
    console.log('Test error:', error);
});
