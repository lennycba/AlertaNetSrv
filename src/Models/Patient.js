const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Patient",
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
      membershipNumber:{
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dataComplete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM,
        values: ["male", "female"],
        allowNull: true,
      },
      DNI: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      bloodType: {
        type: DataTypes.ENUM,
        values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        allowNull: true,
      },
      healthInsurance: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profession: {
        type: DataTypes.STRING,
        allowNull: true,
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