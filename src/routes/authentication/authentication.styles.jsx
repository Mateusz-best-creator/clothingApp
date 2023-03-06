import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    width: 950px;
    justify-content: space-between;
    margin: 30px auto;

    @media (max-width: 960px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 2px solid red;
        }
`


