import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paraghaph' | 'link';
    content: string;
}

interface postProps {
    author: Author;
    publishedAt: Date;
    content: Content[ ];
}


export function Post({ author, publishedAt, content }: postProps) {

    const [comments, setComments] = useState([
        'Post muito bacana, hein?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()


        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        // event.target.setCustomValadity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment == commentToDelete;
        })
        setComments(commentsWithoutDeletedOne);
    }


    const isNewCommentEmpty = newCommentText.length == 0;
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}> {publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paraghaph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder="Deixe um comentário"
                    name="comment"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required>
                </textarea>
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })} </div>
        </article>
    )
}