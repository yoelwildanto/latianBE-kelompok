'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable("tweet",{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER
      },
      user_id:{
        type:Sequelize.INTEGER
      },
      tweet: {
        type:Sequelize.STRING
      },
      tweet_create:{
        type:Sequelize.DATE
      },
    })
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("tweet")

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
