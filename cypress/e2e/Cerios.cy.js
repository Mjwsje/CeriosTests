/// <reference types="Cypress" />

describe('Smoketest', function() 
{
 
it('registration and login of user',function() {
    cy.visit('/auth/register')
    cy.contains('Customer registration')

    //registratie
    cy.getBySel('first-name').type('Maarten')
    cy.getBySel('last-name').type('Solinger')
    cy.getBySel('dob').type('1980-07-29')
    cy.getBySel('street').type('Teststraat')
    cy.getBySel('postal_code').type('1122AA')
    cy.getBySel('city').type('Amersfoort')
    cy.getBySel('state').type('Utrecht')
    cy.getBySel('country').select('Netherlands (the)')
    cy.getBySel('phone').type('0612534567')
    
    //functie om willekeurig email adres aan te maken
    var getRandomEmailForDomain = function(domain) {
    var randomString = Math.random().toString(36).substring(7)
    var email = randomString + '@' + domain
    return email
}
    var inputDomain = 'domain.xx'; 
    var emailAdd = getRandomEmailForDomain (inputDomain)

    
    cy.getBySel('email').type(emailAdd)
    cy.getBySel('password').type('Snafu01.')
    cy.getBySel('register-submit').click()

    //intercepts voegen meer flake toe, dan ze wegnemen
    // cy.intercept('POST','https://api.practicesoftwaretesting.com/users/register').as('registerUser')
    // cy.wait('@registerUser')

    //inloggen
    cy.contains('Login')
    cy.getBySel('email').type(emailAdd)
    cy.getBySel('password').type('Snafu01.')
    cy.getBySel('login-submit').click()

    // cy.intercept('POST', 'https://api.practicesoftwaretesting.com/users/register/Login').as('account')
    // cy.wait('@account')

    cy.getBySel('page-title').contains('My account')
})
})
 
 
