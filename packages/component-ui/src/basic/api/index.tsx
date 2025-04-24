import React, {Fragment, useEffect, useMemo} from 'react';
import {Container, Element, HOCCodeWrapComponent, ModuleProvider, useModuleContext} from '@brushes/component-core';
import {Empty, Pagination} from "antd";
import {useApiComponent} from "component-store";
import {get} from "lodash-es";


const CardBasic: React.FC<any> = (props) => {
    const setModuleStore = useModuleContext((s) => s.setModuleStore);
    useEffect(() => {
        setModuleStore({
            skuInfo: props
        })
    }, [props]);

    return (
        <Element
            canvas
            id={`card-basic`}
            is={Container}
        ></Element>
    )
};

const DetailBasic: React.FC<any> = ({result, storeKey}) => {
    const setModuleStore = useModuleContext((s) => s.setModuleStore);
    useEffect(() => {
        setModuleStore({
            [storeKey]: result
        })
    }, [result, storeKey]);

    return (
        <Element
            canvas
            id={'detail-basic'}
            is={Container}
        ></Element>
    )
};

type CardListType = {
    gap: number;
    storeKey: string;
    callbackName?: string;
    padding: object;
    margin: object;
    imgKey?:string;
    num: number,
    api: string;
    defaultValue: string;
    dataPath: string;
    rows?: number;
    params?: Array<{ key: string; value: string }>;
    pagination: boolean;
    componentType: string
}

const ApiList: React.FC<Partial<CardListType> & {
    onChange: (page: number, pageSize: number) => void;
    result: { [value: string]: any };
    currentPage: { current: number }
}> = (
    {
        currentPage,
        result,
        pagination,
        onChange,
        dataPath,
        padding,
        margin,
        gap,
        num,
        ...restProps
    }
) => {
    const list = useMemo(() => {
        if(dataPath) {
            return get(result, dataPath, []);
        }
        return result
    }, [result, dataPath]);
    console.log(83, dataPath, list);
    if(!list.length) {
        return <div style={{display: "flex", alignItems: "center", justifyContent: 'center', ...margin,
            ...padding, ...restProps}}><Empty /></div>;
    }
    return (
        <Fragment>
            <div style={{
                display: "grid",
                gap,
                gridTemplateColumns: `repeat(${num}, 1fr)`,
                ...margin,
                ...padding,
                ...restProps
            }}>
                {
                    list.map((item, index) => (
                        <Fragment key={index}>
                            <ModuleProvider><CardBasic {...item}/></ModuleProvider>
                        </Fragment>
                    ))
                }

            </div>
            { pagination && <div style={{marginTop: 20}}><Pagination
                align="end"
                showSizeChanger
                onChange={onChange}
                current={currentPage.current}
                total={result.total}
            /></div> }
        </Fragment>
    )
}

const Api: React.FC<CardListType>
    = ({
           callbackName,
           componentType,
           params,
           defaultValue,
           rows = 10,
           api,
           storeKey,
           dataPath,
           margin={},
            padding = {},
           ...restProps}) => {
    const {result, onChange, currentPage} = useApiComponent(api, rows, {
        defaultValue,
        params,
        callbackName,
        componentType
    });
    if(componentType === 'detail') {
        return (
            <div style={{
                ...margin,
                ...padding,
                ...restProps
            }}>
                <DetailBasic storeKey={storeKey} result={result}/>
            </div>
        )
    } else {
      return (
          <ApiList
              margin={margin}
              padding={padding}
              result={result}
              dataPath={dataPath}
              onChange={onChange}
              currentPage={currentPage}
              {...restProps}
          />
      )
    }
}

export const ApiComponent = HOCCodeWrapComponent(Api);
