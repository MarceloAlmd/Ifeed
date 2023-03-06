import {Header} from '../src/components/header/header.component'
import { SideBar } from './components/sideBar/sideBar.component'
import { Post } from './components/post/post.component'

import './global.css'
import styles from './app.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marceloalmd.png',
      name: 'Marcelo Magalhaes',
      role: 'Full Stack Developer At SDE Incubator'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content:   'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'Marcelo.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-03 17:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content:   'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'Marcelo.design/doctorcare' },
    ],
    publishedAt: new Date('2023-03-6 10:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>

    
  )
}


