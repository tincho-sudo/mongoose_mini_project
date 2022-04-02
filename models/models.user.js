const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
//module.exports = mongoose.model('User', userSchema);
// Diferencia entre module.exports y exports -> module.exports refiere al objeto original (al schema en este caso)
// exports crea uno nuevo, y para que duplicaria un schema si todos tienen que ser iguales?
