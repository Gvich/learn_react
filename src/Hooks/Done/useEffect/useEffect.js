import React, { useState, useEffect } from 'react';

function ExampleComponent() {
    const [count, setCount] = useState(0);

    // useEffect принимает два аргумента: функцию-эффект и массив зависимостей
    useEffect(() => {
        // Этот код выполнится после каждого рендера компонента
        document.title = `Вы нажали ${count} раз`;

        // Вернуть функцию очистки, если необходимо
        return () => {
            document.title = "React App"; // Эта функция выполнится перед следующим вызовом useEffect
        };
    }, [count]); // useEffect выполнится только при изменении count

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>Нажми меня</button>
        </div>
    );
}

export default ExampleComponent;
