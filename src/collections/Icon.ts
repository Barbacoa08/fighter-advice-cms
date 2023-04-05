import { CollectionConfig } from "payload/types";

import { isAdmin, isEditorOrAdmin } from "../access";

export const Icon: CollectionConfig = {
  slug: "icon",
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: isEditorOrAdmin,
    read: () => true,
    update: isEditorOrAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "value",
      type: "text",
      required: true,
    },
  ],
  timestamps: false,
};
