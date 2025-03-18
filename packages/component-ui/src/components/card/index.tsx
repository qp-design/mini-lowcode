import React from 'react';
import { Card as Card2 } from 'antd';

const { Meta } = Card2;

export const Card: React.FC = () => (
    <Card2
        hoverable
        style={{ width: '100%' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
        <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card2>
);

