import { EDIT_TRANSACTION } from '../actions/index';

const initialState = {
  2018: {
    8: {
      19: {
        2147483176: { id: 2147483176, date: 1534723200000, description: "GRAETERS16", category: "Dessert", individual: "Both", amount: -8, isVisible: true },
        2147483177: { id: 2147483177, date: 1534723200000, description: "MAPLEWOOD KITCHEN & BA", category: "Meals (Food)", individual: "Both", amount: -40.66, isVisible: true }	},
  		18: {
        2147483178: { id: 2147483178, date: 1534636800000, description: "LYFT   *RIDE SAT 3PM", category: "Entertainment", individual: "Both", amount: -6.99, isVisible: true },
  			2147483179: { id: 2147483179, date: 1534636800000, description: "LYFT   *RIDE SAT 11PM", category: "Entertainment", individual: "Both", amount: -9.79, isVisible: true },
  			2147483180: { id: 2147483180, date: 1534636800000, description: "GOMEZ SALSA OTR", category: "Meals (Food)", individual: "Both", amount: -18, isVisible: true },
  			2147483181: { id: 2147483181, date: 1534636800000, description: "QUAN HAPA", category: "Meals (Food)", individual: "Both", amount: -33.25, isVisible: true },
  			2147483182: { id: 2147483182, date: 1534636800000, description: "TAFTS ALE HOUSE", category: "Entertainment", individual: "Both", amount: -35.25, isVisible: true }	},
  		17: {
        2147483183: { id: 2147483183, date: 1534550400000, description: "SPEEDWAY 09693 CIN", category: "Gas", individual: "Both", amount: -37.75, isVisible: true } },
  		16: {
        2147483184: { id: 2147483184, date: 1534464000000, description: "TRADER JOE'S #669  QPS", category: "Groceries", individual: "Both", amount: -123.9, isVisible: true },
  			2147483185: { id: 2147483185, date: 1534464000000, description: "WHOLEFDS CIN 10287", category: "Groceries", individual: "Both", amount: -72.55, isVisible: true },
  			2147483186: { id: 2147483186, date: 1534464000000, description: "SOUTHWES  5261478963587", category: "Transportation", individual: "Both", amount: -156.1, isVisible: true } },
  		15: {
        2147483187: { id: 2147483187, date: 1534377600000, description: "MIOS ANDERSON", category: "Meals (Food)", individual: "Both", amount: -67.25, isVisible: true },
  			2147483188: { id: 2147483188, date: 1534377600000, description: "MT AUBURN URGENT CARE", category: "Medical", individual: "Both", amount: -205, isVisible: true }	},
  		14: {
        2147483189: { id: 2147483189, date: 1534291200000, description: "CRATE&BARREL CB2 NOD", category: "Wedding", individual: "Both", amount: -49.55, isVisible: true },
  			2147483190: { id: 2147483190, date: 1534291200000, description: "TICKETS*CINCIN REDS", category: "Entertainment", individual: "Both", amount: -84.5, isVisible: true },
  			2147483191: { id: 2147483191, date: 1534291200000, description: "DNC GRT AMR BALLPARK F", category: "Beer", individual: "Both", amount: -16.25, isVisible: true },
  			2147483192: { id: 2147483192, date: 1534291200000, description: "AC HOTELS BY MARRIOTT", category: "Beer", individual: "Both", amount: -14, isVisible: true },
  			2147483193: { id: 2147483193, date: 1534291200000, description: "DNC GRT AMR BALLPARK F", category: "Dessert", individual: "Both", amount: -10.25, isVisible: true }	},
  		13: {
        2147483194: { id: 2147483194, date: 1534204800000, description: "APL* ITUNES.COM/BILL", category: "Materistic", individual: "Both", amount: -1.29, isVisible: true }	},
  		12: {
        2147483195: { id: 2147483195, date: 1534118400000, description: "PILOT         00000141", category: "Gas", individual: "Both", amount: -33.75, isVisible: true },
  			2147483196: { id: 2147483196, date: 1534118400000, description: "HANDEL'S ICE CREAM", category: "Dessert", individual: "Both", amount: -9.58, isVisible: true }	},
  		10: {
        2147483197: { id: 2147483197, date: 1533945600000, description: "PANERA BREAD #204785", category: "Dessert", individual: "Both", amount: -18.13, isVisible: true },
  			2147483198: { id: 2147483198, date: 1533945600000, description: "2348 GREAT CLIPS AT PA", category: "Miscellaneous", individual: "Both", amount: -17, isVisible: true },
  			2147483199: { id: 2147483199, date: 1533945600000, description: "SPEEDWAY 09693 CIN", category: "Gas", individual: "Both", amount: -24.75, isVisible: true }	},
  		9: {
        2147483200: { id: 2147483200, date: 1533859200000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -2.75, isVisible: true },
  			2147483201: { id: 2147483201, date: 1533859200000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -1.75, isVisible: true }	},
  		8: {
        2147483202: { id: 2147483202, date: 1533772800000, description: "TRADER JOE'S #669  QPS", category: "Groceries", individual: "Both", amount: -96.36, isVisible: true },
  			2147483203: { id: 2147483203, date: 1533772800000, description: "DIBELLA'S #131", category: "Meals (Food)", individual: "Both", amount: -8.29, isVisible: true }	},
  		7: {
        2147483204: { id: 2147483204, date: 1533686400000, description: "SUNDRY AND VICE", category: "Meals (Food)", individual: "Both", amount: -24.25, isVisible: true }	},
  		6: {
        2147483205: { id: 2147483205, date: 1533600000000, description: "UNITED DAIRY FARMERS", category: "Gas", individual: "Both", amount: -33.76, isVisible: true },
  			2147483206: { id: 2147483206, date: 1533600000000, description: "LITTLE CAESARS 1586 00", category: "Meals (Food)", individual: "Both", amount: -11.1, isVisible: true }	},
  		4: {
        2147483207: { id: 2147483207, date: 1533427200000, description: "DELTA     00623355459801", category: "Transportation", individual: "Both", amount: -178.4, isVisible: true },
  			2147483208: { id: 2147483208, date: 1533427200000, description: "DELTA     00623355459790", category: "Transportation", individual: "Both", amount: -178.4, isVisible: true }	},
  		3: {
        2147483209: { id: 2147483209, date: 1533340800000, description: "MEDICAL MUTUAL OF OHIO", category: "Medical", individual: "Both", amount: -416.9, isVisible: true }	},
  		2: {
        2147483210: { id: 2147483210, date: 1533254400000, description: "TRADER JOE'S #669  QPS", category: "Groceries", individual: "Both", amount: -98.89, isVisible: true },
  			2147483211: { id: 2147483211, date: 1533254400000, description: "PASSPORT PARKING", category: "Entertainment", individual: "Both", amount: -1.96, isVisible: true }	}	},
  	7: {
      31: {
        2147483212: { id: 2147483212, date: 1533081600000, description: "DENTATRUST", category: "Dentist", individual: "Both", amount: -29.37, isVisible: true },
  			2147483213: { id: 2147483213, date: 1533081600000, description: "JUNGLE JIM'S EASTGAT", category: "Beer", individual: "Both", amount: -141.17, isVisible: true },
  			2147483214: { id: 2147483214, date: 1533081600000, description: "TMOBILE*AUTO PAY", category: "Phone", individual: "Both", amount: -220.39, isVisible: true }	},
  		30: {
        2147483215: { id: 2147483215, date: 1532995200000, description: "TARGET        00024836", category: "Materistic", individual: "Both", amount: -37.07, isVisible: true },
  			2147483216: { id: 2147483216, date: 1532995200000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -84.82, isVisible: true },
  			2147483217: { id: 2147483217, date: 1532995200000, description: "KROGER FUEL #4423", category: "Gas", individual: "Both", amount: -34.76, isVisible: true },
  			2147483218: { id: 2147483218, date: 1532995200000, description: "APL* ITUNES.COM/BILL", category: "Materistic", individual: "Both", amount: -0.99, isVisible: true },
  			2147483219: { id: 2147483219, date: 1532995200000, description: "EL RIO GRANDE", category: "Meals (Food)", individual: "Both", amount: -31.25, isVisible: true },
  			2147483220: { id: 2147483220, date: 1532995200000, description: "UDEMY ONLINE COURSES", category: "Education", individual: "Both", amount: -14.99, isVisible: true }	},
  		29: {
        2147483221: { id: 2147483221, date: 1532908800000, description: "SQU*SQ *DEEPER ROOTS C", category: "Beer", individual: "Both", amount: -17.92, isVisible: true }	},
  		28: {
        2147483222: { id: 2147483222, date: 1532822400000, description: "GRAETERS52", category: "Dessert", individual: "Both", amount: -11.13, isVisible: true },
  			2147483223: { id: 2147483223, date: 1532822400000, description: "AC HOTELS BY MARRIOTT", category: "Beer", individual: "Both", amount: -15, isVisible: true },
  			2147483224: { id: 2147483224, date: 1532822400000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -2.85, isVisible: true },
  			2147483225: { id: 2147483225, date: 1532822400000, description: "KROGER FUEL #4423", category: "Gas", individual: "Both", amount: -32.76, isVisible: true },
  			2147483226: { id: 2147483226, date: 1532822400000, description: "MOERLEIN LAGER HOUSE", category: "Meals (Food)", individual: "Both", amount: -51.25, isVisible: true },
  			2147483227: { id: 2147483227, date: 1532822400000, description: "2222 Great Clips at Ne", category: "Miscellaneous", individual: "Both", amount: -13.25, isVisible: true }	},
  		27: {
        2147483228: { id: 2147483228, date: 1532736000000, description: "G-MIAMI FOOD AIRPORT", category: "Meals (Travel)", individual: "Both", amount: -9.61, isVisible: true },
  			2147483229: { id: 2147483229, date: 1532736000000, description: "FAMILY AUTO RENTAL", category: "Transportation", individual: "Both", amount: -12.25, isVisible: true },
  			2147483230: { id: 2147483230, date: 1532736000000, description: "MIAMI AIRP WENDYS", category: "Meals (Travel)", individual: "Both", amount: -13, isVisible: true },
  			2147483231: { id: 2147483231, date: 1532736000000, description: "AMERICAN  0010263210159", category: "Transportation", individual: "Both", amount: -25, isVisible: true },
  			2147483232: { id: 2147483232, date: 1532736000000, description: "LYFT   *RIDE FRI 10PM", category: "Transportation", individual: "Both", amount: -24.48, isVisible: true },
  			2147483233: { id: 2147483233, date: 1532736000000, description: "LYFT   *RIDE FRI 10PM", category: "Transportation", individual: "Both", amount: -2, isVisible: true },
  			2147483234: { id: 2147483234, date: 1532736000000, description: "MARATHON PETRO186312", category: "Gas", individual: "Both", amount: -24.5, isVisible: true },
  			2147483235: { id: 2147483235, date: 1532736000000, description: "AMERICAN  0010263210165", category: "Transportation", individual: "Both", amount: -25, isVisible: true }	},
  		26: {
        2147483236: { id: 2147483236, date: 1532649600000, description: "WALGREENS #7089", category: "Medical", individual: "Both", amount: -9.99, isVisible: true },
  			2147483237: { id: 2147483237, date: 1532649600000, description: "RICKYS BLUE HEAVEN RES", category: "Meals (Travel)", individual: "Both", amount: -67.25, isVisible: true }	},
  		25: {
        2147483238: { id: 2147483238, date: 1532563200000, description: "TWC*TIMEWARNERCABLE", category: "Internet", individual: "Both", amount: -44.99, isVisible: true },
  			2147483239: { id: 2147483239, date: 1532563200000, description: "BOYDS KEY WEST CAMPGRO", category: "Accomodation", individual: "Both", amount: 75, isVisible: true },
  			2147483240: { id: 2147483240, date: 1532563200000, description: "BIG PINE KEY FISHING L", category: "Accomodation", individual: "Both", amount: 51.75, isVisible: true },
  			2147483241: { id: 2147483241, date: 1532563200000, description: "WECYCLEKWCOM", category: "Accomodation", individual: "Both", amount: 21.5, isVisible: true },
  			2147483242: { id: 2147483242, date: 1532563200000, description: "PEGASUS INTERNATIONAL", category: "Accomodation", individual: "Both", amount: -573.13, isVisible: true },
  			2147483243: { id: 2147483243, date: 1532563200000, description: "The Cafe", category: "Meals (Travel)", individual: "Both", amount: -52.25, isVisible: true },
  			2147483244: { id: 2147483244, date: 1532563200000, description: "LOOE KEY DIVE CENTER", category: "Excursions", individual: "Both", amount: -42.95, isVisible: true },
  			2147483245: { id: 2147483245, date: 1532563200000, description: "INT*IN *KERMIT'S KEY W", category: "Dessert", individual: "Both", amount: -4.84, isVisible: true }	},
  		24: {
        2147483246: { id: 2147483246, date: 1532476800000, description: "BUCKTOOTH ROOSTER", category: "Meals (Travel)", individual: "Both", amount: -33.25, isVisible: true },
  			2147483247: { id: 2147483247, date: 1532476800000, description: "A DEEP BLUE DIVE CENTE", category: "Excursions", individual: "Both", amount: -117.5, isVisible: true }	},
  		23: {
        2147483248: { id: 2147483248, date: 1532390400000, description: "BEALLS OUT", category: "Unknown", individual: "Both", amount: -6.43, isVisible: true },
  			2147483249: { id: 2147483249, date: 1532390400000, description: "WALGREENS #3574", category: "Groceries", individual: "Both", amount: -10.89, isVisible: true },
  			2147483250: { id: 2147483250, date: 1532390400000, description: "FAMILY AUTO RENTAL", category: "Transportation", individual: "Both", amount: -248.25, isVisible: true },
  			2147483251: { id: 2147483251, date: 1532390400000, description: "CASTAWAY WATERFRONT RE", category: "Meals (Travel)", individual: "Both", amount: -35.45, isVisible: true },
  			2147483252: { id: 2147483252, date: 1532390400000, description: "IBC TASTING ROOM", category: "Meals (Travel)", individual: "Both", amount: -16.15, isVisible: true }	},
  		22: {
        2147483253: { id: 2147483253, date: 1532304000000, description: "LYFT   *RIDE SUN 3AM", category: "Transportation", individual: "Both", amount: -22.48, isVisible: true },
  			2147483254: { id: 2147483254, date: 1532304000000, description: "LYFT   *RIDE SUN 3AM", category: "Transportation", individual: "Both", amount: -4, isVisible: true },
  			2147483255: { id: 2147483255, date: 1532304000000, description: "EXPEDIA 7367696214316", category: "Accomodation", individual: "Both", amount: -161.1, isVisible: true },
  			2147483256: { id: 2147483256, date: 1532304000000, description: "TST* TASTE OF BELGIUM", category: "Meals (Food)", individual: "Both", amount: -34.25, isVisible: true },
  			2147483257: { id: 2147483257, date: 1532304000000, description: "BIG PINE KEY FISHING L", category: "Accomodation", individual: "Both", amount: -51.75, isVisible: true },
  			2147483258: { id: 2147483258, date: 1532304000000, description: "FLORIDA STATE PARKS", category: "Accomodation", individual: "Both", amount: -49.7, isVisible: true },
  			2147483259: { id: 2147483259, date: 1532304000000, description: "ALDI 77061", category: "Meals (Travel)", individual: "Both", amount: -42.37, isVisible: true },
  			2147483260: { id: 2147483260, date: 1532304000000, description: "LORELEI OF ISLAMORADA", category: "Meals (Travel)", individual: "Both", amount: -35.25, isVisible: true },
  			2147483261: { id: 2147483261, date: 1532304000000, description: "FLORIDA KEYS BREWING C", category: "Meals (Travel)", individual: "Both", amount: -13.25, isVisible: true },
  			2147483262: { id: 2147483262, date: 1532304000000, description: "AMERICAN  0010262541442", category: "Transportation", individual: "Both", amount: -50, isVisible: true }	},
  		21: {
        2147483263: { id: 2147483263, date: 1532217600000, description: "AMAZON MKTPLACE PMTS", category: "Unknown", individual: "Both", amount: -179.99, isVisible: true },
  			2147483264: { id: 2147483264, date: 1532217600000, description: "RAJA INDIA RESTAURANT", category: "Meals (Food)", individual: "Both", amount: -12.77, isVisible: true },
  			2147483265: { id: 2147483265, date: 1532217600000, description: "BOYDS KEY WEST CAMPGRO", category: "Accomodation", individual: "Both", amount: -75, isVisible: true },
  			2147483266: { id: 2147483266, date: 1532217600000, description: "WECYCLEKWCOM", category: "Accomodation", individual: "Both", amount: -21.5, isVisible: true },
  			2147483267: { id: 2147483267, date: 1532217600000, description: "DANGER CHARTERS", category: "Excursions", individual: "Both", amount: -234.24, isVisible: true }	},
  		20: {
        2147483268: { id: 2147483268, date: 1532131200000, description: "MARSHALLS #1101", category: "Materistic", individual: "Both", amount: -151.88, isVisible: true },
  			2147483269: { id: 2147483269, date: 1532131200000, description: "AMERICAN  00121010033351", category: "Transportation", individual: "Both", amount: -354.4, isVisible: true },
  			2147483270: { id: 2147483270, date: 1532131200000, description: "AMERICAN  00121010033340", category: "Transportation", individual: "Both", amount: -354.4, isVisible: true }	},
  		19: {
        2147483271: { id: 2147483271, date: 1532044800000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -1.25, isVisible: true },
  			2147483272: { id: 2147483272, date: 1532044800000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -1.75, isVisible: true },
  			2147483273: { id: 2147483273, date: 1532044800000, description: "MOTR PUB", category: "Meals (Food)", individual: "Both", amount: -24.25, isVisible: true }	},
  		18: {
        2147483274: { id: 2147483274, date: 1531958400000, description: "CBCS", category: "Meals (Food)", individual: "Both", amount: -94.69, isVisible: true }	},
  		17: {
        2147483275: { id: 2147483275, date: 1531872000000, description: "SQU*SQ *UPPER CUP COFF", category: "Dessert", individual: "Both", amount: -3, isVisible: true },
  			2147483276: { id: 2147483276, date: 1531872000000, description: "SQU*SQ *THE ANGRY BAKE", category: "Dessert", individual: "Both", amount: -21.11, isVisible: true },
  			2147483277: { id: 2147483277, date: 1531872000000, description: "SQU*SQ *UPPER CUP COFF", category: "Dessert", individual: "Both", amount: -7, isVisible: true }	},
  		16: {
        2147483278: { id: 2147483278, date: 1531785600000, description: "BP#88736971615 HIGHQPS", category: "Gas", individual: "Both", amount: -37.76, isVisible: true }	},
  		15: {
        2147483279: { id: 2147483279, date: 1531699200000, description: "VALTERS MAENNERCHO", category: "Gas", individual: "Both", amount: -37.26, isVisible: true }	},
  		14: {
        2147483280: { id: 2147483280, date: 1531612800000, description: "FUTBOL CLUB CINCINNATI", category: "Entertainment", individual: "Both", amount: -81.75, isVisible: true }	},
  		13: {
        2147483281: { id: 2147483281, date: 1531526400000, description: "FLIPDADDY'S NEWPORT", category: "Meals (Food)", individual: "Both", amount: -43.25, isVisible: true },
  			2147483282: { id: 2147483282, date: 1531526400000, description: "TARGET        00024836", category: "Materistic", individual: "Both", amount: -66.76, isVisible: true }	},
  		12: {
        2147483283: { id: 2147483283, date: 1531440000000, description: "GRAETERS12", category: "Dessert", individual: "Both", amount: -7, isVisible: true }	},
  		10: {
        2147483284: { id: 2147483284, date: 1531267200000, description: "LUCKIE'S PONY KEG", category: "Beer", individual: "Both", amount: -15.25, isVisible: true }	},
  		9: {
        2147483285: { id: 2147483285, date: 1531180800000, description: "THE WOODBURN BREWERY", category: "Beer", individual: "Both", amount: -20.25, isVisible: true }	},
  		6: {
        2147483286: { id: 2147483286, date: 1530921600000, description: "TJMAXX #0606", category: "Materistic", individual: "Both", amount: -22.45, isVisible: true },
  			2147483287: { id: 2147483287, date: 1530921600000, description: "TRADER JOE'S #669  QPS", category: "Groceries", individual: "Both", amount: -193.46, isVisible: true }	},
  		5: {
        2147483288: { id: 2147483288, date: 1530835200000, description: "TAFTS ALE HOUSE", category: "Meals (Food)", individual: "Both", amount: -54.18, isVisible: true },
  			2147483289: { id: 2147483289, date: 1530835200000, description: "TARGET        00024836", category: "Materistic", individual: "Both", amount: -44.46, isVisible: true },
  			2147483290: { id: 2147483290, date: 1530835200000, description: "ALDI 61085", category: "Groceries", individual: "Both", amount: -41.43, isVisible: true }	},
  		3: {
        2147483291: { id: 2147483291, date: 1530662400000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -33.5, isVisible: true }	},
  		1: {
        2147483292: { id: 2147483292, date: 1530489600000, description: "DENTATRUST", category: "Dentist", individual: "Both", amount: -29.37, isVisible: true },
  			2147483293: { id: 2147483293, date: 1530489600000, description: "THE PARTY SOURCE", category: "Beer", individual: "Both", amount: -21.39, isVisible: true }	}	},
  	6: {
      30: {
        2147483294: { id: 2147483294, date: 1530403200000, description: "TMOBILE*AUTO PAY", category: "Phone", individual: "Both", amount: -226.25, isVisible: true },
  			2147483295: { id: 2147483295, date: 1530403200000, description: "APL* ITUNES.COM/BILL", category: "Materistic", individual: "Both", amount: -0.99, isVisible: true },
  			2147483296: { id: 2147483296, date: 1530403200000, description: "THE DARI BARN", category: "Unknown", individual: "Both", amount: -9, isVisible: true }	},
  		29: {
        2147483297: { id: 2147483297, date: 1530316800000, description: "SPEEDWAY 07611 115", category: "Gas", individual: "Both", amount: -37.8, isVisible: true }	},
  		28: {
        2147483298: { id: 2147483298, date: 1530230400000, description: "JIFFY LUBE #1554", category: "Car Repairs", individual: "Both", amount: -323.79, isVisible: true },
  			2147483299: { id: 2147483299, date: 1530230400000, description: "TJMAXX #0007", category: "Materistic", individual: "Both", amount: 127.16, isVisible: true },
  			2147483300: { id: 2147483300, date: 1530230400000, description: "GROUPON INC", category: "Materistic", individual: "Both", amount: -79.99, isVisible: true }	},
  		27: {
        2147483301: { id: 2147483301, date: 1530144000000, description: "WHOLEFDS CIN 10287", category: "Groceries", individual: "Both", amount: -68.74, isVisible: true },
  			2147483302: { id: 2147483302, date: 1530144000000, description: "TRADER JOE'S #669  QPS", category: "Groceries", individual: "Both", amount: -115.17, isVisible: true },
  			2147483303: { id: 2147483303, date: 1530144000000, description: "BED BATH & BEYOND #301", category: "Materistic", individual: "Both", amount: 51.35, isVisible: true }	},
  		25: {
        2147483304: { id: 2147483304, date: 1529971200000, description: "TWC*TIMEWARNERCABLE", category: "Internet", individual: "Both", amount: -44.99, isVisible: true }	},
  		24: {
        2147483305: { id: 2147483305, date: 1529884800000, description: "CLOUD NINE SUSHI", category: "Meals (Food)", individual: "Both", amount: -29.25, isVisible: true },
  			2147483306: { id: 2147483306, date: 1529884800000, description: "SHELL OIL 57446338303", category: "Gas", individual: "Both", amount: -30.76, isVisible: true }	},
  		21: {
        2147483307: { id: 2147483307, date: 1529625600000, description: "OLD MOHAWK", category: "Meals (Food)", individual: "Both", amount: -31.25, isVisible: true }	},
  		19: {
        2147483308: { id: 2147483308, date: 1529452800000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -4, isVisible: true },
  			2147483309: { id: 2147483309, date: 1529452800000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -36.86, isVisible: true },
  			2147483310: { id: 2147483310, date: 1529452800000, description: "MEDICAL MUTUAL OF OHIO", category: "Medical", individual: "Both", amount: -416.9, isVisible: true }	},
  		17: {
        2147483311: { id: 2147483311, date: 1529280000000, description: "SPEEDWAY 03623 282", category: "Gas", individual: "Both", amount: -16.75, isVisible: true },
  			2147483312: { id: 2147483312, date: 1529280000000, description: "Little Apple Golf Cour", category: "Entertainment", individual: "Both", amount: -4.5, isVisible: true },
  			2147483313: { id: 2147483313, date: 1529280000000, description: "Little Apple Golf Cour", category: "Entertainment", individual: "Both", amount: -19, isVisible: true },
  			2147483314: { id: 2147483314, date: 1529280000000, description: "WHIT`S FROZEN CUSTARD", category: "Dessert", individual: "Both", amount: -8.25, isVisible: true }	},
  		16: {
        2147483315: { id: 2147483315, date: 1529193600000, description: "UNITED DAIRY FARMERS #", category: "Gas", individual: "Both", amount: -36.75, isVisible: true },
  			2147483316: { id: 2147483316, date: 1529193600000, description: "STREETSIDE BREWING", category: "Beer", individual: "Both", amount: -14.25, isVisible: true },
  			2147483317: { id: 2147483317, date: 1529193600000, description: "THE PARTY SOURCE", category: "Beer", individual: "Both", amount: -60.93, isVisible: true },
  			2147483318: { id: 2147483318, date: 1529193600000, description: "BURGER KING #13921 Q07", category: "Meals (Food)", individual: "Both", amount: -4.12, isVisible: true }	},
  		12: {
        2147483319: { id: 2147483319, date: 1528848000000, description: "PINNACLE GOLF CLUB   F", category: "Entertainment", individual: "Both", amount: -62.25, isVisible: true }	},
  		10: {
        2147483320: { id: 2147483320, date: 1528675200000, description: "KROGER FUEL #4355", category: "Gas", individual: "Both", amount: -37.26, isVisible: true },
  			2147483321: { id: 2147483321, date: 1528675200000, description: "CPR CINCINNATI LLC", category: "Unknown", individual: "Both", amount: -70, isVisible: true }	},
  		9: {
        2147483322: { id: 2147483322, date: 1528588800000, description: "KROGER #447", category: "Groceries", individual: "Both", amount: -12.83, isVisible: true },
  			2147483323: { id: 2147483323, date: 1528588800000, description: "DOCS PLACE - MULBERRY", category: "Meals (Food)", individual: "Both", amount: -34.25, isVisible: true },
  			2147483324: { id: 2147483324, date: 1528588800000, description: "1063 GREAT CLIPS AT ME", category: "Miscellaneous", individual: "Both", amount: -33, isVisible: true },
  			2147483325: { id: 2147483325, date: 1528588800000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -2.25, isVisible: true }	},
  		8: {
        2147483326: { id: 2147483326, date: 1528502400000, description: "BIG LOTS STORES - #010", category: "Materistic", individual: "Both", amount: -6.36, isVisible: true },
  			2147483327: { id: 2147483327, date: 1528502400000, description: "CITY VIEW TAVERN", category: "Meals (Food)", individual: "Both", amount: -34.25, isVisible: true }	},
  		6: {
        2147483328: { id: 2147483328, date: 1528329600000, description: "Nike Jeffersonvi 095", category: "Materistic", individual: "Both", amount: -107.24, isVisible: true },
  			2147483329: { id: 2147483329, date: 1528329600000, description: "TJMAXX #0007", category: "Materistic", individual: "Both", amount: -127.16, isVisible: true },
  			2147483330: { id: 2147483330, date: 1528329600000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -134.25, isVisible: true },
  			2147483331: { id: 2147483331, date: 1528329600000, description: "ALDI 61085", category: "Groceries", individual: "Both", amount: -63.25, isVisible: true }	},
  		5: {
        2147483332: { id: 2147483332, date: 1528243200000, description: "UNDER ARMOUR JEFFRSNVL", category: "Materistic", individual: "Both", amount: -24.45, isVisible: true },
  			2147483333: { id: 2147483333, date: 1528243200000, description: "WERNERS SMOKEHOUSE BAR", category: "Meals (Food)", individual: "Both", amount: -31.25, isVisible: true },
  			2147483334: { id: 2147483334, date: 1528243200000, description: "H&M0576", category: "Materistic", individual: "Both", amount: -16.08, isVisible: true },
  			2147483335: { id: 2147483335, date: 1528243200000, description: "GH BASS & CO #4385", category: "Materistic", individual: "Both", amount: -46.85, isVisible: true }	},
  		2: {
        2147483336: { id: 2147483336, date: 1527984000000, description: "GOMEZ SALSA WALNUT HIL", category: "Meals (Food)", individual: "Both", amount: -19.8, isVisible: true }	},
  		1: {
        2147483337: { id: 2147483337, date: 1527897600000, description: "GRAETERS12", category: "Dessert", individual: "Both", amount: -7, isVisible: true },
  			2147483338: { id: 2147483338, date: 1527897600000, description: "SKIPTHEDISHES", category: "Meals (Food)", individual: "Both", amount: -44, isVisible: true },
  			2147483339: { id: 2147483339, date: 1527897600000, description: "SHELL OIL 574430203QPS", category: "Gas", individual: "Both", amount: -38.5, isVisible: true }	}	},
  	5: {
      31: {
        2147483340: { id: 2147483340, date: 1527811200000, description: "DENTATRUST", category: "Dentist", individual: "Both", amount: -29.37, isVisible: true },
  			2147483341: { id: 2147483341, date: 1527811200000, description: "TMOBILE*AUTO PAY", category: "Phone", individual: "Both", amount: -226.42, isVisible: true },
  			2147483342: { id: 2147483342, date: 1527811200000, description: "MEDICAL MUTUAL OF OHIO", category: "Medical", individual: "Both", amount: -416.9, isVisible: true },
  			2147483343: { id: 2147483343, date: 1527811200000, description: "FIRESIDE PIZZA", category: "Meals (Food)", individual: "Both", amount: -34, isVisible: true }	},
  		30: {
        2147483344: { id: 2147483344, date: 1527724800000, description: "APL* ITUNES.COM/BILL", category: "Materistic", individual: "Both", amount: -0.99, isVisible: true }	},
  		29: {
        2147483345: { id: 2147483345, date: 1527638400000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -17.25, isVisible: true }	},
  		28: {
        2147483346: { id: 2147483346, date: 1527552000000, description: "SUNOCO 0608589800  QPS", category: "Gas", individual: "Both", amount: -14.75, isVisible: true }	},
  		25: {
        2147483347: { id: 2147483347, date: 1527292800000, description: "TWC*TIMEWARNERCABLE", category: "Internet", individual: "Both", amount: -44.99, isVisible: true },
  			2147483348: { id: 2147483348, date: 1527292800000, description: "WENDY'S #9216", category: "Meals (Food)", individual: "Both", amount: -8.16, isVisible: true }	},
  		22: {
        2147483349: { id: 2147483349, date: 1527033600000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -26.25, isVisible: true }	},
  		20: {
        2147483350: { id: 2147483350, date: 1526860800000, description: "KROGER #355", category: "Groceries", individual: "Both", amount: -64.76, isVisible: true },
  			2147483351: { id: 2147483351, date: 1526860800000, description: "CRATE&BARREL CB2 NOD", category: "Materistic", individual: "Both", amount: -30.58, isVisible: true }	},
  		19: {
        2147483352: { id: 2147483352, date: 1526774400000, description: "GRAETERS17", category: "Dessert", individual: "Both", amount: -7, isVisible: true }	},
  		18: {
        2147483353: { id: 2147483353, date: 1526688000000, description: "ALADDINS EATERY", category: "Meals (Food)", individual: "Both", amount: -29.25, isVisible: true },
  			2147483354: { id: 2147483354, date: 1526688000000, description: "TG WEST CHESTER 031-2", category: "Entertainment", individual: "Both", amount: -14.25, isVisible: true }	},
  		16: {
        2147483355: { id: 2147483355, date: 1526515200000, description: "LYFT   *RIDE WED 1PM", category: "Entertainment", individual: "Both", amount: -9.08, isVisible: true },
  			2147483356: { id: 2147483356, date: 1526515200000, description: "LYFT   *RIDE WED 1PM", category: "Entertainment", individual: "Both", amount: -2, isVisible: true },
  			2147483357: { id: 2147483357, date: 1526515200000, description: "VCI*VITACOST.COM", category: "Materistic", individual: "Both", amount: -79.41, isVisible: true },
  			2147483358: { id: 2147483358, date: 1526515200000, description: "PLURALSIGHT", category: "Education", individual: "Both", amount: -299, isVisible: true }	},
  		15: {
        2147483359: { id: 2147483359, date: 1526428800000, description: "AMAZON MKTPLACE PMTS W", category: "Unknown", individual: "Both", amount: -90.16, isVisible: true },
  			2147483360: { id: 2147483360, date: 1526428800000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -18.75, isVisible: true },
  			2147483361: { id: 2147483361, date: 1526428800000, description: "RHINEGEIST BREWERY", category: "Beer", individual: "Both", amount: -14.25, isVisible: true }	},
  		13: {
        2147483362: { id: 2147483362, date: 1526256000000, description: "JCPENNEY 1936", category: "Materistic", individual: "Both", amount: -23.59, isVisible: true },
  			2147483363: { id: 2147483363, date: 1526256000000, description: "GET GO #3393", category: "Gas", individual: "Both", amount: -38.75, isVisible: true }	},
  		12: {
        2147483364: { id: 2147483364, date: 1526169600000, description: "HANDEL'S ICE CREAM", category: "Dessert", individual: "Both", amount: -14, isVisible: true }	},
  		11: {
        2147483365: { id: 2147483365, date: 1526083200000, description: "MCDONALD'S F35960", category: "Meals (Food)", individual: "Both", amount: -4.29, isVisible: true },
  			2147483366: { id: 2147483366, date: 1526083200000, description: "TARGET        00023465", category: "Materistic", individual: "Both", amount: -9.86, isVisible: true },
  			2147483367: { id: 2147483367, date: 1526083200000, description: "KROGER #593", category: "Groceries", individual: "Both", amount: -7, isVisible: true },
  			2147483368: { id: 2147483368, date: 1526083200000, description: "STARBUCKS STORE 13836", category: "Meals (Food)", individual: "Both", amount: -3.65, isVisible: true },
  			2147483369: { id: 2147483369, date: 1526083200000, description: "GIONINOS PIZZERIA", category: "Meals (Food)", individual: "Both", amount: -14.95, isVisible: true },
  			2147483370: { id: 2147483370, date: 1526083200000, description: "GIONINOS PIZZERIA", category: "Meals (Food)", individual: "Both", amount: -12.95, isVisible: true },
  			2147483371: { id: 2147483371, date: 1526083200000, description: "HARTVILLE KITCHEN - ED", category: "Meals (Food)", individual: "Both", amount: -12.59, isVisible: true }	},
  		8: {
        2147483372: { id: 2147483372, date: 1525824000000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -26.5, isVisible: true },
  			2147483373: { id: 2147483373, date: 1525824000000, description: "MCDONALD'S F7033", category: "Meals (Food)", individual: "Both", amount: -3.62, isVisible: true }	},
  		6: {
        2147483374: { id: 2147483374, date: 1525651200000, description: "MIYAKO SUSHI & STEAKHO", category: "Meals (Food)", individual: "Both", amount: -82.25, isVisible: true }	},
  		5: {
        2147483375: { id: 2147483375, date: 1525564800000, description: "LYFT   *RIDE SAT 2PM", category: "Entertainment", individual: "Both", amount: -7.53, isVisible: true },
  			2147483376: { id: 2147483376, date: 1525564800000, description: "LA MEXICANA GROCERY ST", category: "Meals (Food)", individual: "Both", amount: -41.25, isVisible: true },
  			2147483377: { id: 2147483377, date: 1525564800000, description: "LYFT   *RIDE SAT 2PM", category: "Entertainment", individual: "Both", amount: -2, isVisible: true }	},
  		4: {
        2147483378: { id: 2147483378, date: 1525478400000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -17.17, isVisible: true }	},
  		3: {
        2147483379: { id: 2147483379, date: 1525392000000, description: "MARRIOTT RIVER CENTER", category: "Accomodation", individual: "Both", amount: -144.95, isVisible: true },
  			2147483380: { id: 2147483380, date: 1525392000000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -44.42, isVisible: true },
  			2147483381: { id: 2147483381, date: 1525392000000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -178.66, isVisible: true },
  			2147483382: { id: 2147483382, date: 1525392000000, description: "YOUNGLIVING ESSNTL OIL", category: "Birthday", individual: "Both", amount: -185.1, isVisible: true },
  			2147483383: { id: 2147483383, date: 1525392000000, description: "TAGLIO", category: "Meals (Food)", individual: "Both", amount: -33, isVisible: true }	},
  		2: {
        2147483384: { id: 2147483384, date: 1525305600000, description: "YOUNGLIVING ESSNTL OIL", category: "Materistic", individual: "Both", amount: 171.2, isVisible: true },
  			2147483385: { id: 2147483385, date: 1525305600000, description: "LYFT   *RIDE WED 10AM", category: "Entertainment", individual: "Both", amount: -2, isVisible: true },
  			2147483386: { id: 2147483386, date: 1525305600000, description: "LYFT   *RIDE WED 10AM", category: "Entertainment", individual: "Both", amount: -9.02, isVisible: true }	},
  		1: {
        2147483387: { id: 2147483387, date: 1525219200000, description: "DENTATRUST", category: "Dentist", individual: "Both", amount: -29.37, isVisible: true },
  			2147483388: { id: 2147483388, date: 1525219200000, description: "LAX3 EINSTEIN TEM", category: "Meals (Travel)", individual: "Both", amount: -7.52, isVisible: true },
  			2147483389: { id: 2147483389, date: 1525219200000, description: "MDW TRUE BURGER A", category: "Meals (Travel)", individual: "Both", amount: -11.13, isVisible: true },
  			2147483390: { id: 2147483390, date: 1525219200000, description: "I LOVE LA", category: "Meals (Travel)", individual: "Both", amount: -2.19, isVisible: true },
  			2147483391: { id: 2147483391, date: 1525219200000, description: "LYFT   *RIDE TUE 9AM", category: "Entertainment", individual: "Both", amount: -12.86, isVisible: true },
  			2147483392: { id: 2147483392, date: 1525219200000, description: "LYFT   *RIDE WED 12AM", category: "Transportation", individual: "Both", amount: -5, isVisible: true },
  			2147483393: { id: 2147483393, date: 1525219200000, description: "LYFT   *RIDE WED 12AM", category: "Transportation", individual: "Both", amount: -21.29, isVisible: true },
  			2147483394: { id: 2147483394, date: 1525219200000, description: "WWW.OHANAOT.COM", category: "Education", individual: "Both", amount: -0.98, isVisible: true }	}	},
  	4: {
      30: {
        2147483395: { id: 2147483395, date: 1525132800000, description: "LYFT   *RIDE SUN 2PM", category: "Entertainment", individual: "Both", amount: -12.43, isVisible: true },
  			2147483396: { id: 2147483396, date: 1525132800000, description: "TMOBILE*AUTO PAY", category: "Phone", individual: "Both", amount: -226.98, isVisible: true },
  			2147483397: { id: 2147483397, date: 1525132800000, description: "EREWHON MARKET-VENICE", category: "Meals (Travel)", individual: "Both", amount: -39.75, isVisible: true },
  			2147483398: { id: 2147483398, date: 1525132800000, description: "APL* ITUNES.COM/BILL", category: "Materistic", individual: "Both", amount: -0.99, isVisible: true },
  			2147483399: { id: 2147483399, date: 1525132800000, description: "SQU*SQ *SALT & STRAW I", category: "Unknown", individual: "Both", amount: -12.42, isVisible: true },
  			2147483400: { id: 2147483400, date: 1525132800000, description: "2011-SAJE ABBOT KINNEY", category: "Unknown", individual: "Both", amount: -5.42, isVisible: true }	},
  		29: {
        2147483401: { id: 2147483401, date: 1525046400000, description: "THE UPS STORE #6490", category: "Miscellaneous", individual: "Both", amount: -25.09, isVisible: true },
  			2147483402: { id: 2147483402, date: 1525046400000, description: "76 - UNITED PACIFIC 56", category: "Meals (Travel)", individual: "Both", amount: -22.76, isVisible: true },
  			2147483403: { id: 2147483403, date: 1525046400000, description: "DOLLAR RENT A CAR", category: "Transportation", individual: "Both", amount: -59.33, isVisible: true },
  			2147483404: { id: 2147483404, date: 1525046400000, description: "ANCHOS SOUTHWEST G", category: "Meals (Travel)", individual: "Both", amount: -35.25, isVisible: true },
  			2147483405: { id: 2147483405, date: 1525046400000, description: "SIAMESE GARDEN", category: "Meals (Travel)", individual: "Both", amount: -44.25, isVisible: true }	},
  		28: {
        2147483406: { id: 2147483406, date: 1524960000000, description: "JOSHUA GAS", category: "Gas", individual: "Both", amount: -39.75, isVisible: true }	},
  		27: {
        2147483407: { id: 2147483407, date: 1524873600000, description: "AMBOY LLC", category: "Gas", individual: "Both", amount: -10, isVisible: true },
  			2147483408: { id: 2147483408, date: 1524873600000, description: "STATERBROS105", category: "Groceries", individual: "Both", amount: -5.23, isVisible: true },
  			2147483409: { id: 2147483409, date: 1524873600000, description: "MEDICAL MUTUAL OF OHIO", category: "Medical", individual: "Both", amount: -833.8, isVisible: true }	},
  		26: {
        2147483410: { id: 2147483410, date: 1524787200000, description: "STATERBROS105", category: "Groceries", individual: "Both", amount: -63.86, isVisible: true },
  			2147483411: { id: 2147483411, date: 1524787200000, description: "JOSHUA TREE NATL PARK", category: "Excursions", individual: "Both", amount: -80, isVisible: true }	},
  		25: {
        2147483412: { id: 2147483412, date: 1524700800000, description: "TWC*TIMEWARNERCABLE", category: "Internet", individual: "Both", amount: -44.99, isVisible: true },
  			2147483413: { id: 2147483413, date: 1524700800000, description: "SQU*SQ *CROSS EYED COW", category: "Meals (Travel)", individual: "Both", amount: -20.24, isVisible: true },
  			2147483414: { id: 2147483414, date: 1524700800000, description: "MDW JETBOX & DD B", category: "Meals (Travel)", individual: "Both", amount: -8.55, isVisible: true },
  			2147483415: { id: 2147483415, date: 1524700800000, description: "LYFT   *RIDE WED 3AM", category: "Transportation", individual: "Both", amount: -15.6, isVisible: true },
  			2147483416: { id: 2147483416, date: 1524700800000, description: "IN N OUT BURGER 029", category: "Meals (Travel)", individual: "Both", amount: -13.85, isVisible: true }	},
  		23: {
        2147483417: { id: 2147483417, date: 1524528000000, description: "Transport*DOLLAR", category: "Transportation", individual: "Both", amount: -74, isVisible: true },
  			2147483418: { id: 2147483418, date: 1524528000000, description: "SPORT CLIPS - KY204 -", category: "Miscellaneous", individual: "Both", amount: -5, isVisible: true }	},
  		22: {
        2147483419: { id: 2147483419, date: 1524441600000, description: "KROGER FUEL #4355", category: "Gas", individual: "Both", amount: -34.26, isVisible: true }	},
  		21: {
        2147483420: { id: 2147483420, date: 1524355200000, description: "MADTREE BREWING", category: "Beer", individual: "Both", amount: -14.25, isVisible: true }	},
  		20: {
        2147483421: { id: 2147483421, date: 1524268800000, description: "WHOLEFDS CIN 10287", category: "Groceries", individual: "Both", amount: -130.82, isVisible: true },
  			2147483422: { id: 2147483422, date: 1524268800000, description: "NEWPORT BROTHERS", category: "Beer", individual: "Both", amount: -5.25, isVisible: true },
  			2147483423: { id: 2147483423, date: 1524268800000, description: "RHINEGEIST BREWERY", category: "Beer", individual: "Both", amount: -14, isVisible: true }	},
  		19: {
        2147483424: { id: 2147483424, date: 1524182400000, description: "TRADER JOE'S #669  QPS", category: "Groceries", individual: "Both", amount: -213.11, isVisible: true },
  			2147483425: { id: 2147483425, date: 1524182400000, description: "WM SUPERCENTER #3749", category: "Groceries", individual: "Both", amount: -42.07, isVisible: true },
  			2147483426: { id: 2147483426, date: 1524182400000, description: "BURLINGTON STORES 1035", category: "Materistic", individual: "Both", amount: -23.96, isVisible: true },
  			2147483427: { id: 2147483427, date: 1524182400000, description: "PANERA BREAD #204906", category: "Meals (Food)", individual: "Both", amount: -4.69, isVisible: true },
  			2147483428: { id: 2147483428, date: 1524182400000, description: "GOODWILL INDUSTRIES 90", category: "Materistic", individual: "Both", amount: -14.98, isVisible: true },
  			2147483429: { id: 2147483429, date: 1524182400000, description: "MENARDS EVENDALE OH", category: "Materistic", individual: "Both", amount: -28.43, isVisible: true }	},
  		18: {
        2147483430: { id: 2147483430, date: 1524096000000, description: "AIRBNB * HMN4RAMTCC", category: "Accomodation", individual: "Both", amount: -347.79, isVisible: true },
  			2147483431: { id: 2147483431, date: 1524096000000, description: "AIRBNB * HMT9JJFXTN", category: "Accomodation", individual: "Both", amount: -223.57, isVisible: true },
  			2147483432: { id: 2147483432, date: 1524096000000, description: "TARGET        00014472", category: "Materistic", individual: "Both", amount: -16.27, isVisible: true },
  			2147483433: { id: 2147483433, date: 1524096000000, description: "MACYS  KENWOOD TC", category: "Materistic", individual: "Both", amount: -15.98, isVisible: true },
  			2147483434: { id: 2147483434, date: 1524096000000, description: "BED BATH & BEYOND #301", category: "Materistic", individual: "Both", amount: -51.35, isVisible: true },
  			2147483435: { id: 2147483435, date: 1524096000000, description: "CHICK-FIL-A #00456", category: "Meals (Food)", individual: "Both", amount: -7.64, isVisible: true },
  			2147483436: { id: 2147483436, date: 1524096000000, description: "THE CIRCUIT- CINCINN", category: "Materistic", individual: "Both", amount: -99, isVisible: true }	},
  		17: {
        2147483437: { id: 2147483437, date: 1524009600000, description: "SPEEDWAY 01224 242", category: "Gas", individual: "Both", amount: -33.5, isVisible: true }	},
  		15: {
        2147483438: { id: 2147483438, date: 1523836800000, description: "KROGER #355", category: "Groceries", individual: "Both", amount: -128.03, isVisible: true },
  			2147483439: { id: 2147483439, date: 1523836800000, description: "SOUTHWES  5261435796462", category: "Transportation", individual: "Both", amount: -87.6, isVisible: true },
  			2147483440: { id: 2147483440, date: 1523836800000, description: "SOUTHWES  5261435800882", category: "Transportation", individual: "Both", amount: -287.6, isVisible: true }	},
  		14: {
        2147483441: { id: 2147483441, date: 1523750400000, description: "BODEGA", category: "Meals (Food)", individual: "Both", amount: -54.25, isVisible: true },
  			2147483442: { id: 2147483442, date: 1523750400000, description: "DAIRY QUEEN #16871", category: "Dessert", individual: "Both", amount: -15, isVisible: true }	},
  		13: {
        2147483443: { id: 2147483443, date: 1523664000000, description: "MT ADAMS BAR AND GRILL", category: "Meals (Food)", individual: "Both", amount: -40.25, isVisible: true },
  			2147483444: { id: 2147483444, date: 1523664000000, description: "BLIND LEMON", category: "Beer", individual: "Both", amount: -24.25, isVisible: true }	},
  		12: {
        2147483445: { id: 2147483445, date: 1523577600000, description: "LOWES #01585*", category: "Materistic", individual: "Both", amount: -93.23, isVisible: true },
  			2147483446: { id: 2147483446, date: 1523577600000, description: "THE HOME DEPOT #3832", category: "Materistic", individual: "Both", amount: -44.75, isVisible: true }	},
  		10: {
        2147483447: { id: 2147483447, date: 1523404800000, description: "IKEA WEST CHESTER", category: "Materistic", individual: "Both", amount: 40.3, isVisible: true },
  			2147483448: { id: 2147483448, date: 1523404800000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -26.76, isVisible: true },
  			2147483449: { id: 2147483449, date: 1523404800000, description: "TST* TASTE OF BELGIUM", category: "Meals (Food)", individual: "Both", amount: -81.25, isVisible: true },
  			2147483450: { id: 2147483450, date: 1523404800000, description: "IKEA WEST CHESTER", category: "Materistic", individual: "Both", amount: -34.06, isVisible: true }	},
  		7: {
        2147483451: { id: 2147483451, date: 1523145600000, description: "MARSHALLS #1357", category: "Materistic", individual: "Both", amount: -41.72, isVisible: true },
  			2147483452: { id: 2147483452, date: 1523145600000, description: "UC FOUNDATION ONLINE", category: "Unknown", individual: "Both", amount: -40, isVisible: true },
  			2147483453: { id: 2147483453, date: 1523145600000, description: "IKEA WEST CHESTER", category: "Materistic", individual: "Both", amount: -466.45, isVisible: true }	},
  		5: {
        2147483454: { id: 2147483454, date: 1522972800000, description: "TARGET        00024836", category: "Materistic", individual: "Both", amount: 26.49, isVisible: true },
  			2147483455: { id: 2147483455, date: 1522972800000, description: "TJMAXX #0007", category: "Materistic", individual: "Both", amount: 26.49, isVisible: true },
  			2147483456: { id: 2147483456, date: 1522972800000, description: "TARGET        00024836", category: "Materistic", individual: "Both", amount: -44.92, isVisible: true }	},
  		4: {
        2147483457: { id: 2147483457, date: 1522886400000, description: "DENTATRUST", category: "Dentist", individual: "Both", amount: -29.37, isVisible: true }	},
  		3: {
        2147483458: { id: 2147483458, date: 1522800000000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -27.01, isVisible: true },
  			2147483459: { id: 2147483459, date: 1522800000000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -72.76, isVisible: true },
  			2147483460: { id: 2147483460, date: 1522800000000, description: "SPEEDWAY 01158 361", category: "Gas", individual: "Both", amount: -21.5, isVisible: true },
  			2147483461: { id: 2147483461, date: 1522800000000, description: "BOB EVANS REST #0185", category: "Meals (Food)", individual: "Both", amount: -23.25, isVisible: true },
  			2147483462: { id: 2147483462, date: 1522800000000, description: "SQU*SQ *THE GARDEN BAR", category: "Meals (Food)", individual: "Both", amount: -8.99, isVisible: true }	},
  		2: {
        2147483463: { id: 2147483463, date: 1522713600000, description: "IKEA WEST CHESTER", category: "Materistic", individual: "Both", amount: -65.97, isVisible: true }	}	},
  	3: {
      31: {
        2147483464: { id: 2147483464, date: 1522540800000, description: "BREWTUS BREWING COMPAN", category: "Beer", individual: "Both", amount: -13.25, isVisible: true },
  			2147483465: { id: 2147483465, date: 1522540800000, description: "TMOBILE*AUTO PAY", category: "Phone", individual: "Both", amount: -256.98, isVisible: true }	},
  		30: {
        2147483466: { id: 2147483466, date: 1522454400000, description: "APL* ITUNES.COM/BILL", category: "Materistic", individual: "Both", amount: -0.99, isVisible: true }	},
  		28: {
        2147483467: { id: 2147483467, date: 1522281600000, description: "TARGET        00024836", category: "Materistic", individual: "Both", amount: -222.81, isVisible: true },
  			2147483468: { id: 2147483468, date: 1522281600000, description: "TJMAXX #0007", category: "Materistic", individual: "Both", amount: -47.68, isVisible: true },
  			2147483469: { id: 2147483469, date: 1522281600000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -4.5, isVisible: true },
  			2147483470: { id: 2147483470, date: 1522281600000, description: "MIDICI NEAPOLITAN PIZZ", category: "Meals (Food)", individual: "Both", amount: -62.25, isVisible: true }	},
  		27: {
        2147483471: { id: 2147483471, date: 1522195200000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -34.75, isVisible: true }	},
  		26: {
        2147483472: { id: 2147483472, date: 1522108800000, description: "FIRESIDE PIZZA", category: "Meals (Food)", individual: "Both", amount: -16, isVisible: true },
  			2147483473: { id: 2147483473, date: 1522108800000, description: "G CURTIS CROFT DDS INC", category: "UPDATE", individual: "Both", amount: -220.67, isVisible: true }	},
  		25: {
        2147483474: { id: 2147483474, date: 1522022400000, description: "TWC*TIMEWARNERCABLE", category: "Internet", individual: "Both", amount: -44.99, isVisible: true }	},
  		24: {
        2147483475: { id: 2147483475, date: 1521936000000, description: "LYFT   *RIDE SAT 1PM", category: "Entertainment", individual: "Both", amount: -2, isVisible: true },
  			2147483476: { id: 2147483476, date: 1521936000000, description: "ROCK BOTTOM CINCINNATI", category: "Meals (Food)", individual: "Both", amount: -27.25, isVisible: true },
  			2147483477: { id: 2147483477, date: 1521936000000, description: "ONE WAY FARM", category: "Entertainment", individual: "Both", amount: -6.92, isVisible: true },
  			2147483478: { id: 2147483478, date: 1521936000000, description: "WENDY'S #984", category: "Meals (Food)", individual: "Both", amount: -2.49, isVisible: true }	},
  		22: {
        2147483479: { id: 2147483479, date: 1521763200000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -146.61, isVisible: true }	},
  		20: {
        2147483480: { id: 2147483480, date: 1521590400000, description: "MCDONALD'S F21705", category: "Meals (Food)", individual: "Both", amount: -6.44, isVisible: true }	},
  		19: {
        2147483481: { id: 2147483481, date: 1521504000000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -183.56, isVisible: true }	},
  		18: {
        2147483482: { id: 2147483482, date: 1521417600000, description: "MARATHON PETRO185488", category: "Gas", individual: "Both", amount: -34.09, isVisible: true }	},
  		17: {
        2147483483: { id: 2147483483, date: 1521331200000, description: "WINE CELLAR", category: "Entertainment", individual: "Both", amount: -64.26, isVisible: true }	},
  		15: {
        2147483484: { id: 2147483484, date: 1521158400000, description: "STARBUCKS STORE 02385", category: "Meals (Food)", individual: "Both", amount: -2.95, isVisible: true },
  			2147483485: { id: 2147483485, date: 1521158400000, description: "ZAB THAI KITCHEN", category: "Meals (Food)", individual: "Both", amount: -7.5, isVisible: true },
  			2147483486: { id: 2147483486, date: 1521158400000, description: "TOYSRUS-BABIESRUS.COM", category: "Birthday", individual: "Both", amount: -34.88, isVisible: true },
  			2147483487: { id: 2147483487, date: 1521158400000, description: "WENDY'S #1982", category: "Meals (Food)", individual: "Both", amount: -3.19, isVisible: true },
  			2147483488: { id: 2147483488, date: 1521158400000, description: "MARATHON PETRO133462", category: "Gas", individual: "Both", amount: -9.5, isVisible: true }	},
      14: {
        2147483489: { id: 2147483489, date: 1521072000000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -5, isVisible: true }	},
  		13: {
        2147483490: { id: 2147483490, date: 1520985600000, description: "SQU*SQ *THE GARDEN BAR", category: "Meals (Food)", individual: "Both", amount: -8.99, isVisible: true },
  			2147483491: { id: 2147483491, date: 1520985600000, description: "TOYSRUS-BABIESRUS.COM", category: "Birthday", individual: "Both", amount: -5.32, isVisible: true },
  			2147483492: { id: 2147483492, date: 1520985600000, description: "UNITED DAIRY FARMERS #", category: "Gas", individual: "Both", amount: -26.5, isVisible: true },
  			2147483493: { id: 2147483493, date: 1520985600000, description: "MAX & ERMA'S PICKERING", category: "Meals (Food)", individual: "Both", amount: -32.25, isVisible: true }	},
  		12: {
        2147483494: { id: 2147483494, date: 1520899200000, description: "CHEESECAKE POLARIS", category: "Meals (Food)", individual: "Both", amount: -113.25, isVisible: true }	},
  		11: {
        2147483495: { id: 2147483495, date: 1520812800000, description: "SWEET MELISSA", category: "Dessert", individual: "Both", amount: -24.25, isVisible: true },
  			2147483496: { id: 2147483496, date: 1520812800000, description: "TOYSRUS-BABIESRUS.COM", category: "Birthday", individual: "Both", amount: -11.73, isVisible: true }	},
  		10: {
        2147483497: { id: 2147483497, date: 1520726400000, description: "BUFFALO WILD WINGS AVO", category: "Meals (Food)", individual: "Both", amount: -19.25, isVisible: true },
  			2147483498: { id: 2147483498, date: 1520726400000, description: "SUNOCO 0371637000  QPS", category: "Gas", individual: "Both", amount: -25.51, isVisible: true }	},
  		9: {
        2147483499: { id: 2147483499, date: 1520640000000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -5, isVisible: true },
  			2147483500: { id: 2147483500, date: 1520640000000, description: "TAGLIO", category: "Meals (Food)", individual: "Both", amount: -18, isVisible: true },
  			2147483501: { id: 2147483501, date: 1520640000000, description: "PEARLS", category: "Beer", individual: "Both", amount: -17.25, isVisible: true },
  			2147483502: { id: 2147483502, date: 1520640000000, description: "HRBLOCK RETAIL", category: "Taxes", individual: "Both", amount: -353, isVisible: true }	},
  		8: {
        2147483503: { id: 2147483503, date: 1520553600000, description: "2371 GREAT CLIPS AT U", category: "Miscellaneous", individual: "Both", amount: -15.98, isVisible: true },
  			2147483504: { id: 2147483504, date: 1520553600000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -88.7, isVisible: true }	},
  		6: {
        2147483505: { id: 2147483505, date: 1520380800000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -27.5, isVisible: true },
  			2147483506: { id: 2147483506, date: 1520380800000, description: "BEST BUY      00001610", category: "Materistic", individual: "Both", amount: -100.69, isVisible: true },
  			2147483507: { id: 2147483507, date: 1520380800000, description: "KOHL'S #0209", category: "Materistic", individual: "Both", amount: -95.39, isVisible: true }	},
  		5: {
        2147483508: { id: 2147483508, date: 1520294400000, description: "BEST BUY      00001610", category: "Materistic", individual: "Both", amount: -103.87, isVisible: true },
  			2147483509: { id: 2147483509, date: 1520294400000, description: "Pompilios", category: "Meals (Food)", individual: "Both", amount: -27.25, isVisible: true }	},
  		3: {
        2147483510: { id: 2147483510, date: 1520121600000, description: "ABIGAIL STREET", category: "Meals (Food)", individual: "Both", amount: -111.25, isVisible: true },
  			2147483511: { id: 2147483511, date: 1520121600000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -4.25, isVisible: true }	},
  		2: {
        2147483512: { id: 2147483512, date: 1520035200000, description: "YOUNGLIVING ESSNTL OIL", category: "Birthday", individual: "Both", amount: -178.68, isVisible: true },
  			2147483513: { id: 2147483513, date: 1520035200000, description: "GRAETERS 27", category: "Dessert", individual: "Both", amount: -9.25, isVisible: true },
  			2147483514: { id: 2147483514, date: 1520035200000, description: "GO BANANA`S COMEDY", category: "Beer", individual: "Both", amount: -25.25, isVisible: true }	},
  		1: {
        2147483515: { id: 2147483515, date: 1519948800000, description: "ZEIGLER PARK", category: "Entertainment", individual: "Both", amount: -5, isVisible: true },
  			2147483516: { id: 2147483516, date: 1519948800000, description: "APL* ITUNES.COM/BILL", category: "Entertainment", individual: "Both", amount: -0.99, isVisible: true },
  			2147483517: { id: 2147483517, date: 1519948800000, description: "MOTR PUB", category: "Beer", individual: "Both", amount: -4.21, isVisible: true },
  			2147483518: { id: 2147483518, date: 1519948800000, description: "BB *ALSHF", category: "Unknown", individual: "Both", amount: -25, isVisible: true },
  			2147483519: { id: 2147483519, date: 1519948800000, description: "GO BANANAS COMEDY C", category: "Entertainment", individual: "Both", amount: -42, isVisible: true }	}	},
  	2: {
      28: {
        2147483520: { id: 2147483520, date: 1519862400000, description: "TMOBILE*AUTO PAY", category: "Phone", individual: "Both", amount: -257.98, isVisible: true }	},
  		27: {
        2147483521: { id: 2147483521, date: 1519776000000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -25.76, isVisible: true },
  			2147483522: { id: 2147483522, date: 1519776000000, description: "PREMIER EXCH INS POLIC", category: "Unknown", individual: "Both", amount: -12, isVisible: true },
  			2147483523: { id: 2147483523, date: 1519776000000, description: "BREW HOUSE", category: "Meals (Food)", individual: "Both", amount: -37.25, isVisible: true }	},
  		25: {
        2147483524: { id: 2147483524, date: 1519603200000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -90.57, isVisible: true },
  			2147483525: { id: 2147483525, date: 1519603200000, description: "ANTHONYS FURNITURE", category: "Materistic", individual: "Both", amount: -1056.3, isVisible: true },
  			2147483526: { id: 2147483526, date: 1519603200000, description: "ALDI 61059", category: "Groceries", individual: "Both", amount: -49.96, isVisible: true },
  			2147483527: { id: 2147483527, date: 1519603200000, description: "KIRKLAND'S #983", category: "Groceries", individual: "Both", amount: 21.63, isVisible: true }	},
  		24: {
        2147483528: { id: 2147483528, date: 1519516800000, description: "GIANT-EAGLE #1284", category: "Groceries", individual: "Both", amount: -21.33, isVisible: true },
  			2147483529: { id: 2147483529, date: 1519516800000, description: "GETGO CAFE & FUEL #301", category: "Gas", individual: "Both", amount: -28.75, isVisible: true }	},
  		23: {
        2147483530: { id: 2147483530, date: 1519430400000, description: "HECKS CAFE  RESTAURAN", category: "Meals (Food)", individual: "Both", amount: -62.25, isVisible: true }	},
  		22: {
        2147483531: { id: 2147483531, date: 1519344000000, description: "WESTERN HEALTH ADVANTA", category: "Medical", individual: "Both", amount: -283.85, isVisible: true },
  			2147483532: { id: 2147483532, date: 1519344000000, description: "MARSHALLS #1101", category: "Materistic", individual: "Both", amount: -5.34, isVisible: true },
  			2147483533: { id: 2147483533, date: 1519344000000, description: "MCDONALD'S F32059", category: "Meals (Food)", individual: "Both", amount: -4.99, isVisible: true }	},
  		21: {
        2147483534: { id: 2147483534, date: 1519257600000, description: "TARGET        00025577", category: "Materistic", individual: "Both", amount: -8.56, isVisible: true },
  			2147483535: { id: 2147483535, date: 1519257600000, description: "SHOE CARNIVAL #0046", category: "Materistic", individual: "Both", amount: -10.69, isVisible: true },
  			2147483536: { id: 2147483536, date: 1519257600000, description: "THE PUB AT ROOKWOOD ME", category: "Meals (Food)", individual: "Both", amount: -26.25, isVisible: true },
  			2147483537: { id: 2147483537, date: 1519257600000, description: "SQ *SQ *CINCINNATI OPE", category: "Meals (Food)", individual: "Both", amount: -74.9, isVisible: true }	},
  		20: {
        2147483538: { id: 2147483538, date: 1519171200000, description: "KROGER #543", category: "Groceries", individual: "Both", amount: -17.36, isVisible: true },
  			2147483539: { id: 2147483539, date: 1519171200000, description: "BP#3852035DLR RAJ-VQPS", category: "Gas", individual: "Both", amount: -30.75, isVisible: true },
  			2147483540: { id: 2147483540, date: 1519171200000, description: "TAMMYS PIZZA ON BROADW", category: "Meals (Food)", individual: "Both", amount: -12.78, isVisible: true }	},
  		19: {
        2147483541: { id: 2147483541, date: 1519084800000, description: "KROGER #805", category: "Groceries", individual: "Both", amount: -70.02, isVisible: true },
  			2147483542: { id: 2147483542, date: 1519084800000, description: "HIBACHI GO", category: "Meals (Food)", individual: "Both", amount: -12, isVisible: true },
  			2147483543: { id: 2147483543, date: 1519084800000, description: "MCDONALDS  M7561", category: "Meals (Food)", individual: "Both", amount: -4.39, isVisible: true }	},
  		18: {
        2147483544: { id: 2147483544, date: 1518998400000, description: "GROUNDED COFFEE SHOP", category: "Meals (Food)", individual: "Both", amount: -9.38, isVisible: true }	},
  		17: {
        2147483545: { id: 2147483545, date: 1518912000000, description: "The Sovereign", category: "Meals (Food)", individual: "Both", amount: -54.25, isVisible: true },
  			2147483546: { id: 2147483546, date: 1518912000000, description: "Sweet Fire Donna's", category: "Dessert", individual: "Both", amount: -21.89, isVisible: true },
  			2147483547: { id: 2147483547, date: 1518912000000, description: "Vola's Dockside Grill", category: "Meals (Food)", individual: "Both", amount: -38.25, isVisible: true },
  			2147483548: { id: 2147483548, date: 1518912000000, description: "BLUPRINT CHOCOLATIERS", category: "Dessert", individual: "Both", amount: -12.3, isVisible: true }	},
  		16: {
        2147483549: { id: 2147483549, date: 1518825600000, description: "WAH LOCK RESTAURANT", category: "Meals (Food)", individual: "Both", amount: -18.97, isVisible: true },
  			2147483550: { id: 2147483550, date: 1518825600000, description: "SUNOCO 0641018700  QPS", category: "Gas", individual: "Both", amount: -9.03, isVisible: true }	},
  		15: {
        2147483551: { id: 2147483551, date: 1518739200000, description: "AIRBNB * HMMTDCTBNS", category: "Accomodation", individual: "Both", amount: -64.33, isVisible: true },
  			2147483552: { id: 2147483552, date: 1518739200000, description: "SAVE-A-LOT #23263", category: "Groceries", individual: "Both", amount: -8.52, isVisible: true }	},
  		13: {
        2147483553: { id: 2147483553, date: 1518566400000, description: "COMCAST CALIFORN CS 1X", category: "Internet", individual: "Both", amount: -23.43, isVisible: true },
  			2147483554: { id: 2147483554, date: 1518566400000, description: "CORNERSBURG SPARKLE", category: "Groceries", individual: "Both", amount: -6.57, isVisible: true }	},
  		12: {
        2147483555: { id: 2147483555, date: 1518480000000, description: "FIVE BELOW 511", category: "Materistic", individual: "Both", amount: -15.02, isVisible: true },
  			2147483556: { id: 2147483556, date: 1518480000000, description: "BARNES & NOBLE #2724", category: "Materistic", individual: "Both", amount: -101.81, isVisible: true }	},
  		11: {
        2147483557: { id: 2147483557, date: 1518393600000, description: "PAT CATANS 23 BOARDMAN", category: "Materistic", individual: "Both", amount: -6.37, isVisible: true },
  			2147483558: { id: 2147483558, date: 1518393600000, description: "BARNES & NOBLE #2724", category: "Materistic", individual: "Both", amount: -34.29, isVisible: true }	},
  		9: {
        2147483559: { id: 2147483559, date: 1518220800000, description: "SPEEDWAY 03632 426", category: "Gas", individual: "Both", amount: -27.75, isVisible: true }	},
  		8: {
        2147483560: { id: 2147483560, date: 1518134400000, description: "SP * RAELBOX.COM", category: "Entertainment", individual: "Both", amount: -2.5, isVisible: true },
  			2147483561: { id: 2147483561, date: 1518134400000, description: "RHINEGEIST BREWERY", category: "Beer", individual: "Both", amount: -14.25, isVisible: true }	},
  		6: {
        2147483562: { id: 2147483562, date: 1517961600000, description: "TWC*TIMEWARNERCABLE", category: "Internet", individual: "Both", amount: -94.98, isVisible: true },
  			2147483563: { id: 2147483563, date: 1517961600000, description: "KROGER #423", category: "Groceries", individual: "Both", amount: -79.73, isVisible: true }	},
  		5: {
        2147483564: { id: 2147483564, date: 1517875200000, description: "THE WEBSTAURANT STORE", category: "Materistic", individual: "Both", amount: -291.18, isVisible: true }	},
  		4: {
        2147483565: { id: 2147483565, date: 1517788800000, description: "BIG LOTS STORES - #181", category: "Materistic", individual: "Both", amount: -10.7, isVisible: true },
  			2147483566: { id: 2147483566, date: 1517788800000, description: "TUESDAY MORNING # 0669", category: "Materistic", individual: "Both", amount: -32.09, isVisible: true },
  			2147483567: { id: 2147483567, date: 1517788800000, description: "EXXONMOBIL    97659676", category: "Gas", individual: "Both", amount: -31.25, isVisible: true },
  			2147483568: { id: 2147483568, date: 1517788800000, description: "BURLINGTON STORES 1078", category: "Materistic", individual: "Both", amount: -39.47, isVisible: true }	},
  		3: {
        2147483569: { id: 2147483569, date: 1517702400000, description: "DOLLAR TREE", category: "Groceries", individual: "Both", amount: -20.22, isVisible: true },
  			2147483570: { id: 2147483570, date: 1517702400000, description: "KIRKLAND'S #983", category: "Groceries", individual: "Both", amount: -36.5, isVisible: true },
  			2147483571: { id: 2147483571, date: 1517702400000, description: "HOMEGOODS # 0727", category: "Materistic", individual: "Both", amount: -21.33, isVisible: true },
  			2147483572: { id: 2147483572, date: 1517702400000, description: "ANDYS MEDITERRANEAN GR", category: "Meals (Food)", individual: "Both", amount: -73.25, isVisible: true },
  			2147483573: { id: 2147483573, date: 1517702400000, description: "BED BATH & BEYOND #452", category: "Materistic", individual: "Both", amount: -68.28, isVisible: true }	},
  		2: {
        2147483574: { id: 2147483574, date: 1517616000000, description: "TARGET        00024836", category: "Materistic", individual: "Both", amount: -92.18, isVisible: true },
  			2147483575: { id: 2147483575, date: 1517616000000, description: "DOLLAR TREE", category: "Groceries", individual: "Both", amount: -9.54, isVisible: true }	},
  		1: {
        2147483576: { id: 2147483576, date: 1517529600000, description: "LA MEXICANA GROCERY ST", category: "Meals (Food)", individual: "Both", amount: -23, isVisible: true }	}	},
  	1: {
      31: {
        2147483577: { id: 2147483577, date: 1517443200000, description: "TMOBILE*AUTO PAY", category: "Phone", individual: "Both", amount: -257.83, isVisible: true },
  			2147483578: { id: 2147483578, date: 1517443200000, description: "SHEETZ        00002667", category: "Gas", individual: "Both", amount: -31.75, isVisible: true },
  			2147483579: { id: 2147483579, date: 1517443200000, description: "TST* THE GREAT LAKES B", category: "Beer", individual: "Both", amount: -18.25, isVisible: true },
  			2147483580: { id: 2147483580, date: 1517443200000, description: "PREMIER EXCH INS POLIC", category: "Gas", individual: "Both", amount: -12, isVisible: true },
  			2147483581: { id: 2147483581, date: 1517443200000, description: "BIER MARKT BAR CENTO", category: "Meals (Food)", individual: "Both", amount: -70.25, isVisible: true },
  			2147483582: { id: 2147483582, date: 1517443200000, description: "OHIO TURNPIKE", category: "Transportation", individual: "Both", amount: -3.5, isVisible: true }	},
  		30: {
        2147483583: { id: 2147483583, date: 1517356800000, description: "APL* ITUNES.COM/BILL", category: "Materistic", individual: "Both", amount: -0.99, isVisible: true }	},
  		29: {
        2147483584: { id: 2147483584, date: 1517270400000, description: "SPEEDWAY 03542 1 N", category: "Gas", individual: "Both", amount: -29.26, isVisible: true }	},
  		28: {
        2147483585: { id: 2147483585, date: 1517184000000, description: "FLASH SEATS", category: "Entertainment", individual: "Both", amount: -53.18, isVisible: true }	},
  		27: {
        2147483586: { id: 2147483586, date: 1517097600000, description: "DROPBOX*1DHW35WHMHYY", category: "Materistic", individual: "Both", amount: -99, isVisible: true }	},
  		25: {
        2147483587: { id: 2147483587, date: 1516924800000, description: "NORTH COUNTRY BREWING", category: "Meals (Food)", individual: "Both", amount: -64.25, isVisible: true },
  			2147483588: { id: 2147483588, date: 1516924800000, description: "THE CONFLUENCE", category: "Unknown", individual: "Both", amount: -6.04, isVisible: true }	},
  		24: {
        2147483589: { id: 2147483589, date: 1516838400000, description: "LA MEXICANA GROCERY ST", category: "Meals (Food)", individual: "Both", amount: -25.25, isVisible: true },
  			2147483590: { id: 2147483590, date: 1516838400000, description: "STEAK-N-SHAKE#0546 Q99", category: "Meals (Food)", individual: "Both", amount: -17.25, isVisible: true }	},
  		23: {
        2147483591: { id: 2147483591, date: 1516752000000, description: "OHIO OCCUPATIONAL THER", category: "Education", individual: "Both", amount: -60, isVisible: true },
  			2147483592: { id: 2147483592, date: 1516752000000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -25.75, isVisible: true },
  			2147483593: { id: 2147483593, date: 1516752000000, description: "RHINEGEIST BREWERY", category: "Beer", individual: "Both", amount: -17.25, isVisible: true },
  			2147483594: { id: 2147483594, date: 1516752000000, description: "WABI SABI LLC", category: "Meals (Food)", individual: "Both", amount: -35.25, isVisible: true }	},
  		22: {
        2147483595: { id: 2147483595, date: 1516665600000, description: "ALDI 61085", category: "Groceries", individual: "Both", amount: -26.47, isVisible: true }	},
  		21: {
        2147483596: { id: 2147483596, date: 1516579200000, description: "WHISTLE & KEG", category: "Beer", individual: "Both", amount: -23, isVisible: true }	},
  		19: {
        2147483597: { id: 2147483597, date: 1516406400000, description: "A & C SOUTHWAY BEVERAG", category: "Meals (Food)", individual: "Both", amount: -43.75, isVisible: true }	},
  		18: {
        2147483598: { id: 2147483598, date: 1516320000000, description: "HABITS CAFE INC", category: "Meals (Food)", individual: "Both", amount: -24.25, isVisible: true },
  			2147483599: { id: 2147483599, date: 1516320000000, description: "CHILDLIGHT YOGA", category: "Education", individual: "Both", amount: -425, isVisible: true }	},
  		17: {
        2147483600: { id: 2147483600, date: 1516233600000, description: "INTERSTATE MINI MART", category: "Groceries", individual: "Both", amount: -13.25, isVisible: true }	},
  		16: {
        2147483601: { id: 2147483601, date: 1516147200000, description: "CINCINNATI PARKING FEE", category: "Entertainment", individual: "Both", amount: -1.75, isVisible: true },
  			2147483602: { id: 2147483602, date: 1516147200000, description: "EXXONMOBIL    98907579", category: "Gas", individual: "Both", amount: -29.75, isVisible: true },
  			2147483603: { id: 2147483603, date: 1516147200000, description: "TAMMYS PIZZA ON BROADW", category: "Meals (Food)", individual: "Both", amount: -14.39, isVisible: true },
  			2147483604: { id: 2147483604, date: 1516147200000, description: "KRUEGERS TAVERN", category: "Meals (Food)", individual: "Both", amount: -33.25, isVisible: true }	},
  		15: {
        2147483605: { id: 2147483605, date: 1516060800000, description: "GIANT-EAGLE #4030", category: "Groceries", individual: "Both", amount: -21.17, isVisible: true },
  			2147483606: { id: 2147483606, date: 1516060800000, description: "Delanies Grille", category: "Meals (Food)", individual: "Both", amount: -22.25, isVisible: true }	},
  		13: {
        2147483607: { id: 2147483607, date: 1515888000000, description: "GIANT-EAGLE #4078", category: "Groceries", individual: "Both", amount: -48.54, isVisible: true },
  			2147483608: { id: 2147483608, date: 1515888000000, description: "ALDI 63036", category: "Groceries", individual: "Both", amount: -76.85, isVisible: true }	},
  		12: {
        2147483609: { id: 2147483609, date: 1515801600000, description: "WESTERN HEALTH ADVANTA", category: "Medical", individual: "Both", amount: -567.7, isVisible: true }	},
  		11: {
        2147483610: { id: 2147483610, date: 1515715200000, description: "THE MANOR", category: "Meals (Food)", individual: "Both", amount: -33.25, isVisible: true },
  			2147483611: { id: 2147483611, date: 1515715200000, description: "BUREAU OF MOTOR VEHICL", category: "Car Repairs", individual: "Both", amount: -97.64, isVisible: true },
  			2147483612: { id: 2147483612, date: 1515715200000, description: "OPLATES CRDT CRD SRV F", category: "Car Repairs", individual: "Both", amount: -1.95, isVisible: true },
  			2147483613: { id: 2147483613, date: 1515715200000, description: "KRAVITZ DELICATESSEN", category: "Meals (Food)", individual: "Both", amount: -30.25, isVisible: true }	},
  		8: {
        2147483614: { id: 2147483614, date: 1515456000000, description: "PREMIER EXCH INS POLIC", category: "Gas", individual: "Both", amount: -24, isVisible: true },
  			2147483615: { id: 2147483615, date: 1515456000000, description: "SUNOCO 0371637000  QPS", category: "Gas", individual: "Both", amount: -33.26, isVisible: true },
  			2147483616: { id: 2147483616, date: 1515456000000, description: "SAVOR GROWL", category: "Meals (Food)", individual: "Both", amount: -20.38, isVisible: true }	},
  		7: {
        2147483617: { id: 2147483617, date: 1515369600000, description: "COMCAST CALIFORNIA", category: "Internet", individual: "Both", amount: -49.99, isVisible: true },
  			2147483618: { id: 2147483618, date: 1515369600000, description: "CHIPOTLE 1838", category: "Meals (Food)", individual: "Both", amount: -14.7, isVisible: true },
  			2147483619: { id: 2147483619, date: 1515369600000, description: "FIVE KNOXVILLE", category: "Meals (Food)", individual: "Both", amount: -38.25, isVisible: true }	},
  		6: {
        2147483620: { id: 2147483620, date: 1515283200000, description: "MCDONALD'S F34996", category: "Meals (Food)", individual: "Both", amount: -4.05, isVisible: true },
  			2147483621: { id: 2147483621, date: 1515283200000, description: "SUNOCO 0218048700  QPS", category: "Gas", individual: "Both", amount: -23.75, isVisible: true },
  			2147483622: { id: 2147483622, date: 1515283200000, description: "NEW N01 CHINESE RESTAU", category: "Meals (Food)", individual: "Both", amount: -6.33, isVisible: true }	},
  		5: {
        2147483623: { id: 2147483623, date: 1515196800000, description: "JIFFY LUBE 3775", category: "Car Repairs", individual: "Both", amount: -78.69, isVisible: true },
  			2147483624: { id: 2147483624, date: 1515196800000, description: "TARGET        00010900", category: "Materistic", individual: "Both", amount: -4.14, isVisible: true },
  			2147483625: { id: 2147483625, date: 1515196800000, description: "KROGER #676", category: "Groceries", individual: "Both", amount: -21.04, isVisible: true },
  			2147483626: { id: 2147483626, date: 1515196800000, description: "TIDAL WAVE AUTO SPA", category: "Car Repairs", individual: "Both", amount: -15, isVisible: true },
  			2147483627: { id: 2147483627, date: 1515196800000, description: "DOLLAR-GENERAL #2714", category: "Groceries", individual: "Both", amount: -1.08, isVisible: true }	},
  		4: {
        2147483628: { id: 2147483628, date: 1515110400000, description: "CHICK-FIL-A #01161", category: "Meals (Food)", individual: "Both", amount: -5.26, isVisible: true }	},
  		3: {
        2147483629: { id: 2147483629, date: 1515024000000, description: "AIRSTRIKE", category: "Entertainment", individual: "Both", amount: -17, isVisible: true }	},
  		2: {
        2147483630: { id: 2147483630, date: 1514937600000, description: "PUBLIX #525", category: "Groceries", individual: "Both", amount: -8.91, isVisible: true },
  			2147483631: { id: 2147483631, date: 1514937600000, description: "IL TOLLWAY - WEB - UNP", category: "Transportation", individual: "Both", amount: -2.8, isVisible: true }	},
  		1: {
        2147483632: { id: 2147483632, date: 1514851200000, description: "SPEEDWAY 08496 101", category: "Gas", individual: "Both", amount: -29.25, isVisible: true },
  			2147483633: { id: 2147483633, date: 1514851200000, description: "LI'L CRICKET 253", category: "Beer", individual: "Both", amount: -23.25, isVisible: true },
  			2147483634: { id: 2147483634, date: 1514851200000, description: "WENDY'S #4738", category: "Meals (Food)", individual: "Both", amount: -10.43, isVisible: true }	}	}	},
  2017: {
    12: {
      31: {
        2147483635: { id: 2147483635, date: 1514764800000, description: "16 BIT SOUTH", category: "Beer", individual: "Both", amount: -13.25, isVisible: true },
  			2147483636: { id: 2147483636, date: 1514764800000, description: "MOERLEIN LAGER HOUSE", category: "Meals (Food)", individual: "Both", amount: -61.25, isVisible: true },
  			2147483637: { id: 2147483637, date: 1514764800000, description: "PHILLIPS 66 - JB BATTL", category: "Gas", individual: "Both", amount: -35.51, isVisible: true },
  			2147483638: { id: 2147483638, date: 1514764800000, description: "TMOBILE*AUTO PAY", category: "Phone", individual: "Both", amount: -257.55, isVisible: true },
  			2147483639: { id: 2147483639, date: 1514764800000, description: "SUBWAY        03181310", category: "Meals (Food)", individual: "Both", amount: -13.89, isVisible: true }	},
  		30: {
        2147483640: { id: 2147483640, date: 1514678400000, description: "Brunch", category: "Meals (Food)", individual: "Both", amount: -29.25, isVisible: true },
  			2147483641: { id: 2147483641, date: 1514678400000, description: "APL* ITUNES.COM/BILL", category: "Materistic", individual: "Both", amount: -0.99, isVisible: true },
  			2147483642: { id: 2147483642, date: 1514678400000, description: "LYFT   *RIDE SAT 2PM", category: "Entertainment", individual: "Both", amount: -11.15, isVisible: true },
  			2147483643: { id: 2147483643, date: 1514678400000, description: "LYFT   *RIDE FRI 11PM", category: "Entertainment", individual: "Both", amount: -4, isVisible: true }	},
  		29: { 	2147483644: { id: 2147483644, date: 1514592000000, description: "2888 GREAT CLIPS AT AV", category: "Miscellaneous", individual: "Both", amount: -18, isVisible: true },
  			2147483645: { id: 2147483645, date: 1514592000000, description: "LAKEFRONT BREWERY INC", category: "Meals (Food)", individual: "Both", amount: -35.25, isVisible: true },
  			2147483646: { id: 2147483646, date: 1514592000000, description: "LAKEFRONT BREWERY INC", category: "Beer", individual: "Both", amount: -15.25, isVisible: true },
  			2147483647: { id: 2147483647, date: 1514592000000, description: "JOURNEYMAN HOTEL F&B", category: "Accomodation", individual: "Both", amount: -60.25, isVisible: true }	}	}	}
};


export default function(state=initialState, action){
  const initTransaction = action.payload ? action.payload.transaction : {};

  switch (action.type) {
      case EDIT_TRANSACTION:
        const newTransaction = {...initTransaction, [action.payload.property]:action.payload.value};
        const tDate = getDateObject(newTransaction.date);
        return {...state,
                    [tDate.year]: {...state[tDate.year],
                      [tDate.month]: {...state[tDate.year][tDate.month],
                        [tDate.day]: {...state[tDate.year][tDate.month][tDate.day],
                          [newTransaction.id]: newTransaction}}}};
    }
  return state;
}

function getDateObject(date){
  var trDate = new Date(date).toLocaleDateString().split('/');
  return {month:trDate[0]*1, day:trDate[1]*1, year:trDate[2]*1};
}
