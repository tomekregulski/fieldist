const { Demo } = require('../models');

const demoData = [
  {
    user_id: "10",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1092",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "10",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1065",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1123",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1119",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "12/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1118",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "11/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1110",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1114",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1121",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "11/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1203",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1207",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "10",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1065",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1210",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1119",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1118",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "11/1/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1205",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "10/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1210",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1114",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "10/19/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1119",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1118",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "10/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1202",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "10/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1203",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1207",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1110",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "10/4/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1121",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "10/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1206",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1119",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1210",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "9/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1114",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "9/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1207",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1203",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "9/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1118",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "160",
    date: "9/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1121",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "59",
    date: "9/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1206",
    region_id: "9",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "10",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "8",
    brand_id: "5"
  },
  {
    user_id: "10",
    date: "10/26/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1050",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "173",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1195",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "156",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "50",
    date: "10/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1142",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "156",
    date: "10/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "173",
    date: "10/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1133",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "190",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1062",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "190",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1066",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "10",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "173",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1196",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "10",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "15",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1091",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "74",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1152",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "173",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1162",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "74",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1145",
    region_id: "9",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "5",
    date: "9/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1201",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "5",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1193",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "156",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "156",
    date: "9/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1180",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "74",
    date: "9/27/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1143",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "77",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1172",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "5",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1193",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "5",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1201",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "14",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1205",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "74",
    date: "9/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1143",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "156",
    date: "9/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1180",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "28",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1180",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "192",
    date: "9/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1169",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "134",
    date: "9/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1170",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "46",
    date: "9/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1172",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "50",
    date: "9/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1143",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "14",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1205",
    region_id: "9",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "187",
    date: "3/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1200",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "187",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1188",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "59",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1209",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "50",
    date: "2/24/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1153",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "28",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1184",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "201",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1156",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "79",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1163",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "59",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1208",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "59",
    date: "2/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1209",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "156",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1181",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "50",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1146",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "50",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1153",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "50",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1157",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "50",
    date: "1/13/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1147",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "50",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1153",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "59",
    date: "1/12/20",
    start_time: "2:00 PM",
    duration: "3",
    venue_id: "1209",
    region_id: "9",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "127",
    date: "3/7/20",
    start_time: "11:30 AM",
    duration: "3",
    venue_id: "1129",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "127",
    date: "2/28/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1129",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "127",
    date: "2/27/20",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "1128",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "2",
    date: "2/17/20",
    start_time: "2:30 PM",
    duration: "3",
    venue_id: "1053",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "2",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1087",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "15",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1087",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "190",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1056",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "190",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1051",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "190",
    date: "1/10/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1053",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "190",
    date: "12/28/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1051",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "190",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1051",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "2",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1056",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "15",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1087",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "15",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1053",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "84",
    date: "11/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1087",
    region_id: "9",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "74",
    date: "1/30/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1152",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "173",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1194",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "74",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1145",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "156",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "74",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1152",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "79",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1194",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "74",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1145",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "173",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1197",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "74",
    date: "12/19/19",
    start_time: "3:00 AM",
    duration: "4",
    venue_id: "1145",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "15",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "79",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1194",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "160",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1120",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "10",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1061",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "10",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1059",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "28",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "28",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "79",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1133",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "14",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1205",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "74",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1152",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "50",
    date: "12/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1142",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "79",
    date: "12/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1195",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "173",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1195",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "28",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "74",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1145",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "74",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1142",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "59",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1205",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "50",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1152",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "79",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1133",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "156",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "10",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1061",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "15",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "79",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1194",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "160",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1120",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "2",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "79",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1195",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "156",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "14",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1205",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "79",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1133",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "173",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1194",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "173",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1195",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "28",
    date: "9/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "74",
    date: "9/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1145",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "10",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "147",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1172",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "156",
    date: "2/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "50",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1143",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "79",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1162",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "50",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1151",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "181",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1061",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "50",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1158",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "50",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1151",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "50",
    date: "11/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1142",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "59",
    date: "11/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1205",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "50",
    date: "11/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1154",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "46",
    date: "9/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1171",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "50",
    date: "9/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1145",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "50",
    date: "9/27/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1143",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "28",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "28",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "188",
    date: "9/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1197",
    region_id: "9",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "190",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1061",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "2",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "10",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1067",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "190",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1066",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "10",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "10",
    date: "1/13/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1091",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "2",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "190",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1073",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "2",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1070",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "204",
    date: "12/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1104",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "15",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1090",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "15",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1060",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "204",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1101",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "173",
    date: "12/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1137",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "55",
    date: "12/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1106",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "15",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1068",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "15",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1054",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "204",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1095",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "55",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1107",
    region_id: "9",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "108",
    date: "3/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1124",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "3/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1102",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "3/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1116",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1117",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "170",
    date: "3/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1091",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "3/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1094",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "3/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1122",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "3/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1098",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "3/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "3/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1080",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "3/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "3/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1103",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1113",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "127",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1130",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1085",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1071",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "2/23/20",
    start_time: "10:30 AM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1113",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "127",
    date: "2/21/20",
    start_time: "1:00 PM",
    duration: "3",
    venue_id: "1130",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "2/21/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "1116",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "2/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "2/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1080",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1124",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1102",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1122",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "2/14/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "2/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1091",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1085",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "2/9/20",
    start_time: "2:00 PM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1086",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1102",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1084",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1122",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1096",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "2/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1091",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "1103",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1070",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1086",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1113",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1098",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "2/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1117",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "1116",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1094",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "1/28/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1080",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "1/27/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1124",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1086",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1116",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1113",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1122",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "1/24/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1117",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "1/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "1/20/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "1/20/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1094",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1098",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1084",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "1/18/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/18/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1122",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1096",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1116",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1124",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1113",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1071",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1117",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1070",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1098",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "1/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1102",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "1/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "1/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1091",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "1/4/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1094",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "11/25/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1117",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "11/24/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1116",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "170",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1113",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1096",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1122",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "11/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1124",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "11/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1117",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "11/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "11/17/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1071",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "55",
    date: "11/17/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "1094",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "53",
    date: "11/17/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1080",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "84",
    date: "11/17/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1086",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "55",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1103",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1116",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "53",
    date: "11/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "204",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1098",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "150",
    date: "11/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1096",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1122",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1071",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1070",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "55",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1098",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "11/4/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1124",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "55",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1094",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "11/3/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1113",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "53",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "55",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1103",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "53",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1080",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "84",
    date: "10/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1086",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "10/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1084",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "53",
    date: "10/27/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "10/27/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "10/25/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "39",
    date: "10/25/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1122",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "10/19/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1071",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "10/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1091",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "10/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1117",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "150",
    date: "10/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1103",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "53",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "10/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1113",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1122",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1071",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "97",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1079",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "10/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1091",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "39",
    date: "10/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "10",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "10/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1113",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "2",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1070",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "84",
    date: "10/4/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1086",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1084",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "210",
    date: "9/27/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1077",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "71",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1103",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "150",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1098",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "150",
    date: "9/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1094",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "170",
    date: "9/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "15",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1084",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "190",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "160",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1112",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "53",
    date: "9/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1080",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "108",
    date: "9/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1117",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "53",
    date: "9/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "170",
    date: "9/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "39",
    date: "9/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "210",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1076",
    region_id: "9",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "50",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1158",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "79",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1133",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1070",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "14",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1204",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1089",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1050",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "160",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1115",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "1/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "28",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "10",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1067",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "28",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "160",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1125",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "156",
    date: "12/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "10",
    date: "12/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1056",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "10",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "14",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1204",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "12/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "10",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1050",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1063",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1070",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "59",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1211",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1089",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "14",
    date: "11/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1204",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1089",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1081",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1067",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "14",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1211",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "5",
    date: "10/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1199",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1055",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "59",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1211",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "10",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1050",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "5",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1201",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "10",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1082",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1061",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "156",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1072",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "59",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1204",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "5",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1201",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "15",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1089",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "10",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1067",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "156",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "59",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1204",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "156",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "50",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1152",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "50",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1143",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "74",
    date: "2/26/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1143",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "156",
    date: "2/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "50",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1154",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "50",
    date: "2/19/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1152",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "2",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1073",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "156",
    date: "2/14/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "74",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1158",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "10",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1059",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "156",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "10",
    date: "2/11/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1059",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "181",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1061",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "28",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1178",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "15",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1075",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "28",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "10",
    date: "2/8/20",
    start_time: "1:00 PM",
    duration: "4",
    venue_id: "1059",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "74",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1143",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "50",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1158",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "74",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1154",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "50",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1152",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "181",
    date: "2/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1061",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "28",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1176",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "15",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1075",
    region_id: "9",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "36",
    date: "4/30/21",
    start_time: "4:15 PM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/30/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/30/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/30/21",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/30/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/29/21",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/29/21",
    start_time: "12:45 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/26/21",
    start_time: "4:15 PM",
    duration: "0.25",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/26/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "4/24/21",
    start_time: "9:30 AM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/23/21",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/23/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/23/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/22/21",
    start_time: "5:15 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/22/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/22/21",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/22/21",
    start_time: "1:45 PM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/22/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/22/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/22/21",
    start_time: "11:45 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/22/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "4/21/21",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "4/21/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/20/21",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/19/21",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/19/21",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/19/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/16/21",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/16/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/16/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/16/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/16/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/16/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/15/21",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/15/21",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/15/21",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/15/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/15/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/14/21",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/14/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/14/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/13/21",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/13/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/13/21",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/13/21",
    start_time: "12:45 PM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/13/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/13/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/13/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/13/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/13/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/12/21",
    start_time: "7:45 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/12/21",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/12/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/12/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/12/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/12/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/12/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/10/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/10/21",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/10/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/10/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "4/10/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/10/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/10/21",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/10/21",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/10/21",
    start_time: "8:15 AM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/9/21",
    start_time: "11:45 AM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/9/21",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/8/21",
    start_time: "4:15 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/8/21",
    start_time: "4:15 PM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/8/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/8/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/8/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/8/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/8/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/8/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "36",
    date: "4/8/21",
    start_time: "9:45 AM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/7/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "4/7/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/7/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "4/7/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/6/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/6/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/5/21",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "4/5/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/4/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/4/21",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/4/21",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/2/21",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/2/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/2/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/2/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/2/21",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "4/2/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/29/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/29/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "388",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/29/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "389",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/29/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/29/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "387",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/29/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/29/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "390",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/28/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/28/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/28/21",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/27/21",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/27/21",
    start_time: "6:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/27/21",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/27/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/27/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/27/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/27/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/27/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/27/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/27/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/27/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/27/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/27/21",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/27/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/25/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/25/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/23/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "1/23/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/23/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "1/23/21",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/23/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "1/23/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/22/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/22/21",
    start_time: "3:15 PM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/22/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/22/21",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/22/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/22/21",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/22/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/22/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/22/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/22/21",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/22/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/22/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/22/21",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/22/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/22/21",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/22/21",
    start_time: "8:15 AM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/22/21",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "386",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/20/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/20/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/20/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/19/21",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/19/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/19/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/19/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/18/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "291",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/18/21",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/18/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/18/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/18/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/16/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/16/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/16/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/16/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/16/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/14/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/14/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/14/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/14/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/13/21",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/13/21",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/13/21",
    start_time: "6:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/13/21",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/13/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/13/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/12/21",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/12/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/12/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/12/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/12/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/12/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/11/21",
    start_time: "6:00 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "1/11/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/11/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/11/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/11/21",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "292",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/10/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/10/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/10/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/10/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/10/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/10/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/9/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/9/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/9/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "1/9/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "1/9/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/7/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/7/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/7/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/7/21",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/7/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/7/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/7/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/7/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/7/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/6/21",
    start_time: "3:15 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/6/21",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/6/21",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/6/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/6/21",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/6/21",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/6/21",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/4/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/4/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "1/4/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "1/4/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "12:45 PM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/3/21",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/2/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "1/2/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/29/20",
    start_time: "4:15 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/29/20",
    start_time: "3:15 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/29/20",
    start_time: "3:15 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/29/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/29/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/28/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/28/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/28/20",
    start_time: "12:45 PM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/28/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/28/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/28/20",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/27/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "388",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/27/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "390",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/27/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "389",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/27/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "387",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/27/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "386",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/26/20",
    start_time: "8:15 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/23/20",
    start_time: "5:15 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/23/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/23/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/23/20",
    start_time: "3:15 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/23/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/23/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/23/20",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/23/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/23/20",
    start_time: "8:30 AM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/23/20",
    start_time: "8:15 AM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/22/20",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/22/20",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/22/20",
    start_time: "8:45 AM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/21/20",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/21/20",
    start_time: "6:45 PM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/21/20",
    start_time: "6:00 PM",
    duration: "0.17",
    venue_id: "292",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/21/20",
    start_time: "5:30 PM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/21/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/21/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/21/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/21/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/21/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/21/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/21/20",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/21/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/21/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/21/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/21/20",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/21/20",
    start_time: "9:30 AM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/21/20",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/21/20",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/20/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/20/20",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/19/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/19/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/19/20",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/19/20",
    start_time: "9:30 AM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/19/20",
    start_time: "8:30 AM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/18/20",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/18/20",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/18/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/18/20",
    start_time: "10:45 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/18/20",
    start_time: "9:30 AM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/18/20",
    start_time: "8:30 AM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "12/17/20",
    start_time: "4:45 PM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "12/17/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "12/16/20",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/15/20",
    start_time: "7:45 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/15/20",
    start_time: "6:45 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/15/20",
    start_time: "5:30 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/15/20",
    start_time: "4:45 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/15/20",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/15/20",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/15/20",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/15/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/15/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/14/20",
    start_time: "2:45 PM",
    duration: "0.25",
    venue_id: "291",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/14/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/14/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/11/20",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/11/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/11/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/11/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/11/20",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/11/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/11/20",
    start_time: "8:15 AM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/8/20",
    start_time: "12:45 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/8/20",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/8/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/8/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/8/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/7/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/7/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/7/20",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/7/20",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/7/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/7/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/7/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/7/20",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/6/20",
    start_time: "5:45 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/6/20",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/6/20",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/6/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/6/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/5/20",
    start_time: "2:45 PM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "12/5/20",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/5/20",
    start_time: "10:45 AM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "12/5/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/5/20",
    start_time: "9:45 AM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "12/5/20",
    start_time: "8:45 AM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/4/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/4/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/4/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/4/20",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/3/20",
    start_time: "6:30 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/3/20",
    start_time: "5:15 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/3/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/3/20",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/3/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/3/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/3/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/3/20",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/2/20",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/1/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/1/20",
    start_time: "3:45 PM",
    duration: "0.25",
    venue_id: "292",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/1/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/1/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "12/1/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/1/20",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/1/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/1/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/1/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/1/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "12/1/20",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/1/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/1/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "12/1/20",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/30/20",
    start_time: "8:00 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/30/20",
    start_time: "7:30 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/30/20",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/30/20",
    start_time: "6:30 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/30/20",
    start_time: "5:30 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/30/20",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/25/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/25/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/25/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/25/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/25/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/25/20",
    start_time: "8:15 AM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/24/20",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/24/20",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/24/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/24/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/24/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/24/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/24/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/24/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/24/20",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/23/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/23/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/23/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "11/23/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/23/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/23/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "11/23/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/23/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "11/23/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "291",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/23/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/23/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/23/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/22/20",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/22/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/22/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/22/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "11/21/20",
    start_time: "10:45 AM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "11/20/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/20/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "11/20/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/20/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/20/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/20/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/20/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/19/20",
    start_time: "11:45 AM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/19/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/19/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/19/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/19/20",
    start_time: "9:45 AM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/17/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/17/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/16/20",
    start_time: "6:30 PM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/16/20",
    start_time: "5:30 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/16/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/16/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/16/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/15/20",
    start_time: "5:30 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/15/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/15/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/15/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/15/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/15/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/15/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/15/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/13/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/13/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/13/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/13/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/13/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/13/20",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/13/20",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/13/20",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/12/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/12/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/12/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/12/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/12/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/12/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/10/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/10/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/10/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/10/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/10/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/10/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/7/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/7/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/7/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/7/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/7/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/6/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "11/6/20",
    start_time: "1:45 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/6/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/6/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/6/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/6/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/6/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/6/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/6/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/5/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/5/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/5/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/4/20",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/4/20",
    start_time: "6:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/4/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/4/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/4/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/4/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/4/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/2/20",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/2/20",
    start_time: "6:00 PM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/2/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/2/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/2/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "11/2/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "11/2/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "11/2/20",
    start_time: "8:15 AM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "11/1/20",
    start_time: "4:15 PM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "11/1/20",
    start_time: "9:45 AM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "11/1/20",
    start_time: "8:45 AM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/30/20",
    start_time: "5:30 PM",
    duration: "0.25",
    venue_id: "386",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/30/20",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "387",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/30/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "388",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/30/20",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "389",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/30/20",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "390",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/30/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/30/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/30/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/28/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/28/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/28/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/27/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/27/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/27/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/27/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/27/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/26/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/26/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "292",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/26/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/26/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/26/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/26/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/26/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/26/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/24/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/24/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/24/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/24/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/24/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/23/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/23/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/23/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/23/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/23/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/22/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/22/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/22/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/22/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/22/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/21/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/21/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/21/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/21/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/21/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/21/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/20/20",
    start_time: "7:30 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/20/20",
    start_time: "6:30 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/20/20",
    start_time: "5:30 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/19/20",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/19/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "291",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/19/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/19/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/19/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/19/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/19/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "10/18/20",
    start_time: "5:15 PM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "10/18/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "10/17/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/16/20",
    start_time: "6:00 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/16/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/16/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/16/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/16/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/16/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/16/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/16/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/16/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/16/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/16/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/16/20",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/16/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/16/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/16/20",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/15/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/15/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/15/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/15/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/15/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/15/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/15/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/14/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/14/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/14/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/14/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/14/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/14/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/12/20",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/12/20",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/10/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/10/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/10/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/9/20",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/9/20",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/9/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/9/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/9/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/9/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/9/20",
    start_time: "1:15 PM",
    duration: "0.25",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/9/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/9/20",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/9/20",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/9/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/9/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/8/20",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/8/20",
    start_time: "4:15 PM",
    duration: "0.25",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/8/20",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/8/20",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/8/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/8/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/7/20",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/7/20",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/7/20",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/6/20",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/6/20",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/5/20",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "10/5/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "10/3/20",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "10/3/20",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/2/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/2/20",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/2/20",
    start_time: "1:15 PM",
    duration: "0.08",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/2/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "10/2/20",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/2/20",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/2/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "10/2/20",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/2/20",
    start_time: "9:30 AM",
    duration: "0.25",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/29/20",
    start_time: "5:00 PM",
    duration: "0.08",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/29/20",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/29/20",
    start_time: "3:00 PM",
    duration: "0.08",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/29/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/29/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/29/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/29/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/29/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "9/28/20",
    start_time: "3:00 PM",
    duration: "0.08",
    venue_id: "292",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "9/28/20",
    start_time: "1:30 PM",
    duration: "0.08",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/28/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/28/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/28/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "9/28/20",
    start_time: "9:15 AM",
    duration: "0.08",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/27/20",
    start_time: "3:00 PM",
    duration: "0.08",
    venue_id: "365",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/27/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/27/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/26/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/26/20",
    start_time: "1:30 PM",
    duration: "0.08",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/26/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/26/20",
    start_time: "12:30 PM",
    duration: "0.08",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/26/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/26/20",
    start_time: "11:30 AM",
    duration: "0.08",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/26/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/26/20",
    start_time: "10:30 AM",
    duration: "0.08",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/26/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/25/20",
    start_time: "2:15 PM",
    duration: "0.08",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/25/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/25/20",
    start_time: "12:15 PM",
    duration: "0.08",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/25/20",
    start_time: "11:30 AM",
    duration: "0.08",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/25/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/25/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/24/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/24/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/22/20",
    start_time: "1:15 PM",
    duration: "0.08",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/22/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/22/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/22/20",
    start_time: "11:45 AM",
    duration: "0.08",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "9/21/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "9/21/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/20/20",
    start_time: "3:00 PM",
    duration: "0.08",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/20/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "9/20/20",
    start_time: "8:00 AM",
    duration: "0.08",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/19/20",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/19/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "9/19/20",
    start_time: "1:45 PM",
    duration: "0.08",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/19/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/19/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/19/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "9/19/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/18/20",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/18/20",
    start_time: "3:00 PM",
    duration: "0.08",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/18/20",
    start_time: "2:30 PM",
    duration: "0.08",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/18/20",
    start_time: "1:30 PM",
    duration: "0.08",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/18/20",
    start_time: "1:15 PM",
    duration: "0.08",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/18/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/18/20",
    start_time: "12:30 PM",
    duration: "0.08",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/18/20",
    start_time: "12:15 PM",
    duration: "0.08",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/18/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/18/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/18/20",
    start_time: "11:30 AM",
    duration: "0.08",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/18/20",
    start_time: "11:30 AM",
    duration: "0.08",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/18/20",
    start_time: "11:15 AM",
    duration: "0.08",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/18/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/18/20",
    start_time: "10:30 AM",
    duration: "0.08",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/18/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/18/20",
    start_time: "9:15 AM",
    duration: "0.08",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/18/20",
    start_time: "8:30 AM",
    duration: "0.08",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/16/20",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/16/20",
    start_time: "2:15 PM",
    duration: "0.08",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/16/20",
    start_time: "1:30 PM",
    duration: "0.08",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/16/20",
    start_time: "1:15 PM",
    duration: "0.08",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/16/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "9/14/20",
    start_time: "4:30 PM",
    duration: "0.08",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "9/14/20",
    start_time: "1:15 PM",
    duration: "0.08",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "9/13/20",
    start_time: "12:30 PM",
    duration: "0.08",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "9/13/20",
    start_time: "10:30 AM",
    duration: "0.08",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "9/13/20",
    start_time: "9:15 AM",
    duration: "0.08",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/11/20",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/11/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/11/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/11/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/11/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/11/20",
    start_time: "11:30 AM",
    duration: "0.08",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/11/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/11/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/11/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/10/20",
    start_time: "5:00 PM",
    duration: "0.08",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/10/20",
    start_time: "3:30 PM",
    duration: "0.08",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/10/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/10/20",
    start_time: "12:30 PM",
    duration: "0.08",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/10/20",
    start_time: "11:30 AM",
    duration: "0.08",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/10/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/8/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/8/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/8/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "9/7/20",
    start_time: "2:45 PM",
    duration: "0.08",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "9/7/20",
    start_time: "1:30 PM",
    duration: "0.08",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "9/6/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/4/20",
    start_time: "4:30 PM",
    duration: "0.08",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "9/4/20",
    start_time: "4:30 PM",
    duration: "0.08",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/4/20",
    start_time: "3:45 PM",
    duration: "0.08",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/4/20",
    start_time: "1:30 PM",
    duration: "0.08",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/4/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "9/4/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/4/20",
    start_time: "11:30 AM",
    duration: "0.08",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/4/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "5:00 PM",
    duration: "0.08",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "3:00 PM",
    duration: "0.08",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "2:15 PM",
    duration: "0.08",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "1:15 PM",
    duration: "0.08",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/3/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "339",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "12:15 PM",
    duration: "0.08",
    venue_id: "304",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "11:15 AM",
    duration: "0.08",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/3/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "9:45 AM",
    duration: "0.08",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/2/20",
    start_time: "5:00 PM",
    duration: "0.08",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/2/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/2/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/2/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/2/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/2/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/2/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/2/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/2/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "9/2/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "9/2/20",
    start_time: "9:00 AM",
    duration: "0.08",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "8/31/20",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "292",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "8/31/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "309",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "8/31/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/30/20",
    start_time: "6:30 PM",
    duration: "0.08",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/30/20",
    start_time: "6:00 PM",
    duration: "0.08",
    venue_id: "323",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/30/20",
    start_time: "5:30 PM",
    duration: "0.08",
    venue_id: "382",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/30/20",
    start_time: "5:00 PM",
    duration: "0.08",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/30/20",
    start_time: "4:30 PM",
    duration: "0.08",
    venue_id: "385",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/30/20",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/30/20",
    start_time: "3:30 PM",
    duration: "0.08",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/30/20",
    start_time: "3:00 PM",
    duration: "0.08",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/30/20",
    start_time: "2:30 PM",
    duration: "0.08",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "8/29/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "290",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "8/29/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "288",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "163",
    date: "8/29/20",
    start_time: "8:15 AM",
    duration: "0.08",
    venue_id: "289",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/28/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "363",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/28/20",
    start_time: "12:30 PM",
    duration: "0.08",
    venue_id: "356",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/27/20",
    start_time: "6:00 PM",
    duration: "0.08",
    venue_id: "377",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/27/20",
    start_time: "5:30 PM",
    duration: "0.08",
    venue_id: "373",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "8/27/20",
    start_time: "4:30 PM",
    duration: "0.08",
    venue_id: "296",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "8/27/20",
    start_time: "3:30 PM",
    duration: "0.08",
    venue_id: "317",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "8/27/20",
    start_time: "2:15 PM",
    duration: "0.08",
    venue_id: "299",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/27/20",
    start_time: "1:30 PM",
    duration: "0.08",
    venue_id: "378",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "8/27/20",
    start_time: "1:15 PM",
    duration: "0.08",
    venue_id: "298",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "8/27/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "369",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/27/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "336",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "8/27/20",
    start_time: "12:30 PM",
    duration: "0.08",
    venue_id: "301",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/27/20",
    start_time: "12:30 PM",
    duration: "0.08",
    venue_id: "375",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/27/20",
    start_time: "11:30 AM",
    duration: "0.08",
    venue_id: "374",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "8/27/20",
    start_time: "11:00 AM",
    duration: "0.08",
    venue_id: "306",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/27/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "334",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "8/27/20",
    start_time: "9:00 AM",
    duration: "0.08",
    venue_id: "148",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "8/25/20",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "352",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "8/25/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "344",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "8/25/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "348",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "8/25/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "351",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "22",
    date: "8/25/20",
    start_time: "10:00 AM",
    duration: "0.08",
    venue_id: "343",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "8/24/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "316",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "93",
    date: "8/24/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "310",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/22/20",
    start_time: "4:30 PM",
    duration: "0.08",
    venue_id: "333",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/22/20",
    start_time: "2:30 PM",
    duration: "0.08",
    venue_id: "331",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/22/20",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "325",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/22/20",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "321",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/22/20",
    start_time: "12:45 PM",
    duration: "0.08",
    venue_id: "380",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "75",
    date: "8/22/20",
    start_time: "12:00 PM",
    duration: "0.08",
    venue_id: "320",
    region_id: "3",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "144",
    date: "10/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "93",
    date: "10/26/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "296",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "75",
    date: "10/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "378",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "144",
    date: "10/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "75",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "351",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "93",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "75",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "86",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "144",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "93",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "301",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "75",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "144",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "385",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "75",
    date: "10/17/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "373",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "86",
    date: "10/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "152",
    date: "1/28/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "358",
    region_id: "3",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "3",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "383",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "152",
    date: "3/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "366",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "152",
    date: "2/25/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "366",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "3",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "383",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "152",
    date: "2/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "366",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "3",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "383",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "3",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "383",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "152",
    date: "1/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "366",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "3",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "383",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "3",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "383",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "152",
    date: "12/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "366",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "3",
    date: "11/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "383",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "152",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "366",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "152",
    date: "10/24/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "366",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "144",
    date: "10/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "383",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "152",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "366",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "152",
    date: "9/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "366",
    region_id: "3",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "75",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "369",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "2/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "306",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "369",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "347",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "2/23/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/22/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "152",
    date: "2/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "354",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/20/20",
    start_time: "12:00 PM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "351",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "144",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "152",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "355",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "2/5/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "306",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "347",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "346",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/28/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/27/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "351",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/22/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "17",
    date: "1/22/20",
    start_time: "1:00 PM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "152",
    date: "1/21/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "355",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "346",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "351",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "1/18/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "1/18/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "1/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "306",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "369",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "369",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "1/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "17",
    date: "1/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/30/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "321",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "3",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "382",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "12/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "310",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "3",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "334",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "63",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "505",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "373",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "171",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "501",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "159",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "159",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "385",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "12/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "12/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "296",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "12/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "152",
    date: "12/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "356",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "12/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "317",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "351",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "63",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "507",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "63",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "506",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "374",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "129",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "502",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "49",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "291",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "339",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "152",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "365",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "129",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "504",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "49",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "299",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "152",
    date: "12/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "364",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "12/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "290",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "129",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "503",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "67",
    date: "12/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "389",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "152",
    date: "11/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "364",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "63",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "507",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "339",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "3",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "67",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "389",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "159",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "382",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "159",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "144",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "321",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "49",
    date: "11/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "310",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "63",
    date: "11/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "505",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "49",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "291",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "11/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "351",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "152",
    date: "11/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "356",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "17",
    date: "11/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "144",
    date: "11/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "11/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "373",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "148",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "214",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "387",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "296",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "93",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "306",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "159",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "385",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "334",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "63",
    date: "11/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "506",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "49",
    date: "11/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "299",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "11/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "374",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "10/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "21",
    date: "10/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "321",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "214",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "387",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "10/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "10/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "373",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "3",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "385",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "21",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "67",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "389",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "3",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "49",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "144",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "10/4/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "144",
    date: "9/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "9/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "21",
    date: "9/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "9/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "86",
    date: "9/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "3",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "385",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "22",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "321",
    region_id: "3",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "75",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "369",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "144",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "93",
    date: "2/22/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "299",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "152",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "356",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "75",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "93",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "86",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "75",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "86",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "75",
    date: "12/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "374",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "75",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "63",
    date: "11/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "506",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "75",
    date: "11/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "152",
    date: "11/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "364",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "75",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "339",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "3",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "323",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "49",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "310",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "49",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "316",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "75",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "75",
    date: "9/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "93",
    date: "9/25/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "301",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "21",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "21",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "93",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "93",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "148",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "86",
    date: "9/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "152",
    date: "9/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "356",
    region_id: "3",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "75",
    date: "2/13/21",
    start_time: "5:00 PM",
    duration: "0.08",
    venue_id: "373",
    region_id: "3",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "75",
    date: "2/13/21",
    start_time: "4:00 PM",
    duration: "0.08",
    venue_id: "377",
    region_id: "3",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "75",
    date: "2/13/21",
    start_time: "3:00 PM",
    duration: "0.08",
    venue_id: "336",
    region_id: "3",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "75",
    date: "2/13/21",
    start_time: "2:00 PM",
    duration: "0.08",
    venue_id: "334",
    region_id: "3",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "75",
    date: "2/13/21",
    start_time: "1:00 PM",
    duration: "0.08",
    venue_id: "374",
    region_id: "3",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "75",
    date: "2/13/21",
    start_time: "11:30 AM",
    duration: "0.08",
    venue_id: "378",
    region_id: "3",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "75",
    date: "2/13/21",
    start_time: "10:30 AM",
    duration: "0.08",
    venue_id: "375",
    region_id: "3",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "86",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "86",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "129",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "502",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "171",
    date: "2/22/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "501",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "63",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "505",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "75",
    date: "2/21/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "144",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "385",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "75",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "93",
    date: "10/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "301",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "214",
    date: "10/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "387",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "49",
    date: "10/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "316",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "144",
    date: "10/26/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "86",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "290",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "86",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "289",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "75",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "339",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "63",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "505",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "63",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "506",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "49",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "310",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "93",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "148",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "86",
    date: "10/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "21",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "321",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "75",
    date: "10/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "75",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "75",
    date: "10/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "373",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "21",
    date: "10/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "382",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "144",
    date: "10/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "67",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "389",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "3",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "385",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "49",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "75",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "21",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "75",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "21",
    date: "10/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "321",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "152",
    date: "10/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "356",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "93",
    date: "10/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "296",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "75",
    date: "10/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "351",
    region_id: "3",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "194",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "144",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "86",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "75",
    date: "2/28/20",
    start_time: "2:00 PM",
    duration: "3",
    venue_id: "343",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "75",
    date: "2/28/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "93",
    date: "2/28/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "301",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "75",
    date: "2/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "86",
    date: "2/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "290",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "86",
    date: "2/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "290",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "129",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "504",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "194",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "3",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "75",
    date: "2/23/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "194",
    date: "2/23/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "75",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "331",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "144",
    date: "2/22/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "93",
    date: "2/21/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "301",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "86",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "93",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "93",
    date: "2/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "152",
    date: "2/11/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "364",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "86",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "288",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "93",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "152",
    date: "2/4/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "364",
    region_id: "3",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "75",
    date: "3/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "343",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "3/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "374",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "3/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "350",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "93",
    date: "3/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "306",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "152",
    date: "3/5/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "364",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "93",
    date: "3/4/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "298",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "144",
    date: "3/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "323",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "144",
    date: "3/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "2/27/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "339",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "152",
    date: "2/26/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "356",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "93",
    date: "2/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "306",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "2/25/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "336",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "49",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "304",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "49",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "316",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "2/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "93",
    date: "2/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "298",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "194",
    date: "2/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "327",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "374",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "354",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "334",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "1/31/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "373",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "93",
    date: "1/29/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "306",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "348",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "1/20/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "346",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "3",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "3",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "3",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "378",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "93",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "299",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "3",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "376",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "371",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "22",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "350",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "12/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "12/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "347",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "152",
    date: "12/11/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "357",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "374",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "327",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "22",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "353",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "339",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "323",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "324",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "12/1/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "328",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "11/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "329",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "152",
    date: "11/26/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "357",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "332",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "3",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "382",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "3",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "11/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "380",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "333",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "11/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "321",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "336",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "346",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "11/3/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "354",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "324",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "371",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "159",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "327",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "346",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "21",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "327",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "21",
    date: "10/19/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "324",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "152",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "357",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "336",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "10/12/19",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "371",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "152",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "364",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "10/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "354",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "21",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "325",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "21",
    date: "10/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "382",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "17",
    date: "9/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "353",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "9/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "344",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "334",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "22",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "339",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "378",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "75",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "352",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "144",
    date: "9/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "326",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "3",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "374",
    region_id: "3",
    campaign_id: "26",
    brand_id: "20"
  },
  {
    user_id: "139",
    date: "1/27/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "556",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "139",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "558",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "560",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "557",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "561",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "561",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "92",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "560",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "92",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "557",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "92",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "556",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "92",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "560",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "92",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "557",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "558",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "561",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "92",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "556",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "10/26/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "557",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "558",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "556",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "9/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "558",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "9/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "560",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "128",
    date: "9/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "565",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "9/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "561",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "9/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "557",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "130",
    date: "9/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "556",
    region_id: "5",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "96",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "8",
    brand_id: "5"
  },
  {
    user_id: "96",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "743",
    region_id: "5",
    campaign_id: "8",
    brand_id: "5"
  },
  {
    user_id: "96",
    date: "10/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "668",
    region_id: "5",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "69",
    date: "10/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "669",
    region_id: "5",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "18",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "739",
    region_id: "5",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "69",
    date: "10/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "774",
    region_id: "5",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "96",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "660",
    region_id: "5",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "18",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "96",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "707",
    region_id: "5",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "18",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "69",
    date: "10/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "777",
    region_id: "5",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "69",
    date: "2/28/21",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "658",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "2/28/21",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "630",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "2/27/21",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "786",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "2/27/21",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "625",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "2/26/21",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "653",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "2/26/21",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "640",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "3/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "691",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "3/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "778",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "3/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "616",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "3/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "744",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "101",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "654",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "3/1/20",
    start_time: "10:30 AM",
    duration: "3",
    venue_id: "573",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "3/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "684",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/29/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "619",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "683",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "578",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/29/20",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "602",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "38",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "516",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "628",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "599",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "687",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "656",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "101",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "579",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "747",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "778",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "38",
    date: "2/28/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "515",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/28/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "773",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "709",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/27/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "725",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/24/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "592",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "2/24/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "772",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/24/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "681",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/23/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "593",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "728",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "757",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "594",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "646",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "758",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "101",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "629",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "164",
    date: "2/23/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "696",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "648",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "622",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "661",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "634",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "708",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "730",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "782",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "695",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "665",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "759",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "588",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "131",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "697",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "2/22/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "611",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/22/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "657",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "596",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "691",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "779",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "2/21/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "735",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/20/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "678",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "729",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/17/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "573",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "785",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "623",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "2/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "736",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/17/20",
    start_time: "2:00 PM",
    duration: "4",
    venue_id: "635",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "2/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "673",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/17/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "727",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "762",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/16/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "586",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "597",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "713",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "699",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "740",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "642",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/16/20",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "587",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "714",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "639",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "737",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "706",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "651",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "101",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "654",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "744",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "598",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "718",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "686",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "584",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "659",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "745",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "101",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "580",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/15/20",
    start_time: "1:00 PM",
    duration: "3",
    venue_id: "775",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "710",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "674",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "719",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "652",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "692",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "585",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "760",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "164",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "677",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "783",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "101",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "581",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/15/20",
    start_time: "9:00 AM",
    duration: "3",
    venue_id: "783",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/14/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "732",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "164",
    date: "2/14/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "703",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/14/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "624",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "131",
    date: "2/14/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "716",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "647",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "70",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "791",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/13/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "641",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "2/12/20",
    start_time: "9:00 AM",
    duration: "6",
    venue_id: "693",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/10/20",
    start_time: "3:30 PM",
    duration: "4",
    venue_id: "604",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/10/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "749",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "70",
    date: "2/10/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "685",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "726",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "649",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "761",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/9/20",
    start_time: "2:30 PM",
    duration: "3",
    venue_id: "618",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "664",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "763",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "722",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "750",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "605",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "748",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "101",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "626",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "2/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "711",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "2/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "688",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "666",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "749",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "125",
    date: "2/8/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "717",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "2/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "705",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "582",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "595",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "684",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "617",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "606",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "589",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "2/3/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "613",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "574",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "616",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "733",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "614",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "25",
    date: "2/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "670",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "787",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "2/3/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "682",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "575",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "631",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "620",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "790",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "576",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "627",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "621",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "734",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "754",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "609",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "764",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "643",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "788",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "765",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "590",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "2/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "702",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "2/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "610",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "2/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "780",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "2/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "789",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "2/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "751",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "2/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "591",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "644",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "689",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "691",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "708",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/31/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "683",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "164",
    date: "1/31/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "677",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "1/28/20",
    start_time: "12:00 PM",
    duration: "4",
    venue_id: "762",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "573",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "1/27/20",
    start_time: "12:30 PM",
    duration: "3",
    venue_id: "751",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/27/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "641",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/27/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "663",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "624",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "627",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "613",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "699",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "659",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "593",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "589",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "631",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "164",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "696",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "125",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "644",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/25/20",
    start_time: "4:00 PM",
    duration: "3",
    venue_id: "682",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/25/20",
    start_time: "3:30 PM",
    duration: "4",
    venue_id: "585",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "779",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "689",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "718",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "678",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "607",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "776",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "750",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "709",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "688",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "191",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "611",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "719",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "744",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "767",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "621",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "670",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "722",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "692",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "763",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/24/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "620",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/24/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "722",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/24/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "700",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "649",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "70",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "657",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "635",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/23/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "634",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/22/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "726",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/20/20",
    start_time: "3:30 PM",
    duration: "4",
    venue_id: "602",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "762",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "628",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "755",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "70",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "684",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "636",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "577",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "754",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/20/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "741",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "70",
    date: "1/20/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "685",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/20/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "635",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/20/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "576",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "1/20/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "767",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "605",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "740",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "665",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "783",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "733",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "675",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/19/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "582",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "758",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "634",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "100",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "603",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "736",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "687",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "729",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "710",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "674",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "788",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "752",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "590",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "745",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/18/20",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "573",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "595",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "641",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "591",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "100",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "603",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "686",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "732",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "750",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "711",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "688",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "612",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "782",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "759",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "583",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "682",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "764",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "691",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "681",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "616",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "671",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "661",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "695",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "683",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "617",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "89",
    date: "1/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "514",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "191",
    date: "1/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "773",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "125",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "644",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/15/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "713",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/13/20",
    start_time: "3:30 PM",
    duration: "4",
    venue_id: "604",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "584",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "659",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "747",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "787",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/13/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "730",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/13/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "652",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/13/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "612",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "199",
    date: "1/13/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "720",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/12/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "586",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "624",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "654",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "747",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "719",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/12/20",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "592",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "651",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "706",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "748",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "699",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "111",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "674",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "718",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "125",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "643",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "164",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "716",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "100",
    date: "1/12/20",
    start_time: "10:30 AM",
    duration: "4",
    venue_id: "581",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "589",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "585",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "609",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "779",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "732",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "70",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "684",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "709",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "590",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "628",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "105",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "509",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "593",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "591",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "776",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "761",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "646",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "729",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "700",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "94",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "631",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "123",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "575",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "164",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "696",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "100",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "581",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "621",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "1/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "744",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/10/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "617",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/10/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "621",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "191",
    date: "1/10/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "785",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/10/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "695",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/10/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "656",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "616",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "70",
    date: "1/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "657",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "606",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "125",
    date: "1/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "717",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "1/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "670",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "723",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "69",
    date: "1/7/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "775",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "105",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "508",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "583",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "687",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "68",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "613",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "711",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "125",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "641",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "763",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "787",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "733",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/6/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "730",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/6/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "656",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "169",
    date: "1/6/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "789",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "582",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "780",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "737",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "778",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "757",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "605",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "164",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "677",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "105",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "514",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "765",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "748",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "672",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "754",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "780",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "600",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "773",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "760",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "681",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "783",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "595",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "678",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "105",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "513",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "130",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "559",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "686",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "23",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "760",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "761",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "70",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "689",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "125",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "655",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "164",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "703",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "772",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "606",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "96",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "713",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "736",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "70",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "791",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "692",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "752",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "745",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "85",
    date: "1/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "588",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "1/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "756",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "56",
    date: "1/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "755",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "103",
    date: "1/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "790",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "133",
    date: "1/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "782",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "178",
    date: "1/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "759",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "100",
    date: "12/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "580",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "57",
    date: "12/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "510",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "57",
    date: "12/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "508",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "92",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "568",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "92",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "570",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "18",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "770",
    region_id: "5",
    campaign_id: "10",
    brand_id: "7"
  },
  {
    user_id: "91",
    date: "9/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "91",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "91",
    date: "9/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "140",
    date: "3/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "140",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "3/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "510",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "23",
    date: "3/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "770",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "140",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "508",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "568",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "23",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "738",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "140",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "793",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "140",
    date: "2/28/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "802",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "2/28/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "2/24/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "2/24/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "525",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "508",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "81",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "553",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "510",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "796",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "550",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "140",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "793",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "140",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "519",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "89",
    date: "2/21/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "511",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "2/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "525",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "2/19/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "534",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "2/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "519",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "550",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "508",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "513",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "81",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "553",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "2/14/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "2/14/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "2/12/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "537",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "89",
    date: "2/10/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "512",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "550",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "23",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "738",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "550",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "1/31/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "1/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "537",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "89",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "511",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "89",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "512",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "551",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "89",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "514",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "25",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "770",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "89",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "513",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "544",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "25",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "738",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "534",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "1/24/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "530",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "1/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "1/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "519",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "89",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "514",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "89",
    date: "1/19/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "511",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "1/19/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "1/19/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "512",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "1/18/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "510",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "25",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "738",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "89",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "508",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "1/15/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "537",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "1/12/20",
    start_time: "3:30 PM",
    duration: "4",
    venue_id: "508",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "544",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "1/11/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "509",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "545",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "550",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "200",
    date: "1/10/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "803",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "550",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "525",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "1/5/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "514",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "105",
    date: "1/4/20",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "513",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "534",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "200",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "793",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "530",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "200",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "203",
    date: "12/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "513",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "12/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "531",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "12/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "534",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "12/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "12/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "679",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "12/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "675",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "203",
    date: "12/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "510",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "12/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "550",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "12/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "102",
    date: "12/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "723",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "12/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "533",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "12/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "525",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "12/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "12/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "69",
    date: "12/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "738",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "530",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "106",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "512",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "545",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "56",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "770",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "675",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "203",
    date: "12/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "511",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "12/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "531",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "12/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "203",
    date: "12/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "514",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "12/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "701",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "102",
    date: "12/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "723",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "57",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "512",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "92",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "562",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "92",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "572",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "57",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "514",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "106",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "512",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "770",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "172",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "551",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "102",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "701",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "200",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "793",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "738",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "533",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "203",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "508",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "92",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "568",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "203",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "514",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "12/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "531",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "57",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "513",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "92",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "568",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "92",
    date: "12/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "570",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "57",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "511",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "141",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "580",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "545",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "92",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "572",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "102",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "723",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "18",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "770",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "141",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "600",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "675",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "92",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "562",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "92",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "567",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "12/4/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "537",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "12/2/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "519",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "12/2/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "679",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "203",
    date: "12/1/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "508",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "12/1/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "11/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "103",
    date: "11/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "679",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "11/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "11/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "537",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "56",
    date: "11/25/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "738",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "57",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "513",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "103",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "701",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "203",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "514",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "533",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "100",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "553",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "531",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "141",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "601",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "11/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "675",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "57",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "510",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "100",
    date: "11/17/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "553",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "56",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "770",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "203",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "508",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "545",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "103",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "701",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "519",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "56",
    date: "11/11/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "738",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "770",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "533",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "525",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "11/3/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "177",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "550",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "531",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "675",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "545",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "10/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "701",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "797",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "106",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "514",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "10/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "545",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "106",
    date: "10/26/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "508",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "100",
    date: "10/26/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "553",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "10/26/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "701",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "800",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "10/25/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "10/25/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "770",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "10/24/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "544",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "146",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "795",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "57",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "509",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "533",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "10/19/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "177",
    date: "10/19/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "530",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "10/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "799",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "10/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "100",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "553",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "701",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "10/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "531",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "10/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "675",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "533",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "91",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "798",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "528",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "679",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "177",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "551",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "550",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "47",
    date: "10/11/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "535",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "10/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "545",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "13",
    date: "10/5/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "544",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "10/5/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "601",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "675",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "141",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "701",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "9/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "537",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "141",
    date: "9/25/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "601",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "679",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "111",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "770",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "80",
    date: "9/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "537",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "141",
    date: "9/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "675",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "141",
    date: "9/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "679",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "141",
    date: "9/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "601",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "96",
    date: "9/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "701",
    region_id: "5",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "103",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "712",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "1/30/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "777",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "103",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "712",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "130",
    date: "1/24/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "566",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "777",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "103",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "660",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "130",
    date: "1/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "566",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "96",
    date: "12/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "707",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "96",
    date: "12/30/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "712",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "96",
    date: "12/27/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "660",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "69",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "784",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "69",
    date: "12/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "69",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "669",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "69",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "774",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "777",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "130",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "555",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "731",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "13",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "546",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "130",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "571",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "130",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "563",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "96",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "712",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "96",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "660",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "130",
    date: "11/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "555",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "731",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "96",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "707",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "13",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "546",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "130",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "571",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "774",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "784",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "130",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "563",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "18",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "130",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "555",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "91",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "801",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "128",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "555",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "91",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "801",
    region_id: "5",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "80",
    date: "2/28/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "520",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "69",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "80",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "539",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "25",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "668",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "68",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "615",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "123",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "650",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "69",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "739",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "25",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "669",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "111",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "690",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "146",
    date: "12/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "801",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "111",
    date: "11/30/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "676",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "13",
    date: "11/30/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "546",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "146",
    date: "11/25/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "794",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "130",
    date: "11/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "555",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "18",
    date: "11/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "743",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "18",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "731",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "92",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "569",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "130",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "571",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "18",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "56",
    date: "11/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "769",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "18",
    date: "11/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "774",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "80",
    date: "9/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "517",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "96",
    date: "9/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "669",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "96",
    date: "9/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "650",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "100",
    date: "9/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "554",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "80",
    date: "9/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "523",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "18",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "111",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "739",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "130",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "555",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "96",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "608",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "111",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "777",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "130",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "563",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "96",
    date: "9/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "690",
    region_id: "5",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "96",
    date: "2/15/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "690",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "96",
    date: "2/15/21",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "792",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "96",
    date: "2/15/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "638",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "96",
    date: "2/15/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "660",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "96",
    date: "2/15/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "712",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "96",
    date: "2/15/21",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "704",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "6:30 PM",
    duration: "0.25",
    venue_id: "781",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "743",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "766",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "777",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "753",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "746",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "731",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "784",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "774",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "739",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "2/12/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "742",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "11/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "11/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "792",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "11/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "11/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "11/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "10/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "792",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "10/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "69",
    date: "10/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "139",
    date: "2/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "555",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "56",
    date: "2/21/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "784",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "130",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "564",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "178",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "18",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "777",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "69",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "784",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "178",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "18",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "739",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "139",
    date: "2/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "555",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "56",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "739",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "69",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "777",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "139",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "555",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "130",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "564",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "18",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "178",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "56",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "784",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "18",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "777",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "18",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "739",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "130",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "564",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "178",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "781",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "56",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "766",
    region_id: "5",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "167",
    date: "10/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "26",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "143",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "167",
    date: "10/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "17",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "12",
    date: "10/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "12",
    date: "10/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "12",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "20",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "143",
    date: "10/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "53",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "12",
    date: "10/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "45",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "45",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "45",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "47",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "11",
    date: "10/17/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "16",
    region_id: "2",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "167",
    date: "3/11/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "17",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "3/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "48",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "3/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "31",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "3/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "49",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "38",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/27/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "48",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "28",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "143",
    date: "2/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "52",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/25/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "16",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "162",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "50",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "11",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "40",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "11",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "22",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/20/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "20",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "2/20/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "22",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/19/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "48",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "16",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "143",
    date: "2/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "54",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/17/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "11",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "143",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "53",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "23",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "20",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "27",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "22",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "7",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "143",
    date: "2/6/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "54",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "143",
    date: "2/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "52",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "49",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "2/3/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "12",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "17",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/28/20",
    start_time: "5:45 PM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "38",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/27/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "16",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "34",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "11",
    date: "1/24/20",
    start_time: "4:00 PM",
    duration: "3",
    venue_id: "5",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "48",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/23/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "49",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "11",
    date: "1/19/20",
    start_time: "4:00 PM",
    duration: "4",
    venue_id: "1",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "33",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "3",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "7",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "31",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/14/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "12",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "21",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/13/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "32",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/13/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "40",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "20",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "11",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "23",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "9",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "36",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "26",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "167",
    date: "1/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "4",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "10",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "12",
    date: "1/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "39",
    region_id: "2",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "87",
    date: "3/7/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "19",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "87",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "41",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "3/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "3/6/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "3/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "18",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "3/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "3/2/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "8",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "41",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/28/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "6",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/28/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "8",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "6",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "2/25/20",
    start_time: "5:00 PM",
    duration: "3",
    venue_id: "18",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "2/25/20",
    start_time: "2:00 PM",
    duration: "3",
    venue_id: "18",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "41",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/17/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "207",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "44",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/14/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "8",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/11/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "2/10/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "41",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "2",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "207",
    date: "2/8/20",
    start_time: "10:30 AM",
    duration: "3",
    venue_id: "44",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/6/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "8",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "2/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "1/29/20",
    start_time: "5:00 PM",
    duration: "3",
    venue_id: "6",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "1/29/20",
    start_time: "2:00 PM",
    duration: "3",
    venue_id: "6",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "1/29/20",
    start_time: "10:30 AM",
    duration: "3",
    venue_id: "18",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "1/28/20",
    start_time: "2:30 PM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "1/28/20",
    start_time: "11:15 AM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "41",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "207",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "2",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "1/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "8",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "1/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "30",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "1/21/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "1/21/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "41",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "1/21/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "207",
    date: "1/9/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "2",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "1/3/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "12/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "2",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "12/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "18",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "12/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "12/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "12/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "12/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "12/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "12/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "19",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "12/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "2",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "8",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "11/30/19",
    start_time: "4:00 PM",
    duration: "3",
    venue_id: "6",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "11/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "2",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "11/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "19",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "11/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "2",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "11/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "45",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "44",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "207",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "44",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "11/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "19",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "11/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "11/19/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "6",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "11/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "8",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "11/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "18",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "45",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "35",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "207",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "44",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "18",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "11/3/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "41",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "10/31/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "8",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "10/31/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "10/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "2",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "10/29/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "41",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "10/29/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "10/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "42",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "10/28/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "6",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "19",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "45",
    date: "10/26/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "44",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "12",
    date: "10/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "25",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "10/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "2",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "10/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "6",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "8",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "167",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "43",
    region_id: "2",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "11",
    date: "2/28/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "2/28/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/28/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "38",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "14",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/26/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/21/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "13",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "2/20/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "38",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "11",
    date: "2/14/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/13/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "14",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "13",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "29",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/31/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "14",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/30/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/30/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "38",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/26/20",
    start_time: "10:45 AM",
    duration: "8.25",
    venue_id: "22",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/25/20",
    start_time: "10:45 AM",
    duration: "8.25",
    venue_id: "22",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/20/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "14",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "13",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/14/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "38",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "1/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "1/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "13",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "12/31/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "49",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "12/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "12/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "12/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "14",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "12/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "10",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "12/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "17",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "12/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "23",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "45",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "45",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "12/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "53",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "11/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "11/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "53",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "14",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "3",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "45",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "47",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "10",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "10/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "16",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "10/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "40",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "11",
    date: "10/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "167",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "17",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "10/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "53",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "10/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "10/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "9/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "14",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "207",
    date: "9/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "40",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "207",
    date: "9/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "16",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "9/12/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "143",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "53",
    region_id: "2",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "12",
    date: "2/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "32",
    region_id: "2",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "12",
    date: "2/13/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "167",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "17",
    region_id: "2",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "167",
    date: "12/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "13",
    region_id: "2",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "143",
    date: "11/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "54",
    region_id: "2",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "143",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "11",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "48",
    region_id: "2",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "143",
    date: "2/15/21",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "52",
    region_id: "2",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "143",
    date: "2/15/21",
    start_time: "1:30 PM",
    duration: "0.08",
    venue_id: "54",
    region_id: "2",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "143",
    date: "2/15/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "53",
    region_id: "2",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "143",
    date: "3/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "53",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "3/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "48",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "12",
    date: "3/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "3/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "24",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "3/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "49",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "10/26/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "11",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "10/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "17",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "143",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "53",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "45",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "46",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "45",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "47",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "11",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "20",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "12",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "32",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "11",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "22",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "45",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "12",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "40",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "182",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "14",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "11",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "7",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "24",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "143",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "12",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "12",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "28",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "12",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "207",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "15",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "143",
    date: "10/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "52",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "12",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "24",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "9/27/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "26",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "37",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "12",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "12",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "167",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "20",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "12",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "22",
    region_id: "2",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "12",
    date: "2/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "167",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "12",
    date: "2/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "27",
    region_id: "2",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "36",
    date: "4/16/21",
    start_time: "11:15 AM",
    duration: "0.25",
    venue_id: "151",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/12/21",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "162",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "1/6/21",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "151",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/4/20",
    start_time: "12:15 PM",
    duration: "0.25",
    venue_id: "162",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "12/4/20",
    start_time: "7:30 AM",
    duration: "0.25",
    venue_id: "151",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/25/20",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "162",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "11/20/20",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "151",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/9/20",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "162",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "10/2/20",
    start_time: "8:45 AM",
    duration: "0.25",
    venue_id: "151",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "6:00 PM",
    duration: "0.08",
    venue_id: "162",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "1",
    date: "9/3/20",
    start_time: "9:15 AM",
    duration: "0.08",
    venue_id: "151",
    region_id: "1",
    campaign_id: "1",
    brand_id: "1"
  },
  {
    user_id: "8",
    date: "2/28/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "189",
    region_id: "1",
    campaign_id: "6",
    brand_id: "3"
  },
  {
    user_id: "78",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "91",
    region_id: "1",
    campaign_id: "6",
    brand_id: "3"
  },
  {
    user_id: "8",
    date: "2/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "6",
    brand_id: "3"
  },
  {
    user_id: "8",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "6",
    brand_id: "3"
  },
  {
    user_id: "8",
    date: "12/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "187",
    region_id: "1",
    campaign_id: "6",
    brand_id: "3"
  },
  {
    user_id: "8",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "187",
    region_id: "1",
    campaign_id: "6",
    brand_id: "3"
  },
  {
    user_id: "42",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "183",
    region_id: "1",
    campaign_id: "6",
    brand_id: "3"
  },
  {
    user_id: "8",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "6",
    brand_id: "3"
  },
  {
    user_id: "8",
    date: "12/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "188",
    region_id: "1",
    campaign_id: "6",
    brand_id: "3"
  },
  {
    user_id: "143",
    date: "10/31/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "71",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "48",
    date: "10/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "180",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "143",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "68",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "48",
    date: "10/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "155",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "198",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "8",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "179",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "183",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "83",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "8",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "183",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "81",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "183",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "155",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "258",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "155",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "257",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "8",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "48",
    date: "9/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "48",
    date: "9/30/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "189",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "110",
    date: "9/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "110",
    date: "9/25/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "107",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "48",
    date: "9/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "179",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "110",
    date: "9/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "115",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "48",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "48",
    date: "9/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "186",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "143",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "70",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "109",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "84",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "54",
    date: "9/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "129",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "109",
    date: "9/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "128",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "78",
    date: "9/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "107",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "48",
    date: "9/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "188",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "109",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "170",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "66",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "69",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "66",
    date: "9/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "68",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "109",
    date: "9/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "174",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "138",
    date: "9/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "210",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "197",
    date: "9/12/19",
    start_time: "3:00 AM",
    duration: "4",
    venue_id: "287",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "54",
    date: "9/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "128",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "54",
    date: "9/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "124",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "78",
    date: "9/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "115",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "66",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "70",
    region_id: "1",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "28",
    date: "3/7/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1183",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "78",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "118",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "195",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "184",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "121",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "89",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "195",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "190",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "143",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "51",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "78",
    date: "1/24/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "110",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "110",
    date: "1/22/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "80",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "121",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "89",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "78",
    date: "1/19/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "100",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "110",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "97",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "109",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "125",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "110",
    date: "1/15/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "105",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "109",
    date: "1/13/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "177",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "143",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "51",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "110",
    date: "1/9/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "80",
    region_id: "1",
    campaign_id: "12",
    brand_id: "9"
  },
  {
    user_id: "78",
    date: "3/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "119",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "78",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "119",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "143",
    date: "2/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "72",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "26",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "72",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "26",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "72",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "78",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "119",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "26",
    date: "12/3/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "72",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "26",
    date: "11/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "72",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "78",
    date: "11/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "119",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "26",
    date: "10/21/19",
    start_time: "4:00 PM",
    duration: "3",
    venue_id: "72",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "78",
    date: "10/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "119",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "26",
    date: "10/8/19",
    start_time: "4:00 PM",
    duration: "3",
    venue_id: "72",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "66",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "72",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "78",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "119",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "78",
    date: "9/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "119",
    region_id: "1",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "78",
    date: "2/22/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "78",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "155",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "237",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "110",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "110",
    date: "1/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "110",
    date: "12/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "78",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "166",
    date: "12/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "210",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "110",
    date: "12/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "78",
    date: "12/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "115",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "161",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "186",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "161",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "189",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "48",
    date: "12/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "109",
    date: "12/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "143",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "78",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "107",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "109",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "128",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "8",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "188",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "155",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "258",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "155",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "247",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "26",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "69",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "109",
    date: "12/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "91",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "48",
    date: "12/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "48",
    date: "12/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "206",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "26",
    date: "12/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "68",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "155",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "198",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "155",
    date: "12/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "257",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "48",
    date: "11/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "109",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "129",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "109",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "124",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "48",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "8",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "189",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "109",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "84",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "109",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "128",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "26",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "6",
    venue_id: "70",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "48",
    date: "11/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "180",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "26",
    date: "11/6/19",
    start_time: "3:00 PM",
    duration: "5",
    venue_id: "69",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "26",
    date: "11/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "68",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "48",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "78",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "115",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "155",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "198",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "78",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "155",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "257",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "155",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "258",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "8",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "188",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "155",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "247",
    region_id: "1",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "121",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "170",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "8",
    date: "2/13/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "187",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "48",
    date: "2/12/20",
    start_time: "1:00 PM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "155",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "247",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "26",
    date: "11/29/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "71",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "48",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "189",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "48",
    date: "11/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "186",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "109",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "83",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "48",
    date: "11/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "180",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "26",
    date: "11/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "68",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "26",
    date: "11/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "69",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "78",
    date: "11/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "81",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "54",
    date: "11/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "128",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "143",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "58",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "48",
    date: "10/31/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "48",
    date: "10/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "185",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "42",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "186",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "42",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "189",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "42",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "8",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "183",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "93",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "151",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "42",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "180",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "8",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "188",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "42",
    date: "9/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "8",
    date: "9/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "179",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "42",
    date: "9/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "8",
    date: "9/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "187",
    region_id: "1",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "1",
    date: "7/1/20",
    start_time: "9:30 AM",
    duration: "0.08",
    venue_id: "128",
    region_id: "1",
    campaign_id: "18",
    brand_id: "14"
  },
  {
    user_id: "180",
    date: "3/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "195",
    date: "3/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "183",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "197",
    date: "3/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "287",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "197",
    date: "3/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "287",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "109",
    date: "3/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "124",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "197",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "287",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "197",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "287",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "197",
    date: "2/28/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "287",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "197",
    date: "2/28/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "287",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "110",
    date: "2/27/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "78",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "110",
    date: "2/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "78",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "109",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "124",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "109",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "124",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "78",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "78",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "121",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "78",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "121",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "78",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "121",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "121",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "170",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "42",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "179",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "42",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "180",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "121",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "174",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "166",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "183",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "185",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "42",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "188",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "110",
    date: "12/12/19",
    start_time: "4:00 PM",
    duration: "3",
    venue_id: "121",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "12/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "210",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "12/11/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "206",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "12/10/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "204",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "195",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "182",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "183",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "185",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "12/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "179",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "12/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "189",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "121",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "83",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "195",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "181",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "188",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "121",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "92",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "182",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "195",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "180",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "186",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "188",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "195",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "189",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "179",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "12/1/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "183",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "143",
    date: "11/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "70",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "183",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "143",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "71",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "182",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "188",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "78",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "107",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "11/19/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "180",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "181",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "11/17/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "182",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "78",
    date: "11/17/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "121",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "195",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "187",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "155",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "198",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "185",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "143",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "69",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "155",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "257",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "189",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "26",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "70",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "26",
    date: "11/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "69",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "11/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "204",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "210",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "42",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "155",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "258",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "181",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "155",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "247",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "180",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "185",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "42",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "42",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "189",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "42",
    date: "11/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "185",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "42",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "210",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "42",
    date: "11/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "54",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "128",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "54",
    date: "11/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "124",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "54",
    date: "11/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "129",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "183",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "11/3/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "188",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "189",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "10/30/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "210",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "48",
    date: "10/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "54",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "129",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "54",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "124",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "9/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "181",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "8",
    date: "9/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "183",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "8",
    date: "9/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "9/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "185",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "161",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "189",
    region_id: "1",
    campaign_id: "19",
    brand_id: "14"
  },
  {
    user_id: "143",
    date: "2/14/21",
    start_time: "5:00 PM",
    duration: "0.25",
    venue_id: "67",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "143",
    date: "2/14/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "70",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "143",
    date: "2/14/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "68",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "143",
    date: "2/14/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "71",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "143",
    date: "2/14/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "69",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "143",
    date: "2/14/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "58",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "185",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "10:45 AM",
    duration: "0.25",
    venue_id: "189",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "187",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "10:15 AM",
    duration: "0.25",
    venue_id: "186",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "183",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "9:45 AM",
    duration: "0.25",
    venue_id: "188",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "9:30 AM",
    duration: "0.25",
    venue_id: "179",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "9:15 AM",
    duration: "0.25",
    venue_id: "181",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "180",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "8:45 AM",
    duration: "0.25",
    venue_id: "182",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "8:30 AM",
    duration: "0.25",
    venue_id: "204",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "8:15 AM",
    duration: "0.25",
    venue_id: "206",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "2/12/21",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "210",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "11/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "186",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "11/14/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "11/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "11/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "11/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "10/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "42",
    date: "10/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "186",
    region_id: "1",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "195",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "161",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "183",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "180",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "210",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/19/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "206",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/18/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "186",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "206",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "195",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "161",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "183",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "161",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "186",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "161",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "186",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "206",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "180",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "179",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "183",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "180",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "188",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "195",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "182",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "204",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "180",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "179",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "180",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "188",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "210",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "48",
    date: "2/5/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "210",
    region_id: "1",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "122",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1264",
    region_id: "8",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "122",
    date: "10/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1265",
    region_id: "8",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "113",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1262",
    region_id: "8",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "113",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1260",
    region_id: "8",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "117",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1266",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "99",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1243",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "99",
    date: "9/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1240",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "122",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1260",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "175",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1233",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "181",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1240",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "122",
    date: "9/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1262",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "113",
    date: "9/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1258",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "181",
    date: "9/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1252",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "122",
    date: "9/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1258",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "122",
    date: "9/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1260",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "175",
    date: "9/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1240",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "175",
    date: "9/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1243",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "117",
    date: "9/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1266",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "175",
    date: "9/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1233",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "181",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1243",
    region_id: "8",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "122",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1262",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1258",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1262",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "117",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1265",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "1/5/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1258",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "117",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1265",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1264",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "175",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1252",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1262",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1258",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "11/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1263",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "11/17/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1259",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "117",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1265",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1261",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "181",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1252",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "10/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1264",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1262",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1258",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1265",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "122",
    date: "9/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1262",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "113",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1264",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "117",
    date: "9/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1265",
    region_id: "8",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "181",
    date: "2/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1233",
    region_id: "8",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "175",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1240",
    region_id: "8",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "175",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1244",
    region_id: "8",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "175",
    date: "2/15/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "1240",
    region_id: "8",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "175",
    date: "2/15/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "1217",
    region_id: "8",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "175",
    date: "2/15/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "1225",
    region_id: "8",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "175",
    date: "2/15/21",
    start_time: "12:00 PM",
    duration: "0.25",
    venue_id: "1251",
    region_id: "8",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "175",
    date: "2/15/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "1233",
    region_id: "8",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "175",
    date: "2/15/21",
    start_time: "10:00 AM",
    duration: "0.25",
    venue_id: "1243",
    region_id: "8",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "175",
    date: "2/15/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "1244",
    region_id: "8",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "175",
    date: "2/15/21",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "1252",
    region_id: "8",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "122",
    date: "11/24/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1267",
    region_id: "8",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "122",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1257",
    region_id: "8",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "175",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1252",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "175",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1240",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "175",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1243",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "175",
    date: "2/22/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1252",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "181",
    date: "2/21/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1240",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "175",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1243",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "122",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1258",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "181",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1240",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "175",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1243",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "175",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1252",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "122",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1262",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "117",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1258",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "122",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1262",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "181",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1243",
    region_id: "8",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "73",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "993",
    region_id: "7",
    campaign_id: "8",
    brand_id: "5"
  },
  {
    user_id: "41",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "807",
    region_id: "7",
    campaign_id: "8",
    brand_id: "5"
  },
  {
    user_id: "148",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "964",
    region_id: "7",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "209",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "983",
    region_id: "7",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "34",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "991",
    region_id: "7",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "132",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "949",
    region_id: "7",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "136",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1046",
    region_id: "7",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "151",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "925",
    region_id: "7",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "132",
    date: "10/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "151",
    date: "10/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "148",
    date: "9/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "970",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "7",
    date: "9/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "972",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "151",
    date: "9/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "905",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "62",
    date: "9/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "965",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "148",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "151",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "951",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "7",
    date: "9/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "887",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "148",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "977",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "88",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "987",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "151",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "900",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "88",
    date: "9/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "990",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "132",
    date: "9/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "940",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "132",
    date: "9/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "936",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "151",
    date: "9/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "904",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "88",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "991",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "132",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "944",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "151",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "174",
    date: "9/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "921",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "88",
    date: "9/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "988",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "132",
    date: "9/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "960",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "30",
    date: "9/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1006",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "132",
    date: "9/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "934",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "151",
    date: "9/13/19",
    start_time: "5:30 PM",
    duration: "4",
    venue_id: "942",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "132",
    date: "9/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "973",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "151",
    date: "9/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "908",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "7",
    date: "9/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "890",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "62",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "884",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "151",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "73",
    date: "9/8/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "993",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "62",
    date: "9/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "883",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "174",
    date: "9/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "914",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "132",
    date: "9/8/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "961",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "30",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1007",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "151",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "906",
    region_id: "7",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "62",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "132",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "7",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "7",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "124",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "124",
    date: "1/5/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "999",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1003",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "34",
    date: "12/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "991",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1004",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "994",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1001",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "996",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1011",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/19/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "997",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "7",
    date: "12/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "891",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1002",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "124",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "73",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "993",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1005",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "998",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1010",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "136",
    date: "12/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1046",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1000",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "7",
    date: "12/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "73",
    date: "12/8/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "993",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "132",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1006",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "995",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "132",
    date: "12/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "925",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/5/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1009",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "124",
    date: "12/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1008",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "11/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "994",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "11/29/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1000",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "11/25/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1009",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "11/24/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1010",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1011",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "11/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1001",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "11/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "998",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "30",
    date: "11/11/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1008",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "73",
    date: "11/8/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "993",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "132",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "132",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "148",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "964",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "136",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1046",
    region_id: "7",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "124",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "960",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/30/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "913",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "885",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "927",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "973",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "974",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/22/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "957",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "906",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "945",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "909",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "963",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "949",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "957",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "34",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "991",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "937",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "41",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "806",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "928",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "954",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "958",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/10/19",
    start_time: "4:00 PM",
    duration: "3",
    venue_id: "925",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "894",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "928",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "52",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1040",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "12/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "952",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "949",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "906",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "41",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "807",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "973",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "52",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1039",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "925",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "909",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "41",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "806",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "73",
    date: "12/1/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "993",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "11/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "978",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "11/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "961",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "52",
    date: "11/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1040",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "11/25/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "966",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "934",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "11/24/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "949",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "4",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "928",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "907",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "925",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "11/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "959",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "11/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "893",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "174",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "922",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "174",
    date: "11/17/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "923",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "4",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "949",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "888",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "11/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "882",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "973",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "949",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "52",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1039",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "174",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "917",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "174",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "918",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "893",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "909",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "41",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "806",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "11/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "895",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "934",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "967",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "906",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/4/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "174",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "899",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "174",
    date: "11/3/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "951",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "977",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "961",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "73",
    date: "11/1/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "993",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "11/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/28/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "907",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "955",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "953",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "34",
    date: "10/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "991",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/26/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "935",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "901",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/24/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "916",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "978",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "910",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "148",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "979",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "10/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "931",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "902",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "949",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "73",
    date: "10/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "993",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "29",
    date: "10/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "939",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "903",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "10/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "950",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "906",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/19/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "907",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "888",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "915",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "29",
    date: "10/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "886",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "912",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "33",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "959",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "10/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "896",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "932",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "209",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "981",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "946",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "10/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "962",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "209",
    date: "10/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "984",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "947",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "209",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "985",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "10/11/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "932",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "922",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "10/6/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "934",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "961",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "209",
    date: "10/4/19",
    start_time: "3:30 PM",
    duration: "3",
    venue_id: "982",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "9/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "948",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "941",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "932",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "9/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "944",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "946",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "950",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "943",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "936",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "906",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "902",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "947",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "154",
    date: "9/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "807",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "912",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "154",
    date: "9/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "806",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "916",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "132",
    date: "9/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "960",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "124",
    date: "9/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "907",
    region_id: "7",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "73",
    date: "2/13/21",
    start_time: "1:00 PM",
    duration: "0.25",
    venue_id: "993",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "34",
    date: "12/29/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "989",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "124",
    date: "12/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "932",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "136",
    date: "12/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1045",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "132",
    date: "12/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "929",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "132",
    date: "12/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "929",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "136",
    date: "12/26/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1045",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "151",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "930",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "52",
    date: "12/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1041",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "124",
    date: "12/19/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "932",
    region_id: "7",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "124",
    date: "3/22/20",
    start_time: "3:30 PM",
    duration: "1.5",
    venue_id: "924",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "3/22/20",
    start_time: "1:00 PM",
    duration: "1.5",
    venue_id: "946",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "3/22/20",
    start_time: "11:30 AM",
    duration: "1.5",
    venue_id: "932",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "3/22/20",
    start_time: "9:00 AM",
    duration: "1.5",
    venue_id: "910",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "3/21/20",
    start_time: "11:00 AM",
    duration: "1.5",
    venue_id: "980",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "3/20/20",
    start_time: "1:00 PM",
    duration: "1.5",
    venue_id: "889",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "3/20/20",
    start_time: "11:00 AM",
    duration: "1.5",
    venue_id: "967",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "3/19/20",
    start_time: "5:00 PM",
    duration: "1.5",
    venue_id: "969",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "3/19/20",
    start_time: "3:00 PM",
    duration: "1.5",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "3/15/20",
    start_time: "3:00 PM",
    duration: "1.5",
    venue_id: "903",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "3/15/20",
    start_time: "1:00 PM",
    duration: "1.5",
    venue_id: "915",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "3/15/20",
    start_time: "11:15 AM",
    duration: "1.5",
    venue_id: "902",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "3/15/20",
    start_time: "9:30 AM",
    duration: "1.5",
    venue_id: "912",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "3/9/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "953",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "3/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "962",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "7",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "3/6/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "897",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "32",
    date: "3/1/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "933",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "886",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "2/28/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "2/28/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "2/27/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "935",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "2/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1039",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "2/24/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "897",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "7",
    date: "2/23/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "2/20/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "906",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "2/17/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "933",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "7",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "2/15/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "2/14/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "2/14/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "949",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "2/14/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "953",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "2/13/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "2/11/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "886",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "7",
    date: "2/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1042",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "30",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1007",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "7",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "962",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "1/30/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "886",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "1/30/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "935",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "953",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "1/27/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "933",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "30",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1007",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "7",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1039",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "1/20/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "1/19/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "888",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "34",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "991",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "1/18/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "897",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "925",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "30",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1007",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "1/9/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "962",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1042",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "949",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "7",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "888",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "34",
    date: "11/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "992",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "148",
    date: "11/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "11/29/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "897",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "916",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1039",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "916",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "953",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "148",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "11/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "11/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "34",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "991",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "953",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "148",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "964",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "11/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "897",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "11/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "34",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "992",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "901",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "148",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1039",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "933",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "11/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "913",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "33",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "888",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "33",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "888",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1042",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "901",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "10/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1039",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "886",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "935",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "148",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "964",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "897",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "962",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "33",
    date: "10/13/19",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "34",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "992",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "33",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "888",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1042",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "925",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "30",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1006",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "10/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "953",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "30",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1007",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "968",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "933",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "174",
    date: "10/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "34",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "992",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "62",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "888",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1039",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "10/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "9/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "935",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "9/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "953",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "9/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "9/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "897",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "9/26/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "953",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "34",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "991",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "9/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1042",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "9/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "9/19/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "919",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "9/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "909",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "9/16/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "30",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1006",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "34",
    date: "9/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "991",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "9/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "897",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "151",
    date: "9/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "962",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "52",
    date: "9/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1039",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "132",
    date: "9/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "925",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "30",
    date: "9/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1007",
    region_id: "7",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "124",
    date: "2/25/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "957",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "62",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "62",
    date: "2/22/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "124",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "151",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "925",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "124",
    date: "2/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "32",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "925",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "124",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "928",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "151",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "925",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "62",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "964",
    region_id: "7",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "213",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "193",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "434",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "193",
    date: "11/19/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "429",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "31",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "448",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "193",
    date: "11/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "436",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "142",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "438",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "142",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "430",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "31",
    date: "10/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "448",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "213",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "193",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "436",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "115",
    date: "9/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "430",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "142",
    date: "9/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "436",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "142",
    date: "9/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "434",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "31",
    date: "9/12/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "448",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "31",
    date: "9/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "2",
    brand_id: "2"
  },
  {
    user_id: "27",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "394",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "400",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "43",
    date: "1/25/20",
    start_time: "2:00 PM",
    duration: "3",
    venue_id: "418",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "1/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "407",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "400",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "1/2/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "403",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "51",
    date: "12/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "9",
    date: "12/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "498",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "51",
    date: "12/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "9",
    date: "12/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "499",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "118",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "394",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "12/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "43",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "417",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "12/12/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "406",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "9",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "499",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "400",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "9",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "498",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "119",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "400",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "43",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "417",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "403",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "12/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "12/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "11/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "11/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "119",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "400",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "119",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "400",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "51",
    date: "11/17/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "11/17/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "403",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "11/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "40",
    date: "11/10/19",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "391",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "20",
    date: "11/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "406",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "11/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "406",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "51",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "27",
    date: "11/3/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "394",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "407",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "40",
    date: "10/27/19",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "391",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "51",
    date: "10/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "20",
    date: "10/26/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "406",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "189",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "416",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "211",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "498",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "51",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "142",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "189",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "416",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "27",
    date: "10/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "391",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "211",
    date: "10/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "498",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "20",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "407",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "10/12/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/12/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "189",
    date: "10/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "415",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "406",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "403",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "51",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "51",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "27",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "394",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "9/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "40",
    date: "9/22/19",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "391",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "20",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "406",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "142",
    date: "9/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "20",
    date: "9/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "9/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "9/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "115",
    date: "9/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "9/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "40",
    date: "9/8/19",
    start_time: "12:00 PM",
    duration: "3",
    venue_id: "391",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "196",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "211",
    date: "9/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "498",
    region_id: "4",
    campaign_id: "7",
    brand_id: "4"
  },
  {
    user_id: "44",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "398",
    region_id: "4",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "211",
    date: "10/27/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "499",
    region_id: "4",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "115",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "115",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "213",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "465",
    region_id: "4",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "31",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "450",
    region_id: "4",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "31",
    date: "10/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "189",
    date: "10/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "416",
    region_id: "4",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "31",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "460",
    region_id: "4",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "51",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "196",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "196",
    date: "9/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "196",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "51",
    date: "9/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "422",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "193",
    date: "9/27/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "193",
    date: "9/27/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "193",
    date: "9/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "20",
    date: "9/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "196",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "196",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "196",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "51",
    date: "9/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "20",
    date: "9/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "399",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "115",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "165",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "412",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "196",
    date: "9/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "142",
    date: "9/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "423",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "142",
    date: "9/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "58",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "398",
    region_id: "4",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "65",
    date: "3/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "439",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "184",
    date: "3/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "115",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "430",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "196",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "429",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "2/29/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "65",
    date: "2/21/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "439",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "9",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "497",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "2/3/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "65",
    date: "1/27/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "439",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/26/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "466",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/25/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "470",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "1/21/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "469",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/19/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/11/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "470",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "466",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "193",
    date: "1/7/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "432",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "1/7/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "469",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "65",
    date: "1/7/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "440",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "9",
    date: "1/5/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "497",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "1/5/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "12/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "12/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "469",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "65",
    date: "12/19/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "440",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "193",
    date: "12/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "429",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "458",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "12/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "9",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "497",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "12/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "470",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "12/1/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "466",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "193",
    date: "11/26/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "429",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "11/26/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "469",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "11/24/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "469",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "11/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "11/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "469",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "470",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "11/17/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "466",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "470",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "211",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "497",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "11/2/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "466",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "10/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "466",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "142",
    date: "10/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "430",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "142",
    date: "10/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "429",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "10/7/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "452",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "10/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "453",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "10/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "466",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "10/5/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "470",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "470",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "10/4/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "469",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "211",
    date: "9/30/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "497",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "9/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "466",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "9/17/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "31",
    date: "9/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "456",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "9/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "469",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "9/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "466",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "9/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "470",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "213",
    date: "9/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "469",
    region_id: "4",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "115",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "2/28/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "409",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "2/23/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "16",
    date: "2/8/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "16",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "409",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "1/19/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "409",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "1/18/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "1/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "1/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "16",
    date: "1/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "16",
    date: "1/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "40",
    date: "12/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "391",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "12/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "410",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "44",
    date: "12/26/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "401",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "408",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "9",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "498",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "44",
    date: "12/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "404",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "12/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "44",
    date: "12/17/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "12/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "409",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "185",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "500",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "51",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "423",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "43",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "417",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "12/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "412",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "65",
    date: "12/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "441",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "12/12/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "451",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "450",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "9",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "499",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "12/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "449",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "12/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "119",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "51",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "423",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "211",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "498",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "119",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "406",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "437",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "11/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "408",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "119",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "398",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "51",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "435",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "449",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "412",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "451",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "409",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "119",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "401",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "410",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "119",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "404",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "119",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "399",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "196",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "11/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "450",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "44",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "404",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "44",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "211",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "498",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "115",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "189",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "416",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "10/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "454",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "10/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "450",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "189",
    date: "9/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "416",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "20",
    date: "9/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "9/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "31",
    date: "9/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "450",
    region_id: "4",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "157",
    date: "2/29/20",
    start_time: "12:00 PM",
    duration: "4",
    venue_id: "410",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "196",
    date: "2/22/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "422",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "65",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "441",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "185",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "500",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "196",
    date: "2/2/20",
    start_time: "2:00 PM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "44",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "406",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "158",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "482",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "211",
    date: "2/1/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "499",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "211",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "498",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "44",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "399",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "44",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "404",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "44",
    date: "11/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "401",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "44",
    date: "11/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "398",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "51",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "196",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "157",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "408",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "213",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "444",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "31",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "460",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "213",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "464",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "20",
    date: "9/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "406",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "165",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "410",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "196",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "431",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "115",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "213",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "462",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "142",
    date: "9/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "31",
    date: "9/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "443",
    region_id: "4",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "157",
    date: "2/15/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "412",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "157",
    date: "2/14/21",
    start_time: "7:45 PM",
    duration: "0.25",
    venue_id: "408",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "157",
    date: "2/14/21",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "409",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "157",
    date: "2/14/21",
    start_time: "6:15 PM",
    duration: "0.25",
    venue_id: "410",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/14/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "459",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/14/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "457",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/14/21",
    start_time: "9:45 AM",
    duration: "0.25",
    venue_id: "444",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/14/21",
    start_time: "9:00 AM",
    duration: "0.25",
    venue_id: "445",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/14/21",
    start_time: "8:00 AM",
    duration: "0.25",
    venue_id: "460",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "16",
    date: "2/13/21",
    start_time: "7:30 PM",
    duration: "0.25",
    venue_id: "396",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "16",
    date: "2/13/21",
    start_time: "6:45 PM",
    duration: "0.25",
    venue_id: "406",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "16",
    date: "2/13/21",
    start_time: "5:45 PM",
    duration: "0.25",
    venue_id: "404",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "16",
    date: "2/13/21",
    start_time: "4:45 PM",
    duration: "0.25",
    venue_id: "401",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "16",
    date: "2/13/21",
    start_time: "4:15 PM",
    duration: "0.25",
    venue_id: "398",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/13/21",
    start_time: "4:00 PM",
    duration: "0.25",
    venue_id: "447",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/13/21",
    start_time: "3:15 PM",
    duration: "0.25",
    venue_id: "450",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "16",
    date: "2/13/21",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "399",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/13/21",
    start_time: "2:15 PM",
    duration: "0.25",
    venue_id: "451",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/13/21",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "449",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/13/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "455",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/13/21",
    start_time: "11:45 AM",
    duration: "0.25",
    venue_id: "454",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "184",
    date: "2/13/21",
    start_time: "11:00 AM",
    duration: "0.25",
    venue_id: "443",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "6:30 PM",
    duration: "0.25",
    venue_id: "423",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "5:30 PM",
    duration: "0.25",
    venue_id: "419",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "4:30 PM",
    duration: "0.25",
    venue_id: "422",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "3:30 PM",
    duration: "0.25",
    venue_id: "435",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "2:30 PM",
    duration: "0.25",
    venue_id: "437",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "1:30 PM",
    duration: "0.25",
    venue_id: "426",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "433",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "11:30 AM",
    duration: "0.25",
    venue_id: "431",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "10:30 AM",
    duration: "0.25",
    venue_id: "420",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "196",
    date: "2/12/21",
    start_time: "9:30 AM",
    duration: "0.25",
    venue_id: "428",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "158",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "473",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "1/27/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "449",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "1/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "455",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "158",
    date: "1/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "473",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "1/18/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "449",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "1/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "158",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "473",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "1/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "451",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "158",
    date: "1/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "473",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "158",
    date: "12/31/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "473",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "158",
    date: "12/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "473",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "12/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "455",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "12/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "12/27/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "12/27/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "12/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "449",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "12/26/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "449",
    region_id: "4",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "31",
    date: "3/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "460",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "185",
    date: "3/8/20",
    start_time: "1:00 PM",
    duration: "4",
    venue_id: "500",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "196",
    date: "3/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "428",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "184",
    date: "2/28/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "184",
    date: "2/27/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "465",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "31",
    date: "10/31/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "454",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "31",
    date: "10/31/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "31",
    date: "10/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "454",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "31",
    date: "10/30/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "460",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "51",
    date: "10/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "424",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "213",
    date: "10/26/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "457",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "211",
    date: "10/26/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "499",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "44",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "404",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "213",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "462",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "213",
    date: "10/25/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "461",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "115",
    date: "10/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "426",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "44",
    date: "10/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "401",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "44",
    date: "10/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "396",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "213",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "464",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "51",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "419",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "213",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "465",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "31",
    date: "10/19/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "455",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "31",
    date: "10/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "454",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "31",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "451",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "31",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "450",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "189",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "416",
    region_id: "4",
    campaign_id: "23",
    brand_id: "17"
  },
  {
    user_id: "186",
    date: "2/13/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "457",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "158",
    date: "2/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "473",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "31",
    date: "2/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "186",
    date: "2/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "457",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "31",
    date: "2/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "450",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "186",
    date: "2/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "457",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "158",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "473",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "31",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "31",
    date: "2/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "450",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "158",
    date: "2/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "473",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "31",
    date: "2/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "447",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "31",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "450",
    region_id: "4",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "135",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "8",
    brand_id: "5"
  },
  {
    user_id: "41",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "804",
    region_id: "6",
    campaign_id: "8",
    brand_id: "5"
  },
  {
    user_id: "6",
    date: "10/26/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "821",
    region_id: "6",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "135",
    date: "10/25/19",
    start_time: "3:00 AM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "116",
    date: "10/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "837",
    region_id: "6",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "116",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "832",
    region_id: "6",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "24",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "9",
    brand_id: "6"
  },
  {
    user_id: "149",
    date: "10/18/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "872",
    region_id: "6",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "149",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "870",
    region_id: "6",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "149",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "878",
    region_id: "6",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "149",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "869",
    region_id: "6",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "149",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "880",
    region_id: "6",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "149",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "876",
    region_id: "6",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "149",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "874",
    region_id: "6",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "149",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "868",
    region_id: "6",
    campaign_id: "11",
    brand_id: "8"
  },
  {
    user_id: "198",
    date: "3/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "61",
    date: "3/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "839",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "83",
    date: "3/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "840",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "107",
    date: "3/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "864",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "107",
    date: "3/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "865",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "72",
    date: "3/5/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "809",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "3/2/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "2/29/20",
    start_time: "2:00 PM",
    duration: "3",
    venue_id: "828",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "83",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "845",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "2/28/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "877",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "2/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "61",
    date: "2/23/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "830",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "2/23/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "862",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "2/23/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "61",
    date: "2/23/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "837",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "120",
    date: "2/21/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "820",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "2/21/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "2/20/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "2/20/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "2/20/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "2/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "881",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "2/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "816",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "61",
    date: "2/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "839",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "852",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "107",
    date: "2/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "864",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "2/15/20",
    start_time: "2:00 PM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "107",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "865",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "120",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "848",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "822",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "861",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "2/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "814",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "61",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "833",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "83",
    date: "2/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "845",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "61",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "832",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "83",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "842",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "90",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "823",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "863",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "856",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "98",
    date: "2/7/20",
    start_time: "1:00 PM",
    duration: "3",
    venue_id: "873",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "2/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "855",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "2/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "2/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "858",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "859",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "1/31/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "839",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "1/31/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "861",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "1/31/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "816",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "863",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "126",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "824",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "1/26/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "837",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "814",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "168",
    date: "1/25/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "107",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "865",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "126",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "821",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "1/25/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "830",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "168",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "881",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "120",
    date: "1/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "820",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "83",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "842",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "858",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "107",
    date: "1/18/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "865",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "168",
    date: "1/17/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "881",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "120",
    date: "1/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "848",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "1/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "1/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "855",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "120",
    date: "1/16/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "820",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "1/12/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "816",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "856",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "83",
    date: "1/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "840",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "1/10/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "822",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "1/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "875",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "1/9/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "877",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "1/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "120",
    date: "1/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "848",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "1/5/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "107",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "864",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "833",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "1/4/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "863",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "1/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "832",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "1/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "1/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "1/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "862",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "1/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "859",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "1/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "1/2/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "12/30/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "12/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "814",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "12/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "12/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "814",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "12/28/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "855",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "12/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "12/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "830",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "12/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "12/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "862",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "814",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "90",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "856",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "837",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "12/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "12/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "833",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "168",
    date: "12/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "877",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "12/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "835",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "12/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "873",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "12/17/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "861",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "12/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "855",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "816",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "107",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "864",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "168",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "881",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "816",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "83",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "842",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "863",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "12/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "120",
    date: "12/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "820",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "12/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "12/12/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "120",
    date: "12/9/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "845",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "816",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "12/8/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "179",
    date: "12/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "814",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "90",
    date: "12/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "823",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "859",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "145",
    date: "12/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "816",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "12/6/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "822",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "120",
    date: "12/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "848",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "12/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "858",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "12/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "875",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "83",
    date: "12/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "840",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "107",
    date: "12/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "865",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "11/30/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "873",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "11/30/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "11/29/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "11/29/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "877",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "11/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "824",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "881",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "11/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "863",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "11/24/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "863",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "11/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "856",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "830",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "859",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "176",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "90",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "823",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "11/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "11/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "11/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "11/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "11/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "858",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "859",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "11/17/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "11/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "11/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "859",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "11/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "842",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "11/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "840",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "11/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "11/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "855",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "830",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "881",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "95",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "859",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "83",
    date: "11/10/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "833",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "198",
    date: "11/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "813",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "881",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "11/8/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "822",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "11/8/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "845",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "153",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "821",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/4/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "881",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/4/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "11/4/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "840",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "153",
    date: "11/3/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "11/3/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "856",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "104",
    date: "11/2/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "858",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "842",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "6",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "832",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "11/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "848",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "832",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/28/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "839",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/27/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "821",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "6",
    date: "10/25/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "835",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/24/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "835",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/24/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "835",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "832",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "837",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "856",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "858",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "824",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "10/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "840",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "10/18/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "822",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "10/18/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "842",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "839",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "6",
    date: "10/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "824",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "10/14/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "153",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "839",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "10/13/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "862",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "153",
    date: "10/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "830",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "837",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "830",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "855",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "10/12/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "833",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "6",
    date: "10/12/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "10/12/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "848",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "845",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "10/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "821",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "98",
    date: "10/11/19",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "873",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "10/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "848",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "10/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "858",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "10/6/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "856",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "10/6/19",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "863",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "98",
    date: "10/4/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "877",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "10/4/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "824",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "9/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "822",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "9/30/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "848",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "37",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "848",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "863",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "856",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "9/27/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "9/27/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "9/23/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "835",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "9/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "837",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "832",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "9/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "862",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "116",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "9/22/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "873",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "9/21/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "873",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "24",
    date: "9/19/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "9/16/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "832",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "858",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "9/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "835",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "212",
    date: "9/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "845",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "205",
    date: "9/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "64",
    date: "9/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "858",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "60",
    date: "9/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "824",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "208",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "855",
    region_id: "6",
    campaign_id: "13",
    brand_id: "10"
  },
  {
    user_id: "149",
    date: "1/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "168",
    date: "1/10/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "168",
    date: "1/10/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "149",
    date: "1/6/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "41",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "804",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "90",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "149",
    date: "12/15/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "135",
    date: "12/14/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "149",
    date: "12/13/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "149",
    date: "12/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "875",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "135",
    date: "12/1/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "149",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "149",
    date: "11/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "875",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "24",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "135",
    date: "11/7/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "41",
    date: "11/4/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "804",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "149",
    date: "11/4/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "153",
    date: "11/3/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "135",
    date: "11/2/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "135",
    date: "10/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "208",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "212",
    date: "10/5/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "135",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "60",
    date: "9/9/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "825",
    region_id: "6",
    campaign_id: "14",
    brand_id: "11"
  },
  {
    user_id: "168",
    date: "2/21/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "881",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "212",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "827",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "205",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "860",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "149",
    date: "2/4/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "875",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "95",
    date: "12/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "851",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "24",
    date: "11/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "854",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "149",
    date: "11/17/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "149",
    date: "11/16/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "205",
    date: "11/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "857",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "149",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "879",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "205",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "116",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "837",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "116",
    date: "9/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "835",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "60",
    date: "9/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "824",
    region_id: "6",
    campaign_id: "15",
    brand_id: "12"
  },
  {
    user_id: "41",
    date: "12/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "804",
    region_id: "6",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "41",
    date: "11/8/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "804",
    region_id: "6",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "41",
    date: "10/11/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "804",
    region_id: "6",
    campaign_id: "17",
    brand_id: "13"
  },
  {
    user_id: "114",
    date: "2/15/21",
    start_time: "3:00 PM",
    duration: "0.25",
    venue_id: "809",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "114",
    date: "2/15/21",
    start_time: "2:00 PM",
    duration: "0.25",
    venue_id: "810",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "60",
    date: "2/13/21",
    start_time: "8:00 PM",
    duration: "0.25",
    venue_id: "827",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "60",
    date: "2/13/21",
    start_time: "7:30 PM",
    duration: "0.25",
    venue_id: "832",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "60",
    date: "2/13/21",
    start_time: "7:00 PM",
    duration: "0.25",
    venue_id: "830",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "60",
    date: "2/13/21",
    start_time: "6:30 PM",
    duration: "0.25",
    venue_id: "837",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "60",
    date: "2/13/21",
    start_time: "6:00 PM",
    duration: "0.25",
    venue_id: "835",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "60",
    date: "2/13/21",
    start_time: "5:30 PM",
    duration: "0.25",
    venue_id: "839",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "60",
    date: "2/13/21",
    start_time: "4:45 PM",
    duration: "0.25",
    venue_id: "824",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "60",
    date: "2/13/21",
    start_time: "12:30 PM",
    duration: "0.25",
    venue_id: "825",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "82",
    date: "12/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1048",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "198",
    date: "12/27/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "812",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "137",
    date: "12/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1035",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "60",
    date: "12/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "818",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "198",
    date: "12/27/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "812",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "198",
    date: "12/23/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "811",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "212",
    date: "12/23/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "819",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/22/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1016",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/22/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1015",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1028",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "137",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1036",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "83",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "841",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "149",
    date: "12/21/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "866",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/20/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1016",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1028",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/19/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1018",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/16/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1033",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1033",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "145",
    date: "12/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "815",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/15/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1018",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1012",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "206",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1025",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "198",
    date: "12/15/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "811",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "12/14/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1012",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "137",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1035",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "206",
    date: "12/14/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1030",
    region_id: "6",
    campaign_id: "21",
    brand_id: "15"
  },
  {
    user_id: "135",
    date: "3/18/20",
    start_time: "11:15 AM",
    duration: "1.5",
    venue_id: "1027",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/18/20",
    start_time: "9:30 AM",
    duration: "1.5",
    venue_id: "1018",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/16/20",
    start_time: "1:15 PM",
    duration: "1.5",
    venue_id: "1012",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/16/20",
    start_time: "11:30 AM",
    duration: "1.5",
    venue_id: "1030",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/16/20",
    start_time: "9:30 AM",
    duration: "1.5",
    venue_id: "1032",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/14/20",
    start_time: "2:15 PM",
    duration: "1.5",
    venue_id: "1031",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/14/20",
    start_time: "12:15 PM",
    duration: "1.5",
    venue_id: "1021",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/14/20",
    start_time: "10:30 AM",
    duration: "1.5",
    venue_id: "1019",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "137",
    date: "3/7/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1034",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/6/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1013",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "3/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1013",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "2/29/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "82",
    date: "2/29/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1047",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "2/28/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1023",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "2/24/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1013",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "2/22/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "137",
    date: "2/16/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1034",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "82",
    date: "2/15/20",
    start_time: "2:00 PM",
    duration: "4",
    venue_id: "1049",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "2/10/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1013",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "2/9/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "137",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1037",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "2/8/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "206",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "3",
    venue_id: "1023",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "82",
    date: "2/2/20",
    start_time: "2:00 PM",
    duration: "4",
    venue_id: "1047",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "2/2/20",
    start_time: "11:00 AM",
    duration: "4",
    venue_id: "1029",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "2/1/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "137",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1037",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "1/26/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "206",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1022",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "1/24/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "82",
    date: "1/24/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1047",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "1/19/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "137",
    date: "1/18/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1034",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "1/17/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1022",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "1/15/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "206",
    date: "1/12/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1023",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "1/11/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1013",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "1/6/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1029",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "1/4/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "137",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1034",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "206",
    date: "1/4/20",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1023",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "1/3/20",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "137",
    date: "11/30/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1038",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "76",
    date: "11/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1047",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "137",
    date: "11/29/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1037",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "206",
    date: "11/25/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1023",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "82",
    date: "11/23/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1049",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "11/22/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "112",
    date: "11/17/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "206",
    date: "11/17/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1024",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "206",
    date: "11/16/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1023",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "82",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1047",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "112",
    date: "11/10/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1017",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "82",
    date: "11/10/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1049",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "11/9/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1022",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "11/1/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "112",
    date: "10/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1013",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "10/20/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1024",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "10/19/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "112",
    date: "10/13/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1017",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "10/13/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1023",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "10/12/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1022",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "82",
    date: "10/11/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1047",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "10/7/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1014",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "10/6/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "10/5/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "112",
    date: "9/29/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1017",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "9/29/19",
    start_time: "11:00 AM",
    duration: "3",
    venue_id: "1023",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "9/28/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1013",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "9/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1022",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "9/20/19",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "112",
    date: "9/15/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1017",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "9/14/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1029",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "9/9/19",
    start_time: "3:00 PM",
    duration: "3",
    venue_id: "1026",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "9/8/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1020",
    region_id: "6",
    campaign_id: "22",
    brand_id: "16"
  },
  {
    user_id: "135",
    date: "12/21/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1022",
    region_id: "6",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "135",
    date: "10/20/19",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "1022",
    region_id: "6",
    campaign_id: "24",
    brand_id: "18"
  },
  {
    user_id: "60",
    date: "2/28/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "824",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "61",
    date: "2/16/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "824",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "208",
    date: "2/15/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "862",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "149",
    date: "2/14/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "205",
    date: "2/13/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "149",
    date: "2/13/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "149",
    date: "2/12/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "149",
    date: "2/11/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "875",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "149",
    date: "2/9/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "875",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "149",
    date: "2/8/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "205",
    date: "2/7/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "149",
    date: "2/7/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "871",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "205",
    date: "2/3/20",
    start_time: "3:00 PM",
    duration: "4",
    venue_id: "853",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "149",
    date: "2/3/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "867",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  },
  {
    user_id: "149",
    date: "2/1/20",
    start_time: "10:00 AM",
    duration: "4",
    venue_id: "875",
    region_id: "6",
    campaign_id: "25",
    brand_id: "19"
  }
];

const seedDemos = () => Demo.bulkCreate(demoData);

module.exports = seedDemos;
