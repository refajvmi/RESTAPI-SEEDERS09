const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define(
        "Users",{
            //Copy
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
              },
              firstName: {
                type: DataTypes.STRING
              },
              lastName: {
                type: DataTypes.STRING
              },
              email: {
                type: DataTypes.STRING
              },
              createdAt: {
                allowNull: false,
                type: DataTypes.DATE
              },
              updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
              }
        },
        {
            tableName: "users"
        }
    )
    return Users;
}