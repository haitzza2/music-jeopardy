// Music Jeopardy boards — edit freely. Each clue: {song, artist, yt: <YouTube id>, start: <seconds>}
const BOARDS = [
  {
    "title": "Modern Hits ('15–'25)",
    "categories": [
      {
        "title": "Pop Bangers",
        "clues": [
          {
            "song": "Shape of You",
            "artist": "Ed Sheeran",
            "yt": "JGwWNGJdvx8",
            "start": 52
          },
          {
            "song": "Blinding Lights",
            "artist": "The Weeknd",
            "yt": "4NRXx6U8ABQ",
            "start": 80
          },
          {
            "song": "Levitating",
            "artist": "Dua Lipa ft. DaBaby",
            "yt": "TUVcZfQe-Kw",
            "start": 55
          },
          {
            "song": "As It Was",
            "artist": "Harry Styles",
            "yt": "H5v3kku4y6Q",
            "start": 70
          },
          {
            "song": "Flowers",
            "artist": "Miley Cyrus",
            "yt": "G7KNmW9a75Y",
            "start": 48
          }
        ]
      },
      {
        "title": "Hip-Hop & Rap",
        "clues": [
          {
            "song": "Old Town Road",
            "artist": "Lil Nas X ft. Billy Ray Cyrus",
            "yt": "r7qovpFAGrQ",
            "start": 40
          },
          {
            "song": "God's Plan",
            "artist": "Drake",
            "yt": "xpVfcZ0ZcFM",
            "start": 85
          },
          {
            "song": "HUMBLE.",
            "artist": "Kendrick Lamar",
            "yt": "tvTRZJ-4EyI",
            "start": 55
          },
          {
            "song": "The Box",
            "artist": "Roddy Ricch",
            "yt": "UNZqm3dxd2w",
            "start": 20
          },
          {
            "song": "Not Like Us",
            "artist": "Kendrick Lamar",
            "yt": "T6eK-2OQtew",
            "start": 60
          }
        ]
      },
      {
        "title": "TikTok Era",
        "clues": [
          {
            "song": "Espresso",
            "artist": "Sabrina Carpenter",
            "yt": "eVli-tstM5E",
            "start": 45
          },
          {
            "song": "Say So",
            "artist": "Doja Cat",
            "yt": "pok8H_KF1FA",
            "start": 42
          },
          {
            "song": "good 4 u",
            "artist": "Olivia Rodrigo",
            "yt": "gNi_6U5Pm_o",
            "start": 48
          },
          {
            "song": "MONTERO (Call Me By Your Name)",
            "artist": "Lil Nas X",
            "yt": "6swmTBVI83k",
            "start": 35
          },
          {
            "song": "Good Luck, Babe!",
            "artist": "Chappell Roan",
            "yt": "1RKqOmSkGgM",
            "start": 55
          }
        ]
      },
      {
        "title": "No. 1 Hits",
        "clues": [
          {
            "song": "Shake It Off",
            "artist": "Taylor Swift",
            "yt": "nfWlot6h_JM",
            "start": 45
          },
          {
            "song": "Sorry",
            "artist": "Justin Bieber",
            "yt": "fRh_vgS2dFE",
            "start": 30
          },
          {
            "song": "bad guy",
            "artist": "Billie Eilish",
            "yt": "DyDfgMOUjCI",
            "start": 55
          },
          {
            "song": "Señorita",
            "artist": "Shawn Mendes & Camila Cabello",
            "yt": "Pkh8UtuejGw",
            "start": 30
          },
          {
            "song": "Anti-Hero",
            "artist": "Taylor Swift",
            "yt": "b1kbLwvqugk",
            "start": 70
          }
        ]
      },
      {
        "title": "Duets & Collabs",
        "clues": [
          {
            "song": "See You Again",
            "artist": "Wiz Khalifa ft. Charlie Puth",
            "yt": "RgKAFK5djSk",
            "start": 15
          },
          {
            "song": "Despacito",
            "artist": "Luis Fonsi ft. Daddy Yankee",
            "yt": "kJQP7kiw5Fk",
            "start": 65
          },
          {
            "song": "Closer",
            "artist": "The Chainsmokers ft. Halsey",
            "yt": "PT2_F-1esPk",
            "start": 52
          },
          {
            "song": "Die With A Smile",
            "artist": "Lady Gaga & Bruno Mars",
            "yt": "kPa7bsKwL-c",
            "start": 70
          },
          {
            "song": "Leave the Door Open",
            "artist": "Bruno Mars, Anderson .Paak, Silk Sonic",
            "yt": "adLGHcj_fmA",
            "start": 50
          }
        ]
      }
    ]
  },
  {
    "title": "The 1960s",
    "categories": [
      {
        "title": "British Invasion",
        "clues": [
          {
            "song": "Hey Jude",
            "artist": "The Beatles",
            "yt": "A_MjCqQoLLA",
            "start": 60
          },
          {
            "song": "(I Can't Get No) Satisfaction",
            "artist": "The Rolling Stones",
            "yt": "nrIPxlFzDi0",
            "start": 30
          },
          {
            "song": "You Really Got Me",
            "artist": "The Kinks",
            "yt": "_dHK6hLNTAI",
            "start": 15
          },
          {
            "song": "My Generation",
            "artist": "The Who",
            "yt": "qN5zw04WxCc",
            "start": 20
          },
          {
            "song": "House of the Rising Sun",
            "artist": "The Animals",
            "yt": "N4bFqW_eu2I",
            "start": 30
          }
        ]
      },
      {
        "title": "Motown Magic",
        "clues": [
          {
            "song": "My Girl",
            "artist": "The Temptations",
            "yt": "eepLY8J4E6c",
            "start": 20
          },
          {
            "song": "Stop! In the Name of Love",
            "artist": "The Supremes",
            "yt": "le_P2AtA_EQ",
            "start": 15
          },
          {
            "song": "Ain't No Mountain High Enough",
            "artist": "Marvin Gaye & Tammi Terrell",
            "yt": "IC5PL0XImjw",
            "start": 40
          },
          {
            "song": "I Heard It Through the Grapevine",
            "artist": "Marvin Gaye",
            "yt": "VWG3npfEoHo",
            "start": 30
          },
          {
            "song": "Dancing in the Street",
            "artist": "Martha Reeves & The Vandellas",
            "yt": "GuCBXTfoVq8",
            "start": 25
          }
        ]
      },
      {
        "title": "Folk & Protest",
        "clues": [
          {
            "song": "The Sound of Silence",
            "artist": "Simon & Garfunkel",
            "yt": "GqXyTNKlwTI",
            "start": 10
          },
          {
            "song": "Like a Rolling Stone",
            "artist": "Bob Dylan",
            "yt": "IwOfCgkyEj0",
            "start": 35
          },
          {
            "song": "California Dreamin'",
            "artist": "The Mamas & The Papas",
            "yt": "KOok1WzZbOY",
            "start": 15
          },
          {
            "song": "Fortunate Son",
            "artist": "Creedence Clearwater Revival",
            "yt": "ZWijx_AgPiA",
            "start": 15
          },
          {
            "song": "For What It's Worth",
            "artist": "Buffalo Springfield",
            "yt": "gp5JCrSXkJY",
            "start": 20
          }
        ]
      },
      {
        "title": "Feel-Good Classics",
        "clues": [
          {
            "song": "Stand by Me",
            "artist": "Ben E. King",
            "yt": "dTd2ylacYNU",
            "start": 20
          },
          {
            "song": "Sweet Caroline",
            "artist": "Neil Diamond",
            "yt": "1vhFnTjia_I",
            "start": 55
          },
          {
            "song": "Brown Eyed Girl",
            "artist": "Van Morrison",
            "yt": "TWoFl_0UtjQ",
            "start": 30
          },
          {
            "song": "Respect",
            "artist": "Aretha Franklin",
            "yt": "U0yIf9Tkgu4",
            "start": 15
          },
          {
            "song": "Build Me Up Buttercup",
            "artist": "The Foundations",
            "yt": "klNean7JJdA",
            "start": 10
          }
        ]
      },
      {
        "title": "Psychedelic Rock",
        "clues": [
          {
            "song": "Light My Fire",
            "artist": "The Doors",
            "yt": "BFwo1EynCeI",
            "start": 45
          },
          {
            "song": "Born to Be Wild",
            "artist": "Steppenwolf",
            "yt": "41cFf9N5F-A",
            "start": 25
          },
          {
            "song": "White Rabbit",
            "artist": "Jefferson Airplane",
            "yt": "WANNqr-vcx0",
            "start": 60
          },
          {
            "song": "All Along the Watchtower",
            "artist": "Jimi Hendrix",
            "yt": "f44c3KYYtsg",
            "start": 20
          },
          {
            "song": "Sunshine of Your Love",
            "artist": "Cream",
            "yt": "U67NdlhjZNw",
            "start": 20
          }
        ]
      }
    ]
  },
  {
    "title": "The 1970s",
    "categories": [
      {
        "title": "Disco Fever",
        "clues": [
          {
            "song": "Stayin' Alive",
            "artist": "Bee Gees",
            "yt": "fNFzfwLM72c",
            "start": 15
          },
          {
            "song": "Dancing Queen",
            "artist": "ABBA",
            "yt": "xFrGuyw1V8s",
            "start": 25
          },
          {
            "song": "I Will Survive",
            "artist": "Gloria Gaynor",
            "yt": "6dYWe1c3OyU",
            "start": 50
          },
          {
            "song": "September",
            "artist": "Earth, Wind & Fire",
            "yt": "Gs069dndIYk",
            "start": 15
          },
          {
            "song": "Le Freak",
            "artist": "Chic",
            "yt": "aXgSHL7efKg",
            "start": 15
          }
        ]
      },
      {
        "title": "Rock Anthems",
        "clues": [
          {
            "song": "Bohemian Rhapsody",
            "artist": "Queen",
            "yt": "fJ9rUzIMcZQ",
            "start": 60
          },
          {
            "song": "Hotel California",
            "artist": "Eagles",
            "yt": "dLl4PZtxia8",
            "start": 75
          },
          {
            "song": "Sweet Home Alabama",
            "artist": "Lynyrd Skynyrd",
            "yt": "-p8GXZcdrIk",
            "start": 30
          },
          {
            "song": "Stairway to Heaven",
            "artist": "Led Zeppelin",
            "yt": "QkF3oxziUI4",
            "start": 5
          },
          {
            "song": "Dream On",
            "artist": "Aerosmith",
            "yt": "iJDtukGW79Y",
            "start": 205
          }
        ]
      },
      {
        "title": "Singer-Songwriters",
        "clues": [
          {
            "song": "Imagine",
            "artist": "John Lennon",
            "yt": "Ts0XSyWpMnU",
            "start": 10
          },
          {
            "song": "Rocket Man",
            "artist": "Elton John",
            "yt": "DtVBCG6ThDk",
            "start": 55
          },
          {
            "song": "Piano Man",
            "artist": "Billy Joel",
            "yt": "gxEPV4kolz0",
            "start": 60
          },
          {
            "song": "American Pie",
            "artist": "Don McLean",
            "yt": "Z4q_MZ7CRvI",
            "start": 30
          },
          {
            "song": "I Feel the Earth Move",
            "artist": "Carole King",
            "yt": "xgbvVpLBrOA",
            "start": 10
          }
        ]
      },
      {
        "title": "Funk & Soul",
        "clues": [
          {
            "song": "Superstition",
            "artist": "Stevie Wonder",
            "yt": "7_tmeHCO1IM",
            "start": 45
          },
          {
            "song": "Let's Stay Together",
            "artist": "Al Green",
            "yt": "uSu6tcbMOu0",
            "start": 25
          },
          {
            "song": "Play That Funky Music",
            "artist": "Wild Cherry",
            "yt": "BHcYFxU4fMo",
            "start": 40
          },
          {
            "song": "Brick House",
            "artist": "Commodores",
            "yt": "ZdJmXeod0RE",
            "start": 30
          },
          {
            "song": "Papa Was a Rollin' Stone",
            "artist": "The Temptations",
            "yt": "S5xAtsXb8Vs",
            "start": 110
          }
        ]
      },
      {
        "title": "'70s Radio Gold",
        "clues": [
          {
            "song": "We Will Rock You",
            "artist": "Queen",
            "yt": "-tJYN-eG1zk",
            "start": 5
          },
          {
            "song": "Go Your Own Way",
            "artist": "Fleetwood Mac",
            "yt": "ozl3L9fhKtE",
            "start": 45
          },
          {
            "song": "More Than a Feeling",
            "artist": "Boston",
            "yt": "t4QK8RxCAwo",
            "start": 45
          },
          {
            "song": "December, 1963 (Oh, What a Night)",
            "artist": "Frankie Valli & The Four Seasons",
            "yt": "mTUhnIY3oRM",
            "start": 15
          },
          {
            "song": "Mr. Blue Sky",
            "artist": "Electric Light Orchestra",
            "yt": "aQUlA8Hcv4s",
            "start": 55
          }
        ]
      }
    ]
  },
  {
    "title": "The 1980s",
    "categories": [
      {
        "title": "Pop Icons",
        "clues": [
          {
            "song": "Billie Jean",
            "artist": "Michael Jackson",
            "yt": "Zi_XLOBDo_Y",
            "start": 29
          },
          {
            "song": "Girls Just Want to Have Fun",
            "artist": "Cyndi Lauper",
            "yt": "PIb6AZdTr-A",
            "start": 55
          },
          {
            "song": "Wake Me Up Before You Go-Go",
            "artist": "Wham!",
            "yt": "pIgZ7gMze7A",
            "start": 45
          },
          {
            "song": "Like a Prayer",
            "artist": "Madonna",
            "yt": "79fzeNUqQbQ",
            "start": 55
          },
          {
            "song": "When Doves Cry",
            "artist": "Prince",
            "yt": "UG3VcCAlUgE",
            "start": 70
          }
        ]
      },
      {
        "title": "Rock & Hair Metal",
        "clues": [
          {
            "song": "Livin' on a Prayer",
            "artist": "Bon Jovi",
            "yt": "lDK9QqIzhwk",
            "start": 75
          },
          {
            "song": "Sweet Child o' Mine",
            "artist": "Guns N' Roses",
            "yt": "1w7OgIMMRc4",
            "start": 60
          },
          {
            "song": "Pour Some Sugar on Me",
            "artist": "Def Leppard",
            "yt": "0UIB9Y4OFPs",
            "start": 75
          },
          {
            "song": "Jump",
            "artist": "Van Halen",
            "yt": "SwYN7mTi6HM",
            "start": 60
          },
          {
            "song": "Here I Go Again",
            "artist": "Whitesnake",
            "yt": "WyF8RHM1OCg",
            "start": 65
          }
        ]
      },
      {
        "title": "Synth & New Wave",
        "clues": [
          {
            "song": "Take On Me",
            "artist": "a-ha",
            "yt": "djV11Xbc914",
            "start": 52
          },
          {
            "song": "Sweet Dreams (Are Made of This)",
            "artist": "Eurythmics",
            "yt": "qeMFqkcPYcg",
            "start": 30
          },
          {
            "song": "Tainted Love",
            "artist": "Soft Cell",
            "yt": "XZVpR3Pk-r8",
            "start": 25
          },
          {
            "song": "Everybody Wants to Rule the World",
            "artist": "Tears for Fears",
            "yt": "aGCdLKXNF3w",
            "start": 55
          },
          {
            "song": "Don't You Want Me",
            "artist": "The Human League",
            "yt": "uPudE8nDog0",
            "start": 40
          }
        ]
      },
      {
        "title": "Movie Hits",
        "clues": [
          {
            "song": "Eye of the Tiger",
            "artist": "Survivor",
            "yt": "btPJPFnesV4",
            "start": 70
          },
          {
            "song": "Footloose",
            "artist": "Kenny Loggins",
            "yt": "ltrMfT4Qz5Y",
            "start": 40
          },
          {
            "song": "Ghostbusters",
            "artist": "Ray Parker Jr.",
            "yt": "Fe93CLbHjxQ",
            "start": 35
          },
          {
            "song": "Danger Zone",
            "artist": "Kenny Loggins",
            "yt": "siwpn14IE7E",
            "start": 55
          },
          {
            "song": "Don't You (Forget About Me)",
            "artist": "Simple Minds",
            "yt": "CdqoNKCCt7A",
            "start": 55
          }
        ]
      },
      {
        "title": "'80s Party",
        "clues": [
          {
            "song": "Never Gonna Give You Up",
            "artist": "Rick Astley",
            "yt": "dQw4w9WgXcQ",
            "start": 43
          },
          {
            "song": "Africa",
            "artist": "Toto",
            "yt": "FTQbiNvZqaY",
            "start": 85
          },
          {
            "song": "Come On Eileen",
            "artist": "Dexys Midnight Runners",
            "yt": "6BODDyZRF6A",
            "start": 65
          },
          {
            "song": "Walking on Sunshine",
            "artist": "Katrina & The Waves",
            "yt": "iPUmE-tne5U",
            "start": 35
          },
          {
            "song": "99 Luftballons",
            "artist": "Nena",
            "yt": "Fpu5a0Bl8eY",
            "start": 40
          }
        ]
      }
    ]
  },
  {
    "title": "The 1990s",
    "categories": [
      {
        "title": "Grunge & Alternative",
        "clues": [
          {
            "song": "Smells Like Teen Spirit",
            "artist": "Nirvana",
            "yt": "hTWKbfoikeg",
            "start": 63
          },
          {
            "song": "Under the Bridge",
            "artist": "Red Hot Chili Peppers",
            "yt": "GLvohMXgcBo",
            "start": 65
          },
          {
            "song": "Losing My Religion",
            "artist": "R.E.M.",
            "yt": "xwtdhWltSIg",
            "start": 30
          },
          {
            "song": "Zombie",
            "artist": "The Cranberries",
            "yt": "6Ejga4kJUts",
            "start": 60
          },
          {
            "song": "Black Hole Sun",
            "artist": "Soundgarden",
            "yt": "3mbBbFH9fAg",
            "start": 65
          }
        ]
      },
      {
        "title": "Boy Bands & Pop",
        "clues": [
          {
            "song": "I Want It That Way",
            "artist": "Backstreet Boys",
            "yt": "4fndeDfaWCg",
            "start": 45
          },
          {
            "song": "...Baby One More Time",
            "artist": "Britney Spears",
            "yt": "C-u5WLJ9Yk4",
            "start": 30
          },
          {
            "song": "Wannabe",
            "artist": "Spice Girls",
            "yt": "gJLIiF15wjQ",
            "start": 30
          },
          {
            "song": "Tearin' Up My Heart",
            "artist": "*NSYNC",
            "yt": "_ZcmuKsyvzg",
            "start": 40
          },
          {
            "song": "MMMBop",
            "artist": "Hanson",
            "yt": "NHozn0YXAeE",
            "start": 45
          }
        ]
      },
      {
        "title": "Hip-Hop",
        "clues": [
          {
            "song": "Gangsta's Paradise",
            "artist": "Coolio ft. L.V.",
            "yt": "fPO76Jlnz6c",
            "start": 40
          },
          {
            "song": "Juicy",
            "artist": "The Notorious B.I.G.",
            "yt": "_JZom_gVfuw",
            "start": 40
          },
          {
            "song": "California Love",
            "artist": "2Pac ft. Dr. Dre",
            "yt": "omfz62qu_Bc",
            "start": 60
          },
          {
            "song": "Jump",
            "artist": "Kris Kross",
            "yt": "010KyIQjkTk",
            "start": 30
          },
          {
            "song": "Still D.R.E.",
            "artist": "Dr. Dre ft. Snoop Dogg",
            "yt": "_CL6n0FJZpk",
            "start": 30
          }
        ]
      },
      {
        "title": "R&B Jams",
        "clues": [
          {
            "song": "I Will Always Love You",
            "artist": "Whitney Houston",
            "yt": "3JWTaaS7LdU",
            "start": 55
          },
          {
            "song": "No Scrubs",
            "artist": "TLC",
            "yt": "FrLequ6dUdM",
            "start": 30
          },
          {
            "song": "End of the Road",
            "artist": "Boyz II Men",
            "yt": "zDKO6XYXioc",
            "start": 55
          },
          {
            "song": "Say My Name",
            "artist": "Destiny's Child",
            "yt": "sQgd6MccwZc",
            "start": 50
          },
          {
            "song": "Doo Wop (That Thing)",
            "artist": "Lauryn Hill",
            "yt": "T6QKqFPRZSA",
            "start": 55
          }
        ]
      },
      {
        "title": "'90s Radio",
        "clues": [
          {
            "song": "Wonderwall",
            "artist": "Oasis",
            "yt": "bx1Bh8ZvH84",
            "start": 25
          },
          {
            "song": "Macarena",
            "artist": "Los Del Rio",
            "yt": "zWaymcVmJ-A",
            "start": 20
          },
          {
            "song": "Torn",
            "artist": "Natalie Imbruglia",
            "yt": "VV1XWJN3nJo",
            "start": 45
          },
          {
            "song": "Iris",
            "artist": "Goo Goo Dolls",
            "yt": "NdYWuo9OFAw",
            "start": 60
          },
          {
            "song": "Barbie Girl",
            "artist": "Aqua",
            "yt": "ZyhrYis509A",
            "start": 30
          }
        ]
      }
    ]
  },
  {
    "title": "The 2000s",
    "categories": [
      {
        "title": "Pop Stars",
        "clues": [
          {
            "song": "Toxic",
            "artist": "Britney Spears",
            "yt": "LOZuxwVk7TU",
            "start": 45
          },
          {
            "song": "Since U Been Gone",
            "artist": "Kelly Clarkson",
            "yt": "eRlsE9bD7HM",
            "start": 50
          },
          {
            "song": "Hollaback Girl",
            "artist": "Gwen Stefani",
            "yt": "Kgjkth6BRRY",
            "start": 30
          },
          {
            "song": "Umbrella",
            "artist": "Rihanna ft. Jay-Z",
            "yt": "CvBfHwUxHIk",
            "start": 57
          },
          {
            "song": "Poker Face",
            "artist": "Lady Gaga",
            "yt": "bESGLojNYSo",
            "start": 55
          }
        ]
      },
      {
        "title": "Hip-Hop & R&B",
        "clues": [
          {
            "song": "In Da Club",
            "artist": "50 Cent",
            "yt": "5qm8PH4xAss",
            "start": 30
          },
          {
            "song": "Yeah!",
            "artist": "Usher ft. Lil Jon, Ludacris",
            "yt": "GxBSyx85Kp8",
            "start": 40
          },
          {
            "song": "Crazy in Love",
            "artist": "Beyoncé ft. Jay-Z",
            "yt": "ViwtNLUqkMY",
            "start": 35
          },
          {
            "song": "Gold Digger",
            "artist": "Kanye West ft. Jamie Foxx",
            "yt": "6vwNcNOTVzY",
            "start": 30
          },
          {
            "song": "Hot in Herre",
            "artist": "Nelly",
            "yt": "GeZZr_p6vB8",
            "start": 40
          }
        ]
      },
      {
        "title": "Rock & Emo",
        "clues": [
          {
            "song": "Mr. Brightside",
            "artist": "The Killers",
            "yt": "b2pzSFkNFZ0",
            "start": 40
          },
          {
            "song": "In the End",
            "artist": "Linkin Park",
            "yt": "eVTXPUF4Oz4",
            "start": 35
          },
          {
            "song": "Seven Nation Army",
            "artist": "The White Stripes",
            "yt": "0J2QdDbelmY",
            "start": 25
          },
          {
            "song": "Boulevard of Broken Dreams",
            "artist": "Green Day",
            "yt": "Soa3gO7tL-c",
            "start": 55
          },
          {
            "song": "Welcome to the Black Parade",
            "artist": "My Chemical Romance",
            "yt": "RRKJiM9Njr8",
            "start": 95
          }
        ]
      },
      {
        "title": "Dance Floor",
        "clues": [
          {
            "song": "Hey Ya!",
            "artist": "OutKast",
            "yt": "PWgvGjAhvIw",
            "start": 48
          },
          {
            "song": "SexyBack",
            "artist": "Justin Timberlake",
            "yt": "3gOHvDP_vCs",
            "start": 25
          },
          {
            "song": "Hips Don't Lie",
            "artist": "Shakira ft. Wyclef Jean",
            "yt": "DUT5rEU6pqM",
            "start": 55
          },
          {
            "song": "Low",
            "artist": "Flo Rida ft. T-Pain",
            "yt": "U2waT9TxPU0",
            "start": 30
          },
          {
            "song": "Promiscuous",
            "artist": "Nelly Furtado ft. Timbaland",
            "yt": "0J3vgcE5i2o",
            "start": 40
          }
        ]
      },
      {
        "title": "2000s Anthems",
        "clues": [
          {
            "song": "Lose Yourself",
            "artist": "Eminem",
            "yt": "_Yhyp-_hX2s",
            "start": 55
          },
          {
            "song": "Viva la Vida",
            "artist": "Coldplay",
            "yt": "dvgZkm1xWPE",
            "start": 55
          },
          {
            "song": "I Gotta Feeling",
            "artist": "The Black Eyed Peas",
            "yt": "uSD4vsh1zDA",
            "start": 30
          },
          {
            "song": "Apologize",
            "artist": "Timbaland ft. OneRepublic",
            "yt": "ZSM3w1v-A_Y",
            "start": 50
          },
          {
            "song": "Chasing Cars",
            "artist": "Snow Patrol",
            "yt": "GemKqzILV4w",
            "start": 55
          }
        ]
      }
    ]
  },
  {
    "title": "The 2010s",
    "categories": [
      {
        "title": "Pop Smashes",
        "clues": [
          {
            "song": "Call Me Maybe",
            "artist": "Carly Rae Jepsen",
            "yt": "fWNaR-rxAic",
            "start": 40
          },
          {
            "song": "Roar",
            "artist": "Katy Perry",
            "yt": "CevxZvSJLk8",
            "start": 55
          },
          {
            "song": "Happy",
            "artist": "Pharrell Williams",
            "yt": "ZbZSe6N_BXs",
            "start": 30
          },
          {
            "song": "Uptown Funk",
            "artist": "Mark Ronson ft. Bruno Mars",
            "yt": "OPf0YbXqDm0",
            "start": 65
          },
          {
            "song": "Rolling in the Deep",
            "artist": "Adele",
            "yt": "rYEDA3JcQqw",
            "start": 60
          }
        ]
      },
      {
        "title": "EDM Era",
        "clues": [
          {
            "song": "Wake Me Up",
            "artist": "Avicii",
            "yt": "IcrbM1l_BoI",
            "start": 55
          },
          {
            "song": "Titanium",
            "artist": "David Guetta ft. Sia",
            "yt": "JRfuAukYTKg",
            "start": 60
          },
          {
            "song": "Lean On",
            "artist": "Major Lazer ft. MØ, DJ Snake",
            "yt": "YqeW9_5kURI",
            "start": 45
          },
          {
            "song": "Animals",
            "artist": "Martin Garrix",
            "yt": "gCYcHz2k5x0",
            "start": 60
          },
          {
            "song": "Turn Down for What",
            "artist": "DJ Snake & Lil Jon",
            "yt": "HMUDVMiITOU",
            "start": 30
          }
        ]
      },
      {
        "title": "Hip-Hop",
        "clues": [
          {
            "song": "Hotline Bling",
            "artist": "Drake",
            "yt": "uxpDa-c-4Mc",
            "start": 45
          },
          {
            "song": "Thrift Shop",
            "artist": "Macklemore & Ryan Lewis",
            "yt": "QK8mJJJvaes",
            "start": 40
          },
          {
            "song": "Sicko Mode",
            "artist": "Travis Scott ft. Drake",
            "yt": "6ONRf7h3Mdk",
            "start": 65
          },
          {
            "song": "Bodak Yellow",
            "artist": "Cardi B",
            "yt": "PEGccV-NOm8",
            "start": 40
          },
          {
            "song": "Sunflower",
            "artist": "Post Malone & Swae Lee",
            "yt": "ApXoWvfEYVU",
            "start": 30
          }
        ]
      },
      {
        "title": "Indie & Alt",
        "clues": [
          {
            "song": "Radioactive",
            "artist": "Imagine Dragons",
            "yt": "ktvTqknDobU",
            "start": 55
          },
          {
            "song": "Little Talks",
            "artist": "Of Monsters and Men",
            "yt": "ghb6eDopW8I",
            "start": 55
          },
          {
            "song": "Ho Hey",
            "artist": "The Lumineers",
            "yt": "zvCBSSwgtg4",
            "start": 35
          },
          {
            "song": "Pumped Up Kicks",
            "artist": "Foster the People",
            "yt": "SDTZ7iX4vTQ",
            "start": 55
          },
          {
            "song": "Take Me to Church",
            "artist": "Hozier",
            "yt": "PVjiKRfKpPI",
            "start": 60
          }
        ]
      },
      {
        "title": "Chart Royalty",
        "clues": [
          {
            "song": "Blank Space",
            "artist": "Taylor Swift",
            "yt": "e-ORhEE9VVg",
            "start": 55
          },
          {
            "song": "Thinking Out Loud",
            "artist": "Ed Sheeran",
            "yt": "lLt9roH45gc",
            "start": 55
          },
          {
            "song": "Royals",
            "artist": "Lorde",
            "yt": "LFasFq4GJYM",
            "start": 45
          },
          {
            "song": "Counting Stars",
            "artist": "OneRepublic",
            "yt": "hT_nvWreIhg",
            "start": 45
          },
          {
            "song": "Havana",
            "artist": "Camila Cabello ft. Young Thug",
            "yt": "BQ0mxQXmLsk",
            "start": 40
          }
        ]
      }
    ]
  },
  {
    "title": "Rock Legends",
    "categories": [
      {
        "title": "'60s Rock",
        "clues": [
          {
            "song": "Twist and Shout",
            "artist": "The Beatles",
            "yt": "oLIYPdZeYeU",
            "start": 10
          },
          {
            "song": "Paint It, Black",
            "artist": "The Rolling Stones",
            "yt": "O4irXQhgMqg",
            "start": 30
          },
          {
            "song": "Good Vibrations",
            "artist": "The Beach Boys",
            "yt": "apBWI6xrbLY",
            "start": 25
          },
          {
            "song": "Mr. Tambourine Man",
            "artist": "The Byrds",
            "yt": "PnstCrL1_e0",
            "start": 15
          },
          {
            "song": "Time of the Season",
            "artist": "The Zombies",
            "yt": "MgrJyqT9Uyw",
            "start": 30
          }
        ]
      },
      {
        "title": "'70s Rock",
        "clues": [
          {
            "song": "Highway to Hell",
            "artist": "AC/DC",
            "yt": "l482T0yNkeo",
            "start": 45
          },
          {
            "song": "Smoke on the Water",
            "artist": "Deep Purple",
            "yt": "Q2FzZSBD5LE",
            "start": 10
          },
          {
            "song": "Another Brick in the Wall, Part 2",
            "artist": "Pink Floyd",
            "yt": "HrxX9TBj2zY",
            "start": 25
          },
          {
            "song": "Carry On Wayward Son",
            "artist": "Kansas",
            "yt": "P5ZJui3aPoQ",
            "start": 10
          },
          {
            "song": "Paranoid",
            "artist": "Black Sabbath",
            "yt": "0qanF-91aJo",
            "start": 15
          }
        ]
      },
      {
        "title": "'80s Rock",
        "clues": [
          {
            "song": "Don't Stop Believin'",
            "artist": "Journey",
            "yt": "x3idGV-7kSQ",
            "start": 55
          },
          {
            "song": "Back in Black",
            "artist": "AC/DC",
            "yt": "pAgnJDJN4VA",
            "start": 25
          },
          {
            "song": "We're Not Gonna Take It",
            "artist": "Twisted Sister",
            "yt": "4xmckWVPRaI",
            "start": 40
          },
          {
            "song": "The Final Countdown",
            "artist": "Europe",
            "yt": "9jK-NcRmVcw",
            "start": 60
          },
          {
            "song": "Kickstart My Heart",
            "artist": "Mötley Crüe",
            "yt": "CmXWkMlKFkI",
            "start": 45
          }
        ]
      },
      {
        "title": "'90s Rock",
        "clues": [
          {
            "song": "Basket Case",
            "artist": "Green Day",
            "yt": "NUTGr5t3MoY",
            "start": 30
          },
          {
            "song": "Buddy Holly",
            "artist": "Weezer",
            "yt": "kemivUKb4f4",
            "start": 40
          },
          {
            "song": "Enter Sandman",
            "artist": "Metallica",
            "yt": "CD-E-LDc384",
            "start": 90
          },
          {
            "song": "Creep",
            "artist": "Radiohead",
            "yt": "XFkzRNyygfk",
            "start": 55
          },
          {
            "song": "Killing in the Name",
            "artist": "Rage Against the Machine",
            "yt": "bWXazVhlyxQ",
            "start": 25
          }
        ]
      },
      {
        "title": "2000s+ Rock",
        "clues": [
          {
            "song": "Learn to Fly",
            "artist": "Foo Fighters",
            "yt": "1VQ_3sBZEm0",
            "start": 50
          },
          {
            "song": "Use Somebody",
            "artist": "Kings of Leon",
            "yt": "gnhXHvRoUd0",
            "start": 40
          },
          {
            "song": "Lonely Boy",
            "artist": "The Black Keys",
            "yt": "a_426RiwST8",
            "start": 25
          },
          {
            "song": "Do I Wanna Know?",
            "artist": "Arctic Monkeys",
            "yt": "bpOSxM0rNPM",
            "start": 55
          },
          {
            "song": "No One Knows",
            "artist": "Queens of the Stone Age",
            "yt": "s88r_q7oufE",
            "start": 40
          }
        ]
      }
    ]
  },
  {
    "title": "Hip-Hop & R&B",
    "categories": [
      {
        "title": "Old School",
        "clues": [
          {
            "song": "Rapper's Delight",
            "artist": "Sugarhill Gang",
            "yt": "mcCK99wHrk0",
            "start": 40
          },
          {
            "song": "It's Tricky",
            "artist": "Run-DMC",
            "yt": "l-O5IHVhWj0",
            "start": 20
          },
          {
            "song": "The Message",
            "artist": "Grandmaster Flash & The Furious Five",
            "yt": "gYMkEMCHtJ4",
            "start": 55
          },
          {
            "song": "(You Gotta) Fight for Your Right (To Party)",
            "artist": "Beastie Boys",
            "yt": "eBShN8qT4lk",
            "start": 55
          },
          {
            "song": "Push It",
            "artist": "Salt-N-Pepa",
            "yt": "vCadcBR95oU",
            "start": 30
          }
        ]
      },
      {
        "title": "The '90s",
        "clues": [
          {
            "song": "U Can't Touch This",
            "artist": "MC Hammer",
            "yt": "otCpCn0l4Wo",
            "start": 8
          },
          {
            "song": "Ice Ice Baby",
            "artist": "Vanilla Ice",
            "yt": "rog8ou-ZepE",
            "start": 12
          },
          {
            "song": "Jump Around",
            "artist": "House of Pain",
            "yt": "XhzpxjuwZy0",
            "start": 20
          },
          {
            "song": "Hip Hop Hooray",
            "artist": "Naughty by Nature",
            "yt": "hgdw3BsUfFE",
            "start": 40
          },
          {
            "song": "C.R.E.A.M.",
            "artist": "Wu-Tang Clan",
            "yt": "PBwAxmrE194",
            "start": 45
          }
        ]
      },
      {
        "title": "2000s Bling",
        "clues": [
          {
            "song": "Ms. Jackson",
            "artist": "OutKast",
            "yt": "MYxAiK6VnXw",
            "start": 45
          },
          {
            "song": "Work It",
            "artist": "Missy Elliott",
            "yt": "cjIvu7e6Wq8",
            "start": 30
          },
          {
            "song": "Stronger",
            "artist": "Kanye West",
            "yt": "PsO6ZnUZI0g",
            "start": 45
          },
          {
            "song": "Whatever You Like",
            "artist": "T.I.",
            "yt": "Kgdr2uytpDI",
            "start": 30
          },
          {
            "song": "Empire State of Mind",
            "artist": "Jay-Z & Alicia Keys",
            "yt": "vk6014HuxcE",
            "start": 60
          }
        ]
      },
      {
        "title": "2010s Heat",
        "clues": [
          {
            "song": "Black and Yellow",
            "artist": "Wiz Khalifa",
            "yt": "UePtoxDhJSw",
            "start": 45
          },
          {
            "song": "Fancy",
            "artist": "Iggy Azalea ft. Charli XCX",
            "yt": "O-zpOMYRi0w",
            "start": 40
          },
          {
            "song": "Trap Queen",
            "artist": "Fetty Wap",
            "yt": "i_kF4zLNKio",
            "start": 45
          },
          {
            "song": "Panda",
            "artist": "Desiigner",
            "yt": "E5ONTXHS2mM",
            "start": 30
          },
          {
            "song": "This Is America",
            "artist": "Childish Gambino",
            "yt": "VYOjWnS4cMY",
            "start": 65
          }
        ]
      },
      {
        "title": "R&B Smooth",
        "clues": [
          {
            "song": "U Got It Bad",
            "artist": "Usher",
            "yt": "o3IWTfcks4k",
            "start": 55
          },
          {
            "song": "No One",
            "artist": "Alicia Keys",
            "yt": "rywUS-ohqeE",
            "start": 45
          },
          {
            "song": "Let Me Love You",
            "artist": "Mario",
            "yt": "H64QG4UsrGI",
            "start": 45
          },
          {
            "song": "So Sick",
            "artist": "Ne-Yo",
            "yt": "IxszlJppRQI",
            "start": 40
          },
          {
            "song": "The Boy Is Mine",
            "artist": "Brandy & Monica",
            "yt": "qSIOp_K5GMw",
            "start": 45
          }
        ]
      }
    ]
  },
  {
    "title": "One-Hit Wonders",
    "categories": [
      {
        "title": "'60s & '70s",
        "clues": [
          {
            "song": "Spirit in the Sky",
            "artist": "Norman Greenbaum",
            "yt": "vRFo72wuU6w",
            "start": 30
          },
          {
            "song": "Hooked on a Feeling",
            "artist": "Blue Swede",
            "yt": "l6DepmNwbn8",
            "start": 15
          },
          {
            "song": "Kung Fu Fighting",
            "artist": "Carl Douglas",
            "yt": "Bt4D8oA3mxU",
            "start": 15
          },
          {
            "song": "My Sharona",
            "artist": "The Knack",
            "yt": "bbr60I0u2Ng",
            "start": 25
          },
          {
            "song": "Brandy (You're a Fine Girl)",
            "artist": "Looking Glass",
            "yt": "GI1GeauAzcg",
            "start": 30
          }
        ]
      },
      {
        "title": "The '80s",
        "clues": [
          {
            "song": "Don't Worry Be Happy",
            "artist": "Bobby McFerrin",
            "yt": "d-diB65scQU",
            "start": 30
          },
          {
            "song": "Mickey",
            "artist": "Toni Basil",
            "yt": "3E-Zrg9CB_Q",
            "start": 30
          },
          {
            "song": "I Ran (So Far Away)",
            "artist": "A Flock of Seagulls",
            "yt": "iIpfWORQWhU",
            "start": 55
          },
          {
            "song": "The Safety Dance",
            "artist": "Men Without Hats",
            "yt": "nM4okRvCg2g",
            "start": 30
          },
          {
            "song": "Somebody's Watching Me",
            "artist": "Rockwell",
            "yt": "7YvAYIJSSZY",
            "start": 55
          }
        ]
      },
      {
        "title": "The '90s",
        "clues": [
          {
            "song": "Tubthumping",
            "artist": "Chumbawamba",
            "yt": "2H5uWRjFsGc",
            "start": 30
          },
          {
            "song": "What's Up?",
            "artist": "4 Non Blondes",
            "yt": "6NXnxTNIWkc",
            "start": 73
          },
          {
            "song": "Breakfast at Tiffany's",
            "artist": "Deep Blue Something",
            "yt": "1ClCpfeIELw",
            "start": 45
          },
          {
            "song": "Closing Time",
            "artist": "Semisonic",
            "yt": "xGytDsqkQY8",
            "start": 35
          },
          {
            "song": "Save Tonight",
            "artist": "Eagle-Eye Cherry",
            "yt": "Nntd2fgMUYw",
            "start": 45
          }
        ]
      },
      {
        "title": "The 2000s",
        "clues": [
          {
            "song": "A Thousand Miles",
            "artist": "Vanessa Carlton",
            "yt": "Cwkej79U3ek",
            "start": 30
          },
          {
            "song": "You're Beautiful",
            "artist": "James Blunt",
            "yt": "oofSnsGkops",
            "start": 45
          },
          {
            "song": "Bad Day",
            "artist": "Daniel Powter",
            "yt": "gH476CxJxfg",
            "start": 40
          },
          {
            "song": "Who Let the Dogs Out",
            "artist": "Baha Men",
            "yt": "ojULkWEUsPs",
            "start": 15
          },
          {
            "song": "Crazy",
            "artist": "Gnarls Barkley",
            "yt": "-N4jf6rtyuw",
            "start": 30
          }
        ]
      },
      {
        "title": "The 2010s",
        "clues": [
          {
            "song": "Gangnam Style",
            "artist": "PSY",
            "yt": "9bZkp7q19f0",
            "start": 68
          },
          {
            "song": "Rude",
            "artist": "MAGIC!",
            "yt": "PIh2xe4jnpk",
            "start": 45
          },
          {
            "song": "Best Day of My Life",
            "artist": "American Authors",
            "yt": "Y66j_BUCBMY",
            "start": 40
          },
          {
            "song": "Somebody That I Used to Know",
            "artist": "Gotye ft. Kimbra",
            "yt": "8UVNT4wvIGY",
            "start": 85
          },
          {
            "song": "Let Her Go",
            "artist": "Passenger",
            "yt": "RBumgq5yVrA",
            "start": 75
          }
        ]
      }
    ]
  },
  {
    "title": "Movies & TV",
    "categories": [
      {
        "title": "Movie Anthems",
        "clues": [
          {
            "song": "My Heart Will Go On",
            "artist": "Celine Dion",
            "yt": "9bFHsd3o1w0",
            "start": 55
          },
          {
            "song": "(Everything I Do) I Do It for You",
            "artist": "Bryan Adams",
            "yt": "Y0pdQU87dc8",
            "start": 55
          },
          {
            "song": "Take My Breath Away",
            "artist": "Berlin",
            "yt": "Bx51eegLTY8",
            "start": 55
          },
          {
            "song": "(I've Had) The Time of My Life",
            "artist": "Bill Medley & Jennifer Warnes",
            "yt": "4BQLE_RrTSU",
            "start": 60
          },
          {
            "song": "Flashdance... What a Feeling",
            "artist": "Irene Cara",
            "yt": "ILWSp0m9G2U",
            "start": 60
          }
        ]
      },
      {
        "title": "Disney & Animation",
        "clues": [
          {
            "song": "Let It Go",
            "artist": "Idina Menzel",
            "yt": "YVVTZgwYwVo",
            "start": 60
          },
          {
            "song": "Can You Feel the Love Tonight",
            "artist": "Elton John",
            "yt": "KjgWWjkNbhU",
            "start": 55
          },
          {
            "song": "A Whole New World",
            "artist": "Peabo Bryson & Regina Belle",
            "yt": "PmvT7B3u7II",
            "start": 30
          },
          {
            "song": "We Don't Talk About Bruno",
            "artist": "Encanto Cast",
            "yt": "bvWRMAU6V-c",
            "start": 30
          },
          {
            "song": "You'll Be in My Heart",
            "artist": "Phil Collins",
            "yt": "w0ZHlp6atUQ",
            "start": 40
          }
        ]
      },
      {
        "title": "TV Themes",
        "clues": [
          {
            "song": "I'll Be There for You (Friends)",
            "artist": "The Rembrandts",
            "yt": "S8PNXgLhkT0",
            "start": 10
          },
          {
            "song": "The Fresh Prince of Bel-Air Theme",
            "artist": "Will Smith",
            "yt": "1nCqRmx3Dnw",
            "start": 5
          },
          {
            "song": "Where Everybody Knows Your Name (Cheers)",
            "artist": "Gary Portnoy",
            "yt": "h-mi0r0LpXo",
            "start": 25
          },
          {
            "song": "Thank You for Being a Friend (Golden Girls)",
            "artist": "Andrew Gold",
            "yt": "23GrEhLUF_k",
            "start": 10
          },
          {
            "song": "Game of Thrones Main Theme",
            "artist": "Ramin Djawadi",
            "yt": "uXZd_W5B7N0",
            "start": 15
          }
        ]
      },
      {
        "title": "Soundtrack Bangers",
        "clues": [
          {
            "song": "All Star",
            "artist": "Smash Mouth",
            "yt": "L_jWHffIx5E",
            "start": 45
          },
          {
            "song": "Skyfall",
            "artist": "Adele",
            "yt": "q-gLRp5bSpw",
            "start": 65
          },
          {
            "song": "Shallow",
            "artist": "Lady Gaga & Bradley Cooper",
            "yt": "bo_efYhYU2A",
            "start": 60
          },
          {
            "song": "Paper Planes",
            "artist": "M.I.A.",
            "yt": "ewRjZoRtu0Y",
            "start": 40
          },
          {
            "song": "Kiss from a Rose",
            "artist": "Seal",
            "yt": "hDd2G_V1rzc",
            "start": 55
          }
        ]
      },
      {
        "title": "Musicals",
        "clues": [
          {
            "song": "You're the One That I Want",
            "artist": "John Travolta & Olivia Newton-John",
            "yt": "RYk0_U7kf3g",
            "start": 15
          },
          {
            "song": "Mamma Mia",
            "artist": "ABBA",
            "yt": "unfzfe8f9NI",
            "start": 15
          },
          {
            "song": "This Is Me",
            "artist": "Keala Settle",
            "yt": "CjxugyZCfuw",
            "start": 60
          },
          {
            "song": "Another Day of Sun",
            "artist": "La La Land Cast",
            "yt": "7CVfTd-_qbc",
            "start": 40
          },
          {
            "song": "Time Warp",
            "artist": "Rocky Horror Cast",
            "yt": "u1O2-oFmWXM",
            "start": 60
          }
        ]
      }
    ]
  }
];
