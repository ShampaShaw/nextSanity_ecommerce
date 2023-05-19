import { createClient, groq } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { urlFor } from '@/lib/client';

export async function getProjects() {
    const client = createClient({

        projectId: 'v54u8ryq',
        dataset: 'production',
        apiVersion: '2023-05-16',
        useCdn: true,
        token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
        ignoreBrowserTokenWarning: true,
    
    })

    return client.fetch(
        groq`*[_type == "banner" || _type == "product"]`,
       // groq`*[_type == "product"]`
    )


    
}

//export const urlFor = (source) => builder.image(source);


