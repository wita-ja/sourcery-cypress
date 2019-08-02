class LoginPage {
  visit() {
    cy.visit('/');
  }

  getUserValidationIndicator() {
    return cy.get('.Select.not-valid');
  }

  getSubmitButton() {
    return cy.get('[type="submit"]');
  }

  getSpecificUserFromDropDown(userName) {
    return cy.get(`[aria-label="${userName}"]`);
  }
}

export default LoginPage;
