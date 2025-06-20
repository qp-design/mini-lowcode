import { Spin } from 'antd';
import { usePicture } from '@brushes/operate-webstore';
import { DynamicForm, NamePath } from '@brushes/form';
import { defaultFormConfig } from '../config';

import Items from './items';
import UploadImg from './upload';
import { useFileContext } from '../store';

export const PictureJsx = ({
  defaultValue,
  name,
  onValueChange
}: {
  defaultValue: any;
  name: NamePath;
  onValueChange: any;
}) => {
  const fileType = useFileContext();
  const {
    data = {},
    isLoading,
    queryImpl,
    onChange
  } = usePicture(name + '', {
    fileCtype: fileType === 'picture' ? 'png,jpg,jpeg,svg,webp' : 'mp4,ogg'
  });

  return (
    <>
      <div className={'picTop'}>
        <DynamicForm
          layout={'inline'}
          fields={defaultFormConfig}
          onSubmit={queryImpl}
          saveText={'查询'}
        />
        <UploadImg name={name} />
      </div>
      <div style={{ border: 'solid 1px #e1e1e1', padding: 10 }}>
        <Spin spinning={isLoading}>
          <Items
            onValueChange={onValueChange}
            defaultKeys={defaultValue}
            total={data.total}
            onChange={onChange}
            data={data.list}
          />
        </Spin>
      </div>
    </>
  );
};
