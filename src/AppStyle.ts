import styled from "styled-components";

type PropsWeather = {
    display?: "none" | "flex";
};

type PropWind = {
    transform?: number;
};

export const Main = styled.main`
    margin: 50px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-height: 200px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: linear-gradient(to top, #025972 0%, #99ffcc 100%);
`;

export const Button = styled.button`
    width: 100px;
    padding: 5px 10px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-weight: bold;
    color: #000;
    background: #fff;
    transition: all .3s;

    &:hover{
        background: #FFAC47;
    }
`;

export const SearchInput = styled.input`
    margin: 10px;
    width: 250px;
    height: 30px;
    outline: none;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-weight: 500;
    padding: 0 8px;
    color: #000;
`;

export const Box = styled.div`
    width: 220px;
    display: flex;
    justify-content: space-between; 
`;

export const Loading = styled.div`
    text-align: center;
    margin: 20px;
    font-weight: bold;
`;

export const WeatherContainer = styled.article<PropsWeather>`
    display: ${props => props.display || "none"};
    flex-direction: column;
    align-items: center;
    min-width: 250px;
    max-width: 90%;

    div{
        text-align: center;
    }

    img{
        margin: -30px 0 -10px 0;
        width: 100px;
        height: 100px;
    }
`;

export const WindArea = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 50%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-top: 25px;`
;

export const WindDirection = styled.div<PropWind>`
    &&{
        transform: rotate(${props => props.transform || 0}deg);
        width: 15px;
        height: 1px;
        background-color: #000;
        transform-origin: left;
    }
`;