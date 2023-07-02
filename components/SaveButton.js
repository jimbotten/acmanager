'use client'
// const fs = require('fs')
// const path = require('path')
// import fs from 'fs'
// import path from 'path'

export const SaveButton = (props) => {
    function handleClick() {
        // let data = JSON.stringify(props)
        // let filepath = path.join(props.number+'.json')
        // fs.writeFileSync(filepath, data)
        console.log('AC saved')
    }
    return (
        <div className="Button">
            <button onClick={handleClick}>Save</button>
        </div>
        
    )
}