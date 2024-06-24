export interface IMovieById {
	fees: Fees;
	status: unknown;
	externalId: ExternalId;
	rating: Rating;
	votes: Votes;
	backdrop: Backdrop;
	movieLength: number;
	images: Images;
	productionCompanies: ProductionCompany[];
	spokenLanguages: SpokenLanguage[];
	id: number;
	type: string;
	name: string;
	description: string;
	distributors: Distributors;
	premiere: Premiere;
	slogan: string;
	year: number;
	budget: Budget;
	poster: Poster;
	facts: Fact[];
	genres: Genre[];
	countries: Country[];
	seasonsInfo: unknown[];
	persons: Person[];
	lists: string[];
	typeNumber: number;
	alternativeName: string;
	enName: unknown;
	names: Name[];
	ageRating: number;
	ratingMpaa: string;
	updatedAt: string;
	sequelsAndPrequels: SequelsAndPrequel[];
	shortDescription: string;
	technology: Technology;
	ticketsOnSale: boolean;
	imagesInfo: ImagesInfo;
	similarMovies: SimilarMovy[];
	logo: Logo;
	watchability: Watchability;
	top10: unknown;
	top250: unknown;
	isSeries: boolean;
	seriesLength: unknown;
	totalSeriesLength: unknown;
	deletedAt: unknown;
	networks: unknown;
	videos: Videos;
}

export interface Fees {
	world: unknown;
	russia: unknown;
	usa: unknown;
}

export interface ExternalId {
	imdb: string;
	tmdb: number;
	kpHD: string;
}

export interface Rating {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await: unknown;
}

export interface Votes {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await: number;
}

export interface Backdrop {
	url: string;
	previewUrl: string;
}

export interface Images {
	framesCount: number;
}

export interface ProductionCompany {
	name: string;
	url: string;
	previewUrl: string;
}

export interface SpokenLanguage {
	name: string;
	nameEn: string;
}

export interface Distributors {
	distributor: string;
	distributorRelease: unknown;
}

export interface Premiere {
	world: string;
	russia: string;
	digital: string;
}

export interface Budget {
	value: number;
	currency: string;
}

export interface Poster {
	url: string;
	previewUrl: string;
}

export interface Fact {
	value: string;
	type: string;
	spoiler: boolean;
}

export interface Genre {
	name: string;
}

export interface Country {
	name: string;
}

export interface Person {
	id: number;
	photo: string;
	name: string;
	enName?: string;
	description?: string;
	profession: string;
	enProfession: string;
}

export interface Name {
	name: string;
	language?: string;
	type?: string;
}

export interface SequelsAndPrequel {
	id: number;
	name: string;
	alternativeName: string;
	enName: unknown;
	type: string;
	poster: Poster2;
	rating: Rating2;
	year: number;
}

export interface Poster2 {
	url: string;
	previewUrl: string;
}

export interface Rating2 {
	kp: number;
	imdb: number;
	filmCritics: number;
	russianFilmCritics: number;
	await: unknown;
}

export interface Technology {
	hasImax: boolean;
	has3D: boolean;
}

export interface ImagesInfo {
	framesCount: number;
}

export interface SimilarMovy {
	id: number;
	name: string;
	enName: unknown;
	alternativeName: string;
	type: string;
	poster: Poster3;
}

export interface Poster3 {
	url: string;
	previewUrl: string;
}

export interface Logo {
	url: string;
}

export interface Watchability {
	items: unknown[];
}

export interface Videos {
	trailers: Trailer[];
}

export interface Trailer {
	url: string;
	name: string;
	site: string;
	type: string;
}
