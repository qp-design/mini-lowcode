import { DynamicForm, TransformType, FieldType } from '@brushes/form';
import { uploadImpl } from '@brushes/operate-webstore';
import { useMemo } from 'react';
import { useFileContext } from '../../store';

const UploadForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const fileType = useFileContext();
  const fieldConfig: Array<FieldType> = useMemo(
    () => [
      {
        label: '上传图片',
        name: 'basicImg',
        type: 'upload',
        rules: [{ required: true, message: '请选择图片' }],
        extraProps: {
          suffixicon: (
            <span style={{ fontSize: 12, color: '#999' }}>
              {fileType === 'picture'
                ? '建议上传1Mb以内的图片'
                : '建议上传20Mb以内的视频'}
            </span>
          ),
          accept: fileType === 'picture' ? 'image/*' : '*.mp4*, *.ogg',
          maxCount: 1,
          listType: 'picture-card',
          text: fileType === 'picture' ? '上传图片' : '上传视频'
        }
      }
    ],
    [fileType]
  );

  const transformDataConfig: Array<TransformType> = useMemo(() => {
    const num = fileType === 'picture' ? 1 : 20;
    return [
      {
        from: 'basicImg',
        to: 'basicImge',
        format: async (files: any) => {
          const { size } = files[0];
          const limited = size / 1024 / 1024 < num;
          if (!limited) {
            throw new Error(`上传失败，大小不可超过${num}MB!`);
          }
          return await uploadImpl(files);
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
