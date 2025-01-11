
// assert 不可链式使用，涵盖了TDD断言的样式

describe.only('断言学习assert', () => {
    // beforeEach 表示在每个测试方法执行之前需要执行的方法。
    // 这里的意思就是说下面每个it 方法执行签要跳转到http://localhost:3000/ 页面！
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it.only("assrt基本用法", () => {
        // 他有两个参数，第一个参数是表达式，用来测试真实性，第二个参数是错误时应该显示的消息。
        assert('foo' !== 'bar', 'foo 不等于 bar 呀');
        assert(Array.isArray([]), '空数组也是一个数组呀');
    })

    it.only("assrt isOk断言", () => {
        assert.isOk('everything', 'everything is ok');//在JS 中，有值的字符串就会隐式转换为 true，所以ok好吧
        assert.isOk(false, 'this will fail');//FALSE 不是ok,报错

    })

    it.only("assrt equal断言", () => {
        // 非严格相等，类似与js 的 ==
        // 三个参数，实际，预期，消息
        assert.equal(3, '3', '这是无论成功与否都显示的消息');

    })
    it.only("assrt exists断言", () => {
        // 参数与上面一样，判断是否存在
        var foo = 'hi';
        assert.exists(foo, 'foo 并不是`null` 或者 `undefined`，所以是存在的');

    })
    it.only("assrt include 断言", () => {
        // 三个参数，实际，预期，消息
        // 可用于字符串，数组，对象
        assert.include([1, 2, 3], 2, '数组中有2值');
        assert.include('foobar', 'foo', 'foobar 中有foo');
        assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, '对象中包含 foo: bar');
    })
    it.only("assrt match", () => {
        assert.match('foobar', /^foo/, 'foobar能够匹配到foo')
    })
    it("assrt lengthOf", () => {
        // 三个参数，实际，预期，消息
        assert.lengthOf([1, 2, 3], 3, '[1, 2, 3] 数组长度为3');
        assert.lengthOf('foobar', 6, 'foobar 长度为6');

    })
    it.only("assrt isEmpty", () => {
        // 下面都是空
        assert.isEmpty([]);
        assert.isEmpty('');
        assert.isEmpty({});

    })
    // 不常用

})