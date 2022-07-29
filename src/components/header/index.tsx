import { Layout, Col, Tabs, Row } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Input } from 'antd';


// const { Header } = Layout;
// const { TabPane } = Tabs;
const { Search } = Input;

function HeaderComponent() {


    const onChange = (key: string) => {
        console.log(key);
    };
    const Desing = (
        <>
            <Row>
                <Col span={4} >
                    resimö
                </Col>
                <Col span={20}>
                    <div className="asd" >logo</div>
                </Col>
            </Row>
        </>
    )


    const onSearch = (value: string) => console.log(value);

    return (
        <>
            <Row className='p-5 bg-[#0748d7]'>
                <Col span={4} >
                    <div className="flex items-center" >
                        <p>Travel Advisor</p>
                    </div>
                </Col>
                <Col span={20}>
                    <div className='flex justify-end items-center'>
                        <p>Explore New Places</p>
                        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                    </div>
                    
                    
                </Col>
            </Row>

        

        </>
    );
}
export default HeaderComponent;
