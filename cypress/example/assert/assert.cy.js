
// assert 不可链式使用，涵盖了TDD断言的样式

describe.only('断言学习assert', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("assrt基本用法", () => {
        // 他有两个参数，第一个参数是表达式，用来测试真实性，第二个参数是错误时应该显示的消息。
        assert('foo' !== 'bar', 'foo is not bar');
        assert(Array.isArray([]), 'empty arrays are arrays');
    })

    it("assrt isOk断言", () => {
        assert.isOk('everything', 'everything is ok');
        assert.isOk(false, 'this will fail');

    })

    it("assrt equal断言", () => {
        // 非严格相等，类似与js 的 ==
        // 三个参数，实际，预期，消息
        assert.equal(3, '3', '这是无论成功与否都显示的消息');

    })
    it("assrt exists断言", () => {
        // 参数与上面一样
        var foo = 'hi';
        assert.exists(foo, 'foo is neither `null` nor `undefined`');

    })
    it("assrt include", () => {
        // 三个参数，实际，预期，消息
        // 可用于字符串，数组，对象
        assert.include([1, 2, 3], 2, 'array contains value');
        assert.include('foobar', 'foo', 'string contains substring');
        assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');
    })
    it.only("assrt match", () => {
        assert.match('foobar', /^foo/, 'regexp matches')
    })
    it.only("assrt lengthOf", () => {
        // 三个参数，实际，预期，消息
        assert.lengthOf([1, 2, 3], 3, 'array has length of 3');
        assert.lengthOf('foobar', 6, 'string has length of 6');
        assert.lengthOf(new Set([1, 2, 3]), 3, 'set has size of 3');
        assert.lengthOf(new Map([['a', 1], ['b', 2], ['c', 3]]), 3, 'map has size of 3');

    })
    it("assrt isEmpty", () => {
        assert.isEmpty([]);
        assert.isEmpty('');
        assert.isEmpty({});

    })
    it("assrt fail", () => {

    })
    it("assrt fail", () => {

    })
    it("assrt fail", () => {

    })
    it("assrt equal断言", () => {

    })

})