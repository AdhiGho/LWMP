import { useState } from "react";

export default function Lesson1() {
  const nasi = "nasi";
  const kecap = "kecap";
  const garam = "garam";
  const telur = "telur";
  const bahanBahan:string[] = []
  const [bahanNasgor , setBahanNasgor] = useState<string[]>([])

  function masakNasgor(bahanBahan: string[]) {
    let nasiGoreng: string[] = [];
    bahanBahan.forEach((bahan) => {
      nasiGoreng.push(bahan);
    });
    let hasilMasak = "";
    if (nasiGoreng.length < 4) {
      hasilMasak = "nasi goreng tidak jadi";
    } else {
      hasilMasak = "nasi Goreng jadi";
    }
    return hasilMasak;
  }

  function masukkanNasi(){
    bahanBahan.push(nasi)
  }

  function masukkanGaram(){
    bahanBahan.push(garam)
  }

  function masukkanKecap(){
    bahanBahan.push(kecap)
  }

  function masukkanTelur(){
    bahanBahan.push(telur)
  }

  function masak(){
    setBahanNasgor(bahanBahan)
  }
  
  return <>
  <button onClick={masukkanNasi}> nasi</button>
  <button onClick={masukkanGaram}> garam</button>
  <button onClick={masukkanKecap}> kecap</button>
  <button onClick={masukkanTelur}> telur</button>
  <button onClick={masak}>Masak</button>
  <br/>
  {bahanNasgor?.length > 3 ? masakNasgor(bahanNasgor) : null
}
  </>;
}
