import { CollectionConfig } from "payload/types";

import { isAdmin, isEditorOrAdmin } from "../access";
import { accordionField } from "../fields/accordions";
import { slugField } from "../fields/slug";

export const Topics: CollectionConfig = {
  slug: "topics",
  admin: {
    defaultColumns: ["title", "author", "tags", "status"],
    useAsTitle: "title",
  },
  access: {
    create: isEditorOrAdmin,
    read: () => true,
    update: isEditorOrAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    slugField(),
    {
      name: "icon",
      type: "relationship",
      relationTo: "icon",
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "content",
      type: "richText",
    },
    accordionField,
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        {
          value: "draft",
          label: "Draft",
        },
        {
          value: "published",
          label: "Published",
        },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};
