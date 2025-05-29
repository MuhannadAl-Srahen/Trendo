import { Input } from '@/components/ui/input'
import { Layers, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useExplore } from '@/components/hooks/useExplore'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import ExploreCard from '@/components/Post/ExploreCard'

export default function ExplorePage() {
  const { searchQuery, setSearchQuery, position, setPosition, filteredUsers } = useExplore()

  return (
    <div className='mx-auto max-w-4xl'>
      <div className='flex flex-col gap-4 md:gap-8'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div className='relative flex w-full max-w-lg items-center gap-2'>
            <Search className='text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2' />
            <Input
              type='text'
              placeholder='Search for post'
              className='focus:ring-primary/30 rounded-full py-4 pl-12 focus:border-none focus:ring-1'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                className='flex cursor-pointer items-center gap-2 rounded-full'
              >
                <Layers />
                <span>{position}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value='All'>All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value='Latest'>Latest Posts</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <span className='text-lg font-semibold'>Popular Today</span>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredUsers.length == 0 ? (
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
