import { Redis } from "@upstash/redis";
import "dotenv/config";

const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.UPSTASH_REDIS_URL || 'https://sought-puma-81068.upstash.io';
const redisToken = process.env.REDIS_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";

export const redis = new Redis({
  url: redisUrl,
  token: redisToken,
});
