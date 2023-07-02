import { PlaneTakeoff } from 'lucide-react'

export const HeaderTitle = () => {
  return (
    <div className="mr-6 flex items-center space-x-2">
      <PlaneTakeoff className="h-6 w-6" />
      <span className="hidden font-bold sm:inline-block">globetrotters</span>
    </div>
  )
}
