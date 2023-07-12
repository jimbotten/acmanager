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

const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    number: e.target.number.value,
    title: e.target.title.value,
    description: e.target.description.value,
    precondition: e.target.precondition.value,
    action: e.target.action.value,
    result: e.target.result.value
  }
  const JSONdata = JSON.stringify(data);
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSONdata,
  }
  
  const resp = await fetch('/api/saveac',options)
  const result = await resp.json()
  const res = await getACitemData(active);  
  // console.log('fileList set')  
  setAcitem(res);
  console.log('saved');
}

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className='w-full h-full flex flex-auto flex-col'>
        <div className="flex flex-row w-full items-center">
          <label className=''>ID
            <input className='w-16' type="text" name='number' defaultValue={acitem.number} />
          </label>
          <label className='w-full'>Title
            <input className='w-full' type="text" name='title' defaultValue={acitem.title}/>
          </label>
        </div>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr>
        <span className="flex flex-col w-full">
          <label>Business Description
          <textarea className='w-full' name="description" defaultValue={acitem.description}/>
          </label>
          <label>Precondition
          <textarea className='w-full' name="precondition" defaultValue={acitem.precondition}/>
          </label>
          <label>Action
          <textarea className='w-full' name="action" defaultValue={acitem.action}/>
          </label>
          <label>Result
          <textarea className='w-full' name="result" defaultValue={acitem.result}/>
          </label>
        </span>
        <span className='flex-row'>
          <button className='self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
            type='reset'>Reset</button>
          <button className='self-start bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            type='submit'>Save</button>
        </span>
      </div>
    </form>
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