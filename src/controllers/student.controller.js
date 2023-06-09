import Student from "../models/Student";

class StudentController {
  async store(req, res) {
    const student = await Student.create(req.body);

    res.json(student);
  }

  async index(req, res) {
    const students = await Student.findAll({
      attributes: [
        "id",
        "firstname",
        "lastname",
        "email",
        "age",
        "weight",
        "height",
      ],
      order: [
        ["id", "DESC"],
        [Photo, "id", "DESC"],
      ],
      include: {
        model: Photo,
        attributes: ["originalname", "filename"],
      },
    });

    res.json(students);
  }

  async show(req, res) {
    const student = await Student.findByPk({
      id: req.params.id,
      attributes: [
        "id",
        "firstname",
        "lastname",
        "email",
        "age",
        "weight",
        "height",
      ],
      order: [
        ["id", "DESC"],
        [Photo, "id", "DESC"],
      ],
      include: {
        model: Photo,
        attributes: ["originalname", "filename"],
      },
    });

    res.json(student);
  }

  async update(req, res) {
    const student = await Student.findByPk({ id: req.params.id });
    student.update(req.body);

    res.json(student);
  }

  async delete(req, res) {
    const student = await Student.findByPk({ id: req.params.id });
    student.destroy();

    res.json(student);
  }
}

export default new StudentController();
