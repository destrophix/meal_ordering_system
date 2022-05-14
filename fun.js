const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Amit:amit@cluster0.76p0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
