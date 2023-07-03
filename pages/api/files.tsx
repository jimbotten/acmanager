import fs from 'fs';
import * as path from 'path';

declare var process : {
    env: {
      DATASOURCE: string
    }
  }

const dataDirectory = path.basename(process.env.DATASOURCE);

export default function handler(req: any, res: any) {
  // Get file names under /data
  const fileNames: string[] = fs.readdirSync(dataDirectory);
  res.status(200).json({ fileNames })
  console.log('number of filesnames: ' + fileNames.length)
}

