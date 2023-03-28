var express = require('express');
var router = express.Router();

var GetClinics = require('./clinics.js');

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/clinics", async (req, res, next) => {
  const patientsArray = await GetClinics();

  // console.log('Clinics: ', patients);
  res.json(patientsArray);
});

module.exports = router;
