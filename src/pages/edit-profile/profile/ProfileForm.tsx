import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@components/ui'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input/input'
import { Textarea } from '@components/ui/textarea'
import { Separator } from '@components/ui/separator'
import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar/avatar'

const formSchema = z.object({
  firstName: z.string().nonempty('Required'),
  lastName: z.string().nonempty('Required'),
  handle: z.string().nonempty('Required'),
  bio: z.string().nonempty('Required'),
  imageUrl: z.string().nonempty('Required'),
  imageAlt: z.string().nonempty('Required'),
  coverUrl: z.string().nonempty('Required'),
  coverAlt: z.string().nonempty('Required'),
})

export const ProfileForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      handle: '',
      bio: '',
      imageUrl: '',
      imageAlt: '',
      coverUrl: '',
      coverAlt: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  function getInitials(firstName: string, lastName: string) {
    if (firstName && lastName) {
      return firstName.toUpperCase() + lastName.toUpperCase()
    }
    return 'Initials'
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mb-10">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Firstname</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lastname</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="handle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Handle</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a pseudonym. You can only change this once
                every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormDescription>Let people know a little about you</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-6">
          <div>
            <h1 className="text-lg font-medium">Profile picture</h1>
            <p className="text-sm text-muted-foreground">This will be displayed on your profile.</p>
          </div>
          <Separator />
          <div className="lg:flex gap-8">
            <Avatar className="h-48 w-48 mb-6 lg:my-auto">
              <AvatarImage src={form.getValues().imageUrl} alt={form.getValues().imageAlt} />
              <AvatarFallback>
                {getInitials(form.getValues().firstName[0], form.getValues().lastName[0])}
              </AvatarFallback>
            </Avatar>
            <div className="w-full space-y-6">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>URL pointing towards your image</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageAlt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image Alt</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>Alternative text for your profile image</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-lg font-medium">Cover photo</h1>
            <p className="text-sm text-muted-foreground">This is for the cover photo on your profile.</p>
          </div>
          <Separator />
          <div className="lg:flex gap-8">
            <div className="h-40 w-full mb-6 lg:my-auto">
              {form.getValues().coverUrl ? (
                <img
                  className="object-cover h-full w-full rounded-md"
                  src={form.getValues().coverUrl}
                  alt={form.getValues().coverAlt}
                />
              ) : (
                <div className="h-full w-full rounded-md bg-muted" />
              )}
            </div>
            <div className="w-full space-y-6">
              <FormField
                control={form.control}
                name="coverUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover URL</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>URL pointing towards your image</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coverAlt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Alt</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>Alternative text for your cover photo</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
