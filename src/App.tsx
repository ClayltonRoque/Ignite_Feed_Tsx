import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import img from './assets/lukas.jpg'

import styles from './App.module.css'
import './Global.css'

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {

  type: 'paraghaph' | 'link';
  content: string;
}


interface Posts {
  id: number;
  author: Author;
  content: Content [ ];
  publishedAt: Date;
}

type AllProps = {
  id: number;
  author: Author;
  content: Content [ ];
  publishedAt: Date;
}

const posts : AllProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://i.pinimg.com/originals/1a/cf/2c/1acf2cf477f133344418dc46e3fa8ae8.gif",
      name: "Claylton Roque",
      role: "mito"
    },
    content: [
      { type: "paraghaph", content: "komi-san is beautiful" },
      { type: "paraghaph", content: "aharen-san is great" },
      { type: "link", content: "kaguya-sama is awesome" },   
    ] ,
    publishedAt: new Date('2022-06-20 18:10:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://pa1.narvii.com/6449/e931e9b09b80f82037375b1e6e59e2685ea55bdd_00.gif",
      name: "Roque",
      role: "trabaiador"
    },
    content: [
      { type: "paraghaph", content: "komi-san is beautiful ++" },
      { type: "paraghaph", content: "aharen-san is great ++" },
      { type: "link", content: "kaguya-sama is awesome ++" },
    ],
    publishedAt: new Date('2022-06-20 18:10:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://s2.glbimg.com/ESHNxNeeVocMXeikWbf2hpD47m4=/0x0:1024x682/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2018/p/6/6xsvJ6SAAT65d9bIsIIA/whatsapp-image-2018-12-01-at-20.40.01-1-.jpeg",
      name: "Lukinhas",
      role: "LukasPaquetar"
    },
    content: [
      { type: "paraghaph", content: "tirei 10 em matematica" },
      { type: "paraghaph", content: "sou ruim em fall guys" },
      { type: "link", content: "sou ruim em free fire" },
    ],
    publishedAt: new Date('2022-06-20 18:10:00')
  }
]


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post : Posts ) => {
            return <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  )
}