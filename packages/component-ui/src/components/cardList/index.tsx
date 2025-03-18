import React from 'react';
import {Card} from "../card";


export const CardList: React.FC<{gap: number; num: number}> = ({gap, num}) => {
    return (
        <div style={{
            display: "grid",
            gap,
            gridTemplateColumns: `repeat(${num}, 1fr)`,
        }}>
            {
                [1,2,3,4,5,6,7,8].map((item, index) => (
                    <Card key={index}/>
                ))
            }
        </div>

    )
}

