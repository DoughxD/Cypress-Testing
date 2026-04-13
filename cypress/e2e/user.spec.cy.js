import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import MyInfoPage from '../pages/mytInfoPage'
import MenuPage from '../pages/menuPage'

const Chance = require('chance') 


const chance = new Chance()
const loginPage = new LoginPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()
describe('Orange HRM Tests', () =>{

  it('my info change', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    menuPage.accessPage()
    myInfoPage.changePersonalDetails(chance.first(), chance.last(), chance.last())
    myInfoPage.changeEmployeeDetails(chance.integer({ min: 1, max: 7 }), chance.cpf(),  chance.cpf(), '2030-05-10', '1994-05-14', 'Brazilian', 'Married')
    myInfoPage.saveInfo()
  })

})





