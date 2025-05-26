import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export function useExploreCard(username: string) {
  const navigate = useNavigate()

  const handleNavigateToProfile = useCallback(() => {
    navigate(`/profile/${username}`)
  }, [navigate, username])

  return {
    handleNavigateToProfile,
    getPostPreview: (post: string, maxLength = 25) =>
      post.length > maxLength ? post.slice(0, maxLength) + ' ...' : post,

    getHashtagPreview: (hashtags: string[], maxLength = 25) => {
      const joined = hashtags.join(' ')
      return joined.length > maxLength ? joined.slice(0, maxLength) + ' ...' : joined
    },

    getUsernameShort: (username: string, maxLength = 10) =>
      username.length > maxLength ? username.slice(0, maxLength) + '…' : username,

    getAvatarFallback: (name: string) => name.charAt(0).toUpperCase(),
  }
}
