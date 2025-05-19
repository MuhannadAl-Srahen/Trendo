import { useNavigate } from 'react-router'
import { useCallback } from 'react'

export function useUserCard(username: string, onToggleFollow: () => void) {
  const navigate = useNavigate()

  const handleCardClick = useCallback(() => {
    navigate(`/profile/${username}`)
  }, [navigate, username])

  const handleFollowClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      onToggleFollow()
    },
    [onToggleFollow]
  )

  return { handleCardClick, handleFollowClick }
}
