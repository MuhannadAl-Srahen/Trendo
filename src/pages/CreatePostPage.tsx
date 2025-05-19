import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import dragAndDrop from '@/assets/drag-and-drop.svg'
import { Link } from 'react-router'

import { useState } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function CreatePostPage() {
  const [privacy, setPrivacy] = useState('')

  return (
    <div className='bg-background mx-auto max-w-4xl rounded-xl border px-6 py-10 shadow-lg'>
      <form className='flex flex-col gap-6'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='title' className='font-semibold'>
              Title
            </Label>
            <Input
              id='title'
              type='text'
              placeholder='What is in your mind?'
              className='border-border bg-background focus:border-primary focus:ring-primary rounded-md border px-4 py-3 text-base'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <Label htmlFor='privacy' className='font-semibold'>
              Privacy
            </Label>
            <Select onValueChange={setPrivacy} value={privacy}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a privacy level' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='public'>Public</SelectItem>
                  <SelectItem value='friend'>Friend</SelectItem>
                  <SelectItem value='only-you'>Only you</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='caption' className='font-semibold'>
            Caption
          </Label>
          <Textarea
            id='caption'
            placeholder='Share something with your friends...'
            className='border-border bg-background focus:border-primary focus:ring-primary min-h-28 rounded-md border px-4 py-3 text-base'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='image' className='font-semibold'>
            Add a photo
          </Label>
          <div className='text-muted-foreground border-border bg-muted hover:border-primary hover:bg-accent flex cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed py-8 transition-colors'>
            <img src={dragAndDrop} alt='' className='h-18 w-18 opacity-70' />
            <span className='text-sm'>Click or Drag & Drop images here</span>
            <Input id='image' type='file' accept='image/*' className='hidden' />
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <Label htmlFor='tags' className='font-semibold'>
              Hashtags
            </Label>
            <Input
              id='tags'
              type='text'
              placeholder='#react #coding #tech'
              className='border-border bg-background focus:border-primary focus:ring-primary rounded-md border px-4 py-3 text-base'
            />
          </div>

          <div className='flex justify-end gap-2'>
            <Link to='/home'>
              <Button type='submit' variant='outline' className='px-4 py-2'>
                Back
              </Button>
            </Link>

            <Button type='submit' variant='default' className='px-4 py-2'>
              Create Post
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
