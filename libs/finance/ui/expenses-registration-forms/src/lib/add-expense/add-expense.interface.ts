export interface AddExpense {
    
    description: string;
    amountExclVat: number | null;
    vatPercentage: number | null;
    date: Date | null;
}