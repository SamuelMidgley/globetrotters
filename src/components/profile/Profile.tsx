import { CoverPhoto } from './CoverPhoto'
import { ProfileContent } from './ProfileContent'
import { ProfileInfo } from './side-panel/ProfileInfo'

export const Profile = () => {
  return (
    <main className="mx-[10%] mb-32">
      <CoverPhoto />
      <div className="flex">
        <div className="w-64">
          <ProfileInfo />
        </div>
        <div className="flex-1 pt-9 pl-4">
          <ProfileContent />
        </div>
      </div>
    </main>
  )
}
