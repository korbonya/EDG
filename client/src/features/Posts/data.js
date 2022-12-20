// json data for the electric posts
// export const posts = [
//     {
//         id: 1,
//         register_number: '2003P0001',
//         city: 'Conakry',
//         town: 'Ratoma',
//         district: 'Lambanyi',
//         geoCoords: {
//             lat: 9.5092,
//             lng: -13.7122
//         },
//         address: 'Rue 1, Quartier 1, Commune 1',
//         type: 'Residential',
//         transformers: {
//             actives: 12,
//             inactives: 2
//         },
//         deployed_at: '2003-01-01',
//         date_last_renovation: '2019-01-01',
//     },
//     {
//         id: 2,
//         register_number: '2003P0002',
//         city: 'Conakry',
//         town: 'Kaloum',
//         district: 'Kaloum 1',
//         geoCoords: {
//             lat:8.5667,
//             lng: -13.1333
//         },
//         address: 'Rue 2, Quartier 2, Commune 2',
//         type: 'Residential',
//         transformers: {
//             actives: 14,
//             inactives: 1
//         },
//         deployed_at: '2003-01-01',
//         date_last_renovation: '2019-01-01',
//     },
//     {
//         id: 3,
//         register_number: '2003P0003',
//         city: 'Conakry',
//         town: 'Dixin',
//         district: 'Dixin 1',
//         geoCoords: {
//             lat: 11.3167,
//             lng: -12.2833
//         },
//         address: 'Rue 3, Quartier 3, Commune 3',
//         type: 'Residential',
//         transformers: {
//             actives: 10,
//             inactives: 3
//         },
//         deployed_at: '2003-01-01',
//         date_last_renovation: '2019-01-01',
//     },
//     {
//         id: 4,
//         register_number: '2003P0004',
//         city: 'Conakry',
//         town: 'Kaloum',
//         district: 'Kaloum 2',
//         geoCoords: {
//             lat: 10.3736,
//             lng:-12.0847
//         },
//         address: 'Rue 4, Quartier 4, Commune 4',
//         type: 'Residential',
//         transformers: {
//             actives: 8,
//             inactives: 5
//         },
//         deployed_at: '2003-01-01',
//         date_last_renovation: '2019-01-01',
//     },
//     {
//         id: 5,
//         register_number: '2003P0005',
//         city: 'Conakry',
//         town: 'Kaloum',
//         district: 'Kaloum 3',
//         geoCoords: {
//             lat:10.3804,
//             lng:-13.5500
//         },
//         address: 'Rue 5, Quartier 5, Commune 5',
//         type: 'Residential',
//         transformers: {
//             actives: 6,
//             inactives: 7
//         },
//         deployed_at: '2003-01-01',
//         date_last_renovation: '2019-01-01',
//     },
//     {
//         id: 6,
//         register_number: '2003P0006',
//         city: 'Conakry',
//         town: 'Kaloum',
//         district: 'Kaloum 4',
//         geoCoords: {
//             lat: 11.4189,
//             lng: -9.1644
//         },
//         address: 'Rue 6, Quartier 6, Commune 6',
//         type: 'Residential',
//         transformers: {
//             actives: 4,
//             inactives: 9
//         },
//         deployed_at: '2003-01-01',
//         date_last_renovation: '2019-01-01',
//     },
// ]

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
            lat:9.7911,
            lng: -13.5233
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
            lat: 10.1850,
            lng: -14.0430
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
            lat: 7.5660,
            lng: -9.2533
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
            lat: 11.2990,
            lng: -13.7260
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
            lat: 8.6870,
            lng: -8.6570
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
            lat: 7.8000,
            lng: -8.5333
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
            lat:10.6333,
            lng: -8.6833
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
            lat: 11.1833,
            lng:-12.9333
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

export const posts = [
    {
      id: "S1",
      name: "Poste 1",
      location: {
        latitude: 11.3167,
        longitude: -12.2833,
        address: "123 Main St, Conakry"
      },
      voltageLevel: "69 kV",
      equipment: [
        {
          id: "T1",
          type: "transformer",
          rating: 250,
          voltageLevel: "69/13.8 kV"
        },
        {
          id: "SBB1",
          type: "switchgear",
          voltageLevel: "13.8 kV"
        }
      ],
      lines: ["L1", "L2"],
      status: {
        inService: true,
        alerts: []
      },
      maintenance: {
        lastMaintenanceDate: "2022-01-01",
        scheduledMaintenance: [
          {
            date: "2023-01-01",
            description: "Annual maintenance check"
          }
        ]
      },
      notes: "Poste is performing well, no issues reported."
    },
    {
      id: "S2",
      name: "Poste 2",
      location: {
        latitude:10.3900,
        longitude:-9.3100,
        address: "456 First Ave, Conakry"
      },
      voltageLevel: "110 kV",
      equipment: [
        {
          id: "T2",
          type: "transformer",
          rating: 500,
          voltageLevel: "110/13.8 kV"
        },
        {
          id: "SBB2",
          type: "switchgear",
          voltageLevel: "13.8 kV"
        }
      ],
      lines: ["L3", "L4"],
      status: {
        inService: true,
        alerts: []
      },
      maintenance: {
        lastMaintenanceDate: "2022-02-15",
        scheduledMaintenance: [
          {
            date: "2023-02-15",
            description: "Annual maintenance check"
          }
        ]
      },
      notes: "Poste is performing well, no issues reported."
    },
    {
      id: "S3",
      name: "Poste 3",
      location: {
        latitude:10.3736,
        longitude: -12.0847,
        address: "789 Second St, Conakry"
      },
      voltageLevel: "230 kV",
      equipment: [
        {
          id: "T3",
          type: "transformer",
          rating: 1000,
          voltageLevel: "230/13.8 kV"
        },
        {
          id: "SBB3",
          type: "switchgear",
          voltageLevel: "13.8 kV"
        }
      ],
      lines: ["L5", "L6"],
      status: {
        inService: true,
        alerts: []
      },
      maintenance: {
        lastMaintenanceDate: "2022-03-01",
        scheduledMaintenance: [
            {
                date: "2023-03-01",
                description: "Annual maintenance check"
            }
        ]
        },
        notes: "Poste is performing well, no issues reported."
    },
    {
        id: 'S4',
        name: 'Poste 4',
        location: {
          latitude:10.6500,
          longitude:-14.6167,
          address: '123 Main St, Seattle, WA'
        },
        voltageLevel: '69 kV',
        equipment: [ [Object], [Object] ],
        lines: [ 'L1', 'L2' ],
        status: { inService: true, alerts: [] },
        maintenance: {
          lastMaintenanceDate: '2022-01-01',
          scheduledMaintenance: [Array]
        },
        notes: 'Poste is performing well, no issues reported.'
      },
      {
        id: 'S5',
        name: 'Poste 5',
        location: {
          latitude: 9.1905,
          longitude: -10.1200,
          address: '123 Main St, Seattle, WA'
        },
        voltageLevel: '69 kV',
        equipment: [ [Object], [Object] ],
        lines: [ 'L1', 'L2' ],
        status: { inService: true, alerts: [] },
        maintenance: {
          lastMaintenanceDate: '2022-01-01',
          scheduledMaintenance: [Array]
        },
        notes: 'Poste is performing well, no issues reported.'
      },
      {
        id: 'S6',
        name: 'Poste 6',
        location: {
          latitude:10.7500,
          longitude:-11.1167,
          address: '123 Main St, Seattle, WA'
        },
        voltageLevel: '69 kV',
        equipment: [ [Object], [Object] ],
        lines: [ 'L1', 'L2' ],
        status: { inService: true, alerts: [] },
        maintenance: {
          lastMaintenanceDate: '2022-01-01',
          scheduledMaintenance: [Array]
        },
        notes: 'Poste is performing well, no issues reported.'
      },
      {
        id: 'S7',
        name: 'Poste 7',
        location: {
          latitude: 10.0404,
          longitude: -10.7500,
          address: '123 Main St, Seattle, WA'
        },
        voltageLevel: '69 kV',
        equipment: [ [Object], [Object] ],
        lines: [ 'L1', 'L2' ],
        status: { inService: false, alerts: [] },
        maintenance: {
          lastMaintenanceDate: '2022-01-01',
          scheduledMaintenance: [Array]
        },
        notes: 'Poste is performing well, no issues reported.'
      },
      {
        id: 'S8',
        name: 'Poste 8',
        location: {
          latitude: 9.2704,
          longitude: -9.0200,
          address: '123 Main St, Seattle, WA'
        },
        voltageLevel: '69 kV',
        equipment: [ [Object], [Object] ],
        lines: [ 'L1', 'L2' ],
        status: { inService: true, alerts: [] },
        maintenance: {
          lastMaintenanceDate: '2022-01-01',
          scheduledMaintenance: [Array]
        },
        notes: 'Poste is performing well, no issues reported.'
      },
      {
        id: 'S9',
        name: 'Poste 9',
        location: {
          latitude:12.4800,
          longitude:-13.2960,
          address: '123 Main St, Seattle, WA'
        },
        voltageLevel: '69 kV',
        equipment: [ [Object], [Object] ],
        lines: [ 'L1', 'L2' ],
        status: { inService: true, alerts: [] },
        maintenance: {
          lastMaintenanceDate: '2022-01-01',
          scheduledMaintenance: [Array]
        },
        notes: 'Poste is performing well, no issues reported.'
      },
      {
        id: 'S10',
        name: 'Poste 10',
        location: {
          latitude: 9.5092,
          longitude:-13.7122,
          address: '123 Main St, Seattle, WA'
        },
        voltageLevel: '69 kV',
        equipment: [ [Object], [Object] ],
        lines: [ 'L1', 'L2' ],
        status: { inService: true, alerts: [] },
        maintenance: {
          lastMaintenanceDate: '2022-01-01',
          scheduledMaintenance: [Array]
        },
        notes: 'Poste is performing well, no issues reported.'
      }
    ];
    