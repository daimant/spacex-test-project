export interface MenuItem {
  name: string
  href: string
  key: string
  isActive?: boolean
}

export interface NavigationState {
  isMenuOpen: boolean
}
