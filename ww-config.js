export default {
  editor: {
    label: {
      en: "Donut progress bar",
    },
    customSettingsPropertiesOrder: ["value"],
    customStylePropertiesOrder: [
      "style",
      ["thickness", "fillColor"],
      ["emptyThickness", "emptyColor"],
      ["animationDuration", "animationDelay"],
    ],
  },
  triggerEvents: [
    { name: "change", label: { en: "On change" }, event: { value: "" } },
  ],
  properties: {
    value: {
      type: "Number",
      label: {
        en: "Value",
      },
      defaultValue: 65,
      bindable: true,
      section: "settings",
    },
    style: {
      label: {
        en: "Style",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "center", label: { en: "Center" } },
          { value: "out", label: { en: "Out" } },
          { value: "out-over", label: { en: "Out over" } },
          { value: "in", label: { en: "In" } },
          { value: "in-over", label: { en: "In over" } },
        ],
      },
      defaultValue: "center",
    },
    offset: {
      hidden: (content) => content.style !== "out" && content.style !== "in",
      type: "Length",
      label: {
        en: "Line offset",
      },
      options: {
        unitChoices: [{ value: "px", label: "px", min: 0, max: 100 }],
      },
      defaultValue: "20px",
    },
    thickness: {
      type: "Length",
      label: {
        en: "Thickness",
      },
      options: {
        unitChoices: [{ value: "px", label: "px", min: 1, max: 1000 }],
      },
      defaultValue: "10px",
    },
    emptyThickness: {
      type: "Length",
      label: {
        en: "Empty thickness",
      },
      options: {
        unitChoices: [{ value: "px", label: "px", min: 1, max: 1000 }],
      },
      defaultValue: "10px",
    },
    fillColor: {
      type: "Color",
      label: {
        en: "Fill color",
        fr: "Fill color",
      },
      options: {
        nullable: true,
      },
      defaultValue: "#099AF2",
    },
    emptyColor: {
      type: "Color",
      label: {
        en: "Empty color",
        fr: "Empty color",
      },
      options: {
        nullable: true,
      },
      defaultValue: "#f4f4f4",
    },
    animationDuration: {
      type: "Length",
      label: {
        en: "Animation duration",
      },
      options: {
        unitChoices: [{ value: "ms", label: "ms", min: 1, max: 5000 }],
      },
      defaultValue: "400ms",
    },
    animationDelay: {
      type: "Length",
      label: {
        en: "Animation delay",
      },
      options: {
        unitChoices: [{ value: "ms", label: "ms", min: 1, max: 5000 }],
      },
      defaultValue: "600ms",
    },
    container: {
      hidden: true,
      defaultValue: [],
    },
  },
};
