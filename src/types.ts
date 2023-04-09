export type TUserCardModel = {
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  country: string;
  photo: FileList;
  agree: boolean;
};

export type TCardsProps = {
  cards: TImage[];
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
export type TSearchInfoParams = {
  photo_id: string;
};
export type TFormProps = {
  setValues: (value: TUserCard) => void;
};

export type TImageSize = {
  label: string;
  source: string;
};

export type TSearchBarProps = {
  searchValue: string;
  onSearchBarChange: (value: string) => void;
  onSearchBarSubmit: () => void;
};

export type TTag = {
  id: string;
  _content: string;
};

export type TImageInfo = {
  id: string;
  description: {
    _content: string;
  };
  owner: {
    username: string;
  };
  title: {
    _content: string;
  };
  tags: {
    tag: TTag[];
  };
  dates: {
    taken: string;
  };
  views: string;
};

export type TSearchParams = {
  method: string;
  api_key: string;
  format: string;
  nojsoncallback: string;
  [key: string]: string;
};

export type TSearchImagesParams = {
  tags: string;
  extras: string;
  page: string;
  sort: string;
  per_page: string;
  [key: string]: string;
};

export type TImage = {
  id: string;
  owner: string;
  title: string;
  datetaken: string;
  ownername: string;
  views: number;
  url_n: string;
  height_n: string;
  width_n: string;
};
