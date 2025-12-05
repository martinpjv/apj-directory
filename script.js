// Mock Data
const apjData = [
  { name: "Carlota Calandria (coord.)", city: "Las Palmas", stage: "Ancla", birthday: "9999-05-10" },
  { name: "Jeysabel Martínez", city: "Las Palmas", stage: "Ancla", birthday: "9999-05-25" },
  { name: "Carlos Arencibia", city: "Las Palmas", stage: "Ancla", birthday: "9999-02-11" },
  { name: "Daniel Hawach (neo)", city: "Las Palmas", stage: "Ancla", birthday: "9999-12-26" },
  { name: "Diana Pérez (neo)", city: "Las Palmas", stage: "Ancla", birthday: "9999-01-13" },
  { name: "Carla Jiménez (neo)", city: "Las Palmas", stage: "Ancla", birthday: "9999-09-09" },
  { name: "Fátima Santana (coord.)", city: "Las Palmas", stage: "Brújula", birthday: "9999-02-01" },
  { name: "Miguel López", city: "Las Palmas", stage: "Brújula", birthday: "9999-09-04" },
  { name: "Darío León", city: "Las Palmas", stage: "Brújula", birthday: "9999-11-06" },
  { name: "María González (neo)", city: "Las Palmas", stage: "Brújula", birthday: "9999-11-20" },
  { name: "David Quintana (neo)", city: "Las Palmas", stage: "Brújula", birthday: "9999-08-05" },
  { name: "Víctor Pineda (neo)", city: "Las Palmas", stage: "Brújula", birthday: "9999-05-26" },
  { name: "Natalia Fernández (neo)", city: "Las Palmas", stage: "Brújula", birthday: "9999-12-09" },
  { name: "Jesús Toro (coord.)", city: "Las Palmas", stage: "Rumbo", birthday: "9999-12-21" },
  { name: "Guillermo Alonso", city: "Las Palmas", stage: "Rumbo", birthday: "9999-01-28" },
  { name: "Eduardo Kaddour", city: "Las Palmas", stage: "Rumbo", birthday: "9999-07-13" },
  { name: "Eduardo Cano", city: "Las Palmas", stage: "Rumbo", birthday: "9999-04-28" },
  { name: "Pablo Arencibia", city: "Las Palmas", stage: "Rumbo", birthday: "9999-02-11" },
  { name: "Marta Alcaide (neo)", city: "Las Palmas", stage: "Rumbo", birthday: "9999-04-16" },
  { name: "Diego Quintana (neo)", city: "Las Palmas", stage: "Rumbo", birthday: "9999-03-15" },
  { name: "Fernando Sosa (coord.)", city: "Las Palmas", stage: "Vuelo", birthday: "9999-03-01" },
  { name: "Paola Sosa", city: "Las Palmas", stage: "Vuelo", birthday: "9999-01-25" },
  { name: "Samuel González", city: "Las Palmas", stage: "Vuelo", birthday: "9999-10-13" },
  { name: "Javier Berdún", city: "Las Palmas", stage: "Vuelo", birthday: "9999-08-10" },
  { name: "Fernando Sosa", city: "Las Palmas", stage: "Compás", birthday: "9999-03-01" },
  { name: "Alejandro Suárez cmf (Responsable)", city: "Las Palmas", stage: "Fragua", birthday: "9999-09-26" },
  { name: "Javier Berdún (Responsable)", city: "Las Palmas", stage: "Vuelo", birthday: "9999-08-10" },


// 📍 Almendralejo (CALENDARIOS ANTIGUOS CALENDAR)

{ name: "Amalia C.", birthday: "2023-08-17", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Amalia SA.", birthday: "2023-02-26", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Ana AR.", birthday: "2023-03-08", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Ana C.", birthday: "2023-12-13", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Ana G.", birthday: "2023-06-30", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Andrea FM.", birthday: "2023-03-05", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Antonio B.", birthday: "2023-10-16", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Belén FC.", birthday: "2023-12-06", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Candy MD.", birthday: "2023-07-12", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Carlos CR.", birthday: "2023-04-15", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Carmen GB.", birthday: "2023-06-05", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Clara GM.", birthday: "2023-11-19", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Concha B.", birthday: "2023-11-02", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Concha FG.", birthday: "2023-05-23", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Damián", birthday: "2023-04-09", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Elena", birthday: "2023-05-22", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Fernando H.", birthday: "2023-03-15", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Fernando S.", birthday: "2023-09-09", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Gloria AB.", birthday: "2025-06-16", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Inés G.", birthday: "2023-09-03", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Inma GH.", birthday: "2023-04-12", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Isa O.", birthday: "2024-05-06", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Iván C.", birthday: "2024-01-18", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Jacobo S.", birthday: "2023-05-18", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Javi GG.", birthday: "2023-08-26", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Javi P.", birthday: "2023-07-20", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Jesús H.", birthday: "2023-03-15", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Jorge M.", birthday: "2025-02-20", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Juliana VS.", birthday: "2023-09-21", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Lely A.", birthday: "2023-02-07", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Lucía GM.", birthday: "2023-05-29", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Luis GJ.", birthday: "2023-12-28", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Mª José C.", birthday: "2023-09-06", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Mª José GG.", birthday: "2023-10-15", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Mª José CA.", birthday: "2023-09-05", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Mª Luisa T.", birthday: "2023-12-15", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Mª Mar SG.", birthday: "2023-05-18", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Maite VS.", birthday: "2023-09-08", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Malena C.", birthday: "2023-05-06", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Mamen SF.", birthday: "2023-05-14", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Mari Eli", birthday: "2024-06-18", city: "Almendralejo", stage: "INACTIVO" },
{ name: "María F.", birthday: "2023-12-22", city: "Almendralejo", stage: "INACTIVO" },
{ name: "María Fe", birthday: "2023-12-05", city: "Almendralejo", stage: "INACTIVO" },
{ name: "María G.", birthday: "2023-11-25", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Maribel A.", birthday: "2023-06-16", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Marta G.", birthday: "2023-01-04", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Nardi SI.", birthday: "2024-04-01", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Paco F.", birthday: "2024-05-02", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Paqui T.", birthday: "2023-09-21", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Pedro J.", birthday: "2023-10-27", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Pedro P.", birthday: "2023-05-10", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Roberto C.", birthday: "2023-12-29", city: "Almendralejo", stage: "INACTIVO" },
{ name: "Teresa BB.", birthday: "2024-02-18", city: "Almendralejo", stage: "INACTIVO" },

// 📍 DON BENITO (CALENDARIOS ANTIGUOS CALENDAR)
{ name: "Ana Carmen V.", birthday: "2023-04-15", city: "Don Benito", stage: "INACTIVO" },
{ name: "Ana GR.", birthday: "2023-04-11", city: "Don Benito", stage: "INACTIVO" },
{ name: "Bea L.", birthday: "2024-02-09", city: "Don Benito", stage: "INACTIVO" },
{ name: "Carmen R.", birthday: "2023-10-09", city: "Don Benito", stage: "INACTIVO" },
{ name: "Celia NV.", birthday: "2023-08-09", city: "Don Benito", stage: "INACTIVO" },
{ name: "Ismael GP.", birthday: "2023-07-05", city: "Don Benito", stage: "INACTIVO" },
{ name: "Israel", birthday: "2023-12-13", city: "Don Benito", stage: "INACTIVO" },
{ name: "Josefina CD.", birthday: "2023-08-26", city: "Don Benito", stage: "INACTIVO" },
{ name: "María CC.", birthday: "2023-08-13", city: "Don Benito", stage: "INACTIVO" },
{ name: "Nieves PG.", birthday: "2023-01-30", city: "Don Benito", stage: "INACTIVO" },
{ name: "Raquel PA.", birthday: "2023-03-16", city: "Don Benito", stage: "INACTIVO" },

// 📍 Granada (CALENDARIOS ANTIGUOS CALENDAR)

{ name: "Antonio E.", birthday: "2023-03-12", city: "Granada", stage: "INACTIVO" },
{ name: "Charo B.", birthday: "2023-06-02", city: "Granada", stage: "INACTIVO" },
{ name: "Javi C. cmf", birthday: "2023-07-20", city: "Granada", stage: "INACTIVO" },
{ name: "Jesús R.", birthday: "2023-08-15", city: "Granada", stage: "INACTIVO" },
{ name: "Juan C.", birthday: "2023-07-14", city: "Granada", stage: "INACTIVO" },
{ name: "Laura M.", birthday: "2023-04-20", city: "Granada", stage: "INACTIVO" },
{ name: "Miguel Á. SG.", birthday: "2023-04-03", city: "Granada", stage: "INACTIVO" },
{ name: "Poche Sierva San José", birthday: "2023-05-11", city: "Granada", stage: "INACTIVO" },

// 📍 Las P(CALENDARIOS ANTIGUOS CALENDAR)

{ name: "Carolina D.", birthday: "2023-05-12", city: "Las Palmas", stage: "INACTIVO" },
{ name: "David F.", birthday: "2023-10-02", city: "Las Palmas", stage: "INACTIVO" },
{ name: "Fernando S.", birthday: "2023-03-01", city: "Las Palmas", stage: "INACTIVO" },
{ name: "Guille A.", birthday: "2025-01-28", city: "Las Palmas", stage: "INACTIVO" },
{ name: "Ignacio C.", birthday: "2023-07-07", city: "Las Palmas", stage: "INACTIVO" },
{ name: "Javier B.", birthday: "2023-08-10", city: "Las Palmas", stage: "INACTIVO" },
{ name: "Jesús T.", birthday: "2023-12-21", city: "Las Palmas", stage: "INACTIVO" },
{ name: "Lucas A.", birthday: "2023-10-04", city: "Las Palmas", stage: "INACTIVO" },
{ name: "Miguel L.", birthday: "2023-09-04", city: "Las Palmas", stage: "INACTIVO" },
{ name: "Rodolfo E.", birthday: "2023-07-29", city: "Las Palmas", stage: "INACTIVO" },
{ name: "Yago G.", birthday: "2023-01-07", city: "Las Palmas", stage: "INACTIVO" },


// 📍 Sevilla (CALENDARIOS ANTIGUOS CALENDAR)

{ name: "Anabel TM.", birthday: "2023-06-01", city: "Loja", stage: "INACTIVO" },
{ name: "Carmen A.", birthday: "2023-08-29", city: "Loja", stage: "INACTIVO" },
{ name: "Celia P.", birthday: "2023-02-05", city: "Loja", stage: "INACTIVO" },
{ name: "Estela", birthday: "2023-11-24", city: "Loja", stage: "INACTIVO" },
{ name: "Eva C.", birthday: "2023-01-27", city: "Loja", stage: "INACTIVO" },
{ name: "Flor G.", birthday: "2023-06-28", city: "Loja", stage: "INACTIVO" },
{ name: "Javier RG.", birthday: "2023-06-24", city: "Loja", stage: "INACTIVO" },
{ name: "José H.", birthday: "2025-06-12", city: "Loja", stage: "INACTIVO" },
{ name: "Juan Manuel", birthday: "2023-07-09", city: "Loja", stage: "INACTIVO" },
{ name: "Lucía R.", birthday: "2023-09-08", city: "Loja", stage: "INACTIVO" },
{ name: "Lydia D.", birthday: "2024-05-20", city: "Loja", stage: "INACTIVO" },
{ name: "María G.", birthday: "2023-12-01", city: "Loja", stage: "INACTIVO" },
{ name: "María OD.", birthday: "2024-04-05", city: "Loja", stage: "INACTIVO" },
{ name: "Maripi P. (Responsable)", birthday: "2024-02-08", city: "Loja", stage: "INACTIVO" },
{ name: "Marta V.", birthday: "2023-12-16", city: "Loja", stage: "INACTIVO" },
{ name: "Nataly S.", birthday: "2023-07-04", city: "Loja", stage: "INACTIVO" },
{ name: "Paloma R.", birthday: "2024-01-30", city: "Loja", stage: "INACTIVO" },
{ name: "Pepe T.", birthday: "2023-07-22", city: "Loja", stage: "INACTIVO" },
{ name: "Pilar P.", birthday: "2024-01-04", city: "Loja", stage: "INACTIVO" },
{ name: "Silvia T.", birthday: "2023-07-22", city: "Loja", stage: "INACTIVO" },
{ name: "Victoria M.", birthday: "2025-06-28", city: "Loja", stage: "INACTIVO" },


// 📍 Madrid (CALENDARIOS ANTIGUOS CALENDAR)
{ name: "Lemuel Paul CMF.", birthday: "2023-09-04", city: "Madrid", stage: "INACTIVO" },
{ name: "María Armas HICM.", birthday: "2023-12-11", city: "Madrid", stage: "INACTIVO" },
{ name: "Nacho P.", birthday: "2025-08-16", city: "Madrid", stage: "INACTIVO" },
{ name: "Patricia G.", birthday: "2024-04-06", city: "Madrid", stage: "INACTIVO" },

// 📍 Málaga (CALENDARIOS ANTIGUOS CALENDAR)
{ name: "Ana M.", birthday: "2023-01-30", city: "Málaga", stage: "INACTIVO" },
{ name: "David S.", birthday: "2023-03-13", city: "Málaga", stage: "INACTIVO" },
{ name: "Fernando C.", birthday: "2023-02-27", city: "Málaga", stage: "INACTIVO" },
{ name: "Isa A.", birthday: "2023-12-29", city: "Málaga", stage: "INACTIVO" },
{ name: "Javier A.", birthday: "2023-04-05", city: "Málaga", stage: "INACTIVO" },
{ name: "Juan R.", birthday: "2023-05-07", city: "Málaga", stage: "INACTIVO" },
{ name: "María F.", birthday: "2023-03-28", city: "Málaga", stage: "INACTIVO" },
{ name: "Marina R.", birthday: "2023-06-02", city: "Málaga", stage: "INACTIVO" },
{ name: "Marzo Z.", birthday: "2023-05-23", city: "Málaga", stage: "INACTIVO" },
{ name: "Masu", birthday: "2023-11-12", city: "Málaga", stage: "INACTIVO" },
{ name: "P. Rocky cmf", birthday: "2023-11-09", city: "Málaga", stage: "INACTIVO" },
{ name: "Pablo P.", birthday: "2023-03-06", city: "Málaga", stage: "INACTIVO" },
{ name: "Rafael P.", birthday: "2023-01-17", city: "Málaga", stage: "INACTIVO" },
{ name: "Victor C.", birthday: "2023-06-28", city: "Málaga", stage: "INACTIVO" },


// 📍 Roma (CALENDARIOS ANTIGUOS CALENDAR)
{ name: "P. Gabri CMF.", birthday: "2023-12-06", city: "Roma", stage: "INACTIVO" },


// 📍 Sevilla (CALENDARIOS ANTIGUOS CALENDAR)
{ name: "Alberto A.", birthday: "2023-01-02", city: "Sevilla", stage: "INACTIVO" },
{ name: "Alejandra V.", birthday: "2023-12-28", city: "Sevilla", stage: "INACTIVO" },
{ name: "Ana G.", birthday: "2023-08-06", city: "Sevilla", stage: "INACTIVO" },
{ name: "Anabel A.", birthday: "2023-07-14", city: "Sevilla", stage: "INACTIVO" },
{ name: "Andrés E.", birthday: "2023-10-04", city: "Sevilla", stage: "INACTIVO" },
{ name: "Ángeles R.", birthday: "2023-05-06", city: "Sevilla", stage: "INACTIVO" },
{ name: "Borja L.", birthday: "2023-08-31", city: "Sevilla", stage: "INACTIVO" },
{ name: "Carlos A.", birthday: "2023-01-28", city: "Sevilla", stage: "INACTIVO" },
{ name: "Carlos M.", birthday: "2023-06-02", city: "Sevilla", stage: "INACTIVO" },
{ name: "Carlos R.", birthday: "2023-07-17", city: "Sevilla", stage: "INACTIVO" },
{ name: "Carlos S.", birthday: "2024-02-14", city: "Sevilla", stage: "INACTIVO" },
{ name: "Carmen H.", birthday: "2023-10-08", city: "Sevilla", stage: "INACTIVO" },
{ name: "Carmen L.", birthday: "2023-01-11", city: "Sevilla", stage: "INACTIVO" },
{ name: "Chio V.", birthday: "2025-12-15", city: "Sevilla", stage: "INACTIVO" },
{ name: "Cristina C.", birthday: "2023-11-13", city: "Sevilla", stage: "INACTIVO" },
{ name: "Cristina RGV.", birthday: "2023-10-11", city: "Sevilla", stage: "INACTIVO" },
{ name: "David O.", birthday: "2024-08-23", city: "Sevilla", stage: "INACTIVO" },
{ name: "Enrique G.", birthday: "2023-03-04", city: "Sevilla", stage: "INACTIVO" },
{ name: "Gonzalo O.", birthday: "2023-04-11", city: "Sevilla", stage: "INACTIVO" },
{ name: "Jaime A.", birthday: "2023-04-16", city: "Sevilla", stage: "INACTIVO" },
{ name: "Javi F.", birthday: "2023-03-09", city: "Sevilla", stage: "INACTIVO" },
{ name: "Javier DJ.", birthday: "2023-07-04", city: "Sevilla", stage: "INACTIVO" },
{ name: "José Luis M.", birthday: "2023-06-02", city: "Sevilla", stage: "INACTIVO" },
{ name: "Juan F.", birthday: "2023-04-12", city: "Sevilla", stage: "INACTIVO" },
{ name: "Laura FB.", birthday: "2023-07-10", city: "Sevilla", stage: "INACTIVO" },
{ name: "Lourdes Q.", birthday: "2023-06-09", city: "Sevilla", stage: "INACTIVO" },
{ name: "Lucía H.", birthday: "2023-05-11", city: "Sevilla", stage: "INACTIVO" },
{ name: "Luisa HICM.", birthday: "2023-03-28", city: "Sevilla", stage: "INACTIVO" },
{ name: "Mª Carmen GG.", birthday: "2023-03-14", city: "Sevilla", stage: "INACTIVO" },
{ name: "Manuel R. CA.", birthday: "2023-01-16", city: "Sevilla", stage: "INACTIVO" },
{ name: "María Bll.", birthday: "2023-05-14", city: "Sevilla", stage: "INACTIVO" },
{ name: "María Brg.", birthday: "2023-03-17", city: "Sevilla", stage: "INACTIVO" },
{ name: "María Bz.", birthday: "2023-02-07", city: "Sevilla", stage: "INACTIVO" },
{ name: "María C.", birthday: "2025-05-03", city: "Sevilla", stage: "INACTIVO" },
{ name: "María O.", birthday: "2023-03-07", city: "Sevilla", stage: "INACTIVO" },
{ name: "Marta B.", birthday: "2025-02-19", city: "Sevilla", stage: "INACTIVO" },
{ name: "Marta R.", birthday: "2023-04-03", city: "Sevilla", stage: "INACTIVO" },
{ name: "Mercedez R.", birthday: "2023-06-22", city: "Sevilla", stage: "INACTIVO" },
{ name: "Noelia R.", birthday: "2023-03-12", city: "Sevilla", stage: "INACTIVO" },
{ name: "P. Jaime cmf", birthday: "2023-07-25", city: "Sevilla", stage: "INACTIVO" },
{ name: "Pedro M.", birthday: "2023-02-15", city: "Sevilla", stage: "INACTIVO" },
{ name: "Pedro P.", birthday: "2023-11-26", city: "Sevilla", stage: "INACTIVO" },
{ name: "Pilar T.", birthday: "2024-04-04", city: "Sevilla", stage: "INACTIVO" },
{ name: "Reyes R.", birthday: "2023-10-18", city: "Sevilla", stage: "INACTIVO" },
{ name: "Rocío V.", birthday: "2023-12-15", city: "Sevilla", stage: "INACTIVO" },
{ name: "Samuel EH.", birthday: "2024-01-12", city: "Sevilla", stage: "INACTIVO" },
{ name: "Samuel S.", birthday: "2023-11-16", city: "Sevilla", stage: "INACTIVO" },
{ name: "Sergio A.", birthday: "2023-11-29", city: "Sevilla", stage: "INACTIVO" },
{ name: "Sergio F.", birthday: "2024-01-06", city: "Sevilla", stage: "INACTIVO" },
{ name: "Toribio", birthday: "2023-12-01", city: "Sevilla", stage: "INACTIVO" },

// 📍 Tenerife (CALENDARIOS ANTIGUOS CALENDAR)
{ name: "Alejandro I.", birthday: "2023-09-10", city: "Tenerife", stage: "INACTIVO" },
{ name: "Alfonso Y.", birthday: "2023-10-23", city: "Tenerife", stage: "INACTIVO" },
{ name: "Ana G.", birthday: "2023-11-18", city: "Tenerife", stage: "INACTIVO" },
{ name: "Ana R.", birthday: "2023-07-18", city: "Tenerife", stage: "INACTIVO" },
{ name: "Arturo de C. (Responsable)", birthday: "2023-04-28", city: "Tenerife", stage: "INACTIVO" },
{ name: "Candela S.", birthday: "2023-05-13", city: "Tenerife", stage: "INACTIVO" },
{ name: "Dani B.", birthday: "2023-11-20", city: "Tenerife", stage: "INACTIVO" },
{ name: "Dani de C.", birthday: "2023-05-21", city: "Tenerife", stage: "INACTIVO" },
{ name: "David C.", birthday: "2023-11-06", city: "Tenerife", stage: "INACTIVO" },
{ name: "Javi P.", birthday: "2023-01-20", city: "Tenerife", stage: "INACTIVO" },
{ name: "Jorge M.", birthday: "2023-10-25", city: "Tenerife", stage: "INACTIVO" },
{ name: "Manuel C.", birthday: "2023-06-12", city: "Tenerife", stage: "INACTIVO" },

// 📍 Valencia del Ventoso (CALENDARIOS ANTIGUOS CALENDAR)
{ name: "Carmen SI.", birthday: "2023-07-04", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Eva Mª B.", birthday: "2023-09-05", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Fátima Blld.", birthday: "2023-10-23", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Fátima BS.", birthday: "2023-05-18", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Fátima MM.", birthday: "2023-07-12", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Fátima Z.", birthday: "2023-04-12", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Gema MB.", birthday: "2023-07-26", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Gema RD.", birthday: "2023-07-24", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Lola L.", birthday: "2023-10-05", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Mª Mar RM.", birthday: "2023-11-17", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Maite MG.", birthday: "2024-01-17", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "María DL.", birthday: "2023-12-30", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Nuria M.", birthday: "2023-03-13", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Pilar BB.", birthday: "2023-07-29", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Pilar C.", birthday: "2023-09-16", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Rafa Bll.", birthday: "2023-06-14", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Reme FS.", birthday: "2023-06-05", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Sandra DG.", birthday: "2023-07-12", city: "Valencia del Ventoso", stage: "INACTIVO" },
{ name: "Sofía B. (Responsable)", birthday: "2023-07-12", city: "Valencia del Ventoso", stage: "INACTIVO" },


];
// DOM Elements
const contentArea = document.getElementById('content-area');
const tabs = document.querySelectorAll('.tab-btn');
// Helper Functions
const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};
const getBirthdaySortValue = (dateString) => {
    const date = new Date(dateString);
    // Sort by month and day, ignoring year for "upcoming" logic usually, 
    // but for simple sorting let's just use month/day value
    return date.getMonth() * 100 + date.getDate();
};
const renderCard = (apj) => {
    // Normalizamos el nombre de la ciudad a minúsculas y sin espacios
    const cityClass = apj.city.toLowerCase().replace(/\s+/g, '-');
    return `
        <div class="apj-card ${cityClass}">
            <div class="apj-name">${apj.name}</div>
            <div class="apj-details">
                <div class="apj-detail-row">
                    <span class="label">City:</span>
                    <span>${apj.city}</span>
                </div>
                <div class="apj-detail-row">
                    <span class="label">Stage:</span>
                    <span>${apj.stage}</span>
                </div>
                <div class="apj-detail-row">
                    <span class="label">Birthday:</span>
                    <span>${formatDate(apj.birthday)}</span>
                </div>
            </div>
        </div>
    `;
};
const renderGroup = (title, items) => {
    const cardsHtml = items.map(renderCard).join('');
    return `
        <div class="section-group">
            <h3 class="section-title">${title}</h3>
            <div class="card-grid">
                ${cardsHtml}
            </div>
        </div>
    `;
};
// Render Views
const renderByCity = () => {
    const grouped = {};
    apjData.forEach(apj => {
        if (!grouped[apj.city]) grouped[apj.city] = [];
        grouped[apj.city].push(apj);
    });
    const sortedCities = Object.keys(grouped).sort();
    let html = '';
    sortedCities.forEach(city => {
        html += renderGroup(city, grouped[city]);
    });
    contentArea.innerHTML = html;
};
const renderByBirthday = () => {
    // Sort by month/day
    const sorted = [...apjData].sort((a, b) => {
        return getBirthdaySortValue(a.birthday) - getBirthdaySortValue(b.birthday);
    });
    // Group by Month
    const grouped = {};
    sorted.forEach(apj => {
        const date = new Date(apj.birthday);
        const month = date.toLocaleDateString('es-ES', { month: 'long' });
        // Capitalize month
        const monthCap = month.charAt(0).toUpperCase() + month.slice(1);
        if (!grouped[monthCap]) grouped[monthCap] = [];
        grouped[monthCap].push(apj);
    });
    let html = '';
    for (const month in grouped) {
        html += renderGroup(month, grouped[month]);
    }
    contentArea.innerHTML = html;
};
const renderByStage = () => {
    const stageOrder = ["Ancla", "Brújula", "Rumbo", "Vuelo", "Compás", "Fragua", "Responsable"];
    const grouped = {};
    apjData.forEach(apj => {
        if (!grouped[apj.stage]) grouped[apj.stage] = [];
        grouped[apj.stage].push(apj);
    });
    let html = '';
    stageOrder.forEach(stage => {
        if (grouped[stage]) {
            html += renderGroup(stage, grouped[stage]);
        }
    });
    // Handle any stages not in the ordered list (fallback)
    Object.keys(grouped).forEach(stage => {
        if (!stageOrder.includes(stage)) {
            html += renderGroup(stage, grouped[stage]);
        }
    });
    contentArea.innerHTML = html;
};
// Tab Switching Logic
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all
        tabs.forEach(t => t.classList.remove('active'));
        // Add active to clicked
        tab.classList.add('active');
        const tabName = tab.dataset.tab;
        if (tabName === 'city') renderByCity();
        else if (tabName === 'birthday') renderByBirthday();
        else if (tabName === 'stage') renderByStage();
    });
});
// Initial Render
renderByCity();