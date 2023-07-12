'use client'
import { ListOfAC } from '../components/ListOfAC'
import { AcceptanceCriteria } from '../components/AcceptanceCriteria'
import { ACPreview } from '../components/ACPreview'
import { createContext, useState } from "react";

export default function Home() {
  const ActiveContext = createContext();
  const [ active, setActive ] = useState('1.1.json');
  
  return (
    <>
     <ActiveContext.Provider value = {{active, setActive}}>
        <div className='container px-4 width:95% m-2'>
          <main className="grid grid-cols-5 gap-4 m-4">
            <div className=''>
                <ListOfAC setActive={setActive}/>
            </div>
            <div className="col-span-2 m-4">
              <AcceptanceCriteria active={active}/>
            </div>
            <div className="col-span-2 m-4">
              <ACPreview active={active}/>
            </div>
          </main>
      </div>
      </ActiveContext.Provider>
    </>
  )
}