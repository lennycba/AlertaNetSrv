const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Patient",
    {
      ID: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      role:{
        type: DataTypes.STRING,
        default:"Patient",
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
      address:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull:true,
        //corregir antes de producción
      },
      medicalHistory:{
        type: DataTypes.TEXT,
        allowNull: true,
        //allowNull true, ya que al principio estará vacía
      },
      image:{
        type: DataTypes.STRING,
        allowNull:true,
        //allowNull true, ya que el paciente puede NO elegir una imagen si quiere, en ese caso deberia cargarse una por defecto
      }
    },
    {
      timestamps: true,
    }
  );
};