import { contentfulClient } from "./contentful";

export async function getCmsContent() {
  const res = await contentfulClient.getEntries();
  const data = res.items.map((item: any) => {
    return item.fields;
  });

  return data;
}
