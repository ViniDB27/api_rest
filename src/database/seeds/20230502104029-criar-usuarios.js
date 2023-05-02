const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "jhonseed1@doe.com",
          password_hash: await bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "John Doe",
          email: "jhonseed2@doe.com",
          password_hash: await bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "John Doe",
          email: "jhonseed3@doe.com",
          password_hash: await bcrypt.hashSync("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
