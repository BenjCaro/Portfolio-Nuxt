<script setup lang="ts">
    
    const { state, schema, onSubmit, loading } = useForm()

</script>
<template>
  <UContainer class="py-12 md:py-20">
    <div class="grid md:grid-cols-2 gap-12">
      
      <div>
        <h1 class="text-4xl font-bold mb-6">Contactez-moi</h1>
        <p class="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">
          Un projet en tête ou simplement envie d'échanger sur le dev ? 
          N'hésitez pas à m'envoyer un message !
        </p>

        <div class="space-y-2">
            <CardContact  
                icon="i-lucide-mail" 
                title="Email" 
                content="carbenjamin@gmail.com"
            />
            <CardContact 
                icon="i-lucide-linkedin" 
                title="Linkedin" 
                content="Benjamin CARO" 
                to="https://linkedin.com/in/benjamin-caro-06422a321" 
                label="Linkedin"
            />
        </div>
      </div>

      <UCard>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
          <UFormField label="Nom" name="name">
            <UInput v-model="state.name" placeholder="Votre nom" icon="i-lucide-user" class="w-full" />
          </UFormField>

          <UFormField label="Email" name="email">
            <UInput v-model="state.email" placeholder="email@exemple.com" icon="i-lucide-at-sign" class="w-full" />
          </UFormField>

          <UFormField label="Message" name="message">
            <UTextarea v-model="state.message" placeholder="Dites-moi tout..." :rows="5" class="w-full" />
          </UFormField>

          <UButton type="submit" :loading="loading" block color="primary" class="mt-4">
            Envoyer le message
          </UButton>
        </UForm>
      </UCard>
      
    </div>
  </UContainer>
</template>