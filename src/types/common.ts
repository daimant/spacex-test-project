export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface AnimationProps {
  initial?: any
  animate?: any
  exit?: any
  transition?: any
  whileHover?: any
  whileTap?: any
  whileInView?: any
  viewport?: any
}

export interface PageProps {
  params?: Record<string, string>
  searchParams?: Record<string, string | string[]>
}
