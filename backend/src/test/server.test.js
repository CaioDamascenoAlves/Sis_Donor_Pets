const app = require('../app');
const httpMock = require('node-mocks-http');
const server = require('../../server');

describe('Server Configuration', () => {
    let listen;

    beforeAll(() => {
        listen = jest.spyOn(app, 'listen');
    });

    afterAll(() => {
        listen.mockRestore();
    });

    it('should start the server on the correct port', () => {
        const request = httpMock.createRequest({
            method: 'GET',
            url: '/',
        });
        const response = httpMock.createResponse();

        server(request, response);

        expect(listen).toHaveBeenCalledWith(process.env.PORT || 3000, expect.any(Function));
    });
});
