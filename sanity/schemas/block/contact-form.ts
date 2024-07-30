import { defineField, defineType } from "sanity";

export default defineType({
  name: "contact-form",
  title: "Contact Form",
  icon: () => "📧",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
    defineField({
      name: "recipient",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: title || "Contact Form",
    }),
  },
});
