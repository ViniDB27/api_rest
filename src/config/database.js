require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: process.env.DB_HOST ?? 'localhost',
  port: process.env.DB_PORT ?? 3306,
  username: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASS ?? 'root',
  database: process.env.DB_NAME ?? 'school',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
     timezone: 'America/Sao_Paulo',
  },
   timezone: 'America/Sao_Paulo',
}
