import { Config } from "../constants/config";

export const pictureMapper = (cover) => (
  { cover, ext },
  size = "_mediumOne"
) => ({ cover: `${Config.ImageUrl}${cover}${size}.${ext}` });

export const picutureUrlMapper = ({ cover, ext }, size = "_mediumOne") => ({
  cover: `${Config.ImageUrl}${cover}${size}.${ext}`,
});
