export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

type Info = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export interface GetCharactersResponse {
  info: Info;
  results: Character[];
}
