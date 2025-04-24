import {useMemo, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { createStyles } from "antd-style";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {useModuleContext} from "@brushes/component-core";
import {get, isEmpty} from "lodash-es";

const useStyles = createStyles(({css, token}) => {
    return {
        container: css `
            position: relative;
            margin-bottom: 10px;
            .mySwiper2 {
                width: 100%;
            }
            
            .mySwiper {
                height: 60px;
                position: absolute;
                bottom: 0;
                left: 30px;
                padding: 0;
                width: calc(100% - 60px);
                box-sizing: border-box;
            }
            
            .mySwiper .swiper-slide {
                width: 25%;
                height: 100%;
                opacity: 0.4;
            }

            .mySwiper .swiper-slide-thumb-active {
                opacity: 1;
            }

            .swiper-slide img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .swiper-button-prev, .swiper-button-next {
                bottom: 5px;
                top: auto;
                transform: scale(.55);
                color: ${token.colorPrimary};
            }
            
            .swiper-button-prev{
                left: 0;
            }
            .swiper-button-next{
                right: 0
            }
        `
    }
})
export function SwiperThumb({height}: {height: number}) {
    const defaultValue = useModuleContext(s => s.moduleStore.defaultValue);
    const skuInfo = useModuleContext(s => s.moduleStore.skuInfo);

    const banner = useMemo(() => {
        // 优先取sku模块的数据 > 页面模块的数据
        if(!isEmpty(skuInfo)) {
            return get(skuInfo, 'rsGoodsFileDomainList', []);
        }
        return get(defaultValue, 'rsGoodsFileDomainList', []);
    }, [defaultValue, skuInfo])

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { styles } = useStyles();

    return (
        <div className={styles.container} style={{height}}>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={'mySwiper2'}
                style={{height: height - 70, paddingBottom: 70 }}
            >
                {
                    banner.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.goodsFileUrl} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className={"mySwiper"}
                >
                    {
                        banner.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.goodsFileUrl} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
        </div>
    );
}
