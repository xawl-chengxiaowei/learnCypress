import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const CustomForm = () => (
    <Form
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 300,
        }}
        initialValues={{
            remember: true,
            username: "cxw"
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="用户名"
            name="username"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}
        >
            <Input data-testid={"user-name"} />
        </Form.Item>

        <Form.Item
            label="密码"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item
            label="我是文本框"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
            <Button
                data-testid="form-submit"
                type="primary"
                htmlType="submit">
                提交
            </Button>
        </Form.Item>
    </Form>
);
export default CustomForm;