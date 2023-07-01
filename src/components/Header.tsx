import { ThemeDropdown } from '@components'

export const Header = () => {
  return (
    <div className="flex w-full p-4">
      <p>Header</p>
      <div className="ml-auto">
        <ThemeDropdown />
      </div>
    </div>
  )
}
