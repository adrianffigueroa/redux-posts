import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '@/features/post/postsSlice'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Textarea } from './ui/textarea'
import { selectAllUsers } from '@/features/user/userSlice'

const PostForm = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && content) {
      const authorId = users.find((user) => user.name === author).name
      console.log(authorId)
      dispatch(addPost(title, content, authorId))
    }
  }
  const canSave = Boolean(title) && Boolean(content) && Boolean(author)
  return (
    <div className='w-1/4'>
      <h1 className='text-center'>Post Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type='text'
          placeholder='Titulo del Post'
          className='mb-4'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          type='text'
          placeholder='Contenido del Post'
          className='mb-4'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Select onValueChange={(value) => setAuthor(value)}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Seleccione un Autor' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Autores</SelectLabel>
              {users.map((user) => (
                <SelectItem key={user.id} value={user.name}>
                  {user.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          type='submit'
          className={`${!canSave ? 'cursor-not-allowed mt-4' : 'mt-4'} `}
        >
          Enviar
        </Button>
      </form>
    </div>
  )
}

export default PostForm
