class MyInfoPage{
    selectorsList(){
        const  selectors = {
            
            "firstNameField": ".orangehrm-firstname[placeholder='First Name']",
            "middleNameField":"[placeholder='Middle Name']",
            "lastNameField": ".orangehrm-lastname[placeholder='Last Name']",
            "textInputActive": ".oxd-input--active",
            "boxInputGroup": ".oxd-input-group",
            "downFillInput":".bi-caret-down-fill",
            "typeSubmit": "[type='submit']"

        }
    return selectors

    }
    changePersonalDetails(firstname, middlename, lastname){
        
        cy.get(this.selectorsList().firstNameField).clear().type(firstname)
        cy.get(this.selectorsList().middleNameField).clear().type(middlename)
        cy.get(this.selectorsList().lastNameField).clear().type(lastname)
    }

    changeEmployeeDetails(employeeId, otherId,driversLicenseNumber, licenseExpiryDate, dateofBirth, Nationality,maritalStatus){

        cy.get(this.selectorsList().textInputActive).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().textInputActive).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().textInputActive).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().textInputActive).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().textInputActive).eq(7).clear().type(dateofBirth)
    
        cy.get(this.selectorsList().boxInputGroup).eq(8).click().contains(Nationality).click()
        cy.get(this.selectorsList().boxInputGroup).eq(9).click().contains(maritalStatus).click()
        cy.get('.oxd-radio-input').eq(1).click()

    }

    saveInfo(){
        cy.get(this.selectorsList().typeSubmit).eq(0).click()

    }
    /* 
     */
    
}

export default MyInfoPage