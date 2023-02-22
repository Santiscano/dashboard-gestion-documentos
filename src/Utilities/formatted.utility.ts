/**
 * metodo para formatear los numeros a dinero "COP"
 * @param amount numero a formatear
 * @returns fecha formateada
 */
export const  formattedAmount = (amount:any) => {
  const numericAmount = parseFloat(amount);
  const formatted = numericAmount.toLocaleString('es-CO',{
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });
  return formatted;
}
