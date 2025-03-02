const { default: mongoose } = require("mongoose");

export function dbConnect() {
  mongoose
    .connect(
      'MONGO_URI=mongodb+srv://reem:reem1234@cluster0.odjmw.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => console.log("Connected to DB"))
    .catch((err) => ("Error connecting to DB", err));
}
