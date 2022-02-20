import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

const { Title } = Typography

const HomePage = () => {

    const { data, isFetching } = useGetCryptosQuery()
    const globalStats = data?.data?.stats;

    if (isFetching) return 'Loading...'
    return (
        <React.Fragment>
            <Title level={2} className="heading" >Global Crypto Status</Title>
            <Row>
                <Col span={12} ><Statistic title="Total Cryptocurriencies" value={globalStats.totalCoins} ></Statistic></Col>
                <Col span={12} ><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} ></Statistic></Col>
                <Col span={12} ><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} ></Statistic></Col>
                <Col span={12} ><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} ></Statistic></Col>
                <Col span={12} ><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} ></Statistic></Col>
            </Row>
            <div className='home-heading-container' >
                <Title level={3} className='home-title' >Top 12 Cryptocurriescies in the world</Title>
                <Title level={5} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
            </div>
            <Cryptocurrencies simplified />
            <div className='home-heading-container' >
                <Title level={3} className='home-title' >Latest Crypro News</Title>
                <Title level={5} className='show-more'><Link to='/news'>Show more</Link></Title>
            </div>
            <News simplified />
        </React.Fragment>
    )
}

export default HomePage