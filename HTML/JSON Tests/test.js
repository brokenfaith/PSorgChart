var data_set = {
    	"154": ["C3XOCV8UF", "Gulati, Hardeep S", "Blank", "Blank", "General and Administrative", "CEO Admin", "Chief Executive Officer", "Folsom, CA", "USA", "01-Aug-2015", "01-Aug-2015", "Executive"],
	"88": ["2AQCMVXSF", "Schlosser, Christopher", "Kiely, Evan", "0IKB6VD3C", "General and Administrative", "Finance", "Financial Analyst", "Austin, TX - People Admin", "USA", "05-Sep-2017", "01-Aug-2018", "HPEL"],
	"89": ["Z6X8ZF8YK", "Shults, Austin", "Garcia, Candice", "MB87TL0HB", "General and Administrative", "Finance", "Accounts Receivable Specialist", "Austin, TX - People Admin", "USA", "26-Sep-2016", "01-Aug-2018", "HPEL"],
	"110": ["CIW43B69F", "de la Fuente, Jorge", "Eisenhart, Wallace", "I549AEEOQ", "General and Administrative", "Information Technology", "Network Engineer", "Bethlehem, PA", "USA", "07-Dec-1987", "31-Jan-2017", "Professional"],
	"111": ["VNIX64RG2", "Samuels, Uranie N", "Rhoads, Margaret", "F7MNNKX78", "General and Administrative", "Facilities", "Facility Coordinator", "Bethlehem, PA", "USA", "17-Sep-1990", "31-Jan-2017", "Professional"],
	"112": ["12XMZ1A5Q", "Meckes, Lee alan", "Rhoads, Margaret", "F7MNNKX78", "General and Administrative", "Facilities", "Facility Coordinator", "Bethlehem, PA", "USA", "20-Dec-1995", "31-Jan-2017", "Professional"],
	"113": ["YW5ZTVJ2Z", "Herb, Jenniah Lynn", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Revenue Accountant", "Bethlehem, PA", "USA", "14-Jun-2004", "31-Jan-2017", "Professional"],
	"114": ["H3P6C7KHA", "Lutzi, Thomas", "Eisenhart, Wallace", "I549AEEOQ", "General and Administrative", "Information Technology", "System Engineer", "Bethlehem, PA", "USA", "26-Mar-2012", "31-Jan-2017", "Professional"],
	"115": ["JXPYIO334", "Bechtel-Nyce, Carol", "Rhoads, Margaret", "F7MNNKX78", "General and Administrative", "Facilities", "Administrative Assistant", "Bethlehem, PA", "USA", "03-Sep-2013", "31-Jan-2017", "Professional"],
	"116": ["R3B46CCR8", "Lutzi, Lisa", "Cavanna, Robert", "XB8985C1J", "General and Administrative", "CEO Admin", "Project Manager", "Bethlehem, PA", "USA", "04-Jun-2009", "31-Jan-2017", "Professional"],
	"90": ["OUMV6E82F", "Coble Roulet, Steffanie", "Garcia, Candice", "MB87TL0HB", "General and Administrative", "Finance", "Accounts Receivable Specialist", "Austin, TX - People Admin", "USA", "21-Oct-2015", "01-Aug-2018", "Professional"],
	"117": ["U79DN0MLB", "Barrall, Annamarie", "Lyon, Craig", "FMBTWTGCT", "General and Administrative", "Human Resources", "Human Resources Generalist", "Bethlehem, PA", "USA", "31-May-1983", "31-Jan-2017", "Professional"],
	"91": ["8RM4JXIPJ", "Tafler, Keagan", "Kiely, Evan", "0IKB6VD3C", "General and Administrative", "Finance", "Financial Analyst", "Austin, TX - People Admin", "USA", "20-Feb-2018", "01-Aug-2018", "Professional"],
	"118": ["I549AEEOQ", "Eisenhart, Wallace", "Otto, Volker", "22JXJZXXH", "General and Administrative", "Information Technology", "Manager, Information Technology", "Bethlehem, PA", "USA", "04-Mar-2002", "31-Jan-2017", "Management"],
	"92": ["N46G3JNM6", "Lara, Emiliano M", "Forberger, Eva", "BULM7VI8L", "General and Administrative", "Finance", "Renewals Associate", "Folsom, CA", "USA", "13-Aug-2018", "13-Aug-2018", "HPEL"],
	"119": ["QYH35Q3T4", "Linsenmann, Mary Beth", "Lee, Kimberly", "38UZFMBWF", "General and Administrative", "Human Resources", "Human Resources Manager", "Bethlehem, PA", "USA", "24-May-2004", "31-Jan-2017", "Professional"],
	"93": ["F7MNNKX78", "Rhoads, Margaret H", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Facilities", "Manager, Facilities", "Bethlehem, PA", "USA", "10-Sep-2018", "10-Sep-2018", "Professional"],
	"94": ["WV9XQV5NJ", "Quinn, Michael A", "Oldemeyer, Mark", "70DPBZOCW", "General and Administrative", "Finance", "Vice President, Finance", "Folsom, CA", "USA", "17-Sep-2018", "17-Sep-2018", "Executive"],
	"95": ["4B35V1RJF", "Chung, Matthew", "Hodges, Alice", "ZJ9A4II9W", "General and Administrative", "Finance", "Finance Intern", "Folsom, CA", "USA", "24-Sep-2018", "24-Sep-2018", "HPEL"],
	"96": ["BULM7VI8L", "Forberger, Eva M", "Tretheway, James", "3TF8CYHHJ", "General and Administrative", "Finance", "Director, Renewals", "Folsom, CA", "USA", "24-Sep-2018", "24-Sep-2018", "Management"],
	"97": ["Z2ZBVVWE3", "Rowett, Samantha L", "Chavez, Cierra", "1K6AI3G4V", "General and Administrative", "Finance", "Billing Operations Associate", "Folsom, CA", "USA", "08-Oct-2018", "08-Oct-2018", "HPEL"],
	"10": ["2ALXZ7CUY", "Su, Stanley Tsan", "Cavanna, Robert", "XB8985C1J", "General and Administrative", "CEO Admin", "SalesForce Administrator", "Folsom, CA", "USA", "12-Oct-2015", "12-Oct-2015", "HPEL"],
	"98": ["BQ1R3S4N1", "Dessenberger, Heather N", "Chavez, Cierra", "1K6AI3G4V", "General and Administrative", "Finance", "Collections Associate", "Folsom, CA", "USA", "15-Oct-2018", "15-Oct-2018", "HPEL"],
	"11": ["H840LHXXN", "Mohler, Christopher Adam", "LaPlante, Dawn", "SOLQ1A804", "General and Administrative", "Human Resources", "Senior Manager, Talent Acquisition", "Folsom, CA", "USA", "12-Oct-2015", "12-Oct-2015", "Management"],
	"99": ["NOT18HPBF", "Lynch, Devin J", "Mohler, Christopher", "H840LHXXN", "General and Administrative", "Human Resources", "Recruiting Sourcer", "Austin, TX - People Admin", "USA", "15-Oct-2018", "15-Oct-2018", "Professional"],
	"12": ["OCDPGMVTY", "Merrill, Monica M", "Ballantyne, Steven", "5CQTQBTUR", "General and Administrative", "CEO Admin", "Champion, Corporate Social Responsibility", "Folsom, CA", "USA", "19-Oct-2015", "19-Oct-2015", "Professional"],
	"13": ["6EPDX3OTR", "Nguyen, Truc Du", "Della, Teresa", "I1UPYDTAT", "General and Administrative", "Legal", "Contracts Administrator", "Folsom, CA", "USA", "26-Oct-2015", "26-Oct-2015", "HPEL"],
	"14": ["FRI2JW4Z4", "Hodge, Alexandra", "Flagg, Darron", "08LUQXYUO", "General and Administrative", "Legal", "Corporate Counsel", "Field North Carolina", "USA", "24-Mar-2014", "01-Nov-2015", "Professional"],
	"15": ["B55TEG6WA", "Ruddell, Sara Jean", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Facilities", "Supervisor, Facilities", "Folsom, CA", "USA", "07-Dec-2015", "07-Dec-2015", "Professional"],
	"16": ["I08UH0YYH", "Coley, Christina Leigh", "Chavez, Cierra", "1K6AI3G4V", "General and Administrative", "Finance", "Collections Associate", "Folsom, CA", "USA", "07-Dec-2015", "07-Dec-2015", "HPEL"],
	"17": ["B7OEYPPKU", "Merchant, Samir Nazim", "Forberger, Eva", "BULM7VI8L", "General and Administrative", "Finance", "Renewals Associate", "Folsom, CA", "USA", "14-Dec-2015", "14-Dec-2015", "Professional"],
	"18": ["QGSDD949L", "Long, Christopher", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Information Technology", "Information Technology Technician", "Roanoke, VA", "USA", "07-Aug-2015", "01-Feb-2016", "Professional"],
	"19": ["R4Z74DCZ6", "Brooks, Dimitri", "Akcora, Yakup", "47AT4T4MZ", "General and Administrative", "Information Technology", "Network Administrator", "Folsom, CA", "USA", "21-Mar-2016", "21-Mar-2016", "Professional"],
	"120": ["CTQNE3QX9", "Miller, Ronald", "Eisenhart, Wallace", "I549AEEOQ", "General and Administrative", "Information Technology", "System Engineer", "Bethlehem, PA", "USA", "12-Jan-2009", "31-Jan-2017", "Professional"],
	"0": ["Associate ID", "Payroll Name", "Reports To Name", "Reports To Associate ID", "Org", "Depart", "Job Title Description", "Location Description", "Country", "Seniority Date", "Hire Date", "Job Class Description"],
	"121": ["0JS96GB9D", "Howard, Melinda Lee", "Della, Teresa", "I1UPYDTAT", "General and Administrative", "Legal", "Senior Contracts Administrator", "Bethlehem, PA", "USA", "20-Jun-2011", "31-Jan-2017", "Professional"],
	"1": ["JHBV6HT92", "Taylor, Alan F", "Gulati, Hardeep", "C3XOCV8UF", "General and Administrative", "CEO Admin", "Senior Vice President of Corp Development", "Folsom, CA", "USA", "01-Sep-2015", "01-Sep-2015", "Executive"],
	"122": ["5VGQCGZ5L", "Morris, Ron", "Hodges, Alice", "ZJ9A4II9W", "General and Administrative", "Finance", "Senior Financial Analyst", "Chico, CA", "USA", "24-Apr-2006", "31-Jan-2017", "Professional"],
	"2": ["KDVKNRCWZ", "McKenna, Randi D", "Lee, Kimberly", "38UZFMBWF", "General and Administrative", "Human Resources", "Manager, Human Resources", "Folsom, CA", "USA", "14-Sep-2015", "14-Sep-2015", "Management"],
	"123": ["E1AETXDTA", "Kumar, Anil", "Peter, Helen", "S5WAV6H8M", "General and Administrative", "Human Resources", "Manager, Talent Acquisition", "Bengaluru, India", "IND", "04-Sep-2017", "04-Sep-2017", "Management"],
	"3": ["XPHVXP1US", "Crowder, Jack A", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Payroll Administrator", "Folsom, CA", "USA", "21-Sep-2015", "21-Sep-2015", "Professional"],
	"124": ["5NXB6JD6Q", "D, Deepak", "Ramana, Venkat", "9B8MAPNIX", "General and Administrative", "Finance", "Renewals Associate", "Bengaluru, India", "IND", "17-Sep-2018", "17-Sep-2018", "Professional"],
	"4": ["R1Z8N6W20", "Butler, Scott Raymond", "Kiely, Evan", "0IKB6VD3C", "General and Administrative", "Finance", "Financial Analyst", "Folsom, CA", "USA", "21-Sep-2015", "21-Sep-2015", "HPEL"],
	"125": ["0DJ9SLTZG", "Smardon, Natalya", "Holman, Norma", "F2IQD2CM2", "General and Administrative", "Human Resources", "Talent Development Project Specialist", "Burlington, ON", "CAN", "06-Mar-2017", "27-Nov-2017", "HPEL"],
	"5": ["Y5H7ORB1F", "Rutledge, James Michael", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Tax Accountant", "Folsom, CA", "USA", "05-Oct-2015", "05-Oct-2015", "HPEL"],
	"126": ["TD7MEMKMT", "Pasha, Javeed", "Ramana, Venkat", "9B8MAPNIX", "General and Administrative", "Finance", "Accountant", "Bengaluru, India", "IND", "06-Aug-2018", "06-Aug-2018", "Professional"],
	"6": ["I1UPYDTAT", "Della, Teresa Paula", "Flagg, Darron", "08LUQXYUO", "General and Administrative", "Legal", "Senior Corporate Counsel", "Folsom, CA", "USA", "05-Oct-2015", "05-Oct-2015", "Management"],
	"127": ["PLL0KIMWE", "Oelke, Jessica", "Nash, Sarah", "MQD8FYYZH", "General and Administrative", "Human Resources", "Regional Human Resources Associate", "Burlington, ON", "CAN", "12-Jun-2017", "12-Jun-2017", "HPEL"],
	"7": ["6F6WC0RLD", "Roberts, Dennis Dean", "Kaminski, Michael", "ZJVNO8GVQ", "General and Administrative", "Finance", "Director, Accounting", "Folsom, CA", "USA", "05-Oct-2015", "05-Oct-2015", "Management"],
	"128": ["I3RXPVIJT", "Green, Thomas", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Information Technology", "Desktop Support Technician", "Burlington, ON", "CAN", "11-Jan-2016", "11-Jan-2016", "HPEL"],
	"8": ["1K6AI3G4V", "Chavez, Cierra Denae", "Kaminski, Michael", "ZJVNO8GVQ", "General and Administrative", "Finance", "Senior Manager, Order Management", "Folsom, CA", "USA", "12-Oct-2015", "12-Oct-2015", "Management"],
	"129": ["6FSGVA8JI", "Ramu, Raja", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Facilities", "Manager, Facilities", "Bengaluru, India", "IND", "13-Dec-2017", "13-Dec-2017", "Management"],
	"9": ["38UZFMBWF", "Lee, Kimberly La Voy", "LaPlante, Dawn", "SOLQ1A804", "General and Administrative", "Human Resources", "Director, Talent Management", "Folsom, CA", "USA", "12-Oct-2015", "12-Oct-2015", "Management"],
	"20": ["3TF8CYHHJ", "Tretheway, James", "Quinn, Michael", "WV9XQV5NJ", "General and Administrative", "Finance", "Senior Director, Finance", "Folsom, CA", "USA", "31-May-2016", "31-May-2016", "Management"],
	"21": ["GX9AF4TGN", "Muhamad, Samira", "Lyon, Craig", "FMBTWTGCT", "General and Administrative", "Human Resources", "Human Resources Associate", "Folsom, CA", "USA", "13-Jun-2016", "13-Jun-2016", "HPEL"],
	"22": ["ERSK5DHBC", "Poutre, Michael Joseph", "Akcora, Yakup", "47AT4T4MZ", "General and Administrative", "Information Technology", "Network Administrator", "Folsom, CA", "USA", "20-Jun-2016", "20-Jun-2016", "HPEL"],
	"23": ["QR80B0F77", "Jones, Christopher Dale", "Akcora, Yakup", "47AT4T4MZ", "General and Administrative", "Information Technology", "Network Engineer", "Folsom, CA", "USA", "27-Jun-2016", "27-Jun-2016", "Professional"],
	"24": ["I06GP3JTL", "Shill, Megan Nicole", "Lyon, Craig", "FMBTWTGCT", "General and Administrative", "Human Resources", "Human Resources Associate", "Folsom, CA", "USA", "18-Jul-2016", "18-Jul-2016", "HPEL"],
	"25": ["47AT4T4MZ", "Akcora, Yakup", "Otto, Volker", "22JXJZXXH", "General and Administrative", "Information Technology", "Director, Information Technology", "Folsom, CA", "USA", "18-Jul-2016", "18-Jul-2016", "Management"],
	"26": ["F2IQD2CM2", "Holman, Norma R", "LaPlante, Dawn", "SOLQ1A804", "General and Administrative", "Human Resources", "Manager, Talent Development", "Folsom, CA", "USA", "12-Sep-2016", "12-Sep-2016", "Management"],
	"27": ["50FJO8Y2V", "Shepherd, Ashley J", "Mohler, Christopher", "H840LHXXN", "General and Administrative", "Human Resources", "Corporate Recruiter", "Field California", "USA", "10-Oct-2016", "10-Oct-2016", "HPEL"],
	"28": ["152PYOY3P", "Sims Flott, Monica", "Ruddell, Sara", "B55TEG6WA", "General and Administrative", "Facilities", "Receptionist", "Mobile, AL", "USA", "29-Nov-1999", "16-Oct-2016", "Professional"],
	"29": ["VKTXFWRAJ", "Foote, Marijane", "Prescott, Sharon", "1222I6017", "General and Administrative", "CEO Admin", "Custom Forms Manager", "Field Illinois", "USA", "28-Sep-1992", "16-Oct-2016", "Professional"],
	"130": ["W68C0QWSV", "Poon, Timothy", "Eisenhart, Wallace", "I549AEEOQ", "General and Administrative", "Information Technology", "System Engineer", "Field Ontario", "CAN", "02-Feb-1998", "08-Aug-2016", "Professional"],
	"131": ["XVQE3D5MV", "Narayan, Sandip", "Peter, Helen", "S5WAV6H8M", "General and Administrative", "Human Resources", "Manager, Human Resources", "Bengaluru, India", "IND", "04-Sep-2017", "01-Dec-2017", "Management"],
	"132": ["D21I84MRK", "G, Pavanakumara", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Information Technology", "Desktop Support Technician", "Bengaluru, India", "IND", "10-Sep-2018", "10-Sep-2018", "Professional"],
	"133": ["MVKKDFQUY", "Tiwari, Swati", "Nischal, Apoorav", "FWY4EIK23", "General and Administrative", "CEO Admin", "Program Manager", "Bengaluru, India", "IND", "25-Jun-2018", "25-Jun-2018", "Professional"],
	"134": ["N4DZ9ADX1", "K, Vijay", "Ramu, Raja", "6FSGVA8JI", "General and Administrative", "Facilities", "Facility Coordinator", "Bengaluru, India", "IND", "04-Jul-2018", "04-Jul-2018", "Professional"],
	"135": ["D8YMDLYMZ", "Bhola, Sunaina", "Narayan, Sandip", "XVQE3D5MV", "General and Administrative", "Human Resources", "Senior Human Resources Generalist", "Bengaluru, India", "IND", "09-Jul-2018", "09-Jul-2018", "Professional"],
	"136": ["WFHWL1SSU", "Lamba, Lavneet", "Peter, Helen", "S5WAV6H8M", "General and Administrative", "Human Resources", "Corporate Trainer", "Bengaluru, India", "IND", "21-May-2018", "21-May-2018", "Professional"],
	"137": ["7NJD6TXRC", "Rao, Vasumati", "Kaminski, Michael", "ZJVNO8GVQ", "General and Administrative", "Finance", "Controller", "Bengaluru, India", "IND", "04-Sep-2017", "04-Sep-2017", "Professional"],
	"138": ["7R51LES50", "Nadaf, Mansoor", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Information Technology", "Desktop Support Technician", "Bengaluru, India", "IND", "25-Sep-2017", "25-Sep-2017", "HPEL"],
	"139": ["FIFUWUAVY", "Kumar, Avnish", "Akcora, Yakup", "47AT4T4MZ", "General and Administrative", "Information Technology", "Senior Network Engineer", "Bengaluru, India", "IND", "01-Dec-2017", "01-Dec-2017", "Professional"],
	"30": ["V961GLHSC", "Pacher, James", "Eisenhart, Wallace", "I549AEEOQ", "General and Administrative", "Information Technology", "Desktop Administrator", "Mobile, AL", "USA", "20-Oct-2014", "16-Oct-2016", "Professional"],
	"31": ["ZWLG2MYXN", "Presswood, Kasie", "Ruddell, Sara", "B55TEG6WA", "General and Administrative", "Facilities", "Receptionist", "Mobile, AL", "USA", "15-Sep-2014", "16-Oct-2016", "Professional"],
	"32": ["FMBTWTGCT", "Lyon, Craig Roland", "LaPlante, Dawn", "SOLQ1A804", "General and Administrative", "Human Resources", "Senior Manager, Talent Operations", "Folsom, CA", "USA", "01-Jul-2016", "01-Jul-2016", "Management"],
	"33": ["WXH9MJTVK", "Powers, Paula Clinevell", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Facilities", "Office Manager", "Roanoke, VA", "USA", "07-Nov-2016", "07-Nov-2016", "Professional"],
	"34": ["Y7Q94ZLIQ", "Albertson, Aaron M", "Akcora, Yakup", "47AT4T4MZ", "General and Administrative", "Information Technology", "System Engineer", "Roanoke, VA", "USA", "17-Nov-2016", "17-Nov-2016", "Management"],
	"35": ["L0X7FYP5M", "Saligrama Ravi, Abhilasha", "Eisenhart, Wallace", "I549AEEOQ", "General and Administrative", "Information Technology", "Associate Software Engineer", "Folsom, CA", "USA", "17-Nov-2016", "21-Nov-2016", "Professional"],
	"36": ["2T5EY9FUG", "Lukes, Karl R", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Associate Payroll Specialist", "Folsom, CA", "USA", "05-Dec-2016", "05-Dec-2016", "HPEL"],
	"37": ["ZHNPE8EME", "Weibel, Alex", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Information Technology", "Desktop Support Technician", "Folsom, CA", "USA", "19-Dec-2016", "19-Dec-2016", "Professional"],
	"38": ["K6FW7LA12", "Dase, JoAnn M L", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Senior Accountant", "Folsom, CA", "USA", "30-Jan-2017", "30-Jan-2017", "Professional"],
	"39": ["DEBA5WIAU", "Choi, Erin Marissa", "Flagg, Darron", "08LUQXYUO", "General and Administrative", "Legal", "Senior Corporate Counsel", "Folsom, CA", "USA", "06-Feb-2017", "06-Feb-2017", "Professional"],
	"140": ["S5WAV6H8M", "Peter, Helen", "LaPlante, Dawn", "SOLQ1A804", "General and Administrative", "Human Resources", "Director, Talent Management", "Bengaluru, India", "IND", "02-Jul-2018", "02-Jul-2018", "Management"],
	"141": ["MQD8FYYZH", "Nash, Sarah", "Lee, Kimberly", "38UZFMBWF", "General and Administrative", "Human Resources", "Senior Human Resources Business Partner", "Burlington, ON", "CAN", "21-Dec-2015", "21-Dec-2015", "Management"],
	"142": ["YVQKCPE9T", "Velasquez, Wha-King", "Eisenhart, Wallace", "I549AEEOQ", "General and Administrative", "Information Technology", "Information Technology Technician", "Folsom, CA", "USA", "24-Sep-2007", "24-Sep-2007", "Professional"],
	"143": ["N97589REG", "Seber, Elizabeth", "Ruddell, Sara", "B55TEG6WA", "General and Administrative", "Facilities", "Facility Coordinator", "Burlington, ON", "CAN", "21-Jul-2008", "28-Mar-2016", "Professional"],
	"144": ["AB30NM3KF", "Pulipati, Saran", "Narayan, Sandip", "XVQE3D5MV", "General and Administrative", "Human Resources", "Compensation and Benefits Analyst", "Bengaluru, India", "IND", "07-May-2018", "07-May-2018", "HPEL"],
	"145": ["T8Q4ZQK2B", "K, Megha", "Kumar, Anil", "E1AETXDTA", "General and Administrative", "Human Resources", "Recruiting Coordinator", "Bengaluru, India", "IND", "11-Dec-2017", "11-Dec-2017", "HPEL"],
	"146": ["MZW2A6VXC", "Satyasai, Daedeepya", "Ramana, Venkat", "9B8MAPNIX", "General and Administrative", "Finance", "Collections Associate", "Bengaluru, India", "IND", "16-Jul-2018", "16-Jul-2018", "HPEL"],
	"147": ["8XVAUNIZ6", "Guruswamy, Morasa", "Kumar, Anil", "E1AETXDTA", "General and Administrative", "Human Resources", "Technical Recruiter", "Bengaluru, India", "IND", "09-Oct-2017", "01-Dec-2017", "Professional"],
	"148": ["9B8MAPNIX", "Ramana, Venkata", "Rao, Vasumati", "7NJD6TXRC", "General and Administrative", "Finance", "Accounting Manager", "Bengaluru, India", "IND", "10-Jan-2018", "10-Jan-2018", "Professional"],
	"149": ["FWY4EIK23", "Nishchal, Apoorav", "Gulati, Hardeep", "C3XOCV8UF", "General and Administrative", "CEO Admin", "Country Manager, India", "Bengaluru, India", "IND", "11-Dec-2017", "11-Dec-2017", "Executive"],
	"40": ["928NO5BKP", "Lambert, Jeffrey S", "Oldemeyer, Mark", "70DPBZOCW", "General and Administrative", "Legal", "Chief Legal Ofcr & Chief Corp Dev Ofcr", "Folsom, CA", "USA", "13-Nov-2017", "13-Nov-2017", "Executive"],
	"41": ["GYAAVI81Z", "Henry, Edmond", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Accountant", "Folsom, CA", "USA", "06-Mar-2017", "06-Mar-2017", "Professional"],
	"42": ["22JXJZXXH", "Otto, Volker", "Oldemeyer, Mark", "70DPBZOCW", "General and Administrative", "Information Technology", "Vice President, Information Technology", "Folsom, CA", "USA", "01-Mar-2017", "01-Mar-2017", "Executive"],
	"43": ["SOLQ1A804", "LaPlante, Dawn", "Oldemeyer, Mark", "70DPBZOCW", "General and Administrative", "Human Resources", "Vice President, Talent", "Folsom, CA", "USA", "27-Feb-2017", "27-Feb-2017", "Executive"],
	"44": ["ZJ9A4II9W", "Hodges, Alice B", "Tretheway, James", "3TF8CYHHJ", "General and Administrative", "Finance", "Manager, FP&A", "Folsom, CA", "USA", "03-Apr-2017", "03-Apr-2017", "Management"],
	"45": ["JXUJXQ2I5", "Johnston, Jake E", "Tretheway, James", "3TF8CYHHJ", "General and Administrative", "Finance", "Financial Analyst", "Folsom, CA", "USA", "03-Apr-2017", "03-Apr-2017", "HPEL"],
	"46": ["DP5BOQS1L", "Kupperberg, Paige L", "Holman, Norma", "F2IQD2CM2", "General and Administrative", "Human Resources", "Training Coordinator", "Folsom, CA", "USA", "03-Apr-2017", "03-Apr-2017", "HPEL"],
	"47": ["2W6XQURBQ", "Edris, Emily A", "Holman, Norma", "F2IQD2CM2", "General and Administrative", "Human Resources", "Senior Corporate Trainer", "Folsom, CA", "USA", "30-Apr-2017", "30-Apr-2017", "Professional"],
	"48": ["UZ55TB0FC", "Kort, Alicia D", "Mohler, Christopher", "H840LHXXN", "General and Administrative", "Human Resources", "Corporate Recruiter", "Folsom, CA", "USA", "30-Apr-2017", "30-Apr-2017", "HPEL"],
	"49": ["11ZYMLUYU", "Ravel, Betty L", "Gulati, Hardeep", "C3XOCV8UF", "General and Administrative", "CEO Admin", "Manager, Executive Administrative Staff", "Folsom, CA", "USA", "30-May-2017", "30-May-2017", "Management"],
	"150": ["M3J96ED1E", "Kulkarni, Shyam", "Ramana, Venkat", "9B8MAPNIX", "General and Administrative", "Finance", "Renewals Associate", "Bengaluru, India", "IND", "06-Aug-2018", "06-Aug-2018", "Professional"],
	"151": ["MOR55LNDW", "Arjun, Saniya", "Kumar, Anil", "E1AETXDTA", "General and Administrative", "Human Resources", "Recruiter", "Bengaluru, India", "IND", "12-Mar-2018", "12-Mar-2018", "Professional"],
	"152": ["XB8985C1J", "Cavanna, Robert H", "Ballantyne, Steven", "5CQTQBTUR", "General and Administrative", "CEO Admin", "Director, Business Operations", "Folsom, CA", "USA", "23-May-2005", "02-Jun-2006", "HPEL"],
	"153": ["KMT9B8X40", "Ellis, Trena D", "Otto, Volker", "22JXJZXXH", "General and Administrative", "Facilities", "Director, Facilities & End User Services", "Folsom, CA", "USA", "08-May-2000", "02-Jun-2006", "Management"],
	"155": ["70DPBZOCW", "Oldemeyer, Mark E", "Gulati, Hardeep", "C3XOCV8UF", "General and Administrative", "Finance", "Chief Financial Officer", "Folsom, CA", "USA", "01-Aug-2015", "01-Aug-2015", "Executive"],
	"156": ["ZJVNO8GVQ", "Kaminski, Michael E", "Oldemeyer, Mark", "70DPBZOCW", "General and Administrative", "Finance", "Vice President, Controller", "Folsom, CA", "USA", "03-Aug-2015", "01-Aug-2015", "Executive"],
	"50": ["XCJ0716RE", "Lara-Lopez, Jesus", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Accounting Intern", "Folsom, CA", "USA", "12-Jun-2017", "12-Jun-2017", "HPEL"],
	"51": ["7BVA7XLD9", "Johnston, James R", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Accounts Payable Specialist", "Folsom, CA", "USA", "12-Jun-2017", "12-Jun-2017", "HPEL"],
	"52": ["TRR3DCVSH", "Cooper, Madison L", "Chavez, Cierra", "1K6AI3G4V", "General and Administrative", "Finance", "Billing Operations Associate", "Folsom, CA", "USA", "12-Jun-2017", "12-Jun-2017", "Professional"],
	"53": ["JZFGBECCN", "Porter, Christopher W", "Gulati, Hardeep", "C3XOCV8UF", "General and Administrative", "CEO Admin", "President and Chief Operating Officer", "Folsom, CA", "USA", "01-Jul-2017", "01-Jul-2017", "Executive"],
	"54": ["MFGU0HFJE", "Rowett, John R", "Lee, Kimberly", "38UZFMBWF", "General and Administrative", "Human Resources", "Senior Human Resources Business Partner", "Folsom, CA", "USA", "24-Jul-2017", "24-Jul-2017", "HPEL"],
	"55": ["WF0KN8ZV7", "Radebaugh, Grant W", "Hodges, Alice", "ZJ9A4II9W", "General and Administrative", "Finance", "Financial Analyst", "Folsom, CA", "USA", "02-Oct-2017", "02-Oct-2017", "HPEL"],
	"56": ["YVOXL3BF7", "Leonard, Amanda M", "Ruddell, Sara", "B55TEG6WA", "General and Administrative", "Facilities", "Facility Coordinator", "Folsom, CA", "USA", "30-Oct-2017", "30-Oct-2017", "HPEL"],
	"57": ["BCJ3AUTRC", "Rose, Justin P", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Information Technology", "System Engineer", "Folsom, CA", "USA", "06-Nov-2017", "06-Nov-2017", "Professional"],
	"58": ["OU32078T8", "Pamma, Simrendeep S", "Cavanna, Robert", "XB8985C1J", "General and Administrative", "CEO Admin", "Salesforce Coordinator", "Folsom, CA", "USA", "08-Jan-2018", "08-Jan-2018", "HPEL"],
	"59": ["OLPV14FIM", "Van Ruiten, Kathryn N", "Ravel, Betty", "11ZYMLUYU", "General and Administrative", "CEO Admin", "Executive Assistant", "Folsom, CA", "USA", "16-Jan-2018", "16-Jan-2018", "Professional"],
	"60": ["N0GW8EP0W", "Colgan, Christina D", "Ravel, Betty", "11ZYMLUYU", "General and Administrative", "CEO Admin", "Executive Assistant", "Folsom, CA", "USA", "31-Jan-2018", "31-Jan-2018", "Professional"],
	"61": ["8H5ZMS010", "Shearer, Peyton T", "McKenna, Randi", "KDVKNRCWZ", "General and Administrative", "Human Resources", "Human Resources Generalist", "Roanoke, VA", "USA", "12-Mar-2018", "12-Mar-2018", "Professional"],
	"62": ["8GACLOHG1", "Cadle, Rebecka C", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Collections Associate", "Folsom, CA", "USA", "09-Apr-2018", "09-Apr-2018", "HPEL"],
	"63": ["JR5AAC2P0", "Tidwell, Jessica L", "Mohler, Christopher", "H840LHXXN", "General and Administrative", "Human Resources", "Corporate Recruiter", "Folsom, CA", "USA", "09-Apr-2018", "09-Apr-2018", "HPEL"],
	"64": ["PDTJJ921X", "Gutierrez, Angel M", "Ruddell, Sara", "B55TEG6WA", "General and Administrative", "Facilities", "Receptionist", "Folsom, CA", "USA", "14-May-2018", "14-May-2018", "HPEL"],
	"65": ["R0E2AWTCR", "Rana, Rishi", "Gulati, Hardeep", "C3XOCV8UF", "General and Administrative", "CEO Admin", "General Manager, Higher Education", "Austin, TX - People Admin", "USA", "14-May-2018", "14-May-2018", "Executive"],
	"66": ["S56348URP", "Wallace, Elijah Dwayne N", "Lyon, Craig", "FMBTWTGCT", "General and Administrative", "Human Resources", "Talent Intern", "Folsom, CA", "USA", "21-May-2018", "21-May-2018", "HPEL"],
	"67": ["AVTAEBECP", "Yao, Richard H", "Flagg, Darron", "08LUQXYUO", "General and Administrative", "Legal", "Privacy & Legal Affairs Counsel", "Folsom, CA", "USA", "28-Jun-2018", "28-Jun-2018", "Professional"],
	"68": ["Z8UQ47W9G", "Morenko, Jessica A", "Mohler, Christopher", "H840LHXXN", "General and Administrative", "Human Resources", "Corporate Recruiter", "Folsom, CA", "USA", "09-Jul-2018", "09-Jul-2018", "HPEL"],
	"69": ["QUNZ8S7AB", "Slattery, Caitilin M", "Taylor, Alan", "JHBV6HT92", "General and Administrative", "CEO Admin", "Strategic Programs Director", "Folsom, CA", "USA", "30-Jul-2018", "30-Jul-2018", "Professional"],
	"70": ["6AFBNZE7M", "Godfrey, Ashlyn N", "McKenna, Randi", "KDVKNRCWZ", "General and Administrative", "Human Resources", "HR Coordinator II", "Shawnee, KS", "USA", "17-Apr-2017", "01-Aug-2018", "HPEL"],
	"71": ["9Y8LVMOY8", "Angelo, Amber L", "Roberts, Dennis", "6F6WC0RLD", "General and Administrative", "Finance", "Accounts Payable Clerk", "Austin, TX - People Admin", "USA", "04-Jan-2017", "01-Aug-2018", "HPEL"],
	"72": ["MB87TL0HB", "Garcia, Candice", "Chavez, Cierra", "1K6AI3G4V", "General and Administrative", "Finance", "Accounts Receivable Supervisor", "Austin, TX - People Admin", "USA", "03-Apr-2017", "01-Aug-2018", "Management"],
	"73": ["K4GQ67K59", "Sergakis, Effrosene", "Lee, Kimberly", "38UZFMBWF", "General and Administrative", "Human Resources", "Sr. Human Resources Business Partner", "Sandy, UT", "USA", "13-Mar-2006", "01-Aug-2018", "Professional"],
	"74": ["L774H84SJ", "Pfannenstiel, Michael", "Lee, Kimberly", "38UZFMBWF", "General and Administrative", "Human Resources", "Human Resources Generalist", "Austin, TX - People Admin", "USA", "15-Jul-2014", "01-Aug-2018", "Professional"],
	"75": ["YF2N76UWR", "Long, Rachal", "Mohler, Christopher", "H840LHXXN", "General and Administrative", "Human Resources", "Talent Acquisition Specialist", "Austin, TX - People Admin", "USA", "15-May-2017", "01-Aug-2018", "Professional"],
	"76": ["UWMOGBVR3", "Benbow, Teresa D", "Ruddell, Sara", "B55TEG6WA", "General and Administrative", "Facilities", "Administrative Assistant", "Roswell, GA", "USA", "15-Jul-2015", "01-Aug-2018", "Professional"],
	"77": ["WPQFYKJAL", "Kader, Kelli", "Ruddell, Sara", "B55TEG6WA", "General and Administrative", "Facilities", "Executive Assistant", "Sandy, UT", "USA", "04-Feb-2013", "01-Aug-2018", "Professional"],
	"78": ["4IPOAZAN3", "Higgins, Devin", "Forberger, Eva", "BULM7VI8L", "General and Administrative", "Finance", "Billing & Renewals Analyst", "Austin, TX - People Admin", "USA", "12-Jun-2017", "01-Aug-2018", "HPEL"],
	"79": ["0IKB6VD3C", "Kiely, Evan", "Tretheway, James", "3TF8CYHHJ", "General and Administrative", "Finance", "Finance Manager", "Austin, TX - People Admin", "USA", "19-Apr-2017", "01-Aug-2018", "Management"],
	"100": ["ZKZ511ZIL", "Leslie, Tyler C", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Information Technology", "Desktop Support Technician", "Roanoke, VA", "USA", "15-Oct-2018", "15-Oct-2018", "HPEL"],
	"101": ["08LUQXYUO", "Flagg, Darron J", "Lambert, Jeffrey", "928NO5BKP", "General and Administrative", "Legal", "Vice President, Legal Affairs", "Folsom, CA", "USA", "22-Oct-2018", "22-Oct-2018", "Executive"],
	"102": ["G014QU1TM", "Brown, Madison M", "Mohler, Christopher", "H840LHXXN", "General and Administrative", "Human Resources", "Corporate Recruiter", "Roanoke, VA", "USA", "22-Oct-2018", "22-Oct-2018", "Professional"],
	"103": ["J6XJ8PV7T", "Clevenger, Stephen Gregory", "Gulati, Hardeep", "C3XOCV8UF", "General and Administrative", "Finance", "Chief Financial Officer", "Folsom, CA", "USA", "31-Oct-2018", "Executive"],
	"104": ["5PMNEDWBT", "Buveja, Nitica", "Kumar, Anil", "E1AETXDTA", "General and Administrative", "Human Resources", "Recruiter", "Bengaluru, India", "IND", "09-Aug-2018", "09-Aug-2018", "Professional"],
	"105": ["J9SNVSA2J", "Evangelista, Alicia J", "Forberger, Eva", "BULM7VI8L", "General and Administrative", "Finance", "Renewals Associate", "Folsom, CA", "USA", "13-Aug-2007", "13-Aug-2007", "Professional"],
	"106": ["FECU30FV9", "Pond, David J", "Cavanna, Robert", "XB8985C1J", "General and Administrative", "CEO Admin", "Salesforce Developer/Administrator", "Folsom, CA", "USA", "15-Oct-2007", "15-Oct-2007", "Professional"],
	"80": ["SYVJ0ZYHC", "Bull, Alyson", "Lyon, Craig", "FMBTWTGCT", "General and Administrative", "Human Resources", "HR Specialist", "Shawnee, KS", "USA", "27-Apr-2015", "01-Aug-2018", "HPEL"],
	"107": ["4W8UP944U", "Stockman, Kenneth Jeremy", "Akcora, Yakup", "47AT4T4MZ", "General and Administrative", "Information Technology", "Information Technology Technician", "Austin, TX", "USA", "19-Mar-2014", "01-Nov-2015", "Professional"],
	"81": ["LJMDU5PVF", "Durham, Arianna N", "Choi, Erin", "DEBA5WIAU", "General and Administrative", "Legal", "Senior Contracts Administrator", "Austin, TX - People Admin", "USA", "09-Feb-2016", "01-Aug-2018", "Professional"],
	"108": ["PTZTG6ZPL", "Pateelu, HariPriya", "Ramana, Venkat", "9B8MAPNIX", "General and Administrative", "Finance", "Accountant", "Bengaluru, India", "IND", "16-Jul-2018", "16-Jul-2018", "Professional"],
	"82": ["KJJ02534G", "Mathis, Hal", "Eisenhart, Wallace", "I549AEEOQ", "General and Administrative", "Information Technology", "Systems Administrator", "Austin, TX - People Admin", "USA", "17-Nov-2011", "01-Aug-2018", "Professional"],
	"109": ["3GXQW7BLU", "BC, Ashik", "Akcora, Yakup", "47AT4T4MZ", "General and Administrative", "Information Technology", "Network Administrator", "Bengaluru, India", "IND", "18-Jun-2018", "18-Jun-2018", "HPEL"],
	"83": ["CA5P1TMII", "Streeter, Matthew", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Information Technology", "Systems Administrator", "Shawnee, KS", "USA", "31-May-2016", "01-Aug-2018", "Professional"],
	"84": ["5HSEUGN2M", "Smith, Lorrie", "Ellis, Trena", "KMT9B8X40", "General and Administrative", "Information Technology", "Systems Administrator", "Sandy, UT", "USA", "18-Feb-2013", "01-Aug-2018", "Professional"],
	"85": ["A4B9XJMAU", "Fanous, Ziad", "Oldemeyer, Mark", "70DPBZOCW", "General and Administrative", "Finance", "SVP & CFO", "Austin, TX - People Admin", "USA", "26-Jun-2017", "01-Aug-2018", "Executive"],
	"86": ["1ZV09NH7W", "Smith, Ashley", "Kaminski, Michael", "ZJVNO8GVQ", "General and Administrative", "Finance", "Revenue Manager", "Chicago, IL", "USA", "08-Jun-2015", "01-Aug-2018", "Management"],
	"87": ["ZTEM786X3", "Wareham, Michael", "Fanous, Ziad", "A4B9XJMAU", "General and Administrative", "Finance", "Assistant Controller", "Austin, TX - People Admin", "USA", "10-Apr-2017", "01-Aug-2018", "Management"]
}

delete data_set[0];


//JSON Dataset = Filter Out For Parent
var dataset = [];
function filterItems(query) {
  return dataset.filter(function(el) {
      return el.objId.indexOf(query) > -1;
  })[0]
}
//console.log(Object.keys(data_set).length);
// Return Id, ParentID, Name, Title
function KeyToData(key, data_set, parentcode) {
    if(dataset.length > 0) {
        var obj = data_set[key];
        var name = obj[1];
        var title = obj[6]
        var parentset = filterItems(obj[3]);
        
        if(parentset != null) {
            var id = parentset.id;
            console.log(name);
            console.log(title);
            console.log(parentset);
            delete data_set[key];
            var newObj = { id: parseInt(key), parentId:id, Name: name, objId:obj[0], Title: title}
            console.log(newObj);
            dataset.push(newObj);
        }

        console.log(obj[3]);
    }
    else
    {
        var obj = data_set[key];
        var name = obj[1];
        var title = obj[6]
        //console.log(name + ": " + title);
        if( obj[3] == parentcode) {
            console.log(obj[3])
            delete data_set[key];
            var newObj = { id: parseInt(key), parentId:null, Name: name, objId:obj[0], Title: title}
        
            dataset.push(newObj);
            console.log(newObj)
        
            return obj[0];
        }
    }
    
    return false;
}

var parentval = "Blank";
var parentvalId = null;

function ConvertJSONToOrg() {
    for(var key in data_set) {
        var keyData = KeyToData(key, data_set, parentval);
        if(keyData != false)
            parentval = keyData;
    }
}



var lastCount = 999999;

while(Object.keys(data_set).length < lastCount && Object.keys(data_set).length > 0) {
    lastCount = Object.keys(data_set).length;
    ConvertJSONToOrg();
    console.log("test");
    console.log(parentval);
    console.log(Object.keys(data_set).length > 0);
    console.log(Object.keys(data_set).length < lastCount);
    console.log(Object.keys(data_set).length);
    console.log(lastCount);
}



/*
for(var key in data_set) {
    var keyData = KeyToData(key, data_set, parentval);
    if(keyData != false)
        parentval = keyData;
}

console.log(parentval);

for(var key in data_set) {
    var keyData = KeyToData(key, data_set, parentval);
    if(keyData != false)
        parentval = keyData;
}

console.log(parentval);

for(var key in data_set) {
    var keyData = KeyToData(key, data_set, parentval);
    if(keyData != false)
        parentval = keyData;
}

console.log(parentval);

for(var key in data_set) {
    var keyData = KeyToData(key, data_set, parentval);
    if(keyData != false)
        parentval = keyData;
}

console.log(parentval);*/

//console.log(parentval);
//console.log(parentvalId);

//for(var key in data_set) {
   // KeyToData(key, data_set, "C3XOCV8UF");
//}

for(var key in dataset) {
    console.log(dataset[key]);
}

//console.log(Object.keys(data_set).length);




