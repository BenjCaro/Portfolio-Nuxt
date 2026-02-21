<template>
  <UContainer class="py-12 md:py-20">
    <section class="max-w-3xl">
      <h2 class="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Mon parcours</h2>
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
        De Chef d'équipe au sein des Douanes Françaises au <span class="text-primary">Développement Web</span>.
      </h1>
      <p class="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
      </p>
    </section>

   <div class="mt-16 max-w-4xl">
      <div class="space-y-12">
         
         <div class="mt-16 max-w-4xl space-y-12">

            <CareerStep
                date="2026"
                title="Stage développeur web chez Kbane"
                content="Pendant 10 semaines, j'ai pu participer au quotidien d'une équipe IT au sein d'une entreprise 
                        et y effectuer deux interfaces clients."
                active
            />
            <CareerStep 
               date="2024 — 2026"
               title="Titre Professionnel Développeur Web & Mobile"
               content="Formation au Centre Européen de Formation. Apprentissage intensif du développement Fullstack..."
            />

            <CareerStep
               date="2015 — 2025"
               title="Agent des Douanes puis Chef d'équipe au sein des Douanes Françaises (DGDDI)"
               content="J'ai débuté ma carriere au sein de l'administration en qualité d'agent dans les Hauts de France puis je suis devenu Chef d'équipe dans la région Grand-EST. 
                        J'y ai forgé ma rigueur et ma capacité à décider."
            />

            <CareerStep
                date="2010 - 2014"
                title="Master I droits privés"
            />
         </div>

      </div>
   </div>

    <section class="mt-20">
      <h3 class="text-2xl font-bold mb-8 text-center md:text-left">Compétences transverses</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <UCard :ui="{ body: 'p-6' }">
          <UIcon name="i-lucide-users" class="text-primary w-8 h-8 mb-4" />
          <h4 class="font-bold">Esprit d'équipe</h4>
          <p class="text-xs text-neutral-500 mt-1">L'expérience du collectif acquise en milieu opérationnel.</p>
        </UCard>
        
        <UCard :ui="{ body: 'p-6' }">
          <UIcon name="i-lucide-shield-check" class="text-primary w-8 h-8 mb-4" />
          <h4 class="font-bold">Rigueur</h4>
          <p class="text-xs text-neutral-500 mt-1">Une précision héritée de mon parcours en douane, appliquée au code.</p>
        </UCard>

        <UCard :ui="{ body: 'p-6' }">
          <UIcon name="i-lucide-zap" class="text-primary w-8 h-8 mb-4" />
          <h4 class="font-bold">Volontaire</h4>
          <p class="text-xs text-neutral-500 mt-1">Une forte capacité d'apprentissage pour maîtriser les nouveaux outils.</p>
        </UCard>

        <UCard :ui="{ body: 'p-6' }">
          <UIcon name="i-lucide-anchor" class="text-primary w-8 h-8 mb-4" />
          <h4 class="font-bold">Autonome</h4>
          <p class="text-xs text-neutral-500 mt-1">Capacité à mener des projets web de manière structurée et indépendante.</p>
        </UCard>
      </div>
    </section>

    <div class="mt-16 text-center">
      <UButton 
        to="/projects" 
        size="lg" 
        icon="i-lucide-arrow-right" 
        trailing
      >
        Voir mes projets techniques
      </UButton>
    </div>
  </UContainer>
</template>