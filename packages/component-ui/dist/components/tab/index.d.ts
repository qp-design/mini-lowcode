import React from 'react';
type TabPosition = 'left' | 'right' | 'top' | 'bottom';
export declare const Tab: React.ForwardRefExoticComponent<{
    columns: any;
    tabPosition: TabPosition;
} & React.RefAttributes<HTMLDivElement>>;
export {};
