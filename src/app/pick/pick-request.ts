export interface PickRequest {
    id: string;
    items: Array<{ id: string, name: string, amount: number }>;
}