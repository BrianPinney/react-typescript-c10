import { useState } from "react"

interface homeProp {
    name: string,
    age: number
}


export default function HomePage ({name, age}: homeProp) {
const [counter, setCounter] = useState<number>(0)
    return (
        <>
        Home Page {name} {age}
        </>
    )

}