import styled from 'styled-components';

const Button = styled.button`   
    color: var(--white);
    border: 1px solid var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    background: var(--black);
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default Button;
