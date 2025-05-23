import React from 'react';
import {Carousel, Image} from 'antd';
import {fullpath} from "@brushes/component-tool";


export const Banner: React.FC<{menu: Array<{imgUrl: string; link: string}>}> = ({menu, ...restProps}) => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            {
                menu.map((item, index) => (
                    <h3 key={index}>
                        <Image preview={false}
                               style={{...restProps, overflow: 'hidden'}}
                               src={fullpath(item.imgUrl)}/>
                    </h3>
                ))
            }
        </Carousel>
    );
};

