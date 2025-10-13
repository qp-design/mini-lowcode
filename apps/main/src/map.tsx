import React, { useEffect } from 'react';
import { Choropleth } from '@antv/l7plot';
import { GaodeMap, Scene } from '@antv/l7';

const WuhanMap = () => {
    const mapContainerRef = React.useRef(null);

    useEffect(() => {
        if (!mapContainerRef.current) return;

        const scene = new Scene({
            id: mapContainerRef.current,
            map: new GaodeMap({
                style: 'light',
                center: [120.19382669582967, 30.258134],
                zoom: 3,
            }),
        });

        scene.on('loaded', () => {
            fetch('https://gw.alipayobjects.com/os/alisis/geo-data-v0.1.1/administrative-data/area-list.json')
                .then((response) => response.json())
                .then((list) => {
                    const data = list
                        .filter(({ level }) => level === 'district')
                        .map((item) => ({ ...item, 地区: item.name, 价格: Math.floor(Math.random() * 100) * 1000 }));
                    const choropleth = new Choropleth({
                        source: {
                            data,
                            joinBy: {
                                sourceField: 'adcode',
                                geoField: 'adcode',
                            },
                        },
                        viewLevel: {
                            level: 'province',
                            adcode: 420000,
                            granularity: 'district',
                        },
                        autoFit: true,
                        color: {
                            field: '价格',
                            value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
                            scale: { type: 'quantize' },
                        },
                        style: {
                            opacity: 1,
                            stroke: '#ccc',
                            lineWidth: 0.6,
                            lineOpacity: 1,
                        },
                        label: {
                            visible: true,
                            field: '地区',
                            style: {
                                fill: '#000',
                                opacity: 0.8,
                                fontSize: 10,
                                stroke: '#fff',
                                strokeWidth: 1.5,
                                textAllowOverlap: false,
                                padding: [5, 5],
                            },
                        },
                        state: {
                            active: { stroke: 'black', lineWidth: 1 },
                        },
                        tooltip: {
                            items: ['地区', '价格'],
                        },
                        zoom: {
                            position: 'bottomright',
                        },
                        legend: {
                            position: 'bottomleft',
                        },
                    });

                    choropleth.addToScene(scene);
                });
        });

        return () => {
            scene.destroy();
        };
    }, []);

    return (
        <div
            ref={mapContainerRef}
            style={{
                height: '500px',
                width: '100%',
                position: 'relative'
            }}
        />
    );
};

export default WuhanMap;