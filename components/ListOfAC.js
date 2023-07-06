'use client'
import { useState, useEffect } from 'react';

export const ListOfAC = () => {
  const [active, setActive] = useState();
  const [filelist, setFilelist] = useState(['1','2']);
  
  const onClickHandler = (e) =>{
    e.preventDefault();
    //console.log('clicked ' + e.target.innerText + '   type: ' + e.type);
    setActive(e.target.innerText);
  }
    
  // console.log('Page Load')

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
        <div className="ListAC">
            {filelist.map((item, index) =>
            <button className='button' key={index} onClick={onClickHandler}>{item}</button>
            )}
            <div>active</div>
            {active}
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
