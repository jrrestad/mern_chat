const express = require('express');
const cors = require('cors');
const SocketIo = require('socket.io');

const app = express();
const PORT = 8001;

require('./server/config/mongoose.config');
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));
// ExampleRoutes(app);

const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

const io = SocketIo(server);
io.on("connection", socket => {
  console.log(socket.id);
  socket.emit("welcome", "Hello there new person");
});
