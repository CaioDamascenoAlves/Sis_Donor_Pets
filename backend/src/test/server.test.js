const app = require('../app');
const httpMock = require('node-mocks-http');
const server = require('../../server');

describe('Server Configuration', () => {
    let serverInstance;

    beforeAll(() => {
        serverInstance = server.listen(process.env.PORT || 3000);
    });

    afterAll(() => {
        server.close();
    });

    it('should start the server on the correct port', () => {
        expect(server.listening).toBe(true);
    });
});
