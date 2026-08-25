const english_lyrics = [
  { word: "Sisters", time: 0.30 },
  { word: "and", time: 0.60 },
  { word: "Brothers", time: 1.10 },
  { word: "of", time: 1.50 },
  { word: "America,", time: 1.90 },
  { word: "It", time: 3.30 },
  { word: "fills", time: 3.50 },
  { word: "my", time: 3.80 },
  { word: "heart", time: 4.10 },
  { word: "with", time: 4.40 },
  { word: "joy", time: 4.80 },
  { word: "unspeakable", time: 5.20 },
  { word: "to", time: 6.00 },
  { word: "rise", time: 6.20 },
  { word: "in", time: 6.50 },
  { word: "response", time: 6.90 },
  { word: "to", time: 7.20 },
  { word: "the", time: 7.60 },
  { word: "warm", time: 7.80 },
  { word: "and", time: 8.10 },
  { word: "cordial", time: 8.50 },
  { word: "welcome", time: 9.00 },
  { word: "which", time: 9.50 },
  { word: "you", time: 9.80 },
  { word: "have", time: 10.00 },
  { word: "given", time: 10.30 },
  { word: "us.", time: 10.60 },
  { word: "I", time: 11.80 },
  { word: "thank", time: 11.90 },
  { word: "you", time: 12.20 },
  { word: "in", time: 12.50 },
  { word: "the", time: 12.70 },
  { word: "name", time: 12.80 },
  { word: "of", time: 13.10 },
  { word: "the", time: 13.40 },
  { word: "most", time: 13.50 },
  { word: "ancient", time: 13.80 },
  { word: "order", time: 14.40 },
  { word: "of", time: 15.00 },
  { word: "monks", time: 15.10 },
  { word: "in", time: 15.30 },
  { word: "the", time: 15.70 },
  { word: "world;", time: 15.90 },
  { word: "I", time: 16.60 },
  { word: "thank", time: 16.70 },
  { word: "you", time: 17.00 },
  { word: "in", time: 17.30 },
  { word: "the", time: 17.50 },
  { word: "name", time: 17.60 },
  { word: "of", time: 17.90 },
  { word: "the", time: 18.20 },
  { word: "mother", time: 18.40 },
  { word: "of", time: 18.60 },
  { word: "religions;", time: 19.00 },
  { word: "and", time: 19.50 },
  { word: "I", time: 20.00 },
  { word: "thank", time: 20.10 },
  { word: "you", time: 20.40 },
  { word: "in", time: 20.70 },
  { word: "the", time: 20.90 },
  { word: "name", time: 21.10 },
  { word: "of", time: 21.30 },
  { word: "the", time: 21.60 },
  { word: "millions", time: 21.80 },
  { word: "and", time: 22.40 },
  { word: "millions", time: 22.60 },
  { word: "of", time: 22.90 },
  { word: "Hindu", time: 23.50 },
  { word: "people", time: 23.70 },
  { word: "of", time: 24.00 },
  { word: "all", time: 24.40 },
  { word: "classes", time: 24.60 },
  { word: "and", time: 25.00 },
  { word: "sects.", time: 25.50 },
  { word: "My", time: 27.40 },
  { word: "thanks,", time: 27.60 },
  { word: "also,", time: 27.90 },
  { word: "to", time: 28.60 },
  { word: "some", time: 29.00 },
  { word: "of", time: 29.30 },
  { word: "the", time: 29.50 },
  { word: "speakers", time: 29.70 },
  { word: "on", time: 30.10 },
  { word: "this", time: 30.50 },
  { word: "platform", time: 30.80 },
  { word: "who,", time: 31.30 },
  { word: "referring", time: 32.20 },
  { word: "to", time: 32.60 },
  { word: "the", time: 32.70 },
  { word: "delegates", time: 32.80 },
  { word: "from", time: 33.30 },
  { word: "the", time: 33.60 },
  { word: "Orient,", time: 33.90 },
  { word: "have", time: 34.70 },
  { word: "told", time: 34.90 },
  { word: "you", time: 35.10 },
  { word: "that", time: 35.40 },
  { word: "these", time: 35.70 },
  { word: "men", time: 36.00 },
  { word: "from", time: 36.30 },
  { word: "far-off", time: 36.60 },
  { word: "nations", time: 37.20 },
  { word: "may", time: 37.50 },
  { word: "well", time: 38.00 },
  { word: "claim", time: 38.30 },
  { word: "the", time: 38.50 },
  { word: "honour", time: 38.80 },
  { word: "of", time: 39.10 },
  { word: "bearing", time: 39.50 },
  { word: "to", time: 39.70 },
  { word: "different", time: 40.00 },
  { word: "lands", time: 40.30 },
  { word: "the", time: 40.70 },
  { word: "idea", time: 41.00 },
  { word: "of", time: 41.40 },
  { word: "toleration.", time: 41.80 },
  { word: "I", time: 43.40 },
  { word: "am", time: 43.50 },
  { word: "proud", time: 43.60 },
  { word: "to", time: 43.90 },
  { word: "belong", time: 44.20 },
  { word: "to", time: 44.50 },
  { word: "a", time: 44.90 },
  { word: "religion", time: 45.00 },
  { word: "which", time: 45.70 },
  { word: "has", time: 45.90 },
  { word: "taught", time: 46.10 },
  { word: "the", time: 46.40 },
  { word: "world", time: 46.70 },
  { word: "both", time: 47.00 },
  { word: "tolerance", time: 47.30 },
  { word: "and", time: 47.90 },
  { word: "universal", time: 48.40 },
  { word: "acceptance.", time: 48.90 },
  { word: "We", time: 50.80 },
  { word: "believe", time: 50.90 },
  { word: "not", time: 51.20 },
  { word: "only", time: 51.60 },
  { word: "in", time: 52.30 },
  { word: "universal", time: 52.40 },
  { word: "toleration,", time: 53.00 },
  { word: "but", time: 53.70 },
  { word: "we", time: 54.30 },
  { word: "accept", time: 54.50 },
  { word: "all", time: 55.00 },
  { word: "religions", time: 55.30 },
  { word: "as", time: 55.80 },
  { word: "true.", time: 56.20 },
  { word: "I", time: 58.00 },
  { word: "am", time: 58.10 },
  { word: "proud", time: 58.30 },
  { word: "to", time: 58.50 },
  { word: "belong", time: 58.80 },
  { word: "to", time: 59.10 },
  { word: "a", time: 59.50 },
  { word: "nation", time: 59.60 },
  { word: "which", time: 59.90 },
  { word: "has", time: 60.30 },
  { word: "sheltered", time: 60.60 },
  { word: "the", time: 61.30 },
  { word: "persecuted", time: 61.40 },
  { word: "and", time: 62.10 },
  { word: "the", time: 62.70 },
  { word: "refugees", time: 62.90 },
  { word: "of", time: 63.30 },
  { word: "all", time: 63.80 },
  { word: "religions", time: 64.10 },
  { word: "and", time: 64.50 },
  { word: "all", time: 65.20 },
  { word: "nations", time: 65.40 },
  { word: "of", time: 65.70 },
  { word: "the", time: 66.10 },
  { word: "earth.", time: 66.30 },
  { word: "I", time: 67.60 },
  { word: "am", time: 67.70 },
  { word: "proud", time: 67.80 },
  { word: "to", time: 68.20 },
  { word: "tell", time: 68.50 },
  { word: "you", time: 68.70 },
  { word: "that", time: 68.90 },
  { word: "we", time: 69.10 },
  { word: "have", time: 69.30 },
  { word: "gathered", time: 69.60 },
  { word: "in", time: 69.90 },
  { word: "our", time: 70.30 },
  { word: "bosom", time: 70.60 },
  { word: "the", time: 71.00 },
  { word: "purest", time: 71.10 },
  { word: "remnant", time: 71.70 },
  { word: "of", time: 72.00 },
  { word: "the", time: 72.20 },
  { word: "Israelites,", time: 72.50 },
  { word: "who", time: 73.00 },
  { word: "came", time: 73.60 },
  { word: "to", time: 73.90 },
  { word: "southern", time: 74.10 },
  { word: "India", time: 74.40 },
  { word: "and", time: 74.90 },
  { word: "took", time: 75.30 },
  { word: "refuge", time: 75.50 },
  { word: "with", time: 76.00 },
  { word: "us", time: 76.40 },
  { word: "in", time: 76.80 },
  { word: "the", time: 76.90 },
  { word: "very", time: 77.00 },
  { word: "year", time: 77.30 },
  { word: "in", time: 77.60 },
  { word: "which", time: 77.90 },
  { word: "their", time: 78.20 },
  { word: "holy", time: 78.50 },
  { word: "temple", time: 78.90 },
  { word: "was", time: 79.30 },
  { word: "shattered", time: 79.70 },
  { word: "to", time: 80.10 },
  { word: "pieces", time: 80.50 },
  { word: "by", time: 80.80 },
  { word: "Roman", time: 81.10 },
  { word: "tyranny.", time: 81.30 },
  { word: "I", time: 82.90 },
  { word: "am", time: 83.10 },
  { word: "proud", time: 83.20 },
  { word: "to", time: 83.50 },
  { word: "belong", time: 83.80 },
  { word: "to", time: 84.00 },
  { word: "the", time: 84.40 },
  { word: "religion", time: 84.50 },
  { word: "which", time: 84.90 },
  { word: "has", time: 85.40 },
  { word: "sheltered", time: 85.70 },
  { word: "and", time: 86.60 },
  { word: "is", time: 86.80 },
  { word: "still", time: 87.20 },
  { word: "fostering", time: 87.30 },
  { word: "the", time: 87.90 },
  { word: "remnant", time: 88.10 },
  { word: "of", time: 88.40 },
  { word: "the", time: 88.70 },
  { word: "grand", time: 88.90 },
  { word: "Zoroastrian", time: 89.10 },
  { word: "nation.", time: 89.80 },
  { word: "I", time: 91.70 },
  { word: "will", time: 91.80 },
  { word: "quote", time: 92.00 },
  { word: "to", time: 92.30 },
  { word: "you,", time: 92.70 },
  { word: "brethren,", time: 92.90 },
  { word: "a", time: 93.40 },
  { word: "few", time: 94.10 },
  { word: "lines", time: 94.30 },
  { word: "from", time: 94.60 },
  { word: "a", time: 94.90 },
  { word: "hymn", time: 95.20 },
  { word: "which", time: 95.50 },
  { word: "I", time: 95.70 },
  { word: "remember", time: 96.00 },
  { word: "to", time: 96.40 },
  { word: "have", time: 96.70 },
  { word: "repeated", time: 96.90 },
  { word: "from", time: 97.40 },
  { word: "my", time: 97.70 },
  { word: "earliest", time: 98.10 },
  { word: "boyhood,", time: 98.60 },
  { word: "which", time: 99.40 },
  { word: "is", time: 99.60 },
  { word: "every", time: 99.80 },
  { word: "day", time: 100.00 },
  { word: "repeated", time: 100.20 },
  { word: "by", time: 100.90 },
  { word: "millions", time: 101.20 },
  { word: "of", time: 101.60 },
  { word: "human", time: 101.90 },
  { word: "beings:", time: 102.30 },
  { word: "‘As", time: 102.70 },
  { word: "the", time: 103.30 },
  { word: "different", time: 103.60 },
  { word: "streams", time: 103.90 },
  { word: "having", time: 104.30 },
  { word: "their", time: 104.80 },
  { word: "sources", time: 105.50 },
  { word: "in", time: 105.60 },
  { word: "different", time: 106.20 },
  { word: "places", time: 106.30 },
  { word: "all", time: 106.80 },
  { word: "mingle", time: 107.20 },
  { word: "their", time: 107.60 },
  { word: "water", time: 107.90 },
  { word: "in", time: 108.40 },
  { word: "the", time: 108.70 },
  { word: "sea,", time: 108.90 },
  { word: "so,", time: 109.60 },
  { word: "O", time: 110.10 },
  { word: "Lord,", time: 110.20 },
  { word: "the", time: 110.50 },
  { word: "different", time: 111.00 },
  { word: "paths", time: 111.30 },
  { word: "which", time: 111.70 },
  { word: "men", time: 112.50 },
  { word: "take", time: 112.50 },
  { word: "through", time: 112.90 },
  { word: "different", time: 113.20 },
  { word: "tendencies,", time: 113.70 },
  { word: "various", time: 114.30 },
  { word: "though", time: 115.10 },
  { word: "they", time: 115.50 },
  { word: "appear,", time: 115.70 },
  { word: "crooked", time: 116.50 },
  { word: "or", time: 116.70 },
  { word: "straight,", time: 117.10 },
  { word: "all", time: 117.60 },
  { word: "lead", time: 118.10 },
  { word: "to", time: 118.40 },
  { word: "Thee.’", time: 118.70 },
  { word: "The", time: 119.50 },
  { word: "present", time: 120.30 },
  { word: "convention,", time: 120.50 },
  { word: "which", time: 121.40 },
  { word: "is", time: 122.00 },
  { word: "one", time: 122.20 },
  { word: "of", time: 122.40 },
  { word: "the", time: 122.60 },
  { word: "most", time: 122.70 },
  { word: "august", time: 123.10 },
  { word: "assemblies", time: 123.30 },
  { word: "ever", time: 124.10 },
  { word: "held,", time: 124.50 },
  { word: "is", time: 125.20 },
  { word: "in", time: 125.30 },
  { word: "itself", time: 125.50 },
  { word: "a", time: 125.80 },
  { word: "vindication,", time: 126.20 },
  { word: "a", time: 126.80 },
  { word: "declaration", time: 127.20 },
  { word: "to", time: 127.60 },
  { word: "the", time: 128.00 },
  { word: "world,", time: 128.20 },
  { word: "of", time: 128.80 },
  { word: "the", time: 129.00 },
  { word: "wonderful", time: 129.10 },
  { word: "doctrine", time: 129.50 },
  { word: "preached", time: 130.10 },
  { word: "in", time: 130.60 },
  { word: "the", time: 130.90 },
  { word: "Gita:", time: 131.00 },
  { word: "‘Whosoever", time: 131.30 },
  { word: "comes", time: 132.30 },
  { word: "to", time: 132.50 },
  { word: "Me,", time: 132.80 },
  { word: "through", time: 133.00 },
  { word: "whatsoever", time: 133.60 },
  { word: "form,", time: 134.00 },
  { word: "I", time: 135.30 },
  { word: "reach", time: 135.30 },
  { word: "him;", time: 135.60 },
  { word: "all", time: 135.90 },
  { word: "men", time: 136.30 },
  { word: "are", time: 136.60 },
  { word: "struggling", time: 137.00 },
  { word: "through", time: 137.50 },
  { word: "paths", time: 137.80 },
  { word: "which", time: 138.10 },
  { word: "in", time: 138.50 },
  { word: "the", time: 138.80 },
  { word: "end", time: 139.00 },
  { word: "lead", time: 139.30 },
  { word: "to", time: 139.60 },
  { word: "Me.’", time: 139.80 },
  { word: "Sectarianism,", time: 141.40 },
  { word: "bigotry,", time: 142.10 },
  { word: "and", time: 142.50 },
  { word: "its", time: 143.10 },
  { word: "horrible", time: 143.30 },
  { word: "descendant,", time: 143.70 },
  { word: "fanaticism,", time: 144.80 },
  { word: "have", time: 145.30 },
  { word: "long", time: 145.90 },
  { word: "possessed", time: 146.30 },
  { word: "this", time: 146.80 },
  { word: "beautiful", time: 147.30 },
  { word: "earth.", time: 147.70 },
  { word: "They", time: 149.60 },
  { word: "have", time: 149.70 },
  { word: "filled", time: 150.00 },
  { word: "the", time: 150.30 },
  { word: "earth", time: 150.60 },
  { word: "with", time: 151.10 },
  { word: "violence,", time: 151.40 },
  { word: "drenched", time: 151.90 },
  { word: "it", time: 152.70 },
  { word: "often", time: 153.00 },
  { word: "and", time: 153.40 },
  { word: "often", time: 153.90 },
  { word: "with", time: 154.30 },
  { word: "human", time: 154.60 },
  { word: "blood,", time: 155.00 },
  { word: "destroyed", time: 155.40 },
  { word: "civilization,", time: 156.10 },
  { word: "and", time: 157.00 },
  { word: "sent", time: 157.60 },
  { word: "whole", time: 157.90 },
  { word: "nations", time: 158.30 },
  { word: "to", time: 158.60 },
  { word: "despair.", time: 159.00 },
  { word: "Had", time: 160.50 },
  { word: "it", time: 160.60 },
  { word: "not", time: 160.80 },
  { word: "been", time: 161.10 },
  { word: "for", time: 161.40 },
  { word: "these", time: 161.80 },
  { word: "horrible", time: 162.10 },
  { word: "demons,", time: 162.60 },
  { word: "human", time: 163.00 },
  { word: "society", time: 163.80 },
  { word: "would", time: 164.60 },
  { word: "be", time: 164.90 },
  { word: "far", time: 165.10 },
  { word: "more", time: 165.40 },
  { word: "advanced", time: 165.70 },
  { word: "than", time: 166.20 },
  { word: "it", time: 166.70 },
  { word: "is", time: 167.00 },
  { word: "now.", time: 167.20 },
  { word: "But", time: 168.40 },
  { word: "their", time: 168.60 },
  { word: "time", time: 168.90 },
  { word: "is", time: 169.30 },
  { word: "come;", time: 169.70 },
  { word: "and", time: 171.40 },
  { word: "I", time: 171.60 },
  { word: "fervently", time: 171.80 },
  { word: "hope", time: 172.50 },
  { word: "that", time: 172.80 },
  { word: "the", time: 173.10 },
  { word: "bell", time: 173.40 },
  { word: "that", time: 173.60 },
  { word: "tolled", time: 174.00 },
  { word: "this", time: 174.30 },
  { word: "morning", time: 174.70 },
  { word: "in", time: 175.10 },
  { word: "honour", time: 175.50 },
  { word: "of", time: 175.80 },
  { word: "this", time: 176.20 },
  { word: "convention", time: 176.40 },
  { word: "may", time: 177.00 },
  { word: "be", time: 177.30 },
  { word: "the", time: 177.50 },
  { word: "death-knell", time: 177.70 },
  { word: "of", time: 178.20 },
  { word: "all", time: 178.50 },
  { word: "fanaticism,", time: 178.70 },
  { word: "of", time: 179.40 },
  { word: "all", time: 180.00 },
  { word: "persecutions", time: 180.40 },
  { word: "with", time: 181.20 },
  { word: "the", time: 181.60 },
  { word: "sword", time: 181.80 },
  { word: "or", time: 182.10 },
  { word: "with", time: 182.50 },
  { word: "the", time: 182.80 },
  { word: "pen,", time: 182.90 },
  { word: "and", time: 183.20 },
  { word: "of", time: 183.80 },
  { word: "all", time: 184.10 },
  { word: "uncharitable", time: 184.30 },
  { word: "feelings", time: 185.00 },
  { word: "between", time: 185.60 },
  { word: "persons", time: 186.00 },
  { word: "wending", time: 186.70 },
  { word: "their", time: 187.10 },
  { word: "way", time: 187.50 },
  { word: "to", time: 187.80 },
  { word: "the", time: 188.00 },
  { word: "same", time: 188.10 },
  { word: "goal.", time: 188.30 },
];

const question_bank = [
  {
    question: "Where did Swami Vivekananda deliver his famous “Response to Welcome”?",
    options: [
      "London",
      "Chicago",
      "New York",
      "Boston"
    ],
    answer: 1
  },

  {
    question: "On which date did Swami Vivekananda deliver his “Response to Welcome”?",
    options: [
      "11 September 1893",
      "12 September 1893",
      "19 September 1893",
      "27 September 1893"
    ],
    answer: 0
  },

  {
    question: "At which event did Swami Vivekananda give his “Response to Welcome”?",
    options: [
      "World Peace Conference",
      "Parliament of Religions",
      "World Education Conference",
      "International Congress"
    ],
    answer: 1
  },

  {
    question: "How did Swami Vivekananda begin his address to the audience?",
    options: [
      "Dear Friends of America",
      "Respected Citizens",
      "Sisters and Brothers of America",
      "Ladies and Gentlemen"
    ],
    answer: 2
  },

  {
    question: "What emotion did Swami Vivekananda say filled his heart when he received the welcome?",
    options: [
      "Pride",
      "Joy",
      "Fear",
      "Surprise"
    ],
    answer: 1
  },

  {
    question: "Swami Vivekananda said he thanked the audience in the name of which people?",
    options: [
      "The people of Chicago",
      "The people of India",
      "The Hindu people",
      "The people of Bengal"
    ],
    answer: 2
  },

  {
    question: "Which religion did Swami Vivekananda describe as the “mother of religions”?",
    options: [
      "Buddhism",
      "Hinduism",
      "Christianity",
      "Judaism"
    ],
    answer: 1
  },

  {
    question: "What principle did Swami Vivekananda say Hinduism had taught the world?",
    options: [
      "Religious competition",
      "Universal acceptance",
      "Political freedom",
      "Economic equality"
    ],
    answer: 1
  },

  {
    question: "According to Swami Vivekananda, what does Hinduism teach regarding different religions?",
    options: [
      "Only one religion is true",
      "All religions are false",
      "All religions are true",
      "Religions should be avoided"
    ],
    answer: 2
  },

  {
    question: "What does “universal acceptance” mean in the context of the speech?",
    options: [
      "Rejecting all religions",
      "Respectfully accepting different religions",
      "Following every religion",
      "Avoiding religious beliefs"
    ],
    answer: 1
  },

  {
    question: "What did India traditionally offer to people who were persecuted because of their religion?",
    options: [
      "Wealth",
      "Political positions",
      "Shelter",
      "Military training"
    ],
    answer: 2
  },

  {
    question: "Which community did Swami Vivekananda specifically mention as having sought refuge in India?",
    options: [
      "Israelites",
      "Romans",
      "Greeks",
      "Egyptians"
    ],
    answer: 0
  },

  {
    question: "Which religious community did Swami Vivekananda say India had sheltered as a remnant of a great nation?",
    options: [
      "Zoroastrians",
      "Romans",
      "Greeks",
      "Buddhists"
    ],
    answer: 0
  },

  {
    question: "What does the example of persecuted communities finding refuge in India demonstrate?",
    options: [
      "India’s military power",
      "India’s tradition of religious acceptance",
      "India’s economic strength",
      "India’s political influence"
    ],
    answer: 1
  },

  {
    question: "What natural image does Swami Vivekananda use to explain different religious paths?",
    options: [
      "Mountains reaching the sky",
      "Streams flowing into the sea",
      "Flowers growing in a garden",
      "Birds flying together"
    ],
    answer: 1
  },

  {
    question: "In the hymn quoted by Swami Vivekananda, what do different streams ultimately reach?",
    options: [
      "Different mountains",
      "The same sea",
      "Different forests",
      "The same river"
    ],
    answer: 1
  },

  {
    question: "What idea is illustrated by different streams flowing into the same sea?",
    options: [
      "All countries have the same culture",
      "Different religious paths can lead to the same Divine goal",
      "All rivers are identical",
      "Nature is more powerful than religion"
    ],
    answer: 1
  },

  {
    question: "Which sacred Hindu text does Swami Vivekananda refer to in his speech?",
    options: [
      "The Upanishads",
      "The Ramayana",
      "The Bhagavad Gita",
      "The Vedas"
    ],
    answer: 2
  },

  {
    question: "What central idea from the Bhagavad Gita does Swami Vivekananda emphasize?",
    options: [
      "People must follow one identical path",
      "People can approach the Divine through different paths",
      "Religion should be abandoned",
      "Only monks can attain God"
    ],
    answer: 1
  },

  {
    question: "What does Swami Vivekananda say the Parliament of Religions itself demonstrates?",
    options: [
      "Religious diversity can come together",
      "One religion is superior",
      "Science is more important than religion",
      "Political unity is necessary"
    ],
    answer: 0
  },

  {
    question: "Which of the following does Swami Vivekananda identify as having long possessed the earth?",
    options: [
      "Knowledge",
      "Sectarianism",
      "Education",
      "Democracy"
    ],
    answer: 1
  },

  {
    question: "Which word in Swami Vivekananda’s speech refers to narrow divisions between religious groups?",
    options: [
      "Sectarianism",
      "Acceptance",
      "Refuge",
      "Harmony"
    ],
    answer: 0
  },

  {
    question: "What does Swami Vivekananda identify as one of the causes of violence between religious groups?",
    options: [
      "Universal acceptance",
      "Bigotry",
      "Education",
      "Friendship"
    ],
    answer: 1
  },

  {
    question: "Which word does Swami Vivekananda use for extreme and intolerant religious zeal?",
    options: [
      "Tolerance",
      "Fanaticism",
      "Acceptance",
      "Compassion"
    ],
    answer: 1
  },

  {
    question: "According to Swami Vivekananda, what did sectarianism, bigotry and fanaticism often fill the earth with?",
    options: [
      "Knowledge",
      "Wealth",
      "Violence",
      "Happiness"
    ],
    answer: 2
  },

  {
    question: "What does Swami Vivekananda say these forces often drenched the earth in?",
    options: [
      "Water",
      "Tears",
      "Human blood",
      "Rain"
    ],
    answer: 2
  },

  {
    question: "What did religious fanaticism destroy according to Swami Vivekananda?",
    options: [
      "Civilization",
      "Agriculture",
      "Science",
      "Literature"
    ],
    answer: 0
  },

  {
    question: "What did fanaticism send entire nations into, according to the speech?",
    options: [
      "Prosperity",
      "Despair",
      "Freedom",
      "Happiness"
    ],
    answer: 1
  },

  {
    question: "What does Swami Vivekananda call sectarianism, bigotry and fanaticism?",
    options: [
      "Great teachers",
      "Horrible demons",
      "Divine powers",
      "Ancient traditions"
    ],
    answer: 1
  },

  {
    question: "What does Swami Vivekananda hope will come to an end?",
    options: [
      "Religious festivals",
      "Religious fanaticism",
      "Religious education",
      "Religious traditions"
    ],
    answer: 1
  },

  {
    question: "What does Swami Vivekananda hope the bell of the Parliament of Religions will become?",
    options: [
      "A celebration bell",
      "A victory bell",
      "The death-knell of fanaticism",
      "A warning bell"
    ],
    answer: 2
  },

  {
    question: "Which practice does Swami Vivekananda hope will end along with fanaticism?",
    options: [
      "Religious education",
      "Persecution",
      "Meditation",
      "Prayer"
    ],
    answer: 1
  },

  {
    question: "Which two forms of persecution does Swami Vivekananda specifically mention?",
    options: [
      "By wealth and power",
      "By the sword and by the pen",
      "By speech and debate",
      "By armies and kings"
    ],
    answer: 1
  },

  {
    question: "What kind of feelings does Swami Vivekananda hope will disappear?",
    options: [
      "Friendly feelings",
      "Uncharitable feelings",
      "Loving feelings",
      "National feelings"
    ],
    answer: 1
  },

  {
    question: "What does Swami Vivekananda hope will happen to people following different religious paths?",
    options: [
      "They will fight each other",
      "They will reach the same goal",
      "They will abandon religion",
      "They will follow one religion"
    ],
    answer: 1
  },

  {
    question: "What does the speech primarily advocate?",
    options: [
      "Religious superiority",
      "Religious harmony",
      "Political revolution",
      "Economic development"
    ],
    answer: 1
  },

  {
    question: "Which value is most strongly associated with Swami Vivekananda’s Chicago response?",
    options: [
      "Intolerance",
      "Universal acceptance",
      "Competition",
      "Isolation"
    ],
    answer: 1
  },

  {
    question: "Why does Swami Vivekananda express gratitude to the audience?",
    options: [
      "They offered him a political position",
      "They gave him a warm welcome",
      "They gave him money",
      "They invited him to America"
    ],
    answer: 1
  },

  {
    question: "What does Swami Vivekananda say about India’s attitude toward persecuted religions?",
    options: [
      "India rejected them",
      "India welcomed and sheltered them",
      "India ignored them",
      "India converted them"
    ],
    answer: 1
  },

  {
    question: "What does the phrase “different paths” represent in the context of Swami Vivekananda’s speech?",
    options: [
      "Different political systems",
      "Different religions and approaches to God",
      "Different geographical routes",
      "Different educational systems"
    ],
    answer: 1
  },

  {
    question: "What is the opposite of the religious attitude Swami Vivekananda promotes in this speech?",
    options: [
      "Acceptance",
      "Tolerance",
      "Fanaticism",
      "Harmony"
    ],
    answer: 2
  },

  {
    question: "What does Swami Vivekananda want humanity to overcome?",
    options: [
      "Knowledge",
      "Religious intolerance",
      "Cultural diversity",
      "Spirituality"
    ],
    answer: 1
  },

  {
    question: "Which statement best represents Swami Vivekananda’s view of religious diversity?",
    options: [
      "Diversity should be eliminated",
      "Different religions can coexist",
      "Only ancient religions matter",
      "Religions should never interact"
    ],
    answer: 1
  },

  {
    question: "What does the sea symbolize in Swami Vivekananda’s illustration of different streams?",
    options: [
      "Material wealth",
      "The common Divine destination",
      "Political power",
      "The greatness of America"
    ],
    answer: 1
  },

  {
    question: "What does the speech suggest about India’s religious tradition?",
    options: [
      "It rejects other religions",
      "It accepts and respects different religious traditions",
      "It discourages religious diversity",
      "It supports religious conflict"
    ],
    answer: 1
  },

  {
    question: "What does Swami Vivekananda want humanity to overcome?",
    options: [
      "Knowledge",
      "Religious intolerance",
      "Cultural diversity",
      "Spirituality"
    ],
    answer: 1
  },

  {
    question: "Why does Swami Vivekananda express gratitude to the people of America?",
    options: [
      "He felt welcomed by them",
      "He wanted to become an American",
      "He wanted political support",
      "He wanted financial assistance"
    ],
    answer: 0
  },

  {
    question: "Which of the following best describes Swami Vivekananda’s attitude toward other religions?",
    options: [
      "Hostile",
      "Respectful and accepting",
      "Indifferent",
      "Competitive"
    ],
    answer: 1
  },

  {
    question: "What does Swami Vivekananda hope will happen to sectarianism, bigotry and fanaticism?",
    options: [
      "They will grow stronger",
      "They will disappear",
      "They will unite religions",
      "They will control society"
    ],
    answer: 1
  },

  {
    question: "Which one sentence best summarizes the “Response to Welcome”?",
    options: [
      "One religion should rule the world.",
      "Different religions should respect one another and recognize their common spiritual goal.",
      "Religious differences should be ignored.",
      "India should become a political power."
    ],
    answer: 1
  }
];
