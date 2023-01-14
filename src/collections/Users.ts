import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
    update: () => true,
    admin: ({ req }) => Boolean(req.user),
  },
  fields: [
    // Email added by default
    {
      name: "name",
      type: "text",
    },
  ],
};

export default Users;
