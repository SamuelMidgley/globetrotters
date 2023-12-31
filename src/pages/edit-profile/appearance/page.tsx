import { Separator } from '@components/ui/separator'
import { AppearanceForm } from './AppearanceForm'

export function AppearanceSettings() {
  return (
    <div className="space-y-6 w-[min(100%,500px)] ">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day and night themes.
        </p>
      </div>
      <Separator />
      <AppearanceForm />
    </div>
  )
}
