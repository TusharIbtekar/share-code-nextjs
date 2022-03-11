export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  },
  description: string;
  body: object[];
  mainImage: {
    asset: {
      url: string;
    };
    body: object[];
  };
  slug;
}