// baby-recipes-data.js
// BB食譜資料庫 v2 — 由開始加固至3歲
// 階段分類已改為3大階段(取代舊有5級分類):
//   "6-8個月"（初階泥糊期）
//   "9-12個月"（碎顆粒與手指食物期）
//   "1-3歲"（幼兒正餐與同桌過渡期）
//
// 內容方向參考衞生署家庭健康服務《7日健康飲食全攻略》官方餐單概念,
// 並以自己文字重新編寫食譜細節,唔係逐字照搬原文。

/**
 * 欄位說明:
 * id            - 唯一識別碼
 * title         - 食譜名稱
 * stage         - "6-8個月" / "9-12個月" / "1-3歲"
 * category      - "水果泥" / "蔬菜泥" / "肉類" / "主食" / "湯水" / "手指食物" / "家庭餐"
 * g6pd_status   - "safe" / "caution" / "avoid"
 * g6pd_note     - caution/avoid要講明點解;safe可留空
 * allergens     - 過敏原陣列
 * prep_time     - 準備時間(分鐘)
 * ingredients   - 食材陣列 { name, amount }
 * steps         - 步驟陣列
 * image         - 圖片檔名
 * tips          - 小貼士
 */

const babyRecipes = [

// ========================================
// 6-8個月(初階泥糊期)
// 重點:單一食材逐樣試敏,新食材要獨立試食2-3日冇敏感反應先可以加下一種,
// 唔可以一次過加多種新食材落同一餐。
// ========================================

{
  id: "first-rice-cereal-01",
  title: "第一口十倍粥/米糊",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "白米", amount: "1份" },
    { name: "水", amount: "10份" }
  ],
  steps: [
    "白米洗淨浸泡約1小時",
    "水滾後加入米,大火煮滾",
    "轉中慢火煮至米粒開花,期間間中攪動",
    "用濾網或攪拌器打成幼滑無顆粒嘅米糊"
  ],
  image: "first-rice-cereal.jpg",
  tips: "呢個係BB第一口固體食物嘅基礎,建議連續食2-3日,冇敏感反應先開始加其他單一食材。"
},
{
  id: "apple-mash-single-01",
  title: "蘋果蓉(單一試敏)",
  stage: "6-8個月",
  category: "水果泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 15,
  ingredients: [
    { name: "蘋果", amount: "1個" }
  ],
  steps: [
    "蘋果洗淨去皮去芯,切小塊",
    "隔水蒸10分鐘至軟身",
    "用叉子壓成幼滑蓉狀,或用茶匙輕輕刮成果蓉"
  ],
  image: "apple-mash.jpg",
  tips: "第一次食新食材,建議單獨試食,唔好同其他新食材混合,方便觀察有冇敏感反應。"
},
{
  id: "banana-mash-single-01",
  title: "香蕉蓉(單一試敏)",
  stage: "6-8個月",
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
    "質地太稠可加少量温開水調較"
  ],
  image: "banana-mash.jpg",
  tips: "香蕉唔使加熱都可以直接壓蓉,係方便嘅入門食材之一。"
},
{
  id: "papaya-mash-single-01",
  title: "木瓜蓉(單一試敏)",
  stage: "6-8個月",
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
    "用叉子壓成幼滑蓉狀"
  ],
  image: "papaya-mash.jpg",
  tips: ""
},
{
  id: "pumpkin-mash-single-01",
  title: "南瓜蓉(單一試敏)",
  stage: "6-8個月",
  category: "蔬菜泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "南瓜", amount: "150克" }
  ],
  steps: [
    "南瓜去皮去籽,切成約1厘米粒",
    "隔水蒸10-15分鐘至軟身",
    "用叉子壓成幼滑蓉狀"
  ],
  image: "pumpkin-mash.jpg",
  tips: "南瓜可以替換做冬瓜、合掌瓜、番薯等其他瓜類/根莖類蔬菜,做法一樣。"
},
{
  id: "potato-mash-single-01",
  title: "薯仔蓉(單一試敏)",
  stage: "6-8個月",
  category: "蔬菜泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "薯仔", amount: "1個" }
  ],
  steps: [
    "薯仔洗淨去皮切件",
    "落滾水煮10-15分鐘至叉子可以輕易穿過",
    "撈起趁熱用叉/匙羹壓成蓉,可加少量暖開水令質地更濕潤",
    "如想更幼滑,可以隔濾網再過一次"
  ],
  image: "potato-mash.jpg",
  tips: ""
},
{
  id: "carrot-mash-single-01",
  title: "紅蘿蔔蓉(單一試敏)",
  stage: "6-8個月",
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
    "壓成蓉或用濾網磨成幼滑糊狀"
  ],
  image: "carrot-mash.jpg",
  tips: ""
},
{
  id: "spinach-mash-single-01",
  title: "菠菜蓉(單一試敏)",
  stage: "6-8個月",
  category: "蔬菜泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 10,
  ingredients: [
    { name: "菠菜", amount: "1小紮" }
  ],
  steps: [
    "菠菜用流動清水沖洗乾淨",
    "落滾水焯1-3分鐘,撈起瀝乾(唔好用焯菜水餵BB)",
    "切去莖部淨用菜葉,切碎後用濾網或攪拌器磨成蓉"
  ],
  image: "spinach-mash.jpg",
  tips: "葉菜類建議即製即食,唔好隔夜存放蓉狀嘅葉菜。"
},
{
  id: "pumpkin-tofu-congee-01",
  title: "南瓜豆腐粥",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "caution",
  g6pd_note: "豆腐屬黃豆製品,同蠶豆(broad bean)係完全不同品種,一般屬安全食材;如BB對大豆有懷疑可先向醫生確認。",
  allergens: ["大豆"],
  prep_time: 25,
  ingredients: [
    { name: "南瓜", amount: "3湯匙(切約1厘米粒)" },
    { name: "豆腐", amount: "3湯匙" },
    { name: "十倍粥", amount: "1碗半" }
  ],
  steps: [
    "南瓜粒隔水蒸10-15分鐘至軟身",
    "用叉將豆腐同南瓜一齊壓成蓉",
    "粥煮滾後加入南瓜豆腐蓉拌勻,轉中火多煮2分鐘即可"
  ],
  image: "pumpkin-tofu-congee.jpg",
  tips: "呢個係組合類食譜,建議南瓜同豆腐都分別單獨試過冇敏感反應先嘗試呢個組合。"
},
{
  id: "choysum-eggyolk-cereal-01",
  title: "菜心蛋黃米糊",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 25,
  ingredients: [
    { name: "嬰兒米粉", amount: "6平湯匙" },
    { name: "母乳或配方奶", amount: "160毫升" },
    { name: "菜心", amount: "5片嫩葉" },
    { name: "蛋黃", amount: "半隻(去蛋白)" }
  ],
  steps: [
    "菜心洗淨,落滾水焯熟,取出瀝乾,切碎或用濾網磨成菜蓉",
    "雞蛋整隻連殼煮約10分鐘至全熟,剝殼後淨取蛋黃,用叉壓碎,加少量開水調成滑糊",
    "母乳/配方奶同嬰兒米粉調成米糊,拌入菜心蓉同蛋黃蓉即成"
  ],
  image: "choysum-eggyolk-cereal.jpg",
  tips: "蛋黃建議由半隻開始試,首次引入雞蛋要留意有冇皮膚/腸胃敏感反應。蛋白引入時間建議先問返醫生意見。"
},
{
  id: "chicken-pea-congee-01",
  title: "雞肉青豆粥",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "青豆(豌豆)同蠶豆(broad bean)品種不同,一般屬安全食材。",
  allergens: [],
  prep_time: 25,
  ingredients: [
    { name: "去皮雞肉", amount: "2湯匙(剁碎)" },
    { name: "青豆", amount: "2湯匙" },
    { name: "十倍粥", amount: "1碗半" }
  ],
  steps: [
    "青豆煮熟瀝乾,用濾網同匙羹背壓成蓉,隔去豆皮",
    "粥煮滾,加入剁碎雞肉,用筷子拌散,煮至全熟",
    "加入青豆蓉,煮滾即可"
  ],
  image: "chicken-pea-congee.jpg",
  tips: "肉汁/肉湯本身營養有限,建議直接餵食剁碎嘅肉蓉,先可以吸收較多鐵質等營養素。"
},
{
  id: "wintermelon-tomato-liver-congee-01",
  title: "冬瓜番茄豬肝粥",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "冬瓜", amount: "2塊(去皮切約3厘米粒)" },
    { name: "番茄", amount: "1/8個(細)" },
    { name: "豬肝", amount: "1片(約可壓成1湯匙肝蓉)" },
    { name: "稀粥", amount: "半至1碗" }
  ],
  steps: [
    "番茄去籽,同冬瓜一齊落滾水煮熟,瀝乾",
    "冬瓜用叉壓成蓉;番茄去皮切幼粒或用濾網壓蓉",
    "豬肝隔水蒸熟(唔好蒸過火,否則難壓蓉),用叉或濾網壓成蓉",
    "粥煮滾,加入冬瓜蓉、番茄蓉、豬肝蓉,再煮滾3分鐘即成"
  ],
  image: "wintermelon-liver-congee.jpg",
  tips: "豬肝含豐富鐵質同維他命A,但攝取過量維他命A對身體有害,建議兩星期食用豬肝唔多於一次。"
},

// ========================================
// 9-12個月(碎顆粒與手指食物期)
// 重點:訓練咀嚼同手眼協調,質地由幼滑過渡到有顆粒/軟碎狀,
// 手指食物要切成適合BB自己拎住嘅形狀,長條/大細粒都要留意防哽塞。
// ========================================

{
  id: "tofu-seaweed-pork-congee-01",
  title: "豆腐紫菜肉碎粥/軟飯",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "caution",
  g6pd_note: "豆腐屬黃豆製品,一般屬安全食材,如有疑慮可向醫生確認。",
  allergens: ["大豆"],
  prep_time: 25,
  ingredients: [
    { name: "豆腐", amount: "3湯匙(壓蓉)" },
    { name: "即食壽司紫菜", amount: "2湯匙(撕碎)" },
    { name: "豬肉", amount: "1湯匙(剁碎)" },
    { name: "粥或軟飯", amount: "1碗粥/半碗軟飯" }
  ],
  steps: [
    "豬肉剁碎後加少量水拌勻令肉碎散開",
    "粥煮滾或軟飯加熱,加入豬肉碎邊煮邊拌勻至熟透",
    "加入紫菜同豆腐蓉拌勻,再煮2分鐘即成"
  ],
  image: "tofu-seaweed-pork-congee.jpg",
  tips: "紫菜、海帶等含碘量豐富,適量攝取有助神經系統發展,唔需要天天大量食用。"
},
{
  id: "pumpkin-pork-noodle-soup-01",
  title: "南瓜肉碎湯麵",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 25,
  ingredients: [
    { name: "南瓜", amount: "2-3湯匙(切約1厘米粒)" },
    { name: "豬肉", amount: "1湯匙(切碎)" },
    { name: "幼麵(或福建麵)", amount: "半束" },
    { name: "薑片", amount: "1小片(可選)" },
    { name: "水", amount: "1碗半" }
  ],
  steps: [
    "麵條落滾水煮5分鐘,撈起備用",
    "少量油爆香薑片,加南瓜粒略煎香,加水煮滾,中火煮至南瓜軟身成湯",
    "加入切碎豬肉同煮熟嘅麵條,煮至肉熟透",
    "餵食前將麵條剪成約1厘米長,以防哽塞"
  ],
  image: "pumpkin-pork-noodle.jpg",
  tips: "麵條、意粉、米粉呢類主食俾BB食嗰陣一定要剪短,唔好整條餵,防止哽塞。"
},
{
  id: "fish-tomato-potato-pasta-01",
  title: "魚肉番茄薯仔字母粉",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮", "麩質"],
  prep_time: 30,
  ingredients: [
    { name: "字母粉", amount: "半至1碗(煮熟)" },
    { name: "白肉魚(如龍脷魚)", amount: "1湯匙(蒸熟拆碎)" },
    { name: "番茄", amount: "適量(煮軟去皮切碎)" },
    { name: "薯仔", amount: "適量(煮軟壓碎)" }
  ],
  steps: [
    "字母粉落滾水煮至軟身,過冷河瀝乾備用",
    "魚肉蒸熟後徹底檢查去骨,拆碎",
    "番茄、薯仔煮軟後分別處理成細碎/壓碎狀",
    "鍋中加熱少量湯水,加入字母粉,煮滾後加番茄、薯仔、魚肉拌勻即可"
  ],
  image: "fish-tomato-pasta.jpg",
  tips: "第一次食新魚種要留意觀察過敏反應。魚肉一定要仔細檢查冇細骨先可以俾BB食。"
},
{
  id: "goldenthread-broccoli-congee-01",
  title: "紅衫魚西蘭花粥/軟飯",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 25,
  ingredients: [
    { name: "紅衫魚(或其他白肉魚)", amount: "1-2湯匙(熟魚肉)" },
    { name: "西蘭花", amount: "2-3個花球(切碎)" },
    { name: "粥或軟飯", amount: "大半碗粥/半碗軟飯" }
  ],
  steps: [
    "魚肉蒸熟或煎熟,仔細去骨後搗碎",
    "西蘭花焯至半熟,切碎",
    "粥煮滾或軟飯加熱,加入魚肉碎同西蘭花碎煮軟即可"
  ],
  image: "goldenthread-broccoli-congee.jpg",
  tips: "深海魚含豐富DHA,有助神經系統同視力發展。留意揀低汞魚種(避免鯊魚、劍魚、旗魚、吞拿魚等)。"
},
{
  id: "sweet-potato-sticks-01",
  title: "番薯條(手指食物)",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 25,
  ingredients: [
    { name: "番薯", amount: "1個" }
  ],
  steps: [
    "番薯洗淨切厚片,連皮隔水蒸約20分鐘至軟身",
    "去皮,切成約2x5厘米長條狀",
    "放涼至適合溫度,讓BB自己拎住食"
  ],
  image: "sweet-potato-sticks.jpg",
  tips: "南瓜、薯仔、芋頭、甜椒、西蘭花呢類蔬菜都適合用同樣方法整做手指食物。"
},
{
  id: "steamed-carrot-sticks-02",
  title: "蒸紅蘿蔔條(手指食物)",
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
    "隔水蒸12分鐘至軟身(手指可輕易捏扁嘅程度)",
    "放涼至適合溫度"
  ],
  image: "steamed-carrot-sticks.jpg",
  tips: ""
},
{
  id: "cheese-bean-mash-01",
  title: "芝士雜豆薯蓉",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "caution",
  g6pd_note: "紅腰豆、鷹嘴豆同蠶豆(broad bean)係不同品種嘅豆類,一般屬安全食材;如有疑慮建議向醫生確認。",
  allergens: ["奶", "大豆"],
  prep_time: 30,
  ingredients: [
    { name: "薯仔", amount: "半碗(去皮切塊)" },
    { name: "罐裝雜豆(紅腰豆、鷹嘴豆)", amount: "2湯匙(煮熟)" },
    { name: "全脂芝士", amount: "半片(切粒)" },
    { name: "熱開水或牛奶", amount: "適量" }
  ],
  steps: [
    "雜豆煮軟瀝乾,用叉/匙羹壓成蓉",
    "薯仔煮10-15分鐘至軟身,瀝乾,壓成蓉,加適量熱水/奶調至幼滑",
    "薯蓉仍熱嗰陣加入芝士粒同豆蓉,攪拌至芝士融化即可"
  ],
  image: "cheese-bean-mash.jpg",
  tips: "唔同品牌芝士含鹽量有差異,建議睇營養標籤,選較低鈉嘅產品。"
},
{
  id: "banana-oat-milk-01",
  title: "香蕉奶麥片",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["奶"],
  prep_time: 10,
  ingredients: [
    { name: "快熟麥片", amount: "2湯匙" },
    { name: "母乳或配方奶", amount: "1/4碗" },
    { name: "香蕉", amount: "1/4條" },
    { name: "水", amount: "半碗" }
  ],
  steps: [
    "麥片加水落鍋,慢火加熱期間不停攪動,煮至濃稠",
    "加入母乳/配方奶拌勻",
    "香蕉壓成蓉拌入即可"
  ],
  image: "banana-oat-milk.jpg",
  tips: "麥片可以配搭其他水果蓉(如藍莓、提子切碎),午晚餐亦可以加菜蓉、肉碎、蛋一齊食。"
},
{
  id: "mini-veg-dumplings-01",
  title: "迷你菜肉小水餃",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 40,
  ingredients: [
    { name: "餃子皮", amount: "適量" },
    { name: "豬肉碎", amount: "80克" },
    { name: "椰菜或菜心", amount: "適量(切幼碎)" }
  ],
  steps: [
    "菜切幼碎,同豬肉碎拌勻攪至起膠(唔需調味或少量調味)",
    "包成細細粒嘅迷你水餃",
    "隔水蒸12-15分鐘或落滾水煮熟",
    "放涼至適合溫度,可以剪開一半方便BB咀嚼"
  ],
  image: "mini-veg-dumplings.jpg",
  tips: "餃子形狀要做得夠細小,方便BB一啖食,避免成隻塞入口哽親。"
},
{
  id: "veg-meat-patty-01",
  title: "蔬菜肉餅",
  stage: "9-12個月",
  category: "肉類",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "豬肉碎", amount: "80克" },
    { name: "馬蹄碎或紅蘿蔔碎", amount: "1湯匙" }
  ],
  steps: [
    "豬肉碎加馬蹄/紅蘿蔔碎拌勻,順一方向攪至起膠",
    "壓平放喺碗中",
    "隔水蒸12-15分鐘至熟透"
  ],
  image: "veg-meat-patty.jpg",
  tips: "肉餅蒸熟後可以用叉子壓開檢查中心已全熟先俾BB食。"
},
{
  id: "pumpkin-salmon-rice-01",
  title: "南瓜三文魚拌飯",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 25,
  ingredients: [
    { name: "南瓜", amount: "3湯匙(蒸軟壓蓉)" },
    { name: "三文魚", amount: "1湯匙(蒸熟拆碎)" },
    { name: "軟飯", amount: "半碗" }
  ],
  steps: [
    "南瓜隔水蒸軟,壓成蓉",
    "三文魚蒸熟,仔細檢查冇細骨後拆碎",
    "軟飯拌入南瓜蓉同三文魚碎即可"
  ],
  image: "pumpkin-salmon-rice.jpg",
  tips: "三文魚含豐富DHA,對BB腦部同視力發展有幫助,第一次食要留意過敏反應。"
},

// ========================================
// 1-3歲(幼兒正餐與同桌過渡期)
// 重點:過渡到同家人相似嘅飯菜,質地偏軟爛好咬;
// 主食可以開始加入全穀類(紅米、糙米、燕麥);
// 少鹽少糖 — 1-3歲每日鹽份攝取建議極少,調味要格外清淡。
// ========================================

{
  id: "mushroom-tofu-steamed-egg-01",
  title: "香菇豆腐蒸蛋伴菜飯",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "caution",
  g6pd_note: "豆腐屬黃豆製品,一般屬安全食材,如有疑慮可向醫生確認。",
  allergens: ["蛋", "大豆"],
  prep_time: 25,
  ingredients: [
    { name: "鮮冬菇", amount: "4隻" },
    { name: "豆腐", amount: "1磚(切1厘米塊)" },
    { name: "雞蛋", amount: "2隻" },
    { name: "軟飯", amount: "半碗" },
    { name: "菜心", amount: "2-4湯匙(切碎)" }
  ],
  steps: [
    "鮮冬菇焯1分鐘,瀝乾切幼粒",
    "雞蛋打散加水拌勻,倒入蒸碗",
    "加入冬菇粒同豆腐粒均勻放入蛋汁中,隔水蒸8-10分鐘",
    "配菜心軟飯一齊食用"
  ],
  image: "mushroom-tofu-egg.jpg",
  tips: "蒸蛋嗰陣鍋蓋邊放一支筷子留條縫,可以避免蛋面出現氣泡。"
},
{
  id: "shrimp-broccoli-risotto-01",
  title: "蝦仁西蘭花燴飯",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 25,
  ingredients: [
    { name: "蝦仁", amount: "適量(去腸洗淨)" },
    { name: "西蘭花", amount: "適量(切碎)" },
    { name: "軟飯", amount: "半碗" }
  ],
  steps: [
    "蝦仁挑腸洗淨,切碎;西蘭花焯熟切碎",
    "少油起鑊,蝦仁炒熟,加入西蘭花略炒",
    "加入軟飯同少量開水,煮1-2分鐘成軟滑燴飯,清淡調味即可"
  ],
  image: "shrimp-broccoli-risotto.jpg",
  tips: "第一次食蝦要留意觀察過敏反應。"
},
{
  id: "tomato-mixed-bean-pasta-01",
  title: "番茄雜豆螺絲粉",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "caution",
  g6pd_note: "鷹嘴豆、紅腰豆同蠶豆(broad bean)係不同品種嘅豆類,一般屬安全食材;如有疑慮建議向醫生確認。",
  allergens: ["麩質", "大豆"],
  prep_time: 25,
  ingredients: [
    { name: "螺絲粉", amount: "1碗(煮熟)" },
    { name: "罐裝雜豆(鷹嘴豆、紅腰豆)", amount: "3湯匙" },
    { name: "番茄", amount: "半個" },
    { name: "洋蔥", amount: "2湯匙(切粒)" },
    { name: "茄汁", amount: "1湯匙" }
  ],
  steps: [
    "螺絲粉剪短煮軟,瀝乾",
    "番茄去皮切粒;雜豆煮軟壓碎",
    "少油爆香洋蔥,加番茄粒、雜豆同茄汁略煮成醬汁",
    "拌入螺絲粉即可"
  ],
  image: "tomato-bean-pasta.jpg",
  tips: "豆類含豐富蛋白質、維他命B、鐵、鋅同膳食纖維,係營養豐富嘅食材。"
},
{
  id: "salmon-cauliflower-shell-pasta-01",
  title: "煎三文魚南瓜汁椰菜花貝殼粉",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "南瓜", amount: "半碗(蒸軟壓蓉)" },
    { name: "椰菜花", amount: "2個花球(蒸軟切碎)" },
    { name: "三文魚", amount: "2片(煎熟壓碎)" },
    { name: "貝殼粉", amount: "半至1碗(煮熟)" }
  ],
  steps: [
    "南瓜、椰菜花分別蒸軟,南瓜壓成蓉,椰菜花切幼粒",
    "三文魚少油煎熟,用匙羹略壓碎",
    "南瓜蓉加少量水煮成醬汁狀(質地太稀可加少許粟粉水勾芡)",
    "貝殼粉放碗中,鋪上三文魚、椰菜花,淋上南瓜汁即可"
  ],
  image: "salmon-cauliflower-pasta.jpg",
  tips: "用蔬菜蓉整成醬汁係增加幼兒蔬菜攝取量嘅好方法,番茄、甜椒、菠菜都適合用同樣做法。"
},
{
  id: "strawberry-milk-cornflakes-01",
  title: "士多啤梨牛奶粟米片",
  stage: "1-3歲",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["奶"],
  prep_time: 5,
  ingredients: [
    { name: "士多啤梨", amount: "2-3粒" },
    { name: "原味粟米片", amount: "半碗" },
    { name: "全脂牛奶", amount: "2/3杯(約160毫升)" }
  ],
  steps: [
    "粟米片加牛奶,浸3分鐘至軟身",
    "士多啤梨洗淨切碎拌入即成"
  ],
  image: "strawberry-cornflakes.jpg",
  tips: "揀原味粟米片,糖同鈉含量會比調味款低,建議睇營養標籤比較。"
},
{
  id: "peanut-cowpea-soup-01",
  title: "花生眉豆蓉湯",
  stage: "1-3歲",
  category: "湯水",
  g6pd_status: "safe",
  g6pd_note: "眉豆(cowpea)同蠶豆(broad bean)係完全不同嘅豆類品種,一般屬安全食材。花生本身唔屬於蠶豆家族,兩者係唔同植物。",
  allergens: ["花生"],
  prep_time: 130,
  ingredients: [
    { name: "花生", amount: "1兩" },
    { name: "眉豆", amount: "2兩" },
    { name: "瘦豬肉", amount: "6兩" },
    { name: "水", amount: "8-10碗" }
  ],
  steps: [
    "花生、眉豆用温水浸泡1小時",
    "瘦豬肉落滾水汆走血水",
    "全部材料加水煮滾,轉中慢火煲約2小時",
    "舀出適合份量,用叉將花生眉豆壓碎方便BB食用"
  ],
  image: "peanut-cowpea-soup.jpg",
  tips: "第一次食花生類食材要格外留意過敏反應,建議先諮詢醫生意見先引入。"
},
{
  id: "brown-rice-choysum-chicken-01",
  title: "菜心雞肉粒糙米飯",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "糙米", amount: "半杯" },
    { name: "雞胸肉", amount: "80克(切粒)" },
    { name: "菜心", amount: "適量(切碎)" }
  ],
  steps: [
    "糙米浸泡後煮成軟身糙米飯(糙米質地較硬,建議浸泡時間長啲)",
    "雞胸肉粒同菜心碎煮熟",
    "拌入糙米飯,清淡調味即可"
  ],
  image: "brown-rice-chicken.jpg",
  tips: "全穀類(糙米、紅米、燕麥)含豐富膳食纖維,適合1歲後逐步引入做主食嘅一部分。"
},
{
  id: "oat-wolfberry-meat-patty-01",
  title: "杞子燕麥蒸肉餅伴菜飯",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 25,
  ingredients: [
    { name: "豬肉碎", amount: "100克" },
    { name: "燕麥片", amount: "2湯匙" },
    { name: "杞子", amount: "1茶匙(浸軟切碎)" },
    { name: "軟飯", amount: "半碗" }
  ],
  steps: [
    "燕麥片用少量水浸軟",
    "豬肉碎加燕麥、杞子碎拌勻攪至起膠",
    "壓平隔水蒸12-15分鐘至熟透",
    "伴軟飯或菜飯食用"
  ],
  image: "oat-wolfberry-patty.jpg",
  tips: ""
},
{
  id: "mushroom-beancurd-beef-vermicelli-01",
  title: "冬菇腐竹牛肉粉絲",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "caution",
  g6pd_note: "腐竹屬黃豆製品,同蠶豆係不同品種嘅豆類製品,一般屬安全食材;如有疑慮建議向醫生確認。",
  allergens: ["大豆"],
  prep_time: 40,
  ingredients: [
    { name: "牛肉", amount: "60克(切薄片或碎)" },
    { name: "冬菇", amount: "3朵(浸軟切絲)" },
    { name: "腐竹", amount: "1小段(浸軟切段)" },
    { name: "粉絲", amount: "適量(剪短)" }
  ],
  steps: [
    "冬菇、腐竹分別浸軟,切成適合幼兒嘅細小段",
    "牛肉汆水,同冬菇、腐竹加水煮15-20分鐘至軟身入味",
    "加入粉絲(已剪短)同煮5分鐘,清淡調味即可"
  ],
  image: "mushroom-beancurd-beef.jpg",
  tips: ""
},
{
  id: "spinach-tofu-pork-noodle-soup-01",
  title: "菠菜豆腐豬肉湯米線",
  stage: "1-3歲",
  category: "主食",
  g6pd_status: "caution",
  g6pd_note: "豆腐屬黃豆製品,一般屬安全食材,如有疑慮可向醫生確認。",
  allergens: ["大豆"],
  prep_time: 30,
  ingredients: [
    { name: "菠菜", amount: "適量" },
    { name: "豆腐", amount: "適量(切塊)" },
    { name: "豬肉", amount: "適量(切片或切碎)" },
    { name: "米線", amount: "適量(煮熟剪短)" }
  ],
  steps: [
    "菠菜去根洗淨,滾水焯1分鐘,瀝乾",
    "水滾後加少量油,放入菠菜、豆腐同豬肉片,煮成湯",
    "取適量湯水,加入煮熟嘅米線(已剪成適合長度),煮滾即成"
  ],
  image: "spinach-tofu-pork-noodle.jpg",
  tips: "「菠菜同豆腐一齊食會導致腎結石」係坊間流傳但冇醫學實證支持嘅講法,可以放心一齊食用。"
},
{
  id: "garlic-cauliflower-brown-rice-01",
  title: "蒜蓉炒椰菜花伴糙米飯",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "椰菜花", amount: "適量(切小朵)" },
    { name: "蒜蓉", amount: "少許" },
    { name: "糙米飯", amount: "半碗" }
  ],
  steps: [
    "椰菜花焯至半熟",
    "少油爆香蒜蓉,放入椰菜花炒熟,清淡調味",
    "伴糙米飯食用,可切碎方便幼兒咀嚼"
  ],
  image: "garlic-cauliflower-brownrice.jpg",
  tips: "1-3歲幼兒每日鹽份攝取建議要好少(遠低於成人份量),整餐嗰陣調味要格外克制,或者可以喺調味前先預留幼兒嗰份。"
}
,

// ========================================
// BLW手指食物組合餐盤(6-8個月)
// 重點:全部食材蒸到好軟腍,一格一款食材,等BB自己揀住食、練習抓握。
// ========================================



{
  id: "combo-6-8-01",
  title: "蘋果西蘭花薯仔餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 25,
  ingredients: [
    { name: "蘋果", amount: "適量(蒸軟切薄片)" },
    { name: "西蘭花", amount: "適量(蒸軟切小朵)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "薯仔", amount: "適量(蒸軟切條)" }
  ],
  steps: [
    "蘋果去皮去芯,切薄片,隔水蒸軟。",
    "西蘭花同紅蘿蔔分別隔水蒸軟,西蘭花切成小朵,紅蘿蔔切成手指粗條,蒸至手指可以輕易捏扁嘅軟度。",
    "薯仔去皮切條,隔水蒸至軟身。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-01.jpg",
  tips: ""
},
{
  id: "combo-6-8-02",
  title: "香蕉椰菜花蛋黃餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 20,
  ingredients: [
    { name: "香蕉", amount: "適量(切薄片)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)" },
    { name: "南瓜", amount: "適量(蒸軟切塊)" },
    { name: "雞蛋", amount: "半隻(煮熟蛋黃壓碎)" }
  ],
  steps: [
    "香蕉去皮切薄片。",
    "椰菜花同南瓜分別隔水蒸軟,椰菜花切成小朵,南瓜切成小塊。",
    "雞蛋連殼煮熟,剝殼取蛋黃,用叉壓碎。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-02.jpg",
  tips: ""
},
{
  id: "combo-6-8-03",
  title: "雪梨紫蕃薯雞柳餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "雪梨", amount: "適量(蒸軟切片)" },
    { name: "青江菜", amount: "適量(蒸軟切成菜梗條)" },
    { name: "紫蕃薯", amount: "適量(蒸軟切條)" },
    { name: "雞柳", amount: "適量(蒸熟撕碎)" }
  ],
  steps: [
    "雪梨去皮去芯切片,隔水蒸軟。",
    "青江菜菜梗同紫蕃薯分別隔水蒸軟,切成手指條狀。",
    "雞柳隔水蒸熟,撕成幼絲/碎狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-03.jpg",
  tips: ""
},
{
  id: "combo-6-8-04",
  title: "牛油果南瓜豬柳餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "牛油果", amount: "適量(切條)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "南瓜", amount: "適量(蒸軟切塊)" },
    { name: "豬柳", amount: "適量(蒸熟撕碎)" }
  ],
  steps: [
    "牛油果去皮去核,切成手指粗條。",
    "紅蘿蔔同南瓜分別隔水蒸軟,切成條狀/塊狀。",
    "豬柳隔水蒸熟,撕成幼絲/碎狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-04.jpg",
  tips: ""
},
{
  id: "combo-6-8-05",
  title: "火龍果淮山魚柳餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "火龍果", amount: "適量(蒸軟切塊)" },
    { name: "茄子", amount: "適量(蒸軟切條)" },
    { name: "淮山", amount: "適量(蒸軟切條)" },
    { name: "魚柳", amount: "適量(蒸熟撕碎)" }
  ],
  steps: [
    "火龍果去皮切塊,隔水蒸至軟身。",
    "茄子同淮山分別隔水蒸軟,切成手指條狀。",
    "魚柳隔水蒸熟,仔細檢查冇細骨後撕成碎狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-05.jpg",
  tips: "第一次食新魚種要留意觀察過敏反應,魚肉記得仔細檢查冇細骨先可以俾BB食。"
},
{
  id: "combo-6-8-06",
  title: "木瓜翠玉瓜豆腐餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "豆腐屬黃豆製品,同蠶豆(broad bean)係完全不同品種,一般屬安全食材;如BB對大豆有懷疑可先向醫生確認。",
  allergens: ["大豆"],
  prep_time: 20,
  ingredients: [
    { name: "木瓜", amount: "適量(切條)" },
    { name: "翠玉瓜", amount: "適量(蒸軟切條)" },
    { name: "薯仔", amount: "適量(蒸軟切條)" },
    { name: "豆腐", amount: "適量(蒸熱切條)" }
  ],
  steps: [
    "木瓜去皮去籽,切成手指粗條。",
    "翠玉瓜同薯仔分別隔水蒸軟,切成手指條狀。",
    "豆腐隔水蒸熱,切成條狀,質地軟身方便BB捏住。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-06.jpg",
  tips: ""
},
{
  id: "combo-6-8-07",
  title: "啤梨南瓜雞柳餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "啤梨", amount: "適量(蒸軟切片)" },
    { name: "露筍", amount: "適量(蒸軟切條)" },
    { name: "南瓜", amount: "適量(蒸軟切塊)" },
    { name: "雞柳", amount: "適量(蒸熟撕碎)" }
  ],
  steps: [
    "啤梨去皮去芯切片,隔水蒸軟。",
    "露筍同南瓜分別隔水蒸軟,露筍切去老莖切段,南瓜切塊。",
    "雞柳隔水蒸熟,撕成幼絲。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-07.jpg",
  tips: ""
},
{
  id: "combo-6-8-08",
  title: "提子紅蘿蔔豆腐餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "豆腐屬黃豆製品,同蠶豆(broad bean)係完全不同品種,一般屬安全食材;如BB對大豆有懷疑可先向醫生確認。",
  allergens: ["大豆"],
  prep_time: 20,
  ingredients: [
    { name: "提子", amount: "適量(去皮去籽,蒸熟)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "豆腐", amount: "適量(蒸熱切條)" }
  ],
  steps: [
    "提子去皮去籽,隔水蒸熟軟身(蒸熟令提子皮更易咬開,減低哽塞風險)。",
    "椰菜花同紅蘿蔔分別隔水蒸軟,切成小朵/條狀。",
    "豆腐隔水蒸熱,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-08.jpg",
  tips: "提子建議去皮去籽同切半先俾BB食,減低哽塞風險。"
},
{
  id: "combo-6-8-09",
  title: "蘋果翠玉瓜蛋黃餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 20,
  ingredients: [
    { name: "蘋果", amount: "適量(蒸軟切片)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)" },
    { name: "翠玉瓜", amount: "適量(蒸軟切條)" },
    { name: "雞蛋", amount: "半隻(煮熟蛋黃壓碎)" }
  ],
  steps: [
    "蘋果去皮去芯切片,隔水蒸軟。",
    "粟米筍同翠玉瓜分別隔水蒸軟,切成手指段/條狀。",
    "雞蛋連殼煮熟,剝殼取蛋黃,用叉壓碎。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-09.jpg",
  tips: ""
},
{
  id: "combo-6-8-10",
  title: "木瓜薯仔魚柳餐盤",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "木瓜", amount: "適量(切條)" },
    { name: "青江菜", amount: "適量(蒸軟切成菜梗條)" },
    { name: "薯仔", amount: "適量(蒸軟切條)" },
    { name: "魚柳", amount: "適量(蒸熟撕碎)" }
  ],
  steps: [
    "木瓜去皮去籽,切成手指粗條。",
    "青江菜菜梗同薯仔分別隔水蒸軟,切成手指條狀。",
    "魚柳隔水蒸熟,仔細檢查冇細骨後撕成碎狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-6-8-10.jpg",
  tips: "第一次食新魚種要留意觀察過敏反應,魚肉記得仔細檢查冇細骨先可以俾BB食。"
},

// ========================================
// BLW手指食物組合餐盤(9-12個月)
// 重點:開始有餅狀/糰狀變化,訓練咀嚼同手眼協調。
// ========================================



{
  id: "combo-9-12-01",
  title: "提子雞柳南瓜餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "提子", amount: "適量(去皮去籽切半)" },
    { name: "西蘭花", amount: "適量(蒸軟切小朵)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "雞柳", amount: "適量(蒸熟撕絲)" },
    { name: "南瓜", amount: "適量(蒸軟切塊)" }
  ],
  steps: [
    "提子去皮去籽,切半。",
    "西蘭花同紅蘿蔔分別隔水蒸軟,切成小朵/條狀。",
    "雞柳隔水蒸熟,撕成幼絲。",
    "南瓜隔水蒸軟,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-01.jpg",
  tips: "提子建議去皮去籽同切半先俾BB食,減低哽塞風險。"
},
{
  id: "combo-9-12-02",
  title: "藍莓水煮蛋薯仔餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 25,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)" },
    { name: "雞蛋", amount: "1隻(煮熟切瓣)" },
    { name: "薯仔", amount: "適量(蒸軟切條)" }
  ],
  steps: [
    "藍莓洗淨,用叉背壓扁,減低哽塞風險。",
    "椰菜花同粟米筍分別隔水蒸軟,切成小朵/段。",
    "雞蛋連殼煮熟,剝殼切瓣。",
    "薯仔隔水蒸軟,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-02.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。"
},
{
  id: "combo-9-12-03",
  title: "蘋果魚柳迷你饅頭餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮", "麩質"],
  prep_time: 25,
  ingredients: [
    { name: "蘋果", amount: "適量(蒸軟切片)" },
    { name: "露筍", amount: "適量(蒸軟切條)" },
    { name: "青江菜", amount: "適量(蒸軟切成菜梗條)" },
    { name: "魚柳", amount: "適量(蒸熟撕碎)" },
    { name: "迷你饅頭", amount: "適量(蒸熱)" }
  ],
  steps: [
    "蘋果去皮去芯切片,隔水蒸軟。",
    "露筍同青江菜菜梗分別隔水蒸軟,切成手指條狀。",
    "魚柳隔水蒸熟,仔細檢查冇細骨後撕碎。",
    "迷你饅頭蒸熱,放涼至適合溫度。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-03.jpg",
  tips: "第一次食新魚種要留意觀察過敏反應,魚肉記得仔細檢查冇細骨先可以俾BB食。"
},
{
  id: "combo-9-12-04",
  title: "士多啤梨肉餅淮山餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "士多啤梨", amount: "適量(切半)" },
    { name: "牛油果", amount: "適量(切條)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "豬肉餅", amount: "適量(蒸熟切條)" },
    { name: "淮山", amount: "適量(蒸軟切條)" }
  ],
  steps: [
    "士多啤梨洗淨切半。",
    "牛油果去皮去核切條;紅蘿蔔隔水蒸軟切條。",
    "豬肉碎整成肉餅,隔水蒸熟,切成手指條狀。",
    "淮山隔水蒸軟,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-04.jpg",
  tips: ""
},
{
  id: "combo-9-12-05",
  title: "香蕉三文魚蕃薯糕餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 35,
  ingredients: [
    { name: "香蕉", amount: "適量(蒸軟切片)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)" },
    { name: "翠玉瓜", amount: "適量(蒸軟切條)" },
    { name: "三文魚", amount: "適量(蒸熟撕碎)" },
    { name: "蕃薯蒸糕", amount: "適量(蒸熱切塊)" }
  ],
  steps: [
    "香蕉去皮切片,隔水蒸軟。",
    "椰菜花同翠玉瓜分別隔水蒸軟,切成小朵/條狀。",
    "三文魚隔水蒸熟,仔細檢查冇細骨後撕碎。",
    "蕃薯蒸糕蒸熱,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-05.jpg",
  tips: "三文魚含豐富DHA,第一次食要留意過敏反應。"
},
{
  id: "combo-9-12-06",
  title: "雪梨雞柳淮山肉餅餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 35,
  ingredients: [
    { name: "雪梨", amount: "適量(蒸軟切片)" },
    { name: "茄子", amount: "適量(蒸軟切條)" },
    { name: "黃甜椒", amount: "適量(蒸軟切條)" },
    { name: "雞柳", amount: "適量(蒸熟撕絲)" },
    { name: "淮山豬肉餅", amount: "適量(蒸熟切塊)" }
  ],
  steps: [
    "雪梨去皮去芯切片,隔水蒸軟。",
    "茄子同黃甜椒分別隔水蒸軟,切成手指條狀。",
    "雞柳隔水蒸熟,撕成幼絲。",
    "淮山豬肉餅蒸熟,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-06.jpg",
  tips: ""
},
{
  id: "combo-9-12-07",
  title: "藍莓蘋果豬柳蕃薯條餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)" },
    { name: "蘋果", amount: "適量(蒸軟切片)" },
    { name: "露筍", amount: "適量(蒸軟切條)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)" },
    { name: "豬柳", amount: "適量(蒸熟撕絲)" },
    { name: "蕃薯", amount: "適量(蒸軟切條)" }
  ],
  steps: [
    "藍莓洗淨壓扁;蘋果去皮去芯切片,隔水蒸軟。",
    "露筍同粟米筍分別隔水蒸軟,切成手指條/段。",
    "豬柳隔水蒸熟,撕成幼絲。",
    "蕃薯隔水蒸軟,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-07.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。"
},
{
  id: "combo-9-12-08",
  title: "火龍果香菇迷你饅頭餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 25,
  ingredients: [
    { name: "火龍果", amount: "適量(切塊)" },
    { name: "秋葵", amount: "適量(去頭尾蒸軟切片)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切片)" },
    { name: "鮮香菇", amount: "適量(蒸熟切片)" },
    { name: "迷你饅頭", amount: "適量(蒸熱)" }
  ],
  steps: [
    "火龍果去皮切塊。",
    "秋葵去頭尾同紅蘿蔔分別隔水蒸軟,切成薄片。",
    "鮮香菇隔水蒸熟,切成薄片。",
    "迷你饅頭蒸熱,放涼至適合溫度。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-08.jpg",
  tips: ""
},
{
  id: "combo-9-12-09",
  title: "士多啤梨三文魚淮山條餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "士多啤梨", amount: "適量(切半)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)" },
    { name: "青瓜", amount: "適量(切條)" },
    { name: "三文魚", amount: "適量(蒸熟撕碎)" },
    { name: "淮山", amount: "適量(蒸軟切條)" }
  ],
  steps: [
    "士多啤梨洗淨切半。",
    "椰菜花隔水蒸軟切小朵;青瓜去皮切條。",
    "三文魚隔水蒸熟,仔細檢查冇細骨後撕碎。",
    "淮山隔水蒸軟,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-09.jpg",
  tips: "三文魚含豐富DHA,第一次食要留意過敏反應。"
},
{
  id: "combo-9-12-10",
  title: "提子水煮蛋芋頭糕餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 35,
  ingredients: [
    { name: "提子", amount: "適量(去皮去籽切半)" },
    { name: "白蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "茄子", amount: "適量(蒸軟切條)" },
    { name: "雞蛋", amount: "1隻(煮熟切瓣)" },
    { name: "芋頭蒸糕", amount: "適量(蒸熱切塊)" }
  ],
  steps: [
    "提子去皮去籽,切半。",
    "白蘿蔔同茄子分別隔水蒸軟,切成手指條狀。",
    "雞蛋連殼煮熟,剝殼切瓣。",
    "芋頭蒸糕蒸熱,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-10.jpg",
  tips: "提子建議去皮去籽同切半先俾BB食,減低哽塞風險。"
},
{
  id: "combo-9-12-11",
  title: "藍莓韭菜蛋捲小饅頭餐盤",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋", "麩質"],
  prep_time: 25,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "青瓜", amount: "適量(切條)" },
    { name: "韭菜蛋捲", amount: "適量(煎熟切件)" },
    { name: "小饅頭", amount: "適量(蒸熱)" }
  ],
  steps: [
    "藍莓洗淨壓扁。",
    "紅蘿蔔隔水蒸軟切條;青瓜去皮切條。",
    "韭菜切碎同雞蛋拌勻,煎成蛋捲,切成適合BB嘅小件。",
    "小饅頭蒸熱,放涼至適合溫度。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-9-12-11.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。"
},

// ========================================
// BLW手指食物組合餐盤(1-3歲)
// 重點:造型更多元(餅、糰、卷、意粉、帶骨小禽類),過渡到同桌飲食。
// ========================================



{
  id: "combo-1-3-01",
  title: "火龍果豬柳芋頭糕餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "火龍果", amount: "適量(切塊)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "白蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "豬柳", amount: "適量(蒸熟撕條)" },
    { name: "芋頭蒸糕", amount: "適量(蒸熱切塊)" }
  ],
  steps: [
    "火龍果去皮切塊。",
    "紅蘿蔔同白蘿蔔分別隔水蒸軟,切成手指條狀。",
    "豬柳隔水蒸熟,撕成粗條。",
    "芋頭蒸糕蒸熱,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-01.jpg",
  tips: ""
},
{
  id: "combo-1-3-02",
  title: "蘋果雞柳紫蕃薯餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "蘋果", amount: "適量(蒸軟切片)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)" },
    { name: "雞柳", amount: "適量(蒸熟撕條)" },
    { name: "紫蕃薯", amount: "適量(蒸軟切條)" }
  ],
  steps: [
    "蘋果去皮去芯切片,隔水蒸軟。",
    "椰菜花同粟米筍分別隔水蒸軟,切成小朵/段。",
    "雞柳隔水蒸熟,撕成粗條。",
    "紫蕃薯隔水蒸軟,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-02.jpg",
  tips: ""
},
{
  id: "combo-1-3-03",
  title: "木瓜香菇椰菜煎餅餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋", "麩質"],
  prep_time: 30,
  ingredients: [
    { name: "木瓜", amount: "適量(切條)" },
    { name: "絲瓜", amount: "適量(蒸軟切片)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "鮮香菇", amount: "適量(蒸熟切片)" },
    { name: "椰菜煎餅", amount: "適量(煎熟切件)" }
  ],
  steps: [
    "木瓜去皮去籽,切成手指粗條。",
    "絲瓜同紅蘿蔔分別隔水蒸軟,切成薄片/條狀。",
    "鮮香菇隔水蒸熟,切成薄片。",
    "椰菜切碎拌入蛋汁同少量麵粉,煎成小餅,切成適合BB嘅小件。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-03.jpg",
  tips: ""
},
{
  id: "combo-1-3-04",
  title: "藍莓橙肉雞柳蕃薯餅餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 35,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)" },
    { name: "橙肉", amount: "適量(去籽切小塊)" },
    { name: "秋葵", amount: "適量(去頭尾蒸軟切片)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切片)" },
    { name: "雞柳", amount: "適量(蒸熟撕絲)" },
    { name: "蕃薯豬肉餅", amount: "適量(蒸熟切件)" }
  ],
  steps: [
    "藍莓洗淨壓扁;橙肉去籽切成小塊。",
    "秋葵去頭尾同紅蘿蔔分別隔水蒸軟,切成薄片。",
    "雞柳隔水蒸熟,撕成幼絲。",
    "蕃薯豬肉餅蒸熟,切成適合BB嘅小件。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-04.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。"
},
{
  id: "combo-1-3-05",
  title: "士多啤梨三文魚薯仔餅餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮", "蛋"],
  prep_time: 35,
  ingredients: [
    { name: "士多啤梨", amount: "適量(切半)" },
    { name: "西蘭花", amount: "適量(蒸軟切小朵)" },
    { name: "青瓜", amount: "適量(切條)" },
    { name: "三文魚薯仔煎餅", amount: "適量(煎熟切件)" },
    { name: "迷你飯糰", amount: "適量(捏成小飯糰)" }
  ],
  steps: [
    "士多啤梨洗淨切半。",
    "西蘭花隔水蒸軟切小朵;青瓜去皮切條。",
    "三文魚拆碎拌入薯蓉同少量蛋汁,煎成小餅,切成適合BB嘅小件。",
    "白飯捏成迷你飯糰。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-05.jpg",
  tips: "三文魚含豐富DHA,第一次食要留意過敏反應。"
},
{
  id: "combo-1-3-06",
  title: "提子番茄牛肉意粉餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 30,
  ingredients: [
    { name: "提子", amount: "適量(去皮去籽切半)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "短意粉", amount: "適量(煮軟剪短)" },
    { name: "牛肉碎", amount: "適量(炒熟)" },
    { name: "番茄", amount: "適量(煮軟切碎)" }
  ],
  steps: [
    "提子去皮去籽,切半。",
    "椰菜花同紅蘿蔔分別隔水蒸軟,切成小朵/條狀。",
    "短意粉煮軟,剪成適合BB嘅長度。",
    "番茄去皮切碎,同牛肉碎一齊煮成醬,拌入意粉。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-06.jpg",
  tips: "提子建議去皮去籽同切半先俾BB食,減低哽塞風險。"
},
{
  id: "combo-1-3-07",
  title: "雪梨三文魚薯仔餅餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮", "蛋", "麩質"],
  prep_time: 35,
  ingredients: [
    { name: "雪梨", amount: "適量(蒸軟切片)" },
    { name: "西蘭花", amount: "適量(蒸軟切小朵)" },
    { name: "黃甜椒", amount: "適量(蒸軟切條)" },
    { name: "三文魚薯仔煎餅", amount: "適量(煎熟切件)" },
    { name: "椰菜煎餅", amount: "適量(煎熟切件)" }
  ],
  steps: [
    "雪梨去皮去芯切片,隔水蒸軟。",
    "西蘭花同黃甜椒分別隔水蒸軟,切成小朵/條狀。",
    "三文魚拆碎拌入薯蓉同少量蛋汁,煎成小餅,切成適合BB嘅小件。",
    "椰菜切碎拌入蛋汁同少量麵粉,煎成小餅,切成適合BB嘅小件。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-07.jpg",
  tips: "三文魚含豐富DHA,第一次食要留意過敏反應。"
},
{
  id: "combo-1-3-08",
  title: "藍莓番茄雞肉意粉餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 30,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)" },
    { name: "茄子", amount: "適量(蒸軟切條)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)" },
    { name: "短意粉", amount: "適量(煮軟剪短)" },
    { name: "雞肉碎", amount: "適量(炒熟)" },
    { name: "番茄", amount: "適量(煮軟切碎)" }
  ],
  steps: [
    "藍莓洗淨壓扁。",
    "茄子同紅蘿蔔分別隔水蒸軟,切成手指條狀。",
    "短意粉煮軟,剪成適合BB嘅長度。",
    "番茄去皮切碎,同雞肉碎一齊煮成醬,拌入意粉。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-08.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。"
},
{
  id: "combo-1-3-09",
  title: "火龍果豬肉餅飯糰餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "火龍果", amount: "適量(切塊)" },
    { name: "秋葵", amount: "適量(去頭尾蒸軟切片)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)" },
    { name: "淮山豬肉餅", amount: "適量(蒸熟切件)" },
    { name: "迷你飯糰", amount: "適量(捏成小飯糰)" }
  ],
  steps: [
    "火龍果去皮切塊。",
    "秋葵去頭尾同粟米筍分別隔水蒸軟,切成薄片/段。",
    "淮山豬肉餅蒸熟,切成適合BB嘅小件。",
    "白飯捏成迷你飯糰。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-09.jpg",
  tips: ""
},
{
  id: "combo-1-3-10",
  title: "木瓜蕃薯豬肉餅餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "木瓜", amount: "適量(切條)" },
    { name: "露筍", amount: "適量(蒸軟切條)" },
    { name: "青瓜", amount: "適量(切條)" },
    { name: "蕃薯豬肉餅", amount: "適量(蒸熟切件)" },
    { name: "紫蕃薯", amount: "適量(蒸軟切條)" }
  ],
  steps: [
    "木瓜去皮去籽,切成手指粗條。",
    "露筍隔水蒸軟切條;青瓜去皮切條。",
    "蕃薯豬肉餅蒸熟,切成適合BB嘅小件。",
    "紫蕃薯隔水蒸軟,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-10.jpg",
  tips: ""
},
{
  id: "combo-1-3-11",
  title: "哈密瓜蝦仁鱈魚餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "哈密瓜", amount: "適量(切塊)" },
    { name: "蘆筍", amount: "適量(蒸軟切段)" },
    { name: "紅椒", amount: "適量(蒸軟切粒)" },
    { name: "蝦仁", amount: "適量(去腸蒸熟切碎)" },
    { name: "鱈魚", amount: "適量(蒸熟撕碎)" }
  ],
  steps: [
    "哈密瓜去皮去籽,切成小塊。",
    "蘆筍隔水蒸軟切段;紅椒隔水蒸軟切粒。",
    "蝦仁去腸洗淨,隔水蒸熟切碎。",
    "鱈魚隔水蒸熟,仔細檢查冇細骨後撕碎。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-11.jpg",
  tips: "蝦仁、鱈魚屬首次引入嘅海鮮食材,建議先單獨試食,留意有冇過敏反應。"
},
{
  id: "combo-1-3-12",
  title: "蜜瓜小饅頭蛋捲餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋", "麩質"],
  prep_time: 25,
  ingredients: [
    { name: "蜜瓜", amount: "適量(切塊)" },
    { name: "紅椒", amount: "適量(蒸軟切粒)" },
    { name: "粟米", amount: "1條(蒸熟)" },
    { name: "小饅頭", amount: "適量(蒸熱)" },
    { name: "雞蛋", amount: "適量(煎成蛋捲切件)" }
  ],
  steps: [
    "蜜瓜去皮去籽,切成小塊。",
    "紅椒隔水蒸軟切粒;粟米整條隔水蒸熟。",
    "小饅頭蒸熱,放涼至適合溫度。",
    "雞蛋打散煎成蛋捲,切成適合BB嘅小件。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-12.jpg",
  tips: ""
},
{
  id: "combo-1-3-13",
  title: "哈密瓜咖喱雞髀餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 35,
  ingredients: [
    { name: "哈密瓜", amount: "適量(切塊)" },
    { name: "紅椒", amount: "適量(蒸軟切粒)" },
    { name: "粟米", amount: "1條(蒸熟)" },
    { name: "小雞髀", amount: "適量(咖喱燜熟)" }
  ],
  steps: [
    "哈密瓜去皮去籽,切成小塊。",
    "紅椒隔水蒸軟切粒;粟米整條隔水蒸熟。",
    "小雞髀用少量咖喱粉同水燜煮至熟透軟身。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-13.jpg",
  tips: "⚠️帶骨食材:骨較細,建議先撕走大部分肉畀BB自己拎,家長在旁睇住,避免BB直接較大力咬骨。呢個組合屬首次引入嘅食材,建議留意有冇過敏反應。"
},
{
  id: "combo-1-3-14",
  title: "蜜瓜鵪鶉髀餐盤",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 35,
  ingredients: [
    { name: "蜜瓜", amount: "適量(切塊)" },
    { name: "蘆筍", amount: "適量(蒸軟切段)" },
    { name: "紅椒", amount: "適量(蒸軟切粒)" },
    { name: "鵪鶉髀", amount: "適量(蒸熟)" }
  ],
  steps: [
    "蜜瓜去皮去籽,切成小塊。",
    "蘆筍同紅椒分別隔水蒸軟,切成段/粒。",
    "鵪鶉髀隔水蒸熟至軟身。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  image: "combo-1-3-14.jpg",
  tips: "⚠️帶骨食材:骨較細,建議先撕走大部分肉畀BB自己拎,家長在旁睇住,避免BB直接較大力咬骨。"
}

];
