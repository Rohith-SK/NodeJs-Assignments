// routes.js

const fetchUsers = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" },
          { id: 3, name: "Charlie" },
        ]);
      }, 1000);
    });
  };
  
  const fetchProducts = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Phone", price: 800 },
          { id: 3, name: "Headphones", price: 100 },
        ]);
      }, 1000);
    });
  };
  
  // Handle different routes
  const handleRoutes = async (req, res) => {
    res.setHeader("Content-Type", "application/json"); // Set content type for JSON responses
  
    // Handle the root route
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome");
  
    // Handle the users route
    } else if (req.url === "/users") {
      if (req.method === "GET") {
        try {
          const users = await fetchUsers();
          res.writeHead(200, { 'Content-Type': 'application/json' }); // Set header for JSON
          res.end(JSON.stringify(users)); // Send users as JSON
        } catch (error) {
          res.writeHead(500, { 'Content-Type': 'application/json' }); // Set header for error response
          res.end(JSON.stringify({ error: "Failed to fetch users" }));
        }
      } else {
        // Return a 405 Method Not Allowed for unsupported methods
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("405 Method Not Allowed");
      }
  
    // Handle the products route
    } else if (req.url === "/products") {
      if (req.method === "GET") {
        try {
          const products = await fetchProducts();
          res.writeHead(200, { 'Content-Type': 'application/json' }); // Set header for JSON
          res.end(JSON.stringify(products)); // Send products as JSON
        } catch (error) {
          res.writeHead(500, { 'Content-Type': 'application/json' }); // Set header for error response
          res.end(JSON.stringify({ error: "Failed to fetch products" }));
        }
      } else {
        // Return a 405 Method Not Allowed for unsupported methods
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("405 Method Not Allowed");
      }
    } else {
      // Return 404 for undefined routes
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  };
  
  module.exports = handleRoutes;
  