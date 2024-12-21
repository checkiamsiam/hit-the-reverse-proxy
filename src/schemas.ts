import { z } from "zod";

const ruleSchema = z.object({
  path: z.string(),
  upstream: z.array(z.string()),
});

export type Rule = z.infer<typeof ruleSchema>;

const headerSchema = z.object({
  key: z.string(),
  value: z.string(),
});

export type Header = z.infer<typeof headerSchema>;

const upstreamSchema = z.object({
  id: z.string(),
  url: z.string(),
});

export type Upstream = z.infer<typeof upstreamSchema>;

const serverSchema = z.object({
  listen: z.number(),
  upstreams: z.array(upstreamSchema),
  headers: z.array(headerSchema),
  rules: z.array(ruleSchema),
});

export type Server = z.infer<typeof serverSchema>;

const rootSchema = z.object({
  server: serverSchema,
});

export type Root = z.infer<typeof rootSchema>;

export const schemas = {
  ruleSchema,
  headerSchema,
  upstreamSchema,
  serverSchema,
  rootSchema,
};
