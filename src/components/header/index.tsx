import { Col, Row } from 'antd';
import { Input } from 'antd';
import axios from 'axios';
import { useState } from 'react';

const { Search } = Input;

function HeaderComponent(lat: any, lng: any) {

    const [autocomplete, setAutocomplete] = useState(null);
    const [search, setSearch] = useState("")
    const onSearch = (value: string) => console.log(value);
    const onLoad = (autoC: any) => setAutocomplete(autoC);

    const onChange = (e: any) => {
        setSearch(e.target.value)
        console.log(setSearch)
    }

    return (
        <>
            <Row className='p-5 bg-[#0748d7] mb-[15px]'>
                <Col span={4} className='flex' >
                    <div className="flex items-center" >
                        <p className='text-white text-[20px]'>Travel Advisor</p>
                    </div>
                </Col>
                <Col span={20}>
                    <div className='flex justify-end items-center'>
                        <p className='text-white text-[15px] font-semibold pr-5'>Explore New Places</p>
                        <Search placeholder="input search text" onChange={onChange} onLoad={onLoad} style={{ width: 200 }} />

                    </div>


                </Col>
            </Row>
        </>
    );
}
export default HeaderComponent;
