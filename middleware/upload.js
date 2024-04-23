const multer = require('multer');


// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  },
});

// Multer instance with storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
