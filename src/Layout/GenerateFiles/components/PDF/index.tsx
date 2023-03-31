import React, { useEffect, useState } from "react";
import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import LOGO from "../../../../assets/images/LOGOTIPO_ENVIEXPRESS_horizontal_150x50.png";

const styles = StyleSheet.create({
  page: {},
  view: {},
  image: { width: "90px", marginLeft: "15px" },
  text: {
    fontSize: "10px",
    width: "100%",
    marginTop: "5px",
    marginLeft: "15px",
  },
});

function PDF({ cediType, settledNumber, accountType }: any) {
  useEffect(() => {
    console.log(
      "se creo el componente pdf y los valores capturados son: ",
      cediType,
      settledNumber,
      accountType
    );
  }, []);
  return (
    <Document>
      <Page size={{ width: 189, height: 94.5 }}>
        <View>
          <Image src={LOGO} style={styles.image} />
          <Text style={styles.text}>{cediType}</Text>
          <Text style={styles.text}>{settledNumber}</Text>
          <Text style={styles.text}>{accountType}</Text>
          <Text style={styles.text}>Mensaje de prueba</Text>
        </View>
      </Page>
    </Document>
  );
}

export default PDF;
