import { ReactNode } from "react"
import { SerializedStyles } from "@emotion/react"

export type TriggerColorScheme =
  | string
  | "white"
  | "gray"
  | "grayBlue"
  | "blackAlpha"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "cyan"
  | "purple"
  | "techPink"
  | "techPurple"

export type TriggerPosition =
  | "top"
  | "tl"
  | "tr"
  | "bottom"
  | "bl"
  | "br"
  | "left"
  | "lt"
  | "lb"
  | "right"
  | "rt"
  | "rb"

export type TriggerTrigger = "hover" | "click" | "focus"

export type customPositionType = {
  x?: number
  y?: number
}

export interface TriggerProps {
  _css?: SerializedStyles
  children?: ReactNode
  colorScheme?: TriggerColorScheme
  clickOutsideToClose?: boolean
  withoutPadding?: boolean
  maxWidth?: string
  trigger?: TriggerTrigger
  content?: string | ReactNode
  position?: TriggerPosition
  showArrow?: boolean
  closeDelay?: number
  openDelay?: number
  autoFitPosition?: boolean
  closeOnClick?: boolean
  defaultPopupVisible?: boolean
  autoAlignPopupWidth?: boolean
  popupVisible?: boolean
  disabled?: boolean
  customPosition?: customPositionType
  onVisibleChange?: (visible: boolean) => void
}
