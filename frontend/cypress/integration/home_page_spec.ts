describe('Testing Wikipedia', () => {
	it('I can search for content', () => {
		cy.visit('/');
		cy.contains('Click Me');
		cy.contains('This is Home page');
	});
});
