import axios from 'axios';
import path from 'path';
import fs from 'fs';
import * as input from '../input/source.json';

let count = 0;
const json = (input as unknown as any).default;

console.log('length', json.length);

class Utility {
  static download_image_by_url = async (value: {
    nft_token_address: string;
    nft_image_url: string;
    nft_id: string;
  }, option: {
    folderName: string;
  }) => {
    const { folderName } = option;
    if(value.nft_image_url === null) {
      console.error('address without image url : ' + value.nft_token_address);
      return;
    }
    try {
      const dir = path.join(__dirname, `../${folderName}`);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      const isPng = value.nft_image_url.includes('.png')
      const filePath = path.join(dir, `${value.nft_token_address}${isPng ? '.png' : '.jpg'}`);
      if (fs.existsSync(filePath)) {
        console.log('already existed : ' + value.nft_token_address)
        return;
      }
      const response = await axios({
        method: 'GET',
        url: value.nft_image_url,
        responseType: 'stream',
      });
      const w = await response.data.pipe(fs.createWriteStream(filePath));
      w.on('close', () => {
        count++;
        console.log('total success number : ' + count);
      });
    } catch (e) {
      console.error('download failed : ' + value.nft_image_url);
    }
  };
}

if (Array.isArray(json)) {
  json.slice(0, 24578).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  }))
}