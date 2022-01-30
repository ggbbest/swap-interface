describe('Swap', () => {
  beforeEach(() => {
    cy.visit('/swap')
  })

  it('list introduction and selection should be disabled', () => {
    cy.get('#swap-currency-output .open-currency-select-button').click()
    cy.get('#list-introduction-choose-a-list').should('not.exist')
    cy.get('#list-row-tokens-croswap-eth').should('not.exist')
    cy.get('#currency-search-change-list-button').should('not.exist')
  })

  it('list swap.c4ei.net list should be used as default', () => {
    cy.get('#swap-currency-output .open-currency-select-button').click()
    //TODO: change to swap.c4ei.net
    cy.get('#currency-search-selected-list-name').should('contain', 'Crop')
  })

})
