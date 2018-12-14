import { Nutrition } from "../class/nutrition";

export class Goods {
    name: string;
    nutritions: Nutrition[];
    show: boolean;
    
    constructor(goods: {
            name?: string,
            nutritions?: Nutrition[],
            show?: boolean
        } = {}) {
        this.name = goods.name;
        this.nutritions = goods.nutritions;
        this.show = goods.show;
    }
}
