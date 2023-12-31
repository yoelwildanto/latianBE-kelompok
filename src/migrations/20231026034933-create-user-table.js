'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("user",{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:Sequelize.INTEGER
      },
      username:{
        type:Sequelize.STRING
      },
      email: {
        type:Sequelize.STRING
      },
      password:{
        type:Sequelize.STRING
      },
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("user")

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
