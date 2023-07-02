import Image from 'next/image'
import { ListOfAC } from '../components/ListOfAC'
import { AcceptanceCriteria } from '../components/AcceptanceCriteria'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <ListOfAC titles='1.1' />
        <AcceptanceCriteria             
            number='1.1' 
            title='Create Employee'
            description='This use-case covers employee creation'
            precondition='The employee does not already exist'
            action='The employee is created in a vault'
            result='The employee is created downstream' 
            />
    </main>
  )
}
