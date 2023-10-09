import React, { useState, useLayoutEffect } from 'react';

function Layout() {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        // Этот код выполнится синхронно после изменения DOM
        const element = document.getElementById('my-element');
        const newWidth = element.offsetWidth;
        setWidth(newWidth);
    }, []); // Здесь пустой массив зависимостей, чтобы хук сработал только после монтирования компонента

    return (
        <div>
            <p>Ширина элемента: {width}px</p>
            <div id="my-element">Этот элемент</div>
        </div>
    );
}

export default Layout;