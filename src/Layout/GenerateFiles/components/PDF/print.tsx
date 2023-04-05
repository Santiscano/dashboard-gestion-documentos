// import React from "react"; // Importamos React
// import LOGO from "../../../../assets/images/LOGOTIPO_ENVIEXPRESS_horizontal_150x50.png";
// import {
//   Document,
//   Page,
//   View,
//   Text,
//   Image,
//   StyleSheet,
// } from "@react-pdf/renderer"; // Importamos los componentes necesarios de react-pdf
// import pdfjsLib from "pdfjs-dist"; // Importamos pdfjs-dist
// import { usb, getDeviceList, findByIds } from 'usb';
// import fs from "fs";

// const styles = StyleSheet.create({
//   page: {},
//   view: {},
//   image: { width: "90px", marginLeft: "15px" },
//   text: {
//     fontSize: "10px",
//     width: "100%",
//     marginTop: "5px",
//     marginLeft: "15px",
//   },
// });

// const devices: usb.Device[] = getDeviceList();

// export const savePDF = (
//   cediType: any,
//   settledNumber: any,
//   accountType: any
// ) => {
//   // Definimos una función que crea y guarda un PDF
//   const pdfDoc = // Creamos un componente Document con un componente Page y Text dentro
//     (
//       <Document>
//         <Page size={{ width: 189, height: 94.5 }}>
//           <View>
//             <Image src={LOGO} style={styles.image} />
//             <Text style={styles.text}>{cediType}</Text>
//             <Text style={styles.text}>{settledNumber}</Text>
//             <Text style={styles.text}>{accountType}</Text>
//             <Text style={styles.text}>Mensaje de prueba</Text>
//           </View>
//         </Page>
//       </Document>
//     );

//   pdfjsLib
//   // @ts-ignore
//   .getDocument({ data: pdfDoc })
//   .promise // Usamos pdfjsLib para obtener el objeto PDF a partir del componente Document creado anteriormente
//   // .then((pdf) => {
//   //     pdf.getBlob().then((blob: any) => {
//   //       // Obtenemos el blob (datos binarios) del PDF generado
//   //       const fileReader = new FileReader(); // Creamos un FileReader para leer el blob
//   //       fileReader.onload = () => {
//   //         // Cuando termine de leer el blob...
//   //         const buffer = Buffer.from(fileReader.result as ArrayBuffer); // Convertimos el resultado del FileReader en un buffer de bytes
//   //         fs.writeFile("pdf-to-print.pdf", buffer, (err) => {
//   //           // Escribimos el buffer en un archivo en el sistema de archivos (en este caso, 'pdf-to-print.pdf')
//   //           if (err) {
//   //             // Si ocurre un error...
//   //             console.error(err); // Lo imprimimos en la consola
//   //             return;
//   //           }
//   //           console.log("PDF saved"); // Si no hay errores, imprimimos un mensaje en la consola indicando que se guardó el PDF
//   //         });
//   //       };
//   //       fileReader.readAsArrayBuffer(blob); // Leemos el blob como un array de bytes
//   //     });
//   //   });
// };

// export const printPDF = () => {
//   // Definimos una función que imprime un PDF
//   const device = findByIds(0x0a5f, 0x0081); // Buscamos la impresora USB con Vendor ID 0x0a5f y Product ID 0x0081 (en este caso, una Zebra GT-800)
//   if (device === undefined) {
//     // Si no se encuentra la impresora...
//     console.error("Zebra GT-800 not found"); // Imprimimos un mensaje de error en la consola
//     return;
//   }
//   device.open(); // Abrimos la conexión con la impresora
//   // device.interfaces?[0].claim(); // Reclamamos la interfaz USB de la impresora (para poder enviar datos)
//   // device.interfaces?[0].endpoints[1].transfer(
//     // Enviamos los datos al endpoint de salida de la interfaz USB de la impresora
//     Buffer.from(fs.readFileSync("pdf-to-print.pdf")), // Leemos el archivo 'pdf-to-print.pdf' y lo convertimos en un buffer de bytes
//     (err: any) => {
//       // Cuando termine de transferirse el buffer...
//       if (err) {
//         console.error(err); // Si ocurre un error...
//         console.error(err); // Lo imprimimos en la consola
//       }
//       console.log("PDF printed"); // Si no hay errores, imprimimos un mensaje en la consola indicando que se imprimió el PDF
//       // device.interfaces[0].release(() => {
//         device.close(); // Liberamos la interfaz USB de la impresora (para que otros programas puedan usarla)
//         device.close(); // Cerramos la conexión con la impresora
//       });
//     }
//   );
// };
