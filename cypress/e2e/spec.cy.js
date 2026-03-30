import userData from '../fixtures/users/userData.json'

describe('.orangehrm tests', () => {


  const selectorsList = {
    usernameField: "[name ='username']",
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-title',
    dashboardGrid: '.orangehrm-dashboard-grid',
    wrongCredentialAlert: "[role='alert']"
  } 


  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.dashboardGrid)
    
  })

  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get('[name="username"]').type(userData.userFail.username)
    cy.get('[name="password"]').type(userData.userFail.password)
    cy.get('.oxd-button').click()
    cy.get("[role='alert']")

    
  })

})


