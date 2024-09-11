import { APIKey } from "./Constants/constants"

export const originals = `discover/tv?api_key=${APIKey}&with_nertworks=213`
export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=28`
export const blockbuster = `https://api.themoviedb.org/3/trending/all/week?api_key=${APIKey}&language=en-US`