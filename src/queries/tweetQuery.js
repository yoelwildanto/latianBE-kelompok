const db = require("../models");
const Tweet = db.tweet;
const user = db.user;

const findUserQuery = async ({ id = null, username = null }) => {
    try {
      const params = {};
      if (id) params.id = id;
      if (username) params.username = username;
  
      const res = await user.findOne({
        include: db.user,
        where: {
          ...params,
        },
      });
      return res;
    } catch (err) {
      throw err;
    }
  };

  const createTweetsQuery = async (username, tweet) => {
    try {
      const res = await Tweet.create({
        username,
        tweet,
        tweet_create: new Date()
      });
      return res;
    } catch (err) {
      throw err;
    }
  };

  const findTweetsQuery = async () => {
    try {
      const res = await Tweet.findAll();
      return res;
    } catch (err) {
      throw err;
    }
  };
  

  module.exports = {
    findUserQuery,
    createTweetsQuery,
    findTweetsQuery
     };