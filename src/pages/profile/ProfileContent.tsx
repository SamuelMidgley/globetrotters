import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/ui/tabs'
import { Map } from '../../pages/profile/map'
import { Posts } from './posts'
import { Media } from '../../pages/profile/media'
import { Timeline } from './timeline'

export const ProfileContent = () => {
  return (
    <Tabs defaultValue="posts" className="w-full lg:w-[500px] mb-16">
      <TabsList className="grid w-full lg:w-[400px] grid-cols-4 mb-4">
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="map">Map</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
        <TabsTrigger value="timeline">Timeline</TabsTrigger>
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
      <TabsContent value="timeline">
        <Timeline />
      </TabsContent>
    </Tabs>
  )
}
