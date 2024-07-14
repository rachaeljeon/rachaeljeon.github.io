import React, {useState} from 'react';
import { useEffect } from 'react';


export default function Projects() {
    

    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch("/members").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])
    return (
        <div>

        </div>
    )
}