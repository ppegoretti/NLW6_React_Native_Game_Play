import { ReactNode } from "react";
import { RectButtonProps } from 'react-native-gesture-handler'

export type GuildProps = {
  owner: true;
  name: string
}

export type dataProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

export type AppointmentProps = RectButtonProps & {
  data: dataProps
}
