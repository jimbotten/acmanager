'use client'
import { ListOfAC } from '../components/ListOfAC'
import { AcceptanceCriteria } from '../components/AcceptanceCriteria'
import { createContext, useState } from "react";

export default function Home() {
  const ActiveContext = createContext();
  const [ active, setActive ] = useState('1.1.json');
  
  return (
    <>
     <ActiveContext.Provider value = {{active, setActive}}>
        <div className='container px-4 width:95% m-2'>
          <main className="grid grid-cols-4 gap-4">
            <div>
                <ListOfAC setActive={setActive}/>
            </div>
            <div className="col-span-3">
              <AcceptanceCriteria active={active}/>
            </div>
          </main>
      </div>
      </ActiveContext.Provider>
    </>
  )
}