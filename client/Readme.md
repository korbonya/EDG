{
  "id": "T1",
  "name": "Transformer 1",
  "location": {
    "latitude": 45.52345,
    "longitude": -122.67567,
    "address": "123 Main St, Anytown USA"
  },
  "specifications": {
    "rating": 100000,
    "voltage_levels": [12000, 2400],
    "type": "oil-filled"
  },
  "connections": {
    "grid_connection": "three-phase",
    "interconnections": ["S1", "S2"]
  },
  "status": {
    "in_service": true,
    "alerts": []
  },
  "maintenance": {
    "last_maintenance": "2022-01-01",
    "next_maintenance": "2023-01-01",
    "repair_history": [
      {
        "date": "2021-03-01",
        "description": "Replaced faulty voltage regulator"
      },
      {
        "date": "2020-12-01",
        "description": "Completed routine maintenance"
      }
    ]
  },
  "documents": [
    {
      "name": "Transformer drawings",
      "url": "https://example.com/transformer-drawings.pdf"
    },
    {
      "name": "Transformer specification sheet",
      "url": "https://example.com/transformer-spec-sheet.pdf"
    }
  ],
  "notes": "Performs well, no issues reported"
}
const TransformerType = {
  OIL_FILLED: 'oil-filled',
  DRY_TYPE: 'dry-type',
  CAST_RESIN: 'cast resin',
  AUTO: 'auto',
  VARIABLE_FREQUENCY: 'variable-frequency'
}
// line 
{
  "id": "L1",
  "name": "Line 1",
  "type": "overhead",
  "voltageLevel": "69 kV",
  "length": 25.5,
  "route": [
    {
      "latitude": 47.619161,
      "longitude": -122.351222
    },
    {
      "latitude": 47.616922,
      "longitude": -122.349875
    }
  ],
  "from": "S1",
  "to": "S2",
  "status": {
    "inService": true,
    "alerts": []
  },
  "maintenance": {
    "lastMaintenanceDate": "2022-01-01",
    "scheduledMaintenance": [
      {
        "date": "2023-01-01",
        "description": "Annual maintenance check"
      }
    ]
  },
  "notes": "Line is performing well, no issues reported."
}

{
  "id": "S1",
  "name": "Substation 1",
  "location": {
    "latitude": 47.619161,
    "longitude": -122.351222,
    "address": "123 Main St, Seattle, WA"
  },
  "voltageLevel": "69 kV",
  "equipment": [
    {
      "id": "T1",
      "type": "transformer",
      "rating": 250,
      "voltageLevel": "69/13.8 kV"
    },
    {
      "id": "SBB1",
      "type": "switchgear",
      "voltageLevel": "13.8 kV"
    }
  ],
  "lines": [
    "L1",
    "L2"
  ],
  "status": {
    "inService": true,
    "alerts": []
  },
  "maintenance": {
    "lastMaintenanceDate": "2022-01-01",
    "scheduledMaintenance": [
      {
        "date": "2023-01-01",
        "description": "Annual maintenance check"
      }
    ]
  },
  "notes": "Substation is performing well, no issues reported."
}

