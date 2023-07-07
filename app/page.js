'use client'
import { ListOfAC } from '../components/ListOfAC'
import AcceptanceCriteria from '../components/AcceptanceCriteria'
import ActiveProvider, { useActiveContext } from '../app/ActiveContext.js';

export default function Home() {
  // const [ activeAc, setActiveAc ] = useState('1.1.json');
  const {active, setActive} = useActiveContext();

  return (
    <>
     <ActiveProvider>
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
      </ActiveProvider>
    </>
  )
}

