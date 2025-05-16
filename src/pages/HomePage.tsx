import Card from '@/components/Home/Card'
import hollowKnight from '@/assets/hollowKnight.jpg'
import redBlackImage from '@/assets/redBlackImage.jpg'
import programmerLife from '@/assets/programmer-life.jpg'
export default function HomePage() {
  return (
    <div className='mx-auto max-w-3xl'>
      <div className='flex flex-col gap-4 md:gap-12'>
        <Card
          userName='_glock_x'
          date='2024/11/26'
          image={hollowKnight}
          Title='Hollow Knight'
          hashtags={['#hollow', '#knight', '#gaming']}
        />

        <Card
          userName='ayman.ws'
          date='2024/1/5'
          image={redBlackImage}
          Title='The meaning of red and black'
          hashtags={['#red', '#black', '#rose']}
        />

        <Card
          userName='ox81_'
          date='2024/2/3'
          image={programmerLife}
          Title='Programmer Life'
          hashtags={['#programmer', '#life', '#funny']}
        />
      </div>
    </div>
  )
}
