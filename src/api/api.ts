import axios from "axios";
import {IAd, IPurchaseRequest, IUser, TAdListResponse, TCategoriesResponse} from "./api.types.ts";

export const baseUrl = 'https://api.hellmarket.shop/'

class Api {
    // Users
    getUserById = {
        key: 'GET_USER_BY_ID',
        method: (id: number) => {
            return axios.get<IUser>(`${baseUrl}user?tg_id=${id}`)
        }
    }

    getUserAsSeller = {
        key: 'GET_USER_AS_SELLER',
        method: (id: number) => {
            return axios.get(`${baseUrl}user/seller?tg_id=${id}`)
        }
    }

    searchUser = {
        key: 'SEARCH_USER',
        method: (username: string) => {
            return axios.get<IUser[] | null>(`${baseUrl}user/search?username=${username}`)
        }
    }

    // Ads
    getAdList = {
        key: 'GET_AD_LIST',
        method: (categoryId: number) => {
            return axios.get<TAdListResponse>(`${baseUrl}ad/list?category_id=${categoryId}`)
        }
    }

    getAdById = {
        key: 'GET_AD_BY_ID',
        method: (id: number) => {
            return axios.get<IAd>(`${baseUrl}ad?id=${id}`)
        }
    }

    getCategories = {
        key: 'GET_CATEGORIES',
        method: () => axios.get<TCategoriesResponse>(`${baseUrl}category`),
    }

    purchaseAd = {
        method: (body: IPurchaseRequest) => {
            return axios.post<{message: string}>(`${baseUrl}user/purchase`, body)
        }
    }
}

export const apiMethods = new Api()
