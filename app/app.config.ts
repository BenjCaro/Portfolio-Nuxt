console.log('App Config Chargé !')

export default defineAppConfig({
  ui: {
    button: {
      defaultVariants: {
        variant: 'ghost',
        color: 'primary'
      }
    },
    
    icons: {
      loading: 'i-lucide-loader-circle'
    }
  }
})