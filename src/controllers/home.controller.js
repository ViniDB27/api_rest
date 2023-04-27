class HomeController {
  index(req, res) {
    res.json({ message: `Hello Word` });
  }
}

export default new HomeController();
