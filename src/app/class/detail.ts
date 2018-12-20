export class Detail {
    dose: number;
    unit: string;
    
    constructor(detail: {
            dose?: number,
            unit?: string
        } = {}) {
        this.dose = detail.dose;
        this.unit = detail.unit;
    }
}
