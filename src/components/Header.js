import React from 'react';
import PropTypes from 'prop-types';

export const Header = ( props ) => {
    return (
        <header>
            <h3 className="text-center">{ props.title }</h3>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}