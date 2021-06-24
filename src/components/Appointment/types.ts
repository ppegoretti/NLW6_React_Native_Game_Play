import { ReactNode } from "react";
import { RectButtonProps } from 'react-native-gesture-handler'

export type GuildProps = {
  id: string
  name: string
  icon: null
  owner: boolean;
}

export type DataProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

export type AppointmentProps = RectButtonProps & {
  data: DataProps
}
