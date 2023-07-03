import { ListOfAC } from '../components/ListOfAC'
import { AcceptanceCriteria } from '../components/AcceptanceCriteria'
import { useState } from 'react';

export default async function Home() {
const [active, setActive] = useState('1.1.json')
const value: string ='1.1.json';

  return (
    <div className='container px-4 width:95% m-2'>
    <main className="grid grid-cols-4 gap-4">
      <div>
        <ListOfAC setActive={value => setActive(value)}/>
      </div>
      <div className="col-span-3">
        <AcceptanceCriteria active='1.1.json' />
      </div>
    </main>
    </div>
    
  )
}

