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
      patientId: {
        type: DataTypes.UUID,
        allowNull: false,
        //true por el momento
        references: {
          model: "Patient",
          key: "id",
        },
      },
      alertType: {
        type: DataTypes.ENUM,
        values: ["urgency", "emergency", "nursery", "translate"],
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["pending", "assigned", "on_course", "complete", "aborted"],
        defaultValue: "pending",
      },
      mobileId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "Mobile",
          key: "id",
        },
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};
