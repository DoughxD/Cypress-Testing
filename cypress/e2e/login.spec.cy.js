import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'


const Chance = require('chance') 

const loginPage = new LoginPage()
const chance = new Chance()


describe('Orange HRM Tests', () =>{
  it('Login with class', () =>{
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)



  })
  
  it.only('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithWrongUser(userData.userFail.username, userData.userFail.password)

    
   })

})  




