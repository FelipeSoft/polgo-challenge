import Exception from "./Exception";

export default class Winner {
    public constructor(
        public name: string,
        public readonly prize: string,
        public readonly date: number
    ) {
        this.validateName();
        this.validateTimestamp();
    }

    public validateName() {
        this.name = this.name.trim();
        
        const onlyLettersRegex = /^[A-Za-z\s]+$/;

        if (this.name === '' || !onlyLettersRegex.test(this.name)) {
            throw new Exception("[Winner Exception]: The winner 'name' should contain only letters and spaces, and cannot be empty.");
        }
    }

    public validateTimestamp() {
        if (!this.isValidTimestamp(this.date)) {
            throw new Exception("[Winner Exception]: The 'date' key is not a valid timestamp.");
        }
    }

    private isValidTimestamp(value: number): boolean {
        return typeof value === 'number' && !isNaN(value) && value > 0;
    }
}
