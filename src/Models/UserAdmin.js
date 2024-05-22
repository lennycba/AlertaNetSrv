const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "UserAdmin",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field:'lastname',
      },
      phone:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      role:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "super_admin"
      },
      image:{
        type: DataTypes.STRING,
        allowNull:true,
      }
    },
    {
      timestamps: true,
      freezeTableName: true,      
    }
  );
};