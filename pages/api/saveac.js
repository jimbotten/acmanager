import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  // const number = req.body.number;
  // const data = req.body;        
   
  // console.log('Writing to: ' + filepath)
  // fs.writeFileSync(filepath, data)
  // console.log('AC saved')

// *****************************
  
   console.log('writing to : ' + req.body.number)
  const filepath = path.join(process.env.DATASOURCE +'/'+ req.body.number + '.json')
  
  const body = JSON.stringify(req.body)
  fs.writeFileSync(filepath, body)
  
  // Sends a HTTP success code
  res.status(200).json({ data: `${body.number} ${body.title}` })
}