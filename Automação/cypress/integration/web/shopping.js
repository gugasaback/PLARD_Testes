import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the Advantage Online Shopping website', () => {
    cy.visit('https://advantageonlineshopping.com/#/');
});

When('I search for {string}', (product) => {
    cy.get('#searchBar').type(product);
    cy.get('#searchBtn').click();
});

When('I add the product to the cart', () => {
    cy.get('.product').first().click();
    cy.get('#addToCart').click();
});

Then('I should see the product in the cart on the payment screen', () => {
    cy.get('#cart').click();
    cy.get('.cart-product').should('exist');
});