const http = require("http");
const handleRoutes = require("./routes/routes"); // Import the routes

// Create an HTTP server
const server = http.createServer((req, res) => {
  handleRoutes(req, res); // Delegate route handling to routes.js
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
