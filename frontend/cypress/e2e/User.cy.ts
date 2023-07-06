import user from '../fixtures/user.json';

describe('BlogPost Tests', () => {
    before(() => {
        cy.login();
    })

    beforeEach(() => {
        cy.restoreLocalStorage();
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Create New User', () => {
        cy.getElement("header-create-user").click();
        cy.getElement("createUser-first-name").type(user.firstname);
        cy.getElement("createUser-last-name").type(user.lastname);
        cy.getElement("createUser-email").type(user.email);
        cy.getElement("createUser-password").type(user.password);
        cy.getElement("createUser-submit").click();

        cy.login();
    });

    it('Edit User', () => {
        cy.getElement("header-users").click();
        cy.getElement(user.email + "-edit", false).first().click();
        cy.getElement("editUser-first-name-edit").type( "-edit");
        cy.getElement("editUser-last-name-edit").type( "-edit");
        cy.getElement("editUser-email-edit").clear();
        cy.getElement("editUser-email-edit").type(user.email + "-edit");
        cy.getElement("editUser-submit").click();
    });

    it('Delete User', () => {
        cy.getElement("header-users").click();
        cy.getElement(user.email + "-editdelete",false).first().scrollIntoView().should('be.visible')
        cy.getElement(user.email + "-editdelete",false).first().click()
    
    })
})