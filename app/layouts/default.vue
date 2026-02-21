<script setup lang="ts">

  const { mainNav } = useNavigation()

</script>

<template>
  <div>
    <UHeader title="Mon App">
      <template #title>
        <UIcon name="i-heroicons-rocket-launch" class="w-6 h-6" />
        <span class="font-bold hidden sm:inline text-lg">PortFolio - Benjamin CARO</span>
      </template>
        <UNavigationMenu :items="mainNav"/>
      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <UContainer>
        <slot />
      </UContainer>
    </UMain>

    <UFooter>
      <template #left>
        Copyright © 2026
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