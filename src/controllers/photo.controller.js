class PhotoController {
  async index(req, res) {
    res.json({ ok: true });
  }
}

export default new PhotoController();
