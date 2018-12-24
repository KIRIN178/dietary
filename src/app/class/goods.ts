import { Nutrition } from "../class/nutrition";

export class Goods {
    name: string;
    amount: number;
    nutritions: Nutrition[];
    show: boolean;
    
    constructor(goods: {
            name?: string,
            amount?: number,
            nutritions?: Nutrition[],
            show?: boolean
        } = {}) {
        this.name = goods.name;
        this.amount = goods.amount;
        this.nutritions = goods.nutritions;
        this.show = goods.show;
    }
}
