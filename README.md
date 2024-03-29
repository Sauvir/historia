# historia

## Sprendžiamo uždavinio aprašymas
### Sistemos paskirtis

Žymiausių istorijos įvykių sistema yra skirta kaupti žymiausius istorinius įvykius ir su jais susijusias asmenybes. Šie įvykiai, atitinkamai pagal vietą ir šimtmetį, bus pavaizduoti kaip taškai ant sukurto pasaulio žemėlapio, su kuriuo vartotojas galės sąveikauti. <br> 
Platformą sudaro dvi dalys: internetinė svetainė, kuria naudosis visi sistemos vartotojai ir aplikacijų programavimo sąsaja (angl. Trump. API). <br>
Neprisiregistravęs vartotojas gali matyti žemėlapius ir skaityti įvykius bei asmenybes. Registruoti vartotojai turi galimybę pridėti naujus įvykius ar asmenybes prie savo žemėlapio. Administratoriai be jau minėtų funkcijų gali trinti, redaguoti žemėlapius, įvykius, asmenybes. <br>
Esybės: žemėlapis <- įvykis <- asmenybė. <br>
Sistema negalutinai įgyvendinta.

### Funkciniai reikalavimai

Neregistruoti vartotojai gali: <br>
• Peržiūrėti žymiausių įvykių žemėlapius;
• Peržiūrėti žymiausius įvykius bei jų asmenybes;
• Prisiregistruoti; <br>
Registruoti vartotojai gali: <br>
• Prisijungti prie sistemos;
• Pridėti, redaguoti, trinti:
a.	Žemėlapius;
b.	Įvykius;
c.	Asmenybes.
• Peržiūrėti registruotų vartotojų paskyras;
• Atsijungti nuo internetinės aplikacijos. <br>
Administratorius gali: <br>
• Trinti arba redaguoti:
a.	Vartotojų pridėtus žemėlapius;
b.	Vartotojų pridėtus įvykius;
c.	Vartotojų pridėtas asmenybes.
• Išmesti registruotą vartotoją;
• Įspėti registruotą vartotoją. 

## Pasirinktų technologijų aprašymas

Žymiausių istorijos įvykių sistemos kliento pusė (angl. Front-end) bus kuriama su JavaScript React.js karkasu. Serverio pusei bus naudojama ASP.NET (angl. Back-end). Duombazei bus naudojamas lokalus SQL.

## Sistemos architektūra

Diegimo diagramoje galima matyti, jog internetinė programa but talpinama į Azure serverį, tačiau iki paskutinio laboratorinio atsiskaitymo pasibaigė nemokamas bandomasis debesies host‘as. Komunikacijai tarp API ir duombazės naudojama OMR sąsaja, o tarp naudotojo įrenginio naršyklės su API ir internetine programa komunikacija vyks per HTTPS protokolą.

![WINWORD_amdLnoydY8](https://user-images.githubusercontent.com/53517068/209333022-73a9cba9-8001-4e8a-8fe2-731d8a53c0eb.png)

## Naudotojo sąsajos projektas

Pagrindinio puslapio wireframe ir realizacija:

![Historia_Home_1](https://user-images.githubusercontent.com/53517068/209333106-1e96c61a-0704-4993-9a92-4ed5cbf6b13e.png)
![opera_aOsjnf72cm](https://user-images.githubusercontent.com/53517068/209333131-e42d2038-ed79-4209-8750-cc6798440075.jpg)

Pagrindinio puslapio wireframe ir realizacija (trending skiltis):

![Historia_All_Maps](https://user-images.githubusercontent.com/53517068/209333167-2a09a5d8-ab40-43d6-abe2-4b68d7a64a49.png)
![opera_mdUm1htODT](https://user-images.githubusercontent.com/53517068/209333190-61bd0f7d-af2d-4525-be0f-bd04a570b31d.png)
![opera_vrZqiOyu3K](https://user-images.githubusercontent.com/53517068/209333204-14ac721e-2d27-4112-b2b1-691e73bc74e8.png)

Žemėlapio kūrimo puslapio wireframe ir realizacija:

![opera_RWyywQ3J7U](https://user-images.githubusercontent.com/53517068/209333248-61d2fe72-36bf-4721-aa4e-4768fc88a93d.png)
![opera_4yKvPp7Z1U](https://user-images.githubusercontent.com/53517068/209333270-7f77555d-a32d-4936-bdbe-456541fa1110.png)
![opera_Bag1hp3L4C](https://user-images.githubusercontent.com/53517068/209333277-3da500f7-cf6f-4184-ac02-68a45efb5674.png)
![opera_3tbwe4TWIN](https://user-images.githubusercontent.com/53517068/209333295-b63cf159-f2c6-4a62-b06b-9f62206f57cc.png)

Įvykio kūrimo puslapio wireframe ir realizacija:

![opera_sPyxYFFQTi](https://user-images.githubusercontent.com/53517068/209333369-d8dfe276-8aa8-4877-a386-8b86da4f68ea.png)
![opera_9oOBJQzvvf](https://user-images.githubusercontent.com/53517068/209333496-942cf12d-dcaa-4314-bf8d-5eafef27667f.png)
![opera_ATnCcCML9Y](https://user-images.githubusercontent.com/53517068/209333508-3b2c32b7-ca58-4e6f-a4ec-16e7d3d7938f.png)

Asmenybės kūrimo puslapio wireframe ir realizacija:

![opera_zJKWOopPrL](https://user-images.githubusercontent.com/53517068/209333563-e15704d3-8ffc-4346-93e4-9f29114b12d5.png)
![opera_3z6Ry4VcTq](https://user-images.githubusercontent.com/53517068/209333571-aab028c9-d08c-47fc-b982-7a52e4d239e0.png)
![opera_p5x5jyT7si](https://user-images.githubusercontent.com/53517068/209333579-c967b7b7-286a-4d46-9530-3715c0a2db22.png)


## API specifikacija

### Map

#### GET Map
Grąžina žemėlapį pagal id. <br>
**Parametrai** <br>
Id – žemėlapio identifikacijos numeris. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
200 OK <br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps/1 <br>
**Atsakymas į pavyzdinę užklausą** <br>
{
    "id": 3,
    "name": "Most Famous Battlefields During The Edo Period",
    "eventPointerCount": 13,
    "periodStart": "1868-01-01T00:00:00",
    "periodEnd": "1868-01-01T00:00:00"
} 

#### GET All Maps
Grąžina visus žemėlapius. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
200 OK <br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps <br>
**Atsakymas į pavyzdinę užklausą** <br>
[
    {
        "id": 3,
        "name": "Most Famous Battlefields During The Edo Period",
        "eventPointerCount": 13,
        "periodStart": "1868-01-01T00:00:00",
        "periodEnd": "1868-01-01T00:00:00"
    },
    {
        "id": 4,
        "name": "Nuclear Bomb Testing Sites",
        "eventPointerCount": 23,
        "periodStart": "1998-12-27T00:00:00",
        "periodEnd": "1998-12-27T00:00:00"
    }
]

#### POST Create Map
Sukuria naują žemėlapį. <br>
**Galimi atsako kodai**
401 Unauthorized
201 Created <br>
**Užklausos pavyzdys**
http://localhost:5106/api/maps <br>
**Body**
{
    "name": "Creating an example map",
    "eventPointerCount": "3",
    "periodStart": "2022-12-22",
    "periodEnd": "2022-12-23"
}

**Atsakymas į pavyzdinę užklausą**
{
    "id": 5,
    "name": "Creating an example map",
    "eventPointerCount": 3,
    "periodStart": "2022-12-23T00:00:00",
    "periodEnd": "2022-12-23T00:00:00"
}

#### DEL Delete Map
Ištrina žemėlapį pagal id. <br>
**Parametrai** <br>
Id – žemėlapio identifikacijos numeris. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
204 No Content <br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps/1 <br>
**Atsakymas į pavyzdinę užklausą**
{}

#### PUT Edit Map
Redaguoja žemėlapį pagal id. <br>
**Parametrai** <br>
Id – žemėlapio identifikacijos numeris. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
200 OK <br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps/3 <br>
**Body**
{
    "eventPointerCount": "7"
}

**Atsakymas į pavyzdinę užklausą**
{
    "id": 3,
    "name": "Most Famous Battlefields During The Edo Period",
    "eventPointerCount": 7,
    "periodStart": "1868-01-01T00:00:00",
    "periodEnd": "1868-01-01T00:00:00"
}

### Event

#### GET Event
Grąžina specifinio žemėlapio įvykį pagal id. <br>
**Parametrai** <br>
Id – įvykio identifikacijos numeris. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
200 OK <br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps/3/events/2 <br>
**Atsakymas į pavyzdinę užklausą** <br>
{
    "id": 2,
    "name": "Event3",
    "description": "Description3",
    "eventDate": "1678-08-09T00:00:00",
    "mapId": 3
}

#### GET All Events 
Grąžina visus specifinio žemėlapio įvykius. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
200 OK <br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps/3/events <br>
**Atsakymas į pavyzdinę užklausą** <br>
[
    {
        "id": 2,
        "name": "Event3",
        "description": "Description3",
        "eventDate": "1678-08-09T00:00:00",
        "mapId": 3
    }
]

#### POST Create Event
Sukuria naują įvykį specifiniam žemėlapiui. <br>
**Galimi atsako kodai** <br>
401 Unauthorized
201 Created <br>
**Užklausos pavyzdys** <br>
http://localhost:5106/api/maps/3/events <br>
**Body**
{
    "name": "Event333",
    "description": "Description333",
    "eventdate": "1733-08-09"
} <br>

**Atsakymas į pavyzdinę užklausą** <br>
{
    "id": 3,
    "name": "Event333",
    "description": "Description333",
    "eventDate": "1733-08-09T00:00:00",
    "mapId": 3
}

#### DEL Delete Event
Ištrina įvykį iš specifinio žemėlapio pagal id. <br>
**Parametrai** <br>
Id – įvykio identifikacijos numeris. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
204 No Content <br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps/3/events/3 <br>
**Atsakymas į pavyzdinę užklausą** <br>
{}

#### PUT Edit Event
Redaguoja specifinio žemėlapio įvykį pagal id. <br>
**Parametrai** <br>
Id – įvykio identifikacijos numeris.<br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
200 OK<br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps/3/events/2 <br>
**Body** <br>
{
    "description": "Su Sv. Kaledomis!"
}<br>

**Atsakymas į pavyzdinę užklausą** <br>
{
    "id": 2,
    "name": "Event3",
    "description": "Su Sv. Kaledomis!",
    "eventDate": "1678-08-09T00:00:00",
    "mapId": 3
}

### Person

#### GET Person
Grąžina specifinio žemėlapio ir specifinio įvykio asmenybę pagal id. <br>
**Parametrai** <br>
Id – asmenybės identifikacijos numeris. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
200 OK<br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps/3/events/2/people/3 <br>
**Atsakymas į pavyzdinę užklausą** <br>
{
    "id": 3,
    "firstName": "Person3",
    "lastName": "NotPerson3",
    "description": "Robot3",
    "deathDate": "1701-07-07T00:00:00",
    "eventId": 2,
    "mapId": 3
} 

#### GET All People
Grąžina visas specifinio žemėlapio ir specifinio įvykio asmenybes. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
200 OK <br>
**Užklausos pavyzdys** <br>
https://historiaapi.azurewebsites.net/api/maps/3/events/2/people <br>
**Atsakymas į pavyzdinę užklausą** <br>
[
    {
        "id": 3,
        "firstName": "Person3",
        "lastName": "NotPerson3",
        "description": "Robot3",
        "deathDate": "1701-07-07T00:00:00",
        "eventId": 2,
        "mapId": 3
    }
]

#### POST Create Person
Sukuria naują asmenybę specifiniam įvykiui ir specifiniam žemėlapiui.<br>
**Galimi atsako kodai** <br> 
401 Unauthorized
201 Created <br>
**Užklausos pavyzdys**
http://localhost:5106/api/maps/3/events/2/people <br>
**Body** <br>
{
    "firstname": "Random",
    "lastname": "NotRandom",
    "description": "MaybeRandom",
    "deathdate": "1700-01-01"
}<br>

**Atsakymas į pavyzdinę užklausą** <br>
{
    "id": 4,
    "firstName": "Random",
    "lastName": "NotRandom",
    "description": "MaybeRandom",
    "deathDate": "1700-01-01T00:00:00",
    "eventId": 2,
    "mapId": 3
}

#### DEL Delete Event
Ištrina asmenybę iš specifinio įvykio ir specifinio žemėlapio pagal id. <br>
**Parametrai** <br>
Id – asmenybės identifikacijos numeris. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
204 No Content <br>
**Užklausos pavyzdys**
https://historiaapi.azurewebsites.net/api/maps/3/events/2/people/4 <br>
**Atsakymas į pavyzdinę užklausą** <br>
{}

#### PUT Edit Person
Redaguoja specifinio žemėlapio ir specifinio įvykio asmenybę pagal id. <br>
**Parametrai** <br>
Id – asmenybės identifikacijos numeris. <br>
**Galimi atsako kodai** <br>
404 Not Found
401 Unauthorized
200 OK <br>
**Užklausos pavyzdys**
https://historiaapi.azurewebsites.net/api/maps/3/events/2/people/3 <br>
**Body** <br>
{
    "description": "AHHHHH",
    "deathDate": "1699-09-20"
} <br>

**Atsakymas į pavyzdinę užklausą** <br>
{
    "id": 3,
    "firstName": "Person3",
    "lastName": "NotPerson3",
    "description": "AHHHHH",
    "deathDate": "1699-09-20T00:00:00",
    "eventId": 2,
    "mapId": 3
}

## Išvados

Projekto metu išmokta realizuoti API su ASP.NET pagal pateiktą specifikaciją, kurti autorizacijos ir autentifikacijos funkcijas, pritaikyti JWT tokenus bei pagilintos React.js žinios front-end realizacijos dalyje. Projektas nebuvo visiškai įgyvendintas, nors ir API, ir svetainė egzistuoja, jos abi nėra sujungtos, todėl galutiniame produkte trūksta funkcionalumų.








