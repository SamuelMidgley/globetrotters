import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar/avatar'
import { ProfileStats } from './ProfileStats'
import { InteractButtons } from './InteractButtons'
import { mock_profile } from './mock'

export const ProfileInfo = () => {
  const currentProfileId = 2
  const profile = mock_profile

  return (
    <article className="relative p-5 pt-12">
      <div className="flex w-full absolute top-[-2.5rem]">
        <Avatar className="h-20 w-20 border-2">
          <AvatarImage src={profile.imageUrl} alt={profile.imageAlt} />
          <AvatarFallback>{profile.initials}</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="text-lg font-semibold">{profile.firstName + ' ' + profile.lastName}</p>
        <p className="text-sm text-purple-600 font-bold relative top-[-5px]">{profile.handle}</p>
        <p className="text-xs mt-2 mb-4">{profile.bio}</p>
        {profile.profileId !== currentProfileId && <InteractButtons isFollowing={profile.isFollowing} />}
        <ProfileStats />
      </div>
    </article>
  )
}
