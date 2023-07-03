import { Link } from 'react'

export const  ListOfAC = async (active, onSelect) => {
    async function getFileData() {
        const res = await fetch(process.env.URL +'/api/files')
        if (!res.ok) {
          throw new Error('Failed to fetch list of files')
        }
        const jsonResponse = await res.json();
        console.log('num of files ' + jsonResponse.fileNames.length)
        return jsonResponse.fileNames
      }
          
    let files= await getFileData();
    
    return (
        <div className="ListOfAC">
            <ul>
                { files.map((files) => 
                    <li><Link href='#' onClick={onSelect} > {files}</Link></li>   )
                }
            </ul>
        </div>
    )
}
