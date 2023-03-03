import styles from './post.module.css'
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <img className={styles.avatar} src="https://github.com/marceloalmd.png" />

          <div className={styles.authorInfo}>

            <strong>Marcelo Magalhaes</strong>
            <span>Full Stack Developer</span>

          </div>
        </div>

        <time 
          title='11 de maio as 08:13'
          dateTime='2023-03-03 16:19'>Publicado há 1h</time>
      </header>


      <div className={styles.content}> 
        <p> Fala galeraa 👋</p>

        <p> 
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>👉<a href="#">jane.design/doctorcare</a></p>

        <p> <a href="#"> #novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}