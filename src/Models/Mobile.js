const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {

  //CREAR MODELO COMPANY
  //corregir nombre de modelo por "Vehicle"
  //agregar propiedad company ID
  sequelize.define(
    "Mobile",
    {
      id: {
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
            key: "id"
        }
      },
      nurseId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: "Personal",
            key: "id"
        }
      },
      doctorId:{
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: "Personal",
            key: "id"
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