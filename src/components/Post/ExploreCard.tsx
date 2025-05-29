import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Bookmark, Heart } from 'lucide-react'

type User = {
  username: string
  name: string
  image: string
  date: string
  post: string
  postId: number
  hashtags: string[]
}

type ExploreCardProps = {
  post: User
  image: string
}

export default function ExploreCard({ post, image }: ExploreCardProps) {
  return (
    <Link
      to={`/post/${post.postId}`}
      className='group hover:border-primary/80 hover:bg-primary/10 relative flex cursor-pointer flex-col items-start justify-between overflow-hidden rounded-lg border transition-all duration-200 hover:scale-[1.02]'
    >
      {!image ? (
        <div className='m-auto flex aspect-square items-center justify-center text-gray-500'>
          No Image
        </div>
      ) : (
        <div className='rounded-t-lg border'>
          <img src={image} alt='post preview' className='aspect-square rounded-t-lg object-cover' />
        </div>
      )}

      <div className='absolute right-2 bottom-2 left-2 flex items-center justify-between rounded-full bg-black/30 px-4 py-2 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100'>
        <Link
          to={`/profile/${post.username}`}
          onClick={(e) => e.stopPropagation()}
          className='flex flex-row items-center gap-2'
        >
          <Avatar className='border-primary h-9 w-9 border-2 transition-transform duration-200 group-hover:scale-105'>
            <AvatarFallback className='from-primary/20 to-primary/10 text-primary text-md border bg-gradient-to-br font-semibold'>
              {post.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className='text-xs text-white'>
            @{post.username.length > 10 ? post.username.slice(0, 10) + '…' : post.username}
          </div>
        </Link>

        <div className='flex flex-row items-center gap-2'>
          <div className='flex items-center gap-1'>
            <Heart
              className='h-6 cursor-pointer text-white'
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                console.log('Liked!')
              }}
            />
            <p className='text-xs text-white'>59</p>
          </div>

          <Bookmark
            className='h-6 cursor-pointer text-white'
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log('Saved!')
            }}
          />
        </div>
      </div>
    </Link>
  )
}
