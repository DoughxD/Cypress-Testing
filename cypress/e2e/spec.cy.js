describe('.orangehrm tests', () => {

  const selectorsList = {
    usernameField: "[name ='username']",
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-title',
    wrongCredentialAlert: "[role='alert']"
  } 

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    
  })

  
  it.skip('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Adminn')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get("[role='alert']")

    
  })

})


