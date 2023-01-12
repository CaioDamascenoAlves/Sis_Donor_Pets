const dbConfig = require('./db.config');

describe('Database Configuration', () => {
	beforeAll(() => {
		dotenv.config({path: './src/.env'});
	  });
  it('deve definir a string de conexão usando dotenv', () => {
    expect(dbConfig.local.localUrlDatabse).toBe(process.env.MONGO_URI);
  });
});
