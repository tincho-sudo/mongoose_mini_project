const mongoose = require("mongoose");
const app = require("./app");

const { PORT, MONGODB_URI } = require("./config/env");

mongoose.connect(MONGODB_URI, () => "Connected to db");

const port = PORT || process.env.PORT || 3000; 
// podria omitirla y agregar el PORT del env en el app.listen directamente,
// pero asi creo que no omito posibles errores (primero revisa el env, despues, en caso de error,
// el asignado al proceso (que deberia ser el mismo que el del env) y por ultimo uno especifico)

app.listen(port, () => console.log(`App listening on port ${port}!`));