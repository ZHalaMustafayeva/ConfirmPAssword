import React from 'react'
import { Button, message, Row, Col } from 'antd';
import styled from './style.module.scss'
const Index = ({password, confirmPass, selectedPass, selectedConfirmPass}) => {
    return (
        <>
            <Col span={24}>
                <Row justify='center' align='middle' gutter={[16, 16]}>
                    <Col span={24}>
                        <Row justify='center' align='middle' gutter={[16, 16]}>
                            {password?.map((value, index) => (
                                <Col>
                                    <Button className={`${styled.passBtn} ${selectedPass[index] && styled.activeBtn} `} key={index} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Row justify='center' align='middle' gutter={[16, 16]}>
                            {confirmPass?.map((value, index) => (
                                <Col>
                                    <Button key={index} className={`${styled.passBtn} ${selectedConfirmPass[index] && styled.activeBtn} `} />
                                </Col>
                            ))}

                        </Row>
                    </Col>

                </Row>
            </Col>
        </>
    )
}

export default Index