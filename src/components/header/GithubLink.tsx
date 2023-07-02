import { buttonVariants } from '@components/ui'
import { cn } from '@lib/utils'
import { GithubIcon } from 'lucide-react'

export const GithubLink = () => {
  return (
    <a href="https://github.com/SamuelMidgley" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
      <GithubIcon className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">Github Icon</span>
    </a>
  )
}
