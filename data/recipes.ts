export type Situation = "tired" | "healthy" | "comfort" | "anything";
export type TimeCategory = "15" | "30" | "45+";

export type Recipe = {
  id: string;
  title: string;
  name: string;
  description: string;
  time: string;
  timeCategory: TimeCategory;
  estimatedTime: number;
  difficulty: "Easy" | "Medium";
  mood: string;
  staples: string[];
  primaryIngredients: string[];
  ingredients: string[];
  measuredIngredients: string[];
  steps: string[];
};

type RecipeJson = {
  id: string;
  title: string;
  description: string;
  time: string;
  timeCategory: "15" | "30" | "45+";
  difficulty: "Easy" | "Medium";
  mood: string;
  staples: string[];
  ingredients: string[];
  steps: string[];
};

const recipeJson: RecipeJson[] = [
  {
    id: "paneer-bhurji",
    title: "Quick Paneer Bhurji",
    description:
      "Crumbled paneer cooked with sautéed onions, ripe tomatoes, and everyday pantry spices.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "I'm tired",
    staples: ["paneer", "onion", "tomato"],
    ingredients: [
      "200g paneer, crumbled",
      "1 medium onion, finely chopped",
      "1 medium tomato, finely diced",
      "1 green chilli, chopped",
      "1/2 tsp turmeric powder",
      "1/2 tsp red chilli powder",
      "1 tbsp butter or oil",
      "Salt to taste"
    ],
    steps: [
      "Heat 1 tbsp butter or oil in a pan over medium heat. Add chopped onions and green chilli; sauté for 3 minutes until translucent.",
      "Add diced tomatoes, turmeric, red chilli powder, and salt. Cook for 3 to 4 minutes, mashing slightly until soft.",
      "Toss in the crumbled paneer. Stir gently on medium-low heat for 2 minutes just to absorb the spices without turning rubbery.",
      "Take off the flame immediately and serve hot with toasted bread, roti, or paratha."
    ]
  },
  {
    id: "paneer-capsicum-masala",
    title: "Paneer Capsicum Masala",
    description:
      "Crisp bell pepper cubes and seared paneer tossed in an aromatic tomato-onion gravy.",
    time: "25 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Something healthy",
    staples: ["paneer", "onion", "tomato"],
    ingredients: [
      "200g paneer, cut into 1-inch cubes",
      "1 large capsicum (bell pepper), cut into square chunks",
      "1 medium onion, diced into petals",
      "1 cup tomato puree (2 medium blended tomatoes)",
      "1 tsp ginger-garlic paste",
      "1/2 tsp cumin powder & 1/2 tsp coriander powder",
      "1 tbsp cooking oil",
      "Salt to taste"
    ],
    steps: [
      "Heat 1/2 tbsp oil in a pan on high heat. Sauté the capsicum and onion petals for 3 minutes until tender-crisp; remove to a bowl.",
      "Add remaining oil to the pan. Add ginger-garlic paste and cook 30 seconds, then pour in tomato puree, cumin, coriander, and salt.",
      "Simmer the tomato masala for 5 to 6 minutes until the raw smell disappears and the oil starts leaving the sides.",
      "Fold in the paneer cubes and sautéed peppers. Cook on low for 3 minutes so the paneer absorbs the sauce."
    ]
  },
  {
    id: "tawa-paneer-tikka",
    title: "Skillet Tawa Paneer Tikka",
    description:
      "Spiced yogurt-marinated paneer seared on a smoking hot tawa with charred edges.",
    time: "20 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["paneer", "onion"],
    ingredients: [
      "200g paneer, cut into thick cubes",
      "1/2 cup thick curd (dahi)",
      "1/2 onion, cut into petals",
      "1 tsp Kashmiri red chilli powder",
      "1/2 tsp chaat masala",
      "1/2 tsp roasted kasuri methi",
      "1 tbsp mustard oil (or regular oil)",
      "Salt to taste"
    ],
    steps: [
      "In a wide bowl, whisk the curd with mustard oil, chilli powder, chaat masala, kasuri methi, and salt.",
      "Gently coat the paneer cubes and onion petals in the spiced yogurt marinade. Let it sit for 5 minutes.",
      "Heat a tawa or flat skillet on high heat with a few drops of oil until very hot.",
      "Place paneer cubes flat in the pan. Sear for 2 minutes per side without crowding until blistered and charred."
    ]
  },
  {
    id: "street-egg-bhurji",
    title: "Mumbai Street-Style Egg Bhurji",
    description:
      "Scrambled eggs tossed with caramelized onions, tomatoes, and a kick of pav bhaji masala.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "I'm tired",
    staples: ["eggs", "onion", "tomato"],
    ingredients: [
      "3 whole eggs, lightly beaten",
      "1 large onion, finely chopped",
      "1 ripe tomato, chopped",
      "1 green chilli, sliced",
      "1/2 tsp pav bhaji masala or garam masala",
      "1/4 tsp turmeric powder",
      "1 tbsp butter",
      "Salt to taste"
    ],
    steps: [
      "Melt butter in a pan over medium heat. Sauté the onions and green chilli for 3 minutes until lightly browned at the edges.",
      "Add chopped tomatoes, turmeric, pav bhaji masala, and salt. Cook 2 minutes until tomatoes turn pulpy.",
      "Pour in the beaten eggs. Lower flame to medium-low and scramble constantly with a spatula for 2 to 3 minutes.",
      "Remove from the stove while the curds are still soft and moist to avoid drying them out."
    ]
  },
  {
    id: "dhaba-egg-curry",
    title: "Homestyle Dhaba Egg Curry",
    description:
      "Pan-blistered hard-boiled eggs simmered in a spiced onion-tomato gravy.",
    time: "30 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["eggs", "onion", "tomato"],
    ingredients: [
      "4 hard-boiled eggs, peeled and poked with a fork",
      "1 large onion, finely grated or minced",
      "2 medium tomatoes, pureed",
      "1 tsp ginger-garlic paste",
      "1/2 tsp each: turmeric, red chilli, and coriander powder",
      "1.5 tbsp cooking oil",
      "Salt to taste"
    ],
    steps: [
      "Heat 1 tbsp oil with a pinch of turmeric. Fry the whole boiled eggs for 2 minutes until golden blistered; set aside.",
      "Add remaining oil to the same pan. Sauté minced onions for 6 to 7 minutes on medium heat until deep brown.",
      "Add ginger-garlic paste, tomato puree, and dry spices. Cook 5 minutes until oil separates from the masala base.",
      "Stir in 1/2 cup warm water, add the fried eggs, cover, and simmer for 5 minutes until the gravy thickens."
    ]
  },
  {
    id: "spicy-egg-toast",
    title: "Masala Egg French Toast",
    description:
      "Pan-toasted bread soaked in whisked eggs with chopped onions, coriander, and spices.",
    time: "10 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "I'm tired",
    staples: ["eggs", "onion", "tomato"],
    ingredients: [
      "2 whole eggs",
      "2 slices of bread",
      "2 tbsp onion, very finely minced",
      "2 tbsp tomato, finely diced",
      "1 green chilli, minced",
      "1/4 tsp chaat masala",
      "1 tbsp butter",
      "Salt to taste"
    ],
    steps: [
      "Beat the eggs in a shallow flat bowl with onion, tomato, chilli, chaat masala, and salt.",
      "Dip both sides of each bread slice into the egg mixture until fully coated.",
      "Melt butter in a skillet over medium flame. Place coated bread slices in the pan and pour remaining mixture on top.",
      "Toast for 2 minutes on each side until deeply golden and cooked through."
    ]
  },
  {
    id: "crispy-jeera-aloo",
    title: "Crispy Jeera Aloo",
    description:
      "Boiled potato cubes tossed in roasted cumin seeds, green chillies, and amchur.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "I'm tired",
    staples: ["potato"],
    ingredients: [
      "2 large boiled potatoes, peeled and cut into cubes",
      "1.5 tsp whole cumin seeds (jeera)",
      "1 green chilli, slit lengthwise",
      "1/2 tsp turmeric powder",
      "1/2 tsp amchur (dry mango powder) or lemon juice",
      "1.5 tbsp mustard oil or ghee",
      "Salt to taste"
    ],
    steps: [
      "Heat mustard oil or ghee in a pan until shimmering. Add cumin seeds and let them splutter for 30 seconds.",
      "Add the slit green chilli and turmeric powder. Immediately dump in the cubed potatoes and salt.",
      "Toss on medium-high heat for 6 to 7 minutes, stirring occasionally until the outer edges turn crisp and golden.",
      "Dust with amchur powder (or fresh lemon squeeze), toss once to coat, and serve immediately."
    ]
  },
  {
    id: "aloo-matar-sabzi",
    title: "Homestyle Aloo Matar",
    description:
      "Tender potatoes and sweet green peas simmered together in a lightly spiced gravy.",
    time: "25 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["potato", "tomato", "onion"],
    ingredients: [
      "2 medium potatoes, peeled and diced into 1-inch cubes",
      "1 cup green peas (fresh or frozen)",
      "1 medium onion, finely chopped",
      "1 cup tomato puree (2 tomatoes blended)",
      "1/2 tsp turmeric & 1/2 tsp garam masala",
      "1 tbsp oil",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a pressure cooker or deep pan. Sauté chopped onions for 4 minutes until golden.",
      "Stir in tomato puree, turmeric, and salt. Cook for 4 to 5 minutes until thick and aromatic.",
      "Add diced potatoes, green peas, garam masala, and 1 cup water. Stir well.",
      "Pressure cook for 2 whistles on medium flame (or cover and boil for 12 minutes in a regular pot) until potatoes are fork-tender."
    ]
  },
  {
    id: "aloo-masala-sandwich",
    title: "Toasted Aloo Masala Sandwich",
    description:
      "Crispy pan-grilled bread stuffed with spiced mashed potatoes, onions, and chaat masala.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["potato", "onion"],
    ingredients: [
      "4 slices bread",
      "2 medium boiled potatoes, peeled and mashed",
      "1/2 small onion, finely diced",
      "1 green chilli, minced",
      "1/2 tsp chaat masala",
      "1.5 tbsp butter for pan toasting",
      "Salt to taste"
    ],
    steps: [
      "In a bowl, mix mashed potatoes, diced onions, green chilli, chaat masala, and salt until smooth.",
      "Spread the spiced potato mixture generously between pairs of bread slices to make sandwiches.",
      "Melt 1/2 tbsp butter on a tawa over medium-low heat. Place sandwich in the pan.",
      "Press down gently with a spatula and toast for 2 to 3 minutes per side until golden and crispy."
    ]
  },
  {
    id: "classic-dal-tadka",
    title: "Homestyle Dal Tadka",
    description:
      "Creamy boiled yellow lentils topped with a sizzling tempering of garlic, cumin, and ghee.",
    time: "25 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["tomato", "onion"],
    ingredients: [
      "3/4 cup toor dal (or moong dal), boiled tender with turmeric and salt",
      "1 small onion, finely chopped",
      "1 small tomato, diced",
      "4 cloves garlic, crushed or sliced",
      "1 tsp cumin seeds",
      "1 dried red chilli",
      "1 tbsp ghee",
      "Salt to taste"
    ],
    steps: [
      "Whisk your boiled dal with a ladle, adding 1/2 cup warm water until it reaches a pouring soup consistency; bring to a gentle simmer.",
      "In a small tadka pan, melt 1 tbsp ghee over medium heat. Splutter cumin seeds and the dried red chilli.",
      "Add crushed garlic and chopped onions; fry for 2 minutes until garlic turns fragrant and golden.",
      "Add diced tomatoes, cook 2 minutes until mushy, then immediately pour the sizzling ghee tadka into the simmering dal and cover."
    ]
  },
  {
    id: "moong-dal-khichdi",
    title: "Simple Moong Dal Khichdi",
    description:
      "Gut-healing rice and yellow moong dal cooked soft with cumin, turmeric, and pure ghee.",
    time: "20 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["rice"],
    ingredients: [
      "1/2 cup yellow split moong dal, washed",
      "1/2 cup rice, washed",
      "1 tsp cumin seeds (jeera)",
      "1/4 tsp turmeric powder",
      "1 pinch asafoetida (hing)",
      "1 tbsp pure ghee",
      "3.5 cups water",
      "Salt to taste"
    ],
    steps: [
      "Heat ghee in a pressure cooker. Add cumin seeds and a pinch of hing; let them crackle for 20 seconds.",
      "Add washed rice and moong dal. Sauté in the ghee for 1 minute.",
      "Pour in 3.5 cups water, turmeric powder, and salt. Stir to combine.",
      "Close the lid and pressure cook for 3 whistles on medium flame. Allow steam to release naturally, then stir with a spoon."
    ]
  },
  {
    id: "lemon-rice",
    title: "Quick South Indian Lemon Rice",
    description:
      "Fluffy cooked rice tossed with crunchy peanuts, mustard seeds, curry leaves, and lemon.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "I'm tired",
    staples: ["rice"],
    ingredients: [
      "2 cups cooked rice (cooled or leftover)",
      "2 tbsp raw peanuts",
      "1 tsp mustard seeds",
      "1 green chilli, slit",
      "1 sprig fresh curry leaves",
      "1/2 tsp turmeric powder",
      "1 whole lemon, freshly juiced",
      "1 tbsp cooking oil",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a pan over medium heat. Fry raw peanuts for 2 minutes until crunchy and golden.",
      "Add mustard seeds, slit green chilli, and curry leaves; allow seeds to splutter for 30 seconds.",
      "Turn off the flame. Stir in turmeric powder, salt, and freshly squeezed lemon juice directly into the warm oil.",
      "Add the cooked rice and toss gently until all rice grains turn evenly yellow and coated."
    ]
  },
  {
    id: "tempered-curd-rice",
    title: "Tempered Curd Rice (Thayir Sadam)",
    description:
      "Soft mashed rice combined with fresh yogurt and tempered with mustard seeds and curry leaves.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "Something healthy",
    staples: ["rice"],
    ingredients: [
      "1 cup cooked rice, mashed slightly while warm",
      "3/4 cup fresh plain yogurt (dahi)",
      "1/4 cup room-temperature milk (keeps it fresh)",
      "1 tsp mustard seeds",
      "1 green chilli, chopped",
      "1 sprig curry leaves",
      "1 tsp ghee or oil",
      "Salt to taste"
    ],
    steps: [
      "Place mashed warm rice in a mixing bowl. Stir in yogurt, milk, and salt until smooth and creamy.",
      "Heat 1 tsp ghee or oil in a small tempering pan.",
      "Add mustard seeds; once they pop, add chopped green chilli and curry leaves.",
      "Pour the hot tempering over the curd rice, mix gently, and serve."
    ]
  },
  {
    id: "quick-tomato-rice",
    title: "Spiced Tomato Rice",
    description:
      "Fluffy rice folded into an onion-tomato masala base spiced with sambar powder.",
    time: "20 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["rice", "tomato", "onion"],
    ingredients: [
      "2 cups cooked rice",
      "2 large ripe tomatoes, finely chopped",
      "1 medium onion, sliced",
      "1 tsp sambar powder or garam masala",
      "1 tsp mustard seeds",
      "1 sprig curry leaves",
      "1 tbsp oil",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a skillet. Add mustard seeds and curry leaves; let them splutter for 20 seconds.",
      "Add sliced onions and sauté for 3 minutes until soft. Stir in chopped tomatoes, sambar powder, and salt.",
      "Cook uncovered on medium flame for 5 minutes, pressing tomatoes with your spoon until thick and saucy.",
      "Turn heat to low, add the cooked rice, and toss gently until the rice absorbs the tomato masala."
    ]
  },
  {
    id: "kanda-poha",
    title: "Maharashtrian Kanda Poha",
    description:
      "Flattened rice sautéed with crunchy peanuts, onions, mustard seeds, and fresh lemon.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "I'm tired",
    staples: ["onion"],
    ingredients: [
      "1.5 cups medium-thick poha (flattened rice)",
      "1 large onion, finely sliced",
      "2 tbsp raw peanuts",
      "1 tsp mustard seeds",
      "1 green chilli, chopped",
      "1/2 tsp turmeric powder",
      "1 tbsp oil",
      "Salt to taste and lemon wedge"
    ],
    steps: [
      "Place poha in a colander, rinse gently under running water for 15 seconds, drain thoroughly, and let rest to soften.",
      "Heat oil in a pan. Fry peanuts for 2 minutes until toasted; push to the side of the pan.",
      "Add mustard seeds, green chilli, and sliced onions; sauté for 3 minutes until onions turn soft and translucent.",
      "Add turmeric, salt, and the rinsed poha. Toss gently on low heat for 2 minutes, then finish with a squeeze of fresh lemon."
    ]
  },
  {
    id: "paneer-bhurji-wrap",
    title: "10-Minute Spiced Paneer Wrap",
    description:
      "Crumbled spiced paneer wrapped inside a warm roti with crunchy sliced onions.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "I'm tired",
    staples: ["paneer", "onion"],
    ingredients: [
      "150g paneer, crumbled",
      "2 cooked rotis or parathas",
      "1/2 onion, sliced into rings",
      "1/2 tsp chaat masala",
      "1 tbsp mint chutney or mayonnaise",
      "1 tsp butter",
      "Salt to taste"
    ],
    steps: [
      "Melt butter in a pan. Sauté crumbled paneer with chaat masala and salt for 2 minutes on medium heat.",
      "Warm the rotis on a dry tawa for 30 seconds.",
      "Spread mint chutney down the center of each roti, pile on the warm paneer, and scatter raw onion rings.",
      "Roll tightly into a wrap and serve hot."
    ]
  },
  {
    id: "paneer-matar-quick",
    title: "Quick Matar Paneer",
    description:
      "Tender paneer cubes and sweet green peas simmered in a spiced onion-tomato gravy.",
    time: "25 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["paneer", "tomato", "onion"],
    ingredients: [
      "200g paneer, cut into cubes",
      "1 cup green peas (fresh or frozen)",
      "1 medium onion, finely chopped",
      "1 cup pureed tomatoes",
      "1/2 tsp turmeric & 1/2 tsp garam masala",
      "1 tbsp oil",
      "Salt to taste"
    ],
    steps: [
      "Heat oil in a pan. Sauté chopped onions for 4 minutes until golden.",
      "Add tomato puree, turmeric, and salt. Cook 5 minutes until oil releases from the sides.",
      "Add peas, garam masala, and 1/2 cup warm water. Cover and simmer for 5 minutes.",
      "Stir in paneer cubes and simmer on low for 2 minutes before taking off the heat."
    ]
  },
  {
    id: "quick-palak-paneer",
    title: "Homestyle Palak Paneer",
    description:
      "Soft paneer cubes simmered in a smooth, vibrant spinach and garlic gravy.",
    time: "25 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Something healthy",
    staples: ["paneer", "tomato"],
    ingredients: [
      "200g paneer, cut into cubes",
      "250g spinach leaves, blanched 2 mins and pureed",
      "1 small tomato, finely chopped",
      "4 cloves garlic, minced",
      "1/2 tsp cumin seeds",
      "1 tbsp ghee",
      "Salt to taste"
    ],
    steps: [
      "Melt ghee in a pan. Splutter cumin seeds and sauté minced garlic for 1 minute until fragrant.",
      "Add chopped tomato and salt; cook 3 minutes until mushy.",
      "Pour in the spinach puree and 1/4 cup water. Simmer on medium-low for 4 minutes.",
      "Gently fold in raw paneer cubes and simmer 2 minutes so they stay soft and tender."
    ]
  },
  {
    id: "paneer-kali-mirch",
    title: "Dry Pepper Paneer (Kali Mirch)",
    description:
      "High-protein paneer tossed with freshly cracked black pepper and onions.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "Something healthy",
    staples: ["paneer", "onion"],
    ingredients: [
      "200g paneer, cut into batons or cubes",
      "1 medium onion, thinly sliced",
      "1 tsp freshly coarse-cracked black pepper",
      "1 green chilli, slit",
      "1 tbsp butter or oil",
      "Salt to taste"
    ],
    steps: [
      "Heat butter in a skillet. Sauté sliced onions and slit green chilli for 3 minutes until soft.",
      "Add coarse-cracked black pepper and salt to the pan; stir for 20 seconds.",
      "Add paneer cubes. Toss continuously on high flame for 3 minutes until lightly blistered.",
      "Remove from heat and serve warm with a squeeze of fresh lemon."
    ]
  },
  {
    id: "garlic-paneer-toss",
    title: "Garlic Butter Paneer",
    description:
      "Pan-seared paneer cubes tossed in melted butter, roasted garlic slices, and green chillies.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "I'm tired",
    staples: ["paneer"],
    ingredients: [
      "200g paneer, cut into bite-sized cubes",
      "6 cloves garlic, thinly sliced",
      "2 green chillies, slit",
      "1/2 tsp crushed cumin",
      "1.5 tbsp butter",
      "Salt to taste"
    ],
    steps: [
      "Melt butter in a wide pan over medium-low heat. Add sliced garlic and cook gently for 2 minutes until golden and nutty.",
      "Add slit chillies and crushed cumin; let them sizzle for 20 seconds.",
      "Toss in paneer cubes and salt. Sauté on medium-high for 3 minutes until paneer edges pick up light color.",
      "Turn off the flame immediately and serve."
    ]
  },
  {
    id: "dahi-paneer-curry",
    title: "Spiced Dahi Paneer",
    description:
      "Paneer cubes simmered in a mildly spiced, cooling curd and onion gravy.",
    time: "20 min",
    timeCategory: "30",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["paneer", "onion"],
    ingredients: [
      "200g paneer, cubed",
      "3/4 cup plain yogurt (whisked smooth)",
      "1 medium onion, finely minced",
      "1/2 tsp coriander powder & 1/4 tsp turmeric",
      "1/2 tsp cumin seeds",
      "1 tbsp ghee",
      "Salt to taste"
    ],
    steps: [
      "Heat ghee in a pan. Splutter cumin seeds and fry minced onions for 4 minutes until golden.",
      "Lower the flame to minimum. Gradually pour in the whisked yogurt with turmeric and coriander, stirring continuously so it does not split.",
      "Cook on low heat for 4 minutes until the gravy thickens slightly.",
      "Drop in paneer cubes and salt. Simmer gently for 3 minutes and serve."
    ]
  },
  {
    id: "paneer-pulao-quick",
    title: "15-Minute Tawa Paneer Pulao",
    description:
      "Cooked rice and pan-seared paneer cubes tossed with onions, cumin, and pav bhaji masala.",
    time: "15 min",
    timeCategory: "15",
    difficulty: "Easy",
    mood: "Comfort food",
    staples: ["paneer", "rice", "onion"],
    ingredients: [
      "150g paneer, cubed small",
      "2 cups cooked rice (leftover or cooled)",
      "1 medium onion, finely chopped",
      "1 tsp pav bhaji masala or garam masala",
      "1 tbsp butter",
      "Salt to taste"
    ],
    steps: [
      "Melt butter in a wide pan or tawa. Sauté paneer cubes for 2 minutes until light golden; push to the side.",
      "In the same pan, sauté chopped onions for 3 minutes until translucent.",
      "Stir in pav bhaji masala and salt; toss with the paneer and onions for 30 seconds.",
      "Add cooked rice and toss vigorously on high heat for 2 minutes until evenly coated."
    ]
  },
  {
    id: "paneer-butter-masala-slow",
    title: "Slow-Simmered Paneer Butter Masala",
    description:
      "Rich, velvety tomato and cashew makhani gravy slowly reduced and finished with kasuri methi.",
    time: "45 min",
    timeCategory: "45+",
    difficulty: "Medium",
    mood: "Comfort food",
    staples: ["paneer", "tomato", "onion"],
    ingredients: [
      "250g fresh paneer, cut into cubes",
      "4 medium ripe tomatoes, chopped and boiled with 10 cashews",
      "1 large onion, finely minced",
      "1.5 tbsp ginger-garlic paste",
      "2 tbsp butter & 1 tbsp oil",
      "1/2 cup fresh cream or whisked malai",
      "1 tsp Kashmiri red chilli powder",
      "1/2 tsp garam masala",
      "1 tsp crushed kasuri methi",
      "Salt to taste"
    ],
    steps: [
      "Boil tomatoes and cashews in 1 cup water for 10 minutes until skins split; cool and blend into a silk-smooth puree.",
      "Heat 1 tbsp butter and 1 tbsp oil in a heavy-bottomed pan. Sauté minced onions on medium-low for 10 minutes until deep golden brown.",
      "Add ginger-garlic paste and Kashmiri chilli powder; cook for 1 minute. Pour in the blended tomato-cashew puree and salt.",
      "Cover and simmer on low flame for 18–20 minutes, stirring occasionally, until dark, glossy, and oil bubbles surface. Gently fold in paneer cubes, cream, butter, garam masala, and kasuri methi; simmer on low for 5 final minutes."
    ]
  },
  {
    id: "punjabi-rajma-slow",
    title: "Slow-Cooked Punjabi Rajma Masala",
    description:
      "Red kidney beans simmered low and slow in a deeply caramelized onion-tomato masala until buttery soft.",
    time: "50 min",
    timeCategory: "45+",
    difficulty: "Medium",
    mood: "Comfort food",
    staples: ["onion", "tomato"],
    ingredients: [
      "1 cup red kidney beans (rajma), soaked overnight",
      "2 large onions, finely grated",
      "3 large ripe tomatoes, pureed",
      "1.5 tbsp ginger-garlic paste",
      "1 black cardamom & 1 bay leaf",
      "1 tsp cumin seeds",
      "1/2 tsp each: turmeric, coriander powder, amchur",
      "2 tbsp ghee or mustard oil",
      "Salt to taste"
    ],
    steps: [
      "Pressure cook soaked rajma with black cardamom, bay leaf, salt, and 3.5 cups water for 5–6 whistles (around 20 mins) until completely tender when pressed.",
      "In a heavy kadai, heat ghee/oil. Splutter cumin seeds and add grated onions; sauté patiently on medium-low for 12 minutes until deep amber brown.",
      "Add ginger-garlic paste, pureed tomatoes, turmeric, and coriander powder. Fry the masala on medium heat for 8 minutes until oil leaves the base.",
      "Pour boiled rajma along with its cooking liquor into the masala. Mash 2 spoonfuls of beans against the pan wall to thicken, then simmer uncovered on low heat for 15 minutes to marry flavors."
    ]
  },
  {
    id: "slow-chana-pindi",
    title: "Amritsari Pindi Chole",
    description:
      "Dark, tangy chickpeas infused with roasted whole spices, tea-tinted broth, and dried pomegranate seeds.",
    time: "50 min",
    timeCategory: "45+",
    difficulty: "Medium",
    mood: "Comfort food",
    staples: ["tomato", "onion"],
    ingredients: [
      "1 cup white chickpeas (kabuli chana), soaked overnight",
      "1 tea bag (or 1 tbsp loose tea tied in cloth for dark color)",
      "1 large onion, pureed",
      "2 tomatoes, pureed",
      "1 tbsp anardana (dried pomegranate) or amchur powder",
      "1 tbsp chole masala",
      "2 tbsp mustard oil",
      "1-inch ginger sliced into juliennes",
      "Salt to taste"
    ],
    steps: [
      "Pressure cook soaked chana with salt, 1 black cardamom, and the tea bag in 3 cups water for 6 whistles (20 mins) until melt-in-mouth soft; discard the tea bag.",
      "Heat mustard oil to smoking point. Fry onion puree for 10 minutes until deep brown.",
      "Add ginger-garlic, tomato puree, chole masala, anardana powder, and salt. Cook on medium flame for 8 minutes until oil separates.",
      "Stir boiled chana and 1 cup of its dark broth into the masala. Simmer on low for 15 minutes, lightly mashing some chickpeas until you get a thick, rich clinging gravy."
    ]
  },
  {
    id: "dum-aloo-slow",
    title: "Kashmiri Dum Aloo",
    description:
      "Baby potatoes deep-seared and gently braised on low 'dum' in a fennel and dry ginger curd gravy.",
    time: "45 min",
    timeCategory: "45+",
    difficulty: "Medium",
    mood: "Comfort food",
    staples: ["potato"],
    ingredients: [
      "12-14 baby potatoes, boiled until just cooked and peeled",
      "1 cup whisked plain yogurt (dahi)",
      "1.5 tbsp fennel powder (saunf)",
      "1 tsp dry ginger powder (saunth)",
      "1.5 tbsp Kashmiri red chilli powder",
      "1/4 tsp asafoetida (hing)",
      "3 tbsp mustard oil",
      "Salt to taste"
    ],
    steps: [
      "Prick peeled baby potatoes all over with a fork. Shallow-fry in 2 tbsp hot mustard oil for 10 minutes, rolling constantly until golden-crusted on all sides; drain.",
      "In a bowl, whisk curd with Kashmiri chilli powder, fennel powder, ginger powder, and salt until smooth.",
      "Heat 1 tbsp oil in a heavy pot, add hing and cumin, lower flame completely, and pour in the spiced curd while whisking constantly to prevent curdling.",
      "Add fried potatoes and 1/2 cup water. Seal with a tight lid and cook on low heat ('dum') for 20 minutes until potatoes absorb the tangy gravy."
    ]
  }
];

function parsedMinutes(recipe: Pick<RecipeJson, "time" | "timeCategory">) {
  const fromLabel = Number.parseInt(recipe.time, 10);
  if (Number.isFinite(fromLabel)) return fromLabel;
  if (recipe.timeCategory === "45+") return 45;
  return Number.parseInt(recipe.timeCategory, 10) || 0;
}

export const recipes: Recipe[] = recipeJson.map((recipe) => ({
  ...recipe,
  name: recipe.title,
  estimatedTime: parsedMinutes(recipe),
  primaryIngredients: recipe.staples,
  measuredIngredients: recipe.ingredients
}));
