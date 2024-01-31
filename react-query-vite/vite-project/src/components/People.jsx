import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPeoples } from '../services/Api'
import { Avatar, List, Skeleton } from 'antd'

const People = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['people'],  // API endpoint or selector to fetch data
        queryFn: getPeoples
    })

    console.log(data)

    if (isLoading) {
        return (
            <Skeleton />
        )
    }
    return (
        <>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </>
    )
}

export default People