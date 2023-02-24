import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: 'ww69fva0',
    dataset: 'production',
    apiVersion: '2023-02-22',
    useCdn: true,
    token: process.env.REACT_PUBLIC_SANITY_TOKEN,
});


const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source)
}