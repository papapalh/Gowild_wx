import { ProductData } from 'product-data';

class ThemeData {
    constructor() {
    }
}

ThemeData.ThemeData = {
    1 : {
        "id" : 1,
        "only" : 99, //99展示大图，其他展示小图
        "name" : "head1",
        "main_img" : "../../imgs/theme/1@theme-head.png", //大图路径
        "head_img" : "", //小图路径
        "products" : [
            ProductData.ProductData[1],
        ],
    },
    2 : {
        "id" : 2,
        "only" : 99,
        "name" : "head2",
        "main_img" : "../../imgs/theme/2@theme-head.png",
        "head_img" : "", //小图路径
        "products" : [
            ProductData.ProductData[2],
        ],
    },
    3 : {
        "id" : 3,
        "only" : 99,
        "name" : "head3",
        "main_img" : "../../imgs/theme/3@theme.png",
        "head_img" : "", //小图路径
        "products" : [
            ProductData.ProductData[3],
        ],
    },
    4 : {
        "id" : 4,
        "only" : 0,
        "name" : "Item1",
        "main_img" : "../../imgs/theme/3@theme.png",
        "head_img" : "../../imgs/theme/1@theme.png",
        "products" : [],
    },
    5 : {
        "id" : 5,
        "only" : 0,
        "name" : "Item2",
        "main_img" : "../../imgs/theme/3@theme.png",
        "head_img" : "../../imgs/theme/2@theme.png",
        "products" : [],
    },

};

export { ThemeData };