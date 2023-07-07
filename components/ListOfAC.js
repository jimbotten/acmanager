'use client'
import { useState, useEffect, useContext } from 'react';
// import ActiveProvider, { useActiveContext } from '../app/ActiveContext.js';

export const ListOfAC = ({ setActive }) => {
  // const {active, setActive} = useState();
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
        // <ActiveProvider>
          <div className="ListAC">
            {filelist.map((item, index) =>
              <button className='button' key={index} onClick={onClickHandler}>
                {item}
              </button>
            )}
        </div>
        // </ActiveProvider>
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
