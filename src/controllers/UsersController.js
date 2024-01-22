const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    const { name, email, password, isAdmin, adress } = request.body;

    const database = await sqliteConnection();
  }
}

module.exports = UsersController;