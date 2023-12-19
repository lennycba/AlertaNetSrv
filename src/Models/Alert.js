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
        unique: false,
      },
      patient_Id: {
        type: DataTypes.UUID,
        allowNull: true,
        //true por el momento
        references: {
          model: "Patients",
          key: "id",
        },
      },
      alert_tipe: {
        type: DataTypes.ENUM,
        values: ["Urgency", "Emergency", "Normal atention", "Translate"],
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Pending", "Assigned", "On course", "Complete", "Aborted"],
      },
      mobile_Id: {
        type: DataTypes.UUID,
        references: {
          model: "Mobiles",
          key: "id",
        },
      },
    },
    {
      timestamps: true,
    }
  );
};
