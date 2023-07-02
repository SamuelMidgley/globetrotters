import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import { Map } from './map'
import { Posts } from './posts'
import { Media } from './media'

export const ProfileContent = () => {
  return (
    <Tabs defaultValue="posts" className="w-full mb-16">
      <TabsList className="grid w-[400px] grid-cols-3 mb-4">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="map">Map</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
        <Posts />
      </TabsContent>
      <TabsContent value="map">
        <Map />
      </TabsContent>
      <TabsContent value="media">
        <Media />
      </TabsContent>
    </Tabs>
  )
}
