const express = require('express');
const router = express.Router();
const {findTweetsController, createTweetsController} = require('../controllers/tweetsControllers');

router.get('/tweet', findTweetsController);
router.post('/tweet', createTweetsController);

module.exports = router