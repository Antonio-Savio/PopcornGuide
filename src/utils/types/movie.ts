
export interface MovieProps{
    id: number;
    title: string;
    poster_path: string;
}

export interface MovieDetailProps extends MovieProps{
    overview: string;
    budget: number;
    genres: {name: string}[];
    production_countries: {name: string}[];
    revenue: number;
    runtime: number;
    tagline: string;
    vote_average: number;
    success?: boolean;
    release_date: string;
}