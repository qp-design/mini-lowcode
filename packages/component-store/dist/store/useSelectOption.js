var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useRef, useState, useEffect } from 'react';
import { get as getIo } from '@brushes/optimize';
export function useSelectOption(form, api, linkKey) {
    console.log(5, linkKey);
    const isMounted = useRef(true);
    const [options, setOption] = useState([]);
    const linkKeyValue = linkKey ? form.getFieldValue(linkKey) : '';
    useEffect(() => {
        (() => __awaiter(this, void 0, void 0, function* () {
            if (!isMounted.current) {
                // form.setFieldValue('cityCode', undefined);
                // form.setFieldValue('areaCode', undefined);
            }
            if (!linkKeyValue) {
                setOption([]);
                return;
            }
            const data = yield getIo(api, { [linkKey]: linkKeyValue });
            console.log(22, data);
            const arr = data.list.map((item) => {
                return {
                    value: item.areaCode,
                    label: item.areaName
                };
            });
            setOption(arr);
        }))();
        return () => {
            isMounted.current = false;
        };
    }, [linkKeyValue, form]);
    return {
        options
    };
}
