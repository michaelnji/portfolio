import { Redis } from '@upstash/redis'
import { Query } from "@upstash/query";


export const QueryCLient = new Query({
    redis: Redis.fromEnv({ automaticDeserialization: false }),
});


// export const client = new Redis({
//     url: PRIVATE_UPSTASH_REDIS_REST_URL,
//     token: PRIVATE_UPSTASH_REDIS_REST_TOKEN,

// })


