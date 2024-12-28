export interface IData {
  id: string;
  alt_description: string | null;
  urls: {
    thumb: string;
    regular: string;
    full: string;
  };
  user?: {
    name: string;
    username: string;
  };
  likes: number;
}