export abstract class Account {
    private name: string
    private accountNumber: number
    private balance: number
    private status: boolean

    constructor(name: string, accountNumber: number, balance: number, status: boolean) {
        this.name = name
        this.accountNumber = accountNumber
        this.balance = balance
        this.status = status
    }

    getName = (): void => {
        console.log(`Nome: ${this.name}`)
    }

    deposit = (value: number): void => {
        if(this.status === true && value > 0) {
            this.balance += value
        }

        console.log(`Foi depositado R$ ${value},00`)
    }

    withdraw = (value: number): void => {
        if(this.status === true && value <= this.balance && value > 0) {
            this.balance -= value
        }

        console.log(`Foi sacado R$ ${value},00`)
    }

    getBalance = (): void => {
        console.log(`Saldo: R$ ${this.balance},00`)
    }

    depositTen = (): void => {
        this.balance += 10
        console.log(`Foi acrescido 10 reais ao seu saldo. Seu saldo agora é de: R$ ${this.balance},00`)
    }

    validateStatus = (): boolean => {
        if(this.status) {
            console.log('Seu status é: Ativo')
            return true;
        } else {
            console.log('Seu status é: Inativo')
            return false;
        }
    }

}