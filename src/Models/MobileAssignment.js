// models/MobileAssignment.js
const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "MobileAssignment",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      mobileId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Mobile",
          key: "id",
        },
      },
      personId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Personal",
          key: "id",
        },
      },
      assignmentStart: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      assignmentEnd: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};
