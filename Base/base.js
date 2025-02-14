document.write("hello world </br>");
document.write("merhaba javascript");

console.log("hello world");
console.warn("uyarilara dkkat");
console.error("hata yapma");
console.info(" tamam tamam ogreniyorsun devam et");
console.log({ name: "nurettin", lastname: "bayram" });

let a = 5;
let b = 4;
console.log("sayilarin toplami:", a + b);
console.log("sayilarin carpimi:" + a * b);

console.log(window.location.pathname);

alert("dikkatli ve uygulamali git");
alert("takibimdesin");

console.log("merhaba");
console.log(window.screen.height);

var x = 15;
console.log(x);

var x = 45;
let y = 25;
const z = 12;

function myfunc() {
  var a = 4;
  let b = 7;
  const c = 8;
  console.log(x);
  console.log(y);
  console.log(z);
  //console.log(a);
  //console.log(b);
  //console.log(c);
}

myfunc();
//console.log(a);
//console.log(b);
//console.log(c);

let d = 4;
d = 5;
console.log(d);

let isim = "nurettin";
let x = 4;
y = true;
z = {
  fullname: { name: "nurettin", lastname: "bayram" },
  location: { birdplace: "sirnak", birdday: "1996" },
};
console.log(typeof z);
console.log(z);
console.log(z.lastname);
console.log(typeof y);
console.log(typeof x);
console.log(typeof isim);
console.log(z.fullname.name);
console.log(z.location.birdday);

window.alert("nasil gidiyor");
alert("cok iyi");

isim = prompt("isminizi giriniz: ");
alert("Hosgeldiniz " + isim);

let sonuc = confirm("bu sayfayi kapatmak istediginizden emin misiniz?");
alert(sonuc);

let boy = Number(prompt("boyunuzu giriniz(metre): "));
let kilo = Number(prompt("kilonuzu giriniz : "));
let indeks = kilo / (boy * 2);

if (indeks < 18.5) alert("ideal kilonun altinda " + indeks);
else if (indeks >= 18.5 && indeks < 24.5) alert("ideal kilolusunuz " + indeks);
else if (indeks >= 24.5 && indeks < 29) alert("kilolusunuz " + indeks);
else if (indeks >= 29) alert("asiri kilolusunuz " + indeks);

//?----------------------BENZIN ISTASYONU---------------------------------
const altSatir = "\r\n";
let Dizel = 3.49,
  Benzin = 2.99,
  LPG = 1.99;
let yakitTuru =
  "1-Dizel: 3.49 $" +
  altSatir +
  "2-Benzin : 2.99 $" +
  altSatir +
  "3-LPG: 1.99 $" +
  altSatir +
  altSatir +
  altSatir +
  "Lutfen yakit turunuzu giriniz...";

let secim = Number(prompt(yakitTuru));

if (secim == 1 || secim == 2 || secim == 3) {
  let galon = Number(prompt("Alinacak galon miktarini giriniz: "));
  let bakiyeniz = Number(prompt("Bakiye miktarini giriniz"));

  if (secim == 1) {
    let tutar = galon * Dizel;
    if (bakiyeniz >= tutar) {
      alert(
        "Isleminiz onaylandi" +
          altSatir +
          "**********************" +
          altSatir +
          "Islem tutariniz: " +
          tutar +
          "Bakiyeniz: " +
          (bakiyeniz - tutar) +
          "$ dir"
      );
    } else {
      alert(
        "Isleminiz basarisiz oldu. " +
          altSatir +
          "Bakiyeniz yetersiz." +
          altSatir +
          "Bakiye eksiginiz:" +
          (tutar - bakiyeniz) +
          "$ dir."
      );
    }
  } else if (secim == 2) {
    let tutar = galon * Benzin;
    if (bakiyeniz >= tutar) {
      alert(
        "Isleminiz onaylandi" +
          altSatir +
          "**********************" +
          altSatir +
          "Islem tutariniz: " +
          tutar +
          altSatir +
          "Bakiyeniz: " +
          (bakiyeniz - tutar) +
          "$ dir"
      );
    } else {
      alert(
        "Isleminiz basarisiz oldu. " +
          altSatir +
          "Bakiyeniz yetersiz." +
          altSatir +
          "Bakiye eksiginiz:" +
          (tutar - bakiyeniz) +
          "$ dir."
      );
    }
  }
  if (secim == 3) {
    let tutar = galon * LPG;
    if (bakiyeniz >= tutar) {
      alert(
        "Isleminiz onaylandi" +
          altSatir +
          "**********************" +
          altSatir +
          "Islem tutariniz: " +
          tutar +
          altSatir +
          "Bakiyeniz: " +
          (bakiyeniz - tutar) +
          "$ dir"
      );
    } else {
      alert(
        "Isleminiz basarisiz oldu. " +
          altSatir +
          "Bakiyeniz yetersiz." +
          altSatir +
          "Bakiye eksiginiz:" +
          (tutar - bakiyeniz) +
          "$ dir."
      );
    }
  }
} else {
  alert("Lutfen gogru degeri girdiginize emin olun...");
}

//?-------------------ATM----------------------------------
altSatir = "\r\n";
let bakiyeniz = 1000;

let metin =
  "1-Bakiye goruntuleme" +
  altSatir +
  "2-Para cekme" +
  altSatir +
  "3-Para yatirma" +
  altSatir +
  "4-Cikis" +
  altSatir +
  altSatir +
  "Lutfen bir islem seciniz...";

secim = prompt(metin);

switch (secim) {
  case "1":
    alert("Bakiyeniz: " + bakiyeniz);
    break;
  case "2":
    let cekilenPara = Number(prompt("Lutfen cekilecek tutari giriniz:"));
    if (cekilenPara > bakiyeniz) {
      alert("Isleminiz gerceklesmedi bakiyeniz yetersiz...");
    } else {
      alert(
        "Isleminiz onaylandi lutfen gosterilen yerden paranizi cekiniz..." +
          altSatir +
          altSatir +
          "bakiyeniz: " +
          (bakiyeniz - cekilenPara)
      );
    }
    break;
  case "3":
    let yatirilacakPara = Number(prompt("Yatirilacak para miktarini giriniz:"));
    bakiyeniz = bakiyeniz + yatirilacakPara;
    alert("Paraniz yatirildi." + altSatir + "Bakiyeniz: " + bakiyeniz);
    break;
  case "4":
    alert("Cikis yaptiniz...");
    break;
  default:
    alert("Lutfen secimlerinizi dogru yapin...");
}

/? *?*************BreakPoint****************************** */;
//??KODLARI TANE TANE CALISTIRMA METODU
a = 15;
b = 2;
debugger;
let c = a + b;
d = a + b + c;
let e = a * b + d / c + a;

console.log("e nin sonucu: " + e);

//?--------------------Break---------------------
let sayac = 1;

while (sayac <= 10) {
  console.log(sayac);
  if (sayac == 4) {
    break; //sayac degeri 4 oldugunda donguyu kirip cikar artik devam etmez
  }
  sayac++;
}

//?--------------CONTUNUE---------------------*/

sayac = 0;

while (sayac < 10) {
  debugger;
  sayac++; // sayaci continue den once eklemeyi unutma yoksa sonsuz dongu olusur
  if (sayac == 6) {
    continue; // sayac 6 oldugunda continue dan sonraki hicbir kodu okumaz  yuzden sayac++ basa eklenmesine dikkat et sonsuz dongu olusur
  }
  console.log(sayac);
}
/*
!----------------------SADIK TURAN-----------------------------
*/
/************* STRINGLER ************************* */
let ad = "Nurettin";
let soyad = "Bayram";
let yas = 99;
let sehir = "Sirnak";

let mesaj0 =
  "Benim adim " +
  ad +
  " ve soyadim " +
  soyad +
  ". " +
  sehir +
  "'de yasiyorum " +
  (65 - yas) +
  " yilim kaldi emeklilige.";
console.log(mesaj0);

let mesaj1 = `Benim adim  ${ad}  ve soyadim  ${soyad}.  ${sehir} 'de yasiyorum  ${
  65 - yas
}  yilim kaldi emeklilige`;
console.log(mesaj1);

let emeklilik =
  65 - yas > 0
    ? "Emeklilige " + (65 - yas) + " yil kaldi."
    : "Zaten emeklisiniz.";

let mesaj2 = `Benim adim  ${ad}  ve soyadim  ${soyad}.  ${sehir} 'de yasiyorum  ${emeklilik}`;
console.log(mesaj2);

/************* STRING METODLARI ************************* */
let kursAdi = "Komple Uygulamali Web Gelistirme Egitimi";
let kursAdi1 = "   Komple Uygulamali Web Gelistirme Egitimi   ";

let result1 = kursAdi.toLowerCase(); //bunlar metod iken
console.log(result1);
let result2 = kursAdi.toLocaleUpperCase();
console.log(result2);
let result3 = kursAdi.length; //bu ise properti dir
console.log(result3);
let result4 = kursAdi[5];
console.log(result4);
let result5 = kursAdi.slice(0, 6);
console.log(result5);
let result6 = kursAdi.slice(-10, -1);
console.log(result6);
let result7 = kursAdi.substring(4, 12);
console.log(result7);
let result8 = kursAdi.replace("Egitimi", "Kursu"); //yer degistirme
console.log(result8);
let result9 = kursAdi1; //trimsiz hali bosluklu
let result10 = kursAdi1.trim();
console.log(result9);
console.log(result10);
let result11 = kursAdi.indexOf("Komple"); //metin icerisinde aranan kelimenin konumunu verir
console.log(result11);
let result12 = kursAdi.split(" "); //bosluktan ayirip bir dizi dondurur
console.log(result12);
let result13 = kursAdi.split(" ")[2]; //bosluktan ayirip bir dizi dondurur
console.log(result13);
let result14 = kursAdi.includes("Web"); //metinde boyle bir kelime varmi diye arattirir sonuc true false doner
console.log(result14);

/************* STRING METODLARI UYGULAMASI ************************* */
let url = "https://www.sadikturan.com";
kursAdi = "Komple Uygulamali Web Gelistirme Kursu";

//?url karakter sayisi?
result1 = url.length;
console.log(result1);

//?kurs adi kac kelimeden olusur?
result2 = kursAdi.split(" ");
console.log(result2.length);

//?url https ile mi basliyor??
result3 = url.startsWith("https");
console.log(result3);

//?kursadi icerisinde egitimi kelimesi var mi?
result4 = kursAdi.includes("Egitimi");
console.log(result4);

result6 = kursAdi.toLocaleLowerCase();
result5 = result6.replaceAll(" ", "-");
console.log(url + "/" + result5);

console.log(`${url}/${result5}`);

/************* NUMBERS METODLARI UYGULAMASI ************************* */

console.log(Number("10"));
console.log(parseFloat("10.5"));
console.log(isNaN("10")); //numbers mi?

let sayi = 15.154454;
sonuc = sayi.toPrecision(5); // sayinin 5 basamagini al
console.log(sonuc);
sonuc = sayi.toFixed(2);
console.log(sonuc);
console.log(typeof sonuc);

console.log(Math.round(12.36));
console.log(Math.floor(12.36));
console.log(Math.ceil(12.36));
console.log(Math.min(1, 10, 4, 5, 0));
console.log(Math.max(1, 18, 4, 5, 0));
console.log(Math.round(Math.random() * 10)); //0-10 arasinda rastgele sayi uretir

/************* DATE & TIMES METODLARI UYGULAMASI ************************* */

let simdi = new Date();
sonuc = simdi;
//?get ile o anki  tarih bilgileri alinirken get ile yeni tarih olusturulabilir
console.log("**************************get************");
console.log(sonuc);
console.log(sonuc.getDate());
console.log(sonuc.getDay());
console.log(sonuc.getMonth());
console.log(sonuc.getHours());
console.log(sonuc.getFullYear());
console.log("**************************set************");
sonuc.setFullYear(2030);
sonuc.setMonth(7);
sonuc.setDate(16);
console.log(sonuc);

//************* DIZI METODLARI UYGULAMASI ************************* */

let ogrenciler = ["cinar", "yigit", "ada"];
sonuc = ogrenciler.length;
console.log(sonuc);
sonuc = ogrenciler.join("-"); //dizi elemanlarini aralarina - koyarak birlestiri
console.log(sonuc);
sonuc = ogrenciler.toString();
console.log(sonuc);
sonuc = ogrenciler.length;
console.log(sonuc);
// sonuc = ogrenciler.pop();//son elenan silinir ve silinen eleman geri dondurulur
// console.log(sonuc);
// sonuc = ogrenciler.shift();//ilk eleman silinir ve geri dondurulur
// console.log(sonuc);
sonuc = ogrenciler.push("sena"); // dizinin sonuna eleman ekler
console.log(sonuc);
console.log(ogrenciler);
sonuc = ogrenciler.unshift("canan"); //listenin basina eleman ekle
console.log(sonuc);
console.log(ogrenciler);

let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes"];

sonuc = markalar1.concat(markalar2); //iki diziyi birlestirme
console.log(sonuc);
sonuc = markalar1.splice(0, 0, "bmw", "audi"); //markalar1 dizisine sifirinci indesinden itibaren iki elemani ekler
console.log(sonuc); //sonuc degiskeninde silinen eleman dondurulur boda ortadaki 0 degeri ile belirtilebilir
console.log(markalar1);
sonuc = markalar1.splice(0, 1, "hunda");
console.log(sonuc); //hunda eklenirken bmw silindi
console.log(markalar1);

/************* DIZI METODLARI UYGULAMASI ************************* */
let fruits = ["apple", "orenge", "banana", "strawbry", "pear"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
let x = fruits.length;
console.log(fruits[x - 1]);
console.log(fruits.includes("pear"));
fruits.push("cherry");
console.log(fruits);
fruits.splice(x - 2, 2);
console.log(fruits);

let ogrenci1 = ["yigit bilgin", 2010, [70, 40, 60]];
let ogrenci2 = ["ada can", 2016, [70, 40, 60]];
let ogrenci3 = ["nino bayram", 200, [70, 40, 60]];

console.log(
  "1 numarali ogrencimiz ",
  ogrenci1[0],
  " not ortalamasi: ",
  (ogrenci1[2][0] + ogrenci1[2][1] + ogrenci1[2][2]) / 3,
  " yasida: ",
  2025 - ogrenci1[1]
);

/********************* OBJE - UYGULAMASI ************************* */
let kullaniciA = {
  ad: "nurettin",
  soyad: "bayram",
  yas: 29,
  adress: {
    sehir: "sirnak",
    ilce: "uludere",
  },
  hobiler: ["sinama", "spor"],
};

let kullaniciB = {
  ad: "okan",
  soyad: "akyildiz",
  yas: 25,
  adress: {
    sehir: "mus",
    ilce: "varto",
  },
  hobiler: ["pes", "spor"],
};

sonuc;
console.log(kullaniciA);
console.log(kullaniciA.ad);
console.log(kullaniciA.adress);
console.log(kullaniciA.adress.sehir);
console.log(kullaniciA.hobiler[0]); //obje icerisindeki diziye index sayilariyla ulasilir

let kullanicilar = [kullaniciA, kullaniciB];

sonuc = kullanicilar[0];
console.log(sonuc);
console.log(kullanicilar[1].hobiler); //dizi icindeki objelere bu sekilde ulasilir
console.log(kullanicilar[1].ad);
console.log(kullanicilar[1].adress);
console.log(kullanicilar[1].adress.ilce);
console.log(kullanicilar[0].ad);

urunler = [
  {
    urunAdi: "samsung s22",
    urunFiyati: 13200,
  },
  {
    urunAdi: "samsung s24",
    urunFiyati: 22100,
  },
];

console.log(urunler[0].urunAdi); //dizi icindeki objeye olasma sekli
console.log(urunler[1].urunFiyati);

/********************* OBJE - PROJECT ************************* */

siparisler = [
  {
    siparisId: "101",
    siparisTarihi: "31.12.2022",
    odemeSekli: "kredi karti",
    kargoAdresi: "kocaeli izmit",
    alinanUrunler: [
      {
        urunId: 5,
        urunBasligi: "iphone 13 pro",
        urunUrl: "http:/abc.com",
        urunFiyati: 22000,
      },
      {
        urunId: 6,
        urunBasligi: "iphone 13 pro max",
        urunUrl: "http:/fdc.com",
        urunFiyati: 25000,
      },
    ],
    musteri: { musteriId: 12 },
    satici: {
      firmaId: 12,
      firmaAdi: "Apple Turkiye",
    },
  },
  {
    siparisId: "102",
    siparisTarihi: "31.12.2024",
    odemeSekli: "kredi karti",
    kargoAdresi: "uludere sirnak",
    alinanUrunler: [
      {
        urunId: 9,
        urunBasligi: "iphone 14 pro",
        urunUrl: "http:/abc.com",
        urunFiyati: 26000,
      },
      {
        urunId: 6,
        urunBasligi: "iphone 15 pro max",
        urunUrl: "http:/fdc.com",
        urunFiyati: 29000,
      },
    ],
    musteri: { musteriId: 22 },
    satici: {
      firmaId: 22,
      firmaAdi: "Apple Turkiye",
    },
  },
];

console.log(siparisler);
let toplam1 =
  siparisler[0].alinanUrunler[0].urunFiyati * (0.18 + 1) +
  siparisler[0].alinanUrunler[1].urunFiyati * (1 + 0.18);
console.log(siparisler[0].siparisId + " Nolu siparis toplam : " + toplam1);
let toplam2 =
  siparisler[1].alinanUrunler[1].urunFiyati * (0.18 + 1) +
  siparisler[1].alinanUrunler[1].urunFiyati * (1 + 0.18);
console.log(siparisler[1].siparisId + " Nolu siparis toplam : " + toplam2);

/********************* DONGULER************************* */
let sayilar = [1, 5, 3, 8, 9, 7, 7, 4, 8];
let toplam = 0;
for (let i = 0; i < sayilar.length; i++) {
  toplam += sayilar[i];
}
console.log(toplam);

toplam1 = 0;
for (let index in sayilar) {
  //sayilarin index numarasini index`e atar
  toplam1 += sayilar[index];
}
console.log(toplam1);

for (let sayi of sayilar) {
  //buradada sayilarin degerlerini sayiya atar
  console.log(sayi);
}

let user = {
  name: "nurettin",
  userName: "nino",
  password: "1245",
  email: "info@nino.com",
};
for (let key in user) {
  //obje ile kullanimi
  console.log(key + " : " + user[key]);
}

ogrenciler = [
  { ad: "yigit", soyad: "bilge", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilge", notlar: [80, 70, 80] },
  { ad: "cinar", soyad: "turan", notlar: [70, 0, 60] },
];

for (let ogrenci of ogrenciler) {
  console.log(ogrenci); //ogrencilerin icindeki obheye ulasmis olduk
  let not_toplam = 0;
  let ortalama = 0;
  let adet = 0;
  for (let not of ogrenci.notlar) {
    not_toplam += not;
    adet++;
  }
  ortalama = not_toplam / adet;

  console.log(
    `${ogrenci.ad} ${ogrenci.soyad} isimli ogrencinin not ortalamasi : ${ortalama}`
  );

  if (ortalama > 50) {
    console.log("basarili...");
  } else {
    console.log("basarisiz...");
  }
}
