'use client'
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export const ACPreview = ({active}) => {
  const [acitem, setAcitem] = useState({});
  const [acpreview, setPreview] = useState({});

  const preview = {
    number:'',
    title:'',
    description:'',
    precondition:'',
    action:'',
    result:''
}

  useEffect(() => {
    const fetchFile = async () => {
      const res = await getACitemData(active);  
      setAcitem(res);
      
  };
  fetchFile()
    .catch(console.error);
}, [])

  return (
      <div className='w-full h-full flex flex-auto flex-col'>
        <div className="flex flex-row w-full items-center">
          <label className='m-4' >
            <ReactMarkdown  className='text-base' remarkPlugins={[gfm]} children={acitem.number} />
          </label>
          <label className='w-full'>
          <ReactMarkdown  className='text-base' remarkPlugins={[gfm]} children={acitem.title}></ReactMarkdown>
          </label>
        </div>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded"></hr>
        <span className="flex flex-col w-full">
          <label className='text-lg'>Business Description
          <ReactMarkdown  className='text-base border-2' remarkPlugins={[gfm]} children={acitem.description}></ReactMarkdown>
          </label>
          <label className='text-lg'>Precondition
          <ReactMarkdown  className='text-base border-2' remarkPlugins={[gfm]} children={acitem.precondition}></ReactMarkdown>
          </label>
          <label className='text-lg'>Action
          <ReactMarkdown  className='text-base border-2' remarkPlugins={[gfm]} children={acitem.action}></ReactMarkdown>
          </label>
          <label className='text-lg'>Result
          <ReactMarkdown  className='text-base border-2' remarkPlugins={[gfm]} children={acitem.result}></ReactMarkdown>
          </label>
        </span>
      </div>
  )
}

async function getACitemData(filename) {
//   console.log('calling for  : ' + filename)
  const res = await fetch(process.env.URL +'api/ac/'+filename)
  if (!res.ok) {
    throw new Error('Failed to fetch an acitem')
  }
  const jR = await res.json();
  const arr = JSON.parse(jR.content);
  
  return arr
}