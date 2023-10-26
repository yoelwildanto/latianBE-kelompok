const {createTweetsService, findTweetsServices,findUserServices} = require('../services/tweetServices');

const findTweetsController = async (req, res) => {
    try {
      const result = await findTweetsServices();
      return res.status(200).json({
        messaga: "success",
        data: result,
      });
    } catch (err) {
      throw err;
    }
  };

const createTweetsController = async (req, res) => {
    try {
      const { username, tweet } = req.body;
      const result = await createTweetsService(username, tweet);
      return res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err.message);
    }
  };



  module.exports = {
    findTweetsController,
    createTweetsController,
   
  };