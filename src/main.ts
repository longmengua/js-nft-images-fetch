import axios from 'axios';
import path from 'path';
import fs from 'fs';
import * as input from '../input/source.json';

let count = 0;
export class Utility {
  static download_image_by_url = async (value: {
    nft_token_address: string;
    nft_image_url: string;
    nft_id: string;
  }, option: {
    folderName: string;
  }) => {
    const { folderName } = option;
    try {
      const dir = path.join(__dirname, `../${folderName}`);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      const isPng = value.nft_image_url.includes('.png')
      const filePath = path.join(dir, `${value.nft_token_address}${isPng ? '.png' : '.jpg'}`);
      const response = await axios({
        method: 'GET',
        url: value.nft_image_url,
        responseType: 'stream',
      });
      await response.data.pipe(fs.createWriteStream(filePath));
      return 1;
    } catch (e) {
      console.error(value);
      return 0;
    }
  };
}
const json = (input as unknown as any).default;
console.log('length', json.length);
if (Array.isArray(json)) {
  const count1 = json.slice(0, 1000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count1:${count1.length}`);

  const count2 = json.slice(1001, 2000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count2:${count2.length}`);

  const count3 = json.slice(2001, 3000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count3:${count3.length}`);

  const count4 = json.slice(3001, 4000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count4:${count4.length}`);

  const count5 = json.slice(4001, 5000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count5:${count5.length}`);

  const count6 = json.slice(5001, 6000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count6:${count6.length}`);

  const count7 = json.slice(6001, 7000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count7:${count7.length}`);

  const count8 = json.slice(7001, 8000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count8:${count8.length}`);

  const count9 = json.slice(8001, 9000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count9:${count9.length}`);

  const count10 = json.slice(9001, 10000).map((v: any) => Utility.download_image_by_url(v, {
    folderName: 'output'
  })).filter(async v => await v === 1);
  console.log(`count10:${count10.length}`);
}