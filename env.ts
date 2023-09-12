import { config } from "dotenv";
import { cleanEnv, str } from "envalid";

await config({ export: true });

export default cleanEnv(Deno.env.toObject(), {
  BOT_TOKEN: str(),
  OWNERS: str(),
  MONGO_URL: str(mongodb+srv://renamedoge:renamedoge@cluster0.ag4ewhc.mongodb.net/?retryWrites=true&w=majority),
});
