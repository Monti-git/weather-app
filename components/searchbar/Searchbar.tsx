import { Input, Tooltip } from 'antd';
import { InfoCircleOutlined, UserOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useEffect, useCallback } from 'react'

import * as _ from "lodash";
import { setQuery } from 'store/location/action'
import { useAppDispatch, useAppSelector } from "store/hooks";
import cn from 'classnames';
import s from './Searchbar.module.css'

import { Layout } from 'antd';
const { Header, } = Layout;

const Searchbar = () => {

    const dispatch = useAppDispatch();
    const changeHandler = (event: any) => {
        setQuery(event.target.value)(dispatch);
    };
    const debouncedChangeHandler = useCallback(
        _.debounce(changeHandler, 300), []);

    return <Header className={cn(s.root)}>
        <label 
            className = {cn(s.label)}
        htmlFor = {"location_input"}>
            How is the weather?
        </label>
        <Input
            id = {"location_input"}
            className = {cn(s.input)}
            placeholder="Search for a place"
            prefix={<EnvironmentOutlined />}
            onChange={debouncedChangeHandler}
        />
    </Header>
}
export default Searchbar