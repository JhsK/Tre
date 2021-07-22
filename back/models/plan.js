const Sequelize = require("sequelize");

module.exports = class Plan extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(40),
          allowNull: false,
        },
        start: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        end: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        dateValue: {
          type: Sequelize.DATEONLY,
          allowNull: false,
        },
        planDoneCheck: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Plan",
        tableName: "Plan",
        paranoid: false,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Plan.belongsTo(db.User);
  }
};
