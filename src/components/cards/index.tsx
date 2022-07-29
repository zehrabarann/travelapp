import { useEffect, useState } from "react"
import axios from 'axios'
import { ILocations, ResultsEntity } from "../../types"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Card, Select } from 'antd';


const { Meta } = Card;
const { Option } = Select;
interface IProps {
    children: React.ReactNode,
    name: string
    message?: string

}
interface ICoords {
    lat: number,
    lng: number
}
const Cards = (props: IProps) => {

    const [data, setData] = useState<ILocations>();
    const [coords, setCoords] = useState<ICoords>()

    const getData = (coords : ICoords) => {
        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
            params: {
                bl_latitude: '11.847676',
                //bl_longitude: coords.lng,
                bl_longitude: '109.095887',
                tr_longitude: '109.149359',
                //tr_latitude: coords.lat,
                tr_latitude: '12.838442',
                restaurant_tagcategory_standalone: '10591',
                restaurant_tagcategory: '10591',
                limit: '30',
                currency: 'TR',
                open_now: 'false',
                lunit: 'km',
                lang: 'tr-TR'
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
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            console.log('kişi konumu', coords)
            if (!!coords) {
                getData(coords)
            }
            setCoords({ lat: latitude, lng: longitude });
        });
    }, []);

    const menu = (
        <Menu
            items={[
                {
                    label: <a href="https://www.antgroup.com">1st menu item</a>,
                    key: '0',
                },
                {
                    label: <a href="https://www.aliyun.com">2nd menu item</a>,
                    key: '1',
                },
                {
                    type: 'divider',
                },
                {
                    label: '3rd menu item',
                    key: '3',
                },
            ]}
        />
    );
    return (
        <>
            {props.name} 
            {props.name}
            {props.children}
            <button >
                Tılla


            </button>
            {data?.data.Typeahead_autocomplete.results?.map((element: ResultsEntity) => {
                    return (
                        <div key={element.documentId}>
                            {element.text}
                            
                            <Card hoverable style={{ width: 240 }}
                                cover={<img alt="example" />}
                            >
                                <Meta title={element.text} description="www.instagram.com" />
                                
                            </Card>

                        </div>
                    )

                })}
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