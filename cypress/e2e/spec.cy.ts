/// <reference types="cypress" />
describe('Dashboard tests', () => {
	it('should visit and get a list of pokemon', () => {
		cy.visit('/');

		cy.wait(500);

		cy.get(
			'#dashboard > div.container > div > div.px-0.col-md-7 > div:nth-child(1)'
		).contains('bulbasaur');
	});

	it('should get pokemon details when clicking a pokemon', () => {
		cy.visit('/');

		cy.wait(500);

		cy.get(
			'#dashboard > div.container > div > div.px-0.col-md-7 > div:nth-child(1)'
		).click();

		cy.get(
			'#dashboard > div.container > div > div.details-panel.py-2.text-primary.col > div.text-capitalize.fs-5.fw-bold'
		).contains('bulbasaur');
	});
});
