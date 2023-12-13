const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Personal",
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
      },
      phone:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      role:{
        type: DataTypes.ENUM,
        allowNull: false,
        values:[
            "Admin",
            "Operator",
            "Driver",
            "Nurse",
            "Doctor",
        ],
      },
      status:{
        type: DataTypes.ENUM,
        allowNull:false,
        values:[
            "On duty",
            "Absent",
            "On vacation leave",
        ]
      },
      image:{
        type: DataTypes.STRING,
        allowNull:true,
      }
    },
    {
    timestamps: false,
    freezeTableName: true,      
    }
  );
};