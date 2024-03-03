'use client';

import Item from '../Item/Item'
import styles from './sidebar.module.css'

export default function Sidebar({  }) {
    const items = [
        {emoji: '😊', name: 'afsdfsdbc'},
        {emoji: '😊', name: 'afsdfbc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'sdfabc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'asdfbc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abfc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abfsdfsc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'absdc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'absdfsdc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'absassc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'abc'},
        {emoji: '😊', name: 'adasc'},
        {emoji: '😊', name: 'adasdadadadasdbc'},
        {emoji: '😊', name: 'c'},
    ]
    return (
        <div className={styles.sidebar}>
            {/* <h1>Sidebar</h1> */}
            { items?.map((item, idx) => (
                <Item key={idx} emoji={item.emoji} name={item.name}/>
            )) }
        </div>
    )
}