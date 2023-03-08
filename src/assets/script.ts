import { Incident } from '../dal/incidentDal';

const titles = ['stabbing terror attack in apple cross', 'hit and run in yehuda', 'molotov strike on school bus'] as const;
const weaponTypes = ['אבנים', 'רכב', 'בקתב', 'סכין', 'נשק חם'] as const;
const eventTypes = ['פטיש חם', 'פרש תורכי', 'אביר לילה א', 'אביר לילה ב', 'אביר לילה ג', 'ירי תמ"ס'] as const;
const tags = ['אג"מ', 'מודיעין', 'תקשוב'] as const;

const MAX_VICTIMS_AMOUNT = 20;
const AYOSH_MAX_COORDS_NORTHING = 32.4;
const AYOSH_MIN_COORDS_NORTHING = 31.8;
const AYOSH_MAX_COORDS_EASTING = 35.4;
const AYOSH_MIN_COORDS_EASTING = 35;
const INCIDENTS_AMOUNT = 50;
const getRandomVictimAmount = () => Math.floor(Math.random() * MAX_VICTIMS_AMOUNT);

const getRandomLocation = () => ({
    northing: (Math.random() * (AYOSH_MAX_COORDS_NORTHING - AYOSH_MIN_COORDS_NORTHING) + AYOSH_MIN_COORDS_NORTHING),
    easting: (Math.random() * (AYOSH_MAX_COORDS_EASTING - AYOSH_MIN_COORDS_EASTING) + AYOSH_MIN_COORDS_EASTING)
});

const getRandomIndex = (arraySize: number) => Math.floor(Math.random() * arraySize);

const getRandomWeaponTypes = () => {
    const incidentWeaponTypes: string[] = [];
    weaponTypes.forEach(weaponType => {
        const randomBoolean: boolean = Math.random() < 0.5;
        if (randomBoolean) {
            incidentWeaponTypes.push(weaponType);
        }
    });

    if (incidentWeaponTypes.length === 0) {
        incidentWeaponTypes.push(weaponTypes[getRandomIndex(weaponTypes.length)]);
    }

    return incidentWeaponTypes;
}

const generateIncident = () => {
    return {
        title: titles[getRandomIndex(titles.length)],
        weaponTypes: getRandomWeaponTypes(),
        eventType: eventTypes[getRandomIndex(eventTypes.length)],
        tag: tags[getRandomIndex(tags.length)],
        location: getRandomLocation(),
        victimAmount: getRandomVictimAmount()
    }
}

const incidentsArray: Incident[] = [];

for (let index = 0; index < INCIDENTS_AMOUNT; index++) {
    incidentsArray.push(generateIncident());
}

console.log(incidentsArray);