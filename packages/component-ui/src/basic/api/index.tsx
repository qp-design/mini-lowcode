//@ts-nocheck
import { Fragment, useEffect } from 'react';
import { Container, Element, ModuleProvider, useModuleContext } from '@brushes/component-core-mini';
import { HOCCodeWrapComponent } from '@/tools';
import { useApiComponent } from '@brushes/component-store-web';
import { get } from 'lodash';
import {useComponent} from "@brushes/simulate-component-mini";


const CardBasic: React.FC<any> = ({ callbackName, callback, setParentModuleStore, parentStore, parentStoreKey, ...props }) => {
    const setModuleStore = useModuleContext((s) => s.setModuleStore);
    useEffect(() => {
        let obj: { [v: string]: any } = {};
        if (callbackName) {
            obj[callbackName] = callback;
        }
        if (setParentModuleStore) {
            obj.setParentModuleStore = setParentModuleStore;
        }
        if (parentStoreKey) {
            obj[parentStoreKey] = parentStore;
        }
        obj._skuInfo = props;
        setModuleStore(obj);
    }, [props, callbackName, parentStore, parentStoreKey]);

    return <Element canvas id={`card-basic`} is={Container}></Element>;
};

const DetailBasic: React.FC<any> = ({ result, storeKey, dataPath }) => {
    const setModuleStore = useModuleContext((s) => s.setModuleStore);
    useEffect(() => {
        let obj = result;
        if (dataPath) {
            obj = get(result, dataPath);
        }
        setModuleStore({
            [storeKey]: obj
        });
    }, [result, storeKey]);

    return <Element canvas id={'detail-basic'} is={Container}></Element>;
};

type CardListType = {
    gap: number;
    children?: React.ReactNode;
    mockData?: string;
    paramsRootStore?: Array<{ key: string; value: string }>;
    paramsRootStoreKey?: string;
    paramsStoreKey?: string;
    cacheParamsTime?: number;
    cacheParams?: boolean;
    isSearch?: boolean;
    storeKey: string;
    callbackName?: string;
    padding: object;
    margin: object;
    storeKeyTotal?: string;
    imgKey?: string;
    num: number;
    api: string;
    defaultValue: string;
    dataPath: string;
    rows?: number;
    paramsStore?: Array<{ key: string; value: string }>;
    params?: Array<{ key: string; value: string }>;
    pagination: boolean;
    componentType: string;
};

const ApiList: React.FC<
    Partial<CardListType> & {
    result: { [value: string]: any };
    description: string;
    loading: boolean;
    callbackName?: string;
    parentStoreKey?: string;
}
> = ({ loading, hasMore, callbackName, result, description, dataPath, padding, margin, gap, num, parentStoreKey, ...restProps }) => {
    const { View, Empty, Image } = useComponent();
    const parentStore = useModuleContext((s) => s.moduleStore[parentStoreKey]);
    const callback = useModuleContext((s) => s.moduleStore[callbackName]);
    const setModuleStore = useModuleContext((s) => s.setModuleStore);

    if (!result.length || (loading && !hasMore.current)) {
        return (
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ...margin, ...padding, ...restProps }}>
                <Empty
                    image={
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            src={Empty.PRESENTED_IMAGE_SIMPLE}
                        />
                    }
                    description={description}
                />
            </View>
        );
    }
    return (
        <Fragment>
            <View
                style={{
                    display: 'grid',
                    gap,
                    gridTemplateColumns: `repeat(${num}, 1fr)`,
                    ...margin,
                    ...padding,
                    ...restProps
                }}
            >
                {result.map((item, index) => (
                    <Fragment key={index}>
                        <ModuleProvider>
                            <CardBasic parentStoreKey={parentStoreKey} parentStore={parentStore} callbackName={callbackName} setParentModuleStore={setModuleStore} callback={callback} {...item} />
                        </ModuleProvider>
                    </Fragment>
                ))}
            </View>
        </Fragment>
    );
};

const Api: React.FC<CardListType> = ({
                                         callbackName,
                                         componentType,
                                         mockData,
                                         description,
                                         paramsStoreKey,
                                         storeKeyTotal,
                                         paramsRootStore,
                                         paramsRootStoreKey,
                                         params,
                                         defaultValue,
                                         rows,
                                         api,
                                         isSearch,
                                         storeKey,
                                         dataPath,
                                         margin = {},
                                         paramsStore,
                                         cacheParams = false,
                                         cacheParamsTime = 3,
                                         padding = {},
                                         children,
                                         ...restProps
                                     }) => {
    const { View, Overlay, Loading } = useComponent();
    const { result, loading, hasMore } = useApiComponent(api, rows, {
        defaultValue,
        params,
        callbackName,
        isSearch,
        storeKeyTotal,
        paramsRootStore,
        paramsRootStoreKey,
        paramsStoreKey,
        cacheParams,
        mockData,
        dataPath,
        cacheParamsTime,
        paramsStore,
        componentType
    });
    if (componentType === 'detail') {
        return (
            <>
                <Overlay visible={loading}>
                    <View className="wrapper" style={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Loading direction="vertical">加载中</Loading>
                    </View>
                </Overlay>
                <View
                    style={{
                        ...margin,
                        ...padding,
                        ...restProps
                    }}
                >
                    {children}
                    <DetailBasic dataPath={dataPath} storeKey={storeKey} result={result} />
                </View>
            </>
        );
    } else {
        return (
            <>
                <ApiList
                    hasMore={hasMore}
                    loading={loading}
                    description={description}
                    storeKeyTotal={storeKeyTotal}
                    callbackName={callbackName}
                    margin={margin}
                    padding={padding}
                    result={result}
                    dataPath={dataPath}
                    {...restProps}
                />
                <Overlay visible={loading}>
                    <View className="wrapper" style={{
                        display: 'flex',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Loading direction="vertical">加载中</Loading>
                    </View>
                </Overlay>
            </>
        );
    }
};

export const ApiComponent = HOCCodeWrapComponent(Api);
