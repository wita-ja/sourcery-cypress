import LoginPage from '../objects/loginPage';
const loginPage = new LoginPage()

import TimeLogging from '../objects/timeLogging';
const timeLogging = new TimeLogging()

import PageComponents from '../objects/pageComponents';
const pageComponents = new PageComponents()

describe('Sourcebooks login', function() {

    it('Should display validation for empty user after attempted loggin', function () {
        
        loginPage.visit();
        loginPage.getuserValidationIndicator().should('not.visible')
        pageComponents.getSubmitButton().click();
        loginPage.getuserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        loginPage.visit();
        loginPage.getLoginFieldUser().click({force:true});
        loginPage. getSpecificUserFromDropDown("Greta Ališauskienė").click();
        loginPage.getLoginfieldRole().click({force:true});
        loginPage.getUserRole("Team Lead").click();
        pageComponents.getSubmitButton().click();

        timeLogging.getUrl().should('include', '/time-logging');
        timeLogging.getPageTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTileForm().should('be.visible')
        pageComponents.getUserName().contains('Greta Ališauskiene');
        pageComponents.getTabsCount().should('have.length', 2);
        timeLogging.assertTodayDate().contains(new Date().getDate());
    })
})