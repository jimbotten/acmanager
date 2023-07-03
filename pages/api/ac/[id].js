import fs from 'fs';
import * as path from 'path';
import * as matter from 'gray-matter';

const dataDirectory = path.basename(process.env.DATASOURCE);

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  
 
  const filename = req.query.id;
  const fullPath = path.join(dataDirectory, filename);
    
  const fileContents = fs.readFileSync(fullPath, 'utf8');
//  Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  
  res.status(200).json({ 
    ...matterResult
  });
}

