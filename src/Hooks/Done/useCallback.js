import React, {useState, useCallback, memo} from "react";

function ParentComponent () {
    const [count, setCount] = useState(0);

    // Используем useCallback, чтобы мемоизировать колбэк-функцию increment
    const handleIncrement = useCallback(()=> {
        setCount(count + 1);
    }, [count])

    return (
        <div>
            <p>Count: {count}</p>
            {/* Передаем мемоизированную колбэк-функцию в дочерний компонент */}
            <ChildComponent increment={handleIncrement}/>
        </div>
    )
}

const ChildComponent = memo (
    function ChildComponent({increment}) {
        return (
            <button onClick={increment}>Increase</button>
        )
    }
)

export default ParentComponent;