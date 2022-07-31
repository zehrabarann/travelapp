import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { Datum, IMapData, IResult } from "../../types"
import {    Card, Select } from 'antd';


const { Meta } = Card;
const { Option } = Select;
interface IProps {
    children: React.ReactNode,
    name: string
    message?: string
    mapValue: IMapData

}
interface IPrevProps {
    current?: IMapData
}
const Cards = (props: IProps) => {

    const [data, setData] = useState<IResult>();
    const prevProps: IPrevProps = useRef()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getData = () => {
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
            params: {
                bl_latitude: props.mapValue.bounds.sw.lat,
                bl_longitude: props.mapValue.bounds.sw.lng,
                tr_longitude: props.mapValue.bounds.ne.lng,
                tr_latitude: props.mapValue.bounds.ne.lat,
            },
            headers: {
                'X-RapidAPI-Key': '1f8843583bmsh21f72fbc5ede34fp13bc40jsnb7a7f3f1d22f',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log("json", JSON.stringify(response.data));
            setData(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }


    useEffect(() => {
        if (prevProps.current !== props.mapValue) {
            prevProps.current = props.mapValue;
            getData()
        }

    }, [props,getData]);

    return (
        <>
            {props.name}
            {props.name}
            {props.children}
            <button >
                Tılla


            </button>
            <div className="bg-red-500">
                {data?.data?.map((element: Datum, index: number) => {
                    return (
                        <div className="flex" key={element.location_id + index}>

                            <Card hoverable style={{ width: 240 }}
                                cover={<img alt="example" src={element.photo?.images.thumbnail.url} height={element.photo?.images.thumbnail.height} width={element.photo?.images.thumbnail.width} />}
                            >
                                <Meta title={element.name} description="www.instagram.com" />

                            </Card>

                        </div>
                    )

                })}

            </div>
            <div>
                <Select defaultValue="restaurants" style={{ width: 400 }}>
                    <Option value="restaurants">Restaurants</Option>
                    <Option value="hotels">Hotels</Option>
                    <Option value="attractions">Attractions</Option>
                </Select>

                <Select defaultValue="raiting" style={{ width: 400 }}>
                    <Option value="all">All</Option>
                    <Option value="raiting3">3.0</Option>
                    <Option value="raiting4">4.0</Option>
                    <Option value="raiting4.5">4.5</Option>
                </Select>

            </div>



        </>
    )
}

export default Cards