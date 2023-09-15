import { useContext } from 'react';
import { DataContext } from "../App" // Double dot, go back one step.


const Menu = () => {
    const {setAppState} = useContext(DataContext)
    return (
        <div className = "menu">
            <h1>Menu Component</h1>
            <button onClick = { () => setAppState("quiz")}>Start the Test</button>
        </div>
    )
}

export default Menu;