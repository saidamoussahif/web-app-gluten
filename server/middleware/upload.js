const multer = require('multer');

const upload = multer({
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/.(jpg|jpeg|png|webp)$/)) {
      return cb(new Error('Please upload a valid image file'))
    }
    cb(undefined, true)
  }
})

module.exports = upload;