const server = require('../../server');

// Definindo um conjunto de testes para a configuração do servidor
describe('Server Configuration', () => {
    let serverInstance;

    //Inicia o servidor antes de todos os testes
    beforeAll(() => {
        serverInstance = server.listen(process.env.PORT || 3000);
    });
    
    //Para o servidor antes de todos os testes
    afterAll(() => {
        server.close();
    });

    //Teste se o servidor está escutando na porta correta
    it('should start the server on the correct port', () => {
        expect(server.listening).toBe(true);
    });
});
