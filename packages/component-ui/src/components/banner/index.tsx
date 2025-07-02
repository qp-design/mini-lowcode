import React from 'react';
import {Carousel, Image} from 'antd';
import {fullpath, useNavigateImpl} from "@brushes/component-tool";

export const Banner: React.FC<{menu: Array<{imgUrl: string; link: string; borderRadius: number;  width: number; height:number}>}> = ({menu, borderRadius, width, height, ...restProps}) => {
    const { navigator } = useNavigateImpl();
    return (
        <Carousel autoplay={true} {...restProps}>
            {
                menu.map((item, index) => (
                    <h3 key={index}>
                        <Image
                            onClick={(e) => {
                                navigator(item.link);
                                e.stopPropagation();
                            }}
                            preview={false}
                            style={{ borderRadius, width, height, overflow: 'hidden'}}
                            src={fullpath(item.imgUrl)}
                        />
                    </h3>
                ))
            }
        </Carousel>
    );
};

