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
      <div>
        <form method="POST" action="/api/saveAC">
          <span className="flex flex-col">
            <label for='title'>
              <input type="text" id="number" value={acitem.number} className='width: 0' />
              <input type="text" id="title" value={acitem.title}/>
            </label></span>
          <span className="flex flex-col">
            <label for="description">Business Description
              <input type="text" id="description" value={acitem.description}/>
            </label>
            <label for='precondition'>Precondition
              <input type="text" id="description" value={acitem.precondition}/>
            </label>
            <label for='action' className='acHeader'>Action
              <input type="text" id="description" value={acitem.action}/>
            </label>
            <label for='result' className='acHeader'>Result
              <input type="text" id="description" value={acitem.result}/>
            </label>
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
