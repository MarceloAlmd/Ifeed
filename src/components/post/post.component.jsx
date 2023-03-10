import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from '../comment/comment.component'
import {Avatar} from '../../components/avatar/avatar'
import styles from './post.module.css'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {
  const [comments, setComments] = useState([1,2])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()
    
    setComments([...comments, comments.length + 1 ])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>

            <strong>{author.name}</strong>
            <span>{author.role}</span>
            
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>


      <div className={styles.content}> 
        {
          content.map(line => {
            if(line.type === 'paragraph') {
              return <p>{line.content}</p>
            } else if (line.type ='link') {
              return <p><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu FeedBack</strong>
        <textarea 
          placeholder='Deixe um Comentário'
        /> 

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>



      <dir className={styles.commentList}> 
        {
          comments.map(comment => {
            return <Comment />
          })
        }
      </dir>

    </article>
  )
}