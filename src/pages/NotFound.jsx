import React from 'react';
import { useRouteError } from 'react-router-dom';

function NotFound() {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>Sorry, an unexpected error occured</p>
            <p>
                <i>{error.statusText} || {error.message}</i>
            </p>
        </div>
    );
}

export default NotFound;