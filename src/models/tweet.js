// const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const tweet = sequelize.define(
      "tweet",
      {
        user_id: {
          type: Sequelize.INTEGER,
        },
        tweet: {
          type: Sequelize.STRING,
        },
        createdAt:{
          type: Sequelize.DATE,
        },
        updatedAt:{
          type: Sequelize.DATE,
        }
      },
      {
        timestamps: true,
        tableName: "tweet",
      }
    );
  
    // user.associate = models =>{
    //     user.belongsTo(models.branch, {foreignKey: "branchId"})
    // }
  
    return tweet;
  };
  