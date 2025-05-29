import { Link } from 'react-router'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useUsers } from '../hooks/useUsers'

type Props = {
  postImage: string
  postId: number
  userId: number
}

export default function SavedPostCard({ postImage, postId, userId }: Props) {
  const { filteredUsers } = useUsers()

  const user = filteredUsers.find((user) => user.userId === userId)

  if (!user) {
    return null
  }

  if (!postImage) {
    return (
      <div className='group hover:border-primary/60 relative cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.02]'>
        <div className='flex aspect-square items-center justify-center text-gray-500'>No Image</div>
      </div>
    )
  }

  return (
    <Link
      to={`/post/${postId}`}
      className='group hover:border-primary/60 relative cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 hover:scale-[1.02]'
    >
      <img
        src={postImage}
        alt='Post image'
        className='aspect-square object-cover transition-opacity duration-300 group-hover:opacity-90'
      />

      <Link
        to={`/profile/${user.username}`}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <Avatar className='border-primary absolute bottom-2 left-2 h-10 w-10 border-2 transition-transform duration-300 group-hover:scale-110'>
          <AvatarFallback className='from-primary/20 to-primary/10 text-primary bg-gradient-to-br text-lg font-semibold'>
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </Link>
    </Link>
  )
}
