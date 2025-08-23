export interface InteractiveItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface InteractiveElementsState {
  isVisible: boolean
  activeElement: string | null
}
