  var $option1 = $('#option1');
  var $option2 = $('#option2');
  var $option3 = $('#option3');
  var $option4 = $('#option4');
  var $option5 = $('#option5');
  var $option6 = $('#option6');

  var $playNow = $('#play-now');
  var $playAgain = $('#play-again');

  var $easy = $('#easy');
  var $medium = $('#medium');
  var $hard = $('#hard');

  var $sprint = $('#sprint');
  var $halfMarathon = $('#half-marathon');
  var $marathon = $('#marathon');

  var playerChoice;
  var gameLength = 10; // preset to 10 incase user does not choose
  var questionNumber = 1;
  var attempts = 0;
  var flagName = $('#flag > img').attr('alt');
  var maxAttempts = 1; // preset to 1 incase user does not choose


var states = [
  { name: "Alabama",
    location: "<img class='center-block' src='images/state_location/AlabamaStateLocation.svg.png' alt='Alabama'>",
    flag: "<img class='center-block' src='images/state_flag/AlabamaStateFlag.svg.png' alt='Alabama'>"},
  { name: "Alaska",
    location: "<img class='center-block' src='images/state_location/AlaskaStateLocation.svg.png' alt='Alaska'>",
    flag: "<img class='center-block' src='images/state_flag/AlaskaStateFlag.svg.png' alt='Alaska'>"},
  { name: "Arizona",
    location: "<img class='center-block' src='images/state_location/ArizonaStateLocation.svg.png' alt='Arizona'>",
    flag: "<img class='center-block' src='images/state_flag/ArizonaStateFlag.svg.png' alt='Arizona'>"},
  { name: "Arkansas",
    location: "<img class='center-block' src='images/state_location/ArkansasStateLocation.svg.png' alt='Arkansas'>",
    flag: "<img class='center-block' src='images/state_flag/ArkansasStateFlag.svg.png' alt='Arkansas'>"},
  { name: "California",
    location: "<img class='center-block' src='images/state_location/CaliforniaStateLocation.svg.png' alt='California'>",
    flag: "<img class='center-block' src='images/state_flag/CaliforniaStateFlag.svg.png' alt='California'>"},
  { name: "Colorado",
    location: "<img class='center-block' src='images/state_location/ColoradoStateLocation.svg.png' alt='Colorado'>",
    flag: "<img class='center-block' src='images/state_flag/ColoradoStateFlag.svg.png' alt='Colorado'>"},
  { name: "Connecticut",
    location: "<img class='center-block' src='images/state_location/ConnecticutStateLocation.svg.png' alt='Connecticut'>",
    flag: "<img class='center-block' src='images/state_flag/ConnecticutStateFlag.svg.png' alt='Connecticut'>"},
  { name: "Delaware",
    location: "<img class='center-block' src='images/state_location/DelawareStateLocation.svg.png' alt='Delaware'>",
    flag: "<img class='center-block' src='images/state_flag/DelawareStateFlag.svg.png' alt='Delaware'>"},
  { name: "Florida",
    location: "<img class='center-block' src='images/state_location/FloridaStateLocation.svg.png' alt='Florida'>",
    flag: "<img class='center-block' src='images/state_flag/FloridaStateFlag.svg.png' alt='Florida'>"},
  { name: "Georgia",
    location: "<img class='center-block' src='images/state_location/GeorgiaStateLocation.svg.png' alt='Georgia'>",
    flag: "<img class='center-block' src='images/state_flag/GeorgiaStateFlag.svg.png' alt='Georgia'>"},
  { name: "Hawaii",
    location:  "<img class='center-block' src='images/state_location/HawaiiStateLocation.svg.png' alt='Hawaii'>",
    flag: "<img class='center-block' src='images/state_flag/HawaiiStateFlag.svg.png' alt='Hawaii'>"},
  { name: "Idaho",
    location: "<img class='center-block' src='images/state_location/IdahoStateLocation.svg.png' alt='Idaho'>",
    flag: "<img class='center-block' src='images/state_flag/IdahoStateFlag.svg.png' alt='Idaho'>"},
  { name: "Illinois",
    location: "<img class='center-block' src='images/state_location/IllinoisStateLocation.svg.png' alt='Illinois'>",
    flag: "<img class='center-block' src='images/state_flag/IllinoisStateFlag.svg.png' alt='Illinois'>"},
  { name: "Indiana",
    location: "<img class='center-block' src='images/state_location/IndianaStateLocation.svg.png' alt='Indiana'>",
    flag: "<img class='center-block' src='images/state_flag/IndianaStateFlag.svg.png' alt='Indiana'>"},
  { name: "Iowa",
    location: "<img class='center-block' src='images/state_location/IowaStateLocation.svg.png' alt='Iowa'>",
    flag: "<img class='center-block' src='images/state_flag/IowaStateFlag.svg.png' alt='Iowa'>"},
  { name: "Kansas",
    location: "<img class='center-block' src='images/state_location/KansasStateLocation.svg.png' alt='Kansas'>",
    flag: "<img class='center-block' src='images/state_flag/KansasStateFlag.svg.png' alt='Kansas'>"},
  { name: "Kentucky",
    location: "<img class='center-block' src='images/state_location/KentuckyStateLocation.svg.png' alt='Kentucky'>",
    flag: "<img class='center-block' src='images/state_flag/KentuckyStateFlag.svg.png' alt='Kentucky'>"},
  { name: "Louisiana",
    location: "<img class='center-block' src='images/state_location/LouisianaStateLocation.svg.png' alt='Louisiana'>",
    flag: "<img class='center-block' src='images/state_flag/LouisianaStateFlag.svg.png' alt='Louisiana'>"},
  { name: "Maine",
    location: "<img class='center-block' src='images/state_location/MaineStateLocation.svg.png' alt='Maine'>",
    flag: "<img class='center-block' src='images/state_flag/MaineStateFlag.svg.png' alt='Maine'>"},
  { name: "Maryland",
    location: "<img class='center-block' src='images/state_location/MarylandStateLocation.svg.png' alt='Maryland'>",
    flag: "<img class='center-block' src='images/state_flag/MarylandStateFlag.svg.png' alt='Maryland'>"},
  { name: "Massachusetts",
    location: "<img class='center-block' src='images/state_location/MassachusettsStateLocation.svg.png' alt='Massachusetts'>",
    flag: "<img class='center-block' src='images/state_flag/MassachusettsStateFlag.svg.png' alt='Massachusetts'>"},
  { name: "Michigan",
    location: "<img class='center-block' src='images/state_location/MichiganStateLocation.svg.png' alt='Michigan'>",
    flag: "<img class='center-block' src='images/state_flag/MichiganStateFlag.svg.png' alt='Michigan'>"},
  { name: "Minnesota ",
    location: "<img class='center-block' src='images/state_location/MinnesotaStateLocation.svg.png' alt='Minnesota'>",
    flag: "<img class='center-block' src='images/state_flag/MinnesotaStateFlag.svg.png' alt='Minnesota'>"},
  { name: "Mississippi",
    location: "<img class='center-block' src='images/state_location/MississippiStateLocation.svg.png' alt='Mississippi'>",
    flag: "<img class='center-block' src='images/state_flag/MississippiStateFlag.svg.png' alt='Mississippi'>"},
  { name: "Missouri",
    location: "<img class='center-block' src='images/state_location/MissouriStateLocation.svg.png' alt='Missouri'>",
    flag: "<img class='center-block' src='images/state_flag/MissouriStateFlag.svg.png' alt='Missouri'>"},
  { name: "Montana",
    location: "<img class='center-block' src='images/state_location/MontanaStateLocation.svg.png' alt='Montana'>",
    flag: "<img class='center-block' src='images/state_flag/MontanaStateFlag.svg.png' alt='Montana'>"},
  { name: "Nebraska",
    location: "<img class='center-block' src='images/state_location/NebraskaStateLocation.svg.png' alt='Nebraska'>",
    flag: "<img class='center-block' src='images/state_flag/NebraskaStateFlag.svg.png' alt='Nebraska'>"},
  { name: "Nevada",
    location: "<img class='center-block' src='images/state_location/NevadaStateLocation.svg.png' alt='Nevada'>",
    flag: "<img class='center-block' src='images/state_flag/NevadaStateFlag.svg.png' alt='Nevada'>"},
  { name: "NewHampshire",
    location: "<img class='center-block' src='images/state_location/NewHampshireStateLocation.svg.png' alt='NewHampshire'>",
    flag: "<img class='center-block' src='images/state_flag/NewHampshireStateFlag.svg.png' alt='NewHampshire'>"},
  { name: "NewJersey",
    location: "<img class='center-block' src='images/state_location/NewJerseyStateLocation.svg.png' alt='NewJersey'>",
    flag: "<img class='center-block' src='images/state_flag/NewJerseyStateFlag.svg.png' alt='NewJersey'>"},
  { name: "NewMexico",
    location: "<img class='center-block' src='images/state_location/NewMexicoStateLocation.svg.png' alt='NewMexico'>",
    flag: "<img class='center-block' src='images/state_flag/NewMexicoStateFlag.svg.png' alt='NewMexico'>"},
  { name: "NewYork",
    location: "<img class='center-block' src='images/state_location/NewYorkStateLocation.svg.png' alt='NewYork'>",
    flag: "<img class='center-block' src='images/state_flag/NewYorkStateFlag.svg.png' alt='NewYork'>"},
  { name: "NorthCarolina",
    location: "<img class='center-block' src='images/state_location/NorthCarolinaStateLocation.svg.png' alt='NorthCarolina'>",
    flag: "<img class='center-block' src='images/state_flag/NorthCarolinaStateFlag.svg.png' alt='NorthCarolina'>"},
  { name: "NorthDakota",
    location: "<img class='center-block' src='images/state_location/NorthDakotaStateLocation.svg.png' alt='NorthDakota'>",
    flag: "<img class='center-block' src='images/state_flag/NorthDakotaStateFlag.svg.png' alt='NorthDakota'>"},
  { name: "Ohio",
    location: "<img class='center-block' src='images/state_location/OhioStateLocation.svg.png' alt='Ohio'>",
    flag: "<img class='center-block' src='images/state_flag/OhioStateFlag.svg.png' alt='Ohio'>"},
  { name: "Oklahoma",
    location: "<img class='center-block' src='images/state_location/OklahomaStateLocation.svg.png' alt='Oklahoma'>",
    flag: "<img class='center-block' src='images/state_flag/OklahomaStateFlag.svg.png' alt='Oklahoma'>"},
  { name: "Oregon",
    location: "<img class='center-block' src='images/state_location/OregonStateLocation.svg.png' alt='Oregon'>",
    flag: "<img class='center-block' src='images/state_flag/OregonStateFlag.svg.png' alt='Oregon'>"},
  { name: "Pennsylvania",
    location: "<img class='center-block' src='images/state_location/PennsylvaniaStateLocation.svg.png' alt='Pennsylvania'>",
    flag: "<img class='center-block' src='images/state_flag/PennsylvaniaStateFlag.svg.png' alt='Pennsylvania'>"},
  { name: "RhodeIsland",
    location: "<img class='center-block' src='images/state_location/RhodeIslandStateLocation.svg.png' alt='RhodeIsland'>",
    flag: "<img class='center-block' src='images/state_flag/RhodeIslandStateFlag.svg.png' alt='RhodeIsland'>"},
  { name: "SouthCarolina",
    location: "<img class='center-block' src='images/state_location/SouthCarolinaStateLocation.svg.png' alt='SouthCarolina'>",
    flag: "<img class='center-block' src='images/state_flag/SouthCarolinaStateFlag.svg.png' alt='SouthCarolina'>"},
  { name: "SouthDakota",
    location: "<img class='center-block' src='images/state_location/SouthDakotaStateLocation.svg.png' alt='SouthDakota'>",
    flag: "<img class='center-block' src='images/state_flag/SouthDakotaStateFlag.svg.png' alt='SouthDakota'>"},
  { name: "Tennessee",
    location: "<img class='center-block' src='images/state_location/TennesseeStateLocation.svg.png' alt='Tennessee'>",
    flag: "<img class='center-block' src='images/state_flag/TennesseeStateFlag.svg.png' alt='Tennessee'>"},
  { name: "Texas",
    location: "<img class='center-block' src='images/state_location/TexasStateLocation.svg.png' alt='Texas'>",
    flag: "<img class='center-block' src='images/state_flag/TexasStateFlag.svg.png' alt='Texas'>"},
  { name: "Utah",
    location: "<img class='center-block' src='images/state_location/UtahStateLocation.svg.png' alt='Utah'>",
    flag: "<img class='center-block' src='images/state_flag/UtahStateFlag.svg.png' alt='Utah'>"},
  { name: "Vermont",
    location: "<img class='center-block' src='images/state_location/VermontStateLocation.svg.png' alt='Vermont'>",
    flag: "<img class='center-block' src='images/state_flag/VermontStateFlag.svg.png' alt='Vermont'>"},
  { name: "Virginia",
    location: "<img class='center-block' src='images/state_location/VirginiaStateLocation.svg.png' alt='Virginia'>",
    flag: "<img class='center-block' src='images/state_flag/VirginiaStateFlag.svg.png' alt='Virginia'>"},
  { name: "Washington",
    location: "<img class='center-block' src='images/state_location/WashingtonStateLocation.svg.png' alt='Washington'>",
    flag: "<img class='center-block' src='images/state_flag/WashingtonStateFlag.svg.png' alt='Washington'>"},
  { name: "WestVirginia",
    location: "<img class='center-block' src='images/state_location/WestVirginiaStateLocation.svg.png' alt='WestVirginia'>",
    flag: "<img class='center-block' src='images/state_flag/WestVirginiaStateFlag.svg.png' alt='WestVirginia'>"},
  { name: "Wisconsin",
    location: "<img class='center-block' src='images/state_location/WisconsinStateLocation.svg.png' alt='Wisconsin'>",
    flag: "<img class='center-block' src='images/state_flag/WisconsinStateFlag.svg.png' alt='Wisconsin'>"},
  { name: "Wyoming",
    location: "<img class='center-block' src='images/state_location/WyomingStateLocation.svg.png' alt='Wyoming'>",
    flag: "<img class='center-block' src='images/state_flag/WyomingStateFlag.svg.png' alt='Wyoming'>"}
];

var questions = [
  {question: states[0].flag, answer: states[0].location},
  {question: states[1].flag, answer: states[1].location},
  {question: states[2].flag, answer: states[2].location},
  {question: states[3].flag, answer: states[3].location},
  {question: states[4].flag, answer: states[4].location},
  {question: states[5].flag, answer: states[5].location},
  {question: states[6].flag, answer: states[6].location},
  {question: states[7].flag, answer: states[7].location},
  {question: states[8].flag, answer: states[8].location},
  {question: states[9].flag, answer: states[9].location},
  {question: states[10].flag, answer: states[10].location},
  {question: states[11].flag, answer: states[11].location},
  {question: states[12].flag, answer: states[12].location},
  {question: states[13].flag, answer: states[13].location},
  {question: states[14].flag, answer: states[14].location},
  {question: states[15].flag, answer: states[15].location},
  {question: states[16].flag, answer: states[16].location},
  {question: states[17].flag, answer: states[17].location},
  {question: states[18].flag, answer: states[18].location},
  {question: states[19].flag, answer: states[19].location},
  {question: states[20].flag, answer: states[20].location},
  {question: states[21].flag, answer: states[21].location},
  {question: states[22].flag, answer: states[22].location},
  {question: states[23].flag, answer: states[23].location},
  {question: states[24].flag, answer: states[24].location},
  {question: states[25].flag, answer: states[25].location},
  {question: states[26].flag, answer: states[26].location},
  {question: states[27].flag, answer: states[27].location},
  {question: states[28].flag, answer: states[28].location},
  {question: states[29].flag, answer: states[29].location},
  {question: states[30].flag, answer: states[30].location},
  {question: states[31].flag, answer: states[31].location},
  {question: states[32].flag, answer: states[32].location},
  {question: states[33].flag, answer: states[33].location},
  {question: states[34].flag, answer: states[34].location},
  {question: states[35].flag, answer: states[35].location},
  {question: states[36].flag, answer: states[36].location},
  {question: states[37].flag, answer: states[37].location},
  {question: states[38].flag, answer: states[38].location},
  {question: states[39].flag, answer: states[39].location},
  {question: states[40].flag, answer: states[40].location},
  {question: states[41].flag, answer: states[41].location},
  {question: states[42].flag, answer: states[42].location},
  {question: states[43].flag, answer: states[43].location},
  {question: states[44].flag, answer: states[44].location},
  {question: states[45].flag, answer: states[45].location},
  {question: states[46].flag, answer: states[46].location},
  {question: states[47].flag, answer: states[47].location},
  {question: states[48].flag, answer: states[48].location},
  {question: states[49].flag, answer: states[49].location}
];

var questionsCopy = [
  {question: states[0].flag, answer: states[0].location},
  {question: states[1].flag, answer: states[1].location},
  {question: states[2].flag, answer: states[2].location},
  {question: states[3].flag, answer: states[3].location},
  {question: states[4].flag, answer: states[4].location},
  {question: states[5].flag, answer: states[5].location},
  {question: states[6].flag, answer: states[6].location},
  {question: states[7].flag, answer: states[7].location},
  {question: states[8].flag, answer: states[8].location},
  {question: states[9].flag, answer: states[9].location},
  {question: states[10].flag, answer: states[10].location},
  {question: states[11].flag, answer: states[11].location},
  {question: states[12].flag, answer: states[12].location},
  {question: states[13].flag, answer: states[13].location},
  {question: states[14].flag, answer: states[14].location},
  {question: states[15].flag, answer: states[15].location},
  {question: states[16].flag, answer: states[16].location},
  {question: states[17].flag, answer: states[17].location},
  {question: states[18].flag, answer: states[18].location},
  {question: states[19].flag, answer: states[19].location},
  {question: states[20].flag, answer: states[20].location},
  {question: states[21].flag, answer: states[21].location},
  {question: states[22].flag, answer: states[22].location},
  {question: states[23].flag, answer: states[23].location},
  {question: states[24].flag, answer: states[24].location},
  {question: states[25].flag, answer: states[25].location},
  {question: states[26].flag, answer: states[26].location},
  {question: states[27].flag, answer: states[27].location},
  {question: states[28].flag, answer: states[28].location},
  {question: states[29].flag, answer: states[29].location},
  {question: states[30].flag, answer: states[30].location},
  {question: states[31].flag, answer: states[31].location},
  {question: states[32].flag, answer: states[32].location},
  {question: states[33].flag, answer: states[33].location},
  {question: states[34].flag, answer: states[34].location},
  {question: states[35].flag, answer: states[35].location},
  {question: states[36].flag, answer: states[36].location},
  {question: states[37].flag, answer: states[37].location},
  {question: states[38].flag, answer: states[38].location},
  {question: states[39].flag, answer: states[39].location},
  {question: states[40].flag, answer: states[40].location},
  {question: states[41].flag, answer: states[41].location},
  {question: states[42].flag, answer: states[42].location},
  {question: states[43].flag, answer: states[43].location},
  {question: states[44].flag, answer: states[44].location},
  {question: states[45].flag, answer: states[45].location},
  {question: states[46].flag, answer: states[46].location},
  {question: states[47].flag, answer: states[47].location},
  {question: states[48].flag, answer: states[48].location},
  {question: states[49].flag, answer: states[49].location}
];


var correctResults = [];
var incorrectResults = [];


var randomNumberArray = [];






