<script setup lang="ts">

  const { mainNav } = useNavigation()
  const isMenuOpen = ref(false)

</script>

<template>
  <div>
   <UHeader :toggle="false">
    <template #title>
      <NuxtLink to="/" class="flex items-center gap-2">
        <UIcon name="i-lucide-code-2" class="w-6 h-6 text-primary" />
        <span class="font-bold hidden sm:inline-block">Benjamin Caro</span>
      </NuxtLink>
    </template>

    <UNavigationMenu :items="mainNav" class="hidden lg:flex" />

    <template #right>
      <ColorModeButton />
      
      <UButton
        icon="i-lucide-menu"
        variant="ghost"
        color="neutral"
        class="lg:hidden"
        aria-label="Ouvrir le menu"
        @click="isMenuOpen = true"
      />
    </template>
  </UHeader>

  <USlideover v-model:open="isMenuOpen" title="Menu">
    <template #content>
      <div class="p-4">
        <UNavigationMenu 
          :items="mainNav" 
          orientation="vertical" 
          class="w-full"
          @click="isMenuOpen = false" 
        />
      </div>
    </template>
  </USlideover>

    <UMain>
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <UFooter>
      <template #left>
        <span class="text-sm">
          Copyright © 2026
        </span>
      </template>
      <template #right>
        <UButton
          icon="i-simple-icons-linkedin"
          to="https://linkedin.com/in/benjamin-caro-06422a321"
          target="_blank"
          aria-label="LinkedIn"
        />
        <UButton
          icon="i-simple-icons-github"
          to="https://github.com/BenjCaro"
          target="_blank"
          aria-label="GitHub"
        />
      </template>
    </UFooter>
  </div>
</template>