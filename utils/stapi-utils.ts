import axios from "axios";

const BASE_URL = process.env.STRAPI_URL || "http://127.0.0.1:1337";

export async function fetchDataFromStrapi(route: string) {
  const url = `${BASE_URL}/api/${route}`;
  try {
    const response = await axios.get(url);
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw new Error(`Could not fetch data from ${url} `);
  }
}

export function processInfoBlocks(data: any) {
  const infoBlocksRaw = data?.attributes?.info_blocks?.data;

  return (
    infoBlocksRaw?.map((infoBlock: any) => ({
      ...infoBlock.attributes,
      imageSrc: BASE_URL + infoBlock.attributes?.image?.data?.attributes?.url,
      id: infoBlock.id,
    })) ?? []
  );
}
