describe("User App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    const nameInput = () => cy.get("input[name=name]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const tosInput = () => cy.get("input[name=tos]");
    const submitbtn = () => cy.get("input[type=submit]")

    it("can type", () => {
        nameInput()
        .should("have.value", "")
        .type("my name")
        .should("have.value", "my name")

        emailInput()
        .should("have.value", "")
        .type("my@email")

        passwordInput()
        .should("have.value", "")
        .type("my password")

    })

    it("can tos", () => {
        tosInput()
        .click()
    })

    it("can submit", () => {
        nameInput()
        .type("name")

        emailInput()
        .type("email@email")

        passwordInput()
        .type("password")

        tosInput()
        .click()

        submitbtn()
        .click()
    })

    it("form validation works", () => {
        tosInput()
        .click()
        .click()

        cy.contains("Must accept the TOS.").should("exist")
    })
















})