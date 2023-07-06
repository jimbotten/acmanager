'use client'
import { useState, useEffect } from 'react';

export default function AcceptanceCriteria() {
  const [active, setActive] = useState('1.1.json');
  const [acitem, setAcitem] = useState({});

  useEffect(() => {
    const fetchFile = async () => {
      const res = await getACitemData(active);  
      // console.log('fileList set')  
      setAcitem(res);
  };
  fetchFile()
    .catch(console.error);
}, [])

  return (
      <div className="AcceptanceCriteria">
          <h2>{acitem.number} {acitem.title}</h2>
              {acitem.description}
              <h3>Precondition</h3> 
              {acitem.precondition}
              <h3>Action</h3>
              {acitem.action}
              <h3>Result</h3>
              {acitem.result}
      </div>
  )
}

async function getACitemData(filename) {
  console.log('calling for  : ' + filename)
  const res = await fetch(process.env.URL +'api/ac/'+filename)
  if (!res.ok) {
    throw new Error('Failed to fetch an acitem')
  }
  const jR = await res.json();
  const arr = JSON.parse(jR.content);
  
  return arr
}
