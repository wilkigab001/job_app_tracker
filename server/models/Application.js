const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/Database");

module.exports = {
  Application: sequelize.define("applications", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    jobTitle: DataTypes.STRING,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    hiringManager: DataTypes.STRING,
    jobLink: DataTypes.STRING,
    company: DataTypes.STRING,
    rejected: DataTypes.BOOLEAN,
  }),
};
