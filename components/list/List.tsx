import { List, Avatar } from 'antd';
import { useAppDispatch, useAppSelector } from "store/hooks";
import cn from 'classnames';
import s from './List.module.css'
import City from 'components/city'

const ResultList = () => {
    const searchList = useAppSelector((state) => state.location.searchList)

    return <List
        itemLayout="horizontal"
        dataSource={searchList}
        locale={{
            emptyText: <div className = {cn(s.empty)}>
                No results yet! <br />
                Please use the search box above
            </div>
        }}
        renderItem={item => (
            <List.Item className={cn(s.item)}>
                <City {...item} />
            </List.Item>
        )}
    >
    </List>
}
export default ResultList