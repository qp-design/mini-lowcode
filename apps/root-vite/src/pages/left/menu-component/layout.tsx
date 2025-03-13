// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {QjIcon} from '@brushes/share-resource';
import {useEditor, Element} from '@craftjs/core';
import {TypeComponent} from '../types';

const List = ({componentList}: {componentList: Array<TypeComponent>}) => {
  const {connectors} = useEditor();
  return (
    <div className={'component-list'}>
      {
        componentList.map(({Component, icon, name, isCanvas = false}, index) => (
          <div
            ref={(ref) => connectors.create(ref, <Element canvas={isCanvas} is={Component}/>)}
            key={index}
            className={'content-item'}>
            <QjIcon
              style={{
                fontSize: '40px',
                fontWeight: 500,
                display: 'block',
                color: '#1890ff'
              }}
              name={icon}
            ></QjIcon>
            <b>{name}</b>
          </div>
        ))
      }
    </div>
  )
}


export default List;
