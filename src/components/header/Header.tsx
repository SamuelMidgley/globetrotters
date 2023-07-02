import { ThemeDropdown } from '@components'
import { UserNav } from './UserNav'
import { GithubLink } from './GithubLink'
import { HeaderTitle } from './HeaderTitle'
import { HeaderNav } from './HeaderNav'

export const Header = () => {
  return (
    <header className="flex p-2 supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <HeaderTitle />
          <HeaderNav />
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
