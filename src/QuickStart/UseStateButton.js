import {useState} from "react";

export default function UseStateButton () {
    const [clicked, setClicked] = useState(0)

    const handleClick = () => {
        setClicked(clicked + 1)
    }

    return (
        <button onClick={handleClick}>Clicked {clicked} times</button>
    )
}