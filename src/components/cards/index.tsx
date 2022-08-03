import { useEffect, useRef, useState } from "react"
import axios from 'axios'
import { Datum, IMapData, IResult } from "../../types"
import { Card, Select, Rate } from 'antd';
import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';


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
    const [type, setType] = useState('restaurants')

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getData = (type: string, rating?: number) => {
        const isRating = !!rating;
        const options: any = {
            method: 'GET',
            url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
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
        if (isRating) {
            options.params.min_rating = rating
        }

        axios.request(options).then(function (response) {
            // console.log("json", JSON.stringify(response.data));
            setData(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }


    useEffect(() => {
        if (prevProps.current !== props.mapValue) {
            prevProps.current = props.mapValue;
            getData('restaurants')
        }
    }, [props, getData]);

    const onTypeChange = (e: string) => {
        setType(e);
        getData(e)
    }

    const onRatingChange = (e: string) => {
        if (e !== "1") {
            getData(type, parseInt(e));
        }
        else {
            getData(type);
        }

    }

    return (
        <>
            <div>
                <h3 className="text-[30px] font-medium">Food & Dining Around You</h3>
            </div>

            <div className="flex my-[20px]">

                <Select id="type" defaultValue={type} onChange={onTypeChange} style={{ width: 150 }} className='mr-4'>
                    <Option value="restaurants">Restaurants</Option>
                    <Option value="hotels">Hotels</Option>
                    <Option value="attractions">Attractions</Option>
                </Select>

                <Select id="rating" defaultValue={'All'} onChange={onRatingChange} style={{ width: 150 }}>
                    <Option value="1">All</Option>
                    <Option value="3">3.0</Option>
                    <Option value="4">4.0</Option>
                    <Option value="5">4.5</Option>
                </Select>

            </div>
            <div className="px-[15px] pl-0">
                {data?.data?.map((element: Datum, index: number) => {
                    return (
                        <div className="pb-4 " key={element.location_id + index}>

                            <Card className="rounded-[10px] shadow-md hover:rounded-[10px]"
                                cover={<img alt="example" src={element.photo?.images.large.url} height={element.photo?.images.large.height} width={element.photo?.images.large.width} />}
                            >
                                <Meta title={element.name} className='text-[20px] mb-4' />
                                <div className="flex items-center justify-between">
                                    <Rate allowHalf value={Number(element.rating)} disabled />
                                    <p>{element.rating}</p>
                                    <span className="flex">{element.num_reviews}
                                        <p className="pl-2">reviews</p>
                                    </span>
                                </div>
                                <div className="flex justify-between my-2">
                                    <h6>Price</h6>
                                    <p>{element.price}</p>
                                </div>
                                <div className="flex justify-between my-2">
                                    <h6>Ranking</h6>
                                    <p>{element.ranking}</p>
                                </div>
                                <div>
                                    {element?.awards?.map((award) => (
                                        <div className="flex justify-between items-center">
                                            <img src={award.images.small} alt="awards" />
                                            <p>{award.display_name}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex my-2">
                                    {element?.cuisine?.map((cuisine) => (
                                        <div className="flex justify-between items-center bg-[#e0e0e0] rounded-[16px] p-[5px] mr-2">
                                            <p>{cuisine.name}</p>
                                        </div>
                                    ))}

                                </div>

                                <div className="flex justify-between items-center my-1">
                                    <EnvironmentOutlined style={{ fontSize: '16px', color: '#0000008a' }} />
                                    <p className="text-[#626262] text-end">{element.address}</p>
                                </div>

                                <div className="flex justify-between items-center my-1">
                                    <PhoneOutlined style={{ fontSize: '16px', color: '#0000008a' }} />
                                    <p className="text-[#626262]">{element.phone}</p>

                                </div>

                                <div>
                                    <a href={element.web_url} className='uppercase text-[#0648d7] mr-[5px] p-2 hover:bg-[#3f51b50a] hover:text-[#0648d7]'>Trip Advisor</a>
                                    <a href={element.website} className='uppercase text-[#0648d7] p-2 hover:text-[#0648d7] hover:bg-[#3f51b50a]'>Web Site</a>
                                </div>
                            </Card>
                        </div>
                    )
                })}



            </div>

        </>
    )
}

export default Cards