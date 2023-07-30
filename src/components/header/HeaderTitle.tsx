import { PlaneTakeoff } from 'lucide-react'
import { Link } from 'react-router-dom'

export const HeaderTitle = () => {
  return (
    <Link to="/" className="mr-6 flex items-center space-x-2">
      <PlaneTakeoff className="h-6 w-6" />
      <span className="hidden font-bold sm:inline-block">globetrotters</span>
    </Link>
  )
}
