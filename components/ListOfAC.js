'use client'
import { useState, useEffect, useContext } from 'react';

export const ListOfAC = ({ setActive }) => {
  const [filelist, setFilelist] = useState(['1','2']);

  const onClickHandler = (e) =>{ setActive(e.target.innerText);}
  useEffect(() => {
      const fetchFiles = async () => {
        const res = await getFileData();  
        // console.log('fileList set')  
        setFilelist(res);
    };
    fetchFiles()
      .catch(console.error);
  }, [])

    return (
          <div >
            <ul className="list-none list-outside divide-y-2 m-1">
            { filelist.map((item, index) =>
              <li  key={index} onClick={onClickHandler}>
                <button className='rounded-r border-2 border-orange-400 m-2'>{item}</button>
              </li>
            )}
          </ul>
        </div>
    )
}

async function getFileData() {
        
  // const res = await fetch(process.env.URL +'api/files')
  const res = await fetch(process.env.URL +'api/files')
  if (!res.ok) {
    throw new Error('Failed to fetch list of files')
  }
  const jsonResponse = await res.json();
  console.log('ListOfAC Component: Number of files ' + jsonResponse.fileNames.length)
  return jsonResponse.fileNames
}
