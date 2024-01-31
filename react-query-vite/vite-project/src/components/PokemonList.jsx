import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { getFilms } from '../services/Api'
import { Avatar, Col, List, Row, Skeleton, Space } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd';

const PokemonList = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [limit, setLimit] = useState(10)
    // const { data, isLoading, isError } = useQuery(['films'], getFilms, {
    //     // staleTime: 60000, // The data will be considered stale after 60 seconds (adjust as needed)
    //     refetchOnWindowFocus: false
    // });

    const { data, isLoading, isError } = useQuery(['films', searchQuery, limit], () => getFilms(searchQuery, limit), {
        // staleTime: 60000,
        refetchOnWindowFocus: false,
    });


    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    console.log(data)




    return (
        <>

            <Row style={{ padding: 20 }}>
                <Col span={24}>
                    <Space>
                        <Form
                            name="basic"
                            // labelCol={{
                            //     span: 8,
                            // }}
                            // wrapperCol={{
                            //     span: 16,
                            // }}
                            // style={{
                            //     maxWidth: 600,
                            // }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Search"
                                name="username"

                            >
                                <Input onChange={(e) => setSearchQuery(e.target.value)} />
                            </Form.Item>
                        </Form>
                    </Space>
                </Col>
            </Row>

            {
                isLoading ? <Skeleton /> :

                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description={item.opening_crawl}
                                />
                            </List.Item>
                        )}
                    />
            }
        </>
    )
}

export default PokemonList