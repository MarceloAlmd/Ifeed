import styles from './sideBar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from '../avatar/avatar'

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/marceloalmd.png"/>

        <strong>Marcelo Magalhaes</strong>
        <span>Full Stack Developer</span>

      </div>


      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}