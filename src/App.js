import React, { useEffect, useState } from 'react';
import { getPosts, getUser, getUsers } from './utils/getData';

const App = () => {
    const [data, setData] = useState(null);
    getPosts();
    getUser('0F8JIqi4zwvb77FGz6Wt')
    useEffect(() => {
        getUsers(setData)
    }, []);

    return (
        <div>
           {JSON.stringify(data)}
        </div>
    );
};

export { App };
