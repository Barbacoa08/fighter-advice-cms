import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  // TODO: update so that anyone can GET, but only admins can POST, PUT, DELETE
  access: {
    // only this was set by default:
    read: () => true,

    // added these:
    update: () => true,
    create: () => true,
    delete: () => true,
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
