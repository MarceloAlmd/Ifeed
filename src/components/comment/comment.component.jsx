import {Avatar} from '../avatar/avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'

export function Comment() {
  return ( 
    <div className={styles.comment}>
      
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png"/>

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>

            <header>

            <div className={styles.authorAndTime}> 

              <strong>Marcelo Magalhães</strong>

              <time 
                title='11 de maio as 08:13'
                dateTime='2023-03-03 16:19'>cerca de 1h atrás
              </time>

            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
            
          </header>

          <p>muito bom devon, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}