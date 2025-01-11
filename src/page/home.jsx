import React, { memo } from 'react'
import { Button, Divider, Spin, Radio } from 'antd'
import CustomForm from './form'

const Home = memo(() => {
    return (
        <div>
            <div
                data-testid="todo"
            >
                <h5>我是list</h5>
                <ul>
                    <li>111</li>
                    <li>222</li>
                    <li>我是需要匹配的li文本</li>
                    <li className='hidden' style={{
                        display: 'none'
                    }}> 页面看不见我看不见我，我是偷偷隐藏的li文本</li>
                </ul>

            </div>
            <Divider />
            <div>
                <h5>我是form表单</h5>
                <CustomForm />
            </div>
            <Divider />
            <div data-testid="test-text">
                <span>我是用来测试的文本呀呀</span>
                <span></span>
            </div>
            <Divider />
            <div data-testid="hello-text">
                <span>Hello,很高兴你对编写cypress感兴趣</span>
                <span></span>
            </div>
            <Divider />
            <Spin
                tip="Loading"
                size="small"
                visible={true}
                data-testid="loading"
            >
                我是要显示的页面
            </Spin>

            <Divider />
            <Radio>我是一个小小的单选框，用来测试，看见我请快点选中，不然会报错哦！</Radio>;
            <Divider />
            <div>
                <p
                    data-testid="completed"
                    style={{
                        textDecoration: "line-through",
                    }}
                    className='p-text-decoration'
                >
                    我是一个有下划线的文本呀
                </p>
            </div>
        </div>
    )
})

export default Home