import * as contentful from "contentful";

const contentfulClient = contentful.createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN,
});

export { contentfulClient };
