export type TUserCardModel = {
  [key: string]: string | boolean;
};

export type TFormPageProps = Record<string, never>;

export type TCardProps = {
  id: string;
  title: string;
  author: string;
  url: string;
  date: string;
  views: string;
  likes: string;
  dislikes: string;
  comments: string;
};
