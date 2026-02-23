<script setup lang="ts">
    interface PropsContact {
        icon: string
        title: string
        content: string
        to?: string   
        label?: string
    }

    defineProps<PropsContact>()
</script>


<template>
  <div class="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800 transition-all group">
    <div class="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
      <UIcon :name="icon" class="w-6 h-6" />
    </div>

    <div class="flex flex-col">
      <p class="text-sm text-neutral-500 font-medium">{{ title }}</p>
      
      <NuxtLink 
        v-if="to" 
        :to="to" 
        class="font-semibold text-neutral-900 dark:text-white hover:text-primary transition-colors inline-flex items-center gap-1"
        target="_blank"
      >
        {{ content }}
        
      </NuxtLink>

      <p v-else class="font-semibold text-neutral-900 dark:text-white">
        {{ content }}
      </p>
    </div>
  </div>
</template>