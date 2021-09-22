var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', (req, res, next)=> {
  res.render('upload');
});

router.get('/test', (req, res, next) => {
  console.log("테스트 완료");
  res.json({
    message: "response 완료!!",
  });
});

router.post('/test2', (req, res, next) => {
  const {test, test2} = req.body;
  console.log(test);
  console.log(test2);
  res.json({
    message: "post 완료!!",
  });
});

module.exports = router;