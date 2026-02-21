<script setup lang="ts">

  const { mainNav } = useNavigation()

</script>

<template>
  <div>
    <UHeader>
      <template #title>
        <UIcon name="i-lucide-code-2" class="w-6 h-6 text-primary" />
      </template>
        <UNavigationMenu :items="mainNav"/>
        <ColorModeButton/>
    </UHeader>

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