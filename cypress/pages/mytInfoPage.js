class MyInfoPage{
    selectorsList(){
        const  selectors = {
            
            "firstNameField": ".orangehrm-firstname[placeholder='First Name']",
            "middleNameField":"[placeholder='Middle Name']",
            "lastNameField": ".orangehrm-lastname[placeholder='Last Name']",
            "textInputActive": ".oxd-input--active",
            "boxInputGroup": ".oxd-input-group",
            "downFillInput":".bi-caret-down-fill"

        }
    return selectors

    }
    myInfoChange(){
        
    cy.get(this.selectorsList().firstNameField).clear().type('Jonas')
    cy.get(this.selectorsList().middleNameField).clear().type('Silva')
    cy.get(this.selectorsList().lastNameField).clear().type('Cerqueira')
    cy.get(this.selectorsList().textInputActive).eq(3).clear().type('15615')
    cy.get(this.selectorsList().textInputActive).eq(4).clear().type('5691958419')
    cy.get(this.selectorsList().textInputActive).eq(5).clear().type('aqui é o 5')
    cy.get(this.selectorsList().textInputActive).eq(6).clear().type('2000-01-01')
    cy.get(this.selectorsList().textInputActive).eq(7).clear().type('2000-01-01')
    
    cy.get(this.selectorsList().boxInputGroup).eq(8).click().contains('Brazilian').click()
    cy.get(this.selectorsList().boxInputGroup).eq(9).click().contains('Married').click()
    cy.get('.oxd-radio-input').eq(1).click()
    }
}

export default MyInfoPage