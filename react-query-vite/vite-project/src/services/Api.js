import axios from "axios"
import { BASE_URL } from "../constant/Constants"

export const getPeoples = async () => {
    const res = await axios.get(`${BASE_URL}/people`)
    console.log(res)
    return res.data.results
}

export const getFilms = async (searchQuery, limit) => {
    console.log(searchQuery, limit)
    if (searchQuery?.length > 0) {
        const searchRes = await axios.get('https://swapi.dev/api/people/?search=r2')
        console.log(searchRes)
        return searchRes?.data?.results
    } else {
        const res = await axios.get(`${BASE_URL}/films`)
        console.log(res)
        return res.data.results
    }
}