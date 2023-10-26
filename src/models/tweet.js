// const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define(
      "tweet",
      {
        username: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        password:{
          type: Sequelize.STRING,
        }
      },
      {
        timestamps: false,
        tableName: "tweets",
      }
    );
  
    // user.associate = models =>{
    //     user.belongsTo(models.branch, {foreignKey: "branchId"})
    // }
  
    return user;
  };
  