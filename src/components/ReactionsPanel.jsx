/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { addReaction } from '@/features/post/postsSlice'
const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
}

const ReactionsPanel = ({ post }) => {
  const dispatch = useDispatch()
  if (!post) return null
  const handleAddReaction = (post, name) => {
    dispatch(addReaction({ postId: post.id, reaction: name }))
  }
  return (
    <div className='flex justify-evenly'>
      {Object.entries(post.reactions).map(([name, count]) => {
        return (
          <div
            key={name}
            className='cursor-pointer'
            onClick={() => handleAddReaction(post, name)}
          >
            {reactionEmoji[name]} {count}
          </div>
        )
      })}
    </div>
  )
}

export default ReactionsPanel
