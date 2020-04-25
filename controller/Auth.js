const UserModel = require("../model/Users");
const userModel = new UserModel();
class Auth {
  validate(req, res) {
    const { email, password } = req.body;

    userModel
      .getBy({email, password})
      .then((users) => {
        if (users.empty) {
          res.status(401).send({ message: "Usuario nao autorizado" });
          return;
        }

        res.json(users.docs[0].data());
      })
      .catch((error) => {
        res.status(500).send(error);
        console.error(error);
      });
  }
}

module.exports = Auth;
