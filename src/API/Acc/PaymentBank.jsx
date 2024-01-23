
import { Axios } from "../../Config";

const Index = {
    DebtLoanTrn: (data) => Axios.get("api/v1/acc/payment-bank/debt-loan-trn", { params: { ...data } }).then(res => res),
    Balance: (data) => Axios.get("api/v1/acc/payment-bank/balance", { params: { data: JSON.stringify(data) } }).then(res => res),
    PayrollTrn: (data) => Axios.get("api/v1/acc/payment-bank/payroll-trn", { params: { ...data } }).then(res => res),
    LaborContract: (data) => Axios.get("api/v1/acc/payment-bank/labor-contract", { params: { data: JSON.stringify(data) } }).then(res => res),
    BillTrn: (data) => Axios.get("api/v1/acc/payment-bank/bill-trn", { params: { data: JSON.stringify(data) } }).then(res => res),
    PayrollWorkersTotalAmount: (data) => Axios.get("api/v1/acc/payment-bank/payroll-workers-total-amount", { params: { data: JSON.stringify(data) } }).then(res => res),
    YgbTrn: (data) => Axios.get("api/v1/acc/payment-bank/ygb-trn", { params: { data: JSON.stringify(data) } }).then(res => res),
    PaymentBank: (data) => Axios.post('api/v1/acc/payment-bank', data).then(res => res),
    index: (data) => Axios.get('api/v1/acc/payment-bank', { params: { data } }).then(res => res),
    show: (uuid) => Axios.get(`api/v1/acc/payment-bank/${uuid}`).then(res => res),
    update: (uuid, data) => Axios.put(`api/v1/acc/payment-bank/${uuid}`, data).then(res => res),
    editStatus: (uuid) => Axios.patch(`api/v1/acc/payment-bank/edit-status/${uuid}`).then(res => res),
    debitCreditList: (data) => Axios.get('api/v1/acc/payment-bank/debit-credit-list', { params: { ...data } }),
    amount: (id) => Axios.get('api/v1/acc/payment-bank/amount', { params: { id } }).then(res => res),
    factura: (data) => Axios.get('api/v1/acc/payment-bank/factura-trn', { paramss: { data: JSON.stringify(data) } }).then(res => res)
}

export default Index;