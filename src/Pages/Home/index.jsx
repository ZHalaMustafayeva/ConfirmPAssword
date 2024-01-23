
import React, { useState } from 'react'
import { Button, Row, Col } from 'antd';
import styled from './style.module.scss';
import AlertComp from '../Alert';
import Buttons from '../Buttons';

const Index = () => {
    const [selectedPass, setSelectedPass] = useState([])
    const [selectedConfirmPass, setSelectedConfirmPass] = useState([])

    const password = [false, false, false, false];
    const confirmPass = [false, false, false, false]
    const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, "<-"]]

    const ClickNumber = (val) => FuncType(val, '<-')

    const PressNumber = (e) => FuncType(e.key, 'Backspace')

    const FuncType = (type, val) => {
        if (type === val) {
            if (selectedConfirmPass.length > 0) {
                selectedConfirmPass.splice(selectedConfirmPass.length - 1, 1);
                setSelectedConfirmPass([...selectedConfirmPass])
            } else if (selectedConfirmPass.length === 0 && selectedPass.length !== 0) {
                selectedPass.splice(selectedPass.length - 1, 1);
                setSelectedPass([...selectedPass])
            }
        } else {
            if (selectedPass.length < 4) setSelectedPass(prev => [...prev, Number(type)])
            else if (selectedPass.length === 4 && selectedConfirmPass.length < 4) setSelectedConfirmPass(prev => [...prev, Number(type)])
        }
    }

    return (
        <Row justify='center' align='middle' gutter={[24, 24]} className={styled.row}>
            <Buttons
                password={password}
                confirmPass={confirmPass}
                selectedPass={selectedPass}
                selectedConfirmPass={selectedConfirmPass}
            />
            <Col span={24}>
                {numbers?.map(value => (
                    <Row justify='center' align='middle' gutter={[16, 16]}>
                        {value?.map((val, index) => (
                            <Col style={{ marginBottom: 16 }}>
                                <Button
                                    onClick={() => ClickNumber(val, index)}
                                    onKeyUp={(e) => PressNumber(e, index)}
                                    className={`${styled.numberBtn} `}
                                    key={index}>
                                    {val}
                                </Button>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Col>
            <AlertComp selectedConfirmPass={selectedConfirmPass} selectedPass={selectedPass} />
        </Row>
    )
}

export default Index