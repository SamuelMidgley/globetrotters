import { AspectRatio } from '@components/ui/aspect-ratio'

export const CoverPhoto = () => {
  return (
    <div className="flex w-full justify-center">
      <AspectRatio ratio={5 / 1}>
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="object-cover h-full w-full rounded-b-md"
        />
      </AspectRatio>
    </div>
  )
}