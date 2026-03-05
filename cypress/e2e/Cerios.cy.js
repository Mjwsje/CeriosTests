/// <reference types="Cypress" />

//functie om willekeurig email adres aan te maken
    var getRandomEmailForDomain = function(domain) {
    var randomString = Math.random().toString(36).substring(7)
    var email = randomString + '@' + domain
    return email
}
    var inputDomain = 'domain.xx'; 
    var emailAdd = getRandomEmailForDomain (inputDomain)

describe('Smoketest', function() 
{
 
it('registratie en login van gebruiker',function() {
    cy.visit('/auth/register')
    cy.contains('Customer registration')

    registratie();
    inloggen();
    
})
it('Artikel zoeken, selecteren, winkelmand, checkout',function() {
    
    zoeken();
    select();
    homepage();
    categorie();
    afrekenen();
})
})

function afrekenen() {
    cy.getBySel('cart-quantity').click();
    cy.getBySel('proceed-1').contains('Proceed to checkout').click();

    cy.getBySel('email').type(emailAdd);
    cy.getBySel('password').type('Snafu01.');
    cy.getBySel('login-submit').contains('Login').click();
    cy.getBySel('proceed-2').contains('Proceed to checkout').click();

    cy.getBySel('proceed-3').contains('Proceed to checkout').click();

    cy.getBySel('payment-method').select('Cash on Delivery');
    cy.getBySel('finish').contains('Confirm').click();
}

function categorie() {
    cy.getBySel('nav-categories').click();
    cy.getBySel('nav-power-tools').click();
    cy.getBySel('product-name').contains('Circular Saw').click();
    cy.getBySel('add-to-cart').click();
}

function homepage() {
    cy.getBySel('nav-home').click();
}

function select() {
    cy.getBySel('product-name').contains('Thor Hammer').click();
    cy.getBySel('add-to-cart').click();
}

function zoeken() {
    cy.visit('/');
    cy.getBySel('search-query').type('Thor hammer');
    cy.getBySel('search-submit').click();
}

function inloggen() {
    cy.contains('Login');
    cy.getBySel('email').type(emailAdd);
    cy.getBySel('password').type('Snafu01.');
    cy.getBySel('login-submit').click();

    // cy.intercept('POST', 'https://api.practicesoftwaretesting.com/users/register/Login').as('account')
    // cy.wait('@account')
    cy.getBySel('page-title').contains('My account');
}

function registratie() {
    cy.getBySel('first-name').type('Maarten');
    cy.getBySel('last-name').type('Solinger');
    cy.getBySel('dob').type('1980-07-29');
    cy.getBySel('street').type('Teststraat');
    cy.getBySel('postal_code').type('1122AA');
    cy.getBySel('city').type('Amersfoort');
    cy.getBySel('state').type('Utrecht');
    cy.getBySel('country').select('Netherlands (the)');
    cy.getBySel('phone').type('0612534567');

    cy.getBySel('email').type(emailAdd);
    cy.getBySel('password').type('Snafu01.');
    cy.getBySel('register-submit').click();
}
