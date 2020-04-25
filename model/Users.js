const BaseModel = require("./BaseModel");

class Users extends BaseModel {
  constructor() {
    super();
  }

  get(id) {
    return this.db.collection("users").doc(id).get();
  }

  // getBy(email, password) {
  //   return this.db
  //     .collection("users")
  //     .where("email", "==", email)
  //     .where("password", "==", password)
  //     .get();
  // }

  getBy(conditions) {
    let query = this.db.collection("users");

    conditions.forEach(({ field, operator , value }) =>
            query = query.where(field, operator, value)
        );

    // for (let name in conditions) {
    //   query = query.where(name, "==", conditions[name]);
    // }

    return query.get();
  }

}

module.exports = Users;
