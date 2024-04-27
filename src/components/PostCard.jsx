/* eslint-disable react/prop-types */
import ReactionsPanel from './ReactionsPanel'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Separator } from './ui/separator'

const PostCard = ({ post }) => {
  const { title, content, userId, date } = post
  return (
    <Card className='w-1/4 mt-4'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <Separator />
      <CardFooter className='flex justify-between'>
        <p className=''>{userId ? userId : 'Anonimo'}</p>
        <p className=''>{date ? date : 'Sin fecha'}</p>
      </CardFooter>
      <ReactionsPanel post={post} />
    </Card>
  )
}

export default PostCard
