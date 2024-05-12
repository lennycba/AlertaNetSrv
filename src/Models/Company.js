const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    //crear referencia a mobiles, staff, y pacientes

    sequelize.define(
      "Company",
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: UUIDV4,
          allowNull: false,
        },
        name:{
            type:DataTypes.STRING,
        },
        city:{
            type:DataTypes.STRING,
        },
        province:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.STRING
        },
        website:{
            type: DataTypes.STRING
        },
        image:{
            type: DataTypes.STRING
        },
        subcription:{
            type: DataTypes.ENUM,
            values:[
                "Bronce",
                "Silver",
                "Gold",
                "Diamond"
            ]
        }
      },
      {
        timestamps: false,
      }
    );
  };