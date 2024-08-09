export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  urls: Url[];
}
interface Url {
  type: string;
  url: string;
}
export interface Thumbnail {
  extension: string;
  path: string;
}
