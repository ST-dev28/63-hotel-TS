## Uzduotis
Panaudodami TypeScript parašykite programą viešbučių tinklui. Sukurkite viešbutį ir jam pridėkite bent du paprastus kambarius ir vieną baseiną. Atspausdinkite visus viešbučio duomenis (panaudodami viešbučio printData() metodą) ir paskui dar kartą atspausdinkite viešbbučio duomenis, tik šį kartą į printData metodo parametrą onlyComfort nurodykite true.

Klasė Hotel
Atributai:
name (string) - viešbučio pavadinimas, priskiriamas sukuriant objektą.
address (string) - viešbučio adresas, priskiriamas sukuriant objektą.
stars (number) -viešbučio žvaigždučių skaičius, priskiriamas sukuriant objektą.
rooms (Room tipo elementų masyvas) - masyvas, kuris saugo viešbutyje esančias patalpas. Sukuriant objektą yra tuščias.
Metodai:
addRoom(room: Room) - metodas, kuris leidžia pridėti prie viešbučio patalpą.
printRooms(minComfort?: number) (void) - privatus metodas, kuris atspausdina (panaudojant patalpos printData() metodą) visas viešbutyje esančias patalpas. MinComfort parametras nebūtinas perduoti, bet jei jis perduodamas, atspausdinamos tik tos patalpos, kurių komforto sąntykis yra didesnis už minComfort.
printData(onlyComfort?: boolean) (void) - public metodas, kurio pagalba atspausdinami visi viešbučio duomenys, įskaitant ir patalpas. OnlyComfort parametras nėra būtinas, bet jei jis nurodomas spausdinamos patalpos, kurių komforto santykis yra didesnis už 15.

Klasė Room
Atributai:
size (number) - kambario dydis, priskiriamas sukuriant objektą.
capacity (number) - galimas žmonių kiekis telpantis patalpoje, priskiriamas sukuriant objektą.
Metodai:
comfort() (number) - metodas, kuris grąžina komforto santykį, kiek patalpoje vienam žmogui tenka erdvės. T.y. size/capacity.
printData() (void) - public metodas, kurio pagalba atspausdinami visi patalpos duomenys (size, capacity, comfort).

Klasė Spa
Ši klasė paveldi klasę Room, tačiau turi papildomų atributų:
poolSize (number) - nurodo baseino dydį, priskiriamas sukuriant objektą.
poolTemperature (number) - nurodo baseino vandens šilumą, priskiriamas sukuriant objektą.
Metodai:
comfort (number) - kaip ir tėvinės klasės (superklasės) identiškas metodas grąžina komforto santykį, kiek patalpoje vienam žmogui tenka erdvės. Tik skaičiuojamas pagal formulę (size - poolSize) / capacity.
printData (void) - atspausdina visus patalpos duomenis panaudodamas superklasės metodą tuo pačiu pavadinimu ir papildomai atspausdina baseino dydį ir vandens temperatūrą.
