import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Typography, Layout, Space } from 'antd';

import { Navbar, HomePage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes' >
                        <Routes>
                            <Route exact path='/' element={<HomePage />} >
                            </Route>
                            <Route exact path='/home' element={<HomePage />} >
                            </Route>
                            <Route exact path='/exchanges' element={<Exchanges />} >
                            </Route>
                            <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} >
                            </Route>
                            <Route exact path='/crypto/:coinId' element={<CryptoDetails />} >
                            </Route>
                            <Route exact path='/news' element={<News />} >
                            </Route>
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }} >
                        Cryptoverse<br />
                        All rights reserved.
                    </Typography.Title>
                    <Space>
                        <Link to="home" >Home</Link>
                        <Link to="exchanges" >Exchanges</Link>
                        <Link to="news" >News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App;