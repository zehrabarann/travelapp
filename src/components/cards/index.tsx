import { useState } from "react"
import axios from 'axios'
import { ILocations, ResultsEntity } from "../../types"
interface IProps {
    children: React.ReactNode,
    name: string
    message?: string

}
const Cards = (props: IProps) => {

    const [data, setData] = useState<ILocations>();

    const getData = () => {
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
            params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
            headers: {
              'X-RapidAPI-Key': '353dd5be6bmshac39218188ef976p175739jsn228b74389843',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log( JSON.stringify(response.data));
              setData(response.data)
          }).catch(function (error) {
              console.error(error);
          });
    }

    return (
        <>
            {props.name}
            {props.name}
            {props.children}
            <button onClick={getData}>
                Tılla
                {data?.data.Typeahead_autocomplete.results?.map((element : ResultsEntity) => {
                    return (
                        <div key={element.documentId}>
                        {element.text}
                        </div>
                    )

                })}
            </button>
        </>
    )
}

export default Cards