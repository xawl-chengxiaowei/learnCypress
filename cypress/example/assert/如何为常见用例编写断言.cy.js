
// assert 不可链式使用，涵盖了TDD断言的样式

describe.only('断言常用场景', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("判断列表长度值是否为4", () => {
        cy.get('li').should('have.length', 4)
    })
    it("判断form表单input的class并没有disabled名", () => {
        cy.get('form').find('input').should('not.have.class', 'disabled')
    })
    it("获取文本框的value", () => {
        cy.wait(2000)
        // 输入框的值为cxw
        cy.get('[data-testid="user-name"]').should('have.value', 'cxw')
        cy.get('[data-testid="test-text"]').should('include.text', '我是用来测试的文本呀呀')

        //获取当前元素，匹配它的文本以Hello 开头
        cy.get('[data-testid="hello-text"]')
            .invoke('text')
            .should('match', /^Hello/)

        //获取当前元素，匹配它的文本包含hello
        cy.contains('[data-testid="hello-text"]', /Hello/)
    })
    it("判断是否显示", () => {

        // 提交按钮是否显示
        cy.get('[data-testid="form-submit"]').should('be.visible')

        // li 元素是否显示
        cy.contains('[data-testid="todo"] li', '我是需要匹配的li文本').should('be.visible')

        // li 元素是否显示
        cy.get('li').should('be.visible')

        // li 元素是隐藏
        cy.get('li.hidden').should('not.be.visible')
    })

    it("判断是否在加载中", () => {
        // 一般情况下，我们是判断它是为not.exist ,不存在的，如果一直在加载可能就是后端没返数据，就一直显示加载中
        // 即为cy.get('[data-testid="loading"]').should('not.exist')
        // 这里为了页面显示，就先加载中吧！！！
        cy.get('[data-testid="loading"]').should('exist')
    })

    it("判断单选框是否选中", () => {
        cy.get(':radio').should('be.not.checked')
    })
    it("判断是否有对应的css 属性", () => {
        // 判断这个元素的css属性是否为line-through solid rgb(0, 0, 0)
        // 注意，这里使用的.CSS 选择器是 chai-jquery的语法，需要下载对应库
        cy.get('[data-testid="decorationId"]').should(
            'have.css',
            'text-decoration',
            'line-through solid rgb(0, 0, 0)'
        )
        // 这个元素没有disPlay:none
        cy.get('[data-testid="decorationId"]').should('not.have.css', 'display', 'none')
    })

    it("禁止选中", () => {
        // 先获取该元素，检测该元素是否处于禁用状态，如果处于禁用状态，则执行后面的代码
        // .invoke('prop', 'disabled', false) 的作用是将选中的元素的 disabled 属性设置为 false，
        // 即取消该元素的禁用状态，使其变为可交互状态即将disabled=true 改为disabled = false
        cy.get('[data-testid="example-input"]')
            .should('be.disabled')
            .invoke('prop', 'disabled', false)

        cy.get('[data-testid="example-input"]')
            // 判断该元素是否处于启用状态，他的disabled 属性为false
            .should('be.enabled')
            .and('not.be.disabled')
    })
    // 下面的还没写完
    // it("肯定断言", () => {
    //     cy.get('[data-testid="todo-item"]')
    //         .should('have.length', 2)
    //         .and('have.class', 'completed')

    //     cy.contains('first todo').should('not.have.class', 'completed')
    //     cy.get('[data-testid="loading"]').should('not.be.visible')
    // })
    // it.only("否定断言-错误通过", () => {
    //     // retry until this input does not have class disabled
    //     cy.get('form').find('input').should('not.have.class', 'disabled')
    // })

})