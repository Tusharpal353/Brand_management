const jsonServer = require('json-server');


import multer from 'multer';

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    let date = new Date();
    let imageFilename = `${date.getTime()}_${file.originalname}`;
    req.body.imageFilename = imageFilename; // Add filename to request body
    cb(null, imageFilename);
  }
});

// Create a multer middleware to handle the file upload
const bodyParser = multer({ storage: storage }).any();

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

// Use body parser to handle multipart/form-data and add createdAt to the request body
server.use(bodyParser);

// Custom POST /products route to handle additional logic
server.post('/products', (req, res, next) => {
  let date = new Date();
  req.body.createdAt = date.toString(); // Add createdAt to the request body
  next(); // Pass to the default router to handle the request
});

// Use default router
server.use(router);

// Start the server
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
