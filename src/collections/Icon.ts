import { CollectionConfig } from "payload/types";

const Icon: CollectionConfig = {
  slug: "icon",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "value",
      type: "text",
    },
  ],
  timestamps: false,
};

export default Icon;
