// const products = [
//     {title: 'Cabbage', id: 1},
//     {title: 'Garlic', id: 2},
//     {title: 'Apple', id: 3},
// ];

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];
export default function RenderingList() {
    // const listItem = products.map(product => {
    //     return <li key={product.id}>{product.title}</li>
    // })

    const listItems = products.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return <ul>{listItems}</ul>

}