// json data for the electric posts
export const posts = [
    {
        id: 1,
        register_number: '2003P0001',
        city: 'Conakry',
        town: 'Ratoma',
        district: 'Lambanyi',
        geoCoords: {
            lat: 9.5092,
            lng: -13.7122
        },
        address: 'Rue 1, Quartier 1, Commune 1',
        type: 'Residential',
        transformers: {
            actives: 12,
            inactives: 2
        },
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 2,
        register_number: '2003P0002',
        city: 'Conakry',
        town: 'Kaloum',
        district: 'Kaloum 1',
        geoCoords: {
            lat:8.5667,
            lng: -10.1333
        },
        address: 'Rue 2, Quartier 2, Commune 2',
        type: 'Residential',
        transformers: {
            actives: 14,
            inactives: 1
        },
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 3,
        register_number: '2003P0003',
        city: 'Conakry',
        town: 'Dixin',
        district: 'Dixin 1',
        geoCoords: {
            lat: 11.3167,
            lng: -12.2833
        },
        address: 'Rue 3, Quartier 3, Commune 3',
        type: 'Residential',
        transformers: {
            actives: 10,
            inactives: 3
        },
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 4,
        register_number: '2003P0004',
        city: 'Conakry',
        town: 'Kaloum',
        district: 'Kaloum 2',
        geoCoords: {
            lat: 10.3736,
            lng:-12.0847
        },
        address: 'Rue 4, Quartier 4, Commune 4',
        type: 'Residential',
        transformers: {
            actives: 8,
            inactives: 5
        },
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 5,
        register_number: '2003P0005',
        city: 'Conakry',
        town: 'Kaloum',
        district: 'Kaloum 3',
        geoCoords: {
            lat:10.3804,
            lng:-13.5500
        },
        address: 'Rue 5, Quartier 5, Commune 5',
        type: 'Residential',
        transformers: {
            actives: 6,
            inactives: 7
        },
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 6,
        register_number: '2003P0006',
        city: 'Conakry',
        town: 'Kaloum',
        district: 'Kaloum 4',
        geoCoords: {
            lat: 11.4189,
            lng: -9.1644
        },
        address: 'Rue 6, Quartier 6, Commune 6',
        type: 'Residential',
        transformers: {
            actives: 4,
            inactives: 9
        },
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
]

export const lines = [
    {
        id: 1,
        number_register: '2003L0001',
        startEnd:"2003P0001 - 2003P0002",
        length: 100,
        type: 'basse Tension',
        voltage: 220,
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 2,
        number_register: '2003L0002',
        startEnd:"2003P0002 - 2003P0003",
        length: 100,
        type: 'haute Tension',
        voltage: 440,
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 3,
        number_register: '2003L0003',
        startEnd:"2003P0003 - 2003P0004",
        length: 100,
        type: 'basse Tension',
        voltage: 220,
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 4,
        number_register: '2003L0004',
        startEnd:"2003P0004 - 2003P0005",
        length: 100,
        type: 'basse Tension',
        voltage: 220,
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
]

export const powerStations = [
    {
        id: 1,
        number_register: '2003S0001',
        name: 'Station 1',
        type: 'hidroelectrique',
        power: 1000,
        cityTown: 'Conakry/Kaloum',
        geoCoords: {
            lat: 9.625411,
            lng: -13.12
        },
        address: 'Rue 2, Quartier 2, Commune 2',
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 2,
        number_register: '2003S0002',
        name: 'Station 2',
        type: 'thermique',
        power: 1000,
        cityTown: 'Conakry/Ratoma',
        geoCoords: {
            lat: 9.539911,
            lng: -12.61581
        },
        address: 'Rue 1, Quartier 1, Commune 1',
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 3,
        number_register: '2003S0003',
        name: 'Station 3',
        type: 'thermique',
        power: 1000,
        cityTown: 'Conakry/Dixin',
        geoCoords: {
            lat: 10.625411,
            lng: -11.62564
        },
        address: 'Rue 3, Quartier 3, Commune 3',
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 4,
        number_register: '2003S0004',
        name: 'Station 4',
        type: 'thermique',
        power: 1000,
        cityTown: 'Conakry/Kaloum',
        geoCoords: {
            lat: 9.645411,
            lng: -13.655476
        },
        address: 'Rue 4, Quartier 4, Commune 4',
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 5,
        number_register: '2003S0005',
        name: 'Station 5',
        type: 'thermique',
        power: 1000,
        cityTown: 'Conakry/Kaloum',
        geoCoords: {
            lat: 9.6255411,
            lng: -13.65476
        },
        address: 'Rue 5, Quartier 5, Commune 5',
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
]

export const tStations = [
    {
        id: 1,
        number_register: '2003T0001',
        address: 'T6 rond point',
        cityTown: 'Conakry/Kaloum',
        geoCoords: {
            lat: 12.625411,
            lng: -13.62
        },
        input: 2000,
        output: 1000,
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 2,
        number_register: '2003T0002',
        address: 'T6 rond point',
        cityTown: 'Conakry/Kaloum',
        geoCoords: {
            lat: 11.625411,
            lng: -12.62
        },
        input: 2000,
        output: 1000,
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
    {
        id: 3,
        number_register: '2003T0003',
        address: 'T6 rond point',
        cityTown: 'Conakry/Kaloum',
        geoCoords: {
            lat: 9.625411,
            lng: -14.2
        },
        input: 2000,
        output: 1000,
        deployed_at: '2003-01-01',
        date_last_renovation: '2019-01-01',
    },
]

export const maintenances = [
    {
        id: 1,
        service: 'test',
        on: 'T000124',
        agent: 'Moussa Touré',
        date: '2020-01-01',
        description: 'les service de maintenance ont fait un test',
    },
    {
        id: 2,
        service: 'depannage',
        on: 'T000124',
        agent: 'Mamadou Diallo',
        date: '2020-01-01',
        description: 'les service de maintenance ont fait un test',
    },
    {
        id: 3,
        service: 'depannage',
        on: 'T000124',
        agent: 'Mariama Diallo',
        date: '2020-01-01',
        description: 'les service de maintenance ont fait un test',
    },
]