export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type GetExampleRequest = {
}

export type GetExampleResponseOK = unknown
export type GetExampleResponses =
  FullResponse<GetExampleResponseOK, 200>

export type MoviesDbGetMoviesRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.id'?: 'asc' | 'desc';
  'orderby.title'?: 'asc' | 'desc';
}

export type MoviesDbGetMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null }>
export type MoviesDbGetMoviesResponses =
  MoviesDbGetMoviesResponseOK

export type MoviesDbCreateMovieRequest = {
  'id'?: number;
  'title': string;
}

export type MoviesDbCreateMovieResponseOK = {
  'id': number | null;
  'title': string | null;
}
export type MoviesDbCreateMovieResponses =
  MoviesDbCreateMovieResponseOK

export type MoviesDbUpdateMoviesRequest = {
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'title': string;
}

export type MoviesDbUpdateMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null }>
export type MoviesDbUpdateMoviesResponses =
  MoviesDbUpdateMoviesResponseOK

export type MoviesDbGetMovieByIdRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

export type MoviesDbGetMovieByIdResponseOK = {
  'id': number | null;
  'title': string | null;
}
export type MoviesDbGetMovieByIdResponses =
  MoviesDbGetMovieByIdResponseOK

export type MoviesDbUpdateMovieRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
  'title': string;
}

export type MoviesDbUpdateMovieResponseOK = {
  'id': number | null;
  'title': string | null;
}
export type MoviesDbUpdateMovieResponses =
  MoviesDbUpdateMovieResponseOK

export type MoviesDbDeleteMoviesRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

export type MoviesDbDeleteMoviesResponseOK = {
  'id': number | null;
  'title': string | null;
}
export type MoviesDbDeleteMoviesResponses =
  MoviesDbDeleteMoviesResponseOK

export type GetMoviesDbExampleRequest = {
}

export type GetMoviesDbExampleResponseOK = unknown
export type GetMoviesDbExampleResponses =
  FullResponse<GetMoviesDbExampleResponseOK, 200>

export type GetMoviesServiceExampleRequest = {
}

export type GetMoviesServiceExampleResponseOK = unknown
export type GetMoviesServiceExampleResponses =
  FullResponse<GetMoviesServiceExampleResponseOK, 200>

export type GetMoviesServiceUpperMoviesRequest = {
}

export type GetMoviesServiceUpperMoviesResponseOK = Array<{ 'id'?: number; 'title'?: string }>
export type GetMoviesServiceUpperMoviesResponses =
  GetMoviesServiceUpperMoviesResponseOK



export interface Api {
  setBaseUrl(newUrl: string) : void;
  getExample(req?: GetExampleRequest): Promise<GetExampleResponses>;
  moviesDbGetMovies(req?: MoviesDbGetMoviesRequest): Promise<MoviesDbGetMoviesResponses>;
  moviesDbCreateMovie(req?: MoviesDbCreateMovieRequest): Promise<MoviesDbCreateMovieResponses>;
  moviesDbUpdateMovies(req?: MoviesDbUpdateMoviesRequest): Promise<MoviesDbUpdateMoviesResponses>;
  moviesDbGetMovieById(req?: MoviesDbGetMovieByIdRequest): Promise<MoviesDbGetMovieByIdResponses>;
  moviesDbUpdateMovie(req?: MoviesDbUpdateMovieRequest): Promise<MoviesDbUpdateMovieResponses>;
  moviesDbDeleteMovies(req?: MoviesDbDeleteMoviesRequest): Promise<MoviesDbDeleteMoviesResponses>;
  getMoviesDbExample(req?: GetMoviesDbExampleRequest): Promise<GetMoviesDbExampleResponses>;
  getMoviesServiceExample(req?: GetMoviesServiceExampleRequest): Promise<GetMoviesServiceExampleResponses>;
  getMoviesServiceUpperMovies(req?: GetMoviesServiceUpperMoviesRequest): Promise<GetMoviesServiceUpperMoviesResponses>;
}
type PlatformaticFrontendClient = Omit<Api, 'setBaseUrl'>
export default function build(url: string): PlatformaticFrontendClient
