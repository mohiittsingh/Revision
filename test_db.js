const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/COursesellingweb_100xdevs")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ Connection Error:", err));

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

(async () => {
  await User.create({ email: "demo@example.com", password: "1234" });
  console.log("✅ User inserted successfully");
  mongoose.connection.close();
})();
