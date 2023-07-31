import { Separator } from '@components/ui/separator'
import { ProfileForm } from './ProfileForm'

export function ProfileSettings() {
  return (
    <div className="space-y-6 w-[min(100%,700px)] ">
      <div>
        <h1 className="text-lg font-medium">Profile</h1>
        <p className="text-sm text-muted-foreground">This is how others will see you on the site.</p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  )
}
