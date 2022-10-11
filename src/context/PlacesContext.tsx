import React, { useRef, useState } from "react";
import { Datum, IMapData, IResult } from "../types";

interface IProps {
    children: React.ReactNode,
    name?: string
    message?: string
    mapValue?: IMapData

}
interface IPrevProps {
    current?: IMapData
}

export type PlacesContextType = {
    data: Datum[];
};

export interface IGlobalVaribles {
    setData: (data: IResult) => void,
    data?: IResult,
    type: string,
    setType: (type: string) => void
}

export const PlacesContext = React.createContext<PlacesContextType | IGlobalVaribles | null>(null);

// const PlacesContext = createContext();


export const PlacesProvider = ({ children }: IProps) => {
    const [data, setData] = useState<IResult>();
    const prevProps: IPrevProps = useRef()
    const [type, setType] = useState('restaurants')


    console.log('data', data)
    const values: IGlobalVaribles = {
        data, setData, type, setType

    };
    return (
        <PlacesContext.Provider value={values}>
            {children}
        </PlacesContext.Provider>
    );


}

export default PlacesContext;
