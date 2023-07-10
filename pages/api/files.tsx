import fs from 'fs';
import * as path from 'path';

declare var process : {
    env: {
      DATASOURCE: string
    }
  }
  // console.log('API: dataDirectory '+ process.env.DATASOURCE)
const dataDirectory = path.join(process.env.DATASOURCE);

export default function handler(req: any, res: any) {
  const fileNames: string[] = fs.readdirSync(dataDirectory);
  res.status(200).json({ fileNames })
  // console.log('API: Number of filenames: ' + fileNames.length)
}

