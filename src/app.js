// Import the Express framework
const express = require("express");
// Create an Express application
const app = express();
// Import the database connection from your db folder
require("./db/conn.js");

// Import the view engine (hbs)
const hbs = require("hbs");

// Import the 'path' module to work with file paths
const path = require("path");
// Define the path to your static files directory
const staticPath = path.join(__dirname, '../public');


// Define the path to your view engine (hbs)
const templatesPath = path.join(__dirname, '../templates');


// Define the path to your partials path
const partialsPath = path.join(__dirname, "../templates/partials");

// Registered the partials
hbs.registerPartials(partialsPath);


// Set the view engine to 'hbs' (Handlebars templating engine)
app.set("view engine", "hbs");

// Set the view engine  default folder name from views to templates
app.set("views", "templates/views");


// Serve static files from the defined directory
app.use(express.static(staticPath));






// Define the port where the server will listen. It uses the environment variable PORT if available,
// or defaults to port 8000 if not specified.
const port = process.env.PORT || 8000;

// Define a route for the root URL ("/"). When a user accesses the root URL,
// the server responds with a rendered "index" template.
app.get("/", (req, res) => {
    res.render("index");
})

// Define a duplicate route for the root URL ("/"). When a user accesses the root URL,
// the server responds with "Hello Shuaib".
app.get("/", (req, res) => {
    res.send("Hello Shuaib");
});


app.get("*", (req,res)=>{
    res.render("404", {
        errorMessage: "Opps"
    });
})
// Start the server, and listen on the specified port.
app.listen(port, () => {
    console.log(`Server started at port no ${port}`);
});
