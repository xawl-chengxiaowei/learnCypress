import $ from 'jquery'

describe.only('这里练习chai的扩展chai-jquery的常见api的使用', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("判断列表长度值是否为42", () => {
        // .should('have.attr', 'bar')
        // expect($el).to.have.attr('foo', 'bar')

        // cy.get('.testAttr').should('have.attr', 'bar')

        // expect(cy.get('.testAttr')).to.have.attr('bar', 'bar')

        // $('#testAttr').should.have.attr('bar');
        // expect($('body')).to.have.attr('foo', 'bar');
        // expect($('body')).to.have.attr('foo').match(/bar/);

        cy.get('#testAttr').should(($el) => {
            expect($el).to.have.attr('bar');
        });
    })
})