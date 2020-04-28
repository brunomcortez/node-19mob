const UserModel = require("../model/Users");
const userModel = new UserModel();
const createToken = require('../utils/createToken');

class Auth {
  validate(req, res) {
    const { email, password } = req.body;
    const conditions = [
      { field: 'email', operator: '==', value: email},
      { field: 'password', operator: '==', value: password}
    ]

    userModel
      .getBy(conditions) // .getBy({email, password})
      .then((users) => {
        if (users.empty) {
          res.status(401).send({ message: "Usuario nao autorizado" });
          return;
        }

        res.send({token: createToken({id: users.docs[0].id})});
        // res.json(users.docs[0].data());
      })
      .catch((error) => {
        res.status(500).send(error);
        console.error(error);
      });
  }
}

module.exports = Auth;
