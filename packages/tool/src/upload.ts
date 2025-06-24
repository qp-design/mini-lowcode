import { uploadGoodsFiles } from 'qj-b2c-api';

function getImage(files: Array<any>): Array<any> {
  const data = [];
  for (let file of files) {
    if (file.status) {
      data.push(Promise.resolve(file));
    } else {
      data.push(uploadGoodsFiles({ file: file.originFileObj }));
    }
  }
  return data;
}

export async function uploadImpl(files: Array<any>, preUrl = process.env.REACT_APP_BASE_URL): Promise<any> {
  if (!Array.isArray(files)) return files;
  try {
    const data = await Promise.all(getImage(files));
    console.log(data);
    return data.map((item: any) => {
      return item.status
        ? item
        : {
            uid: item.fileCode,
            name: item.fileName,
            status: 'done',
            url: preUrl + item.fileUrl
          };
    });
  } catch (error: any) {
    throw new Error(error.msg);
  }
}
