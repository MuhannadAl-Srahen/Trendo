import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function CreatePostPage() {
  return (
    <div className='bg-background flex min-h-screen items-center justify-center p-4'>
      <div className='flex w-full max-w-2xl flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='caption' className='text-primary font-medium'>
            What's on your mind?
          </Label>
          <Textarea
            id='caption'
            placeholder='Share something with your friends...'
            className='border-border bg-background w-full resize-none rounded-xl border p-3 shadow-sm sm:p-4'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='image' className='text-primary font-medium'>
            Add a photo
          </Label>
          <div className='border-border bg-background rounded-xl border p-3 shadow-sm sm:p-4'>
            <div className='border-muted text-muted-foreground flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed text-center text-sm sm:h-40'>
              Drag and drop an image here or click to upload
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='tags' className='text-primary font-medium'>
            Add hashtags or keywords
          </Label>
          <Input
            id='tags'
            type='text'
            placeholder=' #react #coding #tech'
            className='border-border bg-background w-full rounded-xl border p-3 shadow-sm sm:p-4'
          />
        </div>

        <div className='flex justify-end sm:justify-end'>
          <Button type='submit' variant='outline' className='w-full sm:w-auto'>
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}
