import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dataDirectory = path.join(process.cwd(), 'data');

export default function handler(req, res) {
  // Get file names under /data
  const fileNames = fs.readdirSync(dataDirectory);
  
  let fileContents = ""
  let id = ""
  
  const allACData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    id = fileName.replace(/\.md$/, '');
    
    // Read markdown file as string
    const fullPath = path.join(dataDirectory, fileName);
    fileContents = fs.readFileSync(fullPath, 'utf8');
  });
  //  Use gray-matter to parse the post metadata section
   const matterResult = matter(fileContents);
    
    // Combine the data with the id

  res.status(200).json({ 
    id,
    ...matterResult
  });
}