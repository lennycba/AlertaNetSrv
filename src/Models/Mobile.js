const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Mobile",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      companyId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      plateNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status:{
        type: DataTypes.ENUM,
        allowNull:false,
        values:[
            "On service",
            "On reparation",
            "Out of service",
        ],
        defaultValue: "On service"
      }
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};