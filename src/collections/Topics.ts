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
      name: "author", // TODO: remove field from Posts
      type: "relationship",
      relationTo: "users",
    },
    {
      name: "publishedDate", // TODO: remove field from Posts
      type: "date",
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
      defaultValue: "draft",
      admin: {
        position: "sidebar",
      },
    },
  ],
};