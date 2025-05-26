import { useExplore } from '@/components/hooks/useExplore'
import ExploreCard from '@/components/Post/ExploreCard'

export default function ExplorePage() {
  const { filteredUsers } = useExplore()

  return (
    <div className='mx-auto max-w-5xl'>
      <div className='flex flex-col gap-4 md:gap-8'>
        <div className='flex flex-wrap items-center justify-between gap-4'></div>
        <h3 className='text-primary text-2xl font-semibold md:text-3xl'>Trending Post</h3>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredUsers.length < 1 ? (
            <h5 className='text-muted-foreground col-span-full py-12 text-center'>
              No users found
            </h5>
          ) : (
            filteredUsers.map((post) => (
              <ExploreCard key={post.postId} post={post} image={post.image} />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
