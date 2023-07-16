export type UserChannel = {
  channel: string
  channelId: string
}

export type GetUniqueLinksRequestDto = {
  userChannels: UserChannel[]
  includeUnsubscribeLink?: {
    managedListId: number
  }
}

export type GetUniqueLinksResponseDto = {
  channel: string
  channelId: string
  userUniqueLink?: string
  userUnsubscribeLink?: string
}
