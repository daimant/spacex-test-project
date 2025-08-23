export interface FooterLink {
  name: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterSocialLink {
  name: string
  icon: string
  url: string
}
