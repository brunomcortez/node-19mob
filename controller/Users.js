const UsersModel = require('../model/Users');
const usersModel = new UsersModel();
const cryptoPassword = require('../utils/cryptoPassword');

class Users {
  get(req, res) {
    const { id } = req.params;

    usersModel.get(id)
      .then((user) => {
        if (!user.exists) {
          res.status(404).send({message: 'User not found'});
        }
        console.log(user);
        res.json(user.data());
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send(error);
      });

    // res.send(`Eu recebi o parametro ${req.params.id}`);
  }

  // add(req, res) {
  //   const data = {
  //     ...req.body,
  //     password: cryptoPassword(req.body.password)
  //   }
  // }

}

module.exports = Users;
