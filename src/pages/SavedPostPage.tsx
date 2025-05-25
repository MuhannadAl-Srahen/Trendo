import SavedPostCard from '@/components/Post/SavedPostCard'
import hallowKnightImage from '@/assets/hollowKnight.jpg'
import redBlackImage from '@/assets/redBlackImage.jpg'
import programmerLifeImage from '@/assets/programmer-life.jpg'
import BMW from '@/assets/BMW.png'
import Sofia from '@/assets/sofia-alejandra.jpg'

export default function SavedPostsPage() {
  const savedPosts = [
    {
      id: 1,
      userId: 1,
      image: hallowKnightImage,
    },
    {
      id: 2,
      userId: 1,
      image: redBlackImage,
    },
    {
      id: 3,
      userId: 3,
      image: programmerLifeImage,
    },
    {
      id: 4,
      userId: 4,
      image: Sofia,
    },
    {
      id: 5,
      userId: 5,
      image: BMW,
    },
    {
      id: 6,
      userId: 6,
      image: '',
    },
  ]

  return (
    <div className='mx-auto max-w-5xl'>
      <div className='space-y-4 md:space-y-8'>
        <h1 className='text-primary text-2xl font-semibold md:text-3xl'>Saved Posts</h1>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {savedPosts.map((post) => (
            <SavedPostCard
              key={post.id}
              postId={post.id}
              postImage={post.image}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
