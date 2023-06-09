import  { createClient }  from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

    export const client = createClient ({
    projectId: 'v54u8ryq',
    dataset: 'production',
    apiVersion: '2023-05-16',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);