module.exports = {
  production: {
    username: 'verus-adm',
    password: '20821495a.',
    database: 'verus-usuario',
    host: 'verusfantasy.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};