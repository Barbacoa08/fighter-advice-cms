import { buildConfig } from "payload/config";
import path from "path";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Users from "./collections/Users";
import Icon from "./collections/Icon";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  rateLimit: {
    trustProxy: true,
  },
  admin: {
    user: Users.slug,
  },
  collections: [Posts, Tags, Users, Icon],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  cors: [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5137",
    "http://cms-fighter-advice.barbajoe.tech",
    "https://cms-fighter-advice.barbajoe.tech",
    "http://p01--payloadcms--xdqkmyn4zfnx.code.run/admin/login",
    "https://p01--payloadcms--xdqkmyn4zfnx.code.run/admin/login",
  ],
  csrf: [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:5137",
    "http://cms-fighter-advice.barbajoe.tech",
    "https://cms-fighter-advice.barbajoe.tech",
    "http://p01--payloadcms--xdqkmyn4zfnx.code.run/admin/login",
    "https://p01--payloadcms--xdqkmyn4zfnx.code.run/admin/login",
  ],
});
