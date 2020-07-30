import React from 'react';

function ButtonLink(props) {
    // props => { className: "o que alguém passar", href: "/", children: "nome do botão que passar"}
    return ( 
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;