/* eslint-disable no-unused-expressions */

const errorMessage = '我是一个错误的消息呀，看见我说明出错啦！'

describe.only('学习expect和should断言', () => {

    // beforeEach 表示在每个测试方法执行之前需要执行的方法。
    // 这里的意思就是说下面每个it 方法执行签要跳转到http://localhost:3000/ 页面！
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    // 常用方法
    it(".not 断言", () => {
        // 否定链中后续的所有断言
        expect({ a: 1 }).to.not.have.property('b');//这个对象中并没有属性b
        expect([1, 2]).to.be.an('array').that.does.not.include(3);//这是一个数组但是它并没有包含我们的元素3，只有1和2
        // 我们可以通过.not否定后续的所有断言，但是我们一般不建议这样做
        // 因为我们相当于否定了无数意外的结果， 我们最好应该有一个预期的结果
        expect(2).to.equal(2); // 推荐写法，2 只能等于2 ，只有一个预期的结果
        expect(2).to.not.equal(1); // 不推荐写法,2 不等于1,但是它也可能不等于3,4,5,6等等无数种可能
    })
    it(".include断言", () => {
        // 我们期望的结果中是否包含有某些指定的值， include 包含。
        // 常见的有我们的字符串，数组和对象。
        expect('foobar').to.include('foo'); //foobar 字符串种包含foo呀
        expect([1, 2, 3]).to.include(2); //[1, 2, 3] 数组 有2 呀
        expect({ a: 1, b: 2, c: 3 }).to.include({ a: 1, b: 2 }); //{ a: 1, b: 2, c: 3 }中包含我们的a: 1, b: 2呀

        // 先判断类型，在判断包含的值
        expect([1, 2, 3]).to.be.an('array').that.includes(2);// an 判断是一个数组，在又包含我们的2
    })
    it("equal 断言", () => {
        // 判断两值是否等于
        // 1.常用写法
        expect(1).to.equal(1);//1 等于1
        expect('foo').to.equal('foo'); //foo 等于foo
        expect(1).to.not.equal(2); // 不推荐写法

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
        expect([]).to.be.empty;// 数组是个为空
        expect('').to.be.empty;// 字符串为空
        expect({}).to.be.empty;// 空对象

        // 2、因为根据目标类型执行不同的操作，所以在使用之前检查目标的类型很重要
        expect([]).to.be.an('array').that.is.empty;// 先判断是什么类型，在判断是否为空

        // 3、可以自定义错误消息作为第二个参数
        expect([1, 2, 3], errorMessage).to.be.empty;// 数组不为空所以报错啦

    })
    it("within", () => {

        // 断言目标是一个大于或等于给定数字或日期的数字或日期start，以及小于或等于给定数字或日期的数字或日期finish
        // 在一段值之内，可以理解为 1<x<3， X在1和3之内

        // 1、基本判断。
        expect(2).to.equal(2); // 推荐2 等于2
        expect(2).to.be.within(1, 3); // 2 在1 和 3 之间
        expect(2).to.be.within(2, 3); //  2<=2<=3
        expect(2).to.be.within(1, 2); // 1<=2<=2

        // 2.在链中较早的加以判断
        expect(1).to.equal(1); // 1 等于1
        expect(1).to.not.be.within(2, 4); //  1不在 2和4之间

        // 错误提示
        expect(4).to.be.within(1, 3, errorMessage);// 报错，4不在1和3之间会有提示
        expect(4, errorMessage).to.be.within(1, 3); // 报错，4不在1和3之间会有提示

    })
    it("throw", () => {
        // 当没有提供参数时，调用目标函数并断言引发错误。.throw
        // 调用该函数就会报错，我们预判该错误，所以会正常执行
        var badFn = function () { throw new TypeError('Illegal salmon!'); };
        expect(badFn()).to.throw();
    })
    it(".members", () => {
        // 断言目标数组具有与给定数组相同的成员 
        expect([1, 2, 3]).to.have.members([2, 1, 3]);// 成员相同 1,2,3
        expect([1, 2, 2]).to.have.members([2, 1, 2]);// 成员相同 1,2

        // 默认情况下，顺序无关紧要。在链中添加得更早，以要求成员以相同的顺序出现。
        expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]);
        expect([1, 2, 3]).to.have.members([2, 1, 3]).but.not.ordered.members([2, 1, 3]);

        // 默认情况下，两个数组的大小必须相同。在链中添加较早的元素以要求目标成员是预期成员的超集。
        // 注意一哈， 添加时子集中的重复项将被忽略。
        expect([1, 2, 3]).to.include.members([1, 2]);// 
        expect([1, 2, 3]).to.not.have.members([1, 2]);

        // 期待我们的成员有1,2,3，虽然2重复了3次，但是它仍然被包含在预期成员中。
        expect([1, 2, 3]).to.include.members([1, 2, 2, 2]);

        expect([1, 2]).to.have.members([1, 2, 3], errorMessage);// 多了个3，所以报错啦
        expect([1, 2], errorMessage).to.have.members([1, 2, 3]);

    })
    it(".any 断言", () => {
        // 使链要求目标至少有一个给定的键
        expect({ a: 1, b: 2 }).to.have.any.keys('b');// 对象中至少有一个属性b
    })
    it(".all断言", () => {
        // 使链中后续的所有断言都要求目标具有所有给定的键
        expect({ a: 1, b: 2 }).to.have.all.keys('a', 'b');// 对象中满足给定键a 和b
    })
    it("ok断言", () => {
        // 判断是一个真值即为 true
        expect(1).to.equal(1); // 1等于1 啦
        expect(1).to.be.ok; // 1 不推荐写法啊，1会隐式转换为true

        expect(true).to.be.true; // 就是相等，不用解释
        expect(true).to.be.ok; // OK 以为 true，不推荐写法
    })
    it(".match", () => {
        // 断言目标与给定的正则表达式匹配
        expect('foobar').to.match(/^foo/);
    })
    it.only("lengthOf", () => {

        // 断言目标的长度
        expect([1, 2, 3]).to.have.lengthOf(3); //3 个值等于3
        expect('foo').to.have.lengthOf(3);

        // 3.用于判断在某种范围，和.above, .below, .least, .most,  是使用判断范围
        // above 在上面
        // below 在下面
        // least 至少
        // most 最多
        expect([1, 2, 3]).to.have.lengthOf(3);// 3个值等于3
        expect([1, 2, 3]).to.have.lengthOf.above(2);// 3个值大于2
        expect([1, 2, 3]).to.have.lengthOf.below(4); // 3个值小于4
        expect([1, 2, 3]).to.have.lengthOf.at.least(3);// 3个值大于等于3
        expect([1, 2, 3]).to.have.lengthOf.at.most(3);// 3个值小于等于3
        expect([1, 2, 3]).to.have.lengthOf.within(2, 4);// 3个值在2到4之间

        // 3.错误信息
        expect([1, 2, 3]).to.have.lengthOf(2, errorMessage);
        expect([1, 2, 3], errorMessage).to.have.lengthOf(2);
    })
    it(".an", () => {
        // an的别名是a ，两个可以互换的使用。

        // 1.断言目标的类型
        expect('foo').to.be.a('string');
        expect({ a: 1 }).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect(new Error).to.be.an('error');

        // 2. 也可以用作语言链来提高断言的可读性。
        expect({ b: 2 }).to.have.a.property('b');
    })

    // 后面的好像不常用唉
    it(".oneOf", () => {

    })
    it(".by", () => {

    })
    it("property", () => {
    })
    it(".string", () => {
        // 断言目标字符串包含给定的子字符串str。
        expect('foobar').to.have.string('bar');
    })

    it(".fail", () => {
    })
    it(".deep 断言", () => {
        // 深度相等，可以理解为数组对象的长度是相等的，但是两个对象并不想当，
        // 因为对象是复杂的数据结构， 在内存中会创建会创建不同的栈。
        // Target object deeply (but not strictly) equals `{a: 1}`
        expect({ a: 1 }).to.deep.equal({ a: 1 });
        expect({ a: 1 }).to.not.equal({ a: 1 });
    })
    it("true断言", () => {
    })
    it("false断言", () => {
    })

    it("above", () => {
    })

    it(".least", () => {
    })
})