import { TouchableOpacityProps } from "react-native";

export type GuildItensProps = TouchableOpacityProps & {
  data: GuildProps
}

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}
