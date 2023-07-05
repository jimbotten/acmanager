// import Link from 'react';
import { useEffect } from "react";

export const ListOfAC = async ({onClickHandler}) => {
    async function getFileData() {
        const res = await fetch(process.env.URL +'api/files')
        if (!res.ok) {
          throw new Error('Failed to fetch list of files')
        }
        const jsonResponse = await res.json();
        console.log('ListOfAC Component: Number of files ' + jsonResponse.fileNames.length)
        return jsonResponse.fileNames
      }
    
      let files = await getFileData();


    return (
        <div className="ListOfAC">
            Text here            
        </div>
    )
}
