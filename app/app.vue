<script setup lang="ts">
// Pas besoin d'importer UButton, Nuxt UI le fait pour vous !
const colorMode = useColorMode()
const toggleColor = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <UApp>
    <UContainer class="py-10 text-center">
    <UCard>
      <template #header>
        <h1 class="text-2xl font-bold">Mon Portfolio Nuxt 3</h1>
      </template>

      <p class="mb-4 text-gray-500">Prêt à coder !</p>
      
      <div class="flex justify-center gap-4">
        <UButton icon="i-heroicons-rocket-launch" color="primary">Projets</UButton>
        <UButton 
          icon="i-heroicons-moon" 
          color="primary" 
          variant="ghost" 
          @click="toggleColor" 
        />
      </div>
    </UCard>
  </UContainer>
  </UApp>
  
</template>