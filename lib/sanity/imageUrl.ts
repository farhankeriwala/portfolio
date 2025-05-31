import imageUrlBuilder from '@sanity/image-url';
import { client } from './client'; // Use the same client instance you use for fetching data

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}