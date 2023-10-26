const {createTweetsQuery,findTweetsQuery, findUserQuery} = require('../queries/tweetQuery');


const createTweetsService = async (username, tweet) => {
    try {
    //   const check = await findUserQuery({ username });
  
    //   if (check) throw new Error("Branch already exists");
  
      const res = await createTweetsQuery(username, tweet);
  
      return res;
    } catch (err) {
      throw err;
    }
  };

  const findTweetsServices = async () => {
    try {
      const res = await findTweetsQuery();
      return res;
    } catch (err) {
      throw err;
    }
  };



  const findUserServices = async () => {
    try {
      const res = await findUserQuery();
      return res;
    } catch (err) {
      throw err;
    }
  };



  module.exports = {
    createTweetsService,
    findUserServices, 
    findTweetsServices
  };