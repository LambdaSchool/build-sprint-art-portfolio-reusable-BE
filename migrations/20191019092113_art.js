
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();

      users
      .string('username', 32)
      .notNullable()
      .unique();
      users.string('password', 270000000).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
