export interface NavItem {
  label: string
  to: string
  icon: string
  children?: NavItem[]
}

export const useNavigation = () => {
  const mainNav: NavItem[] = [
    { label: 'Accueil', to: '/', icon: 'i-heroicons-home' },
    { label: 'Projets', to: '/projects', icon: 'i-heroicons-code-bracket' },
    { label: 'Mon Parcours', to: '/about', icon:'i-lucide-route'},
    { label: 'Contact', to: '/contact', icon: 'i-heroicons-envelope' }
  ]

  return { 
    mainNav 
  }
}