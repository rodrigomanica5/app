import React from 'react';
import CartWidget from './CartWidget';

function NavBar(props) {

    return (
        <>
            <nav>
                <div className="tabs">
                    {props.sections.map((element, index) => {
                        return <a key={index} href={element.link}>{element.tag}</a>
                    })}
                </div>
                <CartWidget/>
            </nav>
        </>
    )
};

export default NavBar;