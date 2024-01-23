import React from 'react'
import { Alert } from 'antd';

const Index = ({ selectedConfirmPass, selectedPass }) => {
    return (
        <>
            {(selectedConfirmPass.length === 4 && selectedPass.length === 4) &&
                (JSON.stringify(selectedConfirmPass) === JSON.stringify(selectedPass)) ?
                <Alert message="Correct Pin" type="success" /> :
                (selectedConfirmPass.length === 4 && selectedPass.length === 4) &&
                (JSON.stringify(selectedConfirmPass) !== JSON.stringify(selectedPass)) &&
                <Alert message="Wrong Pin" type="error" />
            }
        </>
    )
}

export default Index;