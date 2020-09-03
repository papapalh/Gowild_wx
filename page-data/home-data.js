import { ProductData } from '../database/product-data';
import { BannerData } from '../database/banner-data';
import { ThemeData } from '../database/theme-data';

class HomeData {
    constructor() {
    }
}

//banner信息
HomeData.BannerData = [
    BannerData.BannerDetail1,
    BannerData.BannerDetail2,
    BannerData.BannerDetail3,
    BannerData.BannerDetail4,
];

//栏目信息
HomeData.ThemeData = [
    ThemeData.ThemeData[1],
    ThemeData.ThemeData[2],
    ThemeData.ThemeData[3],
    ThemeData.ThemeData[4],
    ThemeData.ThemeData[5],
];

//商品信息
HomeData.ProductData = [
    ProductData.ProductData[1],
    ProductData.ProductData[2],
    ProductData.ProductData[3],
];

export { HomeData };