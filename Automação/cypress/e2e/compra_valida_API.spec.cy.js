describe('Combined UI and API Tests', () => {
    it('should search for a product, add it to the cart, and validate API response', () => {

        // Teste da UI
        cy.visit('https://advantageonlineshopping.com/#/');
        cy.get('input[name="mobile_search"]').click().type('laptop{enter}');
        cy.get('#7').click();
        cy.get('button[name="save_to_cart"]').click();
        cy.get('#checkOutPopUp').click();

        // Teste da API
        cy.request('GET', 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=Laptops')
            .its('status')
            .should('eq', 200);
    });
});