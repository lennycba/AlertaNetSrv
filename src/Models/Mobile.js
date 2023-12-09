const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Mobile",
    {
      ID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      driverId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: "Personal",
            key: "ID"
        }
      },
      nurseId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: "Personal",
            key: "ID"
        }
      },
      doctorId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: "Personal",
            key: "ID"
        }
      },
      status:{
        type: DataTypes.ENUM,
        allowNull:false,
        values:[
            "On service",
            "On reparation",
            "Out of service",
        ]
      }
    },
    {
      timestamps: false,
    }
  );
};