import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar/avatar'
import { ProfileStats } from './ProfileStats'

export const ProfileInfo = () => {
  return (
    <article className="relative p-5 pt-12">
      <div className="flex w-full absolute top-[-2.5rem]">
        <Avatar className="h-20 w-20 border-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <p className="text-lg font-semibold">Sam Midgley</p>
        <p className="text-sm text-purple-600 font-bold relative top-[-5px]">@smidge</p>
        <p className="text-xs mt-2 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque sit corporis perferendis a ducimus
          aliquam.
        </p>
        <ProfileStats />
      </div>
    </article>
  )
}
