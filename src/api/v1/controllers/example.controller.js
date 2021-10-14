class ExampleController {
  async example(req, res) {
    try {
      return res.status(200).send("Hello world");
    } catch (error) {
      return res.status(500).send("error");
    }
  }
}

module.exports = new ExampleController();
