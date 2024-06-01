import { Redis } from "@upstash/redis";
import { Query } from "@upstash/query";
import {
	PRIVATE_UPSTASH_REDIS_REST_URL,
	PRIVATE_UPSTASH_REDIS_REST_TOKEN,
} from "$env/static/private";

const redis = new Redis({
	url: PRIVATE_UPSTASH_REDIS_REST_URL,
	token: PRIVATE_UPSTASH_REDIS_REST_TOKEN,
});

export const QueryCLient = new Query({
	redis,
});




