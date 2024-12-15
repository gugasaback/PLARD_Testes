describe('API Tests', () => {
    it('should search for a product and validate response', () => {
        cy.request('GET', 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=Laptop')
            .its('status')
            .should('eq', 200);
    });

    it('should update the image of a product', () => {
        const userId = 'yourUser Id'; // Substitua pelo ID do usuário
        const source = 'newImageSource'; // Substitua pela nova imagem
        const color = 'color'; // Substitua pela cor

        cy.request('POST', `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`)
            .its('status')
            .should('eq', 200);
    });
});