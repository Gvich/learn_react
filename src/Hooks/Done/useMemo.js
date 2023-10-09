import React, { useState, useMemo } from 'react';

function Square() {
    const [number, setNumber] = useState(0);

    // useMemo кэширует результат выполнения функции
    const squaredNumber = useMemo(() => {
        console.log('Пересчет squaredNumber');
        return number * number;
    }, [number]); // Пересчитывается только при изменении number

    return (
        <div>
            <p>Число: {number}</p>
            <p>Квадрат числа: {squaredNumber}</p>
            <button onClick={() => setNumber(number + 1)}>Увеличить на 1</button>
        </div>
    );
}

export default Square;
