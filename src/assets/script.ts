import {Incident} from '../dal/incidentDal';

const titles: string[] = ['stabbing terror attack in apple cross', 'hit and run in yehuda', 'molotov strike on school bus'];
const weaponTypes: string[] = ['אבנים','רכב','בקתב', 'סכין','נשק חם'];
const eventTypes: string[] = ['פטיש חם', 'פרש תורכי', 'אביר לילה א', 'אביר לילה ב', 'אביר לילה ג', 'ירי תמ"ס'];
const tags: string[] = ['אג"מ', 'מודיעין', 'תקשוב'];
const MAX_VICTIMS_AMOUNT = 20;
const AYOSH_MAX_COORDS = 32;
const AYOSH_MIN_COORDS = 30;
const getRandomVictimAmount = () => Math.floor(Math.random() * MAX_VICTIMS_AMOUNT);

const getRandomLocation = () => {
    return {
        northing : (Math.random() * (AYOSH_MAX_COORDS - AYOSH_MIN_COORDS + 1) + AYOSH_MIN_COORDS),
        easting: (Math.random() * (AYOSH_MAX_COORDS - AYOSH_MIN_COORDS + 1) + AYOSH_MIN_COORDS)
    }
};

const getRandomIndex = (arraySize:number) =>  Math.floor(Math.random() * arraySize);

const getRandomWeaponTypes = () => {
    const incidentWeaponTypes: string[] = [];
    weaponTypes.forEach(weaponType => {
        const randomBoolean : boolean = Math.random() < 0.5;
        if(randomBoolean){
            incidentWeaponTypes.push(weaponType);
        }
    });

    if(incidentWeaponTypes.length === 0){
        incidentWeaponTypes.push(weaponTypes[getRandomIndex(weaponTypes.length)]);
    }

    return incidentWeaponTypes;
}

const generateIncident = (index:number) => {
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

const incidentsArray : Incident[] = [];

for(let index = 0; index < 100; index++){
    incidentsArray.push(generateIncident(index));
}

console.log(incidentsArray);
