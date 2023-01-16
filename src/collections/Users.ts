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
    {
      name: "roles",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "select",
      hasMany: true,
      defaultValue: ["editor"],
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
    },
  ],
};

export default Users;
