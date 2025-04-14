
const questions = [

  
    {
      "num": 1,
      "question_en": "Who is the author of 'ਸੋਹਣੀ ਮਾਹੀਵਾਲ'?",
      "question_hi": "'ਸੋਹਣੀ ਮਾਹੀਵਾਲ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
      "options_en": ["Warish Shah", "Bulleh Shah", "Guru Nanak Dev", "Shah Hussain"],
      "options_hi": ["वारिश शाह", "बुल्ले शाह", "गुरु नानक देव", "शाह हुसैन"],
      "answer_en": "Warish Shah",
      "answer_hi": "वारिश शाह"
    },
    {
      "num": 2,
      "question_en": "What is the theme of the poem 'ਚਿੱਤ ਮੇਰੇ ਵਿਰਦ'?",
      "question_hi": "'ਚਿੱਤ ਮੇਰੇ ਵਿਰਦ' ਕਵਿਤਾ ਦਾ ਵਿਸ਼ਾ ਕੀ ਹੈ?",
      "options_en": ["Self-awareness", "Love", "Social issues", "Nature"],
      "options_hi": ["आत्म-जागरूकता", "प्रेम", "सामाजिक समस्याएँ", "प्रकृति"],
      "answer_en": "Self-awareness",
      "answer_hi": "आत्म-जागरूकता"
    },
    {
      "num": 3,
      "question_en": "Who wrote 'ਹਿੰਦੀ ਦੀਆਂ ਕਵਿਤਾਵਾਂ'?",
      "question_hi": "'ਹਿੰਦੀ ਦੀਆਂ ਕਵਿਤਾਵਾਂ' ਕਿਹਨੇ ਲਿਖੀਆਂ ਹਨ?",
      "options_en": ["Keki N. Daruwalla", "Harvinder Singh", "Amrita Pritam", "Sohan Singh Seetal"],
      "options_hi": ["केकी एन. दरूवाला", "हरविंदर सिंह", "अमृता प्रीतम", "सोहन सिंह सीतल"],
      "answer_en": "Amrita Pritam",
      "answer_hi": "अमृता प्रीतम"
    },
    {
      "num": 4,
      "question_en": "What does 'ਗੁਰਬਾਣੀ' mean?",
      "question_hi": "'ਗੁਰਬਾਣੀ' ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      "options_en": ["Teachings of Guru", "Scripture", "Pride", "History"],
      "options_hi": ["गुरु के उपदेश", "धर्म ग्रंथ", "गर्व", "इतिहास"],
      "answer_en": "Teachings of Guru",
      "answer_hi": "गुरु के उपदेश"
    },
    {
      "num": 5,
      "question_en": "Who is the famous Punjabi poet known for his 'Sufi' poetry?",
      "question_hi": "ਕਿਸ ਪ੍ਰਸਿੱਧ ਪੰਜਾਬੀ ਕਵੀ ਨੂੰ ਉਸਦੀ 'ਸੁਫੀ' ਕਵਿਤਾ ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
      "options_en": ["Bulleh Shah", "Guru Nanak Dev", "Shah Hussain", "Waris Shah"],
      "options_hi": ["बुल्ले शाह", "गुरु नानक देव", "शाह हुसैन", "वारिश शाह"],
      "answer_en": "Bulleh Shah",
      "answer_hi": "बुल्ले शाह"
    },
    {
      "num": 6,
      "question_en": "Which work is written by Sohan Singh Seetal?",
      "question_hi": "ਸੋਹਨ ਸਿੰਘ ਸੀਤਲ ਨੇ ਕਿਹੜਾ ਕੰਮ ਲਿਖਿਆ ਹੈ?",
      "options_en": ["Mitti di Khushboo", "Bulleh Shah", "Ajmerian", "Vichar di Chhanv"],
      "options_hi": ["मिट्टी दी खुशबू", "बुल्ले शाह", "अजमेरियां", "विचार दी छांव"],
      "answer_en": "Mitti di Khushboo",
      "answer_hi": "मिट्टी दी खुशबू"
    },
    {
      "num": 7,
      "question_en": "Who introduced the term 'Sufism' in Punjabi literature?",
      "question_hi": "ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ 'ਸੂਫੀਜਮ' ਦੀ ਸ਼ਬਦ ਨੂੰ ਕਿਨੇ ਪਰੀਚਿਤ ਕੀਤਾ?",
      "options_en": ["Bulleh Shah", "Shah Hussain", "Guru Nanak Dev", "Waris Shah"],
      "options_hi": ["बुल्ले शाह", "शाह हुसैन", "गुरु नानक देव", "वारिश शाह"],
      "answer_en": "Bulleh Shah",
      "answer_hi": "बुल्ले शाह"
    },
    {
      "num": 8,
      "question_en": "What is the focus of the Punjabi drama 'ਧਾਰਮਿਕ ਅਧਿਕਾਰ'?",
      "question_hi": "ਪੰਜਾਬੀ ਨਾਟਕ 'ਧਾਰਮਿਕ ਅਧਿਕਾਰ' ਦਾ ਧਿਆਨ ਕਿਸ ਉੱਤੇ ਹੈ?",
      "options_en": ["Religious rights", "Family values", "Social reform", "Historical events"],
      "options_hi": ["धार्मिक अधिकार", "परिवारिक मूल्य", "सामाजिक सुधार", "ऐतिहासिक घटनाएँ"],
      "answer_en": "Religious rights",
      "answer_hi": "धार्मिक अधिकार"
    },
    {
      "num": 9,
      "question_en": "Who wrote 'ਮੰਨੇ'?",
      "question_hi": "'ਮੰਨੇ' ਕਵਿਤਾ ਕਿਸਨੇ ਲਿਖੀ ਹੈ?",
      "options_en": ["Amrita Pritam", "Harvinder Singh", "Bulleh Shah", "Fakir Singh"],
      "options_hi": ["अमृता प्रीतम", "हरविंदर सिंह", "बुल्ले शाह", "फकीर सिंह"],
      "answer_en": "Amrita Pritam",
      "answer_hi": "अमृता प्रीतम"
    },
    {
      "num": 10,
      "question_en": "Which of the following is a theme of the poem 'ਸਪਨੇ'?",
      "question_hi": "'ਸਪਨੇ' ਕਵਿਤਾ ਦਾ ਵਿਸ਼ਾ ਕਿਹੜਾ ਹੈ?",
      "options_en": ["Dreams and aspirations", "Love and betrayal", "Nature's beauty", "Freedom and independence"],
      "options_hi": ["सपने और आकांक्षाएँ", "प्रेम और धोखा", "प्रकृति की सुंदरता", "स्वतंत्रता और स्वतंत्रता"],
      "answer_en": "Dreams and aspirations",
      "answer_hi": "सपने और आकांक्षाएँ"
    },
    {
      "num": 11,
      "question_en": "What is the meaning of 'ਸ਼ਹੀਦੀ'?",
      "question_hi": "'ਸ਼ਹੀਦੀ' ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      "options_en": ["Martyrdom", "Revolution", "Strength", "Freedom"],
      "options_hi": ["शहीदी", "क्रांति", "शक्ति", "स्वतंत्रता"],
      "answer_en": "Martyrdom",
      "answer_hi": "शहीदी"
    },
    {
      "num": 12,
      "question_en": "Which genre does the story 'ਮਹਿਬੂਬਾ' belong to?",
      "question_hi": "'ਮਹਿਬੂਬਾ' ਕਹਾਣੀ ਕਿਸ ਜੰਰ ਨਾਲ ਸਬੰਧਿਤ ਹੈ?",
      "options_en": ["Romantic", "Tragic", "Mystery", "Historical"],
      "options_hi": ["रोमांटिक", "दुःखद", "रहस्य", "ऐतिहासिक"],
      "answer_en": "Romantic",
      "answer_hi": "रोमांटिक"
    },
    {
      "num": 13,
      "question_en": "What does the word 'ਆਤਮਗਤ' mean?",
      "question_hi": "'ਆਤਮਗਤ' ਦਾ ਕੀ ਅਰਥ ਹੈ?",
      "options_en": ["Self-centered", "Peaceful", "Selfless", "Egoistic"],
      "options_hi": ["आत्मकेंद्रित", "शांतिपूर्ण", "निःस्वार्थ", "अहंकारी"],
      "answer_en": "Self-centered",
      "answer_hi": "आत्मकेंद्रित"
    },
    {
      "num": 14,
      "question_en": "Which of these is a type of 'Samasa'?",
      "question_hi": "ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ 'समास' ਦੀ ਕਿਸਮ ਹੈ?",
      "options_en": ["Dvandva Samasa", "Karmadharya Samasa", "Tatpurush Samasa", "Bahuvrihi Samasa"],
      "options_hi": ["द्वन्द्व समास", "कर्मधारय समास", "तत्पुरुष समास", "बहुव्रीहि समास"],
      "answer_en": "Dvandva Samasa",
      "answer_hi": "द्वन्द्व समास"
    },
    {
      "num": 15,
      "question_en": "Who wrote the book 'ਕੌਮ ਦੀ ਜਵਾਨੀ'?",
      "question_hi": "'ਕੌਮ ਦੀ ਜਵਾਨੀ' ਕਿਤਾਬ ਕਿਸਨੇ ਲਿਖੀ ਹੈ?",
      "options_en": ["Lala Lajpat Rai", "Bhagat Singh", "Mahatma Gandhi", "Sardar Patel"],
      "options_hi": ["लाला लाजपत राय", "भगत सिंह", "महात्मा गांधी", "सरदार पटेल"],
      "answer_en": "Bhagat Singh",
      "answer_hi": "भगत सिंह"
    },
    {
      "num": 16,
      "question_en": "What is the poetic form used in 'ਚੜ੍ਹਦੀ ਕਲਾ'?",
      "question_hi": "'ਚੜ੍ਹਦੀ ਕਲਾ' ਵਿੱਚ ਵਰਤਿਆ ਗਿਆ ਕਵਿਤਾ ਦਾ ਰੂਪ ਕੀ ਹੈ?",
      "options_en": ["Ballad", "Ode", "Sonnet", "Free Verse"],
      "options_hi": ["बालाड", "ओड", "सोनट", "फ्री वर्स"],
      "answer_en": "Ballad",
      "answer_hi": "बालाड"
    },
    {
      "num": 17,
      "question_en": "What is the main subject of 'ਜੀਵਨ ਦੀਆਂ ਮੁਸ਼ਕਿਲਾਂ'?",
      "question_hi": "'ਜੀਵਨ ਦੀਆਂ ਮੁਸ਼ਕਿਲਾਂ' ਦਾ ਮੁੱਖ ਵਿਸ਼ਾ ਕੀ ਹੈ?",
      "options_en": ["Struggles of life", "Love and loss", "Nature's beauty", "Philosophy of life"],
      "options_hi": ["जीवन की मुसीबतें", "प्रेम और हानि", "प्रकृति की सुंदरता", "जीवन का दर्शन"],
      "answer_en": "Struggles of life",
      "answer_hi": "जीवन की मुसीबतें"
    },
    {
      "num": 18,
      "question_en": "Who wrote 'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਇਤਿਹਾਸ'?",
      "question_hi": "'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਇਤਿਹਾਸ' ਕਿਤਾਬ ਕਿਸਨੇ ਲਿਖੀ ਹੈ?",
      "options_en": ["Dr. Gurbakhsh Singh", "Dr. Harvinder Singh", "Dr. Karam Singh", "Dr. Kesar Singh"],
      "options_hi": ["डॉ. गुरबख्श सिंह", "डॉ. हरविंदर सिंह", "डॉ. करम सिंह", "डॉ. केसरी सिंह"],
      "answer_en": "Dr. Gurbakhsh Singh",
      "answer_hi": "डॉ. गुरबख्श सिंह"
    },
    {
      "num": 19,
      "question_en": "Which work is associated with Bhai Gurdas Ji?",
      "question_hi": "ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਨਾਲ ਕਿਹੜਾ ਕੰਮ ਜੁੜਿਆ ਹੈ?",
      "options_en": ["Vara Bhai Gurdas", "Gurbani", "Gurbani Vichar", "Mann ki Baat"],
      "options_hi": ["ਵਾਰਾ ਭਾਈ ਗੁਰਦਾਸ", "ਗੁਰਬਾਣੀ", "ਗੁਰਬਾਣੀ ਵਿਚਾਰ", "ਮਨ ਕੀ ਬਾਤ"],
      "answer_en": "Vara Bhai Gurdas",
      "answer_hi": "ਵਾਰਾ ਭਾਈ ਗੁਰਦਾਸ"
    },
    {
      "num": 20,
      "question_en": "Who is the author of 'ਬੋਲੀ ਸਦਕਾ'? ",
      "question_hi": "'ਬੋਲੀ ਸਦਕਾ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
      "options_en": ["Bhai Gurdas", "Amrita Pritam", "Waris Shah", "Shah Hussain"],
      "options_hi": ["ਭਾਈ ਗੁਰਦਾਸ", "ਅਮ੍ਰਤਾ ਪ੍ਰੀਤਮ", "ਵਾਰਿਸ਼ ਸ਼ਾਹ", "ਸ਼ਾਹ ਹुसੈਨ"],
      "answer_en": "Bhai Gurdas",
      "answer_hi": "ਭਾਈ ਗੁਰਦਾਸ"
    }
  ,

   
  {
    "num": 21,
    "question_en": "Which of the following is a famous Punjabi epic?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਪ੍ਰਸਿੱਧ ਪੰਜਾਬੀ ਕਾਵਿ ਹੈ?",
    "options_en": ["Heer Ranjha", "Sohni Mahiwal", "Chandayan", "Gurbani"],
    "options_hi": ["हीर रांझा", "सोहनी माहिवाल", "चंदायन", "गुरबाणी"],
    "answer_en": "Heer Ranjha",
    "answer_hi": "हीर रांझा"
  },
  {
    "num": 22,
    "question_en": "Who wrote the poem 'ਮਾਂ'?",
    "question_hi": "'ਮਾਂ' ਕਵਿਤਾ ਕਿਸਨੇ ਲਿਖੀ ਹੈ?",
    "options_en": ["Amrita Pritam", "Harvinder Singh", "Sohan Singh Seetal", "Guru Nanak Dev"],
    "options_hi": ["अमृता प्रीतम", "हरविंदर सिंह", "सोहन सिंह सीतल", "गुरु नानक देव"],
    "answer_en": "Amrita Pritam",
    "answer_hi": "अमृता प्रीतम"
  },
  {
    "num": 23,
    "question_en": "Which of the following themes is most commonly found in Punjabi literature?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਵਿਸ਼ਾ ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ ਸਭ ਤੋਂ ਜਿਆਦਾ ਮਿਲਦਾ ਹੈ?",
    "options_en": ["Love and Sacrifice", "History and Politics", "Spirituality", "Nature and Environment"],
    "options_hi": ["प्रेम और बलिदान", "इतिहास और राजनीति", "आध्यात्मिकता", "प्रकृति और पर्यावरण"],
    "answer_en": "Love and Sacrifice",
    "answer_hi": "प्रेम और बलिदान"
  },
  {
    "num": 24,
    "question_en": "Who wrote the book 'ਗੁਰਬਾਣੀ ਦੀ ਵਿਸ਼ਵਾਸੀ ਰੂਪ'?",
    "question_hi": "'ਗੁਰਬਾਣੀ ਦੀ ਵਿਸ਼ਵਾਸੀ ਰੂਪ' ਕਿਤਾਬ ਕਿਸਨੇ ਲਿਖੀ ਹੈ?",
    "options_en": ["Bhai Gurdas", "Sohan Singh Seetal", "Guru Nanak Dev", "Surjit Singh"],
    "options_hi": ["ਭਾਈ ਗੁਰਦਾਸ", "सोहन सिंह सीतल", "गुरु नानक देव", "सुर्जित सिंह"],
    "answer_en": "Bhai Gurdas",
    "answer_hi": "ਭਾਈ ਗੁਰਦਾਸ"
  },
  {
    "num": 25,
    "question_en": "What does 'ਨਗਰ ਕਵੀ' mean?",
    "question_hi": "'ਨਗਰ ਕਵੀ' ਦਾ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["City poet", "Village poet", "Royal poet", "Historical poet"],
    "options_hi": ["शहर कवी", "गांव कवी", "राजकीय कवी", "ऐतिहासिक कवी"],
    "answer_en": "City poet",
    "answer_hi": "शहर कवी"
  },
  {
    "num": 26,
    "question_en": "Which poet is known for his work 'ਪੰਜਾਬੀ ਦੀ ਅਵਾਜ਼'?",
    "question_hi": "'ਪੰਜਾਬੀ ਦੀ ਅਵਾਜ਼' ਦੇ ਲਈ ਕਿਹੜਾ ਕਵੀ ਪ੍ਰਸਿੱਧ ਹੈ?",
    "options_en": ["Harvinder Singh", "Guru Nanak Dev", "Amrita Pritam", "Waris Shah"],
    "options_hi": ["हरविंदर सिंह", "गुरु नानक देव", "अमृता प्रीतम", "वारिश शाह"],
    "answer_en": "Harvinder Singh",
    "answer_hi": "हरविंदर सिंह"
  },
  {
    "num": 27,
    "question_en": "Which famous poet is credited with introducing the 'Dharti' (Earth) theme in Punjabi poetry?",
    "question_hi": "ਕਿਹੜੇ ਪ੍ਰਸਿੱਧ ਕਵੀ ਨੂੰ ਪੰਜਾਬੀ ਕਵਿਤਾ ਵਿੱਚ 'ਧਰਤੀ' (ਪৃথਵੀ) ਵਿਸ਼ੇ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰਨ ਦਾ ਸਹੀ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Bulleh Shah", "Amrita Pritam", "Warish Shah", "Shah Hussain"],
    "options_hi": ["बुल्ले शाह", "अमृता प्रीतम", "वारिश शाह", "शाह हुसैन"],
    "answer_en": "Warish Shah",
    "answer_hi": "वारिश शाह"
  },
  {
    "num": 28,
    "question_en": "Which of the following is NOT a work of Guru Nanak Dev?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਦਾ ਕੰਮ ਨਹੀਂ ਹੈ?",
    "options_en": ["Gurbani", "Japji Sahib", "Sukhmani Sahib", "Vara Bhai Gurdas"],
    "options_hi": ["गुरबाणी", "जपजी साहिब", "सुखमनी साहिब", "वारा भाई गुरदास"],
    "answer_en": "Vara Bhai Gurdas",
    "answer_hi": "वारा भाई गुरदास"
  },
  {
    "num": 29,
    "question_en": "What type of literature does 'ਪੰਜਾਬੀ ਕਵੀ' primarily refer to?",
    "question_hi": "'ਪੰਜਾਬੀ ਕਵੀ' ਦੇ ਤਹਿਤ ਕਿਹੜਾ ਸਾਹਿਤ ਆਉਂਦਾ ਹੈ?",
    "options_en": ["Poetry", "Drama", "Novel", "Essays"],
    "options_hi": ["कविता", "नाटक", "उपन्यास", "निबंध"],
    "answer_en": "Poetry",
    "answer_hi": "कविता"
  },
  {
    "num": 30,
    "question_en": "Which of these is a traditional form of Punjabi poetry?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਪੰਜਾਬੀ ਕਵਿਤਾ ਦੀ ਪਰੰਪਰਾਗਤ ਸ਼ੈਲੀ ਹੈ?",
    "options_en": ["Doha", "Ghazal", "Qawwali", "Ballad"],
    "options_hi": ["दोहा", "ग़ज़ल", "कव्वाली", "बालाड"],
    "answer_en": "Ballad",
    "answer_hi": "बालाड"
  },
  {
    "num": 31,
    "question_en": "Which work discusses the 'Martyrdom of Sikhs'?",
    "question_hi": "'ਸਿਖਾਂ ਦੀ ਸ਼ਹੀਦੀ' ਬਾਰੇ ਕਿਹੜਾ ਕੰਮ ਚਰਚਾ ਕਰਦਾ ਹੈ?",
    "options_en": ["Gurbani", "Vara Bhai Gurdas", "Sukhmani Sahib", "Khalsa Raj"],
    "options_hi": ["गुरबाणी", "वारा भाई गुरदास", "सुखमनी साहिब", "खालसा राज"],
    "answer_en": "Vara Bhai Gurdas",
    "answer_hi": "वारा भाई गुरदास"
  },
  {
    "num": 32,
    "question_en": "Who is the author of 'ਸਿੱਖ ਇਤਿਹਾਸ'?",
    "question_hi": "'ਸਿੱਖ ਇਤਿਹਾਸ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
    "options_en": ["Dr. Kesar Singh", "Dr. Gurbakhsh Singh", "Bhai Gurdas", "Dr. Harvinder Singh"],
    "options_hi": ["डॉ. केसरी सिंह", "डॉ. गुरबख्श सिंह", "भाई गुसदास", "डॉ. हरविंदर सिंह"],
    "answer_en": "Dr. Gurbakhsh Singh",
    "answer_hi": "डॉ. गुरबख्श सिंह"
  },
  {
    "num": 33,
    "question_en": "What is the theme of the poem 'ਵਾਹਿਗੁਰੂ'?",
    "question_hi": "'ਵਾਹਿਗੁਰੂ' ਕਵਿਤਾ ਦਾ ਵਿਸ਼ਾ ਕੀ ਹੈ?",
    "options_en": ["Divine faith", "Nature", "Love", "Freedom"],
    "options_hi": ["ईश्वर की आस्था", "प्रकृति", "प्रेम", "स्वतंत्रता"],
    "answer_en": "Divine faith",
    "answer_hi": "ईश्वर की आस्था"
  },
  {
    "num": 34,
    "question_en": "Who is the writer of the famous book 'ਵਿਚਾਰ'?",
    "question_hi": "'ਵਿਚਾਰ' ਕਿਤਾਬ ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
    "options_en": ["Bhai Gurdas", "Guru Nanak Dev", "Amrita Pritam", "Fakir Singh"],
    "options_hi": ["भाई गुसदास", "गुरु नानक देव", "अमृता प्रीतम", "फकीर सिंह"],
    "answer_en": "Bhai Gurdas",
    "answer_hi": "भाई गुसदास"
  },
  {
    "num": 35,
    "question_en": "Which genre does 'ਗੁਰਬਾਣੀ' belong to?",
    "question_hi": "'ਗੁਰਬਾਣੀ' ਕਿਹੜੇ ਜੰਰ ਨਾਲ ਸਬੰਧਿਤ ਹੈ?",
    "options_en": ["Spiritual", "Love", "Comedy", "Drama"],
    "options_hi": ["आध्यात्मिक", "प्रेम", "कॉमेडी", "नाटक"],
    "answer_en": "Spiritual",
    "answer_hi": "आध्यात्मिक"
  }
,


  {
    "num": 36,
    "question_en": "Who is considered the first poet of the Punjabi language?",
    "question_hi": "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦੇ ਪਹਿਲੇ ਕਵੀ ਕੌਣ ਮੰਨੇ ਜਾਂਦੇ ਹਨ?",
    "options_en": ["Guru Nanak Dev", "Bhai Gurdas", "Shah Hussain", "Warish Shah"],
    "options_hi": ["गुरु नानक देव", "भाई गुसदास", "शाह हुसैन", "वारिश शाह"],
    "answer_en": "Guru Nanak Dev",
    "answer_hi": "गुरु नानक देव"
  },
  {
    "num": 37,
    "question_en": "Who wrote the famous poem 'Heer Ranjha'?",
    "question_hi": "'हीर रांझा' काव्य किसने लिखा?",
    "options_en": ["Warish Shah", "Bulleh Shah", "Guru Nanak Dev", "Amrita Pritam"],
    "options_hi": ["वारिश शाह", "बुल्लेशाह", "गुरु नानक देव", "अमृता प्रीतम"],
    "answer_en": "Warish Shah",
    "answer_hi": "वारिश शाह"
  },
  {
    "num": 38,
    "question_en": "What does the term 'Sufi' mean in Punjabi literature?",
    "question_hi": "ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ 'ਸੁਫੀ' ਸ਼ਬਦ ਦਾ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["Mystic poet", "Epic poet", "Historical poet", "Philosophical poet"],
    "options_hi": ["ਮਿਸਟਿਕ ਕਵੀ", "महाकाव्य कवी", "ऐतिहासिक कवी", "दर्शनशास्त्र कवी"],
    "answer_en": "Mystic poet",
    "answer_hi": "ਮਿਸਟਿਕ ਕਵੀ"
  },
  {
    "num": 39,
    "question_en": "Which poet is known for his work 'Sufism in Punjab'?",
    "question_hi": "'ਪੰਜਾਬ ਵਿੱਚ ਸੁਫੀਵਾਦ' ਕਿਤਾਬ ਕਿਸ ਕਵੀ ਦੀ ਹੈ?",
    "options_en": ["Shah Hussain", "Bulleh Shah", "Amrita Pritam", "Bhai Gurdas"],
    "options_hi": ["शाह हुसैन", "बुल्लेशाह", "अमृता प्रीतम", "भाई गुसदास"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 40,
    "question_en": "Who wrote the book 'Punjabi Folk Literature'?",
    "question_hi": "'ਪੰਜਾਬੀ ਲੋਕ ਸਾਹਿਤ' ਕਿਤਾਬ ਕਿਸਨੇ ਲਿਖੀ ਹੈ?",
    "options_en": ["Dr. Gurbakhsh Singh", "Dr. Harvinder Singh", "Dr. Karam Singh", "Dr. Kesar Singh"],
    "options_hi": ["डॉ. गुरबख्श सिंह", "डॉ. हरविंदर सिंह", "डॉ. करम सिंह", "डॉ. केसरी सिंह"],
    "answer_en": "Dr. Gurbakhsh Singh",
    "answer_hi": "डॉ. गुरबख्श सिंह"
  },
  {
    "num": 41,
    "question_en": "Which of the following works is associated with Guru Nanak Dev?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕੰਮ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ?",
    "options_en": ["Japji Sahib", "Vara Bhai Gurdas", "Heer Ranjha", "Sukhmani Sahib"],
    "options_hi": ["जपजी साहिब", "वारा भाई गुरदास", "हीर रांझा", "सुखमनी साहिब"],
    "answer_en": "Japji Sahib",
    "answer_hi": "जपजी साहिब"
  },
  {
    "num": 42,
    "question_en": "Which of these is a significant work by Amrita Pritam?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਅਮ੍ਰਤਾ ਪ੍ਰੀਤਮ ਦਾ ਮਹੱਤਵਪੂਰਨ ਕੰਮ ਹੈ?",
    "options_en": ["Pinjar", "Sukhmani Sahib", "Vara Bhai Gurdas", "Heer Ranjha"],
    "options_hi": ["पिंजर", "सुखमनी साहिब", "वारा भाई गुरदास", "हीर रांझा"],
    "answer_en": "Pinjar",
    "answer_hi": "पिंजर"
  },
  {
    "num": 43,
    "question_en": "What is the central theme of the poem 'Heer Ranjha'?",
    "question_hi": "'हीर रांझा' काव्य ਦਾ ਮੁੱਖ ਵਿਸ਼ਾ ਕੀ ਹੈ?",
    "options_en": ["Love and Separation", "War and Peace", "Spiritual Journey", "Nature and Environment"],
    "options_hi": ["प्रेम और विछोह", "युद्ध और शांति", "आध्यात्मिक यात्रा", "प्रकृति और पर्यावरण"],
    "answer_en": "Love and Separation",
    "answer_hi": "प्रेम और विछोह"
  },
  {
    "num": 44,
    "question_en": "Which of the following is a famous Punjabi story of love?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਪੰਜਾਬੀ ਪ੍ਰੇਮ ਕਹਾਣੀ ਪ੍ਰਸਿੱਧ ਹੈ?",
    "options_en": ["Heer Ranjha", "Sohni Mahiwal", "Laila Majnu", "All of the above"],
    "options_hi": ["हीर रांझा", "सोहनी माहिवाल", "लैला मजनू", "सभी उपर्युक्त"],
    "answer_en": "All of the above",
    "answer_hi": "सभी उपर्युक्त"
  },
  {
    "num": 45,
    "question_en": "Who is known as the 'Shakespeare of Punjabi Literature'?",
    "question_hi": "'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਸ਼ੇਕਸਪੀਅਰ' ਦੇ ਤੌਰ ਤੇ ਕਿਹੜਾ ਕਵੀ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Waris Shah", "Bulleh Shah", "Guru Nanak Dev", "Amrita Pritam"],
    "options_hi": ["वारिश शाह", "बुल्लेशाह", "गुरु नानक देव", "अमृता प्रीतम"],
    "answer_en": "Waris Shah",
    "answer_hi": "वारिश शाह"
  },
  {
    "num": 46,
    "question_en": "Who wrote 'Vara Bhai Gurdas'?",
    "question_hi": "'ਵਾਰਾ ਭਾਈ ਗੁਰਦਾਸ' ਕਵਿਤਾ ਕਿਸਨੇ ਲਿਖੀ ਹੈ?",
    "options_en": ["Bhai Gurdas", "Guru Nanak Dev", "Amrita Pritam", "Waris Shah"],
    "options_hi": ["ਭਾਈ ਗੁਰਦਾਸ", "ਗੁਰੂ ਨਾਨਕ ਦੇਵ", "ਅਮ੍ਰਤਾ ਪ੍ਰੀਤਮ", "ਵਾਰਿਸ਼ ਸ਼ਾਹ"],
    "answer_en": "Bhai Gurdas",
    "answer_hi": "ਭਾਈ ਗੁਰਦਾਸ"
  },
  {
    "num": 47,
    "question_en": "Who is the author of 'ਹਉਮੈ ਅਤੇ ਬਿਨਾਇ'? ",
    "question_hi": "'ਹਉਮੈ ਅਤੇ ਬਿਨਾਇ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
    "options_en": ["Bulleh Shah", "Guru Nanak Dev", "Shah Hussain", "Waris Shah"],
    "options_hi": ["बुल्लेशाह", "गुरु नानक देव", "शाह हुसैन", "वारिश शाह"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 48,
    "question_en": "Which poet is known for his contribution to 'Sufi' poetry in Punjabi literature?",
    "question_hi": "ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ 'ਸੁਫੀ' ਕਵਿਤਾ ਵਿੱਚ ਯੋਗਦਾਨ ਦੇਣ ਵਾਲਾ ਕਵੀ ਕੌਣ ਹੈ?",
    "options_en": ["Shah Hussain", "Bulleh Shah", "Warish Shah", "All of the above"],
    "options_hi": ["शाह हुसैन", "बुल्लेशाह", "वारिश शाह", "सभी उपर्युक्त"],
    "answer_en": "All of the above",
    "answer_hi": "सभी उपर्युक्त"
  },
  {
    "num": 49,
    "question_en": "What is the primary focus of Punjabi folk literature?",
    "question_hi": "ਪੰਜਾਬੀ ਲੋਕ ਸਾਹਿਤ ਦਾ ਮੁੱਖ ਕੇਂਦਰ ਕੀ ਹੈ?",
    "options_en": ["Love and Tradition", "War and Peace", "History and Philosophy", "Nature and Environment"],
    "options_hi": ["प्रेम और परंपरा", "युद्ध और शांति", "इतिहास और दर्शनशास्त्र", "प्रकृति और पर्यावरण"],
    "answer_en": "Love and Tradition",
    "answer_hi": "प्रेम और परंपरा"
  },
  {
    "num": 50,
    "question_en": "Who wrote the famous Punjabi novel 'Pinjar'?",
    "question_hi": "'पिंजर' पंजाबी उपन्यास किसने लिखा?",
    "options_en": ["Amrita Pritam", "Bulleh Shah", "Warish Shah", "Guru Nanak Dev"],
    "options_hi": ["अमृता प्रीतम", "बुल्लेशाह", "वारिश शाह", "गुरु नानक देव"],
    "answer_en": "Amrita Pritam",
    "answer_hi": "अमृता प्रीतम"
  }
,

  {
    "num": 51,
    "question_en": "Which poet wrote 'Bulleh Shah Ki Kafiyan'?",
    "question_hi": "'बुल्लेशाह की काफ़ियां' किस कवि ने लिखीं?",
    "options_en": ["Bulleh Shah", "Waris Shah", "Guru Nanak Dev", "Shah Hussain"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "गुरु नानक देव", "शाह हुसैन"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 52,
    "question_en": "Which of the following is a significant work by Guru Nanak Dev?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਦਾ ਮਹੱਤਵਪੂਰਨ ਕੰਮ ਹੈ?",
    "options_en": ["Japji Sahib", "Sukhmani Sahib", "Heer Ranjha", "Vara Bhai Gurdas"],
    "options_hi": ["जपजी साहिब", "सुखमनी साहिब", "हीर रांझा", "वारा भाई गुरदास"],
    "answer_en": "Japji Sahib",
    "answer_hi": "जपजी साहिब"
  },
  {
    "num": 53,
    "question_en": "What is the central theme of 'Bulleh Shah Ki Kafiyan'?",
    "question_hi": "'बुल्लेशाह की काफ़ियां' का केंद्रीय विषय क्या है?",
    "options_en": ["Mysticism and Spirituality", "Love and Separation", "Nature", "Politics"],
    "options_hi": ["मिस्टिसिज़्म और आध्यात्मिकता", "प्रेम और विछोह", "प्रकृति", "राजनीति"],
    "answer_en": "Mysticism and Spirituality",
    "answer_hi": "मिस्टिसिज़्म और आध्यात्मिकता"
  },
  {
    "num": 54,
    "question_en": "Who is the author of 'Sukhmani Sahib'?",
    "question_hi": "'सुखमनी साहिब' के लेखक कौन हैं?",
    "options_en": ["Guru Arjan Dev", "Guru Nanak Dev", "Bhai Gurdas", "Bulleh Shah"],
    "options_hi": ["गुरु अर्जन देव", "गुरु नानक देव", "भाई गुरदास", "बुल्लेशाह"],
    "answer_en": "Guru Arjan Dev",
    "answer_hi": "गुरु अर्जन देव"
  },
  {
    "num": 55,
    "question_en": "Which of these works is associated with Warish Shah?",
    "question_hi": "हैठां में से किउं वरिश शाह के काम से जुड़ा हुआ है?",
    "options_en": ["Heer Ranjha", "Vara Bhai Gurdas", "Sukhmani Sahib", "Bulleh Shah Ki Kafiyan"],
    "options_hi": ["हीर रांझा", "वारा भाई गुरदास", "सुखमनी साहिब", "बुल्लेशाह की काफ़ियां"],
    "answer_en": "Heer Ranjha",
    "answer_hi": "हीर रांझा"
  },
  {
    "num": 56,
    "question_en": "Which of the following is a work of Bulleh Shah?",
    "question_hi": "हैठां में से बुले शाह की काव्यकृति किउं है?",
    "options_en": ["Bulleh Shah Ki Kafiyan", "Sukhmani Sahib", "Japji Sahib", "Vara Bhai Gurdas"],
    "options_hi": ["बुल्लेशाह की काफ़ियां", "सुखमनी साहिब", "जपजी साहिब", "वारा भाई गुरदास"],
    "answer_en": "Bulleh Shah Ki Kafiyan",
    "answer_hi": "बुल्लेशाह की काफ़ियां"
  },
  {
    "num": 57,
    "question_en": "What is the primary subject of Punjabi folk literature?",
    "question_hi": "ਪੰਜਾਬੀ ਲੋਕ ਸਾਹਿਤ ਦਾ ਮੁੱਖ ਵਿਸ਼ਾ ਕੀ ਹੈ?",
    "options_en": ["Love, tradition, and culture", "History", "Science", "Politics"],
    "options_hi": ["प्रेम, परंपरा और संस्कृति", "इतिहास", "विज्ञान", "राजनीति"],
    "answer_en": "Love, tradition, and culture",
    "answer_hi": "प्रेम, परंपरा और संस्कृति"
  },
  {
    "num": 58,
    "question_en": "What does the term 'Bulleh' mean in Punjabi?",
    "question_hi": "ਪੰਜਾਬੀ ਵਿੱਚ 'ਬੁੱਲੇ' ਸ਼ਬਦ ਦਾ ਕੀ ਅਰਥ ਹੈ?",
    "options_en": ["A name", "A mystic", "A poet", "A sage"],
    "options_hi": ["ਇੱਕ ਨਾਂ", "ਇੱਕ ਮਿਸਟਿਕ", "ਇੱਕ ਕਵੀ", "ਇੱਕ ਮਹਾਨ ਜੋਤੀ"],
    "answer_en": "A mystic",
    "answer_hi": "ਇੱਕ ਮਿਸਟਿਕ"
  },
  {
    "num": 59,
    "question_en": "Who wrote 'Gurbani'?",
    "question_hi": "'ਗੁਰਬਾਣੀ' ਕਵਿਤਾ ਕਿਸਨੇ ਲਿਖੀ ਹੈ?",
    "options_en": ["Guru Nanak Dev", "Bhai Gurdas", "Guru Arjan Dev", "Guru Gobind Singh"],
    "options_hi": ["गुरु नानक देव", "भाई गुरदास", "गुरु अर्जन देव", "गुरु गोबिंद सिंह"],
    "answer_en": "Guru Nanak Dev",
    "answer_hi": "गुरु नानक देव"
  },
  {
    "num": 60,
    "question_en": "Which of these poets was born in the village of 'Waris Shah'?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ 'ਵਾਰਿਸ਼ ਸ਼ਾਹ' ਦੇ ਪਿੰਡ ਵਿੱਚ ਜੰਮਿਆ ਸੀ?",
    "options_en": ["Waris Shah", "Bulleh Shah", "Shah Hussain", "Guru Nanak Dev"],
    "options_hi": ["वारिश शाह", "बुल्लेशाह", "शाह हुसैन", "गुरु नानक देव"],
    "answer_en": "Waris Shah",
    "answer_hi": "वारिश शाह"
  },
  {
    "num": 61,
    "question_en": "Which poet is known for his contribution to Punjabi religious literature?",
    "question_hi": "ਪੰਜਾਬੀ ਧਾਰਮਿਕ ਸਾਹਿਤ ਵਿੱਚ ਯੋਗਦਾਨ ਦੇਣ ਵਾਲਾ ਕਵੀ ਕੌਣ ਹੈ?",
    "options_en": ["Guru Nanak Dev", "Bhai Gurdas", "Shah Hussain", "Waris Shah"],
    "options_hi": ["गुरु नानक देव", "भाई गुरदास", "शाह हुसैन", "वारिश शाह"],
    "answer_en": "Bhai Gurdas",
    "answer_hi": "भाई गुरदास"
  },
  {
    "num": 62,
    "question_en": "What is the subject matter of the poem 'Heer Ranjha'?",
    "question_hi": "'हीर रांझा' कविता का विषय क्या है?",
    "options_en": ["The love story of Heer and Ranjha", "A war between kings", "A journey of a mystic", "Philosophy of life"],
    "options_hi": ["हीर और रांझा की प्रेम कहानी", "राजाओं के बीच युद्ध", "एक मिस्टिक की यात्रा", "जीवन का दर्शन"],
    "answer_en": "The love story of Heer and Ranjha",
    "answer_hi": "हीर और रांझा की प्रेम कहानी"
  },
  {
    "num": 63,
    "question_en": "Which of these poets is known for his Kafiyan (poetic compositions)?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ ਆਪਣੇ ਕਾਫੀਆਂ (ਕਵਿਤਾ ਰਚਨਾਵਾਂ) ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Bulleh Shah", "Warish Shah", "Shah Hussain", "Guru Nanak Dev"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 64,
    "question_en": "Which poet wrote 'Meri Kismet Mein'?",
    "question_hi": "'ਮੇਰੀ ਕਿਸਮਤ ਵਿੱਚ' ਕਵਿਤਾ ਕਿਸਨੇ ਲਿਖੀ ਹੈ?",
    "options_en": ["Amrita Pritam", "Waris Shah", "Bulleh Shah", "Shah Hussain"],
    "options_hi": ["अमृता प्रीतम", "वारिश शाह", "बुल्लेशाह", "शाह हुसैन"],
    "answer_en": "Amrita Pritam",
    "answer_hi": "अमृता प्रीतम"
  },
  {
    "num": 65,
    "question_en": "Who is known as the 'father of Punjabi literature'?",
    "question_hi": "'ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾ' ਦੇ ਤੌਰ ਤੇ ਕਿਹੜਾ ਕਵੀ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Bhai Gurdas", "Waris Shah", "Guru Nanak Dev", "Guru Arjan Dev"],
    "options_hi": ["भाई गुरदास", "वारिश शाह", "गुरु नानक देव", "गुरु अर्जन देव"],
    "answer_en": "Bhai Gurdas",
    "answer_hi": "भाई गुरदास"
  }
,

  {
    "num": 66,
    "question_en": "Which of these poets is associated with the Sufi tradition in Punjab?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ ਪੰਜਾਬ ਵਿੱਚ ਸੁਫੀ ਪਰੰਪਰਾਂ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ?",
    "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 67,
    "question_en": "What is the main theme of Bulleh Shah's poetry?",
    "question_hi": "बुल्लेशाह की कविता का मुख्य विषय क्या है?",
    "options_en": ["Love and spirituality", "Revolution and politics", "Nature", "Philosophy"],
    "options_hi": ["प्रेम और आध्यात्मिकता", "क्रांति और राजनीति", "प्रकृति", "दर्शन"],
    "answer_en": "Love and spirituality",
    "answer_hi": "प्रेम और आध्यात्मिकता"
  },
  {
    "num": 68,
    "question_en": "Which of these works was written by Guru Arjan Dev?",
    "question_hi": "हैठां में से कौन सी काव्यकृति गुरु अर्जन देव द्वारा लिखी गई थी?",
    "options_en": ["Sukhmani Sahib", "Heer Ranjha", "Bulleh Shah Ki Kafiyan", "Vara Bhai Gurdas"],
    "options_hi": ["सुखमनी साहिब", "हीर रांझा", "बुल्लेशाह की काफ़ियां", "वारा भाई गुरदास"],
    "answer_en": "Sukhmani Sahib",
    "answer_hi": "सुखमनी साहिब"
  },
  {
    "num": 69,
    "question_en": "Which poet wrote 'Warish Shah Ki Heer Ranjha'?",
    "question_hi": "'वारिश शाह की हीर रांझा' कविता किसने लिखी?",
    "options_en": ["Waris Shah", "Bulleh Shah", "Guru Nanak Dev", "Guru Arjan Dev"],
    "options_hi": ["वारिश शाह", "बुल्लेशाह", "गुरु नानक देव", "गुरु अर्जन देव"],
    "answer_en": "Waris Shah",
    "answer_hi": "वारिश शाह"
  },
  {
    "num": 70,
    "question_en": "Who is the author of 'Heer Ranjha'?",
    "question_hi": "'हीर रांझा' के लेखक कौन हैं?",
    "options_en": ["Waris Shah", "Bulleh Shah", "Guru Nanak Dev", "Shah Hussain"],
    "options_hi": ["वारिश शाह", "बुल्लेशाह", "गुरु नानक देव", "शाह हुसैन"],
    "answer_en": "Waris Shah",
    "answer_hi": "वारिश शाह"
  },
  {
    "num": 71,
    "question_en": "Who composed the famous Sufi poem 'Tariq-e-Muhabbat'?",
    "question_hi": "'तारीक-ए-मोहब्बत' प्रसिद्ध सूफी कविता किसने रची?",
    "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 72,
    "question_en": "Which of these poets contributed to Punjabi mysticism?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ ਪੰਜਾਬੀ ਮਿਸਟਿਕਿਜ਼ਮ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਇਆ ਹੈ?",
    "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 73,
    "question_en": "What is the theme of the poetry of Shah Hussain?",
    "question_hi": "शाह हुसैन की कविता का विषय क्या है?",
    "options_en": ["Love and separation", "Philosophy", "Politics", "Nature"],
    "options_hi": ["प्रेम और विछोह", "दर्शन", "राजनीति", "प्रकृति"],
    "answer_en": "Love and separation",
    "answer_hi": "प्रेम और विछोह"
  },
  {
    "num": 74,
    "question_en": "Who wrote the famous Sufi work 'Shah Hussain Ki Kafiyan'?",
    "question_hi": "'शाह हुसैन की काफ़ियां' प्रसिद्ध सूफी काव्यकृति किसने लिखी?",
    "options_en": ["Shah Hussain", "Waris Shah", "Bulleh Shah", "Guru Nanak Dev"],
    "options_hi": ["शाह हुसैन", "वारिश शाह", "बुल्लेशाह", "गुरु नानक देव"],
    "answer_en": "Shah Hussain",
    "answer_hi": "शाह हुसैन"
  },
  {
    "num": 75,
    "question_en": "Which work of Bhai Gurdas is considered the most significant in Punjabi literature?",
    "question_hi": "ਭਾਈ ਗੁਰਦਾਸ ਦਾ ਕਿਹੜਾ ਕੰਮ ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Vara Bhai Gurdas", "Heer Ranjha", "Bulleh Shah Ki Kafiyan", "Sukhmani Sahib"],
    "options_hi": ["वारा भाई गुरदास", "हीर रांझा", "बुल्लेशाह की काफ़ियां", "सुखमनी साहिब"],
    "answer_en": "Vara Bhai Gurdas",
    "answer_hi": "वारा भाई गुरदास"
  },
  {
    "num": 76,
    "question_en": "Which poet is famous for his 'Kafiyan' (mystic poetry) in Punjabi?",
    "question_hi": "ਪੰਜਾਬੀ ਵਿੱਚ ਆਪਣੇ 'ਕਾਫ਼ੀਆਂ' (ਮਿਸਟਿਕ ਕਵਿਤਾ) ਲਈ ਪ੍ਰਸਿੱਧ ਕਵੀ ਕਿਹੜਾ ਹੈ?",
    "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 77,
    "question_en": "Which of these poets contributed to the development of Punjabi Sufi literature?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ ਪੰਜਾਬੀ ਸੁਫੀ ਸਾਹਿਤ ਦੇ ਵਿਕਾਸ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਇਆ ਹੈ?",
    "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 78,
    "question_en": "Who is regarded as the pioneer of Punjabi mysticism?",
    "question_hi": "ਪੰਜਾਬੀ ਮਿਸਟਿਕਿਜ਼ਮ ਦਾ ਪਾਇਨੀਅਰ ਕੌਣ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Bulleh Shah", "Waris Shah", "Guru Nanak Dev", "Shah Hussain"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "गुरु नानक देव", "शाह हुसैन"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 79,
    "question_en": "Which poet's work is known for its deep philosophical content in Punjabi literature?",
    "question_hi": "ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ ਕਿਸ ਕਵੀ ਦੇ ਕੰਮ ਨੂੰ ਗਹਿਰੇ ਦਰਸ਼ਨਾਤਮਕ ਅਰਥ ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  {
    "num": 80,
    "question_en": "Which of these poets is known for his rebellious stance against the orthodoxy of his time?",
    "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ ਆਪਣੇ ਸਮੇਂ ਦੀ ਥੋਸਤਾ ਦੇ ਖ਼ਿਲਾਫ਼ ਆਪਣੇ ਬਾਗੀ ਰਵੱਈਏ ਲਈ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
    "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
    "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
    "answer_en": "Bulleh Shah",
    "answer_hi": "बुल्लेशाह"
  },
  
    {
      "num": 81,
      "question_en": "Which of these poets was a contemporary of Guru Nanak Dev?",
      "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਦੇ ਸਮਕਾਲੀ ਸੀ?",
      "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Arjan Dev"],
      "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु अर्जन देव"],
      "answer_en": "Guru Arjan Dev",
      "answer_hi": "गुरु अर्जन देव"
    },
    {
      "num": 82,
      "question_en": "Which poet wrote the famous Sufi work 'Kafiyan'?",
      "question_hi": "ਕਿਹੜੇ ਕਵੀ ਨੇ ਪ੍ਰਸਿੱਧ ਸੁਫੀ ਕਾਵਿ 'ਕਾਫ਼ੀਆਂ' ਲਿਖੀਆਂ?",
      "options_en": ["Bulleh Shah", "Shah Hussain", "Waris Shah", "Guru Nanak Dev"],
      "options_hi": ["बुल्लेशाह", "शाह हुसैन", "वारिश शाह", "गुरु नानक देव"],
      "answer_en": "Bulleh Shah",
      "answer_hi": "बुल्लेशाह"
    },
    {
      "num": 83,
      "question_en": "Who is the author of the famous Punjabi epic 'Heer Ranjha'?",
      "question_hi": "ਪੰਜਾਬੀ ਦੇ ਪ੍ਰਸਿੱਧ ਮਹਾਕਾਵਿ 'ਹੀਰ ਰਾਂਝਾ' ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
      "options_en": ["Waris Shah", "Shah Hussain", "Bulleh Shah", "Guru Nanak Dev"],
      "options_hi": ["वारिश शाह", "शाह हुसैन", "बुल्लेशाह", "गुरु नानक देव"],
      "answer_en": "Waris Shah",
      "answer_hi": "वारिश शाह"
    },
    {
      "num": 84,
      "question_en": "Which of these is a 'कर्मधारय समास'?",
      "question_hi": "निम्न में से कौन 'कर्मधारय समास' है?",
      "options_en": ["नीलकंठ", "चौराहा", "आजन्म", "तिरंगा"],
      "options_hi": ["नीलकंठ", "चौराहा", "आजन्म", "तिरंगा"],
      "answer_en": "नीलकंठ",
      "answer_hi": "नीलकंठ"
    },
    {
      "num": 85,
      "question_en": "Which of these is a 'दीर्घ समास'?",
      "question_hi": "निम्न में से कौन 'दीर्घ समास' है?",
      "options_en": ["प्रेमबद्ध", "राजमहल", "धर्मराज", "राजकुमार"],
      "options_hi": ["प्रेमबद्ध", "राजमहल", "धर्मराज", "राजकुमार"],
      "answer_en": "राजमहल",
      "answer_hi": "राजमहल"
    },
    {
      "num": 86,
      "question_en": "Who is known as the father of Punjabi literature?",
      "question_hi": "ਪੰਜਾਬੀ ਸਾਹਿਤ ਦੇ ਪਿਤਾ ਦੇ ਤੌਰ ਤੇ ਕਿਹੜੇ ਵਿਅਕਤੀ ਨੂੰ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
      "options_en": ["Bhai Gurdas", "Guru Nanak Dev", "Shah Hussain", "Waris Shah"],
      "options_hi": ["भाई गुरदास", "गुरु नानक देव", "शाह हुसैन", "वारिश शाह"],
      "answer_en": "Bhai Gurdas",
      "answer_hi": "भाई गुरदास"
    },
    {
      "num": 87,
      "question_en": "Which poet wrote the 'Vara Bhai Gurdas'?",
      "question_hi": "'वारा भाई गुरदास' कविता किसने लिखी?",
      "options_en": ["Bhai Gurdas", "Guru Arjan Dev", "Shah Hussain", "Bulleh Shah"],
      "options_hi": ["भाई गुरदास", "गुरु अर्जन देव", "शाह हुसैन", "बुल्लेशाह"],
      "answer_en": "Bhai Gurdas",
      "answer_hi": "भाई गुरदास"
    },
    {
      "num": 88,
      "question_en": "Which of these poets was a prominent Sufi saint?",
      "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ ਪ੍ਰਮੁੱਖ ਸੁਫੀ ਸੰਤ ਸੀ?",
      "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
      "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
      "answer_en": "Shah Hussain",
      "answer_hi": "शाह हुसैन"
    },
    {
      "num": 89,
      "question_en": "Which poet is known for his love of nature and mysticism in Punjabi literature?",
      "question_hi": "ਪੰਜਾਬੀ ਸਾਹਿਤ ਵਿੱਚ ਕੁਦਰਤ ਅਤੇ ਮਿਸਟਿਕਿਜ਼ਮ ਨਾਲ ਆਪਣੇ ਪਿਆਰ ਲਈ ਕਿਹੜਾ ਕਵੀ ਪ੍ਰਸਿੱਧ ਹੈ?",
      "options_en": ["Waris Shah", "Bulleh Shah", "Guru Nanak Dev", "Shah Hussain"],
      "options_hi": ["वारिश शाह", "बुल्लेशाह", "गुरु नानक देव", "शाह हुसैन"],
      "answer_en": "Waris Shah",
      "answer_hi": "वारिश शाह"
    },
    {
      "num": 90,
      "question_en": "Which poet's work has been widely translated into many languages worldwide?",
      "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਸ ਕਵੀ ਦੇ ਕੰਮ ਨੂੰ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਕਈ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਅਨੁਵਾਦਿਤ ਕੀਤਾ ਗਿਆ ਹੈ?",
      "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
      "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
      "answer_en": "Bulleh Shah",
      "answer_hi": "बुल्लेशाह"
    },
    {
      "num": 91,
      "question_en": "Which of these works of Guru Nanak Dev is a part of the Guru Granth Sahib?",
      "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਦੇ ਕਿਹੜੇ ਕੰਮ ਨੂੰ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਵਿੱਚ ਸ਼ਾਮਿਲ ਕੀਤਾ ਗਿਆ ਹੈ?",
      "options_en": ["Japji Sahib", "Heer Ranjha", "Bulleh Shah Ki Kafiyan", "Sukhmani Sahib"],
      "options_hi": ["जपजी साहिब", "हीर रांझा", "बुल्लेशाह की काफ़ियां", "सुखमनी साहिब"],
      "answer_en": "Japji Sahib",
      "answer_hi": "जपजी साहिब"
    },
    {
      "num": 92,
      "question_en": "Which poet's poetry is deeply philosophical and often associated with divine love?",
      "question_hi": "ਕਿਹੜੇ ਕਵੀ ਦੀ ਕਵਿਤਾ ਗਹਿਰੇ ਦਰਸ਼ਨਾਤਮਕ ਹਨ ਅਤੇ ਅਕਸਰ ਦਿਵਿਆ ਪ੍ਰੇਮ ਨਾਲ ਜੋੜੀਆਂ ਜਾਂਦੀਆਂ ਹਨ?",
      "options_en": ["Bulleh Shah", "Waris Shah", "Guru Nanak Dev", "Shah Hussain"],
      "options_hi": ["बुल्लेशाह", "वारिश शाह", "गुरु नानक देव", "शाह हुसैन"],
      "answer_en": "Bulleh Shah",
      "answer_hi": "बुल्लेशाह"
    },
    {
      "num": 93,
      "question_en": "Who is the author of 'Bulleh Shah Ki Kafiyan'?",
      "question_hi": "'बुल्लेशाह की काफ़ियां' के लेखक कौन हैं?",
      "options_en": ["Bulleh Shah", "Shah Hussain", "Waris Shah", "Guru Nanak Dev"],
      "options_hi": ["बुल्लेशाह", "शाह हुसैन", "वारिश शाह", "गुरु नानक देव"],
      "answer_en": "Bulleh Shah",
      "answer_hi": "बुल्लेशाह"
    },
    {
      "num": 94,
      "question_en": "Which of these poets influenced the development of Sufism in Punjab?",
      "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ ਪੰਜਾਬ ਵਿੱਚ ਸੁਫੀਵਾਦ ਦੇ ਵਿਕਾਸ 'ਤੇ ਪ੍ਰਭਾਵਿਤ ਸੀ?",
      "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
      "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
      "answer_en": "Bulleh Shah",
      "answer_hi": "बुल्लेशाह"
    }
  ,
  
    {
      "num": 95,
      "question_en": "Which of these works is written by Guru Arjan Dev?",
      "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕੰਮ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਨੇ ਲਿਖਿਆ ਹੈ?",
      "options_en": ["Sukhmani Sahib", "Japji Sahib", "Guru Granth Sahib", "Heer Ranjha"],
      "options_hi": ["ਸुखਮਨੀ ਸਾਹਿਬ", "ਜਪਜੀ ਸਾਹਿਬ", "ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ", "ਹੀਰ ਰਾਂਝਾ"],
      "answer_en": "Sukhmani Sahib",
      "answer_hi": "ਸुखਮਨੀ ਸਾਹਿਬ"
    },
    {
      "num": 96,
      "question_en": "Who is known as the first Guru of Sikhs?",
      "question_hi": "ਗੁਰੁਆਂ ਵਿੱਚੋਂ ਪਹਿਲੇ ਗੁਰੂ ਦੇ ਤੌਰ ਤੇ ਕਿਸ ਨੂੰ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ?",
      "options_en": ["Guru Nanak Dev", "Guru Arjan Dev", "Guru Gobind Singh", "Guru Tegh Bahadur"],
      "options_hi": ["गुरु नानक देव", "गुरु अर्जन देव", "गुरु गोबिंद सिंह", "गुरु तेग बहादुर"],
      "answer_en": "Guru Nanak Dev",
      "answer_hi": "गुरु नानक देव"
    },
    {
      "num": 97,
      "question_en": "Who among these poets is known for their mystical poetry?",
      "question_hi": "ਹੇਠਾਂ ਵਿੱਚੋਂ ਕਿਹੜਾ ਕਵੀ ਆਪਣੀ ਮਿਸਟਿਕ ਕਵਿਤਾ ਲਈ ਪ੍ਰਸਿੱਧ ਹੈ?",
      "options_en": ["Bulleh Shah", "Waris Shah", "Shah Hussain", "Guru Nanak Dev"],
      "options_hi": ["बुल्लेशाह", "वारिश शाह", "शाह हुसैन", "गुरु नानक देव"],
      "answer_en": "Bulleh Shah",
      "answer_hi": "बुल्लेशाह"
    },
    {
      "num": 98,
      "question_en": "Which work is attributed to Guru Nanak Dev?",
      "question_hi": "ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਨਾਲ ਸੰਬੰਧਤ ਕਿਹੜਾ ਕੰਮ ਹੈ?",
      "options_en": ["Japji Sahib", "Heer Ranjha", "Bulleh Shah Ki Kafiyan", "Sukhmani Sahib"],
      "options_hi": ["जपजी साहिब", "हीर रांझा", "बुल्लेशाह की काफ़ियां", "सुखमनी साहिब"],
      "answer_en": "Japji Sahib",
      "answer_hi": "जपजी साहिब"
    },
    {
      "num": 99,
      "question_en": "Which poet wrote the famous Punjabi work 'Shah Hussain Ki Kafiyan'?",
      "question_hi": "ਪ੍ਰਸਿੱਧ ਪੰਜਾਬੀ ਰਚਨਾ 'ਸ਼ਾਹ ਹੁਸੈਣ ਦੀ ਕਾਫ਼ੀਆਂ' ਕਿਹੜੇ ਕਵੀ ਨੇ ਲਿਖੀ ਹੈ?",
      "options_en": ["Shah Hussain", "Bulleh Shah", "Waris Shah", "Guru Nanak Dev"],
      "options_hi": ["शाह हुसैन", "बुल्लेशाह", "वारिश शाह", "गुरु नानक देव"],
      "answer_en": "Shah Hussain",
      "answer_hi": "शाह हुसैन"
    },
    {
      "num": 100,
      "question_en": "Who is the author of the famous poem 'Heer Ranjha'?",
      "question_hi": "'ਹੀਰ ਰਾਂਝਾ' ਦੀ ਪ੍ਰਸਿੱਧ ਕਵਿਤਾ ਦੇ ਲੇਖਕ ਕੌਣ ਹਨ?",
      "options_en": ["Waris Shah", "Shah Hussain", "Guru Nanak Dev", "Bulleh Shah"],
      "options_hi": ["वारिश शाह", "शाह हुसैन", "गुरु नानक देव", "बुल्लेशाह"],
      "answer_en": "Waris Shah",
      "answer_hi": "वारिश शाह"
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
