import $ from 'jquery'

describe.only('这里练习chai的扩展chai-jquery的常见api的使用', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("attr 用于获取指定属性的值", () => {
        // 使用 断言选择的第一个元素具有给定的属性.attr()。也可以断言一个特定值。返回值可用于链接。
        // 判断当前元素有属性值bar
        cy.get('#testAttr').should(($el) => {
            // 期望该属性有属性值并且为bar
            expect($el).to.have.attr('bar');
        });
        // 判断当前元素有属性值foo并且值为123
        cy.get('#testAttr').should('have.attr', 'foo', '123');
    })

    it("prop 用于获取指定属性的值", () => {

        // 判断当前元素的属性值为disabled = true
        cy.get('[data-testid="example-input"]').should(($el)=>{
            expect($el).to.have.prop('disabled',true);
        })
    })

    
    it("css 使用 断言所选内容的第一个元素具有给定的 CSS 属性.css()。", () => {
        // 判断当前元素的CSS 属性值为line-through solid rgb(0, 0, 0)
        cy.get('[data-testid="decorationId"]').should(($el) => {
            expect($el).to.have.css('text-decoration', 'line-through solid rgb(0, 0, 0)');
        });
    })
    
    it("class 使用 断言选择的第一个元素具有给定的类", () => {
        cy.get('#testAttr').should(($el) => {
            // 期望该属性有属性值并且为bar
            expect($el).to.have.class('testAttr');
        });
    })

    
    it("id 使用 断言选择的第一个元素具有给定的类", () => {
        cy.get('#testAttr').should(($el) => {
            // 期望该属性有属性值并且为bar
            expect($el).to.have.id('testAttr');
        });
    })

    it("text 使用 断言选择的第一个元素的文本等于给定的文本", () => {
        cy.get('#testAttr').should(($el) => {
            // 期望该属性有属性值并且为bar
            expect($el).to.have.text('我是chai-jquery的测试文本');
        });
    })

    it("value 使用 断言选择的第一个元素具有给定的值", () => {
        cy.get('[data-testid="user-name"]').should(($el) => {
            // 期望该属性有属性值并且为bar
            expect($el).to.have.value('cxw');
        });
    })

    // it("checked 断言至少检查了一个选择元素", () => {
    //     cy.get(':radio').not.to.be.checked;
    // })

    
    // it("判断单选框是否选中", () => {
    //     cy.get(':radio').should('be.not.checked')
    // })
    
    // it("prop 用于获取指定属性的值", () => {

    //     // 判断当前元素有属性值bar
    //     cy.get('#testAttr').should(($el) => {
    //         // 期望该属性有属性值并且为bar
    //         // expect($el).to.have.attr('bar');
    //     });
    // })
    
    // it("prop 用于获取指定属性的值", () => {

    //     // 判断当前元素有属性值bar
    //     cy.get('#testAttr').should(($el) => {
    //         // 期望该属性有属性值并且为bar
    //         // expect($el).to.have.attr('bar');
    //     });
    // })
    
    // it("prop 用于获取指定属性的值", () => {

    //     // 判断当前元素有属性值bar
    //     cy.get('#testAttr').should(($el) => {
    //         // 期望该属性有属性值并且为bar
    //         // expect($el).to.have.attr('bar');
    //     });
    // })
    
    // it("prop 用于获取指定属性的值", () => {

    //     // 判断当前元素有属性值bar
    //     cy.get('#testAttr').should(($el) => {
    //         // 期望该属性有属性值并且为bar
    //         // expect($el).to.have.attr('bar');
    //     });
    // })
    
    // it("prop 用于获取指定属性的值", () => {

    //     // 判断当前元素有属性值bar
    //     cy.get('#testAttr').should(($el) => {
    //         // 期望该属性有属性值并且为bar
    //         // expect($el).to.have.attr('bar');
    //     });
    // })
    
    // it("prop 用于获取指定属性的值", () => {

    //     // 判断当前元素有属性值bar
    //     cy.get('#testAttr').should(($el) => {
    //         // 期望该属性有属性值并且为bar
    //         // expect($el).to.have.attr('bar');
    //     });
    // })


})