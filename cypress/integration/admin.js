describe('Sourcebooks login', function() {

    it('Should be able to login with role Admin', function () {

        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Saulė Raudytė"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.get('.user-info__title').contains('Saule Raudyte');
        cy.get('.main-nav').find('li').should('have.length', 6);
        cy.get('.main-nav__link--active').should('have.attr', 'href', '/time-logging');
    
        cy.get('.main-nav__link--active').should('have.css', 'color').and('eq', 'rgb(64, 76, 237)');
    })

})