import app from './app'

const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => {
    console.log(`backend de EventHall up and running on PORT ${PORT} 🚀`);
  });

