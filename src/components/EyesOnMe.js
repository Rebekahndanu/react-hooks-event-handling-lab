// Code EyesOnMe Component Here

import React from 'react';

function EyesOnMe() {
    function registerFocus() {
        console.log('Good!');
    }

    function registerBlur() {
        console.log('Hey! Eyes on me!');
    }

    return (
        <button onFocus={registerFocus} onBlur={registerBlur}>
            Eyes on me
        </button>
    );
}

export default EyesOnMe;