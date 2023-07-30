import { CoverPhoto } from './CoverPhoto'
import { ProfileContent } from './ProfileContent'
import { ProfileInfo } from './profile-panel/ProfileInfo'

export const Profile = () => {
  return (
    <main className="mx-[5%] lg:mx-[10%] mb-32">
      <CoverPhoto />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-64">
          <ProfileInfo />
        </div>
        <div className="flex-1 pt-9 pl-4">
          <ProfileContent />
        </div>
      </div>
    </main>
  )
}
