const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
    const currentTime = new Date().toLocaleString();

    res.render("home", {
        time: currentTime
    });
});

// About page
app.get("/about", (req, res) => {
    res.render("about");
});

// Users page
app.get("/users", (req, res) => {
    const users = [
        {
            name: "Tata Cyril",
            email: "cyril@gmail.com",
            role: "Developer"
        },
        {
            name: "Peter",
            email: "pet@gmail.com",
            role: "Designer"
        },
        {
            name: "Withney",
            email: "wit@gmail.com",
            role: "Backend Developer"
        }
    ];

    res.render("users", {
        users: users
    });
});

// Start server
app.listen(PORT, () => {
    console.log("server is running on ${PORT}");
});