import { NamePath } from '@brushes/form';
import { QjIcon } from '@brushes/share-resource';
import { Wrapper } from '../../../wrapper';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import UploadForm from './uploadForm';
import { useQueryClient } from '@tanstack/react-query';

const UploadImg = ({ name }: { name: NamePath }) => {
  const queryClient = useQueryClient();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSubmit = (...args: Array<any>) => {
    const [_, suc] = args;
    suc();
    setIsModalVisible(false);
    // @ts-ignore
    queryClient.invalidateQueries([name + '']);
  };

  return (
    <>
      <Button
        onClick={showModal}
        type="primary"
        icon={
          <QjIcon
            style={{ fontSize: 16, fontWeight: 500 }}
            name={'icon-shangyi'}
          ></QjIcon>
        }
      >
        本地上传
      </Button>
      <Modal
        destroyOnClose={true}
        width={860}
        title="本地上传"
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Wrapper>
          <UploadForm onSubmit={onSubmit} />
        </Wrapper>
      </Modal>
    </>
  );
};

export default UploadImg;
