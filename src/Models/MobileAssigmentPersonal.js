// models/MobileAssignmentPersonal.js
const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "MobileAssignmentPersonal",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      mobileAssignmentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "MobileAssignment",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      personalId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Personal",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};
