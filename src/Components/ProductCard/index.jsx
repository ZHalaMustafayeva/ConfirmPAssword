import React from 'react';
import { memo } from 'react'
import { Card, Button, Row, Col, Typography,Input } from 'antd';
import styled from "styled-components";

const { Meta } = Card;
const { Text, Title } = Typography
const Index = styled(Card).attrs({
})`
max-width:100%;
min-with:150px;
width:100% !important;
margin-bottom:16px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
img{
    max-width:187px !important;
    width: 100% !important;
    max-height:187px !important;
    height: 100%;
    object-fit: contain;
    padding:10px
}
.ant-card-body{
    text-align:center
}
.ant-card-actions{
    padding:10px;
}
`

export default memo(({ imageSrc, salePercentage, productName, price, count }) => (
    <Index
        cover={<div style={{ position: 'relative' }}>
            <img alt={productName} src={imageSrc} />
            <div
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(255, 0, 0, 0.7)',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '5px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                }}
            >
                {salePercentage}% off
            </div>
        </div>}
        actions={[
            <Row justify='space-between' align='middle' gutter={16}>
                <Col span={12}>
                    <Input placeholder='Daxil edin'/>
                </Col>
                <Col span={12} flex='none'>
                    <Button type="primary" style={{ marginLeft: 'auto' }}>Add to Cart</Button>
                </Col>
            </Row>
        ]}
    >
        <Row style={{ marginBottom: '10px' }} justify='center'>
            <Title span={5} style={{ fontSize: '16px', fontWeight: 'bold' }}>{productName}</Title>
        </Row>
        <Row justify='center'>
            <Col style={{ fontSize: '20px', fontWeight: 'bold', color: 'green' }}>${price}</Col>
            <Col style={{ marginLeft: '5px', textDecoration: 'line-through', color: 'gray' }}>
                ${Math.ceil(price / (1 - salePercentage / 100))}
            </Col>
        </Row>

    </Index>
))
