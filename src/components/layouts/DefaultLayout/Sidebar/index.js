import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const SideBar = () => {
    return <aside className={cx('wrapper')}></aside>;
};

export default SideBar;
