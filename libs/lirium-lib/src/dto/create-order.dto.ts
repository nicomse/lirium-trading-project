export class createOrderDTO {
    customer_id: string;
    asset: assetDTO;
    reference_id: string;
    operation: Operations;
}

class assetDTO {
    currency: string;
    amount: string;
}
enum Operations {
    buy,
    sell
}