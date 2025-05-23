import { useState, useMemo } from 'react';
import { FormInstance, Image, Modal } from 'antd';
import { Wrapper } from '../wrapper';
import { QjIcon } from '@brushes/share-resource';
import { NamePath } from '@brushes/form';
import TabsPic from './component';
import {
  ContextProvider,
  useFileContext
} from './store';
import { useFullPath } from '../../hook';

const FilePreview = ({ value }: { value: string }) => {
  const fileType = useFileContext();
  const urlFile = useFullPath(value);
  return (
    <>
      {fileType === 'picture' ? (
        <Image
          preview={{
            mask: '重选',
            visible: false
          }}
          width={86}
          height={86}
          src={urlFile}
        />

      ) : (
        <div className={'video'}>
          <video
            style={{
              width: 86,
              height: 86,
              objectFit: 'cover'
            }}
            src={urlFile}
            autoPlay={false}
            controls={false}
          />
        </div>
      )}
    </>
  );
};

export function SelectPicture({
  form,
  onChange,
  name,
  parentName = [],
  fileType = 'picture'
}: {
  onChange?: (e: any) => void;
  fileType?: string;
  name: NamePath;
  parentName?: Array<any>;
  form: FormInstance;
}) {
  const value = form.getFieldValue(parentName.concat(name));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const computedName = useMemo(
    () => parentName.concat(name),
    [parentName, name]
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <ContextProvider initialValue={fileType}>
      <div className={'choose-container'} onClick={showModal}>
        {value ? (
          <FilePreview value={value} />
        ) : (
          <div className={'choose'}>
            <QjIcon
              style={{ fontSize: '24px', color: '#888', display: 'block' }}
              name={'icon-shurukuang-shangchuantupian'}
            ></QjIcon>
            <p>上传</p>
          </div>
        )}
      </div>
      <Modal
        destroyOnHidden={true}
        width={860}
        title={fileType === 'picture' ? '选择图片' : '选择视频'}
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Wrapper>
          <TabsPic
            onChange={onChange}
            name={computedName}
            handleCancel={handleCancel}
            form={form}
          />
        </Wrapper>
      </Modal>
    </ContextProvider>
  );
}
