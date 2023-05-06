import Sequelize, { Model } from "sequelize";

export default class Photo extends Model {
  static init(sequelize) {
    super.init(
      {
        filename: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              msg: "Campo não pode ser vazio",
            },
          },
        },
        originalname: {
          type: Sequelize.STRING,
          validate: {
            notEmpty: {
              msg: "Campo não pode ser vazio",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "photos",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: "aluno_id" });
  }
}
