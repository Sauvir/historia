# historia

## sprendžiamo uždavinio aprašymas
### sistemos paskirtis
Žymiausių istorijos įvykių sistema yra skirta kaupti žymiausius istorinius įvykius ir su jais susijusias asmenybes. Šie įvykiai, atitinkamai pagal vietą ir šimtmetį, bus pavaizduoti kaip taškai ant pasaulio žemėlapio, su kuriuo vartotojas galės sąveikauti. Po įvykiais ir asmenybėmis vartotojams bus galimybė kurti diskusijas, kurias moderuos administratoriai. 
Platformą sudaro dvi dalys: internetinė svetainė, kuria naudosis visi sistemos vartotojai ir aplikacijų programavimo sąsaja (angl. Trump. API).
Neprisiregistravęs vartotojas gali matyti ir skaityti žemėlapyje esančius įvykius ir kitų registruotų vartotojų diskusijas, tačiau pats komentuoti negali. Registruoti vartotojai taip pat turi galimybę pridėti naujus įvykius ar asmenybes prie pasaulio žemėlapio, kuriuos patvirtins arba atmes administratoriai. Administratoriai be jau minėtų funkcijų gali moderuoti diskusijas: jas trinti, įspėti bei uždaryti.
Esybės: žemėlapis  įvykis  asmenybė _arba_ žemėlapis  įvykis  diskusija, _arba_ įvykis  asmenybė  diskusija.
Galima pridurti, kad diskusijų funkcionalumas nebūtinai bus realizuotas šio semestro metu, o po to galutinėje ataskaitoje pakaks ištrinti visą pasenusią informaciją.

### funkciniai reikalavimai
Neregistruoti vartotojai gali:
1.	Peržiūrėti žymiausių įvykių žemėlapį;
2.	Peržiūrėti žymiausius įvykius bei jų asmenybes;
3.	Rikiuoti įvykių žemėlapį pagal šimtmečius;
4.	Prisiregistruoti prie sistemos.
Registruoti vartotojai gali:
1.	Prisijungti prie sistemos;
2.	Pridėti:
  a.	Įvykius prie žemėlapio;
  b.	Asmenybės prie įvykių.
3.	Sąveikauti su diskusijomis:
  a.	Kurti naujas diskusijas;
  b.	Komentuoti prie egzistuojančių diskusijų;
  c.	Pranešti komentarą;
  d.	Reitinguoti diskusiją;
  e.	Reitinguoti komentarą.
4.	Peržiūrėti registruotų vartotojų paskyras;
5.	Siūlyti žemėlapio redagavimą;
6.	Atsijungti nuo internetinės aplikacijos.
Administratorius gali:
1.	Patvirtinti arba atmesti:
  a.	Registruotų vartotojų pridėtus įvykius;
  b.	Registruotų vartotojų pridėtas asmenybes.
2.	Sąveikauti su diskusijomis:
  a.	Uždaryti diskusiją;
  b.	Ištrinti diskusiją;
  c.	Ištrinti komentarą.
3.	Išmesti registruotą vartotoją;
4.	Redaguoti žemėlapio informaciją;
5.	Įspėti registruotą vartotoją

## sprendžiamo uždavinio aprašymas
Žymiausių istorijos įvykių sistemos kliento pusė (angl. Front-end) bus kuriama su JavaScript React.js karkasu. Serverio pusei bus naudojama ASP.NET (angl. Back-end). Duombazei bus naudojamas SQL.

## sistemos architektūra
![Model](https://user-images.githubusercontent.com/53517068/190961764-be958ac0-8193-4780-b342-360e284a0ebf.jpg)
