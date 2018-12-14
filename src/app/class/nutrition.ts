export class Nutrition {
    name: string;
    dose: number;
    unit: string;
    
    constructor(nutrition: {
            name?: string,
            dose?: number,
            unit?: string
        } = {}) {
        this.name = nutrition.name;
        this.dose = nutrition.dose;
        this.unit = nutrition.unit;
    }
}
