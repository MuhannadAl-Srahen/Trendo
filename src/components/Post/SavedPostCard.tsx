import { useNavigate } from 'react-router'
import { useCallback } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

type Props = {
  postImage: string
  postId: number
}

export default function SavedPostCard({ postImage, postId }: Props) {
  const navigate = useNavigate()

  const handleClick = useCallback(() => {
    navigate(`/post/${postId}`)
  }, [navigate, postId])

  return (
    <div
      onClick={handleClick}
      className='group border-border hover:border-primary/60 hover:bg-primary/10 focus:ring-primary relative block h-72 w-full cursor-pointer overflow-hidden rounded-2xl border p-0 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md focus:ring-2 focus:outline-none'
    >
      <img
        src={postImage}
        alt='Post image'
        className='h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90'
      />

      <div className='absolute bottom-3 left-3'>
        <Avatar className='border-primary h-10 w-10 border-2 transition-transform duration-300 group-hover:scale-110'>
          <AvatarFallback className='from-primary/20 to-primary/10 text-primary bg-gradient-to-br text-lg font-semibold'>
            M
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
