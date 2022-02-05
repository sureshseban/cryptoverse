import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

const { Title } = Typography

const HomePage = () => {
    return (
        <React.Fragment>
            <Title level={2} className="heading" >Global Crypto Status</Title>
            <Row>
                <Col span={12} ><Statistic title="Total Cryptocurriencies" value={5} ></Statistic></Col>
                <Col span={12} ><Statistic title="Total Exchanges" value={5} ></Statistic></Col>
                <Col span={12} ><Statistic title="Total Market Cap" value={5} ></Statistic></Col>
                <Col span={12} ><Statistic title="Total 24h Volume" value={5} ></Statistic></Col>
                <Col span={12} ><Statistic title="Total Markets" value={5} ></Statistic></Col>
            </Row>
        </React.Fragment>
    )
}

export default HomePage