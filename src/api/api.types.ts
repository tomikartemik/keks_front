// Ads
export interface IAd {
    id: number;
    title: string;
    price: number;
    photo_url: string;
    category_id: number;
    category_name: string;
    seller_id: number;
    seller_name: string;
    seller_rating: number;
    seller_review_number: number;
    stock: number
    description: string;
}

export type TAdListResponse = IAd[];

export interface ICategory {
    id: number;
    name: string;
}

export interface IPurchaseRequest {
    ad_id: number;
    telegram_id: number;
}

export type TCategoriesResponse = ICategory[]


// Users
export interface IUser {
    telegram_id: number;
    username: string;
    photo_url: string;
    balance: number;
    ads: IAd[];
    purchased: IAd[];
    rating: number;
    review_number: number;
}