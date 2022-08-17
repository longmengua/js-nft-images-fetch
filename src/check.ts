import * as input from '../input/source.json';
import * as list from '../input/list.json';

const l = (list as unknown as any).default;

function checking(address: string) {
  if (address == 'H1oxurPttDRYgD7WqxH8LeBhnQbH4QPsnYmhyMnjKe2f') {
    debugger;
  }
  if(!l?.includes(address)) {
    console.log(`"${address}",`)
  }
}

const json = (input as unknown as any).default;
json.map((v: any) => checking(v.nft_token_address))