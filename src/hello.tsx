import React from 'react'
import {Alert, message} from 'antd';

export default function Hello() {
    function showMessage(text: string) {
        message.destroy();
        // FIXME we have to put 'message.info' in a 'setTimeout', otherwise it doesn't show on the first click
        setTimeout(() => message.info(text), 0)
    }

    return <button onClick={() => showMessage('Hello')}>Show message</button>
};
