import { CollectionConfig } from "payload/types";

const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "name",
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
    {
      name: "name",
      type: "text",
    },
  ],
  timestamps: false,
};

export default Tags;
