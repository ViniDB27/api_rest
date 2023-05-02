import Sequelize, { Model } from "sequelize";

export default class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        firstname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: [3, 255],
            msg: "First name must be between 3 and 255 characters",
          },
        },
        lastname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: [3, 255],
            msg: "Last name must be between 3 and 255 characters",
          },
        },
        email: {
          type: Sequelize.SMALLINT,
          defaultValue: "",
          unique: {
            msg: "Email already exists",
          },
          validate: {
            isEmail: {
              msg: "Invalid email",
            },
          },
        },
        age: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Age must be a number",
            },
          },
        },
        weight: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Weight must be a number",
            },
          },
        },
        height: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Height must be a number",
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
