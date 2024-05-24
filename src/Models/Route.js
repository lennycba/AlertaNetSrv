const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Route",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      startPoint: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          isPointValid(value) {
            if (!value.place || !value.geoCoding.lat || !value.geoCoding.lng) {
              throw new Error("startPoint must contain place, lat y lng");
            }
          },
        },
      },
      endPoint: {
        type: DataTypes.JSON,
        allowNull: false,
        validate: {
          isPointValid(value) {
            if (!value.place || !value.geoCoding.lat || !value.geoCoding.lng) {
              throw new Error("endPoint must contain place, lat y lng");
            }
          },
        },
      },
      alertId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
};
