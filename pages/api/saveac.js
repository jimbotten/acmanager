// const fs = require('fs')
// const path = require('path')
import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    const number = req.body.number;
        
    let data = JSON.stringify(req)
    let filepath = path.join('data'+req.body.number+'.json')
    fs.writeFileSync(filepath, data)
    console.log('AC saved')

    res.status(200).json({ text: 'Saved'})
  }