import { defineField, defineType } from "sanity";

export default defineType({
  name: "single-image",
  title: "Single Image",
  icon: () => "🖼️",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Use as alt text.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
  ],
});
