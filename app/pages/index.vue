<template>
  <UContainer class="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">

    <h1 class="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-neutral-900 dark:text-white max-w-4xl">
      Nouveau regard, <span class="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">nouvelles solutions.</span>
    </h1>
  
    <div class="mt-10 flex flex-col items-center space-y-8 text-center max-w-2xl mx-auto">
      
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
        
        <UAvatar 
          src="/photo-profil (2).webp"
          alt="Benjamin Caro"
          class="w-56 h-56 md:w-64 md:h-64 shadow-2xl relative"
          :ui="{ 
            root: 'rounded-full border-4 border-white dark:border-gray-900 ring-1 ring-neutral-200 dark:ring-neutral-800',
            image: 'object-cover' 
          }"
        />
      </div>

      <div class="space-y-4">
        <p class="text-xl text-neutral-700 dark:text-neutral-300">
          Moi c'est <strong>Benjamin</strong>. Après une première carrière réussie, j'ai décidé de transformer ma passion pour la logique et la création en métier : 
          <span class="text-primary font-medium">Développeur Web Fullstack.</span>
        </p>
        
        <p class="text-lg text-neutral-500 dark:text-neutral-400 italic">
          "Actuellement en plein développement de mon projet d'examen, ce portfolio est le témoin de ma progression technique et de ma rigueur."
        </p>
      </div>
    </div>

    <div class="mt-12 flex flex-wrap gap-4 justify-center">
      <UButton 
        to="/projects" 
        size="lg" 
        variant="solid"
        color="primary"
        icon="i-lucide-code-xml"
      >
        Découvrir mes projets
      </UButton>

      <UButton 
        to="/about" 
        size="lg" 
        variant="outline"
        icon="i-lucide-route"
      >
        Mon parcours
      </UButton>
    </div>

    <div class="mt-20 pt-10 border-t border-neutral-200 dark:border-neutral-800 w-full">
      <p class="text-center text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-8">
        Mon écosystème d'apprentissage
      </p>
      
      <div class="flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 px-4">
         <UIcon name="i-simple-icons-nuxtdotjs" class="w-10 h-10 hover:text-[#00DC82]" />
         <UIcon name="i-simple-icons-vuedotjs" class="w-10 h-10 hover:text-[#42b883]" />
         <UIcon name="i-simple-icons-tailwindcss" class="w-10 h-10 hover:text-[#06B6D4]" />
         <UIcon name="i-simple-icons-php" class="w-10 h-10 hover:text-[#777BB4]" />
         <UIcon name="i-simple-icons-laravel" class="w-10 h-10 hover:text-[#FF2D20]" />
         <UIcon name="i-simple-icons-mysql" class="w-10 h-10 hover:text-[#4169E1]" />
         <UIcon name="i-simple-icons-docker" class="w-10 h-10 hover:text-[#2496ED]" />
      </div>
    </div>

  </UContainer>
</template>