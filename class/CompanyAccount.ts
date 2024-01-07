import { Account } from "./Account"

export class CompanyAccount extends Account {
    constructor(name: string, accountNumber: number, balance: number, status: boolean) {
        super(name, accountNumber, balance, status)
    }

    getLoan = (value: number): void => {
        if(this.validateStatus()) {
            this.deposit(value)
        }
    }
}