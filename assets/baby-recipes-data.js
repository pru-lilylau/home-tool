// baby-recipes-data.js
// BB食譜資料庫 — 由開始加固至3歲
// 資料結構統一格式,方便 baby-recipes.html 讀取、篩選、搜尋

/**
 * 欄位說明:
 * id            - 唯一識別碼 (英文, 用連字號)
 * title         - 食譜名稱 (中文)
 * stage         - 月齡階段: "4-6個月" / "6-9個月" / "9-12個月" / "1-2歲" / "2-3歲"
 * category      - 分類: "水果泥" / "蔬菜泥" / "肉類" / "主食" / "湯水" / "手指食物" / "家庭餐"
 * g6pd_status   - 蠶豆症安全性: "safe" / "caution" / "avoid"
 * g6pd_note     - 如果係 caution/avoid,講明點解;safe 可留空
 * allergens     - 過敏原陣列: ["蛋","奶","麩質","堅果","大豆","海鮮"] 冇就填 []
 * prep_time     - 準備時間(分鐘)
 * ingredients   - 食材陣列 { name, amount }
 * steps         - 步驟陣列 (中文,逐步)
 * image         - 圖片檔名 (放喺 /images/recipes/ 資料夾)
 * tips          - 小貼士 (可選)
 */

/**
 * 調味料使用原則(根據衛生署家庭健康服務指引):
 * - 1歲以下嬰兒毋須、亦不建議添加鹽、糖、蜜糖或豉油等調味料,包括標榜"BB豉油"嘅產品——
 *   呢類調味料鈉含量普遍唔算低,唔應視為安全豁免。
 * - 1歲後可開始少量嘗試淡味調味(如低鈉豉油、鹽),但仍應以"清淡"為原則,
 *   避免醃製、加工或高鹽食物,亦要留意豉油含大豆同麩質。
 * - 因此本資料庫只喺 "1-2歲" / "2-3歲" 階段嘅食譜加入可選調味料選項,
 *   "4-6個月" / "6-9個月" / "9-12個月" 階段維持原味,不建議加鹽/豉油。
 */

const babyRecipes = [
  {
    id: "rice-cereal-01",
    title: "第一口米糊",
    stage: "4-6個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 10,
    ingredients: [
      { name: "嬰兒米粉", amount: "2湯匙" },
      { name: "母乳或配方奶", amount: "適量" }
    ],
    steps: [
      "將嬰兒米粉放入碗中",
      "慢慢加入母乳/配方奶,邊加邊攪拌至順滑",
      "調較至BB容易吞嚥嘅稀糊狀",
      "放涼至微溫先餵食"
    ],
    image: "rice-cereal.jpg",
    tips: "第一次餵食建議由極稀開始,觀察2-3日冇敏感反應先加其他食材。"
  },
  {
    id: "banana-puree-01",
    title: "香蕉蓉",
    stage: "4-6個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "熟香蕉", amount: "半隻" }
    ],
    steps: [
      "香蕉去皮切段",
      "用叉子壓成幼滑蓉狀",
      "如太濃稠可加少量温開水調較"
    ],
    image: "banana-puree.jpg",
    tips: "香蕉天然帶甜味,通常係BB接受度最高嘅第一批水果之一。"
  },
  {
    id: "apple-puree-01",
    title: "蘋果蓉",
    stage: "4-6個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "蘋果", amount: "1個" }
    ],
    steps: [
      "蘋果去皮去芯,切小塊",
      "隔水蒸10-12分鐘至軟身",
      "用攪拌機或叉子壓成幼滑蓉狀",
      "放涼至微溫"
    ],
    image: "apple-puree.jpg",
    tips: ""
  },
  {
    id: "sweet-potato-puree-01",
    title: "蕃薯蓉",
    stage: "4-6個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "蕃薯", amount: "半個" }
    ],
    steps: [
      "蕃薯去皮切塊",
      "隔水蒸15分鐘至軟腍",
      "壓成蓉狀,可加少量母乳/配方奶調較濃稠度"
    ],
    image: "sweet-potato-puree.jpg",
    tips: "蕃薯天然帶甜味,亦係豐富纖維嘅選擇。"
  },
  {
    id: "pumpkin-puree-01",
    title: "南瓜蓉",
    stage: "4-6個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "南瓜", amount: "150克" }
    ],
    steps: [
      "南瓜去皮去籽切塊",
      "隔水蒸15分鐘至軟身",
      "壓成幼滑蓉狀"
    ],
    image: "pumpkin-puree.jpg",
    tips: ""
  },
  {
    id: "avocado-mash-01",
    title: "牛油果蓉",
    stage: "6-9個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "熟牛油果", amount: "半個" }
    ],
    steps: [
      "牛油果去皮去核",
      "用叉子壓成幼滑蓉狀",
      "可加少量母乳調較質地"
    ],
    image: "avocado-mash.jpg",
    tips: "牛油果含健康脂肪,對BB腦部發展有幫助。"
  },
  {
    id: "carrot-puree-01",
    title: "紅蘿蔔蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "紅蘿蔔", amount: "1條" }
    ],
    steps: [
      "紅蘿蔔去皮切片",
      "隔水蒸15分鐘至軟身",
      "壓成蓉狀或用攪拌機打幼滑"
    ],
    image: "carrot-puree.jpg",
    tips: ""
  },
  {
    id: "chicken-puree-01",
    title: "雞肉蓉",
    stage: "6-9個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "雞胸肉", amount: "50克" },
      { name: "水", amount: "適量" }
    ],
    steps: [
      "雞胸肉切小塊,汆水去雜質",
      "加水煮15-20分鐘至熟透",
      "連少量湯水一齊放入攪拌機打成幼滑蓉狀"
    ],
    image: "chicken-puree.jpg",
    tips: "肉類係鐵質嘅重要來源,6個月後BB體內鐵儲備開始下降,適合開始添加。"
  },
  {
    id: "finger-toast-01",
    title: "牛油果多士條(手指食物)",
    stage: "9-12個月",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["麩質"],
    prep_time: 8,
    ingredients: [
      { name: "全麥吐司", amount: "1片" },
      { name: "熟牛油果", amount: "1/4個" }
    ],
    steps: [
      "吐司輕輕烘軟(唔用烘到脆,方便BB咀嚼)",
      "牛油果壓成蓉塗喺吐司上",
      "切成長條狀,方便BB自己拎住食"
    ],
    image: "avocado-toast-fingers.jpg",
    tips: "BLW(Baby-Led Weaning)手指食物入門,鍛煉BB自主進食能力。"
  },
  {
    id: "soft-rice-veg-01",
    title: "菜肉軟飯",
    stage: "1-2歲",
    category: "主食",
    g6pd_status: "caution",
    g6pd_note: "如配方含蠶豆／豆類製品要留意,建議揀瘦肉、菜蔬為主嘅配搭,避免加蠶豆。",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "白飯", amount: "半碗" },
      { name: "瘦豬肉碎", amount: "30克" },
      { name: "菜心", amount: "2棵(切碎)" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "瘦肉碎加少許水煮熟",
      "菜心切碎,加入同煮至軟身",
      "拌入白飯,略為壓碎方便BB咀嚼",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "soft-rice-veg.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "fish-porridge-01",
    title: "魚肉蔬菜粥",
    stage: "1-2歲",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["海鮮"],
    prep_time: 30,
    ingredients: [
      { name: "白米", amount: "1/4杯" },
      { name: "龍脷魚柳", amount: "40克" },
      { name: "菠菜", amount: "少量(切碎)" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "白米加水煮成粥底",
      "魚柳蒸熟後拆碎,檢查冇魚骨",
      "加入粥中同菠菜碎,再煮5分鐘",
      "放涼至適合溫度",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "fish-porridge.jpg",
    tips: "第一次食新魚種要留意觀察過敏反應。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "veggie-omelette-01",
    title: "蔬菜煎蛋餅",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 15,
    ingredients: [
      { name: "雞蛋", amount: "1隻" },
      { name: "紅蘿蔔碎", amount: "1湯匙" },
      { name: "粟米粒", amount: "1湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "雞蛋打散,加入蔬菜碎拌勻",
      "平底鑊落少許油,細火煎至兩面金黃",
      "切成細塊方便小朋友食用",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "veggie-omelette.jpg",
    tips: "適合訓練小朋友用叉自己食嘅過渡期餐點。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "pear-puree-01",
    title: "梨蓉",
    stage: "4-6個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "雪梨", amount: "1個" }
    ],
    steps: [
      "雪梨去皮去芯,切小塊",
      "隔水蒸10分鐘至軟身",
      "壓成幼滑蓉狀"
    ],
    image: "pear-puree.jpg",
    tips: "梨質地爽口帶水份,亦有助BB腸道蠕動。"
  },
  {
    id: "papaya-puree-01",
    title: "木瓜蓉",
    stage: "4-6個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "熟木瓜", amount: "1/4個" }
    ],
    steps: [
      "木瓜去皮去籽",
      "用叉子壓成幼滑蓉狀",
      "如質地太稀可直接食用,唔需加水"
    ],
    image: "papaya-puree.jpg",
    tips: "木瓜天然軟身,亦有助消化,係好入口嘅入門水果。"
  },
  {
    id: "zucchini-puree-01",
    title: "翠玉瓜蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "翠玉瓜", amount: "1條" }
    ],
    steps: [
      "翠玉瓜去皮切塊",
      "隔水蒸10分鐘至軟身",
      "壓成蓉狀,質地天然幼滑"
    ],
    image: "zucchini-puree.jpg",
    tips: ""
  },
  {
    id: "pork-veg-broth-01",
    title: "瘦肉蔬菜湯水",
    stage: "6-9個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 40,
    ingredients: [
      { name: "瘦豬肉", amount: "50克" },
      { name: "紅蘿蔔", amount: "半條" },
      { name: "粟米", amount: "半條" },
      { name: "水", amount: "500毫升" }
    ],
    steps: [
      "瘦豬肉汆水去雜質",
      "紅蘿蔔、粟米切件",
      "全部材料加水,細火煲30分鐘",
      "隔渣,湯水放涼餵BB飲用(可連軟身蔬菜壓碎拌粥)"
    ],
    image: "pork-veg-broth.jpg",
    tips: "湯渣嘅蔬菜同肉都可以留返做拌飯／拌粥用,唔浪費。"
  },
  {
    id: "fish-veg-porridge-01",
    title: "魚片瘦肉粥",
    stage: "9-12個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["海鮮"],
    prep_time: 30,
    ingredients: [
      { name: "白米", amount: "1/4杯" },
      { name: "龍脷魚柳", amount: "40克" },
      { name: "瘦豬肉碎", amount: "20克" }
    ],
    steps: [
      "白米加水煮成粥底",
      "魚柳蒸熟拆碎、瘦肉碎煮熟",
      "加入粥中拌勻,再煮5分鐘",
      "放涼至適合溫度"
    ],
    image: "fish-veg-porridge.jpg",
    tips: ""
  },
  {
    id: "steamed-egg-01",
    title: "水蒸蛋",
    stage: "9-12個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 15,
    ingredients: [
      { name: "雞蛋", amount: "1隻" },
      { name: "温水", amount: "蛋液1.5倍量" }
    ],
    steps: [
      "雞蛋打散,加入温水拌勻(比例約1:1.5)",
      "隔篩去泡沫,倒入碗中",
      "碗面封保鮮紙,隔水蒸10-12分鐘至凝固",
      "放涼後切小塊"
    ],
    image: "steamed-egg.jpg",
    tips: "質地嫩滑,適合牙齒未長齊嘅BB。"
  },
  {
    id: "sweet-potato-fingers-01",
    title: "蕃薯條(手指食物)",
    stage: "9-12個月",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "蕃薯", amount: "1個" }
    ],
    steps: [
      "蕃薯去皮切成手指粗條狀",
      "隔水蒸15分鐘至軟身(用手指可以輕易捏扁嘅程度)",
      "放涼至適合溫度,方便BB自己拎住食"
    ],
    image: "sweet-potato-fingers.jpg",
    tips: "BLW經典入門食物,形狀方便小手抓握。"
  },
  {
    id: "mini-meatballs-01",
    title: "迷你雞肉丸",
    stage: "1-2歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 30,
    ingredients: [
      { name: "雞肉碎", amount: "100克" },
      { name: "雞蛋", amount: "1/4隻(蛋液)" },
      { name: "紅蘿蔔碎", amount: "1湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "雞肉碎加蛋液、紅蘿蔔碎拌勻",
      "搓成細細粒丸狀(方便一啖食)",
      "隔水蒸12-15分鐘至熟透",
      "放涼後檢查中心已全熟",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "mini-meatballs.jpg",
    tips: "可一次過整多啲,分格冷凍儲存,翻蒸即食好方便。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "veg-noodle-soup-01",
    title: "蔬菜碎肉湯麵",
    stage: "1-2歲",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["麩質"],
    prep_time: 20,
    ingredients: [
      { name: "幼滑麵條", amount: "適量" },
      { name: "瘦肉碎", amount: "30克" },
      { name: "菠菜碎", amount: "少量" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "麵條煮軟,剪短方便BB咀嚼",
      "瘦肉碎加水煮熟",
      "加入菠菜碎同麵條,略煮混合",
      "放涼至適合溫度",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "veg-noodle-soup.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "mini-pancakes-01",
    title: "迷你班戟(南瓜口味)",
    stage: "2-3歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋", "奶", "麩質"],
    prep_time: 20,
    ingredients: [
      { name: "低筋麵粉", amount: "半杯" },
      { name: "雞蛋", amount: "1隻" },
      { name: "南瓜蓉", amount: "3湯匙" },
      { name: "牛奶", amount: "1/4杯" }
    ],
    steps: [
      "所有材料拌勻成班戟糊",
      "平底鑊細火,倒入細份量煎成迷你班戟",
      "兩面煎至金黃色",
      "放涼切細,方便小朋友自己拎住食"
    ],
    image: "mini-pancakes.jpg",
    tips: "適合做週末早餐,小朋友都鍾意自己攞嚟食。"
  },
  {
    id: "family-fried-rice-01",
    title: "家庭雜菜炒飯(細細份)",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 20,
    ingredients: [
      { name: "白飯", amount: "半碗" },
      { name: "雞蛋", amount: "半隻" },
      { name: "粟米粒", amount: "1湯匙" },
      { name: "青豆", amount: "1湯匙" }
    ],
    steps: [
      "雞蛋打散,落鑊炒熟盛起",
      "白飯落鑊炒散,加入粟米、青豆",
      "拌入炒蛋,少許鹽調味(份量要清淡)",
      "放涼至適合溫度"
    ],
    image: "family-fried-rice.jpg",
    tips: "調味要格外清淡,幼兒腎臟仍在發育,鹽份攝取要控制。"
  },
  {
    id: "beef-veg-stew-01",
    title: "番茄薯仔炆牛肉粒",
    stage: "1-2歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 45,
    ingredients: [
      { name: "牛肉粒", amount: "80克" },
      { name: "番茄", amount: "1個" },
      { name: "薯仔", amount: "半個" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "牛肉粒汆水去雜質",
      "番茄切塊、薯仔去皮切小塊",
      "全部落鍋加水,細火炆30分鐘至軟腍",
      "上碟前用叉子略壓碎,方便幼兒咀嚼",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "beef-tomato-stew.jpg",
    tips: "牛肉係優質鐵質同蛋白質來源,炆得夠腍幼兒先咬得郁。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "tofu-veg-soup-01",
    title: "豆腐蔬菜羹",
    stage: "1-2歲",
    category: "湯水",
    g6pd_status: "caution",
    g6pd_note: "一般豆腐(黃豆製)非蠶豆製品,理論上安全;但如家中同時備有蠶豆相關製品,煮食時要留意器具分開,避免交叉沾染。",
    allergens: ["大豆"],
    prep_time: 20,
    ingredients: [
      { name: "嫩豆腐", amount: "1/4磚" },
      { name: "粟米粒", amount: "1湯匙" },
      { name: "菠菜碎", amount: "少量" }
    ],
    steps: [
      "豆腐切細粒",
      "水滾後加入粟米粒煮5分鐘",
      "加入豆腐粒同菠菜碎,再煮3分鐘",
      "放涼至適合溫度"
    ],
    image: "tofu-veg-soup.jpg",
    tips: "質地軟滑,適合牙齒仲未長齊嘅幼兒。"
  },
  {
    id: "mini-burger-01",
    title: "迷你雞肉漢堡扒(細細份)",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋", "麩質"],
    prep_time: 30,
    ingredients: [
      { name: "雞肉碎", amount: "100克" },
      { name: "麵包糠", amount: "2湯匙" },
      { name: "雞蛋", amount: "1/4隻(蛋液)" },
      { name: "迷你餐包", amount: "2個" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "雞肉碎加麵包糠、蛋液拌勻,搓成細扒狀",
      "平底鑊細火煎至兩面金黃、中心熟透",
      "夾入迷你餐包,可加少量生菜絲",
      "切半方便小朋友入口",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "mini-chicken-burger.jpg",
    tips: "週末可以同小朋友一齊整,增加佢對食物嘅興趣。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "veg-fried-noodles-01",
    title: "幼蛋麵炒雜菜(細細份)",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋", "麩質"],
    prep_time: 20,
    ingredients: [
      { name: "幼蛋麵", amount: "1小份" },
      { name: "椰菜絲", amount: "2湯匙" },
      { name: "紅蘿蔔絲", amount: "1湯匙" }
    ],
    steps: [
      "幼蛋麵煮軟,過冷河瀝乾",
      "蔬菜絲落鑊略炒軟身",
      "加入麵條同炒,少許鹽調味(清淡為主)",
      "剪短方便幼兒咀嚼"
    ],
    image: "veg-fried-noodles.jpg",
    tips: ""
  },
  {
    id: "cheese-veg-muffin-01",
    title: "芝士蔬菜小鬆餅",
    stage: "2-3歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋", "奶", "麩質"],
    prep_time: 30,
    ingredients: [
      { name: "低筋麵粉", amount: "1杯" },
      { name: "雞蛋", amount: "1隻" },
      { name: "碎芝士", amount: "2湯匙" },
      { name: "粟米粒/紅蘿蔔碎", amount: "共3湯匙" }
    ],
    steps: [
      "所有材料拌勻成麵糊",
      "倒入迷你鬆餅模",
      "焗爐180度焗15-18分鐘至熟透金黃",
      "放涼後脫模,方便小朋友自己拎住食"
    ],
    image: "cheese-veg-muffin.jpg",
    tips: "可一次過整多啲,密封冷藏,翻熱即食,做lunch box好方便。"
  },
  {
    id: "shrimp-veg-rice-01",
    title: "蝦仁炒蛋滑蛋飯",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋", "海鮮"],
    prep_time: 20,
    ingredients: [
      { name: "蝦仁", amount: "50克(切碎)" },
      { name: "雞蛋", amount: "1隻" },
      { name: "白飯", amount: "半碗" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "蝦仁切碎汆水至熟",
      "雞蛋打散,細火炒至半凝固滑蛋狀",
      "拌入蝦仁碎同白飯",
      "略為攤涼至適合溫度",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "shrimp-egg-rice.jpg",
    tips: "第一次食蝦要留意觀察過敏反應,建議單獨試食1-2日先混入正餐。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "banana-oat-pancake-01",
    title: "香蕉燕麥班戟(免額外加糖)",
    stage: "1-2歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 15,
    ingredients: [
      { name: "熟香蕉", amount: "1隻" },
      { name: "燕麥片", amount: "半杯" },
      { name: "雞蛋", amount: "1隻" }
    ],
    steps: [
      "香蕉用叉壓成蓉",
      "加入燕麥片同雞蛋拌勻成糊狀",
      "平底鑊細火,舀入細份量煎至兩面金黃",
      "放涼切細塊"
    ],
    image: "banana-oat-pancake.jpg",
    tips: "天然香蕉甜味已經足夠,唔需要額外加糖,適合訓練小朋友接受原味。"
  },
  {
    id: "mango-puree-01",
    title: "芒果蓉",
    stage: "4-6個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "熟芒果", amount: "半個" }
    ],
    steps: [
      "芒果去皮去核,取肉",
      "用叉子壓成幼滑蓉狀",
      "如太稀身可隔篩去纖維"
    ],
    image: "mango-puree.jpg",
    tips: ""
  },
  {
    id: "peach-puree-01",
    title: "蜜桃蓉",
    stage: "4-6個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 10,
    ingredients: [
      { name: "熟蜜桃", amount: "1個" }
    ],
    steps: [
      "蜜桃去皮去核切塊",
      "隔水蒸5分鐘至軟身",
      "壓成幼滑蓉狀"
    ],
    image: "peach-puree.jpg",
    tips: ""
  },
  {
    id: "plum-puree-01",
    title: "布冧蓉",
    stage: "6-9個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 10,
    ingredients: [
      { name: "熟布冧", amount: "2個" }
    ],
    steps: [
      "布冧去皮去核切塊",
      "隔水蒸5-8分鐘至軟身",
      "壓成蓉狀,可隔篩去皮渣"
    ],
    image: "plum-puree.jpg",
    tips: ""
  },
  {
    id: "kiwi-puree-01",
    title: "奇異果蓉",
    stage: "6-9個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "熟奇異果", amount: "1個" }
    ],
    steps: [
      "奇異果去皮",
      "用叉子壓成蓉狀",
      "可隔篩去籽以防刺激"
    ],
    image: "kiwi-puree.jpg",
    tips: "味道偏酸,可混合香蕉蓉調和口味。"
  },
  {
    id: "watermelon-puree-01",
    title: "西瓜蓉",
    stage: "6-9個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "西瓜肉", amount: "100克" }
    ],
    steps: [
      "西瓜去籽切塊",
      "用叉子壓成蓉狀或用攪拌機打幼滑",
      "隔篩去多餘水份"
    ],
    image: "watermelon-puree.jpg",
    tips: ""
  },
  {
    id: "cantaloupe-puree-01",
    title: "蜜瓜蓉",
    stage: "6-9個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "蜜瓜肉", amount: "100克" }
    ],
    steps: [
      "蜜瓜去籽切塊",
      "用叉子壓成幼滑蓉狀"
    ],
    image: "cantaloupe-puree.jpg",
    tips: ""
  },
  {
    id: "orange-segments-01",
    title: "橙蓉",
    stage: "9-12個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 8,
    ingredients: [
      { name: "橙", amount: "1個" }
    ],
    steps: [
      "橙去皮去籽去筋膜",
      "切成細塊或壓成蓉",
      "第一次試食建議少量,留意酸味反應"
    ],
    image: "orange-segments.jpg",
    tips: ""
  },
  {
    id: "persimmon-puree-01",
    title: "柿子蓉",
    stage: "9-12個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "熟柿子", amount: "半個" }
    ],
    steps: [
      "柿子去皮去籽",
      "用叉子壓成幼滑蓉狀"
    ],
    image: "persimmon-puree.jpg",
    tips: "揀熟透軟身嘅柿子,澀味較輕。"
  },
  {
    id: "dragonfruit-puree-01",
    title: "火龍果蓉",
    stage: "6-9個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "紅肉火龍果", amount: "半個" }
    ],
    steps: [
      "火龍果去皮取肉",
      "用叉子壓成蓉狀"
    ],
    image: "dragonfruit-puree.jpg",
    tips: "紅肉火龍果可能令大便呈紅色,屬正常現象。"
  },
  {
    id: "apricot-puree-01",
    title: "杏脯蓉",
    stage: "6-9個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 10,
    ingredients: [
      { name: "新鮮杏脯", amount: "3個" }
    ],
    steps: [
      "杏脯去核切塊",
      "隔水蒸8分鐘至軟身",
      "壓成幼滑蓉狀"
    ],
    image: "apricot-puree.jpg",
    tips: ""
  },
  {
    id: "guava-puree-01",
    title: "番石榴蓉",
    stage: "9-12個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 10,
    ingredients: [
      { name: "熟番石榴", amount: "半個" }
    ],
    steps: [
      "番石榴去籽切塊",
      "隔水蒸5分鐘軟化",
      "打成蓉再隔篩去籽渣"
    ],
    image: "guava-puree.jpg",
    tips: ""
  },
  {
    id: "pineapple-puree-01",
    title: "菠蘿蓉",
    stage: "9-12個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 10,
    ingredients: [
      { name: "菠蘿肉", amount: "100克" }
    ],
    steps: [
      "菠蘿切塊,隔水蒸8分鐘軟化(減低酸澀刺激)",
      "壓成或打成蓉狀"
    ],
    image: "pineapple-puree.jpg",
    tips: "酸性較強,建議先蒸軟先試食,少量開始。"
  },
  {
    id: "grape-puree-01",
    title: "提子蓉",
    stage: "9-12個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 8,
    ingredients: [
      { name: "提子", amount: "8-10粒" }
    ],
    steps: [
      "提子去皮去籽(必須徹底去核去皮以防哽塞)",
      "用叉子壓成蓉狀"
    ],
    image: "grape-puree.jpg",
    tips: "整粒提子係幼兒哽塞高風險食物,務必去皮去籽並壓碎。"
  },
  {
    id: "strawberry-puree-01",
    title: "士多啤梨蓉",
    stage: "9-12個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "熟士多啤梨", amount: "6-8粒" }
    ],
    steps: [
      "士多啤梨去蒂洗淨",
      "用叉子壓成蓉狀或打成幼滑蓉"
    ],
    image: "strawberry-puree.jpg",
    tips: "第一次試食建議少量,觀察有否皮膚敏感反應。"
  },
  {
    id: "blueberry-puree-01",
    title: "藍莓蓉",
    stage: "9-12個月",
    category: "水果泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 8,
    ingredients: [
      { name: "藍莓", amount: "1/3杯" }
    ],
    steps: [
      "藍莓洗淨,隔水蒸5分鐘軟化",
      "用叉子壓碎或打成蓉狀"
    ],
    image: "blueberry-puree.jpg",
    tips: ""
  },
  {
    id: "broccoli-puree-01",
    title: "西蘭花蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "西蘭花", amount: "1小棵" }
    ],
    steps: [
      "西蘭花切小朵洗淨",
      "隔水蒸10分鐘至軟身",
      "壓成或打成幼滑蓉狀"
    ],
    image: "broccoli-puree.jpg",
    tips: ""
  },
  {
    id: "cauliflower-puree-01",
    title: "椰菜花蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "椰菜花", amount: "1小棵" }
    ],
    steps: [
      "椰菜花切小朵洗淨",
      "隔水蒸10-12分鐘至軟身",
      "打成幼滑蓉狀"
    ],
    image: "cauliflower-puree.jpg",
    tips: ""
  },
  {
    id: "potato-puree-01",
    title: "薯仔蓉",
    stage: "4-6個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "薯仔", amount: "1個" }
    ],
    steps: [
      "薯仔去皮切塊",
      "隔水蒸15分鐘至軟腍",
      "壓成幼滑蓉狀,可加少量母乳調較"
    ],
    image: "potato-puree.jpg",
    tips: ""
  },
  {
    id: "green-pea-puree-01",
    title: "青豆蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "青豆(豌豆)並非蠶豆,兩者品種不同,一般屬安全食材。",
    allergens: [],
    prep_time: 12,
    ingredients: [
      { name: "青豆", amount: "半杯" }
    ],
    steps: [
      "青豆解凍或用新鮮豆",
      "隔水蒸8分鐘至軟身",
      "打成幼滑蓉狀,可隔篩去豆皮"
    ],
    image: "green-pea-puree.jpg",
    tips: ""
  },
  {
    id: "tomato-puree-01",
    title: "蕃茄蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 12,
    ingredients: [
      { name: "熟蕃茄", amount: "1個" }
    ],
    steps: [
      "蕃茄底部劃十字,滾水燙10秒去皮",
      "去籽切塊,隔水蒸5分鐘",
      "壓成蓉狀"
    ],
    image: "tomato-puree.jpg",
    tips: ""
  },
  {
    id: "spinach-puree-01",
    title: "菠菜蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 10,
    ingredients: [
      { name: "菠菜", amount: "1紮(小)" }
    ],
    steps: [
      "菠菜洗淨,滾水灼2分鐘",
      "隔水瀝乾,打成幼滑蓉狀"
    ],
    image: "spinach-puree.jpg",
    tips: "建議混合其他蔬果泥一齊食,單一菠菜味道較澀。"
  },
  {
    id: "asparagus-puree-01",
    title: "露筍蓉",
    stage: "9-12個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "露筍", amount: "6條" }
    ],
    steps: [
      "露筍削去底部硬皮",
      "隔水蒸10分鐘至軟身",
      "打成幼滑蓉狀"
    ],
    image: "asparagus-puree.jpg",
    tips: ""
  },
  {
    id: "chayote-puree-01",
    title: "節瓜蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "節瓜", amount: "1條" }
    ],
    steps: [
      "節瓜去皮切塊",
      "隔水蒸10分鐘至軟身",
      "壓成幼滑蓉狀"
    ],
    image: "chayote-puree.jpg",
    tips: ""
  },
  {
    id: "corn-puree-01",
    title: "粟米蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "粟米", amount: "1條" }
    ],
    steps: [
      "粟米刨粒,隔水蒸10分鐘",
      "打成蓉後隔篩去外皮渣(粟米皮較難消化)"
    ],
    image: "corn-puree.jpg",
    tips: ""
  },
  {
    id: "bell-pepper-puree-01",
    title: "甜椒蓉",
    stage: "9-12個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "甜椒(紅/黃)", amount: "半個" }
    ],
    steps: [
      "甜椒去籽切塊",
      "隔水蒸10分鐘至軟身",
      "打成幼滑蓉狀"
    ],
    image: "bell-pepper-puree.jpg",
    tips: ""
  },
  {
    id: "winter-melon-puree-01",
    title: "冬瓜蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "冬瓜", amount: "150克" }
    ],
    steps: [
      "冬瓜去皮去籽切塊",
      "隔水蒸12分鐘至軟身",
      "壓成蓉狀"
    ],
    image: "winter-melon-puree.jpg",
    tips: ""
  },
  {
    id: "napa-cabbage-puree-01",
    title: "娃娃菜蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 12,
    ingredients: [
      { name: "娃娃菜", amount: "3片" }
    ],
    steps: [
      "娃娃菜洗淨切段",
      "隔水蒸8分鐘至軟身",
      "打成幼滑蓉狀"
    ],
    image: "napa-cabbage-puree.jpg",
    tips: ""
  },
  {
    id: "daikon-puree-01",
    title: "白蘿蔔蓉",
    stage: "9-12個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 18,
    ingredients: [
      { name: "白蘿蔔", amount: "150克" }
    ],
    steps: [
      "白蘿蔔去皮切塊",
      "隔水蒸15分鐘至軟腍",
      "壓成蓉狀"
    ],
    image: "daikon-puree.jpg",
    tips: ""
  },
  {
    id: "lotus-root-puree-01",
    title: "蓮藕蓉",
    stage: "9-12個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "蓮藕", amount: "1小節" }
    ],
    steps: [
      "蓮藕去皮切片",
      "隔水蒸15分鐘至軟身",
      "打成幼滑蓉狀,可隔篩去纖維"
    ],
    image: "lotus-root-puree.jpg",
    tips: ""
  },
  {
    id: "yam-puree-01",
    title: "淮山蓉",
    stage: "9-12個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "淮山(山藥)", amount: "150克" }
    ],
    steps: [
      "淮山去皮切塊(建議戴手套處理,黏液可能刺激皮膚)",
      "隔水蒸15分鐘至軟身",
      "壓成蓉狀"
    ],
    image: "yam-puree.jpg",
    tips: ""
  },
  {
    id: "chayote-fairy-puree-01",
    title: "合掌瓜蓉",
    stage: "6-9個月",
    category: "蔬菜泥",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "合掌瓜", amount: "1個" }
    ],
    steps: [
      "合掌瓜去皮去核切塊",
      "隔水蒸12分鐘至軟身",
      "壓成幼滑蓉狀"
    ],
    image: "chayote-fairy-puree.jpg",
    tips: ""
  },
  {
    id: "pork-puree-01",
    title: "豬肉蓉",
    stage: "6-9個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "瘦豬肉", amount: "50克" }
    ],
    steps: [
      "豬肉切小塊,汆水去雜質",
      "加水煮15分鐘至熟透",
      "連少量湯水打成幼滑蓉狀"
    ],
    image: "pork-puree.jpg",
    tips: ""
  },
  {
    id: "beef-puree-01",
    title: "牛肉蓉",
    stage: "6-9個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "瘦牛肉", amount: "50克" }
    ],
    steps: [
      "牛肉切小塊,汆水去雜質",
      "加水煮20分鐘至軟腍",
      "連湯水打成幼滑蓉狀"
    ],
    image: "beef-puree.jpg",
    tips: "牛肉鐵質豐富,係嬰幼兒補鐵嘅重要來源。"
  },
  {
    id: "turkey-puree-01",
    title: "火雞肉蓉",
    stage: "6-9個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "火雞胸肉", amount: "50克" }
    ],
    steps: [
      "火雞肉切小塊煮熟",
      "連少量湯水打成幼滑蓉狀"
    ],
    image: "turkey-puree.jpg",
    tips: "火雞肉脂肪較低,係雞肉以外嘅另一選擇。"
  },
  {
    id: "chicken-liver-puree-01",
    title: "雞肝蓉",
    stage: "9-12個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "雞肝", amount: "30克" }
    ],
    steps: [
      "雞肝洗淨浸走血水,汆水",
      "加水煮10分鐘至熟透",
      "打成幼滑蓉狀"
    ],
    image: "chicken-liver-puree.jpg",
    tips: "肝臟含豐富鐵質同維他命A,每星期食用1-2次已足夠。"
  },
  {
    id: "steamed-meat-patty-01",
    title: "蒸肉餅",
    stage: "9-12個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "豬肉碎", amount: "80克" },
      { name: "馬蹄碎", amount: "1湯匙" }
    ],
    steps: [
      "豬肉碎加馬蹄碎拌勻,順一方向攪至起膠",
      "壓平放碗中",
      "隔水蒸12-15分鐘至熟透"
    ],
    image: "steamed-meat-patty.jpg",
    tips: ""
  },
  {
    id: "tomato-meatballs-01",
    title: "蕃茄牛肉丸",
    stage: "1-2歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 30,
    ingredients: [
      { name: "牛肉碎", amount: "100克" },
      { name: "蕃茄", amount: "1個" },
      { name: "雞蛋", amount: "1/4隻" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "牛肉碎加蛋液拌勻搓成小丸",
      "蕃茄切塊煮成醬汁",
      "肉丸落蕃茄醬汁中煮15分鐘至熟透",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "tomato-meatballs.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "steamed-chicken-shreds-01",
    title: "蒸雞胸絲",
    stage: "9-12個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "雞胸肉", amount: "80克" }
    ],
    steps: [
      "雞胸肉隔水蒸15分鐘至熟透",
      "放涼後用手撕成幼絲",
      "方便幼兒練習咀嚼"
    ],
    image: "steamed-chicken-shreds.jpg",
    tips: ""
  },
  {
    id: "beef-potato-stew-01",
    title: "薯仔燴牛肉",
    stage: "1-2歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 40,
    ingredients: [
      { name: "牛肉粒", amount: "80克" },
      { name: "薯仔", amount: "1個" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "牛肉粒汆水,薯仔去皮切塊",
      "全部加水,細火炆25分鐘至軟腍",
      "上碟前略壓碎",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "beef-potato-stew.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "carrot-pork-patty-01",
    title: "紅蘿蔔豬肉餅",
    stage: "1-2歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "豬肉碎", amount: "100克" },
      { name: "紅蘿蔔碎", amount: "2湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "豬肉碎加紅蘿蔔碎拌勻,搓成小餅狀",
      "隔水蒸15分鐘至熟透",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "carrot-pork-patty.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "steamed-egg-pork-01",
    title: "蒸水蛋豬肉餅",
    stage: "9-12個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 20,
    ingredients: [
      { name: "豬肉碎", amount: "50克" },
      { name: "雞蛋", amount: "1隻" }
    ],
    steps: [
      "豬肉碎鋪底,隔水蒸8分鐘半熟",
      "雞蛋打散加温水拌勻,倒喺肉碎面",
      "再蒸8-10分鐘至蛋液凝固"
    ],
    image: "steamed-egg-pork.jpg",
    tips: ""
  },
  {
    id: "sweet-potato-pork-puree-01",
    title: "蕃薯豬肉蓉",
    stage: "6-9個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "蕃薯", amount: "半個" },
      { name: "豬肉碎", amount: "30克" }
    ],
    steps: [
      "蕃薯蒸軟,豬肉碎煮熟",
      "兩者混合打成幼滑蓉狀"
    ],
    image: "sweet-potato-pork-puree.jpg",
    tips: ""
  },
  {
    id: "tri-color-chicken-dice-01",
    title: "三色雞肉丁",
    stage: "1-2歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "雞胸肉", amount: "80克" },
      { name: "粟米粒", amount: "1湯匙" },
      { name: "紅蘿蔔粒", amount: "1湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "雞胸肉切細粒,汆水",
      "加入粟米、紅蘿蔔粒同煮10分鐘至全熟",
      "放涼至適合溫度",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "tri-color-chicken-dice.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "mini-pork-balls-01",
    title: "迷你豬肉丸",
    stage: "1-2歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 30,
    ingredients: [
      { name: "豬肉碎", amount: "100克" },
      { name: "雞蛋", amount: "1/4隻" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "豬肉碎加蛋液拌勻,搓成細丸",
      "隔水蒸12-15分鐘至熟透",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "mini-pork-balls.jpg",
    tips: "可預先做多啲冷凍儲存。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "garlic-chicken-strips-01",
    title: "蒜香雞柳條",
    stage: "2-3歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "雞胸肉", amount: "100克" },
      { name: "蒜蓉", amount: "少許" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "雞胸肉切條,用少許蒜蓉略醃",
      "平底鑊少油煎至兩面金黃熟透",
      "切細方便幼兒進食",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "garlic-chicken-strips.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "steamed-fish-cake-01",
    title: "蒸魚餅",
    stage: "1-2歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["海鮮"],
    prep_time: 25,
    ingredients: [
      { name: "龍脷魚肉", amount: "100克" },
      { name: "馬蹄碎", amount: "1湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "魚肉打成蓉,加馬蹄碎拌勻",
      "壓平放碗中,隔水蒸12分鐘至熟透",
      "放涼切小塊",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "steamed-fish-cake.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "shrimp-egg-custard-01",
    title: "蝦滑蒸蛋",
    stage: "1-2歲",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋","海鮮"],
    prep_time: 20,
    ingredients: [
      { name: "蝦仁", amount: "40克" },
      { name: "雞蛋", amount: "1隻" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "蝦仁剁碎,雞蛋打散加温水拌勻",
      "蝦滑拌入蛋液中",
      "隔水蒸10-12分鐘至凝固",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "shrimp-egg-custard.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "pork-liver-puree-01",
    title: "豬肝蓉",
    stage: "9-12個月",
    category: "肉類",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "豬肝", amount: "30克" }
    ],
    steps: [
      "豬肝浸走血水,汆水",
      "加水煮10分鐘至熟透",
      "打成幼滑蓉狀"
    ],
    image: "pork-liver-puree.jpg",
    tips: "補鐵好選擇,每星期1-2次已足夠,唔需要天天食。"
  },
  {
    id: "salmon-veg-congee-01",
    title: "三文魚蔬菜粥",
    stage: "9-12個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["海鮮"],
    prep_time: 30,
    ingredients: [
      { name: "白米", amount: "1/4杯" },
      { name: "三文魚", amount: "40克" },
      { name: "菠菜碎", amount: "少量" }
    ],
    steps: [
      "白米加水煮成粥底",
      "三文魚蒸熟拆碎,檢查無魚骨",
      "加入粥中同菠菜碎,再煮5分鐘"
    ],
    image: "salmon-veg-congee.jpg",
    tips: "第一次食三文魚要留意過敏反應。"
  },
  {
    id: "chicken-veg-congee-01",
    title: "雞蓉蔬菜粥",
    stage: "9-12個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "白米", amount: "1/4杯" },
      { name: "雞胸肉碎", amount: "30克" },
      { name: "紅蘿蔔碎", amount: "1湯匙" }
    ],
    steps: [
      "白米加水煮成粥底",
      "雞胸肉碎煮熟拌入",
      "加紅蘿蔔碎同煮5分鐘"
    ],
    image: "chicken-veg-congee.jpg",
    tips: ""
  },
  {
    id: "millet-sweet-potato-congee-01",
    title: "蕃薯小米粥",
    stage: "6-9個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "小米", amount: "1/4杯" },
      { name: "蕃薯", amount: "半個" }
    ],
    steps: [
      "小米洗淨加水煮20分鐘",
      "蕃薯去皮切粒同煮至軟腍",
      "壓碎至適合質地"
    ],
    image: "millet-sweet-potato-congee.jpg",
    tips: ""
  },
  {
    id: "tomato-potato-rice-01",
    title: "番茄薯仔飯",
    stage: "1-2歲",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "白飯", amount: "半碗" },
      { name: "番茄", amount: "1個" },
      { name: "薯仔", amount: "半個" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "番茄薯仔切粒,加水煮成軟身醬汁",
      "拌入白飯略煮5分鐘",
      "放涼至適合溫度",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "tomato-potato-rice.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "quinoa-veg-congee-01",
    title: "藜麥蔬菜粥",
    stage: "9-12個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "藜麥", amount: "2湯匙" },
      { name: "白米", amount: "2湯匙" },
      { name: "什菜碎", amount: "適量" }
    ],
    steps: [
      "藜麥洗淨(去除天然苦味外皮)",
      "同白米加水煮成粥狀",
      "加入什菜碎同煮5分鐘"
    ],
    image: "quinoa-veg-congee.jpg",
    tips: "藜麥係優質蛋白質嘅穀物來源。"
  },
  {
    id: "red-rice-veg-congee-01",
    title: "紅米蔬菜粥",
    stage: "9-12個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 35,
    ingredients: [
      { name: "紅米", amount: "1/4杯" },
      { name: "什菜碎", amount: "適量" }
    ],
    steps: [
      "紅米浸泡30分鐘,加水煮30分鐘至軟身",
      "加入什菜碎同煮5分鐘",
      "壓碎至適合質地"
    ],
    image: "red-rice-veg-congee.jpg",
    tips: ""
  },
  {
    id: "millet-pumpkin-congee-01",
    title: "南瓜小米粥",
    stage: "6-9個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "小米", amount: "1/4杯" },
      { name: "南瓜", amount: "100克" }
    ],
    steps: [
      "小米加水煮20分鐘",
      "南瓜蒸軟後加入拌勻",
      "壓成適合質地"
    ],
    image: "millet-pumpkin-congee.jpg",
    tips: ""
  },
  {
    id: "yam-chestnut-congee-01",
    title: "淮山栗子粥",
    stage: "1-2歲",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 35,
    ingredients: [
      { name: "白米", amount: "1/4杯" },
      { name: "淮山", amount: "50克" },
      { name: "栗子", amount: "5粒(去殼)" }
    ],
    steps: [
      "栗子蒸熟壓碎",
      "白米加水煮成粥底,加入淮山粒煮至軟身",
      "拌入栗子碎再煮5分鐘"
    ],
    image: "yam-chestnut-congee.jpg",
    tips: ""
  },
  {
    id: "mushroom-chicken-congee-01",
    title: "香菇雞肉粥",
    stage: "1-2歲",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "白米", amount: "1/4杯" },
      { name: "雞肉碎", amount: "40克" },
      { name: "冬菇", amount: "2朵(切碎)" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "白米加水煮成粥底",
      "雞肉碎同冬菇碎煮熟",
      "拌入粥中再煮5分鐘",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "mushroom-chicken-congee.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "chayote-pork-congee-01",
    title: "節瓜肉碎粥",
    stage: "9-12個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "白米", amount: "1/4杯" },
      { name: "節瓜", amount: "半條" },
      { name: "豬肉碎", amount: "30克" }
    ],
    steps: [
      "白米加水煮成粥底",
      "節瓜去皮切粒、豬肉碎煮熟",
      "拌入粥中再煮5分鐘"
    ],
    image: "chayote-pork-congee.jpg",
    tips: ""
  },
  {
    id: "sweet-potato-vermicelli-01",
    title: "蕃薯米粉",
    stage: "9-12個月",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "米粉", amount: "小份" },
      { name: "蕃薯蓉", amount: "2湯匙" }
    ],
    steps: [
      "米粉煮軟,剪短方便進食",
      "拌入蕃薯蓉增添味道同營養"
    ],
    image: "sweet-potato-vermicelli.jpg",
    tips: ""
  },
  {
    id: "wholemeal-pasta-tomato-01",
    title: "全麥意粉蕃茄肉醬",
    stage: "2-3歲",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["麩質"],
    prep_time: 30,
    ingredients: [
      { name: "全麥意粉", amount: "小份" },
      { name: "牛肉碎", amount: "50克" },
      { name: "番茄", amount: "1個" }
    ],
    steps: [
      "意粉煮軟剪短",
      "牛肉碎同番茄煮成醬汁(清淡調味)",
      "拌入意粉中"
    ],
    image: "wholemeal-pasta-tomato.jpg",
    tips: ""
  },
  {
    id: "tri-color-quinoa-rice-01",
    title: "三色藜麥飯",
    stage: "2-3歲",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "藜麥", amount: "2湯匙" },
      { name: "白飯", amount: "半碗" },
      { name: "什菜粒", amount: "適量" }
    ],
    steps: [
      "藜麥同白米一齊煮熟",
      "加入什菜粒拌炒",
      "清淡調味即可"
    ],
    image: "tri-color-quinoa-rice.jpg",
    tips: ""
  },
  {
    id: "mushroom-chicken-rice-01",
    title: "冬菇雞肉飯",
    stage: "2-3歲",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "白飯", amount: "半碗" },
      { name: "雞肉粒", amount: "50克" },
      { name: "冬菇", amount: "2朵" }
    ],
    steps: [
      "冬菇浸軟切粒,雞肉粒煮熟",
      "同白飯拌炒,清淡調味",
      "放涼至適合溫度"
    ],
    image: "mushroom-chicken-rice.jpg",
    tips: ""
  },
  {
    id: "cheese-baked-potato-mash-01",
    title: "芝士焗薯蓉",
    stage: "2-3歲",
    category: "主食",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["奶"],
    prep_time: 30,
    ingredients: [
      { name: "薯仔", amount: "2個" },
      { name: "芝士碎", amount: "2湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "薯仔蒸軟壓成蓉",
      "放入焗碗,面層灑芝士碎",
      "焗爐200度焗8-10分鐘至芝士融化金黃",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "cheese-baked-potato-mash.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "corn-pork-soup-01",
    title: "粟米瘦肉湯",
    stage: "6-9個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 40,
    ingredients: [
      { name: "粟米", amount: "1條" },
      { name: "瘦豬肉", amount: "50克" },
      { name: "水", amount: "500毫升" }
    ],
    steps: [
      "瘦豬肉汆水",
      "粟米切段,同瘦肉加水煲30分鐘",
      "隔渣,湯水放涼餵食"
    ],
    image: "corn-pork-soup.jpg",
    tips: ""
  },
  {
    id: "apple-pear-soup-01",
    title: "蘋果雪梨湯",
    stage: "6-9個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "蘋果", amount: "1個" },
      { name: "雪梨", amount: "1個" }
    ],
    steps: [
      "蘋果雪梨去皮去芯切塊",
      "加水煲20分鐘至軟身",
      "隔渣飲湯水,果肉可壓成蓉一齊食"
    ],
    image: "apple-pear-soup.jpg",
    tips: ""
  },
  {
    id: "seaweed-egg-soup-01",
    title: "紫菜蛋花湯",
    stage: "9-12個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 15,
    ingredients: [
      { name: "紫菜", amount: "少許" },
      { name: "雞蛋", amount: "半隻" }
    ],
    steps: [
      "水煮滾,加入紫菜",
      "蛋液慢慢淋入,輕輕攪拌成蛋花",
      "放涼至適合溫度"
    ],
    image: "seaweed-egg-soup.jpg",
    tips: ""
  },
  {
    id: "tomato-potato-soup-01",
    title: "番茄薯仔湯",
    stage: "6-9個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "番茄", amount: "1個" },
      { name: "薯仔", amount: "半個" }
    ],
    steps: [
      "番茄薯仔切塊",
      "加水煲20分鐘至軟身",
      "隔渣或連渣一齊打成濃湯"
    ],
    image: "tomato-potato-soup.jpg",
    tips: ""
  },
  {
    id: "chayote-pork-soup-01",
    title: "節瓜瘦肉湯",
    stage: "6-9個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 35,
    ingredients: [
      { name: "節瓜", amount: "1條" },
      { name: "瘦豬肉", amount: "50克" }
    ],
    steps: [
      "瘦肉汆水,節瓜去皮切塊",
      "加水煲25分鐘",
      "隔渣飲湯水"
    ],
    image: "chayote-pork-soup.jpg",
    tips: ""
  },
  {
    id: "yam-lotus-seed-soup-01",
    title: "淮山蓮子湯",
    stage: "1-2歲",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 40,
    ingredients: [
      { name: "淮山", amount: "50克" },
      { name: "蓮子", amount: "10粒(去芯)" }
    ],
    steps: [
      "蓮子浸軟去芯(以防苦澀)",
      "同淮山加水煲30分鐘至軟身",
      "可連渣一齊食用"
    ],
    image: "yam-lotus-seed-soup.jpg",
    tips: ""
  },
  {
    id: "kudzu-root-soup-01",
    title: "粉葛湯",
    stage: "1-2歲",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 45,
    ingredients: [
      { name: "粉葛", amount: "200克" },
      { name: "瘦豬肉", amount: "50克" }
    ],
    steps: [
      "粉葛去皮切塊,瘦肉汆水",
      "加水煲35分鐘至軟身",
      "隔渣飲湯水"
    ],
    image: "kudzu-root-soup.jpg",
    tips: ""
  },
  {
    id: "daikon-soup-01",
    title: "白蘿蔔湯",
    stage: "9-12個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "白蘿蔔", amount: "150克" },
      { name: "瘦豬肉", amount: "30克" }
    ],
    steps: [
      "白蘿蔔去皮切塊,瘦肉汆水",
      "加水煲20分鐘至軟身",
      "隔渣或壓碎一齊食用"
    ],
    image: "daikon-soup.jpg",
    tips: ""
  },
  {
    id: "cabbage-soup-01",
    title: "椰菜湯",
    stage: "6-9個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "椰菜", amount: "3塊" }
    ],
    steps: [
      "椰菜洗淨切塊",
      "加水煲15分鐘至軟身",
      "隔渣飲湯水,菜可壓碎拌入粥"
    ],
    image: "cabbage-soup.jpg",
    tips: ""
  },
  {
    id: "walnut-papaya-soup-01",
    title: "合桃木瓜湯",
    stage: "1-2歲",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["堅果"],
    prep_time: 35,
    ingredients: [
      { name: "木瓜", amount: "半個" },
      { name: "合桃", amount: "5粒" }
    ],
    steps: [
      "合桃略烘香,木瓜去皮去籽切塊",
      "加水煲25分鐘至軟身",
      "隔渣飲湯,果肉可壓碎"
    ],
    image: "walnut-papaya-soup.jpg",
    tips: "第一次食堅果類要留意過敏反應。"
  },
  {
    id: "carrot-corn-soup-01",
    title: "紅蘿蔔粟米湯",
    stage: "6-9個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 35,
    ingredients: [
      { name: "紅蘿蔔", amount: "1條" },
      { name: "粟米", amount: "1條" }
    ],
    steps: [
      "紅蘿蔔粟米切件",
      "加水煲25分鐘至軟身",
      "隔渣飲湯,蔬菜可壓碎拌食"
    ],
    image: "carrot-corn-soup.jpg",
    tips: ""
  },
  {
    id: "winter-melon-barley-soup-01",
    title: "冬瓜薏米湯",
    stage: "1-2歲",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 45,
    ingredients: [
      { name: "冬瓜", amount: "200克" },
      { name: "薏米", amount: "2湯匙" }
    ],
    steps: [
      "薏米浸泡1小時",
      "冬瓜去皮切塊,同薏米加水煲35分鐘",
      "隔渣飲湯水"
    ],
    image: "winter-melon-barley-soup.jpg",
    tips: ""
  },
  {
    id: "napa-cabbage-soup-01",
    title: "娃娃菜湯",
    stage: "6-9個月",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "娃娃菜", amount: "4片" }
    ],
    steps: [
      "娃娃菜洗淨切段",
      "加水煲15分鐘至軟身",
      "隔渣飲湯,菜可壓碎拌食"
    ],
    image: "napa-cabbage-soup.jpg",
    tips: ""
  },
  {
    id: "kelp-tofu-soup-01",
    title: "海帶豆腐湯",
    stage: "1-2歲",
    category: "湯水",
    g6pd_status: "caution",
    g6pd_note: "豆腐(黃豆製)非蠶豆製品,一般屬安全食材;如對交叉沾染有疑慮可與家中蠶豆製品分開器具處理。",
    allergens: ["大豆"],
    prep_time: 25,
    ingredients: [
      { name: "海帶", amount: "少許" },
      { name: "嫩豆腐", amount: "1/4磚" }
    ],
    steps: [
      "海帶浸軟切碎",
      "加水煲15分鐘,加入豆腐粒再煮5分鐘",
      "放涼至適合溫度"
    ],
    image: "kelp-tofu-soup.jpg",
    tips: ""
  },
  {
    id: "chayote-soybean-sprout-soup-01",
    title: "節瓜大豆芽湯",
    stage: "1-2歲",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["大豆"],
    prep_time: 35,
    ingredients: [
      { name: "節瓜", amount: "1條" },
      { name: "黃豆芽", amount: "少許" }
    ],
    steps: [
      "節瓜去皮切塊,黃豆芽洗淨",
      "加水煲25分鐘至軟身",
      "隔渣飲湯水"
    ],
    image: "chayote-soybean-sprout-soup.jpg",
    tips: ""
  },
  {
    id: "sweet-potato-cowpea-soup-01",
    title: "番薯眉豆湯",
    stage: "1-2歲",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "眉豆(cowpea)與蠶豆(broad bean)係不同豆類品種,一般屬安全食材。",
    allergens: [],
    prep_time: 45,
    ingredients: [
      { name: "蕃薯", amount: "1個" },
      { name: "眉豆", amount: "2湯匙(浸軟)" }
    ],
    steps: [
      "眉豆浸泡1小時",
      "蕃薯去皮切塊,同眉豆加水煲35分鐘至軟身",
      "隔渣或連軟身眉豆一齊食用"
    ],
    image: "sweet-potato-cowpea-soup.jpg",
    tips: ""
  },
  {
    id: "white-fungus-lotus-seed-soup-01",
    title: "雪耳蓮子湯",
    stage: "2-3歲",
    category: "湯水",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 50,
    ingredients: [
      { name: "雪耳", amount: "1/4朵(浸發)" },
      { name: "蓮子", amount: "10粒(去芯)" }
    ],
    steps: [
      "雪耳浸發後撕細朵,蓮子去芯浸軟",
      "加水煲40分鐘至軟腍",
      "放涼至適合溫度,雪耳要切細以防哽塞"
    ],
    image: "white-fungus-lotus-seed-soup.jpg",
    tips: "雪耳需徹底煮軟同切細粒,以防幼兒哽塞。"
  },
  {
    id: "steamed-carrot-sticks-01",
    title: "蒸紅蘿蔔條",
    stage: "9-12個月",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "紅蘿蔔", amount: "1條" }
    ],
    steps: [
      "紅蘿蔔去皮切成手指粗條",
      "隔水蒸12分鐘至軟身(手指可輕易捏扁)",
      "放涼至適合溫度"
    ],
    image: "steamed-carrot-sticks.jpg",
    tips: ""
  },
  {
    id: "steamed-broccoli-florets-01",
    title: "蒸西蘭花小朵",
    stage: "9-12個月",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 12,
    ingredients: [
      { name: "西蘭花", amount: "1小棵" }
    ],
    steps: [
      "西蘭花切細朵,留少許梗方便拎住",
      "隔水蒸10分鐘至軟身",
      "放涼至適合溫度"
    ],
    image: "steamed-broccoli-florets.jpg",
    tips: ""
  },
  {
    id: "avocado-sticks-01",
    title: "牛油果條",
    stage: "9-12個月",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 5,
    ingredients: [
      { name: "熟牛油果", amount: "半個" }
    ],
    steps: [
      "牛油果去皮去核",
      "切成手指粗條狀",
      "可裹少量米粉防滑手"
    ],
    image: "avocado-sticks.jpg",
    tips: ""
  },
  {
    id: "steamed-pumpkin-sticks-01",
    title: "蒸南瓜條",
    stage: "9-12個月",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 15,
    ingredients: [
      { name: "南瓜", amount: "150克" }
    ],
    steps: [
      "南瓜去皮切成條狀",
      "隔水蒸12分鐘至軟身",
      "放涼至適合溫度"
    ],
    image: "steamed-pumpkin-sticks.jpg",
    tips: ""
  },
  {
    id: "banana-bites-01",
    title: "香蕉小丁",
    stage: "6-9個月",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 3,
    ingredients: [
      { name: "香蕉", amount: "半隻" }
    ],
    steps: [
      "香蕉去皮切成細丁狀",
      "方便BB自己拎住食"
    ],
    image: "banana-bites.jpg",
    tips: ""
  },
  {
    id: "mini-cheese-muffin-02",
    title: "迷你芝士鬆餅(番茄口味)",
    stage: "2-3歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋","奶","麩質"],
    prep_time: 30,
    ingredients: [
      { name: "低筋麵粉", amount: "1杯" },
      { name: "雞蛋", amount: "1隻" },
      { name: "芝士碎", amount: "2湯匙" },
      { name: "番茄粒", amount: "2湯匙" }
    ],
    steps: [
      "所有材料拌勻成麵糊",
      "倒入迷你鬆餅模",
      "焗爐180度焗15-18分鐘至金黃熟透"
    ],
    image: "mini-cheese-muffin-tomato.jpg",
    tips: ""
  },
  {
    id: "sweet-potato-balls-01",
    title: "番薯波波",
    stage: "1-2歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "蕃薯", amount: "1個" },
      { name: "栗粉", amount: "2湯匙" }
    ],
    steps: [
      "蕃薯蒸熟壓成蓉,加栗粉搓成粉糰",
      "搓成細波波狀",
      "隔水蒸10分鐘至熟透"
    ],
    image: "sweet-potato-balls.jpg",
    tips: ""
  },
  {
    id: "steamed-apple-sticks-01",
    title: "蒸蘋果條",
    stage: "9-12個月",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 12,
    ingredients: [
      { name: "蘋果", amount: "1個" }
    ],
    steps: [
      "蘋果去皮去芯,切成條狀",
      "隔水蒸8分鐘至軟身",
      "放涼至適合溫度"
    ],
    image: "steamed-apple-sticks.jpg",
    tips: "生蘋果較硬,建議蒸軟後先俾幼兒食,以防哽塞。"
  },
  {
    id: "no-bake-oat-bars-01",
    title: "免焗燕麥棒",
    stage: "2-3歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 20,
    ingredients: [
      { name: "燕麥片", amount: "1杯" },
      { name: "熟香蕉", amount: "1隻" },
      { name: "提子乾", amount: "1湯匙(切碎)" }
    ],
    steps: [
      "香蕉壓成蓉,拌入燕麥片同提子乾碎",
      "壓實喺盤中,雪櫃冷藏1小時定型",
      "切成小條"
    ],
    image: "no-bake-oat-bars.jpg",
    tips: "提子乾建議切碎以減低哽塞風險。"
  },
  {
    id: "mini-avocado-sandwich-01",
    title: "迷你牛油果三文治",
    stage: "1-2歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["麩質"],
    prep_time: 8,
    ingredients: [
      { name: "全麥薄餐包", amount: "1片" },
      { name: "牛油果蓉", amount: "2湯匙" }
    ],
    steps: [
      "餐包去邊(如需要)",
      "塗上牛油果蓉",
      "切成細粒方便手抓"
    ],
    image: "mini-avocado-sandwich.jpg",
    tips: ""
  },
  {
    id: "corn-pancakes-01",
    title: "粟米班戟",
    stage: "1-2歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋","奶","麩質"],
    prep_time: 20,
    ingredients: [
      { name: "粟米粒", amount: "半杯" },
      { name: "低筋麵粉", amount: "半杯" },
      { name: "雞蛋", amount: "1隻" },
      { name: "牛奶", amount: "1/4杯" }
    ],
    steps: [
      "所有材料拌勻成糊狀",
      "平底鑊細火煎成迷你班戟",
      "兩面煎至金黃色"
    ],
    image: "corn-pancakes.jpg",
    tips: ""
  },
  {
    id: "homemade-chicken-sausage-01",
    title: "自製雞肉腸仔",
    stage: "2-3歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 35,
    ingredients: [
      { name: "雞肉碎", amount: "150克" },
      { name: "雞蛋", amount: "1/4隻" },
      { name: "紅蘿蔔碎", amount: "1湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "雞肉碎加蛋液、紅蘿蔔碎拌勻攪至起膠",
      "搓成小腸仔形狀",
      "隔水蒸15分鐘至熟透",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "homemade-chicken-sausage.jpg",
    tips: "自家製不含加工防腐劑,較市售腸仔健康。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "mashed-potato-balls-01",
    title: "薯蓉波波",
    stage: "1-2歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 25,
    ingredients: [
      { name: "薯仔", amount: "2個" },
      { name: "粟米粒", amount: "1湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "薯仔蒸熟壓成蓉,拌入粟米粒",
      "搓成細波波狀",
      "隔水蒸8分鐘定型",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "mashed-potato-balls.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "seaweed-rice-roll-01",
    title: "紫菜飯卷",
    stage: "2-3歲",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 25,
    ingredients: [
      { name: "白飯", amount: "半碗" },
      { name: "紫菜", amount: "1張" },
      { name: "炒蛋條", amount: "少許" },
      { name: "紅蘿蔔條", amount: "少許" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "紫菜鋪底,飯壓平鋪上",
      "放入炒蛋條同紅蘿蔔條",
      "捲實切成小段",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "seaweed-rice-roll.jpg",
    tips: "不含生魚片,適合幼兒食用嘅家庭版壽司卷。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "steamed-zucchini-sticks-01",
    title: "蒸翠玉瓜條",
    stage: "9-12個月",
    category: "手指食物",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 12,
    ingredients: [
      { name: "翠玉瓜", amount: "1條" }
    ],
    steps: [
      "翠玉瓜切成手指粗條狀",
      "隔水蒸8分鐘至軟身",
      "放涼至適合溫度"
    ],
    image: "steamed-zucchini-sticks.jpg",
    tips: ""
  },
  {
    id: "tri-color-fried-rice-02",
    title: "三色炒飯",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 20,
    ingredients: [
      { name: "白飯", amount: "半碗" },
      { name: "雞蛋", amount: "半隻" },
      { name: "粟米粒", amount: "1湯匙" },
      { name: "紅蘿蔔粒", amount: "1湯匙" }
    ],
    steps: [
      "雞蛋炒熟盛起",
      "白飯落鑊炒散,加粟米、紅蘿蔔粒",
      "拌入炒蛋,清淡調味"
    ],
    image: "tri-color-fried-rice.jpg",
    tips: ""
  },
  {
    id: "tomato-beef-pasta-01",
    title: "蕃茄牛肉意粉",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["麩質"],
    prep_time: 30,
    ingredients: [
      { name: "意粉", amount: "小份" },
      { name: "牛肉碎", amount: "50克" },
      { name: "番茄", amount: "1個" }
    ],
    steps: [
      "意粉煮軟剪短",
      "牛肉碎同番茄煮成醬汁",
      "拌入意粉中,清淡調味"
    ],
    image: "tomato-beef-pasta.jpg",
    tips: ""
  },
  {
    id: "cheese-baked-rice-01",
    title: "芝士焗飯",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["奶"],
    prep_time: 25,
    ingredients: [
      { name: "白飯", amount: "半碗" },
      { name: "雞肉粒", amount: "40克" },
      { name: "芝士碎", amount: "2湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "雞肉粒煮熟拌入白飯",
      "放入焗碗,面層灑芝士碎",
      "焗爐200度焗8分鐘至芝士融化",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "cheese-baked-rice.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "mild-curry-chicken-rice-01",
    title: "溫和咖喱雞蓉飯",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "雞胸肉碎", amount: "60克" },
      { name: "薯仔", amount: "半個" },
      { name: "低鈉咖喱粉", amount: "少許" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "雞肉碎、薯仔粒炒熟",
      "加少許咖喱粉同水煮成溫和醬汁",
      "拌白飯食用",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "mild-curry-chicken-rice.jpg",
    tips: "咖喱粉份量要好少,避免過辣刺激幼兒腸胃。 1歲後如加調味,豉油(含大豆、麩質)同鹽都要份量從簡,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "salmon-fried-rice-01",
    title: "三文魚炒飯",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋","海鮮"],
    prep_time: 20,
    ingredients: [
      { name: "白飯", amount: "半碗" },
      { name: "三文魚", amount: "50克" },
      { name: "雞蛋", amount: "半隻" }
    ],
    steps: [
      "三文魚蒸熟拆碎,雞蛋炒熟",
      "白飯落鑊炒散,拌入三文魚同炒蛋",
      "清淡調味"
    ],
    image: "salmon-fried-rice.jpg",
    tips: ""
  },
  {
    id: "mushroom-tofu-braise-01",
    title: "什菌炆豆腐",
    stage: "1-2歲",
    category: "家庭餐",
    g6pd_status: "caution",
    g6pd_note: "豆腐(黃豆製)非蠶豆製品,一般屬安全食材,如有疑慮可向醫生確認。",
    allergens: ["大豆"],
    prep_time: 25,
    ingredients: [
      { name: "嫩豆腐", amount: "半磚" },
      { name: "冬菇", amount: "2朵" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "豆腐切塊,冬菇切碎",
      "加少許水同煮15分鐘至入味",
      "放涼至適合溫度",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "mushroom-tofu-braise.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "pan-seared-salmon-cubes-01",
    title: "香煎三文魚粒",
    stage: "1-2歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["海鮮"],
    prep_time: 15,
    ingredients: [
      { name: "三文魚", amount: "80克" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "三文魚切粒",
      "平底鑊少油煎至全熟",
      "檢查無細骨,放涼至適合溫度",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "pan-seared-salmon-cubes.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "steamed-egg-rice-01",
    title: "蒸水蛋拌飯",
    stage: "9-12個月",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋"],
    prep_time: 15,
    ingredients: [
      { name: "雞蛋", amount: "1隻" },
      { name: "白飯", amount: "少量" }
    ],
    steps: [
      "雞蛋打散加温水拌勻,隔水蒸10分鐘",
      "拌入軟身白飯"
    ],
    image: "steamed-egg-rice.jpg",
    tips: ""
  },
  {
    id: "tomato-potato-chicken-braise-01",
    title: "番茄薯仔燴雞",
    stage: "1-2歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 35,
    ingredients: [
      { name: "雞肉粒", amount: "80克" },
      { name: "番茄", amount: "1個" },
      { name: "薯仔", amount: "半個" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "雞肉粒汆水",
      "同番茄、薯仔加水炆25分鐘至軟腍",
      "上碟前略壓碎",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "tomato-potato-chicken-braise.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "beef-mash-potato-01",
    title: "免治牛肉薯蓉",
    stage: "1-2歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: [],
    prep_time: 30,
    ingredients: [
      { name: "牛肉碎", amount: "60克" },
      { name: "薯仔", amount: "1個" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "牛肉碎炒熟",
      "薯仔蒸軟壓成蓉",
      "牛肉碎拌入薯蓉中",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "beef-mash-potato.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "zucchini-pancake-01",
    title: "節瓜煎餅",
    stage: "1-2歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋","麩質"],
    prep_time: 20,
    ingredients: [
      { name: "翠玉瓜絲", amount: "1杯" },
      { name: "雞蛋", amount: "1隻" },
      { name: "低筋麵粉", amount: "3湯匙" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "翠玉瓜絲擠去多餘水份",
      "加蛋液、麵粉拌勻成糊",
      "平底鑊細火煎成小餅,兩面金黃",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "zucchini-pancake.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "chicken-fried-noodles-01",
    title: "雞絲炒麵",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["蛋","麩質"],
    prep_time: 20,
    ingredients: [
      { name: "幼蛋麵", amount: "小份" },
      { name: "雞胸肉絲", amount: "50克" },
      { name: "椰菜絲", amount: "2湯匙" }
    ],
    steps: [
      "麵條煮軟過冷河",
      "雞絲、椰菜絲炒熟",
      "拌入麵條同炒,清淡調味,剪短方便食用"
    ],
    image: "chicken-fried-noodles.jpg",
    tips: ""
  },
  {
    id: "garlic-broccoli-shrimp-01",
    title: "蒜蓉西蘭花炒蝦仁",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["海鮮"],
    prep_time: 20,
    ingredients: [
      { name: "蝦仁", amount: "60克" },
      { name: "西蘭花", amount: "1小棵" },
      { name: "蒜蓉", amount: "少許" },
      { name: "低鈉豉油或鹽(可選,1歲後)", amount: "1-2滴或一小撮" }
    ],
    steps: [
      "西蘭花切小朵灼熟",
      "蝦仁切碎用蒜蓉略炒熟",
      "混合上碟,切細方便幼兒進食",
      "如BB已滿1歲,上碟前可加1-2滴低鈉豉油或一小撮鹽調味,份量要少,以清淡為主"
    ],
    image: "garlic-broccoli-shrimp.jpg",
    tips: "1歲後可視乎BB口味,加極少量低鈉豉油(含大豆、麩質)或鹽調味,以清淡為主;如BB對大豆或麩質敏感,可省略或轉用其他調味料。"
  },
  {
    id: "chicken-ham-sandwich-01",
    title: "雞肉三文治",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["麩質"],
    prep_time: 15,
    ingredients: [
      { name: "全麥方包", amount: "2片" },
      { name: "蒸雞胸絲", amount: "2湯匙" },
      { name: "生菜絲", amount: "少許" }
    ],
    steps: [
      "雞胸絲同生菜絲夾入方包中",
      "切走麵包邊(如需要)",
      "切成細粒方便手抓"
    ],
    image: "chicken-ham-sandwich.jpg",
    tips: "用自家蒸雞胸代替加工火腿,較健康少鈉。"
  },
  {
    id: "mixed-udon-01",
    title: "什錦炒烏冬",
    stage: "2-3歲",
    category: "家庭餐",
    g6pd_status: "safe",
    g6pd_note: "",
    allergens: ["麩質"],
    prep_time: 20,
    ingredients: [
      { name: "烏冬", amount: "1份" },
      { name: "雞肉絲", amount: "40克" },
      { name: "什菜絲", amount: "適量" }
    ],
    steps: [
      "烏冬過水煮軟,剪短",
      "雞肉絲、什菜絲炒熟",
      "拌入烏冬同炒,清淡調味"
    ],
    image: "mixed-udon.jpg",
    tips: ""
  }
];

// 匯出(如用 ES module)
// export default babyRecipes;
