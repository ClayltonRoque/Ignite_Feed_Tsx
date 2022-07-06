import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import img from '../assets/kawaii2.gif'

import { Avatar } from './Avatar'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={img} alt="kawaii" />

            <div className={styles.profile}>
                <Avatar src="https://i.pinimg.com/originals/72/6e/5a/726e5ab4a197fb579eac39575e801ac6.gif" />
                <strong>clayltonRoque</strong>
                <span>mito</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}