import { CollectionConfig } from "payload/types";

import { isAdmin, isEditorOrAdmin, isLoggedIn } from "../access";

const Tags: CollectionConfig = {
  slug: "tags",
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
    },
  ],
  timestamps: false,
};

export default Tags;
