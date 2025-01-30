export class Product {

    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number,
        public quantity: {
            value: number,
            valid: boolean
        } = {
            value: 1,
            valid: true
        }
    ) {

    }

}