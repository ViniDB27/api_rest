import Student from "../models/Student";

class HomeController {
  async index(req, res) {
    const student = await Student.create({
      firstname: "John",
      lastname: "Doe",
      email: "jhon@doe.com",
      age: 20,
      weight: 80.5,
      height: 1.85,
    });

    res.json(student);
  }
}

export default new HomeController();
