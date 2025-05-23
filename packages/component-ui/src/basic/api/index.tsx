import React, {Fragment, useEffect, useMemo} from 'react';
import {Container, Element, HOCCodeWrapComponent, ModuleProvider, useModuleContext} from '@brushes/component-core';
import {Empty, Pagination, Spin} from "antd";
import {useApiComponent} from "component-store";
import {get} from "lodash-es";


const CardBasic: React.FC<any> = ({callbackName, retry, ...props}) => {
    const setModuleStore = useModuleContext((s) => s.setModuleStore);
    useEffect(() => {
        setModuleStore({
            _skuInfo: props,
            [callbackName]: retry
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

const DetailBasic: React.FC<any> = ({result, storeKey, dataPath}) => {
    const setModuleStore = useModuleContext((s) => s.setModuleStore);
    useEffect(() => {
        let obj = result;
        if (dataPath) {
            obj = get(result, dataPath);
        }
        setModuleStore({
            [storeKey]: obj
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
    currentPage: { current: number };
    callbackName?:string;
    pagination: boolean;
}> = (
    {
        callbackName,
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
            return get(result, dataPath, []) || [];
        }
        return result
    }, [result, dataPath]);
    const retry = useModuleContext(s=>s.moduleStore[callbackName || '']);
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
                            <ModuleProvider><CardBasic retry={retry} callbackName={callbackName} {...item}/></ModuleProvider>
                        </Fragment>
                    ))
                }

            </div>
            { pagination && <div style={{marginTop: 20}}><Pagination
                align="end"
                pageSizeOptions={[5,10,20,50,100]}
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
           pagination,
           ...restProps}) => {
    const {result, onChange, currentPage, loading} = useApiComponent(api, rows, {
        defaultValue,
        params,
        callbackName,
        componentType
    });

    if(componentType === 'detail') {
        return (
            <Spin spinning={loading}>
                <div style={{
                    ...margin,
                    ...padding,
                    ...restProps
                }}>
                    <DetailBasic dataPath={dataPath} storeKey={storeKey} result={result}/>
                    { (pagination && result.total) ? <div style={{marginTop: 20}}><Pagination
                        align="end"
                        pageSizeOptions={[5,10,20,50,100]}
                        showSizeChanger
                        onChange={onChange}
                        current={currentPage.current}
                        total={result.total}
                    /></div> : null }
                </div>
            </Spin>
        )
    } else {
      return (
          <Spin spinning={loading}>
              <ApiList
                  pagination={pagination}
                  callbackName={callbackName}
                  margin={margin}
                  padding={padding}
                  result={result}
                  dataPath={dataPath}
                  onChange={onChange}
                  currentPage={currentPage}
                  {...restProps}
              />
          </Spin>
      )
    }
}

export const ApiComponent = HOCCodeWrapComponent(Api);
