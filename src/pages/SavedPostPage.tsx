import SavedPostCard from '@/components/Post/SavedPostCard'

export default function SavedPostsPage() {
  const savedPosts = [
    {
      id: 1,
      image: '',
    },
    {
      id: 2,
      image: '',
    },
    {
      id: 3,
      image: '',
    },
    {
      id: 4,
      image: '',
    },
    {
      id: 5,
      image: '',
    },
    {
      id: 6,
      image: '',
    },
  ]

  return (
    <div className='bg-background min-h-screen p-6'>
      <div className='mx-auto max-w-6xl space-y-8'>
        <h1 className='text-primary text-3xl font-bold'>Saved Posts</h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {savedPosts.map((post) => (
            <SavedPostCard key={post.id} postId={post.id} postImage={post.image} />
          ))}
        </div>
      </div>
    </div>
  )
}
