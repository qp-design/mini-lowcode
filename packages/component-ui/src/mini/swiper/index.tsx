import {useComponent} from "@brushes/simulate-component-mini";
import {useMemo} from "react";
import {transformImageMode} from "@brushes/component-tool";
import { getEnv } from '@brushes/utils';

const isTaro = getEnv();

export const SwiperComponent = ({direction = 'horizontal', fit, width, height = 300} : {fit: string, type: number, direction: string;
    height: number; width: string | number
}) => {
    const {Swiper, Image} = useComponent();
    const list = [
        'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
        'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
        'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
    ]

    const imageMode = useMemo(() => {
        if(isTaro) {
            return {
                mode: fit,
            }
        }
        return {
            fit: transformImageMode(fit)
        }
    }, [isTaro, fit]);

    console.log('131===>', imageMode);
    return (
        <Swiper
            width={width}
            height={height}
            loop
            defaultValue={0}
            indicator
            direction={direction}
            style={{ margin: '0 auto' }}
        >
            {list.map((item) => (
                <Swiper.Item key={item}>
                    <Image {...imageMode} width={width} height={height} src={item} alt="" />
                </Swiper.Item>
            ))}
        </Swiper>
    )
}