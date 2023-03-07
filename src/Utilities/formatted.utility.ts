/**
 * metodo para formatear los numeros a dinero "COP"
 * @param amount numero a formatear
 * @returns fecha formateada
 */
export const  formattedAmount = (amount:any) => {
  // console.log('amount: ', amount);
  const numericAmount = parseFloat(amount);
  // console.log('numericAmount: ', numericAmount);
  const formatted = numericAmount.toLocaleString('es-CO',{
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });
  // console.log('formatted: ', formatted);
  return formatted;
}

/**
 * convierte la Primer letra en mayuscula y todas las demas en minusculas
 * @param text palabra a convertir
 * @returns resultado convertido
 */
export function capitalizeFirstLatterUppercase(text: string): string {
  const words = text.toLowerCase().split(' ');
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  return capitalizedWords.join(' ');
}
