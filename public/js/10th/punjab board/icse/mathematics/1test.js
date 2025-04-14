
const questions = [

        
  
  
    {
      "num": 1,
      "question_en": "What is the value of 2 + 3 × 4?",
      "question_hi": "2 + 3 × 4 का मान क्या है?",
      "options_en": ["14", "20", "18", "10"],
      "options_hi": ["14", "20", "18", "10"],
      "answer_en": "14",
      "answer_hi": "14",
      "attempted": false
    },
    {
      "num": 2,
      "question_en": "What is the square root of 64?",
      "question_hi": "64 का वर्गमूल क्या है?",
      "options_en": ["6", "8", "7", "9"],
      "options_hi": ["6", "8", "7", "9"],
      "answer_en": "8",
      "answer_hi": "8",
      "attempted": false
    },
    {
      "num": 3,
      "question_en": "What is the value of 3² + 4²?",
      "question_hi": "3² + 4² का मान क्या है?",
      "options_en": ["25", "20", "12", "16"],
      "options_hi": ["25", "20", "12", "16"],
      "answer_en": "25",
      "answer_hi": "25",
      "attempted": false
    },
    {
      "num": 4,
      "question_en": "The perimeter of a square with side length 4 cm is",
      "question_hi": "4 सेमी लंबाई वाले वर्ग का परिमाप क्या होगा?",
      "options_en": ["16 cm", "8 cm", "12 cm", "10 cm"],
      "options_hi": ["16 सेमी", "8 सेमी", "12 सेमी", "10 सेमी"],
      "answer_en": "16 cm",
      "answer_hi": "16 सेमी",
      "attempted": false
    },
    {
      "num": 5,
      "question_en": "What is the sum of the interior angles of a triangle?",
      "question_hi": "त्रिकोण के आंतरिक कोणों का योग क्या होता है?",
      "options_en": ["180°", "360°", "90°", "270°"],
      "options_hi": ["180°", "360°", "90°", "270°"],
      "answer_en": "180°",
      "answer_hi": "180°",
      "attempted": false
    },
    {
      "num": 6,
      "question_en": "The value of π is approximately",
      "question_hi": "π का मान लगभग कितना है?",
      "options_en": ["3.14", "3.16", "3.18", "3.20"],
      "options_hi": ["3.14", "3.16", "3.18", "3.20"],
      "answer_en": "3.14",
      "answer_hi": "3.14",
      "attempted": false
    },
    {
      "num": 7,
      "question_en": "What is the formula for the area of a circle?",
      "question_hi": "वृत्त का क्षेत्रफल का सूत्र क्या है?",
      "options_en": ["πr²", "2πr", "πd", "r²π"],
      "options_hi": ["πr²", "2πr", "πd", "r²π"],
      "answer_en": "πr²",
      "answer_hi": "πr²",
      "attempted": false
    },
    {
      "num": 8,
      "question_en": "The volume of a cylinder is calculated using the formula",
      "question_hi": "सिलिंडर का आयतन किस सूत्र से निकाला जाता है?",
      "options_en": ["πr²h", "2πr²h", "πrh", "r²hπ"],
      "options_hi": ["πr²h", "2πr²h", "πrh", "r²hπ"],
      "answer_en": "πr²h",
      "answer_hi": "πr²h",
      "attempted": false
    },
    {
      "num": 9,
      "question_en": "Which of the following is a prime number?",
      "question_hi": "निम्नलिखित में से कौन सा एक अभाज्य संख्या है?",
      "options_en": ["4", "7", "9", "15"],
      "options_hi": ["4", "7", "9", "15"],
      "answer_en": "7",
      "answer_hi": "7",
      "attempted": false
    },
    {
      "num": 10,
      "question_en": "The value of 5 × 5 × 5 is",
      "question_hi": "5 × 5 × 5 का मान क्या है?",
      "options_en": ["125", "100", "150", "130"],
      "options_hi": ["125", "100", "150", "130"],
      "answer_en": "125",
      "answer_hi": "125",
      "attempted": false
    },
    {
      "num": 11,
      "question_en": "What is the LCM of 12 and 18?",
      "question_hi": "12 और 18 का LCM क्या है?",
      "options_en": ["36", "72", "54", "60"],
      "options_hi": ["36", "72", "54", "60"],
      "answer_en": "36",
      "answer_hi": "36",
      "attempted": false
    },
    {
      "num": 12,
      "question_en": "What is the HCF of 24 and 36?",
      "question_hi": "24 और 36 का HCF क्या है?",
      "options_en": ["12", "24", "18", "6"],
      "options_hi": ["12", "24", "18", "6"],
      "answer_en": "12",
      "answer_hi": "12",
      "attempted": false
    },
    {
      "num": 13,
      "question_en": "What is the area of a triangle with base 10 cm and height 5 cm?",
      "question_hi": "10 सेमी आधार और 5 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या होगा?",
      "options_en": ["25 cm²", "30 cm²", "50 cm²", "100 cm²"],
      "options_hi": ["25 सेमी²", "30 सेमी²", "50 सेमी²", "100 सेमी²"],
      "answer_en": "25 cm²",
      "answer_hi": "25 सेमी²",
      "attempted": false
    },
    {
      "num": 14,
      "question_en": "What is the formula for the area of a rectangle?",
      "question_hi": "आयत का क्षेत्रफल का सूत्र क्या है?",
      "options_en": ["length × breadth", "2(length + breadth)", "length + breadth", "length²"],
      "options_hi": ["लंबाई × चौड़ाई", "2(लंबाई + चौड़ाई)", "लंबाई + चौड़ाई", "लंबाई²"],
      "answer_en": "length × breadth",
      "answer_hi": "लंबाई × चौड़ाई",
      "attempted": false
    },
    {
      "num": 15,
      "question_en": "What is the volume of a cube with side length 4 cm?",
      "question_hi": "4 सेमी लंबाई वाले घन का आयतन क्या होगा?",
      "options_en": ["64 cm³", "16 cm³", "32 cm³", "48 cm³"],
      "options_hi": ["64 सेमी³", "16 सेमी³", "32 सेमी³", "48 सेमी³"],
      "answer_en": "64 cm³",
      "answer_hi": "64 सेमी³",
      "attempted": false
    },
    {
      "num": 16,
      "question_en": "What is the probability of getting an even number from a dice?",
      "question_hi": "सांप-सीढ़ी के पास से सम संख्या प्राप्त करने की संभावना क्या है?",
      "options_en": ["1/2", "1/3", "1/6", "1/4"],
      "options_hi": ["1/2", "1/3", "1/6", "1/4"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 17,
      "question_en": "The sum of the exterior angles of any polygon is always",
      "question_hi": "किसी भी बहुभुज के बाहरी कोणों का योग हमेशा कितना होता है?",
      "options_en": ["360°", "180°", "90°", "270°"],
      "options_hi": ["360°", "180°", "90°", "270°"],
      "answer_en": "360°",
      "answer_hi": "360°",
      "attempted": false
    },
    {
      "num": 18,
      "question_en": "Which of the following is a rational number?",
      "question_hi": "निम्नलिखित में से कौन सा एक यथार्थ संख्या है?",
      "options_en": ["π", "√2", "1/2", "e"],
      "options_hi": ["π", "√2", "1/2", "e"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 19,
      "question_en": "What is the cube root of 27?",
      "question_hi": "27 का घनमूल क्या है?",
      "options_en": ["3", "9", "6", "12"],
      "options_hi": ["3", "9", "6", "12"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false
    },
    {
      "num": 20,
      "question_en": "The angle between the hour hand and the minute hand at 3:00 is",
      "question_hi": "3:00 बजे घंटे की सुई और मिनट की सुई के बीच कोण क्या होगा?",
      "options_en": ["90°", "60°", "120°", "180°"],
      "options_hi": ["90°", "60°", "120°", "180°"],
      "answer_en": "90°",
      "answer_hi": "90°",
      "attempted": false
    }
  ,
  
  
    {
      "num": 21,
      "question_en": "What is the perimeter of a rectangle with length 7 cm and width 5 cm?",
      "question_hi": "7 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत का परिमाप क्या है?",
      "options_en": ["24 cm", "35 cm", "12 cm", "14 cm"],
      "options_hi": ["24 सेमी", "35 सेमी", "12 सेमी", "14 सेमी"],
      "answer_en": "24 cm",
      "answer_hi": "24 सेमी",
      "attempted": false
    },
    {
      "num": 22,
      "question_en": "What is the area of a circle with radius 7 cm?",
      "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["49π cm²", "14π cm²", "7π cm²", "21π cm²"],
      "options_hi": ["49π सेमी²", "14π सेमी²", "7π सेमी²", "21π सेमी²"],
      "answer_en": "49π cm²",
      "answer_hi": "49π सेमी²",
      "attempted": false
    },
    {
      "num": 23,
      "question_en": "The value of (x + 2)² is",
      "question_hi": "(x + 2)² का मान क्या है?",
      "options_en": ["x² + 4x + 4", "x² + 2x + 2", "x² + 4x + 2", "x² + 2x + 4"],
      "options_hi": ["x² + 4x + 4", "x² + 2x + 2", "x² + 4x + 2", "x² + 2x + 4"],
      "answer_en": "x² + 4x + 4",
      "answer_hi": "x² + 4x + 4",
      "attempted": false
    },
    {
      "num": 24,
      "question_en": "What is the value of sin 30°?",
      "question_hi": "sin 30° का मान क्या है?",
      "options_en": ["1/2", "√3/2", "√2/2", "1"],
      "options_hi": ["1/2", "√3/2", "√2/2", "1"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 25,
      "question_en": "What is the HCF of 45 and 60?",
      "question_hi": "45 और 60 का HCF क्या है?",
      "options_en": ["15", "10", "5", "20"],
      "options_hi": ["15", "10", "5", "20"],
      "answer_en": "15",
      "answer_hi": "15",
      "attempted": false
    },
    {
      "num": 26,
      "question_en": "What is the LCM of 6 and 8?",
      "question_hi": "6 और 8 का LCM क्या है?",
      "options_en": ["24", "48", "12", "14"],
      "options_hi": ["24", "48", "12", "14"],
      "answer_en": "24",
      "answer_hi": "24",
      "attempted": false
    },
    {
      "num": 27,
      "question_en": "The perimeter of an equilateral triangle with side length 8 cm is",
      "question_hi": "8 सेमी लंबाई वाले समद्विबाहु त्रिकोण का परिमाप क्या होगा?",
      "options_en": ["24 cm", "16 cm", "32 cm", "40 cm"],
      "options_hi": ["24 सेमी", "16 सेमी", "32 सेमी", "40 सेमी"],
      "answer_en": "24 cm",
      "answer_hi": "24 सेमी",
      "attempted": false
    },
    {
      "num": 28,
      "question_en": "What is the area of a triangle with base 6 cm and height 9 cm?",
      "question_hi": "6 सेमी आधार और 9 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या होगा?",
      "options_en": ["27 cm²", "30 cm²", "54 cm²", "45 cm²"],
      "options_hi": ["27 सेमी²", "30 सेमी²", "54 सेमी²", "45 सेमी²"],
      "answer_en": "27 cm²",
      "answer_hi": "27 सेमी²",
      "attempted": false
    },
    {
      "num": 29,
      "question_en": "Which of the following is an example of a rational number?",
      "question_hi": "निम्नलिखित में से कौन सा यथार्थ संख्या का उदाहरण है?",
      "options_en": ["π", "√2", "1/2", "e"],
      "options_hi": ["π", "√2", "1/2", "e"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 30,
      "question_en": "What is the perimeter of a square with side 5 cm?",
      "question_hi": "5 सेमी लंबाई वाले वर्ग का परिमाप क्या है?",
      "options_en": ["20 cm", "15 cm", "10 cm", "25 cm"],
      "options_hi": ["20 सेमी", "15 सेमी", "10 सेमी", "25 सेमी"],
      "answer_en": "20 cm",
      "answer_hi": "20 सेमी",
      "attempted": false
    },
    {
      "num": 31,
      "question_en": "The value of cos 45° is",
      "question_hi": "cos 45° का मान क्या है?",
      "options_en": ["√2/2", "1/2", "√3/2", "1"],
      "options_hi": ["√2/2", "1/2", "√3/2", "1"],
      "answer_en": "√2/2",
      "answer_hi": "√2/2",
      "attempted": false
    },
    {
      "num": 32,
      "question_en": "The volume of a cuboid with length 5 cm, width 4 cm, and height 3 cm is",
      "question_hi": "5 सेमी लंबाई, 4 सेमी चौड़ाई और 3 सेमी ऊँचाई वाले घनाभ का आयतन क्या होगा?",
      "options_en": ["60 cm³", "50 cm³", "45 cm³", "70 cm³"],
      "options_hi": ["60 सेमी³", "50 सेमी³", "45 सेमी³", "70 सेमी³"],
      "answer_en": "60 cm³",
      "answer_hi": "60 सेमी³",
      "attempted": false
    },
    {
      "num": 33,
      "question_en": "What is the formula for the area of a parallelogram?",
      "question_hi": "समलम्ब के क्षेत्रफल का सूत्र क्या है?",
      "options_en": ["base × height", "2(base + height)", "base + height", "side²"],
      "options_hi": ["आधार × ऊँचाई", "2(आधार + ऊँचाई)", "आधार + ऊँचाई", "पार्श्व²"],
      "answer_en": "base × height",
      "answer_hi": "आधार × ऊँचाई",
      "attempted": false
    },
    {
      "num": 34,
      "question_en": "What is the cube of 3?",
      "question_hi": "3 का घन क्या है?",
      "options_en": ["27", "9", "18", "81"],
      "options_hi": ["27", "9", "18", "81"],
      "answer_en": "27",
      "answer_hi": "27",
      "attempted": false
    },
    {
      "num": 35,
      "question_en": "Which of the following is a pair of supplementary angles?",
      "question_hi": "निम्नलिखित में से कौन सा एक युग्म परिपूरक कोणों का है?",
      "options_en": ["60° and 120°", "30° and 60°", "45° and 75°", "90° and 60°"],
      "options_hi": ["60° और 120°", "30° और 60°", "45° और 75°", "90° और 60°"],
      "answer_en": "60° and 120°",
      "answer_hi": "60° और 120°",
      "attempted": false
    },
    {
      "num": 36,
      "question_en": "The area of a square with side length 10 cm is",
      "question_hi": "10 सेमी लंबाई वाले वर्ग का क्षेत्रफल क्या है?",
      "options_en": ["100 cm²", "50 cm²", "120 cm²", "80 cm²"],
      "options_hi": ["100 सेमी²", "50 सेमी²", "120 सेमी²", "80 सेमी²"],
      "answer_en": "100 cm²",
      "answer_hi": "100 सेमी²",
      "attempted": false
    },
    {
      "num": 37,
      "question_en": "What is the area of a rhombus with diagonals 6 cm and 8 cm?",
      "question_hi": "6 सेमी और 8 सेमी विकर्ण वाले समलम्ब का क्षेत्रफल क्या होगा?",
      "options_en": ["24 cm²", "48 cm²", "36 cm²", "12 cm²"],
      "options_hi": ["24 सेमी²", "48 सेमी²", "36 सेमी²", "12 सेमी²"],
      "answer_en": "24 cm²",
      "answer_hi": "24 सेमी²",
      "attempted": false
    },
    {
      "num": 38,
      "question_en": "What is the value of 3 × (x + 2)?",
      "question_hi": "3 × (x + 2) का मान क्या है?",
      "options_en": ["3x + 6", "x + 6", "3x + 2", "x + 4"],
      "options_hi": ["3x + 6", "x + 6", "3x + 2", "x + 4"],
      "answer_en": "3x + 6",
      "answer_hi": "3x + 6",
      "attempted": false
    },
    {
      "num": 39,
      "question_en": "What is the value of 5 × (3 + 2)?",
      "question_hi": "5 × (3 + 2) का मान क्या है?",
      "options_en": ["25", "15", "35", "20"],
      "options_hi": ["25", "15", "35", "20"],
      "answer_en": "25",
      "answer_hi": "25",
      "attempted": false
    },
    {
      "num": 40,
      "question_en": "The value of 3x + 5 = 14 is",
      "question_hi": "3x + 5 = 14 का मान क्या होगा?",
      "options_en": ["3", "5", "6", "7"],
      "options_hi": ["3", "5", "6", "7"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false
    }
  ,
  
  
    {
      "num": 41,
      "question_en": "The sum of the interior angles of a triangle is",
      "question_hi": "त्रिकोण के आंतरिक कोणों का योग क्या है?",
      "options_en": ["180°", "360°", "90°", "270°"],
      "options_hi": ["180°", "360°", "90°", "270°"],
      "answer_en": "180°",
      "answer_hi": "180°",
      "attempted": false
    },
    {
      "num": 42,
      "question_en": "What is the value of tan 45°?",
      "question_hi": "tan 45° का मान क्या है?",
      "options_en": ["1", "0", "√3", "√2"],
      "options_hi": ["1", "0", "√3", "√2"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false
    },
    {
      "num": 43,
      "question_en": "What is the perimeter of a circle with radius 7 cm?",
      "question_hi": "7 सेमी त्रिज्या वाले वृत्त का परिधि क्या होगा?",
      "options_en": ["14π cm", "21π cm", "7π cm", "22π cm"],
      "options_hi": ["14π सेमी", "21π सेमी", "7π सेमी", "22π सेमी"],
      "answer_en": "14π cm",
      "answer_hi": "14π सेमी",
      "attempted": false
    },
    {
      "num": 44,
      "question_en": "What is the area of a parallelogram with base 5 cm and height 10 cm?",
      "question_hi": "5 सेमी आधार और 10 सेमी ऊँचाई वाले समलम्ब का क्षेत्रफल क्या होगा?",
      "options_en": ["50 cm²", "30 cm²", "60 cm²", "40 cm²"],
      "options_hi": ["50 सेमी²", "30 सेमी²", "60 सेमी²", "40 सेमी²"],
      "answer_en": "50 cm²",
      "answer_hi": "50 सेमी²",
      "attempted": false
    },
    {
      "num": 45,
      "question_en": "What is the volume of a sphere with radius 3 cm?",
      "question_hi": "3 सेमी त्रिज्या वाले गोले का आयतन क्या होगा?",
      "options_en": ["36π cm³", "12π cm³", "27π cm³", "9π cm³"],
      "options_hi": ["36π सेमी³", "12π सेमी³", "27π सेमी³", "9π सेमी³"],
      "answer_en": "36π cm³",
      "answer_hi": "36π सेमी³",
      "attempted": false
    },
    {
      "num": 46,
      "question_en": "The value of 8 ÷ 4 × 2 is",
      "question_hi": "8 ÷ 4 × 2 का मान क्या है?",
      "options_en": ["4", "6", "2", "8"],
      "options_hi": ["4", "6", "2", "8"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false
    },
    {
      "num": 47,
      "question_en": "What is the ratio of 20 to 50?",
      "question_hi": "20 का 50 से अनुपात क्या है?",
      "options_en": ["2:5", "5:2", "4:10", "10:4"],
      "options_hi": ["2:5", "5:2", "4:10", "10:4"],
      "answer_en": "2:5",
      "answer_hi": "2:5",
      "attempted": false
    },
    {
      "num": 48,
      "question_en": "What is the square root of 64?",
      "question_hi": "64 का वर्गमूल क्या है?",
      "options_en": ["6", "8", "7", "10"],
      "options_hi": ["6", "8", "7", "10"],
      "answer_en": "8",
      "answer_hi": "8",
      "attempted": false
    },
    {
      "num": 49,
      "question_en": "Which of the following is a factor of 60?",
      "question_hi": "निम्नलिखित में से कौन सा 60 का गुणक है?",
      "options_en": ["12", "14", "18", "22"],
      "options_hi": ["12", "14", "18", "22"],
      "answer_en": "12",
      "answer_hi": "12",
      "attempted": false
    },
    {
      "num": 50,
      "question_en": "What is the cube root of 27?",
      "question_hi": "27 का घनमूल क्या है?",
      "options_en": ["3", "9", "6", "2"],
      "options_hi": ["3", "9", "6", "2"],
      "answer_en": "3",
      "answer_hi": "3",
      "attempted": false
    },
    {
      "num": 51,
      "question_en": "What is the area of a circle with radius 14 cm?",
      "question_hi": "14 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["196π cm²", "28π cm²", "49π cm²", "14π cm²"],
      "options_hi": ["196π सेमी²", "28π सेमी²", "49π सेमी²", "14π सेमी²"],
      "answer_en": "196π cm²",
      "answer_hi": "196π सेमी²",
      "attempted": false
    },
    {
      "num": 52,
      "question_en": "The perimeter of a regular hexagon with side 10 cm is",
      "question_hi": "10 सेमी लंबाई वाले नियमित षट्भुज का परिमाप क्या होगा?",
      "options_en": ["60 cm", "100 cm", "120 cm", "80 cm"],
      "options_hi": ["60 सेमी", "100 सेमी", "120 सेमी", "80 सेमी"],
      "answer_en": "60 cm",
      "answer_hi": "60 सेमी",
      "attempted": false
    },
    {
      "num": 53,
      "question_en": "What is the value of (x + 3)(x - 3)?",
      "question_hi": "(x + 3)(x - 3) का मान क्या होगा?",
      "options_en": ["x² - 9", "x² + 9", "x² - 6", "x² + 6"],
      "options_hi": ["x² - 9", "x² + 9", "x² - 6", "x² + 6"],
      "answer_en": "x² - 9",
      "answer_hi": "x² - 9",
      "attempted": false
    },
    {
      "num": 54,
      "question_en": "What is the volume of a cylinder with radius 3 cm and height 4 cm?",
      "question_hi": "3 सेमी त्रिज्या और 4 सेमी ऊँचाई वाले बेलन का आयतन क्या होगा?",
      "options_en": ["36π cm³", "12π cm³", "24π cm³", "18π cm³"],
      "options_hi": ["36π सेमी³", "12π सेमी³", "24π सेमी³", "18π सेमी³"],
      "answer_en": "36π cm³",
      "answer_hi": "36π सेमी³",
      "attempted": false
    },
    {
      "num": 55,
      "question_en": "The ratio of the areas of two squares is 25:36. The ratio of their sides is",
      "question_hi": "दो वर्गों के क्षेत्रफल का अनुपात 25:36 है। उनके पक्षों का अनुपात क्या होगा?",
      "options_en": ["5:6", "6:5", "25:36", "36:25"],
      "options_hi": ["5:6", "6:5", "25:36", "36:25"],
      "answer_en": "5:6",
      "answer_hi": "5:6",
      "attempted": false
    },
    {
      "num": 56,
      "question_en": "The surface area of a sphere with radius 7 cm is",
      "question_hi": "7 सेमी त्रिज्या वाले गोले का पृष्ठ क्षेत्रफल क्या होगा?",
      "options_en": ["196π cm²", "49π cm²", "28π cm²", "14π cm²"],
      "options_hi": ["196π सेमी²", "49π सेमी²", "28π सेमी²", "14π सेमी²"],
      "answer_en": "196π cm²",
      "answer_hi": "196π सेमी²",
      "attempted": false
    },
    {
      "num": 57,
      "question_en": "The sum of the exterior angles of any polygon is always",
      "question_hi": "किसी भी बहुपद के बाहरी कोणों का योग हमेशा क्या होता है?",
      "options_en": ["360°", "180°", "90°", "270°"],
      "options_hi": ["360°", "180°", "90°", "270°"],
      "answer_en": "360°",
      "answer_hi": "360°",
      "attempted": false
    },
    {
      "num": 58,
      "question_en": "What is the area of a sector of a circle with angle 60° and radius 6 cm?",
      "question_hi": "60° कोण और 6 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["18π cm²", "12π cm²", "9π cm²", "6π cm²"],
      "options_hi": ["18π सेमी²", "12π सेमी²", "9π सेमी²", "6π सेमी²"],
      "answer_en": "18π cm²",
      "answer_hi": "18π सेमी²",
      "attempted": false
    },
    {
      "num": 59,
      "question_en": "The perimeter of a semicircle with radius 5 cm is",
      "question_hi": "5 सेमी त्रिज्या वाले अर्धवृत्त का परिमाप क्या होगा?",
      "options_en": ["15 cm", "20 cm", "25 cm", "10 cm"],
      "options_hi": ["15 सेमी", "20 सेमी", "25 सेमी", "10 सेमी"],
      "answer_en": "15 cm",
      "answer_hi": "15 सेमी",
      "attempted": false
    },
    {
      "num": 60,
      "question_en": "What is the value of sin 60°?",
      "question_hi": "sin 60° का मान क्या है?",
      "options_en": ["√3/2", "1/2", "√2/2", "1"],
      "options_hi": ["√3/2", "1/2", "√2/2", "1"],
      "answer_en": "√3/2",
      "answer_hi": "√3/2",
      "attempted": false
    }
  ,
  
    {
      "num": 61,
      "question_en": "What is the area of a rectangle with length 8 cm and breadth 5 cm?",
      "question_hi": "8 सेमी लंबाई और 5 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या होगा?",
      "options_en": ["40 cm²", "35 cm²", "45 cm²", "50 cm²"],
      "options_hi": ["40 सेमी²", "35 सेमी²", "45 सेमी²", "50 सेमी²"],
      "answer_en": "40 cm²",
      "answer_hi": "40 सेमी²",
      "attempted": false
    },
    {
      "num": 62,
      "question_en": "The value of 2x + 3 = 15 is",
      "question_hi": "2x + 3 = 15 का मान क्या होगा?",
      "options_en": ["5", "6", "4", "7"],
      "options_hi": ["5", "6", "4", "7"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false
    },
    {
      "num": 63,
      "question_en": "What is the area of a right-angled triangle with base 6 cm and height 8 cm?",
      "question_hi": "6 सेमी आधार और 8 सेमी ऊँचाई वाले समकोण त्रिकोण का क्षेत्रफल क्या होगा?",
      "options_en": ["24 cm²", "28 cm²", "48 cm²", "36 cm²"],
      "options_hi": ["24 सेमी²", "28 सेमी²", "48 सेमी²", "36 सेमी²"],
      "answer_en": "24 cm²",
      "answer_hi": "24 सेमी²",
      "attempted": false
    },
    {
      "num": 64,
      "question_en": "What is the value of 3x - 7 = 11?",
      "question_hi": "3x - 7 = 11 का मान क्या होगा?",
      "options_en": ["6", "5", "4", "7"],
      "options_hi": ["6", "5", "4", "7"],
      "answer_en": "6",
      "answer_hi": "6",
      "attempted": false
    },
    {
      "num": 65,
      "question_en": "The perimeter of an equilateral triangle with side 6 cm is",
      "question_hi": "6 सेमी लंबाई वाले समबाहु त्रिकोण का परिमाप क्या होगा?",
      "options_en": ["18 cm", "12 cm", "15 cm", "24 cm"],
      "options_hi": ["18 सेमी", "12 सेमी", "15 सेमी", "24 सेमी"],
      "answer_en": "18 cm",
      "answer_hi": "18 सेमी",
      "attempted": false
    },
    {
      "num": 66,
      "question_en": "What is the surface area of a cube with side 5 cm?",
      "question_hi": "5 सेमी लंबाई वाले घन का पृष्ठ क्षेत्रफल क्या होगा?",
      "options_en": ["150 cm²", "125 cm²", "100 cm²", "175 cm²"],
      "options_hi": ["150 सेमी²", "125 सेमी²", "100 सेमी²", "175 सेमी²"],
      "answer_en": "150 cm²",
      "answer_hi": "150 सेमी²",
      "attempted": false
    },
    {
      "num": 67,
      "question_en": "What is the area of a trapezium with parallel sides 6 cm and 10 cm, and height 5 cm?",
      "question_hi": "6 सेमी और 10 सेमी समानांतर पक्ष और 5 सेमी ऊँचाई वाले समलंब का क्षेत्रफल क्या होगा?",
      "options_en": ["40 cm²", "35 cm²", "50 cm²", "45 cm²"],
      "options_hi": ["40 सेमी²", "35 सेमी²", "50 सेमी²", "45 सेमी²"],
      "answer_en": "40 cm²",
      "answer_hi": "40 सेमी²",
      "attempted": false
    },
    {
      "num": 68,
      "question_en": "What is the value of sin 30°?",
      "question_hi": "sin 30° का मान क्या है?",
      "options_en": ["1/2", "√3/2", "1", "0"],
      "options_hi": ["1/2", "√3/2", "1", "0"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 69,
      "question_en": "The value of cos 60° is",
      "question_hi": "cos 60° का मान क्या है?",
      "options_en": ["1/2", "√3/2", "1", "0"],
      "options_hi": ["1/2", "√3/2", "1", "0"],
      "answer_en": "1/2",
      "answer_hi": "1/2",
      "attempted": false
    },
    {
      "num": 70,
      "question_en": "What is the area of a rhombus with diagonals 8 cm and 6 cm?",
      "question_hi": "8 सेमी और 6 सेमी विकर्णों वाले समचतुर्भुज का क्षेत्रफल क्या होगा?",
      "options_en": ["24 cm²", "28 cm²", "30 cm²", "36 cm²"],
      "options_hi": ["24 सेमी²", "28 सेमी²", "30 सेमी²", "36 सेमी²"],
      "answer_en": "24 cm²",
      "answer_hi": "24 सेमी²",
      "attempted": false
    },
    {
      "num": 71,
      "question_en": "What is the value of 7x + 5 = 40?",
      "question_hi": "7x + 5 = 40 का मान क्या होगा?",
      "options_en": ["5", "6", "7", "3"],
      "options_hi": ["5", "6", "7", "3"],
      "answer_en": "5",
      "answer_hi": "5",
      "attempted": false
    },
    {
      "num": 72,
      "question_en": "The area of a square with side 9 cm is",
      "question_hi": "9 सेमी लंबाई वाले वर्ग का क्षेत्रफल क्या होगा?",
      "options_en": ["81 cm²", "72 cm²", "90 cm²", "75 cm²"],
      "options_hi": ["81 सेमी²", "72 सेमी²", "90 सेमी²", "75 सेमी²"],
      "answer_en": "81 cm²",
      "answer_hi": "81 सेमी²",
      "attempted": false
    },
    {
      "num": 73,
      "question_en": "What is the perimeter of a rectangle with length 10 cm and breadth 4 cm?",
      "question_hi": "10 सेमी लंबाई और 4 सेमी चौड़ाई वाले आयत का परिमाप क्या होगा?",
      "options_en": ["28 cm", "30 cm", "24 cm", "22 cm"],
      "options_hi": ["28 सेमी", "30 सेमी", "24 सेमी", "22 सेमी"],
      "answer_en": "28 cm",
      "answer_hi": "28 सेमी",
      "attempted": false
    },
    {
      "num": 74,
      "question_en": "What is the area of a circle with radius 7 cm?",
      "question_hi": "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["49π cm²", "42π cm²", "36π cm²", "56π cm²"],
      "options_hi": ["49π सेमी²", "42π सेमी²", "36π सेमी²", "56π सेमी²"],
      "answer_en": "49π cm²",
      "answer_hi": "49π सेमी²",
      "attempted": false
    },
    {
      "num": 75,
      "question_en": "The area of a triangle with base 12 cm and height 5 cm is",
      "question_hi": "12 सेमी आधार और 5 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या होगा?",
      "options_en": ["30 cm²", "32 cm²", "60 cm²", "40 cm²"],
      "options_hi": ["30 सेमी²", "32 सेमी²", "60 सेमी²", "40 सेमी²"],
      "answer_en": "30 cm²",
      "answer_hi": "30 सेमी²",
      "attempted": false
    },
    {
      "num": 76,
      "question_en": "What is the value of x in the equation 4x - 3 = 13?",
      "question_hi": "समीकरण 4x - 3 = 13 में x का मान क्या होगा?",
      "options_en": ["4", "5", "3", "6"],
      "options_hi": ["4", "5", "3", "6"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false
    },
    {
      "num": 77,
      "question_en": "What is the perimeter of a square with side 7 cm?",
      "question_hi": "7 सेमी लंबाई वाले वर्ग का परिमाप क्या होगा?",
      "options_en": ["28 cm", "21 cm", "14 cm", "35 cm"],
      "options_hi": ["28 सेमी", "21 सेमी", "14 सेमी", "35 सेमी"],
      "answer_en": "28 cm",
      "answer_hi": "28 सेमी",
      "attempted": false
    },
    {
      "num": 78,
      "question_en": "What is the volume of a cube with side 3 cm?",
      "question_hi": "3 सेमी लंबाई वाले घन का आयतन क्या होगा?",
      "options_en": ["27 cm³", "18 cm³", "9 cm³", "12 cm³"],
      "options_hi": ["27 सेमी³", "18 सेमी³", "9 सेमी³", "12 सेमी³"],
      "answer_en": "27 cm³",
      "answer_hi": "27 सेमी³",
      "attempted": false
    },
    {
      "num": 79,
      "question_en": "What is the value of 5 + 3 × 2?",
      "question_hi": "5 + 3 × 2 का मान क्या होगा?",
      "options_en": ["11", "16", "10", "12"],
      "options_hi": ["11", "16", "10", "12"],
      "answer_en": "11",
      "answer_hi": "11",
      "attempted": false
    },
    {
      "num": 80,
      "question_en": "What is the area of a sector of a circle with angle 90° and radius 4 cm?",
      "question_hi": "90° कोण और 4 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["8π cm²", "6π cm²", "4π cm²", "5π cm²"],
      "options_hi": ["8π सेमी²", "6π सेमी²", "4π सेमी²", "5π सेमी²"],
      "answer_en": "8π cm²",
      "answer_hi": "8π सेमी²",
      "attempted": false
    }
  ,
  
    {
      "num": 81,
      "question_en": "What is the solution of the equation 2x + 5 = 13?",
      "question_hi": "समीकरण 2x + 5 = 13 का हल क्या होगा?",
      "options_en": ["4", "6", "5", "8"],
      "options_hi": ["4", "6", "5", "8"],
      "answer_en": "4",
      "answer_hi": "4",
      "attempted": false
    },
    {
      "num": 82,
      "question_en": "What is the area of a rectangle with length 12 cm and breadth 8 cm?",
      "question_hi": "12 सेमी लंबाई और 8 सेमी चौड़ाई वाले आयत का क्षेत्रफल क्या होगा?",
      "options_en": ["96 cm²", "90 cm²", "100 cm²", "110 cm²"],
      "options_hi": ["96 सेमी²", "90 सेमी²", "100 सेमी²", "110 सेमी²"],
      "answer_en": "96 cm²",
      "answer_hi": "96 सेमी²",
      "attempted": false
    },
    {
      "num": 83,
      "question_en": "The perimeter of a square with side 10 cm is",
      "question_hi": "10 सेमी लंबाई वाले वर्ग का परिमाप क्या होगा?",
      "options_en": ["40 cm", "30 cm", "20 cm", "25 cm"],
      "options_hi": ["40 सेमी", "30 सेमी", "20 सेमी", "25 सेमी"],
      "answer_en": "40 cm",
      "answer_hi": "40 सेमी",
      "attempted": false
    },
    {
      "num": 84,
      "question_en": "The value of tan 45° is",
      "question_hi": "tan 45° का मान क्या है?",
      "options_en": ["1", "0", "√2", "2"],
      "options_hi": ["1", "0", "√2", "2"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false
    },
    {
      "num": 85,
      "question_en": "The area of a triangle with base 6 cm and height 4 cm is",
      "question_hi": "6 सेमी आधार और 4 सेमी ऊँचाई वाले त्रिकोण का क्षेत्रफल क्या होगा?",
      "options_en": ["12 cm²", "10 cm²", "16 cm²", "24 cm²"],
      "options_hi": ["12 सेमी²", "10 सेमी²", "16 सेमी²", "24 सेमी²"],
      "answer_en": "12 cm²",
      "answer_hi": "12 सेमी²",
      "attempted": false
    },
    {
      "num": 86,
      "question_en": "What is the area of a circle with radius 3 cm?",
      "question_hi": "3 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["9π cm²", "6π cm²", "12π cm²", "3π cm²"],
      "options_hi": ["9π सेमी²", "6π सेमी²", "12π सेमी²", "3π सेमी²"],
      "answer_en": "9π cm²",
      "answer_hi": "9π सेमी²",
      "attempted": false
    },
    {
      "num": 87,
      "question_en": "What is the value of sin 60°?",
      "question_hi": "sin 60° का मान क्या है?",
      "options_en": ["√3/2", "1/2", "1", "0"],
      "options_hi": ["√3/2", "1/2", "1", "0"],
      "answer_en": "√3/2",
      "answer_hi": "√3/2",
      "attempted": false
    },
    {
      "num": 88,
      "question_en": "The sum of the angles of a triangle is always",
      "question_hi": "त्रिकोण के कोणों का योग हमेशा क्या होता है?",
      "options_en": ["180°", "90°", "270°", "360°"],
      "options_hi": ["180°", "90°", "270°", "360°"],
      "answer_en": "180°",
      "answer_hi": "180°",
      "attempted": false
    },
    {
      "num": 89,
      "question_en": "What is the surface area of a cube with side 6 cm?",
      "question_hi": "6 सेमी लंबाई वाले घन का पृष्ठ क्षेत्रफल क्या होगा?",
      "options_en": ["216 cm²", "216 cm³", "36 cm²", "72 cm²"],
      "options_hi": ["216 सेमी²", "216 सेमी³", "36 सेमी²", "72 सेमी²"],
      "answer_en": "216 cm²",
      "answer_hi": "216 सेमी²",
      "attempted": false
    },
    {
      "num": 90,
      "question_en": "The volume of a sphere with radius 4 cm is",
      "question_hi": "4 सेमी त्रिज्या वाले गोले का आयतन क्या होगा?",
      "options_en": ["268π cm³", "256π cm³", "320π cm³", "64π cm³"],
      "options_hi": ["268π सेमी³", "256π सेमी³", "320π सेमी³", "64π सेमी³"],
      "answer_en": "268π cm³",
      "answer_hi": "268π सेमी³",
      "attempted": false
    },
    {
      "num": 91,
      "question_en": "The area of a rhombus with diagonals 10 cm and 12 cm is",
      "question_hi": "10 सेमी और 12 सेमी विकर्णों वाले समचतुर्भुज का क्षेत्रफल क्या होगा?",
      "options_en": ["60 cm²", "55 cm²", "70 cm²", "50 cm²"],
      "options_hi": ["60 सेमी²", "55 सेमी²", "70 सेमी²", "50 सेमी²"],
      "answer_en": "60 cm²",
      "answer_hi": "60 सेमी²",
      "attempted": false
    },
    {
      "num": 92,
      "question_en": "The perimeter of a rectangle with length 15 cm and breadth 8 cm is",
      "question_hi": "15 सेमी लंबाई और 8 सेमी चौड़ाई वाले आयत का परिमाप क्या होगा?",
      "options_en": ["46 cm", "40 cm", "50 cm", "60 cm"],
      "options_hi": ["46 सेमी", "40 सेमी", "50 सेमी", "60 सेमी"],
      "answer_en": "46 cm",
      "answer_hi": "46 सेमी",
      "attempted": false
    },
    {
      "num": 93,
      "question_en": "What is the value of 2 sin 30°?",
      "question_hi": "2 sin 30° का मान क्या होगा?",
      "options_en": ["1", "2", "0", "√2"],
      "options_hi": ["1", "2", "0", "√2"],
      "answer_en": "1",
      "answer_hi": "1",
      "attempted": false
    },
    {
      "num": 94,
      "question_en": "The area of a sector of a circle with radius 7 cm and angle 60° is",
      "question_hi": "7 सेमी त्रिज्या और 60° कोण वाले वृत्त का क्षेत्रफल क्या होगा?",
      "options_en": ["7π cm²", "6π cm²", "4π cm²", "2π cm²"],
      "options_hi": ["7π सेमी²", "6π सेमी²", "4π सेमी²", "2π सेमी²"],
      "answer_en": "7π cm²",
      "answer_hi": "7π सेमी²",
      "attempted": false
    },
    {
      "num": 95,
      "question_en": "What is the volume of a cone with radius 4 cm and height 6 cm?",
      "question_hi": "4 सेमी त्रिज्या और 6 सेमी ऊँचाई वाले शंकु का आयतन क्या होगा?",
      "options_en": ["16π cm³", "24π cm³", "48π cm³", "32π cm³"],
      "options_hi": ["16π सेमी³", "24π सेमी³", "48π सेमी³", "32π सेमी³"],
      "answer_en": "16π cm³",
      "answer_hi": "16π सेमी³",
      "attempted": false
    },
    {
      "num": 96,
      "question_en": "The area of a square with side 5 cm is",
      "question_hi": "5 सेमी लंबाई वाले वर्ग का क्षेत्रफल क्या होगा?",
      "options_en": ["25 cm²", "20 cm²", "30 cm²", "15 cm²"],
      "options_hi": ["25 सेमी²", "20 सेमी²", "30 सेमी²", "15 सेमी²"],
      "answer_en": "25 cm²",
      "answer_hi": "25 सेमी²",
      "attempted": false
    },
    {
      "num": 97,
      "question_en": "What is the value of 5² + 3²?",
      "question_hi": "5² + 3² का मान क्या होगा?",
      "options_en": ["34", "25", "28", "29"],
      "options_hi": ["34", "25", "28", "29"],
      "answer_en": "34",
      "answer_hi": "34",
      "attempted": false
    },
    {
      "num": 98,
      "question_en": "The sum of the first 10 terms of an arithmetic progression is 220. What is the 10th term?",
      "question_hi": "एक अंकगणितीय श्रेणी के पहले 10 पदों का योग 220 है। 10वां पद क्या होगा?",
      "options_en": ["22", "20", "18", "16"],
      "options_hi": ["22", "20", "18", "16"],
      "answer_en": "22",
      "answer_hi": "22",
      "attempted": false
    },
    {
      "num": 99,
      "question_en": "The radius of a circle is 10 cm. What is the circumference of the circle?",
      "question_hi": "वृत्त की त्रिज्या 10 सेमी है। वृत्त का परिधि क्या होगा?",
      "options_en": ["20π cm", "10π cm", "15π cm", "30π cm"],
      "options_hi": ["20π सेमी", "10π सेमी", "15π सेमी", "30π सेमी"],
      "answer_en": "20π cm",
      "answer_hi": "20π सेमी",
      "attempted": false
    },
    {
      "num": 100,
      "question_en": "The angle between the hour hand and the minute hand at 6:00 is",
      "question_hi": "6:00 बजे घंटे की सुई और मिनट की सुई के बीच कोण क्या होगा?",
      "options_en": ["180°", "90°", "60°", "120°"],
      "options_hi": ["180°", "90°", "60°", "120°"],
      "answer_en": "180°",
      "answer_hi": "180°",
      "attempted": false
    }
  ,
  
  
                     
              
              


];

let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
let timerInterval;

function loadQuestion(index) {
        const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
        const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

        document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
        document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

        const optionsElement = document.getElementById("options");
        optionsElement.innerHTML = "";

        optionsArray.forEach(option => {
                optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
        });

        updateNavigation();
}

function markAttempted(index, selectedAnswer) {
        questions[index].attempted = true;
        questions[index].selected = selectedAnswer;
        updateNavigation();
}

function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion(currentQuestion);
        }
}

function prevQuestion() {
        if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion(currentQuestion);
        }
}

function changeLanguage() {
        language = document.getElementById("languageSelect").value;
        loadQuestion(currentQuestion);
}

function submitQuiz() {
        let confirmation = confirm("Are you sure you want to submit the test?");
        if (!confirmation) return;

        clearInterval(timerInterval);

        let attempted = 0, notAttempted = 0, score = 0;
        const results = [];

        questions.forEach(q => {
                if (q.attempted) {
                        attempted++;
                        if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                                score++;
                        }
                } else {
                        notAttempted++;
                }
                results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
        });

        localStorage.setItem("attempted", attempted);
        localStorage.setItem("notAttempted", notAttempted);
        localStorage.setItem("score", score);
        localStorage.setItem("results", JSON.stringify(results));

        let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
        if (viewResult) {
                window.location.href = "/Deshbord/category/test/submit-test.html";
        }
}

function startTimer() {
        const timerElement = document.getElementById("timer");
        timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

        timerInterval = setInterval(() => {
                if (timeLeft <= 0) {
                        clearInterval(timerInterval);
                        alert("Time's up! Submitting the quiz automatically.");
                        submitQuiz();
                } else {
                        const hours = Math.floor(timeLeft / 3600);
                        const minutes = Math.floor((timeLeft % 3600) / 60);
                        const seconds = timeLeft % 60;

                        // Format as HH:MM:SS with leading zeros
                        timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                        timeLeft--;
                }
        }, 1000);
}
function updateNavigation() {
        const navElement = document.getElementById("circleContainer");
        navElement.innerHTML = "";

        questions.forEach((q, index) => {
                let color = "gray"; // Default not visited
                if (q.attempted) {
                        color = "green"; // Answered
                }
                if (q.selected === "") {
                        color = "gray"; // Not answered
                }
                if (index === currentQuestion) {
                        color = "blue"; // Current question
                }
                navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
        });
}

window.onload = function () {
        loadQuestion(currentQuestion);
        startTimer();
};
