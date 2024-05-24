const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Company",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        allowNull: false,
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyType: {
        type: DataTypes.ENUM,
        values: ["private", "public"],
        allowNull: false,
      },
      companySize: {
        type: DataTypes.ENUM,
        values: ["small", "medium", "large"],
        allowNull: false,
      },
      membershipType: {
        type: DataTypes.ENUM,
        values: ["free", "paid"],
        allowNull: false,
      },
      membershipStatus: {
        type: DataTypes.ENUM,
        values: ["up_to_date", "defaulter"],
        defaultValue: "up_to_date",
      },
      createdBy: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      geoCoding: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      companyLogo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,      
    }
  );
};
