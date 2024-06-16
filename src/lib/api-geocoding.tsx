import { GeocodingType } from "../types/api-geocoding";

export async function getAddress({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data: GeocodingType = await res.json();

  return data;
}
