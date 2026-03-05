/// <reference types="Cypress" />

//Cypress runner kan niet tegen statuscode 401
// describe('weather API test', () => {
//   it('fails', () => {
    // cy.request('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}', {failOnStatusCode: false}).as('Request')
    // cy.get('@Request').then((users) => {
    //   expect(users.status).to.eq(401)

    describe('weather api test', () => {
  it('geocode Utrecht', () => {
    cy.request('http://api.openweathermap.org/geo/1.0/direct?q=Utrecht,NL&limit=2&appid=f4f64a4522d26512210dacb7e6c9fcfa',).as('Request')
    cy.get('@Request').then((Request) => {
      expect(Request.status).to.eq(200)
        // "lat": 52.080985600000005,
        // "lon": 5.12768396945229,
        // "country": "NL",
        // "state": "Utrecht"
    })
  })

  it('works????', () => {
    cy.request('https://api.openweathermap.org/data/2.5/weather?lat=52.08&lon=5.12&appid=f4f64a4522d26512210dacb7e6c9fcfa',).as('Request')
    cy.get('@Request').then((Request) => {
      expect(Request.status).to.eq(200)
//       body
// base
// "stations"
// clouds
// {all: 5}
// cod
// 200
// coord
// {lon: 5.12, lat: 52.08}
// dt
// 1772671892
// id
// 2745912
// main
// {temp: 281.05, feels_like: 279.41, temp_min: 280.36, temp_max: 282.02, pressure: 1023, …}
// name
// "Utrecht"
// sys
// {type: 2, id: 2032407, country: 'NL', sunrise: 1772691433, sunset: 1772731513}
// timezone
// 3600
// visibility
// 10000
// weather
// [{…}]
// wind
// {speed: 2.6, deg: 135, gust: 4.69}
      
    })
  })
    })

