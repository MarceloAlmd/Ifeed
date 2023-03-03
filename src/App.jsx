import {Header} from '../src/components/header/header.component'
import { SideBar } from './components/sideBar/sideBar.component'
import { Post } from './components/post/post.component'

import './global.css'
import styles from './app.module.css'

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <SideBar />

        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>

    
  )
}


