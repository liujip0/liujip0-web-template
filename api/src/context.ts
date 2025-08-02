import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import type { Env } from "./index.ts";

export const createContext = async ({
  req,
  env,
  resHeaders,
}: FetchCreateContextFnOptions & {
  env: Env;
}) => {
  return {
    req,
    env,
    resHeaders,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
