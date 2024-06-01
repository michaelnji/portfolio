import type { PostMetaData } from "$lib/types";
import { QueryCLient } from "./client";

export const PostMetaDataCLient = QueryCLient.createCollection<PostMetaData>("post_metadata");

PostMetaDataCLient.createIndex({
    name: "clap_reactions",
    terms: ["reactions.claps"],
});
PostMetaDataCLient.createIndex({
    name: "heart_reactions",
    terms: ["reactions.hearts"],
});
PostMetaDataCLient.createIndex({
    name: "shit_reactions",
    terms: ["reactions.shit"],
});
PostMetaDataCLient.createIndex({
    name: "post_id",
    terms: ["id"],
});
PostMetaDataCLient.createIndex({
    name: "post_views",
    terms: ["views"],
});
