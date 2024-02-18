const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  //relacionar con company ID
  sequelize.define(
    "Patient",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      nMember:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
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
        field:'lastname',
      },
      phone:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      address:{
        type: DataTypes.JSON,
        allowNull:true,
        //corregir antes de producción
      },
      geoCoding:{
        type:DataTypes.JSON,
        allowNull:true,
      },
      status:{
        type:DataTypes.ENUM,
        allowNull:false,
        values:[
          "Active",
          "Inactive"
        ]        
      },
      medicalHistory:{
        type: DataTypes.TEXT,
        allowNull: true,
        //la historia clinica debe estar relacionada a otro modelo con sus respectivas props (alergias, medicamentos suministrados, etc...) POST por cada registro con su respectivo post put delete y get by date
        //allowNull true, ya que al principio estará vacía
      },
      image:{
        type: DataTypes.STRING,
        allowNull:true,
        //allowNull true, ya que el paciente puede NO elegir una imagen si quiere, en ese caso deberia cargarse una por defecto
      }
    },
    {
      timestamps: false,
    }
  );
};