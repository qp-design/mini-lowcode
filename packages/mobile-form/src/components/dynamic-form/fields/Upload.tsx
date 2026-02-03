import {useComponent} from '@brushes/simulate-component-mini';

export default function UploadField({ ...extraProps }) {
  const { Uploader } = useComponent();
  const mockUpload = async (file: File) => {
    return {
      url: URL.createObjectURL(file),
      file
    };
  };

  return <Uploader {...extraProps} upload={mockUpload} />;
}
