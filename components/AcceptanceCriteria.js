'use client'
import { useState, useEffect } from 'react';

export const AcceptanceCriteria = ({active}) => {
  // const [active] = useState('1.1.json');
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
// [setData]

  return (
      <div className='p-5'>
        <form method="POST" action="/api/saveAC">
          <span className="flex flex-row">
            <label >
            <span>id</span>
              <input type="text" id="number" value={acitem.number} className='width: 0' />
              </label>
            <label><span>Title</span>
              <input type="text" id="title" value={acitem.title}/>
            </label>
          </span>
          <span className="grid grid-cols-2">
            <span>Business Description</span>
            <textarea className='' id="description" value={acitem.description}/>
            <span>Precondition</span>
            <textarea id="description" value={acitem.precondition}/>
            <span>Action</span>
            <textarea id="description" value={acitem.action}/>
            <span>Result</span>
            <textarea id="description" value={acitem.result}/>
          </span>
        </form>
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
