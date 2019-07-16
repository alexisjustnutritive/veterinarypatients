import React from 'react';

export const Header = ( props ) => {
    return (
        <header>
            <h3 className="text-center">{ props.title }</h3>
        </header>
    );
}