export const AcceptanceCriteria = async ({active}) => {
    async function getACData(active) {
        const res = await fetch(process.env.URL +'api/ac/'+active)
        if (!res.ok) {
          throw new Error('Failed to fetch an AC')
        }
        const jR = await res.json();
        const arr = JSON.parse(jR.content);
        
        return arr
      }
          
    console.log('outputting number:' + props.active);
    const AC=  await getACData(props.active);
    console.log('outputting number:' + AC.number);

    return (
        <div className="AcceptanceCriteria">
            <h2>{AC.number} {AC.title}</h2>
                {AC.description}
                <h3>Precondition</h3> 
                {AC.precondition}
                <h3>Action</h3>
                {AC.action}
                <h3>Result</h3>
                {AC.result}
        </div>
    )
}
