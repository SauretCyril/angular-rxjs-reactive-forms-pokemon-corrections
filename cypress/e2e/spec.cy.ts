import { upperCase } from "cypress/types/lodash"

describe('My First Test', () => {
  beforeEach('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Liste des pokemons :')
  })
  it('Shows some well known pokemons', () => {
    cy.visit('/')
    cy.contains('Magmar')
    cy.contains('Charmander')
    cy.contains('Carnivine')
    //cy.contains("UYIMUE")
  })

  it.only('add one pokemons', () => {
    cy.get('[formcontrolname="name"]').type("IYUM");
    cy.get('[formcontrolname="supertype"]')
    .clear()
    .type("PokeAlicia");
    cy.get('[formcontrolname="imageUrl"]').type("https://th.bing.com/th/id/R.4d9367f96e8d1d78bbeaed4c1d3cbcec?rik=6mLdeDtqZCQ2Sw&riu=http%3a%2f%2fpm1.narvii.com%2f6288%2f0b88fdf01d4b38e402c99385bdee55449c537f7d_hq.jpg&ehk=8hBCiqT3wozoq9Ocgz5P0nfMftcr1gGvhMqFakFV8e0%3d&risl=&pid=ImgRaw&r=0");
    cy.get("input[type='submit']").contains("Go").click();
    cy.wait(2000);
    cy.contains('IYUM');
  });


  
})
