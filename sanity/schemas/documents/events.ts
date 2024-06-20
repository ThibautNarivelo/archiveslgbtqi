import { defineField, defineType } from "sanity";

export default defineType({
  name: "events",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "eventTitle",
      title: "Event Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "A slug is required for the post to show up in the preview",
      options: {
        source: "eventTitle",
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eventDescription",
      title: "Event Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eventDate",
      title: "Date",
      type: "object",
      fields: [
        defineField({
          name: "eventStartDate",
          title: "Start at",
          type: "datetime",
          options: {
            dateFormat: "DD-MM-YYYY",
            timeStep: 15,
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "addEndDate",
          title: "Add end date.",
          type: "boolean",
          description: "Add an end date if the end is not on the same day.",
        }),
        defineField({
          name: "eventEndDate",
          title: "End at",
          type: "datetime",
          options: {
            dateFormat: "DD-MM-YYYY",
            timeStep: 15,
          },
          hidden: ({ parent }) => !(parent && parent.addEndDate),
        }),
      ],
    }),
    defineField({
      name: "eventLocation",
      title: "Event Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eventImage",
      title: "Event Image",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "alt",
          title: "Alt",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "eventTitle",
      media: "eventImage.image",
      startDate: "eventDate.eventStartDate",
      endDate: "eventDate.eventEndDate",
      addEndDate: "eventDate.addEndDate",
    },
    prepare({ title, media, startDate, endDate, addEndDate }) {
      const formattedStartDate = new Date(startDate).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
        },
      );

      let formattedEndDate = null;
      if (addEndDate && endDate) {
        formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }

      return {
        title,
        media,
        subtitle: formattedEndDate
          ? `${formattedStartDate} - ${formattedEndDate}`
          : formattedStartDate,
      };
    },
  },
});