class DashboardPage{
    selectorsList() {
        const selectors = {
            "dashboardButton": "[href='/web/index.php/dashboard/index']"
        }
        return selectors

    }
    accessDashboardPage(){
        cy.visit('/dashboard/index')

    }

    
}

export default DashboardPage