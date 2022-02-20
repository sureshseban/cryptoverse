import React, { useState, useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({ simplified }) => {

    const count = simplified ? 12 : 100;
    const { data: cryptosList, isFecting } = useGetCryptosQuery()
    const [cryptos, setCryptos] = useState([])
    const [searchItem, setSearchItem] = useState('')

    useEffect(() => {
        const filteredList = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchItem.toLowerCase()))
        setCryptos(filteredList)
    }, [cryptosList, searchItem])

    return (
        <>
            {
                !simplified ?
                    <div className='search-crypto' >
                        <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchItem(e.target.value)} />
                    </div> : null
            }
            {
                isFecting ? 'Loading...' :
                    <Row gutter={[32, 32]} className='crypto-card-container' >
                        {
                            cryptos?.slice(0, count).map((currency, index) => (
                                <Col xs={24} sm={12} lg={6} className='crypto-card' key={index} >
                                    <Link to={`/crypto/${currency.uuid}`} >
                                        <Card
                                            title={`${currency.rank}. ${currency.name}`}
                                            extra={<img className='crypto-image' src={currency.iconUrl} />}
                                            hoverable
                                        >
                                            <p>Price: {millify(currency.price)}$</p>
                                            <p>Market Cap: {millify(currency.marketCap)}</p>
                                            <p>Daily Change: {currency.change}%</p>
                                        </Card>
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
            }
        </>
    )
}

export default Cryptocurrencies