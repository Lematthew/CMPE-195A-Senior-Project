import React from 'react';
import { useParams } from 'react-router-dom';

function StorePageID ({ route, navigation }) {
    const { id } = useParams();

    return (
        <main style={{ padding: "1rem 0" }}>
        <h2>This is a Store Page for {id}!</h2>
        </main>
    );
}

export default StorePageID;