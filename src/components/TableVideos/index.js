import React from 'react';
import styles from 'styled-components';
import styled from 'styled-components';

const Table = styled.table`
    border: 1px solid white;
    width: 100vh;
    margin-bottom: 20px;
    box-sizing: border-box;
`;

function TableVideos() {
  return (
    <>
    <Table>
        <tbody>
            <tr>
                <td>Nome</td>
                <td>Descrição</td>
                <td>Editar</td>
            </tr>
            <tr>
                <td>Nome</td>
                <td>Descrição</td>
                <td>Editar</td>
            </tr>
            <tr>
                <td>Nome</td>
                <td>Descrição</td>
                <td>Editar</td>
            </tr>
        </tbody>
    </Table>

    </>
  )}

export default TableVideos;
