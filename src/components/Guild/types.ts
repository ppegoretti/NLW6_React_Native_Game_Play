import { TouchableOpacityProps } from "react-native";

export type dataProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

export type GuildProps = TouchableOpacityProps & {
  data: dataProps
}
