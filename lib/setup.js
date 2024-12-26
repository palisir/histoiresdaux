const spaceImport = require("contentful-import");
const exportFile = require("./export.json");

// const { VITE_CONTENTFUL_SPACE_ID, VITE_CONTENTFUL_MANAGEMENT_TOKEN } =
//   process.env;

// if (!VITE_CONTENTFUL_SPACE_ID || !VITE_CONTENTFUL_MANAGEMENT_TOKEN) {
//   throw new Error(
//     [
//       "Parameters missing...",
//       "Please run the setup command as follows",
//       "CONTENTFUL_SPACE_ID=XXX CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-XXX npm run setup",
//     ].join("\n")
//   );
// }

// spaceImport({
//   spaceId: VITE_CONTENTFUL_SPACE_ID,
//   managementToken: VITE_CONTENTFUL_MANAGEMENT_TOKEN,
// })
//   .then(() => console.log("The content model of your space is set up!"))
//   .catch((e) => console.error(e));
