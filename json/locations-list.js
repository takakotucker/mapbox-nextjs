
const locations = {
  'malaysia': {
    place_name: 'Malaysia',
    types: 'food',
    summary: 'beautiful beaches, Nasi goreng for breakfast is amazing!',
    date: 853027200,
    bearing: 20,
    center: [113.265151, 2.720558],
    zoom: 4,
    pitch: 20
  },
  'thailand': {
    place_name: 'Thailand',
    types: 'food',
    summary: 'Thai massage then lovely seafood and Tom yum kun in Bangkok',
    date: 853027200,
    bearing: 20,
    center: [101.017437, 15.127333],
    zoom: 4,
    pitch: 20
  },
  'finland': {
    place_name: 'Finland',
    types: 'view',
    summary: 'Lovely cafes and restaurants, wonderful atmosphere in the winter with street heater',
    date: 1041897600,
    bearing: 20,
    center: [26.199539, 62.777753],
    zoom: 4,
    pitch: 20
  },
  'southafrica': {
    place_name: 'South Africa',
    types: 'activity',
    summary: 'Stayed in a yurt in safari park saw lovely elephants, interesting activities available.',
    date: 821232000,
    bearing: 20,
    center: [23.91371, -28.378272],
    zoom: 4,
    pitch: 20
  },
  'italy': {
    place_name: 'Italy',
    types: 'food',
    summary: 'I found a wonderful pizza restaurant and a lovely shop that sells Japanese import homewear in Rome',
    date: 1550620800,
    bearing: 20,
    center: [12.646361, 42.504153],
    zoom: 4,
    pitch: 20
  },
  'france': {
    place_name: 'France',
    types: 'view',
    summary: 'I went to a hairdresser in Paris and changed hair colour to red!',
    date: 1041984000,
    bearing: 20,
    center: [2.618786, 47.824904],
    zoom: 4,
    pitch: 20
  },
  'taiwan': {
    place_name: 'Taiwan',
    types: 'food',
    summary: 'Dian Shui Lou in Taiwan does great Shoronpo',
    date: 915926400,
    bearing: 20,
    center: [120.930229, 23.777977],
    zoom: 4,
    pitch: 20
  },
  'singapore': {
    place_name: 'Singapore',
    types: 'food',
    summary: 'Just a nice place to go out and have food - its not my most favourite place....',
    date: 915926400,
    bearing: 20,
    center: [103.808052, 1.351616],
    zoom: 4,
    pitch: 20
  },
  'vietnam': {
    place_name: 'Vietnam',
    types: 'food',
    summary: 'Lovely vietnamese restaurants, ate frogs for the first time.... Interesting view from a boat in mekong river',
    date: 852508800,
    bearing: 20,
    center: [108.339537, 14.315424],
    zoom: 4,
    pitch: 20
  },
  'southkorea': {
    place_name: 'South Korea',
    types: 'food',
    summary: 'Fantastic selection of Korean food, my favourites are pajeon and bibimbab',
    date: 852508800,
    bearing: 20,
    center: [128.168944, 36.536236],
    zoom: 4,
    pitch: 20
  },
  'ireland': {
    place_name: 'Ireland',
    types: 'view',
    summary: 'Absolutely amazing view despite the usual wet weather',
    date: 978739200,
    bearing: 20,
    center: [-7.99, 31.63],
    zoom: 4,
    pitch: 20
  },
  'marrakesh': {
    place_name: 'Marrakesh',
    types: 'activity',
    summary: 'Interesting cultural experience in Marrakech-Medina and seafood is great',
    date: 852508800,
    bearing: 20,
    center: [-7.99, 31.63],
    zoom: 4,
    pitch: 20
  },
  'beijing': {
    place_name: 'Beijing',
    types: 'food',
    summary: 'Studied in a school as an exchange student....was not the best place for view, but interesting cultural experience',
    date: 757555200,
    bearing: 20,
    center: [116.39139, 39.905],
    zoom: 4,
    pitch: 20
  },
  'queensland': {
    place_name: 'Queensland Australia',
    types: 'view',
    summary: 'Breathtaking view of natural water beach',
    date: 883958400,
    bearing: 20,
    center: [153.4146, -28.0024],
    zoom: 4,
    pitch: 20
  },
  'mexico': {
    place_name: 'Mexico City, Mexico',
    types: 'view',
    summary: 'Amazing view of pyramids, interesting cultural experience in downtown',
    date: 821318400,
    bearing: 20,
    center: [-99.14556, 19.41944],
    zoom: 4,
    pitch: 20
  },
  'newyork': {
    place_name: 'New York, United States',
    types: 'activity',
    summary: 'Broadway, shops, cafes, pubs and MOMA, great experiences',
    date: 1073865600,
    bearing: 20,
    center: [-73.9808, 40.7648],
    zoom: 4,
    pitch: 20
  },
  'mumbai': {
    place_name: 'Mumbai, India',
    types: 'food',
    summary: 'First time I found out British Indian is not authentic Indian food!',
    date: 820454400,
    bearing: 20,
    center: [72.83333, 18.96667],
    zoom: 4,
    pitch: 20
  },
  'anchorage': {
    place_name: 'Anchorage, Alaska, USA',
    types: 'food',
    summary: 'Went on a dog sled, felt sorry for the dogs, but they were great and cute. Lovely Sushi too',
    date: 820454400,
    bearing: 20,
    center: [-149.8949, 61.2163],
    zoom: 4,
    pitch: 20
  },
  'zurich': {
    place_name: 'Zürich',
    types: 'activity',
    summary: 'Visited museums and walked around the lovely town. Food wasnt that great, but icecream was nice!',
    date: 852336000,
    bearing: 20,
    center: [8.54, 47.37861],
    zoom: 4,
    pitch: 20
  },
  'hongkong': {
    place_name: 'Hong Kong',
    types: 'activity',
    summary: 'Lived here for 4 years, my faviourite is victoria peak',
    date: 789004800,
    bearing: 20,
    center: [114.15861, 22.27833],
    zoom: 4,
    pitch: 20
  },
  'auckland': {
    place_name: 'Auckland, New Zealand',
    types: 'activity',
    summary: 'Tried sky diving for the first and the last time.... amazing country side',
    date: 915667200,
    bearing: 20,
    center: [174.78333, -36.85],
    zoom: 4,
    pitch: 20
  },
  'amsterdam': {
    place_name: 'Amsterdam, Netherlands',
    types: 'activity',
    summary: 'Great museums and interesting cultural experiences, nice walk by the canal',
    date: 947376000,
    bearing: 20,
    center: [4.9, 52.378],
    zoom: 4,
    pitch: 20
  },
  'osaka': {
    place_name: 'Osaka, Japan',
    types: 'food',
    summary: 'Last time I went to Osaka is to visit my family in 2018 summer, it was HOT....',
    date: 1515369600,
    bearing: 20,
    center: [135.52, 34.68639],
    zoom: 4,
    pitch: 20
  },
  'cebu': {
    place_name: 'Cebu, Philippines',
    types: 'view',
    summary: 'Lovely private beach by a hotel and blue and clear water',
    date: 947116800,
    bearing: 20,
    center: [123.75, 10.31667],
    zoom: 4,
    pitch: 20
  },
  'bali': {
    place_name: 'Bali, Indonesia',
    types: 'view',
    summary: 'Lovely beach and relaxing atmosphere',
    date: 884563200,
    bearing: 20,
    center: [115.13833, -8.36917],
    zoom: 4,
    pitch: 20
  }
};


export default locations