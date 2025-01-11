/* eslint-disable no-unused-expressions */



const errorMessage = '我是一个错误的消息呀，看见我说明出错啦！'

describe.only('断言学习expect和should', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it(".not 断言", () => {
        // 否定链中后续的所有断言
        expect({ a: 1 }).to.not.have.property('b');//这个对象中并没有属性b
        expect([1, 2]).to.be.an('array').that.does.not.include(3);//这是一个数组大事它并没有包含我们的元素3，只有1和2
        // 我们可以通过.not否定后续的所有断言，但是我们一般不建议这样做
        // 因为我们相当于否定了无数意外的结果， 我们最好应该有一个预期的结果
        expect(2).to.equal(2); // 推荐写法
        expect(2).to.not.equal(1); // 不推荐写法
    })
    it(".include断言", () => {
        // 我们期望的结果中是否包含有某些指定的值， include 包含。
        // 常见的有我们的字符串，数组和对象。
        expect('foobar').to.include('foo');
        expect([1, 2, 3]).to.include(2);
        expect({ a: 1, b: 2, c: 3 }).to.include({ a: 1, b: 2 });

        expect([1, 2, 3]).to.be.an('array').that.includes(2);
    })

    it("equal 断言", () => {
        // 断言严格等于，相当于js 中 ===

        // 1.常用写法
        expect(1).to.equal(1);
        expect('foo').to.equal('foo');
        expect(1).to.not.equal(2); // Not recommended

        // 2、错误提示, 可以接受错误信息，即断言失败时显示的自定义错误消息。该消息也可以作为第二个参数给出expect。
        expect(1).to.equal(2, errorMessage);// 1 不等于2 所以出错啦
        expect(1, errorMessage).to.equal(2);// 1 不等于2 所以出错啦

    })
    it("exist断言", () => {
        // 1、断言的目标存在，不严格等于 nuLL 和undefined
        expect(1).to.equal(1); // 期望1 是1
        expect(1).to.exist; // 期望1 是存在的

        expect(0).to.equal(0); //  期望0 是0
        expect(0).to.exist; //  期望0 是存在的

        ///2、可以和not 配和使用，判断一个值不存在
        expect(null).to.be.null; // 期望null 是null
        expect(null).to.not.exist; // 期望null并不存在

        expect(undefined).to.be.undefined; // 期望 undefined 未定义 是 undefined 
        expect(undefined).to.not.exist; // 期望undefined(未定义)并不存在

        // 3、可以自定义错误消息作为第二个参数
        expect(null, errorMessage).to.exist;
    })
    it("empty断言", () => {
        // 1、空的，严格不等于，常用于断言字符串，数组，对象。
        expect([]).to.be.empty;//数组是个为空
        expect('').to.be.empty;//字符串为空
        expect({}).to.be.empty;// 空对象

        // 2、因为根据目标类型执行不同的操作，所以在使用之前检查目标的类型很重要
        expect([]).to.be.an('array').that.is.empty;// 先判断是什么类型，在判断是否为空

        // 3、可以自定义错误消息作为第二个参数
        expect([1, 2, 3], errorMessage).to.be.empty;

    })

    it("within", () => {
        // 断言目标是一个大于或等于给定数字或日期的数字或日期start，以及小于或等于给定数字或日期的数字或日期finish
        // 在一段值之内，可以理解为 1<x<3， X在1和3之内

        // 1、基本判断
        expect(2).to.equal(2); // Recommended
        expect(2).to.be.within(1, 3); // Not recommended
        expect(2).to.be.within(2, 3); // Not recommended
        expect(2).to.be.within(1, 2); // Not recommended

        // 2.在链中较早的加以判断
        expect(1).to.equal(1); // Recommended
        expect(1).to.not.be.within(2, 4); // Not recommended


        // 错误提示
        expect(4).to.be.within(1, 3, 'nooo why fail??');
        expect(4, 'nooo why fail??').to.be.within(1, 3);

    })
    it("throw", () => {
        // 当没有提供参数时，调用目标函数并断言引发错误。.throw
        var badFn = function () { throw new TypeError('Illegal salmon!'); };
        expect(badFn).to.throw();
    })
    it(".members", () => {
        // 断言目标数组具有与给定数组相同的成员 
        expect([1, 2, 3]).to.have.members([2, 1, 3]);
        expect([1, 2, 2]).to.have.members([2, 1, 2]);

        // 默认情况下，顺序无关紧要。在链中添加得更早，以要求成员以相同的顺序出现。
        expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
        expect([1, 2, 3]).to.have.members([2, 1, 3])
            .but.not.ordered.members([2, 1, 3]);

        //   默认情况下，两个数组的大小必须相同。在链中添加较早的元素以要求目标成员是预期成员的超集。请注意， 添加时子集中的重复项将被忽略。

        // Target array is a superset of [1, 2] but not identical
        expect([1, 2, 3]).to.include.members([1, 2]);
        expect([1, 2, 3]).to.not.have.members([1, 2]);

        // Duplicates in the subset are ignored
        expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);

        expect([1, 2]).to.have.members([1, 2, 3], 'nooo why fail??');
        expect([1, 2], 'nooo why fail??').to.have.members([1, 2, 3]);


        // 4. 错误提示
    })
    it(".oneOf", () => {

    })
    it(".by", () => {

    })
    it(".an", () => {
    })
    it(".match", () => {
        // 断言目标与给定的正则表达式匹配
        expect('foobar').to.match(/^foo/);

    })
    it("property", () => {

    })
    it("lengthOf", () => {
        // 断言目标的长度
        expect([1, 2, 3]).to.have.lengthOf(3);
        expect('foo').to.have.lengthOf(3);
        expect(new Set([1, 2, 3])).to.have.lengthOf(3);
        expect(new Map([['a', 1], ['b', 2], ['c', 3]])).to.have.lengthOf(3);
        // 3.用于判断在某种范围，和.above, .below, .least, .most,  是使用
        expect([1, 2, 3]).to.have.lengthOf(3);
        // Not recommended
        expect([1, 2, 3]).to.have.lengthOf.above(2);
        expect([1, 2, 3]).to.have.lengthOf.below(4);
        expect([1, 2, 3]).to.have.lengthOf.at.least(3);
        expect([1, 2, 3]).to.have.lengthOf.at.most(3);
        expect([1, 2, 3]).to.have.lengthOf.within(2, 4);

        // 3.错误信息
        expect([1, 2, 3]).to.have.lengthOf(2, 'nooo why fail??');
        expect([1, 2, 3], 'nooo why fail??').to.have.lengthOf(2);


    })
    it(".string", () => {
        // 断言目标字符串包含给定的子字符串str。
        expect('foobar').to.have.string('bar');

    })

    it(".fail", () => {

    })
    // it(".deep 断言", () => {

    //     // 深度相等，可以理解为数组对象的长度是相等的，但是两个对象并不想当，
    //     // 因为对象是复杂的数据结构， 在内存中会创建会创建不同的栈。
    //     // Target object deeply (but not strictly) equals `{a: 1}`
    //     expect({ a: 1 }).to.deep.equal({ a: 1 });
    //     expect({ a: 1 }).to.not.equal({ a: 1 });

    //     // Target array deeply (but not strictly) includes `{a: 1}`
    //     expect([{ a: 1 }]).to.deep.include({ a: 1 });
    //     expect([{ a: 1 }]).to.not.include({ a: 1 });

    //     // Target object deeply (but not strictly) includes `x: {a: 1}`
    //     expect({ x: { a: 1 } }).to.deep.include({ x: { a: 1 } });
    //     expect({ x: { a: 1 } }).to.not.include({ x: { a: 1 } });

    //     // Target array deeply (but not strictly) has member `{a: 1}`
    //     expect([{ a: 1 }]).to.have.deep.members([{ a: 1 }]);
    //     expect([{ a: 1 }]).to.not.have.members([{ a: 1 }]);

    //     // Target set deeply (but not strictly) has key `{a: 1}`
    //     expect(new Set([{ a: 1 }])).to.have.deep.keys([{ a: 1 }]);
    //     expect(new Set([{ a: 1 }])).to.not.have.keys([{ a: 1 }]);

    //     // Target object deeply (but not strictly) has property `x: {a: 1}`
    //     expect({ x: { a: 1 } }).to.have.deep.property('x', { a: 1 });
    //     expect({ x: { a: 1 } }).to.not.have.property('x', { a: 1 });

    // })
    it(".any 断言", () => {
        // 使链要求目标至少有一个给定的键
        expect({ a: 1, b: 2 }).to.have.any.keys('b');// 对象中至少有一个属性b
    })
    it(".all断言", () => {
        // 使链中后续的所有断言都要求目标具有所有给定的键
        expect({ a: 1, b: 2 }).to.have.all.keys('a', 'b');// 对象中满足给定键a 和b
    })
    it("ok断言", () => {
        // 我们期望的结果中是否包含有某些指定的值， include 包含。
        // 常见的有我们的字符串，数组和对象。
        expect('foobar').to.include('foo');
        expect([1, 2, 3]).to.include(2);
        expect({ a: 1, b: 2, c: 3 }).to.include({ a: 1, b: 2 });

        expect([1, 2, 3]).to.be.an('array').that.includes(2);
    })
    it("true断言", () => {
        // 我们期望的结果中是否包含有某些指定的值， include 包含。
        // 常见的有我们的字符串，数组和对象。
        expect('foobar').to.include('foo');
        expect([1, 2, 3]).to.include(2);
        expect({ a: 1, b: 2, c: 3 }).to.include({ a: 1, b: 2 });

        expect([1, 2, 3]).to.be.an('array').that.includes(2);
    })
    it("false断言", () => {
        // 我们期望的结果中是否包含有某些指定的值， include 包含。
        // 常见的有我们的字符串，数组和对象。
        expect('foobar').to.include('foo');
        expect([1, 2, 3]).to.include(2);
        expect({ a: 1, b: 2, c: 3 }).to.include({ a: 1, b: 2 });

        expect([1, 2, 3]).to.be.an('array').that.includes(2);
    })

    it("above", () => {

    })

    it(".least", () => {

    })
})