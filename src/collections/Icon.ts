import { CollectionConfig } from "payload/types";

import { isAdmin, isEditorOrAdmin, isLoggedIn } from "../access";

const Icon: CollectionConfig = {
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
    },
    {
      name: "value",
      type: "text",
    },
  ],
  timestamps: false,
};

export default Icon;
