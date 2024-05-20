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
      address: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      location: {
        type: DataTypes.JSON,
        allowNull: true,
        // unique: false,
      },
      patient_Id: {
        type: DataTypes.UUID,
        allowNull: false,
        //true por el momento
        references: {
          model: "Patients",
          key: "id",
        },
      },
      alert_type: {
        type: DataTypes.ENUM,
        values: ["Urgency", "Emergency", "Nursery", "Translate"],
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Pending", "Assigned", "On course", "Complete", "Aborted"],
        defaultValue: "Pending",
      },
      mobile_Id: {
        type: DataTypes.UUID,
        allowNull: true,
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
