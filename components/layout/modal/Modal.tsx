import Portal from '@reach/portal'
import { useAppDispatch, useAppSelector } from "store/hooks";
import { Modal, Spin } from 'antd';
import { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import cn from 'classnames';
import s from './Modal.module.css';
import { setModal } from 'store/UI';
import WeatherDetails from 'components/details';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const MyModal = () => {

    const dispatch = useAppDispatch();

    const {
        isLoading,
        modalContent
    } = useAppSelector((state) => state.UI)

    const weather = useAppSelector((state) => state.weather.displayWeather)
    const handleCloseModal = () => {
        setModal(null)(dispatch)
    }
    const showWeather = () => !isLoading && modalContent == "WEATHER" && weather;

    return <>
        <Modal
            visible={isLoading || modalContent != null}
            centered={true}
            cancelButtonProps = {{ghost : isLoading}}
            closeIcon={isLoading ? <></> : null}
            onCancel = {handleCloseModal}
            footer={null}
        >
            {
                isLoading && <div className={cn(s.loading)}>
                    <Spin indicator={antIcon} />
                    LOADING
                </div>
            }
            {
                showWeather() && <WeatherDetails {...weather!} />
            }

        </Modal>
    </>
    return <Portal>
        {
            isLoading && <Modal

            >
                Loading
            </Modal>
        }
        {
            !isLoading && modalContent
        }
    </Portal>
}

export default MyModal