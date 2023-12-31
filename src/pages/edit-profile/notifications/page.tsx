import { Separator } from '@components/ui/separator'
import { NotificationForm } from './NotificationForm'

export function NotificationSettings() {
  return (
    <div className="space-y-6 w-[min(100%,500px)] ">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
      </div>
      <Separator />
      <NotificationForm />
    </div>
  )
}
