module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://localhost/home-rock-gym",
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./database/seeds" }
  },

  testing: {
    client: "postgresql",
    connection: "postgres://localhost/home-rock-gym-testing",
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./database/seeds" },
    ssl: true
  }
};