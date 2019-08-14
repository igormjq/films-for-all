require('dotenv').config()
import app from '../app'

const PORT = process.env.PORT;

app.listen(
  PORT, 
  () => console.log(`🚀 Server up and running on port ${PORT}`)
);