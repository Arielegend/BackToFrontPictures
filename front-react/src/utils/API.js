import axios from "axios";

export const GetPics = async () => {
  let photos = await axios.get("http://localhost:9090/v1/images");
  if (photos.status === 200) return photos.data;
  return [];
};
