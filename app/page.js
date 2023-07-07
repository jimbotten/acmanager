'use client'
import { ListOfAC } from '../components/ListOfAC'
import AcceptanceCriteria from '../components/AcceptanceCriteria'
import { createContext, useContext, useState, useEffect } from "react";


export default function Home() {
  const ActiveContext = createContext({ active: "1.1.json",  setActive: () => {} });
    // const [ active, setActive ] = useState('1.1.json');
  const {active, setActive} = useContext(ActiveContext);

  return (
    <>
     <ActiveContext.Provider value = {{active, setActive}}>
        <div className='container px-4 width:95% m-2'>
          <main className="grid grid-cols-4 gap-4">
            <div>
                <ListOfAC setActive={setActive}/>
                outside: {active}
            </div>
            <div className="col-span-3">
            </div>
          </main>
      </div>
      </ActiveContext.Provider>
    </>
  )
}