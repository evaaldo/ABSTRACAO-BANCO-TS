import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const evaldo = new PeopleAccount(1, 'Evaldo', 10, 1000, true)
const empresa = new CompanyAccount('Empresa', 11, 1000000, true)

empresa.getLoan(50000)
