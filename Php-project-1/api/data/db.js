const mongoose = require('mongoose');

const uri = `${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${uri}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error ${err}`);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected by app termination');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected by apptermination');
    process.exit(0);
  });
});

process.once('SIGUSR2', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected by apptermination');
    process.kill(process.pid, 'SIGUSR2');
  });
});
