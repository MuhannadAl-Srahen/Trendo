import { useState, useMemo } from 'react'
import hallowKnightImage from '@/assets/hollowKnight.jpg'
import redBlackImage from '@/assets/redBlackImage.jpg'
import programmerLifeImage from '@/assets/programmer-life.jpg'
import BMW from '@/assets/BMW.png'
import Sofia from '@/assets/sofia-alejandra.jpg'

export type Post = {
  username: string
  name: string
  userId: number
  postId: number
  image: string
  date: string
  post: string
  hashtags: string[]
}

const initialPosts: Post[] = [
  { postId: 1, userId: 3, username: 'charlied', name: 'Charlie Davis', image: redBlackImage, date: '2025-05-09', post: 'Started a new side project using React and TypeScript. Loving it so far!', hashtags: ['#react', '#typescript', '#coding'] },
  { postId: 2, userId: 1, username: 'alice.johnson', name: 'Alice Johnson', image: Sofia, date: '2025-05-25', post: 'Just finished reading an amazing book on leadership. Highly recommend it!', hashtags: ['#leadership', '#reading', '#growth'] },
  { postId: 3, userId: 10, username: 'jasminelee', name: 'Jasmine Lee', image: Sofia, date: '2025-05-21', post: 'Spent the morning journaling and sipping coffee. A peaceful start to the week.', hashtags: ['#journaling', '#morningroutine', '#selfcare'] },
  { postId: 4, userId: 7, username: 'george_m', name: 'George Miller', image: hallowKnightImage, date: '2025-05-11', post: 'Working on some exciting updates at work. Can’t wait to share more soon.', hashtags: ['#worklife', '#devupdates', '#progress'] },
  { postId: 5, userId: 16, username: 'paulagreen', name: 'Paula Green', image: programmerLifeImage, date: '2025-05-23', post: 'Launched my personal blog today! Finally sharing my tech journey.', hashtags: ['#blogging', '#techlife', '#developer'] },
  { postId: 6, userId: 6, username: 'fiona.clark', name: 'Fiona Clark', image: Sofia, date: '2025-05-20', post: 'Had a lovely weekend getaway with friends. Sun, laughter, and good food!', hashtags: ['#weekendvibes', '#friends', '#travel'] },
  { postId: 7, userId: 5, username: 'ethanbrown', name: 'Ethan Brown', image: BMW, date: '2025-03-11', post: 'Looking back at my car restoration journey. Worth every second.', hashtags: ['#carrestoration', '#bmw', '#classiccars'] },
  { postId: 8, userId: 2, username: 'bobsmith', name: 'Bob Smith', image: hallowKnightImage, date: '2025-04-25', post: 'Throwback to last month’s hiking trip. Nature is the best therapy.', hashtags: ['#hiking', '#nature', '#throwback'] },
  { postId: 9, userId: 13, username: 'mike_a', name: 'Mike Adams', image: hallowKnightImage, date: '2025-05-14', post: 'Working on my fitness goals this month. Who’s with me?', hashtags: ['#fitness', '#goals', '#health'] },
  { postId: 10, userId: 12, username: 'laura.s', name: 'Laura Scott', image: '', date: '2025-05-26', post: 'Today marks a new chapter in my career. Grateful and excited!', hashtags: ['#newbeginnings', '#career', '#grateful'] },
  { postId: 11, userId: 9, username: 'ian.w', name: 'Ian Wilson', image: hallowKnightImage, date: '2025-05-19', post: 'Game night with friends last night was epic. Monopoly never gets old.', hashtags: ['#boardgames', '#monopoly', '#fun'] },
  { postId: 12, userId: 14, username: 'nina.turner', name: 'Nina Turner', image: BMW, date: '2023-05-14', post: 'Old memories from our college days. Good times, great friends.', hashtags: ['#college', '#nostalgia', '#friends'] },
  { postId: 13, userId: 11, username: 'kevinhall', name: 'Kevin Hall', image: hallowKnightImage, date: '2025-01-11', post: 'Winter mornings and hot cocoa. Nothing beats this cozy combo.', hashtags: ['#wintervibes', '#cozy', '#hotcocoa'] },
  { postId: 14, userId: 8, username: 'hannahmoore', name: 'Hannah Moore', image: '', date: '2024-05-11', post: 'Time flies. Can’t believe it’s been a year since my big move!', hashtags: ['#memories', '#movingforward', '#growth'] },
  { postId: 15, userId: 4, username: 'diana_e', name: 'Diana Evans', image: programmerLifeImage, date: '2025-05-02', post: 'Can’t believe how fast May is flying by. Anyone else feel the same?', hashtags: ['#mayvibes', '#life', '#timeflies'] },
  { postId: 16, userId: 17, username: 'quinn.h', name: 'Quinn Harris', image: hallowKnightImage, date: '2025-05-11', post: 'Spring is in full bloom! Took some great photos at the park.', hashtags: ['#spring', '#nature', '#photography'] },
  { postId: 17, userId: 15, username: 'oscar_y', name: 'Oscar Young', image: '', date: '2025-05-11', post: 'Weekend was all about relaxing, music, and recharging.', hashtags: ['#weekend', '#relax', '#music'] },
  { postId: 18, userId: 18, username: 'rachbaker', name: 'Rachel Baker', image: redBlackImage, date: '2025-05-05', post: 'Baked a new cookie recipe today. It’s a hit with the neighbors!', hashtags: ['#baking', '#cookies', '#homemade'] },
  { postId: 19, userId: 1, username: 'alice.johnson', name: 'Alice Johnson', image: Sofia, date: '2025-04-10', post: 'Attended an inspiring leadership webinar today. Great takeaways!', hashtags: ['#leadership', '#learning', '#motivation'] },
  { postId: 20, userId: 6, username: 'fiona.clark', name: 'Fiona Clark', image: Sofia, date: '2025-03-15', post: 'Planning our next girls trip! Any recommendations?', hashtags: ['#travelplans', '#girlsweekend', '#suggestions'] },
  { postId: 21, userId: 10, username: 'jasminelee', name: 'Jasmine Lee', image: Sofia, date: '2025-05-24', post: 'Tried a new matcha recipe today. So good!', hashtags: ['#matcha', '#healthy', '#newrecipes'] },
  { postId: 22, userId: 3, username: 'charlied', name: 'Charlie Davis', image: redBlackImage, date: '2025-04-30', post: 'Exploring the new features in React 19 – exciting stuff ahead!', hashtags: ['#react19', '#webdev', '#future'] },
]





export function useExplore() {
  const [searchQuery, setSearchQuery] = useState('')
  const [position, setPosition] = useState('All')


  const filteredUsers = useMemo(() => {
  return initialPosts.filter((post) => {
    const matchesSearch =
      post.post.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.name.toLowerCase().includes(searchQuery.toLowerCase()) 

    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

    const userPostDate = new Date(post.date)
    const matchesStatus =
      position === 'All' || (position === 'Latest' && userPostDate >= oneWeekAgo)

    return matchesSearch && matchesStatus
  })
}, [searchQuery, position])



  return {
    searchQuery,
    setSearchQuery,
    position,
    setPosition,
    filteredUsers,
  }
}
