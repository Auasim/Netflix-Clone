const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes")
const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://auasimnajar:aasim1234@netflix.04owqwk.mongodb.net/netflix?authSource=Netflix&authMechanism=SCRAM-SHA-1"

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI, {
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
    console.log("DB Connected")
});

app.use("/api/user", userRoutes)

app.listen(5000, console.log("server started on port 5000")
);


