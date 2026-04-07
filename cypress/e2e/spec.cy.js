import userData from '../fixtures/users/userData.json'
import selectorsList from '../fixtures/users/selectorsList.json'
import LoginPage from '../pages/loginPage.js'


const loginPage = new LoginPage()


  it.only('Login with class', () =>{
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)



  })
  
  // it.skip('Login - Fail', () => {
  //   cy.get('[name="username"]').type(userData.userFail.username)
  //   cy.get('[name="password"]').type(userData.userFail.password)
  //   cy.get('.oxd-button').click()
  //   cy.get("[role='alert']")

    
  // })

  // it.skip('fields - Success', () => {
  //   cy.visit('/auth/login')
  //   cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
  //   cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
  //   cy.get(selectorsList.loginButton).click()
  //   cy.get(selectorsList.myInfoButton).click()
  //   cy.get(selectorsList.firstNameField).clear().type('Jonas')
  //   cy.get(selectorsList.middleNameField).clear().type('Silva')
  //   cy.get(selectorsList.lastNameField).clear().type('Cerqueira')
  //   cy.get(selectorsList.textInputActive).eq(3).clear().type('15615')
  //   cy.get(selectorsList.textInputActive).eq(4).clear().type('5691958419')
  //   cy.get(selectorsList.textInputActive).eq(5).clear().type('aqui é o 5')
  //   cy.get(selectorsList.textInputActive).eq(6).clear().type('2000-01-01')
  //   cy.get(selectorsList.textInputActive).eq(7).clear().type('2000-01-01')
    
  //   cy.get(selectorsList.boxInputGroup).eq(8).click().contains('Brazilian').click()
  //   cy.get(selectorsList.boxInputGroup).eq(9).click().contains('Married').click()
  //   cy.get('.oxd-radio-input').eq(1).click()
    
   
  //})





