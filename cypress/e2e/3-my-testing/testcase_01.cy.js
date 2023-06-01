/// <reference types="cypress" />

describe("Test case 01", () => {
    before(function() {
        cy.log("Before Hooks");
        cy.visit("https://google.com");
    })

    after(function() {
        cy.log("After Hooks");
    })
    
    it('Visit page 01', () => {
        cy.get('#APjFqb').type('Cypressss');
        cy.get('.FPdoLc > center > .gNO89b').click();
    });
})

describe("Test case 01", () => {
    before(function() {
        cy.log("Before Hooks");
        cy.visit("https://google.com");
    })

    after(function() {
        cy.log("After Hooks");
    })
    
    it('Visit page 02', () => {
        cy.get('#APjFqb').type('Cypressss');
        cy.get('.FPdoLc > center > .gNO89b').click();
    });
})