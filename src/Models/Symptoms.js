const { DataTypes, UUIDV4, STRING } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Symptom",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      category: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          isValidCategory(value) {
            const validCategories = ["accident", "disease", "pregnancy", "poisoning"];
            if (!value.every(category => validCategories.includes(category))) {
              throw new Error("Invalid category");
            }
          },
        },
      },
      default: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      patientId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};