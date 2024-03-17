import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const config: ClientConfig = {
	projectId: '5xp71fus',
	dataset: 'production',
	useCdn: false,
	apiVersion: '2023-12-13'
};

export const sanityClient = createClient(config);

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: any) {
	return builder.image(source);
}
