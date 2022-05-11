import * as C from "../AppStyle";
import { useState } from "react";

type Props = {
    exFunction: (text: string) => void;
}

export const Search = ({exFunction}: Props) => {
    const [city, setCity] = useState<string>("");

    const handleClick = () => {
        exFunction(city);
    }

    return (
        <>
            <C.SearchInput type="text" onChange={eve => setCity(eve.target.value)} />
            <C.SearchButton onClick={handleClick}>Buscar</C.SearchButton>
        </>
    )
}