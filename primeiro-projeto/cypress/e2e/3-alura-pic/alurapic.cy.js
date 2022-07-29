describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    })

    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Nome is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Usuario required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');

    })
    
    it('verifica mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('jacqueline');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    
    })

    it('verifica senha invalida', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    
    })

    it('verifica nome errado', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('e');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');

    })

    it('verifica nome errado', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="fullName"]').type('e');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');

    })

    it('verifica username invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('e');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');

    })

    it('verifica username valido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('ana');
        cy.contains('button', 'Register').click();
        cy.contains('small', 'User available').should('be.visible');

    })

    it.only('fazer login de usuario valido', () => {
        cy.get('input[formcontrolname="userName"]').type('flavio');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').click();
        cy.contains('a', '(Logout)').should('be.visible');
    })

    
    it.only('fazer login de usuario invalido', () => {
        cy.get('input[formcontrolname="userName"]').type('jacqueline');
        cy.get('input[formcontrolname="password"]').type('1234');
        cy.get('button[type="submit"]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })

})