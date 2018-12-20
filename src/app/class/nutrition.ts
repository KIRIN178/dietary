import { Detail } from "../class/detail";

export class Nutrition {
    name: string;
    detail: Detail;
    
    constructor(nutrition: {
            name?: string,
            detail?: Detail,
        } = {}) {
        this.name = nutrition.name;
        this.detail = nutrition.detail;
    }
}
