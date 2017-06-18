import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Sidebar extends React.Component {
    static PropTypes = {
        isSidebarToggled: PropTypes.bool.isRequired
    };

    render() {
        const {isSidebarToggled} = this.props;

        const sidebarCls = isSidebarToggled ? ' sidebar--toggled' : ''
        return (
            <aside className={`sidebar${sidebarCls}`}>
                <ul className='sidebar-nav'>
                    <li className='sidebar-nav__item sidebar-nav__item--main'>
                        Навигация
                    </li>
                    <li className='sidebar-nav__item'>
                        <a href='#' className='sidebar-nav__link'>
                            Главная
                        </a>
                    </li>
                    <li className='sidebar-nav__item'>
                        <a href='#' className='sidebar-nav__link'>
                            Профиль компании
                        </a>
                    </li>
                    <li className='sidebar-nav__item'>
                        <a href='#' className='sidebar-nav__link'>
                            Создание товара
                        </a>
                    </li>
                    <li className='sidebar-nav__item'>
                        <a href='#' className='sidebar-nav__link'>
                            Списки
                        </a>
                        <ul className='sidebar-dropdown'>
                            <li className='sidebar-dropdown__item'>
                                <a href='#' className='sidebar-dropdown__link'>Список торговых точек</a>
                            </li>
                            <li className='sidebar-dropdown__item'>
                                <a href='#' className='sidebar-dropdown__link'>Список складов</a>
                            </li>
                            <li className='sidebar-dropdown__item'>
                                <a href='#' className='sidebar-dropdown__link'>Список товаров</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
        )
    }
}

function mapToProps(state) {
    const isSidebarToggled = state.application.isSidebarToggled;

    return {
        isSidebarToggled
    }
}

export default connect(mapToProps)(Sidebar);