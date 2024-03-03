import styles from './item.module.css'

export default function Item({ emoji, name }) {
    return (
        <div className={styles.item}>
            <span>{ emoji }</span>
            <span>{ name }</span>
        </div>
    )
}