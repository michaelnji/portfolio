export const queries = {
	post: `*[_type == "post"] | order(publishedAt desc, _updatedAt desc) | order( _updatedAt desc){_id,excerpt, "authorInfo":author-> {slug,name,bio,image,twitter}, "tags":categories[]->{title,description}, publishedAt, slug, title, _updatedAt,"imageUrl": mainImage.asset->url},body`,
	authors: `*[_type == "author"]`,
	tags: `*[_type == "category"]`,
	postsSummary: `*[_type == "post"] | order(publishedAt desc, _updatedAt desc) | order( _updatedAt desc){_id,excerpt, "authorInfo":author-> {slug,name,bio,image}, "tags":categories[]->{title,description}, publishedAt, slug, title, _updatedAt,"imageUrl": mainImage.asset->url}`
};
