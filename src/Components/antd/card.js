import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd';
const { Meta } = Card;
function CardComponent(props) {
    return (
        <Card
            hoverable
            style={{ width: 300, height: 300}}
            cover={<img style={{ width: 300, height: 200, "object-fit": "cover" }} alt="example" src={props.url} />}
        >
            <Meta title={props.title} />
        </Card>
    )

}
export default CardComponent