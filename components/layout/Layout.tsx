import { FC, useEffect } from "react";
import useSearchWeather from 'services/api/weather'
import useSearchLocation from 'services/api/location/search/Search'
import Modal from "./modal";
import cn from 'classnames'
import s from './Layout.module.css'

import { startLoading, finishLoading } from "store/UI";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import City from "components/city";
import Searchbar from "components/searchbar/Searchbar";

import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const MyLayout: FC = ({ children }) => {

    const favoriteLocations = useAppSelector(state => state.location.favoriteLocations);

    const dispatch = useAppDispatch();
    const { isLoading: searchLoading } = useSearchLocation();
    const { isLoading: weatherLoading } = useSearchWeather();

    useEffect(() => {
        if (searchLoading || weatherLoading) {
            startLoading()(dispatch);
        } else {
            finishLoading()(dispatch);
        }
    }, [searchLoading, weatherLoading])

    return <Layout className={cn(s.root)}>
        <Modal />
        <Sider width={300} className={cn("site-layout-background", s.sidebar)}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                className={cn(s.sideMenu)}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Favorite Locations">
                    {
                        favoriteLocations.map(location => <Menu.Item key={location.woeid}>
                            <City {...location} />
                        </Menu.Item>)
                    }
                </SubMenu>

            </Menu>
        </Sider>
        <Layout>
            <Searchbar />
            <Content
                className={cn(s.content)}
            >
                {children}
            </Content>
        </Layout>
    </Layout>
}

export default MyLayout;