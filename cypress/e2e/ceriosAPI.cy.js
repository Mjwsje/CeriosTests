/// <reference types="Cypress" />

// describe('weather API test', () => {
//   it('fails', () => {
    // cy.request('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}', {failOnStatusCode: false}).as('Request')
    // cy.get('@Request').then((users) => {
    //   expect(users.status).to.eq(401)

    describe('weather API test', () => {
  it('fails', () => {
    cy.request('http://api.openweathermap.org/geo/1.0/direct?q=Utrecht,NL&limit=2&appid=f4f64a4522d26512210dacb7e6c9fcfa',).as('Request')
    cy.get('@Request').then((Request) => {
      expect(Request.status).to.eq(200)
      
    })
  })
})

