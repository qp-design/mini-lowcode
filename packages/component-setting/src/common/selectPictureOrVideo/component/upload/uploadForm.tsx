import { DynamicForm, TransformType, FieldType } from '@brushes/form';
import { uploadImpl } from '@brushes/component-tool';
import { useMemo } from 'react';
import { useFileContext } from '../../store';
import {message} from "antd";

const UploadForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const fileType = useFileContext();
  const fieldConfig: Array<FieldType> = useMemo(
    () => [
      {
        label: '上传图片',
        name: 'basicImg',
        type: 'upload',
        rules: [{ required: true, message: '请选择图片一次上传最多20个' }],
        extraProps: {
          maxCount: 20,
          suffixicon: (
            <span style={{ fontSize: 12, color: '#999' }}>
              {fileType === 'picture'
                ? '建议上传1Mb以内的图片，一次上传最多20个'
                : '建议上传20Mb以内的视频'}
            </span>
          ),
          multiple: true,
          accept: fileType === 'picture' ? 'image/*' : '*.mp4*, *.ogg',
          listType: 'picture-card',
          text: fileType === 'picture' ? '上传图片' : '上传视频'
        }
      }
    ],
    [fileType]
  );

  const transformDataConfig: Array<TransformType> = useMemo(() => {
    const num = fileType === 'picture' ? 2 : 20;
    return [
      {
        from: 'basicImg',
        to: 'basicImge',
        format: async (files: any) => {
          const { size } = files[0];
          const limited = size / 1024 / 1024 < num;
          if (!limited) {
            message.info(`上传失败，大小不可超过${num}MB!`);
            throw new Error(`上传失败，大小不可超过${num}MB!`);
          }
          try {
            return await uploadImpl(files);
          } catch (err:any) {
            throw new Error(err);
          }
        }
      }
    ];
  }, [fileType]);

  return (
    <div style={{ padding: 5, marginTop: 15 }}>
      <DynamicForm
        transformSubmitDataConfig={transformDataConfig}
        fields={fieldConfig}
        onSubmit={onSubmit}
        saveText={'保存'}
      />
    </div>
  );
};

export default UploadForm;
