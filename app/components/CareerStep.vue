<script setup lang="ts">
    interface PropsStep {
      date: string
      title: string
      content?: string
      active?: boolean
    }

    // On définit les props avec 'active' à false par défaut
    const props = withDefaults(defineProps<PropsStep>(), {
      active: false
    });
</script>

<template>
  <div 
    class="relative pl-8 border-l-2 transition-all duration-300 group"
    :class="active ? 'border-primary-500' : 'border-neutral-200 dark:border-neutral-800 hover:border-primary-500'"
  >
    <div 
      class="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 transition-all duration-300 group-hover:scale-125"
      :class="active 
        ? 'bg-primary-500 border-primary-500' 
        : 'bg-neutral-200 dark:bg-neutral-800 group-hover:bg-primary-500 group-hover:border-primary-500'"
    ></div>
    
    <span 
      class="text-sm font-mono mb-1 block transition-colors"
      :class="active ? 'text-primary-500' : 'text-neutral-500 group-hover:text-primary-400'"
    >
      {{ date }}
    </span>

    <h3 
      class="text-xl font-bold transition-colors"
      :class="active 
        ? 'text-primary italic' 
        : 'text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white'"
    >
      {{ title }}
    </h3>

    <p 
      class="mt-2 leading-snug transition-colors text-sm"
      :class="active 
        ? 'text-neutral-700 dark:text-neutral-300' 
        : 'text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-800 dark:group-hover:text-neutral-200'"
    >
      {{ content }}
    </p>
  </div>
</template>