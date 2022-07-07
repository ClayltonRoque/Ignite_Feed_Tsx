import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'


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
      avatarUrl: "https://i.pinimg.com/originals/72/6e/5a/726e5ab4a197fb579eac39575e801ac6.gif",
      name: "Claylton Roque",
      role: "Estudante"
    },
    content: [
      { type: "paraghaph", content: "Estou aprendendo a usar React e a fazer deploy com o vercel." },
      { type: "paraghaph", content: "é muito massa, upei um no link:" },
      { type: "link", content: "https://to-do-mu-three.vercel.app" },   
    ] ,
    publishedAt: new Date('2022-06-20 18:10:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://img.wattpad.com/2e09146f8bcc94885035c2b7e20f3425ac5055cb/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f503063673173484a7249787076513d3d2d3732303534313538332e313539363234666339316330363165643238363132323637373239312e676966",
      name: "Roque",
      role: "Estudante"
    },
    content: [
      { type: "paraghaph", content: "Estou começando uma nova cadeira na faculdade onde programo em java" },
      { type: "paraghaph", content: "java parece ser um javaScript tipado, parece legal."  },
      { type: "link", content: "One piece é bom demais" },
    ],
    publishedAt: new Date('2022-06-20 18:10:00')
  },
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


const aluno = [
  {
    id: 1,
    number:5,
    nome:"a",
  },
  {
    id: 2,
    number:5,
    nome:"b",
  },
]