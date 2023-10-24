export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { authorization: true },
        body:
         {
             id: '1',
             first: 'test',
             lastname: 'asfewr',
             age: 23,
             currency: 'RUB',
             country: 'Russia',
             city: 'Moscow',
             username: 'admin213',
             avatar: 'https://koshka.top/uploads/posts/2021-12/1640316382_1-koshka-top-p-narisovannikh-kotikov-1.jpg',
         },
    });
};

declare global {
    namespace Cypress {
      interface Chainable {
        updateProfile(firstname: string, lastname: string): Chainable<void>;
        resetProfile(profileId: string): Chainable<void>;
      }
    }
  }
