import { Nutrition } from "../class/nutrition";
export declare class Goods {
    name: string;
    amount: number;
    nutritions: Nutrition[];
    show: boolean;
    constructor(goods?: {
        name?: string;
        amount?: number;
        nutritions?: Nutrition[];
        show?: boolean;
    });
}
