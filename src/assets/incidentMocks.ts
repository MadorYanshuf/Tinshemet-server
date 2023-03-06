const incidents = [
    {
      id: 0,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'אביר לילה ג',
      tag: 'מודיעין',
      location: { northing: 31.15526283160389, easting: 31.51327237854331 },
      victimAmount: 17
    },
    {
      id: 1,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'רכב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'מודיעין',
      location: { northing: 30.96816395382229, easting: 30.16996128656097 },
      victimAmount: 5
    },
    {
      id: 2,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'אג"מ',
      location: { northing: 32.269635774451054, easting: 30.20280856814913 },
      victimAmount: 13
    },
    {
      id: 3,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'אג"מ',
      location: { northing: 30.944595623342657, easting: 31.040298004609117 },
      victimAmount: 0
    },
    {
      id: 4,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'תקשוב',
      location: { northing: 32.3996655734001, easting: 30.660023046344058 },
      victimAmount: 17
    },
    {
      id: 5,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'בקתב' ],
      eventType: 'אביר לילה ב',
      tag: 'אג"מ',
      location: { northing: 31.867657357959306, easting: 32.091211226420675 },
      victimAmount: 11
    },
    {
      id: 6,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'אג"מ',
      location: { northing: 32.291782481168774, easting: 32.49073258817901 },
      victimAmount: 17
    },
    {
      id: 7,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'תקשוב',
      location: { northing: 31.247274113292825, easting: 30.980922418243562 },
      victimAmount: 17
    },
    {
      id: 8,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'רכב', 'סכין' ],
      eventType: 'ירי תמ"ס',
      tag: 'אג"מ',
      location: { northing: 30.73660095043487, easting: 32.41857030341111 },
      victimAmount: 6
    },
    {
      id: 9,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'רכב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ג',
      tag: 'תקשוב',
      location: { northing: 32.59129678366884, easting: 32.04455694412714 },
      victimAmount: 2
    },
    {
      id: 10,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'אביר לילה ג',
      tag: 'תקשוב',
      location: { northing: 32.355979708159886, easting: 31.042035803306167 },
      victimAmount: 6
    },
    {
      id: 11,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב' ],
      eventType: 'אביר לילה א',
      tag: 'אג"מ',
      location: { northing: 32.505773569932444, easting: 32.72077527080398 },
      victimAmount: 2
    },
    {
      id: 12,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'אג"מ',
      location: { northing: 32.83270233737815, easting: 31.288020917830174 },
      victimAmount: 5
    },
    {
      id: 13,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים' ],
      eventType: 'פרש תורכי',
      tag: 'תקשוב',
      location: { northing: 30.810905097072908, easting: 31.916245607950625 },
      victimAmount: 6
    },
    {
      id: 14,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'רכב' ],
      eventType: 'פרש תורכי',
      tag: 'מודיעין',
      location: { northing: 32.479265385801426, easting: 31.64351955121458 },
      victimAmount: 17
    },
    {
      id: 15,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים' ],
      eventType: 'פטיש חם',
      tag: 'תקשוב',
      location: { northing: 32.91789087317774, easting: 30.464520697332436 },
      victimAmount: 13
    },
    {
      id: 16,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'בקתב', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'מודיעין',
      location: { northing: 32.665086327432334, easting: 32.623052490059365 },
      victimAmount: 1
    },
    {
      id: 17,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'בקתב', 'סכין' ],
      eventType: 'פרש תורכי',
      tag: 'מודיעין',
      location: { northing: 31.939356580625343, easting: 31.14729644240458 },
      victimAmount: 18
    },
    {
      id: 18,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'סכין' ],
      eventType: 'פטיש חם',
      tag: 'מודיעין',
      location: { northing: 32.348849510317216, easting: 31.67721168801093 },
      victimAmount: 3
    },
    {
      id: 19,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'בקתב' ],
      eventType: 'אביר לילה א',
      tag: 'אג"מ',
      location: { northing: 30.646163577370977, easting: 30.840313702246547 },
      victimAmount: 15
    },
    {
      id: 20,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'בקתב', 'סכין' ],
      eventType: 'אביר לילה ב',
      tag: 'מודיעין',
      location: { northing: 31.952984069135354, easting: 32.07076993183738 },
      victimAmount: 7
    },
    {
      id: 21,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'מודיעין',
      location: { northing: 31.62656092419607, easting: 30.41629177570697 },
      victimAmount: 13
    },
    {
      id: 22,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'בקתב', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'מודיעין',
      location: { northing: 32.854021396245514, easting: 31.088278685594528 },
      victimAmount: 18
    },
    {
      id: 23,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'רכב', 'סכין' ],
      eventType: 'ירי תמ"ס',
      tag: 'אג"מ',
      location: { northing: 30.065593932128245, easting: 32.36784622883748 },
      victimAmount: 0
    },
    {
      id: 24,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'סכין' ],
      eventType: 'אביר לילה א',
      tag: 'אג"מ',
      location: { northing: 32.39404416479402, easting: 32.725536428302725 },
      victimAmount: 17
    },
    {
      id: 25,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'תקשוב',
      location: { northing: 30.50555105280371, easting: 31.007145803401205 },
      victimAmount: 8
    },
    {
      id: 26,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב', 'סכין', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'תקשוב',
      location: { northing: 32.85497053546369, easting: 31.016458984137046 },
      victimAmount: 3
    },
    {
      id: 27,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב' ],
      eventType: 'אביר לילה א',
      tag: 'אג"מ',
      location: { northing: 30.251565907814292, easting: 32.561283584838726 },
      victimAmount: 5
    },
    {
      id: 28,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'סכין', 'נשק חם' ],
      eventType: 'פטיש חם',
      tag: 'אג"מ',
      location: { northing: 30.459257203274476, easting: 31.113705198482005 },
      victimAmount: 11
    },
    {
      id: 29,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'רכב', 'בקתב' ],
      eventType: 'אביר לילה ב',
      tag: 'תקשוב',
      location: { northing: 32.28576048586698, easting: 30.07861698658742 },
      victimAmount: 18
    },
    {
      id: 30,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'בקתב', 'סכין' ],
      eventType: 'פרש תורכי',
      tag: 'מודיעין',
      location: { northing: 32.09378904608439, easting: 32.87084882689484 },
      victimAmount: 16
    },
    {
      id: 31,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'רכב' ],
      eventType: 'אביר לילה א',
      tag: 'תקשוב',
      location: { northing: 32.447992590581144, easting: 32.283523986854014 },
      victimAmount: 3
    },
    {
      id: 32,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'סכין' ],
      eventType: 'ירי תמ"ס',
      tag: 'אג"מ',
      location: { northing: 31.471570565598636, easting: 31.55835909124231 },
      victimAmount: 0
    },
    {
      id: 33,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'בקתב', 'סכין' ],
      eventType: 'אביר לילה ב',
      tag: 'תקשוב',
      location: { northing: 30.473953609421997, easting: 30.878047131552933 },
      victimAmount: 1
    },
    {
      id: 34,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'מודיעין',
      location: { northing: 31.584635396167812, easting: 31.884391822570503 },
      victimAmount: 14
    },
    {
      id: 35,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'תקשוב',
      location: { northing: 31.815624805619517, easting: 30.837744801692857 },
      victimAmount: 10
    },
    {
      id: 36,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'רכב', 'סכין' ],
      eventType: 'אביר לילה ב',
      tag: 'אג"מ',
      location: { northing: 32.23857422296174, easting: 31.335617042726195 },
      victimAmount: 6
    },
    {
      id: 37,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'סכין', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'אג"מ',
      location: { northing: 30.482059480058567, easting: 31.328243958525494 },
      victimAmount: 1
    },
    {
      id: 38,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'בקתב', 'נשק חם' ],
      eventType: 'אביר לילה ג',
      tag: 'אג"מ',
      location: { northing: 31.934726843960753, easting: 32.38534758271438 },
      victimAmount: 8
    },
    {
      id: 39,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'נשק חם' ],
      eventType: 'פטיש חם',
      tag: 'מודיעין',
      location: { northing: 32.56960247459155, easting: 32.96891128871567 },
      victimAmount: 7
    },
    {
      id: 40,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים' ],
      eventType: 'אביר לילה א',
      tag: 'מודיעין',
      location: { northing: 31.81442738000674, easting: 30.22968429239997 },
      victimAmount: 10
    },
    {
      id: 41,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'סכין' ],
      eventType: 'פטיש חם',
      tag: 'מודיעין',
      location: { northing: 32.369929551290205, easting: 30.147506236075646 },
      victimAmount: 13
    },
    {
      id: 42,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'נשק חם' ],
      eventType: 'אביר לילה א',
      tag: 'מודיעין',
      location: { northing: 31.233167913566344, easting: 30.17316128997729 },
      victimAmount: 5
    },
    {
      id: 43,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'נשק חם' ],
      eventType: 'אביר לילה א',
      tag: 'תקשוב',
      location: { northing: 30.46511030243512, easting: 31.791277984774585 },
      victimAmount: 19
    },
    {
      id: 44,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'בקתב', 'סכין' ],
      eventType: 'אביר לילה א',
      tag: 'אג"מ',
      location: { northing: 31.789476428909996, easting: 30.522022068907734 },
      victimAmount: 11
    },
    {
      id: 45,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב', 'נשק חם' ],
      eventType: 'אביר לילה א',
      tag: 'מודיעין',
      location: { northing: 31.313895563916695, easting: 32.83156365542285 },
      victimAmount: 7
    },
    {
      id: 46,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב' ],
      eventType: 'פרש תורכי',
      tag: 'אג"מ',
      location: { northing: 31.421923174191978, easting: 30.313861904182556 },
      victimAmount: 10
    },
    {
      id: 47,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'מודיעין',
      location: { northing: 32.29384546564389, easting: 32.343202956727275 },
      victimAmount: 5
    },
    {
      id: 48,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'פטיש חם',
      tag: 'אג"מ',
      location: { northing: 32.29461713786363, easting: 32.30685219660708 },
      victimAmount: 12
    },
    {
      id: 49,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'בקתב', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'אג"מ',
      location: { northing: 30.926606707482097, easting: 31.003765710874372 },
      victimAmount: 11
    },
    {
      id: 50,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'מודיעין',
      location: { northing: 32.7628911529877, easting: 32.244220302663265 },
      victimAmount: 11
    },
    {
      id: 51,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'סכין', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'תקשוב',
      location: { northing: 30.384384686863044, easting: 32.62395581614619 },
      victimAmount: 12
    },
    {
      id: 52,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'בקתב', 'סכין' ],
      eventType: 'אביר לילה ב',
      tag: 'תקשוב',
      location: { northing: 31.206219877287168, easting: 31.93109037593108 },
      victimAmount: 18
    },
    {
      id: 53,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'תקשוב',
      location: { northing: 31.142830612212105, easting: 31.84392972680526 },
      victimAmount: 4
    },
    {
      id: 54,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה א',
      tag: 'מודיעין',
      location: { northing: 31.091702566627724, easting: 32.37040224089242 },
      victimAmount: 6
    },
    {
      id: 55,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'רכב', 'סכין' ],
      eventType: 'פטיש חם',
      tag: 'מודיעין',
      location: { northing: 30.08984461058172, easting: 31.33766480614403 },
      victimAmount: 17
    },
    {
      id: 56,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'בקתב' ],
      eventType: 'ירי תמ"ס',
      tag: 'מודיעין',
      location: { northing: 32.50801588011532, easting: 30.83798113117028 },
      victimAmount: 4
    },
    {
      id: 57,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב' ],
      eventType: 'אביר לילה א',
      tag: 'מודיעין',
      location: { northing: 32.81413321784029, easting: 31.223945238422015 },
      victimAmount: 9
    },
    {
      id: 58,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'רכב', 'סכין' ],
      eventType: 'אביר לילה ב',
      tag: 'אג"מ',
      location: { northing: 32.68843647055896, easting: 31.482562371256883 },
      victimAmount: 15
    },
    {
      id: 59,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'רכב' ],
      eventType: 'פרש תורכי',
      tag: 'אג"מ',
      location: { northing: 32.59061962371737, easting: 32.779851851339814 },
      victimAmount: 2
    },
    {
      id: 60,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'אג"מ',
      location: { northing: 32.68793547327168, easting: 30.64427123196186 },
      victimAmount: 14
    },
    {
      id: 61,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'פטיש חם',
      tag: 'מודיעין',
      location: { northing: 31.90434414575984, easting: 32.72065358546422 },
      victimAmount: 3
    },
    {
      id: 62,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'אג"מ',
      location: { northing: 31.224100187707712, easting: 31.856997326335712 },
      victimAmount: 3
    },
    {
      id: 63,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'תקשוב',
      location: { northing: 32.993265021482934, easting: 31.910064055444302 },
      victimAmount: 0
    },
    {
      id: 64,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'רכב', 'נשק חם' ],
      eventType: 'פטיש חם',
      tag: 'מודיעין',
      location: { northing: 31.018050976119465, easting: 32.71056325093547 },
      victimAmount: 8
    },
    {
      id: 65,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'רכב', 'בקתב', 'סכין' ],
      eventType: 'אביר לילה ג',
      tag: 'מודיעין',
      location: { northing: 32.65107133348471, easting: 30.193211128414493 },
      victimAmount: 16
    },
    {
      id: 66,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'בקתב' ],
      eventType: 'פרש תורכי',
      tag: 'אג"מ',
      location: { northing: 32.07280572509461, easting: 32.04388619330307 },
      victimAmount: 6
    },
    {
      id: 67,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'תקשוב',
      location: { northing: 32.91710568760843, easting: 31.999117610944328 },
      victimAmount: 14
    },
    {
      id: 68,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'בקתב' ],
      eventType: 'פטיש חם',
      tag: 'אג"מ',
      location: { northing: 31.44046826146973, easting: 31.62408207457511 },
      victimAmount: 17
    },
    {
      id: 69,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'בקתב', 'נשק חם' ],
      eventType: 'פטיש חם',
      tag: 'תקשוב',
      location: { northing: 31.804777426460475, easting: 31.99502663787308 },
      victimAmount: 5
    },
    {
      id: 70,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'תקשוב',
      location: { northing: 31.037468179043376, easting: 30.851196117567483 },
      victimAmount: 15
    },
    {
      id: 71,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'בקתב', 'נשק חם' ],
      eventType: 'פטיש חם',
      tag: 'תקשוב',
      location: { northing: 30.032757903328037, easting: 31.558085275076376 },
      victimAmount: 0
    },
    {
      id: 72,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'מודיעין',
      location: { northing: 32.38644701433688, easting: 30.7675502120839 },
      victimAmount: 13
    },
    {
      id: 73,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'בקתב', 'סכין' ],
      eventType: 'פטיש חם',
      tag: 'מודיעין',
      location: { northing: 30.430740502193668, easting: 31.200792370857013 },
      victimAmount: 3
    },
    {
      id: 74,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'רכב', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'פטיש חם',
      tag: 'תקשוב',
      location: { northing: 31.59132044408454, easting: 32.2382060803436 },
      victimAmount: 3
    },
    {
      id: 75,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'בקתב', 'סכין' ],
      eventType: 'אביר לילה ג',
      tag: 'מודיעין',
      location: { northing: 31.68747785443263, easting: 31.003655633466426 },
      victimAmount: 15
    },
    {
      id: 76,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'בקתב' ],
      eventType: 'אביר לילה ב',
      tag: 'אג"מ',
      location: { northing: 32.24152751238941, easting: 32.74242616197969 },
      victimAmount: 12
    },
    {
      id: 77,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'רכב', 'נשק חם' ],
      eventType: 'אביר לילה א',
      tag: 'אג"מ',
      location: { northing: 32.99372712622938, easting: 32.46604601262922 },
      victimAmount: 14
    },
    {
      id: 78,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב' ],
      eventType: 'אביר לילה ג',
      tag: 'אג"מ',
      location: { northing: 30.47633406777771, easting: 31.19754923854103 },
      victimAmount: 13
    },
    {
      id: 79,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'רכב', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'אג"מ',
      location: { northing: 30.710251068882318, easting: 31.863286442252814 },
      victimAmount: 18
    },
    {
      id: 80,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ג',
      tag: 'תקשוב',
      location: { northing: 31.915891072736645, easting: 30.232060964508666 },
      victimAmount: 5
    },
    {
      id: 81,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'בקתב' ],
      eventType: 'פרש תורכי',
      tag: 'תקשוב',
      location: { northing: 32.90415791345994, easting: 30.493695657254626 },
      victimAmount: 18
    },
    {
      id: 82,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב' ],
      eventType: 'אביר לילה ב',
      tag: 'אג"מ',
      location: { northing: 31.944315491148455, easting: 32.39779272435356 },
      victimAmount: 10
    },
    {
      id: 83,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'רכב', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'מודיעין',
      location: { northing: 30.520276915968665, easting: 31.203363107563753 },
      victimAmount: 19
    },
    {
      id: 84,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'אג"מ',
      location: { northing: 30.69242427336225, easting: 31.4149725766514 },
      victimAmount: 15
    },
    {
      id: 85,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'רכב', 'סכין', 'נשק חם' ],
      eventType: 'ירי תמ"ס',
      tag: 'מודיעין',
      location: { northing: 30.141161185797998, easting: 31.023769131044883 },
      victimAmount: 6
    },
    {
      id: 86,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'רכב' ],
      eventType: 'אביר לילה ג',
      tag: 'תקשוב',
      location: { northing: 31.34913294466292, easting: 31.313336452309056 },
      victimAmount: 0
    },
    {
      id: 87,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'בקתב' ],
      eventType: 'אביר לילה ג',
      tag: 'אג"מ',
      location: { northing: 30.844921496468732, easting: 30.027376422435704 },
      victimAmount: 9
    },
    {
      id: 88,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'פטיש חם',
      tag: 'מודיעין',
      location: { northing: 32.42839649037449, easting: 30.234036915058404 },
      victimAmount: 16
    },
    {
      id: 89,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'רכב', 'סכין' ],
      eventType: 'אביר לילה א',
      tag: 'תקשוב',
      location: { northing: 32.31216300425054, easting: 30.700773244726214 },
      victimAmount: 12
    },
    {
      id: 90,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'רכב' ],
      eventType: 'פרש תורכי',
      tag: 'אג"מ',
      location: { northing: 30.981304831001907, easting: 30.11707952009461 },
      victimAmount: 4
    },
    {
      id: 91,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'סכין' ],
      eventType: 'פטיש חם',
      tag: 'מודיעין',
      location: { northing: 30.72587453230407, easting: 32.85074960623277 },
      victimAmount: 18
    },
    {
      id: 92,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ג',
      tag: 'אג"מ',
      location: { northing: 30.560038387968838, easting: 30.52889085867684 },
      victimAmount: 4
    },
    {
      id: 93,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'סכין' ],
      eventType: 'פרש תורכי',
      tag: 'תקשוב',
      location: { northing: 31.17785296642493, easting: 32.59514451609183 },
      victimAmount: 14
    },
    {
      id: 94,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'בקתב', 'נשק חם' ],
      eventType: 'פרש תורכי',
      tag: 'תקשוב',
      location: { northing: 30.511467774644434, easting: 31.763716693089997 },
      victimAmount: 15
    },
    {
      id: 95,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'אביר לילה ג',
      tag: 'אג"מ',
      location: { northing: 31.014970653001708, easting: 32.97064301490114 },
      victimAmount: 2
    },
    {
      id: 96,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'אבנים', 'רכב', 'בקתב', 'נשק חם' ],
      eventType: 'אביר לילה ב',
      tag: 'אג"מ',
      location: { northing: 31.42881725800877, easting: 30.288013515218886 },
      victimAmount: 17
    },
    {
      id: 97,
      title: 'hit and run in yehuda',
      weaponTypes: [ 'רכב' ],
      eventType: 'אביר לילה א',
      tag: 'מודיעין',
      location: { northing: 32.891575819756966, easting: 30.28030846482585 },
      victimAmount: 7
    },
    {
      id: 98,
      title: 'molotov strike on school bus',
      weaponTypes: [ 'אבנים', 'רכב' ],
      eventType: 'אביר לילה א',
      tag: 'מודיעין',
      location: { northing: 32.565203149720766, easting: 30.081109121483152 },
      victimAmount: 16
    },
    {
      id: 99,
      title: 'stabbing terror attack in apple cross',
      weaponTypes: [ 'רכב', 'בקתב', 'סכין', 'נשק חם' ],
      eventType: 'אביר לילה ג',
      tag: 'תקשוב',
      location: { northing: 31.262289075586846, easting: 31.726445416059416 },
      victimAmount: 11
    }
  ];