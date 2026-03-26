describe('.orangehrm tests', () => {
  it.skip('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-title').contains('Dashboard')
    
  })

  
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('Adminn')
    cy.get('[name="password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.get("[role='alert']")

    
  })

})


