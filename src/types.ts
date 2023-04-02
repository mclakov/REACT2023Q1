export type TUserCardModel = {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  country: string;
  photo: FileList;
  agree: boolean;
};

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

export type TCardsProps = {
  cards: TCardProps[];
};

export type TUserCard = {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  country: string;
  photo: FileList;
  agree: boolean;
};

export type TFormProps = {
  setValues: (value: TUserCard) => void;
};

export type TUserCardProps = {
  [key: string]: string | number;
};
