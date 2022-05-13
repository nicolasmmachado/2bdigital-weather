import * as C from "../AppStyle";
import { useState } from "react";

type Props = {
    clear?: boolean;
    exFunction: (text: string) => void;
}

export const Search = ({  exFunction }: Props) => {
    const [city, setCity] = useState<string>("");

    const handleClick = () => {
        if (city.length > 2) {
            exFunction(city);
            setCity("");
        }
        else{
            alert("Favor preencher o nome da cidade corretamente.")
        }
    }

    const clearAll = () => {
        setCity("");
        test();
    }

    const test = () => {
        exFunction(city);
    }

    return (
        <>
            <C.SearchInput type="text" onChange={eve => setCity(eve.target.value)} value={city} />
            <C.Box>
                <C.Button onClick={handleClick}>Buscar</C.Button>
                <C.Button onClick={clearAll}>Limpar</C.Button>
            </C.Box>
        </>
    )
}