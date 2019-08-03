export const EDIT_TRANSACTION='EDIT_TRANSACTION';

export function onEditTransaction(transaction, property, value){
  if(property=="date") { value = new Date(value).getTime(); }
  return{
    type: EDIT_TRANSACTION,
    payload: {transaction, property, value}
  }
}
