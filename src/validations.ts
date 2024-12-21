import fs from "fs/promises";
import { parse } from "yaml";
import { Root, schemas } from "./schemas";

export async function validateConfig(path: string): Promise<Root> {
  const content = await fs.readFile(path, "utf-8");
  const parsedConf = parse(content);
  const stringifyConf = JSON.stringify(parsedConf);
  const validatedConf = await schemas.rootSchema.parseAsync(JSON.parse(stringifyConf));
  return validatedConf;
}
