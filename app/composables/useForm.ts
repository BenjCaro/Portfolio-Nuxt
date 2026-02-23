import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

export const useForm = () => {
   
    const toast = useToast();
    const schema = z.object({
        name: z.string().min(2, 'Le nom est trop court'),
        email: z.string().email('Email invalide'),
        message: z.string().min(10, 'Votre message doit faire au moins 10 caractères').max(2000, 'Votre message est limité à 2000 caractères')
    })

    type Schema = z.output<typeof schema>

    const state = reactive({
        name: '',
        email: '',
        message: ''
    })

    const loading = ref(false)

    // Dans useForm.ts
    async function onSubmit(event: FormSubmitEvent<Schema>) {
        loading.value = true
        
        try {
            // Appel à notre API Nuxt
            await $fetch('/api/contact', {
                method: 'POST',
                body: event.data
            })

            toast.add({
                title: 'Succès !',
                description: `Merci ${state.name}, le serveur a bien reçu votre message.`,
                color: 'success',
                duration: 4000
            })

            // Reset du state
            Object.assign(state, { name: '', email: '', message: '' })
            
        } catch (error) {
            toast.add({
                title: 'Erreur',
                description: "Impossible d'envoyer le message pour le moment.",
                color: 'error'
            })
        } finally {
            loading.value = false
        }
    }

    return {
        state,
        schema,
        onSubmit,
        loading
    }
}