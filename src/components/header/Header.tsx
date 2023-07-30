import { ThemeDropdown } from '@components'
import { UserNav } from './UserNav'
import { GithubLink } from './GithubLink'
import { HeaderTitle } from './HeaderTitle'

export const Header = () => {
  return (
    <header className="flex p-2 sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-14 items-center">
        <div className="mr-4 md:flex">
          <HeaderTitle />
          {/* <HeaderNav /> */}
        </div>
        <div className="ml-auto flex gap-2">
          <GithubLink />
          <ThemeDropdown />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
