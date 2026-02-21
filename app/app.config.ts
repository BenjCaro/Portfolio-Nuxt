console.log('App Config Chargé !')

export default defineAppConfig({
  ui: {
    primary: 'gray', 
    neutral: 'slate',
    button: {
      defaultVariants: {
        variant: 'ghost',
        color: 'neutral'
      }
    },
    
    icons: {
      loading: 'i-lucide-loader-circle'
    }
  }
})