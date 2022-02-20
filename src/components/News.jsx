import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Text, Title } = Typography
const { Option } = Select

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery(
        { newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 }
    )
    const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
    if (!cryptoNews) return 'Loading..'

    return (
        <Row gutter={[24, 24]}>
            {
                cryptoNews.value.map((news, index) => (
                    <Col xs={24} sm={12} lg={8} key={index} >
                        <Card hoverable className='news-card'>
                            <a href={news.url} target='_blank' rel='noreferrer'>
                                <div className='news-image-container' >
                                    <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt='crypto news' />
                                </div>
                                <div>
                                    <Title className='news-title' level={4}>{news.name}</Title>
                                </div>
                                <p>
                                    {news.description.length > 100 ?
                                        `${news.description.substring(0, 100)}...` : news.description
                                    }
                                </p>
                                <div className='provider-container'>
                                    <div>
                                        <Avatar src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='crypto news' />
                                        <Text className='provider-name' >{news.provider[0]?.name}</Text>
                                    </div>
                                </div>
                                <div>
                                    <Text>{moment(news.published).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default News 