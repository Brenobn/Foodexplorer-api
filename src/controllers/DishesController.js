const knex = require("../database/knex");

class DishesController {
  async create(request, response) {
    const { name, description, price, category, ingredients } = request.body;
    const { user_id } = request.params;

    const [dish_id] = await knex("dishes").insert({
      name,
      description,
      price,
      category
    });

    const ingredientsInsert = ingredients.map(name => {
      return {
        dish_id,
        name
      }
    });

    await knex("ingredients").insert(ingredientsInsert);

    response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishes").where({ id }).first();
    const ingredients = await knex("ingredients").where({ dish_id: id }).orderBy("name");

    return response.json({
      ...dish,
      ingredients
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.json();
  }
}

module.exports = DishesController;