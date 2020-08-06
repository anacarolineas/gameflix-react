import styled from 'styled-components';

const ButtonClear = styled.button`   
    color: var(--black);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    margin-left: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    background: var(--blackLighter);
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export default ButtonClear;
