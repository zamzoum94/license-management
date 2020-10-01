const express = require('express');
const router = express.Router();
const { License } = require('../controllers');

router.get('/', License.getAllLicenses)
      .post('/', License.addLicense)

router.get('/:id', License.getOneLicense)
      .patch('/:id',License.updateLicense)
      .delete('/:id', License.deleteLicense);

module.exports = router;