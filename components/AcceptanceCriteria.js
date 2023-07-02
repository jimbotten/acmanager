export const AcceptanceCriteria = (props) => {
    return (
        <div className="AcceptanceCriteria">
            <h2>{props.number} {props.title}</h2>
                <p>{props.description}</p>
                <h3>Precondition</h3> 
                {props.precondition}
                <h3>Action</h3>
                {props.action}
                <h3>Result</h3>
                {props.result}
        </div>
    )
}
