import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

export const useForm = () => {
   
    const toast = useToast();
    const schema = z.object({
        name: z.string().min(2, 'Le nom est trop court'),
        email: z.string().email('Email invalide'),
        message: z.string().min(10, 'Votre message doit faire au moins 10 caractères')
    })

    type Schema = z.output<typeof schema>

    const state = reactive({
        name: '',
        email: '',
        message: ''
    })

    const loading = ref(false)

    async function onSubmit(event: FormSubmitEvent<Schema>) {
        
        loading.value = true
        //  console.log('Données reçues:', event.data)
        
        const userName = state.name

        setTimeout(() => {
            loading.value = false
            
            toast.add({
                title: 'Message envoyé !',
                description: `Merci ${userName}, je vous répondrai dès que possible.`,
                icon: 'i-lucide-check-circle',
                color: 'success',  
                duration: 4000
            });
            
            // Réinitialisation propre
            state.name = ''
            state.email = ''
            state.message = ''
        }, 1000);
    }

    return {
        state,
        schema,
        onSubmit,
        loading
    }
}