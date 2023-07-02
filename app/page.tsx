import { ListOfAC } from '../components/ListOfAC'
import { AcceptanceCriteria } from '../components/AcceptanceCriteria'

async function getData() {
  const res = await fetch(process.env.URL +'/api/acs')
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const ac = await getData()

  return (
    <div className='container px-4 width:95% m-2'>
    <main className="grid grid-cols-4 gap-4">
      <div>
        <ListOfAC titles='1.1 Create Employee' />
      </div>
      <div className="col-span-3"> <h3>AC's</h3>
        {ac.id}
        {ac.data.title}
        {ac.data.number}
      </div>
    </main>
    </div>
  )
}

