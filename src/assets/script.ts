import { Incident } from '../dal/incidentDal';

const titles = ['stabbing terror attack in apple cross', 'hit and run in yehuda', 'molotov strike on school bus'] as const;
const weaponTypes = ['אבנים', 'רכב', 'בקתב', 'סכין', 'נשק חם'] as const;
const eventTypes = ['פטיש חם', 'פרש תורכי', 'אביר לילה א', 'אביר לילה ב', 'אביר לילה ג', 'ירי תמ"ס'] as const;
const tags = ['אג"מ', 'מודיעין', 'תקשוב'] as const;

const MAX_VICTIMS_AMOUNT = 20;
const AYOSH_MAX_COORDS = 32;
const AYOSH_MIN_COORDS = 30;
const INCIDENTS_AMOUNT = 100;
const getRandomVictimAmount = () => Math.floor(Math.random() * MAX_VICTIMS_AMOUNT);

const getRandomLocation = () => ({
    northing: (Math.random() * (AYOSH_MAX_COORDS - AYOSH_MIN_COORDS + 1) + AYOSH_MIN_COORDS),
    easting: (Math.random() * (AYOSH_MAX_COORDS - AYOSH_MIN_COORDS + 1) + AYOSH_MIN_COORDS)
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

const generateIncident = (index: number) => {
    return {
        id: index,
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
    incidentsArray.push(generateIncident(index + 1));
}