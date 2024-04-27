/* eslint-disable react/prop-types */
import PostCard from './PostCard'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '@/features/post/postsSlice'

const PostList = () => {
  const posts = useSelector(selectAllPosts)
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
  return (
    <>
      {orderedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostList
