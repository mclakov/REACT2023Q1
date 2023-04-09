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
  url_n: string;
  id: string;
  title: string;
  author: string;
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

export type TSearchBarProps = {
  searchValue: string;
  onSearchBarChange: (value: string) => void;
  onSearchBarSubmit: () => void;
};

export type TImage = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  datetaken: string;
  datetakengranularity: number;
  datetakenunknown: number;
  ownername: string;
  views: number;
  url_n: string;
  height_h: string;
  width_h: string;
};

export type TSearchParams = {
  method: string;
  api_key: string;
  tags: string;
  extras: string;
  page: string;
  format: string;
  nojsoncallback: string;
  sort: string;
  per_page: string;
  [key: string]: string;
};
