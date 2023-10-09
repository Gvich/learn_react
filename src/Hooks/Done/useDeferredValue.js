import React, {useState, useDeferredValue} from "react";

export default function DeferredCount () {
    const [count, setCount] = useState(0)
    const deferredCount = useDeferredValue(count, { timeoutMs: 1000 });

    return (
        <div>
            <p>Значение: {deferredCount}</p>
            <button onClick={() => setCount(count + 1)}>Увеличить</button>
        </div>
    );
}