export const EDIT_TRANSACTION='EDIT_TRANSACTION';

export function onEditTransaction(transaction, property, value){
  return{
    type: EDIT_TRANSACTION,
    payload: {transaction, property, value}
  }
}
