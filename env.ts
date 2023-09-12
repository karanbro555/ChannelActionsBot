import { config } from "dotenv";
import { cleanEnv, str } from "envalid";

await config({ export: true });

export default cleanEnv(Deno.env.toObject(), {
  BOT_TOKEN: str(6547420147:AAED2CrXzH-rlrM3i56Nvl9Tvkj-QP31ppc),
  OWNERS: str(1229173534),
  MONGO_URL: str(mongodb+srv://renamedoge:renamedoge@cluster0.ag4ewhc.mongodb.net/?retryWrites=true&w=majority),
});
