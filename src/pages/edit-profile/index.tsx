import * as Tabs from '@radix-ui/react-tabs'
import { buttonVariants } from '@components/ui'
import { useState } from 'react'
import { cn } from '@lib/utils'
import { AppearanceSettings } from './appearance/page'
import { ProfileSettings } from './profile/page'
import { NotificationSettings } from './notifications/page'

export const EditProfile = () => {
  const tabs = [
    { value: 'Profile', component: <ProfileSettings /> },
    { value: 'Appearance', component: <AppearanceSettings /> },
    { value: 'Notifications', component: <NotificationSettings /> },
  ]
  const [value, setValue] = useState('Profile')

  function dab(newVal: string) {
    setValue(newVal)
  }

  return (
    <main className="mx-8 mb-8">
      <h1 className="text-4xl tracking-tight font-bold my-4">Settings</h1>
      <Tabs.Root defaultValue="Profile" onValueChange={dab}>
        <Tabs.List className="mb-4">
          {tabs.map((t) => (
            <Tabs.Trigger
              key={t.value}
              value={t.value}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                value === t.value ? 'bg-muted hover:bg-muted' : 'hover:bg-transparent hover:underline',
                'mr-4',
              )}
            >
              {t.value}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map((t) => (
          <Tabs.Content key={t.value} value={t.value}>
            {t.component}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </main>
  )
}
