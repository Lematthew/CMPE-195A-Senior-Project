import React from 'react';

// const StorePageID = ({match}) => (
//   <main style={{ padding: "1rem 0" }}>
//   <h2>This is a Store Page with an ID!</h2>
// </main>
// );

function StorePageID ({ route, navigation }) {
    const { title } = route.params;

    const logConsole = ()=> {

        console.log(JSON.stringify(title))
    
    };

    return (
        <main style={{ padding: "1rem 0" }}>
        <h2 onClick={logConsole}>This is a Store Page with an ID!</h2>
        </main>
    );
}

export default StorePageID;