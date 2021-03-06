import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {sidebarToggle as sidebarToggleAction} from '../actions/creators/sidebar';

class Sidebar extends React.Component {
    static PropTypes = {
        isSidebarToggled: PropTypes.bool.isRequired,
        sidebarToggleAction: PropTypes.func.isRequired
    };

    closeSidebar = () => {
        this.props.sidebarToggleAction(false)
    };

    render() {
        const {isSidebarToggled, role, isAdmin} = this.props;

        const sidebarCls = isSidebarToggled ? ' sidebar--toggled' : '';
        return (
            <aside className={`sidebar${sidebarCls}`} onClick={this.closeSidebar}>
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
                        <Link to='/user-profile' className='sidebar-nav__link'>
                            Личный кабинет
                        </Link>
                    </li>
                    <li className='sidebar-nav__item'>
                        <Link to='/orders' className='sidebar-nav__link'>
                            Мои заказы
                        </Link>
                    </li>
                  {(role === 'storehouse' || isAdmin) && <li className='sidebar-nav__item'>
                        <Link to='/products-create' className='sidebar-nav__link'>
                            Создание товара
                        </Link>
                    </li>}
                    <li className='sidebar-nav__item'>
                        <a href='#' className='sidebar-nav__link'>
                            Списки
                        </a>
                        <ul className='sidebar-dropdown'>
                          {(role === 'storehouse' || isAdmin) && <li className='sidebar-dropdown__item'>
                                <Link to='/stores' className='sidebar-dropdown__link'>
                                    Список торговых точек
                                </Link>
                            </li>}
                          {(role === 'store'|| isAdmin) &&
                            <li className='sidebar-dropdown__item'>
                                <Link to='/companies' className='sidebar-dropdown__link'>
                                    Список фирм
                                </Link>
                            </li>}
                          {(role === 'storehouse' || isAdmin) && <li className='sidebar-dropdown__item'>
                              <Link to='/products' className='sidebar-dropdown__link'>Список товаров</Link>
                            </li>}
                        </ul>
                    </li>
                  {role === 'storehouse' && <li className='sidebar-nav__item'>
                      <Link to='/product-reports' className='sidebar-nav__link'>
                          Отчет по продажам
                      </Link>
                  </li>}
                  {role === 'storehouse' && <li className='sidebar-nav__item'>
                      <Link to='/location-settings' className='sidebar-nav__link'>
                          Охват районов
                      </Link>
                  </li>}

                    <li className='sidebar-nav__item'>
                        <Link to='/user-agreement' className='sidebar-nav__link'>
                            Пользовательское соглашение
                        </Link>
                    </li>
                    <li className='sidebar-nav__item'>
                        <Link to='/contact-us' className='sidebar-nav__link'>
                            Связаться с нами
                        </Link>
                    </li>
                </ul>
            </aside>
        )
    }
}

function mapToProps(state) {
    const isSidebarToggled = state.application.isSidebarToggled;
    const role = state.auth.profile.role;

    return {
      isSidebarToggled,
      role,
      isAdmin: state.auth.profile.is_superuser
    }
}

export default connect(mapToProps, {sidebarToggleAction})(Sidebar);