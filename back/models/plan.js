module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    "Plan",
    {
      email: {},
      nickname: {},
      username: {},
      password: {},
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Plan.associate = (db) => {};
  return Plan;
};
