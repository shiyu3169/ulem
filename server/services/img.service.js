module.exports = function(app) {
  var fs = require('fs');
  const multer = require('multer');
  const upload = multer({ dest: './build/static/media/upload' });

  const imgModel = require('../models/img/img.model.server');
  const eventModel = require('../models/event/event.model.server');

  // Upload image
  app.post('/api/img/upload', upload.single('file'), (req, res) => {
    const event = req.query['event'];
    console.log(event);
    const image = req.file;

    const callbackUrl = req.headers.origin + '/admin';
    const img = {
      name: image.path,
      data: '',
      mimetype: image.mimetype
    };
    fs.readFile(img.name, async (err, data) => {
      img.data = data;
      const newImg = await imgModel.createImg(img);
      await eventModel.updateOne({ _id: event }, { $set: { img: newImg._id } });
      fs.unlink(img.name, () => {
        res.redirect(callbackUrl);
      });
    });
  });
};
