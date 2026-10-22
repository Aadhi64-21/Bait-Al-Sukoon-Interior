var APP_DATA = {
  "scenes": [
    {
      "id": "0-sitout",
      "name": "Sitout",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0292822312616412,
          "pitch": 0.013662236083980872,
          "rotation": 0,
          "target": "3-foyer"
        },
        {
          "yaw": -1.7462058070378532,
          "pitch": 0.23561781194938547,
          "rotation": 3.141592653589793,
          "target": "1-garden-01"
        },
        {
          "yaw": -1.1441737376393242,
          "pitch": 0.11535429644779249,
          "rotation": 1.5707963267948966,
          "target": "2-garden-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-garden-01",
      "name": "Garden 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1003682052831607,
          "pitch": 0.14944923594194037,
          "rotation": 3.141592653589793,
          "target": "0-sitout"
        },
        {
          "yaw": -0.17874813170501724,
          "pitch": 0.23318200352210283,
          "rotation": 3.141592653589793,
          "target": "2-garden-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garden-02",
      "name": "Garden 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0076652377495456,
          "pitch": 0.20929792517637757,
          "rotation": 3.141592653589793,
          "target": "1-garden-01"
        },
        {
          "yaw": 1.8927634097468067,
          "pitch": -0.09094219676907933,
          "rotation": 3.141592653589793,
          "target": "0-sitout"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2680964490530986,
          "pitch": 0.09846186522860911,
          "rotation": 0,
          "target": "0-sitout"
        },
        {
          "yaw": -1.0637432896652488,
          "pitch": 0.09900846833611254,
          "rotation": 3.141592653589793,
          "target": "5-dining"
        },
        {
          "yaw": 2.6373456889211147,
          "pitch": 0.3905553823663297,
          "rotation": 3.141592653589793,
          "target": "4-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3382651031920165,
          "pitch": 0.03670534965444183,
          "rotation": 1.5707963267948966,
          "target": "0-sitout"
        },
        {
          "yaw": 1.4104945633342911,
          "pitch": 0.1936339992891014,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": 0.6434640863792094,
          "pitch": 0.08084699490009228,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.149423428326518,
          "pitch": 0.026615209270158147,
          "rotation": 3.141592653589793,
          "target": "9-kitchen"
        },
        {
          "yaw": -2.3868102438270977,
          "pitch": 0.02286515976342507,
          "rotation": 1.5707963267948966,
          "target": "10-master-bedroom-gf"
        },
        {
          "yaw": -3.1291392180219546,
          "pitch": 0.20553687459115366,
          "rotation": 3.141592653589793,
          "target": "13-lounge"
        },
        {
          "yaw": 3.1124519715080545,
          "pitch": -0.3053952386583383,
          "rotation": 0,
          "target": "14-first-floor"
        },
        {
          "yaw": 0.5949867469771704,
          "pitch": 0.13862813738081847,
          "rotation": 3.141592653589793,
          "target": "6-dining-wash"
        },
        {
          "yaw": 1.485078731467877,
          "pitch": 0.012244824249652453,
          "rotation": 0,
          "target": "8-guest-bedroom"
        },
        {
          "yaw": 1.313400799863981,
          "pitch": 0.018726604046975126,
          "rotation": 17.27875959474387,
          "target": "7-common-toilet"
        },
        {
          "yaw": 1.8895034824978305,
          "pitch": 0.08316102985008733,
          "rotation": 0,
          "target": "4-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-wash",
      "name": "Dining Wash",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.4095974124800748,
          "pitch": 0.045586217180286326,
          "rotation": 3.141592653589793,
          "target": "9-kitchen"
        },
        {
          "yaw": -0.9791711607832738,
          "pitch": 0.28671044820862335,
          "rotation": 3.141592653589793,
          "target": "5-dining"
        },
        {
          "yaw": -2.1328257248772466,
          "pitch": 0.03520728503455217,
          "rotation": 0,
          "target": "10-master-bedroom-gf"
        },
        {
          "yaw": -2.618784652555215,
          "pitch": 0.19582125287536378,
          "rotation": 3.141592653589793,
          "target": "13-lounge"
        },
        {
          "yaw": 1.5819777039263663,
          "pitch": 0.042743919810092734,
          "rotation": 0,
          "target": "8-guest-bedroom"
        },
        {
          "yaw": 1.2235823280882379,
          "pitch": 0.14001826540094342,
          "rotation": 4.71238898038469,
          "target": "7-common-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-common-toilet",
      "name": "Common Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.333102010767842,
          "pitch": 0.1799012057610092,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-guest-bedroom",
      "name": "Guest Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1102201347199967
      },
      "linkHotspots": [
        {
          "yaw": -1.7134323061340844,
          "pitch": 0.10293974595740707,
          "rotation": 0,
          "target": "5-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.032958126462540704,
        "pitch": 0.008379281981705233,
        "fov": 1.0045162555273197
      },
      "linkHotspots": [
        {
          "yaw": 1.847634254761508,
          "pitch": 0.08236270544579227,
          "rotation": 0,
          "target": "4-living"
        },
        {
          "yaw": 1.422664917679855,
          "pitch": 0.1394026555856307,
          "rotation": 3.141592653589793,
          "target": "5-dining"
        },
        {
          "yaw": 1.6406941025101887,
          "pitch": 0.03623912274013463,
          "rotation": 0,
          "target": "8-guest-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-master-bedroom-gf",
      "name": "Master Bedroom GF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -2.309833624482046,
          "pitch": 0.049833858523459895,
          "rotation": 0,
          "target": "11-walk-in-closet-mb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-walk-in-closet-mb",
      "name": "Walk in closet MB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9660066090553716,
          "pitch": 0.09108860504509408,
          "rotation": 0,
          "target": "10-master-bedroom-gf"
        },
        {
          "yaw": -1.2864081025166598,
          "pitch": 0.12607843768784122,
          "rotation": 0,
          "target": "12-toilet-mb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-toilet-mb",
      "name": "Toilet MB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2960149610052838,
          "pitch": 0.15918413129927522,
          "rotation": 0,
          "target": "11-walk-in-closet-mb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03615926553089466,
          "pitch": -0.023369233382133814,
          "rotation": 3.141592653589793,
          "target": "5-dining"
        },
        {
          "yaw": -0.41345388754498913,
          "pitch": -0.09342923347765719,
          "rotation": 4.71238898038469,
          "target": "9-kitchen"
        },
        {
          "yaw": -0.8814964323327672,
          "pitch": -0.13363055881448815,
          "rotation": 4.71238898038469,
          "target": "10-master-bedroom-gf"
        },
        {
          "yaw": 0.06367751757254858,
          "pitch": -0.9066664534017068,
          "rotation": 0,
          "target": "14-first-floor"
        },
        {
          "yaw": 1.7641290566432328,
          "pitch": -0.07844505704131599,
          "rotation": 0,
          "target": "4-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-first-floor",
      "name": "First Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9754701939923827,
          "pitch": -0.21494843545711895,
          "rotation": 0,
          "target": "18-bedroom-01-ff"
        },
        {
          "yaw": -2.7535493762092713,
          "pitch": -0.23461451453594329,
          "rotation": 7.853981633974483,
          "target": "21-pantry-area"
        },
        {
          "yaw": 0.19738591073288703,
          "pitch": -0.003883769716415131,
          "rotation": 3.141592653589793,
          "target": "15-living-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-living-ff",
      "name": "Living FF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.725798941932366,
          "pitch": -0.0305969093932994,
          "rotation": 3.141592653589793,
          "target": "13-lounge"
        },
        {
          "yaw": -1.4078666418675745,
          "pitch": -0.031621277679395376,
          "rotation": 0,
          "target": "18-bedroom-01-ff"
        },
        {
          "yaw": -0.6092964913735006,
          "pitch": -0.0055819827022638435,
          "rotation": 5.497787143782138,
          "target": "26-bedroom-02-ff"
        },
        {
          "yaw": -0.4834993932764391,
          "pitch": 0.05063450611683251,
          "rotation": 1.5707963267948966,
          "target": "16-hand-wash-area"
        },
        {
          "yaw": 0.7445156762200611,
          "pitch": 0.04125116641478854,
          "rotation": 0,
          "target": "22-bedroom-b03-ff"
        },
        {
          "yaw": 1.132406661523742,
          "pitch": 0.04447011137022727,
          "rotation": 0,
          "target": "17-balcony-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-hand-wash-area",
      "name": "Hand wash area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": -1.005102033750699,
          "pitch": -0.028994029717523517,
          "rotation": 0,
          "target": "27-toilet-b2"
        },
        {
          "yaw": 2.9333762701361623,
          "pitch": -0.009650207099330288,
          "rotation": 0,
          "target": "26-bedroom-02-ff"
        },
        {
          "yaw": 1.0394774454649447,
          "pitch": 0.07183076815568867,
          "rotation": 0,
          "target": "15-living-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-balcony-living",
      "name": "Balcony Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6546950953564288,
          "pitch": -0.40803590306545345,
          "rotation": 4.71238898038469,
          "target": "15-living-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-01-ff",
      "name": "Bedroom 01 FF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5544699148286298,
          "pitch": 0.05095503165973625,
          "rotation": 0,
          "target": "14-first-floor"
        },
        {
          "yaw": -2.350868237647216,
          "pitch": 0.027879683937364064,
          "rotation": 0,
          "target": "19-walk-in-closet-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-walk-in-closet-b1",
      "name": "Walk in Closet B1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.007804466789352,
          "pitch": 0.03309950643388504,
          "rotation": 0,
          "target": "18-bedroom-01-ff"
        },
        {
          "yaw": -1.2205067040132818,
          "pitch": 0.057219238337612666,
          "rotation": 0,
          "target": "20-toilet-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-toilet-b1",
      "name": "Toilet B1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3070338676781148,
          "pitch": 0.0883315703363774,
          "rotation": 0,
          "target": "19-walk-in-closet-b1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-pantry-area",
      "name": "pantry area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.036611105332342575,
        "pitch": 0.008133566866110442,
        "fov": 0.9138126599488581
      },
      "linkHotspots": [
        {
          "yaw": 2.204883229599254,
          "pitch": 0.09912338961932932,
          "rotation": 3.141592653589793,
          "target": "14-first-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-b03-ff",
      "name": "Bedroom B03 FF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6105665914128586,
          "pitch": 0.05078624631275197,
          "rotation": 0,
          "target": "15-living-ff"
        },
        {
          "yaw": -1.9742413258709348,
          "pitch": 0.06661176862211349,
          "rotation": 0,
          "target": "23-walk-in-closet-b3"
        },
        {
          "yaw": 1.0960777627443292,
          "pitch": 0.055767848942796405,
          "rotation": 0,
          "target": "25-balcony-b3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-walk-in-closet-b3",
      "name": "Walk in closet B3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0055022334096364,
          "pitch": 0.01169560740570752,
          "rotation": 0,
          "target": "24-toilet-b3"
        },
        {
          "yaw": -2.826271696591215,
          "pitch": 0.13083528341211803,
          "rotation": 0,
          "target": "22-bedroom-b03-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-toilet-b3",
      "name": "Toilet B3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8981932445106473,
          "pitch": 0.0014557758955593414,
          "rotation": 0,
          "target": "23-walk-in-closet-b3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-balcony-b3",
      "name": "Balcony B3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0374515888455118,
          "pitch": 0.048387825201199774,
          "rotation": 0,
          "target": "22-bedroom-b03-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bedroom-02-ff",
      "name": "Bedroom 02 FF",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.163355373760382,
          "pitch": 0.01644769377637445,
          "rotation": 0,
          "target": "15-living-ff"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-toilet-b2",
      "name": "Toilet B2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8407251824887858,
          "pitch": -0.06503569286804378,
          "rotation": 0,
          "target": "16-hand-wash-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Bait Al Sukoon",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
