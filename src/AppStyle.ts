import styled from "styled-components";



export const Main = styled.main`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-height: 200px;
    align-items: center;
    justify-content: center;
    background-color: #def;
    border-radius: 10px;
`;

export const SearchButton = styled.button`
    width: 100px;
    border: 1px solid #aaa;
    border-radius: 6px;
    font-weight: bold;
`;

export const SearchInput = styled.input`
    margin: 10px;
    width: 250px;
    height: 30px;
    outline: none;
    border: 1px solid #aaa;
    border-radius: 8px;
    background-color: #eee;
    font-weight: 500;
    padding: 0 8px;
`;

export const WeatherContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`; 