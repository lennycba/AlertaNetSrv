const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Alert",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      patient_Id: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model: "Patients",
            key: "id"
        }
      },
      alert_tipe: {
        type: DataTypes.ENUM,
        values:[
            "Urgency",
            "Emergency",
            "Normal atention",
        ],
        allowNull: false,
      },
      status:{
        type: DataTypes.ENUM,
        values: [
            "Pending",
            "Assigned",
            "On course",
            "Complete",
            "Aborted",
        ],
      },
      mobile_Id:{
        type: DataTypes.UUID,
        references:{
            model: "Mobiles",
            key: "id"
        }
      }
    },
    {
      timestamps: true,
    }
  );
};