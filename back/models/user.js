module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
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
  User.associate = (db) => {};
  return User;
};
