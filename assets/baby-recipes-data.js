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
  title_id: "Bubur Beras Encer 1:10 Pertama",
  title_fil: "Unang Lugaw/Papa na Bigas 1:10",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "白米", amount: "1份", name_id: "Beras putih", amount_id: "1 bagian", name_fil: "Puting bigas", amount_fil: "1 bahagi" },
    { name: "水", amount: "10份", name_id: "Air", amount_id: "10 bagian", name_fil: "Tubig", amount_fil: "10 bahagi" }
  ],
  steps: [
    "白米洗淨浸泡約1小時",
    "水滾後加入米,大火煮滾",
    "轉中慢火煮至米粒開花,期間間中攪動",
    "用濾網或攪拌器打成幼滑無顆粒嘅米糊"
  ],
  steps_id: [
    "Cuci beras putih, rendam sekitar 1 jam",
    "Setelah air mendidih, masukkan beras, masak dengan api besar hingga mendidih",
    "Kecilkan api, masak hingga butir beras merekah, aduk sesekali",
    "Saring atau blender hingga menjadi bubur halus tanpa gumpalan"
  ],
  steps_fil: [
    "Hugasan ang puting bigas, ibabad ng humigit-kumulang 1 oras",
    "Kapag kumukulo na ang tubig, idagdag ang bigas, pakuluan sa mataas na apoy",
    "Hinaan ang apoy, lutuin hanggang mamukadkad ang bigas, haluin paminsan-minsan",
    "Salain o i-blend hanggang maging makinis na lugaw na walang buo-buo"
  ],
  image: "first-rice-cereal.jpg",
  tips: "呢個係BB第一口固體食物嘅基礎,建議連續食2-3日,冇敏感反應先開始加其他單一食材。",
  tips_id: "Ini adalah dasar makanan padat pertama bayi, disarankan diberikan 2-3 hari berturut-turut, baru tambahkan bahan tunggal lain jika tidak ada reaksi alergi.",
  tips_fil: "Ito ang batayan ng unang solidong pagkain ng sanggol, inirerekomendang ipakain ng 2-3 araw nang sunud-sunod, bago magdagdag ng ibang solong sangkap kung walang reaksyong alerhiya."
},
{
  id: "apple-mash-single-01",
  title: "蘋果蓉(單一試敏)",
  title_id: "Puree Apel (Uji Alergi Tunggal)",
  title_fil: "Mashed na Mansanas (Solong Pagsubok sa Alerhiya)",
  stage: "6-8個月",
  category: "水果泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 15,
  ingredients: [
    { name: "蘋果", amount: "1個", name_id: "Apel", amount_id: "1 buah", name_fil: "Mansanas", amount_fil: "1 piraso" }
  ],
  steps: [
    "蘋果洗淨去皮去芯,切小塊",
    "隔水蒸10分鐘至軟身",
    "用叉子壓成幼滑蓉狀,或用茶匙輕輕刮成果蓉"
  ],
  steps_id: [
    "Cuci apel, kupas dan buang bijinya, potong dadu kecil",
    "Kukus selama 10 menit hingga empuk",
    "Haluskan dengan garpu hingga menjadi puree halus, atau kerok pelan dengan sendok teh"
  ],
  steps_fil: [
    "Hugasan ang mansanas, alisin ang balat at buto, hiwain nang maliliit",
    "Pasingawan ng 10 minuto hanggang lumambot",
    "Durugin gamit ang tinidor hanggang maging makinis na puree, o kayurin nang dahan-dahan gamit ang kutsarita"
  ],
  image: "apple-mash.jpg",
  tips: "第一次食新食材,建議單獨試食,唔好同其他新食材混合,方便觀察有冇敏感反應。",
  tips_id: "Untuk bahan makanan baru pertama kali, disarankan diberikan sendiri, jangan dicampur bahan baru lain, agar mudah memantau reaksi alergi.",
  tips_fil: "Sa unang pagkain ng bagong sangkap, inirerekomendang ipakain nang mag-isa, huwag ihalo sa ibang bagong sangkap, para madaling obserbahan kung may reaksyong alerhiya."
},
{
  id: "banana-mash-single-01",
  title: "香蕉蓉(單一試敏)",
  title_id: "Puree Pisang (Uji Alergi Tunggal)",
  title_fil: "Mashed na Saging (Solong Pagsubok sa Alerhiya)",
  stage: "6-8個月",
  category: "水果泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 5,
  ingredients: [
    { name: "熟香蕉", amount: "半隻", name_id: "Pisang matang", amount_id: "1/2 buah", name_fil: "Hinog na saging", amount_fil: "1/2 piraso" }
  ],
  steps: [
    "香蕉去皮切段",
    "用叉子壓成幼滑蓉狀",
    "質地太稠可加少量温開水調較"
  ],
  steps_id: [
    "Kupas pisang, potong-potong",
    "Haluskan dengan garpu hingga menjadi puree halus",
    "Jika terlalu kental, tambahkan sedikit air matang hangat"
  ],
  steps_fil: [
    "Balatan ang saging, hiwain",
    "Durugin gamit ang tinidor hanggang maging makinis",
    "Kung masyadong malapot, magdagdag ng kaunting mainit na pinakuluang tubig"
  ],
  image: "banana-mash.jpg",
  tips: "香蕉唔使加熱都可以直接壓蓉,係方便嘅入門食材之一。",
  tips_id: "Pisang tidak perlu dipanaskan, bisa langsung dihaluskan, salah satu bahan pemula yang praktis.",
  tips_fil: "Hindi na kailangang painitin ang saging, puwede nang direktang durugin, isa sa mga madaling unang sangkap."
},
{
  id: "papaya-mash-single-01",
  title: "木瓜蓉(單一試敏)",
  title_id: "Puree Pepaya (Uji Alergi Tunggal)",
  title_fil: "Mashed na Papaya (Solong Pagsubok sa Alerhiya)",
  stage: "6-8個月",
  category: "水果泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 5,
  ingredients: [
    { name: "熟木瓜", amount: "1/4個", name_id: "Pepaya matang", amount_id: "1/4 buah", name_fil: "Hinog na papaya", amount_fil: "1/4 piraso" }
  ],
  steps: [
    "木瓜去皮去籽",
    "用叉子壓成幼滑蓉狀"
  ],
  steps_id: [
    "Kupas pepaya, buang bijinya",
    "Haluskan dengan garpu hingga menjadi puree halus"
  ],
  steps_fil: [
    "Balatan ang papaya, alisin ang buto",
    "Durugin gamit ang tinidor hanggang maging makinis"
  ],
  image: "papaya-mash.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "pumpkin-mash-single-01",
  title: "南瓜蓉(單一試敏)",
  title_id: "Puree Labu Kuning (Uji Alergi Tunggal)",
  title_fil: "Mashed na Kalabasa (Solong Pagsubok sa Alerhiya)",
  stage: "6-8個月",
  category: "蔬菜泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "南瓜", amount: "150克", name_id: "Labu kuning", amount_id: "150 gram", name_fil: "Kalabasa", amount_fil: "150 gramo" }
  ],
  steps: [
    "南瓜去皮去籽,切成約1厘米粒",
    "隔水蒸10-15分鐘至軟身",
    "用叉子壓成幼滑蓉狀"
  ],
  steps_id: [
    "Kupas labu, buang bijinya, potong dadu sekitar 1cm",
    "Kukus selama 10-15 menit hingga empuk",
    "Haluskan dengan garpu hingga menjadi puree halus"
  ],
  steps_fil: [
    "Balatan ang kalabasa, alisin ang buto, hiwain nang mga 1cm",
    "Pasingawan ng 10-15 minuto hanggang lumambot",
    "Durugin gamit ang tinidor hanggang maging makinis"
  ],
  image: "pumpkin-mash.jpg",
  tips: "南瓜可以替換做冬瓜、合掌瓜、番薯等其他瓜類/根莖類蔬菜,做法一樣。",
  tips_id: "Labu kuning bisa diganti dengan labu putih, chayote, ubi jalar, atau sayuran umbi lain, caranya sama.",
  tips_fil: "Ang kalabasa ay puwedeng palitan ng kondol, chayote, kamote, o iba pang gulay na ugat, pareho ang paraan."
},
{
  id: "potato-mash-single-01",
  title: "薯仔蓉(單一試敏)",
  title_id: "Puree Kentang (Uji Alergi Tunggal)",
  title_fil: "Mashed na Patatas (Solong Pagsubok sa Alerhiya)",
  stage: "6-8個月",
  category: "蔬菜泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "薯仔", amount: "1個", name_id: "Kentang", amount_id: "1 buah", name_fil: "Patatas", amount_fil: "1 piraso" }
  ],
  steps: [
    "薯仔洗淨去皮切件",
    "落滾水煮10-15分鐘至叉子可以輕易穿過",
    "撈起趁熱用叉/匙羹壓成蓉,可加少量暖開水令質地更濕潤",
    "如想更幼滑,可以隔濾網再過一次"
  ],
  steps_id: [
    "Cuci kentang, kupas, potong-potong",
    "Rebus dalam air mendidih 10-15 menit hingga garpu mudah menusuk",
    "Angkat selagi panas, haluskan dengan garpu/sendok, bisa tambah sedikit air hangat agar lebih lembut",
    "Untuk tekstur lebih halus, saring sekali lagi"
  ],
  steps_fil: [
    "Hugasan ang patatas, balatan, hiwain",
    "Pakuluan sa tubig ng 10-15 minuto hanggang madaling tusukin ng tinidor",
    "Alisin habang mainit, durugin gamit ang tinidor/kutsara, puwedeng magdagdag ng kaunting mainit na tubig para mas malambot",
    "Kung gusto mas makinis, salain muli"
  ],
  image: "potato-mash.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "carrot-mash-single-01",
  title: "紅蘿蔔蓉(單一試敏)",
  title_id: "Puree Wortel (Uji Alergi Tunggal)",
  title_fil: "Mashed na Karot (Solong Pagsubok sa Alerhiya)",
  stage: "6-8個月",
  category: "蔬菜泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "紅蘿蔔", amount: "1條", name_id: "Wortel", amount_id: "1 batang", name_fil: "Karot", amount_fil: "1 tangkay" }
  ],
  steps: [
    "紅蘿蔔去皮切片",
    "隔水蒸15分鐘至軟身",
    "壓成蓉或用濾網磨成幼滑糊狀"
  ],
  steps_id: [
    "Kupas wortel, iris",
    "Kukus selama 15 menit hingga empuk",
    "Haluskan dengan garpu atau saring hingga menjadi puree halus"
  ],
  steps_fil: [
    "Balatan ang karot, hiwain",
    "Pasingawan ng 15 minuto hanggang lumambot",
    "Durugin o salain hanggang maging makinis na puree"
  ],
  image: "carrot-mash.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "spinach-mash-single-01",
  title: "菠菜蓉(單一試敏)",
  title_id: "Puree Bayam (Uji Alergi Tunggal)",
  title_fil: "Mashed na Spinach (Solong Pagsubok sa Alerhiya)",
  stage: "6-8個月",
  category: "蔬菜泥",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 10,
  ingredients: [
    { name: "菠菜", amount: "1小紮", name_id: "Bayam", amount_id: "1 ikat kecil", name_fil: "Spinach", amount_fil: "1 maliit na bigkis" }
  ],
  steps: [
    "菠菜用流動清水沖洗乾淨",
    "落滾水焯1-3分鐘,撈起瀝乾(唔好用焯菜水餵BB)",
    "切去莖部淨用菜葉,切碎後用濾網或攪拌器磨成蓉"
  ],
  steps_id: [
    "Cuci bayam bersih dengan air mengalir",
    "Rebus sebentar 1-3 menit dalam air mendidih, angkat dan tiriskan (jangan gunakan air rebusan untuk bayi)",
    "Buang batangnya, gunakan daun saja, cincang lalu saring atau blender hingga menjadi puree"
  ],
  steps_fil: [
    "Hugasan ang spinach sa umaagos na tubig",
    "Iluto sandali sa kumukulong tubig ng 1-3 minuto, alisin at salain (huwag gamitin ang tubig na pinaglutuan para sa sanggol)",
    "Alisin ang tangkay, gamitin lang ang dahon, tadtarin pagkatapos salain o i-blend hanggang maging puree"
  ],
  image: "spinach-mash.jpg",
  tips: "葉菜類建議即製即食,唔好隔夜存放蓉狀嘅葉菜。",
  tips_id: "Sayuran daun disarankan langsung dimakan setelah dibuat, jangan simpan puree sayuran daun semalaman.",
  tips_fil: "Ang malalagong gulay ay inirerekomendang kaininin agad pagkatapos lutuin, huwag itago ang puree ng malagong gulay magdamag."
},
{
  id: "pumpkin-tofu-congee-01",
  title: "南瓜豆腐粥",
  title_id: "Bubur Labu Kuning Tahu",
  title_fil: "Lugaw na Kalabasa at Tokwa",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "caution",
  g6pd_note: "豆腐屬黃豆製品,同蠶豆(broad bean)係完全不同品種,一般屬安全食材;如BB對大豆有懷疑可先向醫生確認。",
  g6pd_note_id: "Tahu adalah produk kedelai, spesies yang sama sekali berbeda dari kacang fava (broad bean), umumnya bahan yang aman; jika ragu bayi sensitif terhadap kedelai, konsultasikan dengan dokter dulu.",
  g6pd_note_fil: "Ang tokwa ay gawa sa soybean, ibang-iba ang species kumpara sa broad bean, karaniwang ligtas na sangkap; kung may alinlangan sa sensitibidad ng sanggol sa soy, kumonsulta muna sa doktor.",
  allergens: ["大豆"],
  prep_time: 25,
  ingredients: [
    { name: "南瓜", amount: "3湯匙(切約1厘米粒)", name_id: "Labu kuning", amount_id: "3 sdm (potong dadu ~1cm)", name_fil: "Kalabasa", amount_fil: "3 kutsara (hiwain ~1cm)" },
    { name: "豆腐", amount: "3湯匙", name_id: "Tahu", amount_id: "3 sdm", name_fil: "Tokwa", amount_fil: "3 kutsara" },
    { name: "十倍粥", amount: "1碗半", name_id: "Bubur encer (1:10)", amount_id: "1,5 mangkuk", name_fil: "Manipis na lugaw (1:10)", amount_fil: "1.5 tasa" }
  ],
  steps: [
    "南瓜粒隔水蒸10-15分鐘至軟身",
    "用叉將豆腐同南瓜一齊壓成蓉",
    "粥煮滾後加入南瓜豆腐蓉拌勻,轉中火多煮2分鐘即可"
  ],
  steps_id: [
    "Kukus labu kuning selama 10-15 menit hingga empuk",
    "Haluskan tahu dan labu bersama dengan garpu",
    "Setelah bubur mendidih, masukkan puree labu-tahu, aduk rata, masak lagi 2 menit dengan api sedang"
  ],
  steps_fil: [
    "Pasingawan ang kalabasa ng 10-15 minuto hanggang lumambot",
    "Durugin ang tokwa at kalabasa nang magkasama gamit ang tinidor",
    "Kapag kumukulo na ang lugaw, ilagay ang durog na kalabasa-tokwa, haluin, lutuin pa ng 2 minuto sa katamtamang apoy"
  ],
  image: "pumpkin-tofu-congee.jpg",
  tips: "呢個係組合類食譜,建議南瓜同豆腐都分別單獨試過冇敏感反應先嘗試呢個組合。",
  tips_id: "Ini resep kombinasi, disarankan labu dan tahu masing-masing sudah dicoba sendiri tanpa reaksi alergi sebelum mencoba kombinasi ini.",
  tips_fil: "Ito ay recipe na kombinasyon, inirerekomendang subukan muna ang kalabasa at tokwa nang hiwalay na walang reaksyong alerhiya bago subukan ang kombinasyong ito."
},
{
  id: "choysum-eggyolk-cereal-01",
  title: "菜心蛋黃米糊",
  title_id: "Bubur Beras Sawi Caisim & Kuning Telur",
  title_fil: "Papa na Bigas na may Choy Sum at Pula ng Itlog",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 25,
  ingredients: [
    { name: "嬰兒米粉", amount: "6平湯匙", name_id: "Tepung beras bayi", amount_id: "6 sdm munjung", name_fil: "Harina ng bigas para sa sanggol", amount_fil: "6 kutsarang lebreng-lebreng" },
    { name: "母乳或配方奶", amount: "160毫升", name_id: "ASI atau susu formula", amount_id: "160 ml", name_fil: "Gatas ng ina o gatas na pormula", amount_fil: "160 ml" },
    { name: "菜心", amount: "5片嫩葉", name_id: "Sawi caisim", amount_id: "5 lembar daun muda", name_fil: "Choy sum", amount_fil: "5 dahong malambot" },
    { name: "蛋黃", amount: "半隻(去蛋白)", name_id: "Kuning telur", amount_id: "1/2 butir (buang putihnya)", name_fil: "Pula ng itlog", amount_fil: "1/2 piraso (alisin ang puti)" }
  ],
  steps: [
    "菜心洗淨,落滾水焯熟,取出瀝乾,切碎或用濾網磨成菜蓉",
    "雞蛋整隻連殼煮約10分鐘至全熟,剝殼後淨取蛋黃,用叉壓碎,加少量開水調成滑糊",
    "母乳/配方奶同嬰兒米粉調成米糊,拌入菜心蓉同蛋黃蓉即成"
  ],
  steps_id: [
    "Cuci sawi caisim, rebus dalam air mendidih hingga matang, angkat tiriskan, cincang atau saring hingga menjadi puree",
    "Rebus telur utuh dengan cangkangnya selama 10 menit hingga matang sempurna, kupas, ambil kuning telurnya saja, haluskan dengan garpu, tambah sedikit air matang hingga menjadi bubur halus",
    "Campur ASI/susu formula dengan tepung beras bayi hingga menjadi bubur, aduk rata dengan puree sawi dan puree kuning telur"
  ],
  steps_fil: [
    "Hugasan ang choy sum, iluto sa kumukulong tubig hanggang maluto, alisin at salain, tadtarin o salain hanggang maging puree",
    "Pakuluan ang buong itlog na may balat ng humigit-kumulang 10 minuto hanggang lutong-luto, balatan, kunin lang ang pula, durugin gamit ang tinidor, magdagdag ng kaunting mainit na tubig hanggang maging makinis",
    "Ihalo ang gatas ng ina/gatas na pormula sa harina ng bigas para sa sanggol hanggang maging papa, ihalo ang puree ng choy sum at puree ng pula ng itlog"
  ],
  image: "choysum-eggyolk-cereal.jpg",
  tips: "蛋黃建議由半隻開始試,首次引入雞蛋要留意有冇皮膚/腸胃敏感反應。蛋白引入時間建議先問返醫生意見。",
  tips_id: "Disarankan mulai kuning telur dari setengah butir, saat pertama kali memperkenalkan telur perhatikan reaksi alergi kulit/pencernaan. Untuk waktu memperkenalkan putih telur, sebaiknya tanya dokter dulu.",
  tips_fil: "Inirerekomendang magsimula sa kalahating pula ng itlog, sa unang pagpapakilala ng itlog obserbahan kung may reaksyong alerhiya sa balat/tiyan. Para sa oras ng pagpapakilala ng puti ng itlog, magtanong muna sa doktor."
},
{
  id: "chicken-pea-congee-01",
  title: "雞肉青豆粥",
  title_id: "Bubur Ayam Kacang Polong",
  title_fil: "Lugaw na Manok at Gisantes",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "青豆(豌豆)同蠶豆(broad bean)品種不同,一般屬安全食材。",
  g6pd_note_id: "Kacang polong (green pea) berbeda spesies dari kacang fava (broad bean), umumnya bahan yang aman.",
  g6pd_note_fil: "Ibang species ang gisantes (green pea) kumpara sa broad bean, karaniwang ligtas na sangkap.",
  allergens: [],
  prep_time: 25,
  ingredients: [
    { name: "去皮雞肉", amount: "2湯匙(剁碎)", name_id: "Daging ayam tanpa kulit", amount_id: "2 sdm (cincang halus)", name_fil: "Manok na walang balat", amount_fil: "2 kutsara (tinadtad)" },
    { name: "青豆", amount: "2湯匙", name_id: "Kacang polong", amount_id: "2 sdm", name_fil: "Gisantes", amount_fil: "2 kutsara" },
    { name: "十倍粥", amount: "1碗半", name_id: "Bubur encer (1:10)", amount_id: "1,5 mangkuk", name_fil: "Manipis na lugaw (1:10)", amount_fil: "1.5 tasa" }
  ],
  steps: [
    "青豆煮熟瀝乾,用濾網同匙羹背壓成蓉,隔去豆皮",
    "粥煮滾,加入剁碎雞肉,用筷子拌散,煮至全熟",
    "加入青豆蓉,煮滾即可"
  ],
  steps_id: [
    "Rebus kacang polong hingga matang, tiriskan, haluskan dengan saringan dan punggung sendok, buang kulitnya",
    "Setelah bubur mendidih, masukkan ayam cincang, aduk dengan sumpit agar tidak menggumpal, masak hingga matang sempurna",
    "Masukkan puree kacang polong, masak hingga mendidih"
  ],
  steps_fil: [
    "Pakuluan ang gisantes hanggang maluto, salain, durugin gamit ang salaan at likod ng kutsara, alisin ang balat",
    "Kapag kumukulo na ang lugaw, ilagay ang tinadtad na manok, haluin gamit ang chopsticks para hindi mag-umpukan, lutuin hanggang lutong-luto",
    "Ilagay ang durog na gisantes, pakuluan"
  ],
  image: "chicken-pea-congee.jpg",
  tips: "肉汁/肉湯本身營養有限,建議直接餵食剁碎嘅肉蓉,先可以吸收較多鐵質等營養素。",
  tips_id: "Kaldu/sup daging sendiri nutrisinya terbatas, disarankan langsung memberi puree daging cincang, agar bisa menyerap lebih banyak zat besi dan nutrisi lainnya.",
  tips_fil: "Limitado ang nutrisyon ng sabaw/sopas ng karne, inirerekomendang direktang ipakain ang durog na giniling na karne, para mas maraming maabsorb na iron at iba pang nutrisyon."
},
{
  id: "wintermelon-tomato-liver-congee-01",
  title: "冬瓜番茄豬肝粥",
  title_id: "Bubur Labu Putih, Tomat & Hati Babi",
  title_fil: "Lugaw na Kondol, Kamatis at Atay ng Baboy",
  stage: "6-8個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "冬瓜", amount: "2塊(去皮切約3厘米粒)", name_id: "Labu putih", amount_id: "2 potong (kupas, potong dadu ~3cm)", name_fil: "Kondol", amount_fil: "2 piraso (balatan, hiwain ~3cm)" },
    { name: "番茄", amount: "1/8個(細)", name_id: "Tomat", amount_id: "1/8 buah (kecil)", name_fil: "Kamatis", amount_fil: "1/8 piraso (maliit)" },
    { name: "豬肝", amount: "1片(約可壓成1湯匙肝蓉)", name_id: "Hati babi", amount_id: "1 iris (setara ~1 sdm puree)", name_fil: "Atay ng baboy", amount_fil: "1 hiwa (mga 1 kutsarang puree)" },
    { name: "稀粥", amount: "半至1碗", name_id: "Bubur encer", amount_id: "0,5-1 mangkuk", name_fil: "Manipis na lugaw", amount_fil: "0.5-1 tasa" }
  ],
  steps: [
    "番茄去籽,同冬瓜一齊落滾水煮熟,瀝乾",
    "冬瓜用叉壓成蓉;番茄去皮切幼粒或用濾網壓蓉",
    "豬肝隔水蒸熟(唔好蒸過火,否則難壓蓉),用叉或濾網壓成蓉",
    "粥煮滾,加入冬瓜蓉、番茄蓉、豬肝蓉,再煮滾3分鐘即成"
  ],
  steps_id: [
    "Buang biji tomat, rebus bersama labu putih dalam air mendidih hingga matang, tiriskan",
    "Haluskan labu putih dengan garpu; kupas tomat, potong halus atau saring hingga menjadi puree",
    "Kukus hati babi hingga matang (jangan terlalu lama, nanti sulit dihaluskan), haluskan dengan garpu atau saringan",
    "Setelah bubur mendidih, masukkan puree labu putih, puree tomat, puree hati babi, masak lagi hingga mendidih selama 3 menit"
  ],
  steps_fil: [
    "Alisin ang buto ng kamatis, iluto kasama ang kondol sa kumukulong tubig hanggang maluto, salain",
    "Durugin ang kondol gamit ang tinidor; balatan ang kamatis, tadtarin nang pino o salain hanggang maging puree",
    "Pasingawan ang atay ng baboy hanggang maluto (huwag masyadong tagal, mahihirapang durugin), durugin gamit ang tinidor o salaan",
    "Kapag kumukulo na ang lugaw, ilagay ang puree ng kondol, puree ng kamatis, puree ng atay, lutuin pa ng 3 minuto hanggang kumulo"
  ],
  image: "wintermelon-liver-congee.jpg",
  tips: "豬肝含豐富鐵質同維他命A,但攝取過量維他命A對身體有害,建議兩星期食用豬肝唔多於一次。",
  tips_id: "Hati babi kaya akan zat besi dan vitamin A, tapi kelebihan vitamin A berbahaya bagi tubuh, disarankan makan hati babi tidak lebih dari sekali dalam dua minggu.",
  tips_fil: "Mayaman sa iron at vitamin A ang atay ng baboy, pero mapanganib sa katawan ang labis na vitamin A, inirerekomendang kainin ang atay ng baboy nang hindi hihigit sa isang beses bawat dalawang linggo."
},

// ========================================
// 9-12個月(碎顆粒與手指食物期)
// 重點:訓練咀嚼同手眼協調,質地由幼滑過渡到有顆粒/軟碎狀,
// 手指食物要切成適合BB自己拎住嘅形狀,長條/大細粒都要留意防哽塞。
// ========================================

{
  id: "tofu-seaweed-pork-congee-01",
  title: "豆腐紫菜肉碎粥/軟飯",
  title_id: "Bubur/Nasi Lembek Tahu, Nori & Cincang Babi",
  title_fil: "Lugaw/Malambot na Kanin na may Tokwa, Nori at Giniling na Baboy",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "caution",
  g6pd_note: "豆腐屬黃豆製品,一般屬安全食材,如有疑慮可向醫生確認。",
  g6pd_note_id: "Tahu adalah produk kedelai, umumnya bahan yang aman, jika ragu bisa konsultasikan dengan dokter.",
  g6pd_note_fil: "Ang tokwa ay gawa sa soybean, karaniwang ligtas na sangkap, kung may alinlangan kumonsulta sa doktor.",
  allergens: ["大豆"],
  prep_time: 25,
  ingredients: [
    { name: "豆腐", amount: "3湯匙(壓蓉)", name_id: "Tahu", amount_id: "3 sdm (dihaluskan)", name_fil: "Tokwa", amount_fil: "3 kutsara (durugin)" },
    { name: "即食壽司紫菜", amount: "2湯匙(撕碎)", name_id: "Nori sushi siap makan", amount_id: "2 sdm (disobek)", name_fil: "Nori na pang-sushi", amount_fil: "2 kutsara (pinunit)" },
    { name: "豬肉", amount: "1湯匙(剁碎)", name_id: "Daging babi", amount_id: "1 sdm (cincang halus)", name_fil: "Baboy", amount_fil: "1 kutsara (tinadtad)" },
    { name: "粥或軟飯", amount: "1碗粥/半碗軟飯", name_id: "Bubur atau nasi lembek", amount_id: "1 mangkuk bubur/0,5 mangkuk nasi lembek", name_fil: "Lugaw o malambot na kanin", amount_fil: "1 tasang lugaw/0.5 tasang malambot na kanin" }
  ],
  steps: [
    "豬肉剁碎後加少量水拌勻令肉碎散開",
    "粥煮滾或軟飯加熱,加入豬肉碎邊煮邊拌勻至熟透",
    "加入紫菜同豆腐蓉拌勻,再煮2分鐘即成"
  ],
  steps_id: [
    "Cincang halus daging babi, tambah sedikit air, aduk agar tidak menggumpal",
    "Panaskan bubur/nasi lembek hingga mendidih, masukkan daging cincang sambil diaduk hingga matang",
    "Masukkan nori dan puree tahu, aduk rata, masak lagi 2 menit"
  ],
  steps_fil: [
    "Tadtarin ang baboy, magdagdag ng kaunting tubig, haluin para hindi mag-umpukan",
    "Painitin ang lugaw/malambot na kanin hanggang kumulo, ilagay ang tinadtad na baboy habang hinahalo hanggang maluto",
    "Ilagay ang nori at durog na tokwa, haluin, lutuin pa ng 2 minuto"
  ],
  image: "tofu-seaweed-pork-congee.jpg",
  tips: "紫菜、海帶等含碘量豐富,適量攝取有助神經系統發展,唔需要天天大量食用。",
  tips_id: "Nori, rumput laut kaya akan yodium, konsumsi secukupnya membantu perkembangan sistem saraf, tidak perlu dimakan banyak setiap hari.",
  tips_fil: "Mayaman sa iodine ang nori, seaweed, ang sapat na konsumo ay tumutulong sa pag-unlad ng nervous system, hindi kailangang kainin nang marami araw-araw."
},
{
  id: "pumpkin-pork-noodle-soup-01",
  title: "南瓜肉碎湯麵",
  title_id: "Sup Mi Labu Kuning & Cincang Babi",
  title_fil: "Sabaw na Pansit na may Kalabasa at Giniling na Baboy",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 25,
  ingredients: [
    { name: "南瓜", amount: "2-3湯匙(切約1厘米粒)", name_id: "Labu kuning", amount_id: "2-3 sdm (potong dadu ~1cm)", name_fil: "Kalabasa", amount_fil: "2-3 kutsara (hiwain ~1cm)" },
    { name: "豬肉", amount: "1湯匙(切碎)", name_id: "Daging babi", amount_id: "1 sdm (cincang)", name_fil: "Baboy", amount_fil: "1 kutsara (tinadtad)" },
    { name: "幼麵(或福建麵)", amount: "半束", name_id: "Mi tipis (atau mi Hokkien)", amount_id: "1/2 ikat", name_fil: "Manipis na pansit (o Hokkien mami)", amount_fil: "1/2 bigkis" },
    { name: "薑片", amount: "1小片(可選)", name_id: "Irisan jahe", amount_id: "1 iris kecil (opsional)", name_fil: "Hiniwang luya", amount_fil: "1 maliit na hiwa (opsyonal)" },
    { name: "水", amount: "1碗半", name_id: "Air", amount_id: "1,5 mangkuk", name_fil: "Tubig", amount_fil: "1.5 tasa" }
  ],
  steps: [
    "麵條落滾水煮5分鐘,撈起備用",
    "少量油爆香薑片,加南瓜粒略煎香,加水煮滾,中火煮至南瓜軟身成湯",
    "加入切碎豬肉同煮熟嘅麵條,煮至肉熟透",
    "餵食前將麵條剪成約1厘米長,以防哽塞"
  ],
  steps_id: [
    "Rebus mi dalam air mendidih 5 menit, angkat, sisihkan",
    "Tumis jahe dengan sedikit minyak hingga harum, tambah labu kuning, tumis sebentar, tuang air, masak dengan api sedang hingga labu empuk menjadi sup",
    "Masukkan daging babi cincang dan mi yang sudah matang, masak hingga daging matang",
    "Sebelum diberikan, gunting mi menjadi panjang ~1cm untuk mencegah tersedak"
  ],
  steps_fil: [
    "Pakuluan ang pansit sa tubig ng 5 minuto, alisin, isantabi",
    "Igisa ang luya sa kaunting mantika hanggang mabango, idagdag ang kalabasa, igisa sandali, buhusan ng tubig, lutuin sa katamtamang apoy hanggang lumambot ang kalabasa at maging sabaw",
    "Ilagay ang tinadtad na baboy at lutong pansit, lutuin hanggang maluto ang karne",
    "Bago ipakain, guntingin ang pansit nang mga 1cm ang haba para maiwasan ang pagkasamid"
  ],
  image: "pumpkin-pork-noodle.jpg",
  tips: "麵條、意粉、米粉呢類主食俾BB食嗰陣一定要剪短,唔好整條餵,防止哽塞。",
  tips_id: "Mi, pasta, bihun jenis makanan pokok ini saat diberikan ke bayi harus digunting pendek, jangan diberikan utuh, untuk mencegah tersedak.",
  tips_fil: "Ang pansit, pasta, bihon na ganitong uri ng pagkain ay dapat guntingin nang maikli kapag ipapakain sa sanggol, huwag ipakain nang buo, para maiwasan ang pagkasamid."
},
{
  id: "fish-tomato-potato-pasta-01",
  title: "魚肉番茄薯仔字母粉",
  title_id: "Pasta Huruf Ikan, Tomat & Kentang",
  title_fil: "Pasta na Letra na may Isda, Kamatis at Patatas",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮", "麩質"],
  prep_time: 30,
  ingredients: [
    { name: "字母粉", amount: "半至1碗(煮熟)", name_id: "Pasta huruf", amount_id: "0,5-1 mangkuk (matang)", name_fil: "Pasta na letra", amount_fil: "0.5-1 tasa (luto na)" },
    { name: "白肉魚(如龍脷魚)", amount: "1湯匙(蒸熟拆碎)", name_id: "Ikan berdaging putih (seperti sole)", amount_id: "1 sdm (kukus, suwir)", name_fil: "Isdang puting laman (tulad ng dila-dilaan)", amount_fil: "1 kutsara (pasingawan, tinapon-tapon)" },
    { name: "番茄", amount: "適量(煮軟去皮切碎)", name_id: "Tomat", amount_id: "secukupnya (rebus lunak, kupas, cincang)", name_fil: "Kamatis", amount_fil: "sapat na dami (pakuluan, balatan, tadtarin)" },
    { name: "薯仔", amount: "適量(煮軟壓碎)", name_id: "Kentang", amount_id: "secukupnya (rebus lunak, haluskan)", name_fil: "Patatas", amount_fil: "sapat na dami (pakuluan, durugin)" }
  ],
  steps: [
    "字母粉落滾水煮至軟身,過冷河瀝乾備用",
    "魚肉蒸熟後徹底檢查去骨,拆碎",
    "番茄、薯仔煮軟後分別處理成細碎/壓碎狀",
    "鍋中加熱少量湯水,加入字母粉,煮滾後加番茄、薯仔、魚肉拌勻即可"
  ],
  steps_id: [
    "Rebus pasta huruf hingga lunak, bilas air dingin, tiriskan, sisihkan",
    "Kukus ikan hingga matang, periksa teliti tidak ada duri, suwir-suwir",
    "Rebus tomat dan kentang hingga lunak, cincang halus/haluskan masing-masing",
    "Panaskan sedikit kaldu dalam panci, masukkan pasta huruf, setelah mendidih tambah tomat, kentang, ikan, aduk rata"
  ],
  steps_fil: [
    "Pakuluan ang pasta na letra hanggang lumambot, banlawan sa malamig na tubig, salain, isantabi",
    "Pasingawan ang isda hanggang maluto, suriin nang mabuti na walang tinik, tapon-tapunin",
    "Pakuluan ang kamatis at patatas hanggang lumambot, tadtarin/durugin nang hiwalay",
    "Painitin ang kaunting sabaw sa kaldero, ilagay ang pasta na letra, kapag kumulo idagdag ang kamatis, patatas, isda, haluin"
  ],
  image: "fish-tomato-pasta.jpg",
  tips: "第一次食新魚種要留意觀察過敏反應。魚肉一定要仔細檢查冇細骨先可以俾BB食。",
  tips_id: "Untuk jenis ikan baru pertama kali, perhatikan reaksi alergi. Ikan harus diperiksa teliti tidak ada duri kecil sebelum diberikan ke bayi.",
  tips_fil: "Sa unang pagkain ng bagong uri ng isda, obserbahan kung may reaksyong alerhiya. Dapat suriin nang mabuti ang isda na walang munting tinik bago ipakain sa sanggol."
},
{
  id: "goldenthread-broccoli-congee-01",
  title: "紅衫魚西蘭花粥/軟飯",
  title_id: "Bubur/Nasi Lembek Ikan Threadfin & Brokoli",
  title_fil: "Lugaw/Malambot na Kanin na may Isdang Threadfin at Brokuli",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 25,
  ingredients: [
    { name: "紅衫魚(或其他白肉魚)", amount: "1-2湯匙(熟魚肉)", name_id: "Ikan threadfin (atau ikan berdaging putih lain)", amount_id: "1-2 sdm (daging matang)", name_fil: "Isdang threadfin (o ibang puting laman na isda)", amount_fil: "1-2 kutsara (lutong laman)" },
    { name: "西蘭花", amount: "2-3個花球(切碎)", name_id: "Brokoli", amount_id: "2-3 kuntum (cincang)", name_fil: "Brokuli", amount_fil: "2-3 piraso (tadtarin)" },
    { name: "粥或軟飯", amount: "大半碗粥/半碗軟飯", name_id: "Bubur atau nasi lembek", amount_id: "hampir 1 mangkuk bubur/0,5 mangkuk nasi lembek", name_fil: "Lugaw o malambot na kanin", amount_fil: "halos 1 tasang lugaw/0.5 tasang malambot na kanin" }
  ],
  steps: [
    "魚肉蒸熟或煎熟,仔細去骨後搗碎",
    "西蘭花焯至半熟,切碎",
    "粥煮滾或軟飯加熱,加入魚肉碎同西蘭花碎煮軟即可"
  ],
  steps_id: [
    "Kukus atau goreng ikan hingga matang, periksa teliti dan buang durinya, haluskan",
    "Rebus brokoli hingga setengah matang, cincang",
    "Panaskan bubur/nasi lembek hingga mendidih, masukkan ikan cincang dan brokoli cincang, masak hingga lunak"
  ],
  steps_fil: [
    "Pasingawan o iprito ang isda hanggang maluto, suriin nang mabuti at alisin ang tinik, durugin",
    "Iluto ang brokuli nang kalahating luto, tadtarin",
    "Painitin ang lugaw/malambot na kanin hanggang kumulo, ilagay ang tinadtad na isda at brokuli, lutuin hanggang lumambot"
  ],
  image: "goldenthread-broccoli-congee.jpg",
  tips: "深海魚含豐富DHA,有助神經系統同視力發展。留意揀低汞魚種(避免鯊魚、劍魚、旗魚、吞拿魚等)。",
  tips_id: "Ikan laut dalam kaya akan DHA, membantu perkembangan sistem saraf dan penglihatan. Pilih ikan berkadar merkuri rendah (hindari hiu, ikan pedang, marlin, tuna, dll).",
  tips_fil: "Mayaman sa DHA ang isda sa malalim na dagat, tumutulong sa pag-unlad ng nervous system at paningin. Pumili ng isdang mababa sa mercury (iwasan ang pating, espada, marlin, tuna, atbp)."
},
{
  id: "sweet-potato-sticks-01",
  title: "番薯條(手指食物)",
  title_id: "Stik Ubi Jalar (Makanan Tangan)",
  title_fil: "Kamote Sticks (Finger Food)",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 25,
  ingredients: [
    { name: "番薯", amount: "1個", name_id: "Ubi jalar", amount_id: "1 buah", name_fil: "Kamote", amount_fil: "1 piraso" }
  ],
  steps: [
    "番薯洗淨切厚片,連皮隔水蒸約20分鐘至軟身",
    "去皮,切成約2x5厘米長條狀",
    "放涼至適合溫度,讓BB自己拎住食"
  ],
  steps_id: [
    "Cuci ubi jalar, potong tebal, kukus dengan kulitnya selama ~20 menit hingga empuk",
    "Kupas, potong menjadi stik ~2x5cm",
    "Dinginkan hingga suhu yang sesuai, biarkan bayi memegang sendiri"
  ],
  steps_fil: [
    "Hugasan ang kamote, hiwaing makapal, pasingawan nang may balat ng ~20 minuto hanggang lumambot",
    "Balatan, hiwain nang parang stick na ~2x5cm",
    "Palamigin sa tamang temperatura, hayaang hawakan mismo ng sanggol"
  ],
  image: "sweet-potato-sticks.jpg",
  tips: "南瓜、薯仔、芋頭、甜椒、西蘭花呢類蔬菜都適合用同樣方法整做手指食物。",
  tips_id: "Labu kuning, kentang, talas, paprika, brokoli semua cocok dibuat finger food dengan cara yang sama.",
  tips_fil: "Ang kalabasa, patatas, gabi, bell pepper, brokuli ay angkop din gawing finger food sa parehong paraan."
},
{
  id: "steamed-carrot-sticks-02",
  title: "蒸紅蘿蔔條(手指食物)",
  title_id: "Stik Wortel Kukus (Makanan Tangan)",
  title_fil: "Steamed na Karot Sticks (Finger Food)",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 15,
  ingredients: [
    { name: "紅蘿蔔", amount: "1條", name_id: "Wortel", amount_id: "1 batang", name_fil: "Karot", amount_fil: "1 tangkay" }
  ],
  steps: [
    "紅蘿蔔去皮切成手指粗條",
    "隔水蒸12分鐘至軟身(手指可輕易捏扁嘅程度)",
    "放涼至適合溫度"
  ],
  steps_id: [
    "Kupas wortel, potong menjadi stik seukuran jari",
    "Kukus selama 12 menit hingga empuk (bisa dipencet mudah dengan jari)",
    "Dinginkan hingga suhu yang sesuai"
  ],
  steps_fil: [
    "Balatan ang karot, hiwain nang parang stick, kasing kapal ng daliri",
    "Pasingawan ng 12 minuto hanggang lumambot (madaling piga-pigain ng daliri)",
    "Palamigin sa tamang temperatura"
  ],
  image: "steamed-carrot-sticks.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "cheese-bean-mash-01",
  title: "芝士雜豆薯蓉",
  title_id: "Puree Kentang Keju & Kacang Campur",
  title_fil: "Mashed na Patatas na may Keso at Halo-halong Beans",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "caution",
  g6pd_note: "紅腰豆、鷹嘴豆同蠶豆(broad bean)係不同品種嘅豆類,一般屬安全食材;如有疑慮建議向醫生確認。",
  g6pd_note_id: "Kacang merah, kacang arab berbeda spesies dari kacang fava (broad bean), umumnya bahan yang aman; jika ragu konsultasikan dengan dokter.",
  g6pd_note_fil: "Ibang species ang red kidney beans, chickpeas kumpara sa broad bean, karaniwang ligtas na sangkap; kung may alinlangan kumonsulta sa doktor.",
  allergens: ["奶", "大豆"],
  prep_time: 30,
  ingredients: [
    { name: "薯仔", amount: "半碗(去皮切塊)", name_id: "Kentang", amount_id: "1/2 mangkuk (kupas, potong)", name_fil: "Patatas", amount_fil: "1/2 tasa (balatan, hiwain)" },
    { name: "罐裝雜豆(紅腰豆、鷹嘴豆)", amount: "2湯匙(煮熟)", name_id: "Kacang kalengan campur (kacang merah, kacang arab)", amount_id: "2 sdm (matang)", name_fil: "De-latang halo-halong beans (red kidney beans, chickpeas)", amount_fil: "2 kutsara (luto na)" },
    { name: "全脂芝士", amount: "半片(切粒)", name_id: "Keju full cream", amount_id: "1/2 lembar (potong dadu)", name_fil: "Full cream cheese", amount_fil: "1/2 piraso (hiwain nang parisukat)" },
    { name: "熱開水或牛奶", amount: "適量", name_id: "Air panas matang atau susu", amount_id: "secukupnya", name_fil: "Mainit na pinakuluang tubig o gatas", amount_fil: "sapat na dami" }
  ],
  steps: [
    "雜豆煮軟瀝乾,用叉/匙羹壓成蓉",
    "薯仔煮10-15分鐘至軟身,瀝乾,壓成蓉,加適量熱水/奶調至幼滑",
    "薯蓉仍熱嗰陣加入芝士粒同豆蓉,攪拌至芝士融化即可"
  ],
  steps_id: [
    "Rebus kacang campur hingga empuk, tiriskan, haluskan dengan garpu/sendok",
    "Rebus kentang 10-15 menit hingga empuk, tiriskan, haluskan, tambah air panas/susu secukupnya hingga lembut",
    "Selagi puree kentang masih panas, masukkan keju dan puree kacang, aduk hingga keju meleleh"
  ],
  steps_fil: [
    "Pakuluan ang halo-halong beans hanggang lumambot, salain, durugin gamit ang tinidor/kutsara",
    "Pakuluan ang patatas ng 10-15 minuto hanggang lumambot, salain, durugin, magdagdag ng mainit na tubig/gatas hanggang maging makinis",
    "Habang mainit pa ang mashed na patatas, ilagay ang keso at durog na beans, haluin hanggang matunaw ang keso"
  ],
  image: "cheese-bean-mash.jpg",
  tips: "唔同品牌芝士含鹽量有差異,建議睇營養標籤,選較低鈉嘅產品。",
  tips_id: "Kandungan garam keju berbeda antar merek, disarankan cek label nutrisi, pilih produk dengan natrium lebih rendah.",
  tips_fil: "Iba-iba ang asin sa bawat brand ng keso, inirerekomendang tingnan ang nutrition label, pumili ng produktong mas mababa sa sodium."
},
{
  id: "banana-oat-milk-01",
  title: "香蕉奶麥片",
  title_id: "Oat Susu Pisang",
  title_fil: "Oatmeal na may Gatas at Saging",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["奶"],
  prep_time: 10,
  ingredients: [
    { name: "快熟麥片", amount: "2湯匙", name_id: "Oat instan", amount_id: "2 sdm", name_fil: "Instant oats", amount_fil: "2 kutsara" },
    { name: "母乳或配方奶", amount: "1/4碗", name_id: "ASI atau susu formula", amount_id: "1/4 mangkuk", name_fil: "Gatas ng ina o gatas na pormula", amount_fil: "1/4 tasa" },
    { name: "香蕉", amount: "1/4條", name_id: "Pisang", amount_id: "1/4 buah", name_fil: "Saging", amount_fil: "1/4 piraso" },
    { name: "水", amount: "半碗", name_id: "Air", amount_id: "1/2 mangkuk", name_fil: "Tubig", amount_fil: "1/2 tasa" }
  ],
  steps: [
    "麥片加水落鍋,慢火加熱期間不停攪動,煮至濃稠",
    "加入母乳/配方奶拌勻",
    "香蕉壓成蓉拌入即可"
  ],
  steps_id: [
    "Masukkan oat dan air ke panci, masak dengan api kecil sambil terus diaduk hingga mengental",
    "Masukkan ASI/susu formula, aduk rata",
    "Haluskan pisang, campurkan"
  ],
  steps_fil: [
    "Ilagay ang oats at tubig sa kaldero, lutuin sa mahinang apoy habang patuloy na hinahalo hanggang lumapot",
    "Ilagay ang gatas ng ina/gatas na pormula, haluin",
    "Durugin ang saging, ihalo"
  ],
  image: "banana-oat-milk.jpg",
  tips: "麥片可以配搭其他水果蓉(如藍莓、提子切碎),午晚餐亦可以加菜蓉、肉碎、蛋一齊食。",
  tips_id: "Oat bisa dipadukan dengan puree buah lain (seperti blueberry, anggur cincang), untuk makan siang/malam juga bisa ditambah puree sayur, cincangan daging, telur.",
  tips_fil: "Ang oats ay puwedeng ipares sa ibang puree ng prutas (tulad ng blueberry, tinadtad na ubas), sa tanghalian/hapunan puwede ring magdagdag ng puree ng gulay, giniling na karne, itlog."
},
{
  id: "mini-veg-dumplings-01",
  title: "迷你菜肉小水餃",
  title_id: "Mini Pangsit Sayur & Daging",
  title_fil: "Mini Dumpling na may Gulay at Karne",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 40,
  ingredients: [
    { name: "餃子皮", amount: "適量", name_id: "Kulit pangsit", amount_id: "secukupnya", name_fil: "Balat ng dumpling", amount_fil: "sapat na dami" },
    { name: "豬肉碎", amount: "80克", name_id: "Daging babi cincang", amount_id: "80 gram", name_fil: "Giniling na baboy", amount_fil: "80 gramo" },
    { name: "椰菜或菜心", amount: "適量(切幼碎)", name_id: "Kubis atau sawi caisim", amount_id: "secukupnya (cincang halus)", name_fil: "Repolyo o choy sum", amount_fil: "sapat na dami (tadtarin nang pino)" }
  ],
  steps: [
    "菜切幼碎,同豬肉碎拌勻攪至起膠(唔需調味或少量調味)",
    "包成細細粒嘅迷你水餃",
    "隔水蒸12-15分鐘或落滾水煮熟",
    "放涼至適合溫度,可以剪開一半方便BB咀嚼"
  ],
  steps_id: [
    "Cincang halus sayuran, campur dengan daging babi cincang, aduk hingga lengket (tanpa bumbu atau sedikit bumbu)",
    "Bungkus menjadi pangsit mini yang kecil-kecil",
    "Kukus 12-15 menit atau rebus dalam air mendidih hingga matang",
    "Dinginkan hingga suhu yang sesuai, bisa digunting menjadi dua agar bayi mudah mengunyah"
  ],
  steps_fil: [
    "Tadtarin nang pino ang gulay, ihalo sa giniling na baboy, haluin hanggang maging malagkit (walang o kaunting timpla)",
    "Balutin nang maliliit na mini dumpling",
    "Pasingawan ng 12-15 minuto o pakuluan sa tubig hanggang maluto",
    "Palamigin sa tamang temperatura, puwedeng guntingin nang kalahati para madaling nguyain ng sanggol"
  ],
  image: "mini-veg-dumplings.jpg",
  tips: "餃子形狀要做得夠細小,方便BB一啖食,避免成隻塞入口哽親。",
  tips_id: "Bentuk pangsit harus cukup kecil, agar bayi bisa makan sekali gigit, hindari memasukkan utuh yang bisa membuat tersedak.",
  tips_fil: "Dapat sapat kaliit ang hugis ng dumpling, para makain ng sanggol sa isang subo, iwasan ang buong dumpling na maisubo na maaaring ikasamid."
},
{
  id: "veg-meat-patty-01",
  title: "蔬菜肉餅",
  title_id: "Perkedel Daging Sayur",
  title_fil: "Patty na Karne at Gulay",
  stage: "9-12個月",
  category: "肉類",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "豬肉碎", amount: "80克", name_id: "Daging babi cincang", amount_id: "80 gram", name_fil: "Giniling na baboy", amount_fil: "80 gramo" },
    { name: "馬蹄碎或紅蘿蔔碎", amount: "1湯匙", name_id: "Kacang air atau wortel cincang", amount_id: "1 sdm", name_fil: "Tinadtad na water chestnut o karot", amount_fil: "1 kutsara" }
  ],
  steps: [
    "豬肉碎加馬蹄/紅蘿蔔碎拌勻,順一方向攪至起膠",
    "壓平放喺碗中",
    "隔水蒸12-15分鐘至熟透"
  ],
  steps_id: [
    "Campur daging babi cincang dengan kacang air/wortel cincang, aduk searah hingga lengket",
    "Pipihkan, letakkan di mangkuk",
    "Kukus 12-15 menit hingga matang sempurna"
  ],
  steps_fil: [
    "Ihalo ang giniling na baboy sa tinadtad na water chestnut/karot, haluin sa iisang direksyon hanggang maging malagkit",
    "Ipatag, ilagay sa mangkok",
    "Pasingawan ng 12-15 minuto hanggang lutong-luto"
  ],
  image: "veg-meat-patty.jpg",
  tips: "肉餅蒸熟後可以用叉子壓開檢查中心已全熟先俾BB食。",
  tips_id: "Setelah patty matang dikukus, buka dengan garpu untuk memastikan bagian tengah sudah matang sempurna sebelum diberikan ke bayi.",
  tips_fil: "Pagkatapos pasingawan ang patty, hatiin gamit ang tinidor para matiyak na lutong-luto na ang gitna bago ipakain sa sanggol."
},
{
  id: "pumpkin-salmon-rice-01",
  title: "南瓜三文魚拌飯",
  title_id: "Nasi Campur Labu Kuning & Salmon",
  title_fil: "Kanin na may Kalabasa at Salmon",
  stage: "9-12個月",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 25,
  ingredients: [
    { name: "南瓜", amount: "3湯匙(蒸軟壓蓉)", name_id: "Labu kuning", amount_id: "3 sdm (kukus lunak, haluskan)", name_fil: "Kalabasa", amount_fil: "3 kutsara (pasingawan, durugin)" },
    { name: "三文魚", amount: "1湯匙(蒸熟拆碎)", name_id: "Salmon", amount_id: "1 sdm (kukus matang, suwir)", name_fil: "Salmon", amount_fil: "1 kutsara (pasingawan, tapon-tapunin)" },
    { name: "軟飯", amount: "半碗", name_id: "Nasi lembek", amount_id: "1/2 mangkuk", name_fil: "Malambot na kanin", amount_fil: "1/2 tasa" }
  ],
  steps: [
    "南瓜隔水蒸軟,壓成蓉",
    "三文魚蒸熟,仔細檢查冇細骨後拆碎",
    "軟飯拌入南瓜蓉同三文魚碎即可"
  ],
  steps_id: [
    "Kukus labu kuning hingga lunak, haluskan",
    "Kukus salmon hingga matang, periksa teliti tidak ada duri, suwir-suwir",
    "Campurkan puree labu dan salmon suwir ke nasi lembek"
  ],
  steps_fil: [
    "Pasingawan ang kalabasa hanggang lumambot, durugin",
    "Pasingawan ang salmon hanggang maluto, suriin nang mabuti na walang tinik, tapon-tapunin",
    "Ihalo ang durog na kalabasa at tinapon-tapong salmon sa malambot na kanin"
  ],
  image: "pumpkin-salmon-rice.jpg",
  tips: "三文魚含豐富DHA,對BB腦部同視力發展有幫助,第一次食要留意過敏反應。",
  tips_id: "Salmon kaya akan DHA, membantu perkembangan otak dan penglihatan bayi, untuk pertama kali makan perhatikan reaksi alergi.",
  tips_fil: "Mayaman sa DHA ang salmon, tumutulong sa pag-unlad ng utak at paningin ng sanggol, sa unang pagkain obserbahan kung may reaksyong alerhiya."
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
  title_id: "Telur Kukus Jamur & Tahu dengan Nasi Sayur",
  title_fil: "Steamed na Itlog na may Kabute at Tokwa na may Kaning may Gulay",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "caution",
  g6pd_note: "豆腐屬黃豆製品,一般屬安全食材,如有疑慮可向醫生確認。",
  g6pd_note_id: "Tahu adalah produk kedelai, umumnya bahan yang aman, jika ragu bisa konsultasikan dengan dokter.",
  g6pd_note_fil: "Ang tokwa ay gawa sa soybean, karaniwang ligtas na sangkap, kung may alinlangan kumonsulta sa doktor.",
  allergens: ["蛋", "大豆"],
  prep_time: 25,
  ingredients: [
    { name: "鮮冬菇", amount: "4隻", name_id: "Jamur shiitake segar", amount_id: "4 buah", name_fil: "Sariwang shiitake", amount_fil: "4 piraso" },
    { name: "豆腐", amount: "1磚(切1厘米塊)", name_id: "Tahu", amount_id: "1 potong (dadu 1cm)", name_fil: "Tokwa", amount_fil: "1 piraso (hiwain 1cm)" },
    { name: "雞蛋", amount: "2隻", name_id: "Telur", amount_id: "2 butir", name_fil: "Itlog", amount_fil: "2 piraso" },
    { name: "軟飯", amount: "半碗", name_id: "Nasi lembek", amount_id: "1/2 mangkuk", name_fil: "Malambot na kanin", amount_fil: "1/2 tasa" },
    { name: "菜心", amount: "2-4湯匙(切碎)", name_id: "Sawi caisim", amount_id: "2-4 sdm (cincang)", name_fil: "Choy sum", amount_fil: "2-4 kutsara (tadtarin)" }
  ],
  steps: [
    "鮮冬菇焯1分鐘,瀝乾切幼粒",
    "雞蛋打散加水拌勻,倒入蒸碗",
    "加入冬菇粒同豆腐粒均勻放入蛋汁中,隔水蒸8-10分鐘",
    "配菜心軟飯一齊食用"
  ],
  steps_id: [
    "Rebus sebentar jamur shiitake selama 1 menit, tiriskan, potong dadu kecil",
    "Kocok telur, tambah air, aduk rata, tuang ke mangkuk kukus",
    "Masukkan jamur dan tahu dadu merata ke dalam telur, kukus 8-10 menit",
    "Sajikan bersama nasi sayur"
  ],
  steps_fil: [
    "Iluto sandali ang shiitake ng 1 minuto, salain, hiwain nang maliit",
    "Batihin ang itlog, magdagdag ng tubig, haluin, ibuhos sa mangkok na pang-steam",
    "Ilagay ang hiniwang shiitake at tokwa nang pantay sa itlog, pasingawan ng 8-10 minuto",
    "Ihain kasama ang malambot na kanin na may choy sum"
  ],
  image: "mushroom-tofu-egg.jpg",
  tips: "蒸蛋嗰陣鍋蓋邊放一支筷子留條縫,可以避免蛋面出現氣泡。",
  tips_id: "Saat mengukus telur, selipkan sumpit di tepi tutup panci untuk memberi celah, agar permukaan telur tidak berlubang-lubang.",
  tips_fil: "Kapag pinasingawan ang itlog, maglagay ng chopsticks sa gilid ng takip para magkaroon ng puwang, para maiwasan ang bula sa ibabaw ng itlog."
},
{
  id: "shrimp-broccoli-risotto-01",
  title: "蝦仁西蘭花燴飯",
  title_id: "Nasi Tim Udang & Brokoli",
  title_fil: "Risotto na Hipon at Brokuli",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 25,
  ingredients: [
    { name: "蝦仁", amount: "適量(去腸洗淨)", name_id: "Udang kupas", amount_id: "secukupnya (buang uratnya, cuci bersih)", name_fil: "Hipon na balat", amount_fil: "sapat na dami (alisin ang ugat, hugasan)" },
    { name: "西蘭花", amount: "適量(切碎)", name_id: "Brokoli", amount_id: "secukupnya (cincang)", name_fil: "Brokuli", amount_fil: "sapat na dami (tadtarin)" },
    { name: "軟飯", amount: "半碗", name_id: "Nasi lembek", amount_id: "1/2 mangkuk", name_fil: "Malambot na kanin", amount_fil: "1/2 tasa" }
  ],
  steps: [
    "蝦仁挑腸洗淨,切碎;西蘭花焯熟切碎",
    "少油起鑊,蝦仁炒熟,加入西蘭花略炒",
    "加入軟飯同少量開水,煮1-2分鐘成軟滑燴飯,清淡調味即可"
  ],
  steps_id: [
    "Buang urat udang, cuci bersih, cincang; rebus brokoli hingga matang, cincang",
    "Panaskan sedikit minyak, tumis udang hingga matang, masukkan brokoli, tumis sebentar",
    "Masukkan nasi lembek dan sedikit air matang, masak 1-2 menit hingga menjadi risotto lembut, bumbu ringan"
  ],
  steps_fil: [
    "Alisin ang ugat ng hipon, hugasan, tadtarin; iluto ang brokuli hanggang maluto, tadtarin",
    "Painitin ang kaunting mantika, igisa ang hipon hanggang maluto, ilagay ang brokuli, igisa sandali",
    "Ilagay ang malambot na kanin at kaunting mainit na tubig, lutuin ng 1-2 minuto hanggang maging malambot na risotto, magaan ang timpla"
  ],
  image: "shrimp-broccoli-risotto.jpg",
  tips: "第一次食蝦要留意觀察過敏反應。",
  tips_id: "Untuk pertama kali makan udang, perhatikan reaksi alergi.",
  tips_fil: "Sa unang pagkain ng hipon, obserbahan kung may reaksyong alerhiya."
},
{
  id: "tomato-mixed-bean-pasta-01",
  title: "番茄雜豆螺絲粉",
  title_id: "Pasta Spiral Tomat & Kacang Campur",
  title_fil: "Fusilli na may Kamatis at Halo-halong Beans",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "caution",
  g6pd_note: "鷹嘴豆、紅腰豆同蠶豆(broad bean)係不同品種嘅豆類,一般屬安全食材;如有疑慮建議向醫生確認。",
  g6pd_note_id: "Kacang arab, kacang merah berbeda spesies dari kacang fava (broad bean), umumnya bahan yang aman; jika ragu konsultasikan dengan dokter.",
  g6pd_note_fil: "Ibang species ang chickpeas, red kidney beans kumpara sa broad bean, karaniwang ligtas na sangkap; kung may alinlangan kumonsulta sa doktor.",
  allergens: ["麩質", "大豆"],
  prep_time: 25,
  ingredients: [
    { name: "螺絲粉", amount: "1碗(煮熟)", name_id: "Pasta spiral (fusilli)", amount_id: "1 mangkuk (matang)", name_fil: "Fusilli", amount_fil: "1 tasa (luto na)" },
    { name: "罐裝雜豆(鷹嘴豆、紅腰豆)", amount: "3湯匙", name_id: "Kacang kalengan campur (kacang arab, kacang merah)", amount_id: "3 sdm", name_fil: "De-latang halo-halong beans (chickpeas, red kidney beans)", amount_fil: "3 kutsara" },
    { name: "番茄", amount: "半個", name_id: "Tomat", amount_id: "1/2 buah", name_fil: "Kamatis", amount_fil: "1/2 piraso" },
    { name: "洋蔥", amount: "2湯匙(切粒)", name_id: "Bawang bombay", amount_id: "2 sdm (potong dadu)", name_fil: "Sibuyas", amount_fil: "2 kutsara (hiwain nang parisukat)" },
    { name: "茄汁", amount: "1湯匙", name_id: "Saus tomat", amount_id: "1 sdm", name_fil: "Ketchup", amount_fil: "1 kutsara" }
  ],
  steps: [
    "螺絲粉剪短煮軟,瀝乾",
    "番茄去皮切粒;雜豆煮軟壓碎",
    "少油爆香洋蔥,加番茄粒、雜豆同茄汁略煮成醬汁",
    "拌入螺絲粉即可"
  ],
  steps_id: [
    "Rebus pasta spiral hingga lunak, gunting pendek, tiriskan",
    "Kupas tomat, potong dadu; rebus kacang hingga empuk, haluskan",
    "Tumis bawang bombay dengan sedikit minyak hingga harum, masukkan tomat, kacang, dan saus tomat, masak sebentar menjadi saus",
    "Campurkan ke pasta spiral"
  ],
  steps_fil: [
    "Pakuluan ang fusilli hanggang lumambot, guntingin nang maikli, salain",
    "Balatan ang kamatis, hiwain nang parisukat; pakuluan ang beans hanggang lumambot, durugin",
    "Igisa ang sibuyas sa kaunting mantika hanggang mabango, ilagay ang kamatis, beans at ketchup, lutuin sandali maging sarsa",
    "Ihalo sa fusilli"
  ],
  image: "tomato-bean-pasta.jpg",
  tips: "豆類含豐富蛋白質、維他命B、鐵、鋅同膳食纖維,係營養豐富嘅食材。",
  tips_id: "Kacang-kacangan kaya akan protein, vitamin B, zat besi, seng, dan serat, bahan makanan yang sangat bergizi.",
  tips_fil: "Mayaman sa protina, vitamin B, iron, zinc, at fiber ang beans, napakasustansyang sangkap."
},
{
  id: "salmon-cauliflower-shell-pasta-01",
  title: "煎三文魚南瓜汁椰菜花貝殼粉",
  title_id: "Pasta Kerang dengan Salmon Panggang, Saus Labu & Kembang Kol",
  title_fil: "Shell Pasta na may Iniprito na Salmon, Sarsang Kalabasa at Coliflor",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "南瓜", amount: "半碗(蒸軟壓蓉)", name_id: "Labu kuning", amount_id: "1/2 mangkuk (kukus lunak, haluskan)", name_fil: "Kalabasa", amount_fil: "1/2 tasa (pasingawan, durugin)" },
    { name: "椰菜花", amount: "2個花球(蒸軟切碎)", name_id: "Kembang kol", amount_id: "2 kuntum (kukus lunak, cincang)", name_fil: "Coliflor", amount_fil: "2 piraso (pasingawan, tadtarin)" },
    { name: "三文魚", amount: "2片(煎熟壓碎)", name_id: "Salmon", amount_id: "2 iris (goreng matang, haluskan)", name_fil: "Salmon", amount_fil: "2 hiwa (iprito, durugin)" },
    { name: "貝殼粉", amount: "半至1碗(煮熟)", name_id: "Pasta kerang (shell pasta)", amount_id: "0,5-1 mangkuk (matang)", name_fil: "Shell pasta", amount_fil: "0.5-1 tasa (luto na)" }
  ],
  steps: [
    "南瓜、椰菜花分別蒸軟,南瓜壓成蓉,椰菜花切幼粒",
    "三文魚少油煎熟,用匙羹略壓碎",
    "南瓜蓉加少量水煮成醬汁狀(質地太稀可加少許粟粉水勾芡)",
    "貝殼粉放碗中,鋪上三文魚、椰菜花,淋上南瓜汁即可"
  ],
  steps_id: [
    "Kukus labu kuning dan kembang kol masing-masing hingga lunak, haluskan labu, cincang halus kembang kol",
    "Goreng salmon dengan sedikit minyak hingga matang, haluskan dengan sendok",
    "Tambah sedikit air ke puree labu, masak hingga menjadi saus (jika terlalu encer, kentalkan dengan sedikit larutan maizena)",
    "Letakkan pasta kerang di mangkuk, taruh salmon dan kembang kol di atas, siram saus labu"
  ],
  steps_fil: [
    "Pasingawan ang kalabasa at coliflor nang hiwalay hanggang lumambot, durugin ang kalabasa, tadtarin nang pino ang coliflor",
    "Iprito ang salmon sa kaunting mantika hanggang maluto, durugin gamit ang kutsara",
    "Magdagdag ng kaunting tubig sa durog na kalabasa, lutuin hanggang maging sarsa (kung masyadong malabnaw, palaputin ng kaunting gawgaw na hinalo sa tubig)",
    "Ilagay ang shell pasta sa mangkok, patungan ng salmon at coliflor, buhusan ng sarsang kalabasa"
  ],
  image: "salmon-cauliflower-pasta.jpg",
  tips: "用蔬菜蓉整成醬汁係增加幼兒蔬菜攝取量嘅好方法,番茄、甜椒、菠菜都適合用同樣做法。",
  tips_id: "Membuat saus dari puree sayur adalah cara yang baik untuk menambah asupan sayur anak, tomat, paprika, bayam semua cocok dengan cara yang sama.",
  tips_fil: "Ang paggawa ng sarsa mula sa puree ng gulay ay magandang paraan para dagdagan ang pagkain ng gulay ng bata, angkop din ang kamatis, bell pepper, spinach sa parehong paraan."
},
{
  id: "strawberry-milk-cornflakes-01",
  title: "士多啤梨牛奶粟米片",
  title_id: "Cornflakes Susu & Stroberi",
  title_fil: "Cornflakes na may Gatas at Strawberry",
  stage: "1-3歲",
  category: "主食",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["奶"],
  prep_time: 5,
  ingredients: [
    { name: "士多啤梨", amount: "2-3粒", name_id: "Stroberi", amount_id: "2-3 buah", name_fil: "Strawberry", amount_fil: "2-3 piraso" },
    { name: "原味粟米片", amount: "半碗", name_id: "Cornflakes tawar", amount_id: "1/2 mangkuk", name_fil: "Plain na cornflakes", amount_fil: "1/2 tasa" },
    { name: "全脂牛奶", amount: "2/3杯(約160毫升)", name_id: "Susu full cream", amount_id: "2/3 cangkir (~160 ml)", name_fil: "Full cream milk", amount_fil: "2/3 tasa (~160 ml)" }
  ],
  steps: [
    "粟米片加牛奶,浸3分鐘至軟身",
    "士多啤梨洗淨切碎拌入即成"
  ],
  steps_id: [
    "Tambahkan susu ke cornflakes, rendam 3 menit hingga lunak",
    "Cuci stroberi, cincang, campurkan"
  ],
  steps_fil: [
    "Magdagdag ng gatas sa cornflakes, ibabad ng 3 minuto hanggang lumambot",
    "Hugasan ang strawberry, tadtarin, ihalo"
  ],
  image: "strawberry-cornflakes.jpg",
  tips: "揀原味粟米片,糖同鈉含量會比調味款低,建議睇營養標籤比較。",
  tips_id: "Pilih cornflakes tawar, kandungan gula dan natriumnya lebih rendah dari yang berperisa, disarankan bandingkan label nutrisi.",
  tips_fil: "Pumili ng plain na cornflakes, mas mababa ang asukal at sodium kumpara sa may lasa, inirerekomendang ikumpara ang nutrition label."
},
{
  id: "peanut-cowpea-soup-01",
  title: "花生眉豆蓉湯",
  title_id: "Sup Puree Kacang Tanah & Kacang Tunggak",
  title_fil: "Sabaw na Durog na Mani at Cowpea",
  stage: "1-3歲",
  category: "湯水",
  g6pd_status: "safe",
  g6pd_note: "眉豆(cowpea)同蠶豆(broad bean)係完全不同嘅豆類品種,一般屬安全食材。花生本身唔屬於蠶豆家族,兩者係唔同植物。",
  g6pd_note_id: "Kacang tunggak (cowpea) adalah spesies kacang yang sama sekali berbeda dari kacang fava (broad bean), umumnya bahan yang aman. Kacang tanah sendiri bukan bagian dari keluarga kacang fava, keduanya tanaman yang berbeda.",
  g6pd_note_fil: "Ibang-iba ang species ng cowpea kumpara sa broad bean, karaniwang ligtas na sangkap. Ang mani mismo ay hindi kabilang sa pamilya ng broad bean, magkaibang halaman ang dalawa.",
  allergens: ["花生"],
  prep_time: 130,
  ingredients: [
    { name: "花生", amount: "1兩", name_id: "Kacang tanah", amount_id: "1 tael (~37,5g)", name_fil: "Mani", amount_fil: "1 tael (~37.5g)" },
    { name: "眉豆", amount: "2兩", name_id: "Kacang tunggak", amount_id: "2 tael (~75g)", name_fil: "Cowpea", amount_fil: "2 tael (~75g)" },
    { name: "瘦豬肉", amount: "6兩", name_id: "Daging babi tanpa lemak", amount_id: "6 tael (~225g)", name_fil: "Payat na baboy", amount_fil: "6 tael (~225g)" },
    { name: "水", amount: "8-10碗", name_id: "Air", amount_id: "8-10 mangkuk", name_fil: "Tubig", amount_fil: "8-10 tasa" }
  ],
  steps: [
    "花生、眉豆用温水浸泡1小時",
    "瘦豬肉落滾水汆走血水",
    "全部材料加水煮滾,轉中慢火煲約2小時",
    "舀出適合份量,用叉將花生眉豆壓碎方便BB食用"
  ],
  steps_id: [
    "Rendam kacang tanah dan kacang tunggak dengan air hangat selama 1 jam",
    "Rebus sebentar daging babi dalam air mendidih untuk membuang darahnya",
    "Masukkan semua bahan dengan air, masak hingga mendidih, kecilkan api, masak ~2 jam",
    "Ambil porsi yang sesuai, haluskan kacang tanah dan kacang tunggak dengan garpu agar mudah dimakan bayi"
  ],
  steps_fil: [
    "Ibabad ang mani at cowpea sa maligamgam na tubig ng 1 oras",
    "Iluto sandali ang payat na baboy sa kumukulong tubig para alisin ang dugo",
    "Ilagay ang lahat ng sangkap na may tubig, pakuluan, hinaan ang apoy, lutuin ng mga 2 oras",
    "Kumuha ng sapat na bahagi, durugin ang mani at cowpea gamit ang tinidor para madaling kainin ng sanggol"
  ],
  image: "peanut-cowpea-soup.jpg",
  tips: "第一次食花生類食材要格外留意過敏反應,建議先諮詢醫生意見先引入。",
  tips_id: "Untuk pertama kali makan bahan kacang tanah, perhatikan reaksi alergi dengan ekstra hati-hati, disarankan konsultasi dokter dulu sebelum memperkenalkan.",
  tips_fil: "Sa unang pagkain ng mani, maging maingat sa pag-obserba ng reaksyong alerhiya, inirerekomendang kumonsulta muna sa doktor bago ipakilala."
},
{
  id: "brown-rice-choysum-chicken-01",
  title: "菜心雞肉粒糙米飯",
  title_id: "Nasi Merah dengan Ayam & Sawi Caisim",
  title_fil: "Brown Rice na may Manok at Choy Sum",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "糙米", amount: "半杯", name_id: "Beras merah", amount_id: "1/2 cangkir", name_fil: "Brown rice", amount_fil: "1/2 tasa" },
    { name: "雞胸肉", amount: "80克(切粒)", name_id: "Dada ayam", amount_id: "80 gram (potong dadu)", name_fil: "Dibdib ng manok", amount_fil: "80 gramo (hiwain nang parisukat)" },
    { name: "菜心", amount: "適量(切碎)", name_id: "Sawi caisim", amount_id: "secukupnya (cincang)", name_fil: "Choy sum", amount_fil: "sapat na dami (tadtarin)" }
  ],
  steps: [
    "糙米浸泡後煮成軟身糙米飯(糙米質地較硬,建議浸泡時間長啲)",
    "雞胸肉粒同菜心碎煮熟",
    "拌入糙米飯,清淡調味即可"
  ],
  steps_id: [
    "Rendam beras merah, masak menjadi nasi merah lembut (tekstur beras merah lebih keras, disarankan rendam lebih lama)",
    "Masak dada ayam dadu dan sawi cincang hingga matang",
    "Campurkan ke nasi merah, bumbu ringan"
  ],
  steps_fil: [
    "Ibabad ang brown rice, lutuin hanggang maging malambot na kanin (mas matigas ang brown rice, mas mahaba ang pagbabad)",
    "Lutuin ang dibdib ng manok na pinarisukat at tinadtad na choy sum hanggang maluto",
    "Ihalo sa brown rice, magaan ang timpla"
  ],
  image: "brown-rice-chicken.jpg",
  tips: "全穀類(糙米、紅米、燕麥)含豐富膳食纖維,適合1歲後逐步引入做主食嘅一部分。",
  tips_id: "Biji-bijian utuh (beras merah, beras coklat, oat) kaya akan serat, cocok diperkenalkan bertahap sebagai bagian makanan pokok setelah usia 1 tahun.",
  tips_fil: "Ang whole grains (brown rice, red rice, oats) ay mayaman sa fiber, angkop ipakilala nang unti-unti bilang bahagi ng pangunahing pagkain pagkatapos ng 1 taon."
},
{
  id: "oat-wolfberry-meat-patty-01",
  title: "杞子燕麥蒸肉餅伴菜飯",
  title_id: "Perkedel Daging Kukus Goji & Oat dengan Nasi Sayur",
  title_fil: "Steamed na Patty na may Goji Berry at Oats na may Kaning may Gulay",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 25,
  ingredients: [
    { name: "豬肉碎", amount: "100克", name_id: "Daging babi cincang", amount_id: "100 gram", name_fil: "Giniling na baboy", amount_fil: "100 gramo" },
    { name: "燕麥片", amount: "2湯匙", name_id: "Oat", amount_id: "2 sdm", name_fil: "Oats", amount_fil: "2 kutsara" },
    { name: "杞子", amount: "1茶匙(浸軟切碎)", name_id: "Goji berry", amount_id: "1 sdt (rendam lunak, cincang)", name_fil: "Goji berry", amount_fil: "1 kutsarita (ibabad, tadtarin)" },
    { name: "軟飯", amount: "半碗", name_id: "Nasi lembek", amount_id: "1/2 mangkuk", name_fil: "Malambot na kanin", amount_fil: "1/2 tasa" }
  ],
  steps: [
    "燕麥片用少量水浸軟",
    "豬肉碎加燕麥、杞子碎拌勻攪至起膠",
    "壓平隔水蒸12-15分鐘至熟透",
    "伴軟飯或菜飯食用"
  ],
  steps_id: [
    "Rendam oat dengan sedikit air hingga lunak",
    "Campur daging babi cincang dengan oat dan goji berry cincang, aduk hingga lengket",
    "Pipihkan, kukus 12-15 menit hingga matang sempurna",
    "Sajikan dengan nasi lembek atau nasi sayur"
  ],
  steps_fil: [
    "Ibabad ang oats sa kaunting tubig hanggang lumambot",
    "Ihalo ang giniling na baboy sa oats at tinadtad na goji berry, haluin hanggang maging malagkit",
    "Ipatag, pasingawan ng 12-15 minuto hanggang lutong-luto",
    "Ihain kasama ang malambot na kanin o kaning may gulay"
  ],
  image: "oat-wolfberry-patty.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "mushroom-beancurd-beef-vermicelli-01",
  title: "冬菇腐竹牛肉粉絲",
  title_id: "Soun Jamur, Kulit Tahu & Daging Sapi",
  title_fil: "Sotanghon na may Kabute, Beancurd Stick at Baka",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "caution",
  g6pd_note: "腐竹屬黃豆製品,同蠶豆係不同品種嘅豆類製品,一般屬安全食材;如有疑慮建議向醫生確認。",
  g6pd_note_id: "Kulit tahu adalah produk kedelai, spesies berbeda dari kacang fava, umumnya bahan yang aman; jika ragu konsultasikan dengan dokter.",
  g6pd_note_fil: "Ang beancurd stick ay gawa sa soybean, ibang species kumpara sa broad bean, karaniwang ligtas na sangkap; kung may alinlangan kumonsulta sa doktor.",
  allergens: ["大豆"],
  prep_time: 40,
  ingredients: [
    { name: "牛肉", amount: "60克(切薄片或碎)", name_id: "Daging sapi", amount_id: "60 gram (iris tipis atau cincang)", name_fil: "Karne ng baka", amount_fil: "60 gramo (hiwaing manipis o tadtarin)" },
    { name: "冬菇", amount: "3朵(浸軟切絲)", name_id: "Jamur shiitake kering", amount_id: "3 buah (rendam lunak, iris)", name_fil: "Tuyong shiitake", amount_fil: "3 piraso (ibabad, hiwain)" },
    { name: "腐竹", amount: "1小段(浸軟切段)", name_id: "Kulit tahu kering (beancurd stick)", amount_id: "1 potong kecil (rendam lunak, potong)", name_fil: "Beancurd stick", amount_fil: "1 maliit na piraso (ibabad, hiwain)" },
    { name: "粉絲", amount: "適量(剪短)", name_id: "Soun", amount_id: "secukupnya (gunting pendek)", name_fil: "Sotanghon", amount_fil: "sapat na dami (guntingin nang maikli)" }
  ],
  steps: [
    "冬菇、腐竹分別浸軟,切成適合幼兒嘅細小段",
    "牛肉汆水,同冬菇、腐竹加水煮15-20分鐘至軟身入味",
    "加入粉絲(已剪短)同煮5分鐘,清淡調味即可"
  ],
  steps_id: [
    "Rendam jamur shiitake dan kulit tahu masing-masing hingga lunak, potong kecil sesuai untuk anak",
    "Rebus sebentar daging sapi, masak bersama jamur dan kulit tahu dengan air selama 15-20 menit hingga empuk dan meresap",
    "Masukkan soun (sudah digunting pendek), masak 5 menit, bumbu ringan"
  ],
  steps_fil: [
    "Ibabad ang shiitake at beancurd stick nang hiwalay hanggang lumambot, hiwain nang maliit na angkop sa bata",
    "Iluto sandali ang baka, lutuin kasama ang shiitake at beancurd stick na may tubig ng 15-20 minuto hanggang lumambot at matimplahan",
    "Ilagay ang sotanghon (naguntingan na nang maikli), lutuin ng 5 minuto, magaan ang timpla"
  ],
  image: "mushroom-beancurd-beef.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "spinach-tofu-pork-noodle-soup-01",
  title: "菠菜豆腐豬肉湯米線",
  title_id: "Sup Bihun Bayam, Tahu & Daging Babi",
  title_fil: "Sabaw na Bihon na may Spinach, Tokwa at Baboy",
  stage: "1-3歲",
  category: "主食",
  g6pd_status: "caution",
  g6pd_note: "豆腐屬黃豆製品,一般屬安全食材,如有疑慮可向醫生確認。",
  g6pd_note_id: "Tahu adalah produk kedelai, umumnya bahan yang aman, jika ragu bisa konsultasikan dengan dokter.",
  g6pd_note_fil: "Ang tokwa ay gawa sa soybean, karaniwang ligtas na sangkap, kung may alinlangan kumonsulta sa doktor.",
  allergens: ["大豆"],
  prep_time: 30,
  ingredients: [
    { name: "菠菜", amount: "適量", name_id: "Bayam", amount_id: "secukupnya", name_fil: "Spinach", amount_fil: "sapat na dami" },
    { name: "豆腐", amount: "適量(切塊)", name_id: "Tahu", amount_id: "secukupnya (potong)", name_fil: "Tokwa", amount_fil: "sapat na dami (hiwain)" },
    { name: "豬肉", amount: "適量(切片或切碎)", name_id: "Daging babi", amount_id: "secukupnya (iris atau cincang)", name_fil: "Baboy", amount_fil: "sapat na dami (hiwain o tadtarin)" },
    { name: "米線", amount: "適量(煮熟剪短)", name_id: "Bihun beras", amount_id: "secukupnya (matang, gunting pendek)", name_fil: "Bihon", amount_fil: "sapat na dami (lutong, guntingin nang maikli)" }
  ],
  steps: [
    "菠菜去根洗淨,滾水焯1分鐘,瀝乾",
    "水滾後加少量油,放入菠菜、豆腐同豬肉片,煮成湯",
    "取適量湯水,加入煮熟嘅米線(已剪成適合長度),煮滾即成"
  ],
  steps_id: [
    "Buang akar bayam, cuci bersih, rebus sebentar 1 menit dalam air mendidih, tiriskan",
    "Setelah air mendidih, tambah sedikit minyak, masukkan bayam, tahu, dan irisan daging babi, masak jadi sup",
    "Ambil sup secukupnya, tambah bihun matang (sudah digunting sesuai panjang), masak hingga mendidih"
  ],
  steps_fil: [
    "Alisin ang ugat ng spinach, hugasan, iluto sandali ng 1 minuto sa kumukulong tubig, salain",
    "Kapag kumukulo na ang tubig, magdagdag ng kaunting mantika, ilagay ang spinach, tokwa at hiniwang baboy, lutuin maging sabaw",
    "Kumuha ng sapat na sabaw, idagdag ang lutong bihon (naguntingan na ng angkop na haba), pakuluan"
  ],
  image: "spinach-tofu-pork-noodle.jpg",
  tips: "「菠菜同豆腐一齊食會導致腎結石」係坊間流傳但冇醫學實證支持嘅講法,可以放心一齊食用。",
  tips_id: "\"Bayam dan tahu dimakan bersama menyebabkan batu ginjal\" adalah mitos yang beredar tanpa bukti medis, aman dimakan bersama.",
  tips_fil: "Ang sinasabing \"kapag sabay kinain ang spinach at tokwa ay nagdudulot ng bato sa bato\" ay walang katibayang medikal, ligtas kainin nang magkasama."
},
{
  id: "garlic-cauliflower-brown-rice-01",
  title: "蒜蓉炒椰菜花伴糙米飯",
  title_id: "Tumis Kembang Kol Bawang Putih dengan Nasi Merah",
  title_fil: "Ginisang Coliflor sa Bawang na may Brown Rice",
  stage: "1-3歲",
  category: "家庭餐",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 20,
  ingredients: [
    { name: "椰菜花", amount: "適量(切小朵)", name_id: "Kembang kol", amount_id: "secukupnya (potong kuntum kecil)", name_fil: "Coliflor", amount_fil: "sapat na dami (hiwain nang maliit)" },
    { name: "蒜蓉", amount: "少許", name_id: "Bawang putih cincang", amount_id: "sedikit", name_fil: "Tinadtad na bawang", amount_fil: "kaunti" },
    { name: "糙米飯", amount: "半碗", name_id: "Nasi merah", amount_id: "1/2 mangkuk", name_fil: "Brown rice", amount_fil: "1/2 tasa" }
  ],
  steps: [
    "椰菜花焯至半熟",
    "少油爆香蒜蓉,放入椰菜花炒熟,清淡調味",
    "伴糙米飯食用,可切碎方便幼兒咀嚼"
  ],
  steps_id: [
    "Rebus kembang kol hingga setengah matang",
    "Tumis bawang putih dengan sedikit minyak hingga harum, masukkan kembang kol, tumis hingga matang, bumbu ringan",
    "Sajikan dengan nasi merah, bisa dicincang agar mudah dikunyah anak"
  ],
  steps_fil: [
    "Iluto ang coliflor nang kalahating luto",
    "Igisa ang bawang sa kaunting mantika hanggang mabango, ilagay ang coliflor, igisa hanggang maluto, magaan ang timpla",
    "Ihain kasama ang brown rice, puwedeng tadtarin para madaling nguyain ng bata"
  ],
  image: "garlic-cauliflower-brownrice.jpg",
  tips: "1-3歲幼兒每日鹽份攝取建議要好少(遠低於成人份量),整餐嗰陣調味要格外克制,或者可以喺調味前先預留幼兒嗰份。",
  tips_id: "Asupan garam harian yang disarankan untuk anak 1-3 tahun sangat sedikit (jauh lebih rendah dari porsi dewasa), saat memasak harus sangat menahan bumbu, atau sisihkan porsi anak sebelum dibumbui.",
  tips_fil: "Napakakaunti ng inirerekomendang pang-araw-araw na asin para sa batang 1-3 taon (mas mababa nang malayo sa bahagi ng matanda), dapat maging maingat sa timpla kapag nagluluto, o ihiwalay ang bahagi ng bata bago timplahan."
}
,

// ========================================
// BLW手指食物組合餐盤(6-8個月)
// 重點:全部食材蒸到好軟腍,一格一款食材,等BB自己揀住食、練習抓握。
// ========================================



{
  id: "combo-6-8-01",
  title: "蘋果西蘭花薯仔餐盤",
  title_id: "Piring Apel, Brokoli & Kentang",
  title_fil: "Plato ng Mansanas, Brokuli at Patatas",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 25,
  ingredients: [
    { name: "蘋果", amount: "適量(蒸軟切薄片)", name_id: "Apel", amount_id: "secukupnya (kukus lunak, iris tipis)", name_fil: "Mansanas", amount_fil: "sapat na dami (pasingawan, hiwaing manipis)" },
    { name: "西蘭花", amount: "適量(蒸軟切小朵)", name_id: "Brokoli", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Brokuli", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "薯仔", amount: "適量(蒸軟切條)", name_id: "Kentang", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Patatas", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" }
  ],
  steps: [
    "蘋果去皮去芯,切薄片,隔水蒸8-10分鐘至軟身。",
    "西蘭花蒸8-10分鐘、紅蘿蔔蒸12-15分鐘,西蘭花切成小朵,紅蘿蔔切成手指粗條,蒸至手指可以輕易捏扁嘅軟度。",
    "薯仔去皮切條,隔水蒸12-15分鐘至軟身。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas apel, buang bijinya, iris tipis, kukus 8-10 menit hingga empuk.",
    "Kukus brokoli 8-10 menit, wortel 12-15 menit, potong brokoli jadi kuntum kecil, wortel jadi stik seukuran jari, kukus hingga empuk cukup untuk dipencet jari.",
    "Kupas kentang, potong stik, kukus 12-15 menit hingga empuk.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang mansanas, alisin ang buto, hiwaing manipis, pasingawan ng 8-10 minuto hanggang lumambot.",
    "Pasingawan ang brokuli ng 8-10 minuto, ang karot ng 12-15 minuto, hiwain ang brokuli nang maliit, ang karot nang parang stick, pasingawan hanggang kayang piga-pigain ng daliri.",
    "Balatan ang patatas, hiwaing stick, pasingawan ng 12-15 minuto hanggang lumambot.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-01.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-6-8-02",
  title: "香蕉椰菜花蛋黃餐盤",
  title_id: "Piring Pisang, Kembang Kol & Kuning Telur",
  title_fil: "Plato ng Saging, Coliflor at Pula ng Itlog",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 20,
  ingredients: [
    { name: "香蕉", amount: "適量(切薄片)", name_id: "Pisang", amount_id: "secukupnya (iris tipis)", name_fil: "Saging", amount_fil: "sapat na dami (hiwaing manipis)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)", name_id: "Kembang kol", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Coliflor", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "南瓜", amount: "適量(蒸軟切塊)", name_id: "Labu kuning", amount_id: "secukupnya (kukus lunak, potong dadu)", name_fil: "Kalabasa", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" },
    { name: "雞蛋", amount: "半隻(煮熟蛋黃壓碎)", name_id: "Telur", amount_id: "1/2 butir (rebus, haluskan kuning telurnya)", name_fil: "Itlog", amount_fil: "1/2 piraso (pakuluan, durugin ang pula)" }
  ],
  steps: [
    "香蕉去皮切薄片。",
    "椰菜花蒸8-10分鐘、南瓜蒸12-15分鐘至軟身,椰菜花切成小朵,南瓜切成小塊。",
    "雞蛋連殼煮熟,剝殼取蛋黃,用叉壓碎。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pisang, iris tipis.",
    "Kukus kembang kol 8-10 menit, labu kuning 12-15 menit hingga empuk, potong kembang kol jadi kuntum kecil, labu jadi dadu kecil.",
    "Rebus telur utuh dengan cangkangnya, kupas, ambil kuning telurnya, haluskan dengan garpu.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang saging, hiwaing manipis.",
    "Pasingawan ang coliflor ng 8-10 minuto, ang kalabasa ng 12-15 minuto hanggang lumambot, hiwain ang coliflor nang maliit, ang kalabasa nang parisukat.",
    "Pakuluan ang buong itlog na may balat, balatan, kunin ang pula, durugin gamit ang tinidor.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-02.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-6-8-03",
  title: "雪梨紫蕃薯雞柳餐盤",
  title_id: "Piring Pir Salju, Ubi Ungu & Fillet Ayam",
  title_fil: "Plato ng Snow Pear, Purple na Kamote at Fillet ng Manok",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "雪梨", amount: "適量(蒸軟切片)", name_id: "Pir salju (Asian pear)", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Snow pear", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "青江菜", amount: "適量(蒸軟切成菜梗條)", name_id: "Pokcoy", amount_id: "secukupnya (kukus lunak, potong batang jadi stik)", name_fil: "Pechay", amount_fil: "sapat na dami (pasingawan, hiwaing stick ang tangkay)" },
    { name: "紫蕃薯", amount: "適量(蒸軟切條)", name_id: "Ubi jalar ungu", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Purple na kamote", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "雞柳", amount: "適量(蒸熟撕碎)", name_id: "Fillet ayam", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng manok", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" }
  ],
  steps: [
    "雪梨去皮去芯切片,隔水蒸8-10分鐘至軟身。",
    "青江菜菜梗蒸5-6分鐘、紫蕃薯蒸15分鐘至軟身,切成手指條狀。",
    "雞柳隔水蒸10-12分鐘至熟透,撕成幼絲/碎狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pir salju, buang bijinya, iris, kukus 8-10 menit hingga empuk.",
    "Kukus batang pokcoy 5-6 menit, ubi ungu 15 menit hingga empuk, potong jadi stik seukuran jari.",
    "Kukus fillet ayam 10-12 menit hingga matang sempurna, suwir-suwir.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang snow pear, alisin ang buto, hiwain, pasingawan ng 8-10 minuto hanggang lumambot.",
    "Pasingawan ang tangkay ng pechay ng 5-6 minuto, ang purple na kamote ng 15 minuto hanggang lumambot, hiwaing stick.",
    "Pasingawan ang fillet ng manok ng 10-12 minuto hanggang lutong-luto, tapon-tapunin.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-03.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-6-8-04",
  title: "牛油果南瓜豬柳餐盤",
  title_id: "Piring Alpukat, Labu Kuning & Fillet Babi",
  title_fil: "Plato ng Avocado, Kalabasa at Fillet ng Baboy",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "牛油果", amount: "適量(切條)", name_id: "Alpukat", amount_id: "secukupnya (potong stik)", name_fil: "Avocado", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "南瓜", amount: "適量(蒸軟切塊)", name_id: "Labu kuning", amount_id: "secukupnya (kukus lunak, potong dadu)", name_fil: "Kalabasa", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" },
    { name: "豬柳", amount: "適量(蒸熟撕碎)", name_id: "Fillet babi", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng baboy", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" }
  ],
  steps: [
    "牛油果去皮去核,切成手指粗條。",
    "紅蘿蔔蒸12-15分鐘、南瓜蒸12-15分鐘至軟身,切成條狀/塊狀。",
    "豬柳隔水蒸10-12分鐘至熟透,撕成幼絲/碎狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas alpukat, buang bijinya, potong stik seukuran jari.",
    "Kukus wortel 12-15 menit, labu kuning 12-15 menit hingga empuk, potong jadi stik/dadu.",
    "Kukus fillet babi 10-12 menit hingga matang sempurna, suwir-suwir.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang avocado, alisin ang buto, hiwaing stick.",
    "Pasingawan ang karot ng 12-15 minuto, ang kalabasa ng 12-15 minuto hanggang lumambot, hiwaing stick/parisukat.",
    "Pasingawan ang fillet ng baboy ng 10-12 minuto hanggang lutong-luto, tapon-tapunin.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-04.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-6-8-05",
  title: "火龍果淮山魚柳餐盤",
  title_id: "Piring Buah Naga, Yam Cina & Fillet Ikan",
  title_fil: "Plato ng Dragon Fruit, Chinese Yam at Fillet ng Isda",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "火龍果", amount: "適量(蒸軟切塊)", name_id: "Buah naga", amount_id: "secukupnya (kukus lunak, potong dadu)", name_fil: "Dragon fruit", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" },
    { name: "茄子", amount: "適量(蒸軟切條)", name_id: "Terong", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Talong", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "淮山", amount: "適量(蒸軟切條)", name_id: "Yam Cina (huai shan)", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Chinese yam (huai shan)", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "魚柳", amount: "適量(蒸熟撕碎)", name_id: "Fillet ikan", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng isda", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" }
  ],
  steps: [
    "火龍果去皮切塊,隔水蒸3-4分鐘至軟身。",
    "茄子蒸8-10分鐘、淮山蒸12-15分鐘至軟身,切成手指條狀。",
    "魚柳隔水蒸8分鐘至熟透,仔細檢查冇細骨後撕成碎狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas buah naga, potong dadu, kukus 3-4 menit hingga empuk.",
    "Kukus terong 8-10 menit, yam Cina 12-15 menit hingga empuk, potong jadi stik seukuran jari.",
    "Kukus fillet ikan 8 menit hingga matang sempurna, periksa teliti tidak ada duri, suwir-suwir.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang dragon fruit, hiwaing parisukat, pasingawan ng 3-4 minuto hanggang lumambot.",
    "Pasingawan ang talong ng 8-10 minuto, ang Chinese yam ng 12-15 minuto hanggang lumambot, hiwaing stick.",
    "Pasingawan ang fillet ng isda ng 8 minuto hanggang lutong-luto, suriin nang mabuti na walang tinik, tapon-tapunin.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-05.jpg",
  tips: "第一次食新魚種要留意觀察過敏反應,魚肉記得仔細檢查冇細骨先可以俾BB食。",
  tips_id: "Untuk jenis ikan baru pertama kali, perhatikan reaksi alergi, ingat periksa teliti tidak ada duri kecil sebelum diberikan ke bayi.",
  tips_fil: "Sa unang pagkain ng bagong uri ng isda, obserbahan ang reaksyong alerhiya, tandaang suriin nang mabuti na walang munting tinik bago ipakain sa sanggol."
},
{
  id: "combo-6-8-06",
  title: "木瓜翠玉瓜豆腐餐盤",
  title_id: "Piring Pepaya, Zucchini & Tahu",
  title_fil: "Plato ng Papaya, Zucchini at Tokwa",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "豆腐屬黃豆製品,同蠶豆(broad bean)係完全不同品種,一般屬安全食材;如BB對大豆有懷疑可先向醫生確認。",
  g6pd_note_id: "Tahu adalah produk kedelai, spesies yang sama sekali berbeda dari kacang fava (broad bean), umumnya bahan yang aman; jika ragu bayi sensitif terhadap kedelai, konsultasikan dengan dokter dulu.",
  g6pd_note_fil: "Ang tokwa ay gawa sa soybean, ibang-iba ang species kumpara sa broad bean, karaniwang ligtas na sangkap; kung may alinlangan sa sensitibidad ng sanggol sa soy, kumonsulta muna sa doktor.",
  allergens: ["大豆"],
  prep_time: 20,
  ingredients: [
    { name: "木瓜", amount: "適量(切條)", name_id: "Pepaya", amount_id: "secukupnya (potong stik)", name_fil: "Papaya", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "翠玉瓜", amount: "適量(蒸軟切條)", name_id: "Zucchini", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Zucchini", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "薯仔", amount: "適量(蒸軟切條)", name_id: "Kentang", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Patatas", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "豆腐", amount: "適量(蒸熱切條)", name_id: "Tahu", amount_id: "secukupnya (kukus panas, potong stik)", name_fil: "Tokwa", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" }
  ],
  steps: [
    "木瓜去皮去籽,切成手指粗條。",
    "翠玉瓜蒸8-10分鐘、薯仔蒸12-15分鐘至軟身,切成手指條狀。",
    "豆腐隔水蒸5分鐘至熱透,切成條狀,質地軟身方便BB捏住。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pepaya, buang bijinya, potong stik seukuran jari.",
    "Kukus zucchini 8-10 menit, kentang 12-15 menit hingga empuk, potong jadi stik seukuran jari.",
    "Kukus tahu 5 menit hingga panas merata, potong stik, tekstur lembut agar mudah dipegang bayi.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang papaya, alisin ang buto, hiwaing stick seukuran jari.",
    "Pasingawan ang zucchini ng 8-10 minuto, ang patatas ng 12-15 minuto hanggang lumambot, hiwaing stick.",
    "Pasingawan ang tokwa ng 5 minuto hanggang mainit, hiwaing stick, malambot na texture para madaling hawakan ng sanggol.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-06.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-6-8-07",
  title: "啤梨南瓜雞柳餐盤",
  title_id: "Piring Pir, Labu Kuning & Fillet Ayam",
  title_fil: "Plato ng Peras, Kalabasa at Fillet ng Manok",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "啤梨", amount: "適量(蒸軟切片)", name_id: "Pir", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Peras", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "露筍", amount: "適量(蒸軟切條)", name_id: "Asparagus", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Asparagus", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "南瓜", amount: "適量(蒸軟切塊)", name_id: "Labu kuning", amount_id: "secukupnya (kukus lunak, potong dadu)", name_fil: "Kalabasa", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" },
    { name: "雞柳", amount: "適量(蒸熟撕碎)", name_id: "Fillet ayam", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng manok", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" }
  ],
  steps: [
    "啤梨去皮去芯切片,隔水蒸8-10分鐘至軟身。",
    "露筍蒸6-8分鐘、南瓜蒸12-15分鐘至軟身,露筍切去老莖切段,南瓜切塊。",
    "雞柳隔水蒸10-12分鐘至熟透,撕成幼絲。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pir, buang bijinya, iris, kukus 8-10 menit hingga empuk.",
    "Kukus asparagus 6-8 menit, labu kuning 12-15 menit hingga empuk, buang pangkal keras asparagus lalu potong, labu potong dadu.",
    "Kukus fillet ayam 10-12 menit hingga matang sempurna, suwir-suwir.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang peras, alisin ang buto, hiwain, pasingawan ng 8-10 minuto hanggang lumambot.",
    "Pasingawan ang asparagus ng 6-8 minuto, ang kalabasa ng 12-15 minuto hanggang lumambot, alisin ang matigas na dulo ng asparagus at hiwain, hiwaing parisukat ang kalabasa.",
    "Pasingawan ang fillet ng manok ng 10-12 minuto hanggang lutong-luto, tapon-tapunin.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-07.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-6-8-08",
  title: "提子紅蘿蔔豆腐餐盤",
  title_id: "Piring Anggur, Wortel & Tahu",
  title_fil: "Plato ng Ubas, Karot at Tokwa",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "豆腐屬黃豆製品,同蠶豆(broad bean)係完全不同品種,一般屬安全食材;如BB對大豆有懷疑可先向醫生確認。",
  g6pd_note_id: "Tahu adalah produk kedelai, spesies yang sama sekali berbeda dari kacang fava (broad bean), umumnya bahan yang aman; jika ragu bayi sensitif terhadap kedelai, konsultasikan dengan dokter dulu.",
  g6pd_note_fil: "Ang tokwa ay gawa sa soybean, ibang-iba ang species kumpara sa broad bean, karaniwang ligtas na sangkap; kung may alinlangan sa sensitibidad ng sanggol sa soy, kumonsulta muna sa doktor.",
  allergens: ["大豆"],
  prep_time: 20,
  ingredients: [
    { name: "提子", amount: "適量(去皮去籽,蒸熟)", name_id: "Anggur", amount_id: "secukupnya (kupas, buang biji, kukus)", name_fil: "Ubas", amount_fil: "sapat na dami (balatan, alisin ang buto, pasingawan)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)", name_id: "Kembang kol", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Coliflor", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "豆腐", amount: "適量(蒸熱切條)", name_id: "Tahu", amount_id: "secukupnya (kukus panas, potong stik)", name_fil: "Tokwa", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" }
  ],
  steps: [
    "提子去皮去籽,隔水蒸3-4分鐘至熟軟(蒸熟令提子皮更易咬開,減低哽塞風險)。",
    "椰菜花蒸8-10分鐘、紅蘿蔔蒸12-15分鐘至軟身,切成小朵/條狀。",
    "豆腐隔水蒸5分鐘至熱透,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas anggur, buang bijinya, kukus 3-4 menit hingga matang lunak (mengukus membuat kulit anggur lebih mudah digigit, mengurangi risiko tersedak).",
    "Kukus kembang kol 8-10 menit, wortel 12-15 menit hingga empuk, potong jadi kuntum kecil/stik.",
    "Kukus tahu 5 menit hingga panas merata, potong stik.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang ubas, alisin ang buto, pasingawan ng 3-4 minuto hanggang lumambot (ang pagpapasingaw ay nagpapadali sa pagkagat ng balat ng ubas, binabawasan ang panganib ng pagkasamid).",
    "Pasingawan ang coliflor ng 8-10 minuto, ang karot ng 12-15 minuto hanggang lumambot, hiwaing maliit/stick.",
    "Pasingawan ang tokwa ng 5 minuto hanggang mainit, hiwaing stick.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-08.jpg",
  tips: "提子建議去皮去籽同切半先俾BB食,減低哽塞風險。",
  tips_id: "Anggur disarankan dikupas, dibuang bijinya, dan dipotong setengah sebelum diberikan ke bayi, untuk mengurangi risiko tersedak.",
  tips_fil: "Inirerekomendang balatan, alisin ang buto, at hatiin ang ubas bago ipakain sa sanggol, para mabawasan ang panganib ng pagkasamid."
},
{
  id: "combo-6-8-09",
  title: "蘋果翠玉瓜蛋黃餐盤",
  title_id: "Piring Apel, Zucchini & Kuning Telur",
  title_fil: "Plato ng Mansanas, Zucchini at Pula ng Itlog",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 20,
  ingredients: [
    { name: "蘋果", amount: "適量(蒸軟切片)", name_id: "Apel", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Mansanas", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)", name_id: "Jagung muda (baby corn)", amount_id: "secukupnya (kukus lunak, potong)", name_fil: "Baby corn", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "翠玉瓜", amount: "適量(蒸軟切條)", name_id: "Zucchini", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Zucchini", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "雞蛋", amount: "半隻(煮熟蛋黃壓碎)", name_id: "Telur", amount_id: "1/2 butir (rebus, haluskan kuning telurnya)", name_fil: "Itlog", amount_fil: "1/2 piraso (pakuluan, durugin ang pula)" }
  ],
  steps: [
    "蘋果去皮去芯切片,隔水蒸8-10分鐘至軟身。",
    "粟米筍蒸6-8分鐘、翠玉瓜蒸8-10分鐘至軟身,切成手指段/條狀。",
    "雞蛋連殼煮熟,剝殼取蛋黃,用叉壓碎。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas apel, buang bijinya, iris, kukus 8-10 menit hingga empuk.",
    "Kukus baby corn 6-8 menit, zucchini 8-10 menit hingga empuk, potong jadi ukuran jari.",
    "Rebus telur utuh dengan cangkangnya, kupas, ambil kuning telurnya, haluskan dengan garpu.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang mansanas, alisin ang buto, hiwain, pasingawan ng 8-10 minuto hanggang lumambot.",
    "Pasingawan ang baby corn ng 6-8 minuto, ang zucchini ng 8-10 minuto hanggang lumambot, hiwaing kasing haba ng daliri.",
    "Pakuluan ang buong itlog na may balat, balatan, kunin ang pula, durugin gamit ang tinidor.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-09.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-6-8-10",
  title: "木瓜薯仔魚柳餐盤",
  title_id: "Piring Pepaya, Kentang & Fillet Ikan",
  title_fil: "Plato ng Papaya, Patatas at Fillet ng Isda",
  stage: "6-8個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "木瓜", amount: "適量(切條)", name_id: "Pepaya", amount_id: "secukupnya (potong stik)", name_fil: "Papaya", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "青江菜", amount: "適量(蒸軟切成菜梗條)", name_id: "Pokcoy", amount_id: "secukupnya (kukus lunak, potong batang jadi stik)", name_fil: "Pechay", amount_fil: "sapat na dami (pasingawan, hiwaing stick ang tangkay)" },
    { name: "薯仔", amount: "適量(蒸軟切條)", name_id: "Kentang", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Patatas", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "魚柳", amount: "適量(蒸熟撕碎)", name_id: "Fillet ikan", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng isda", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" }
  ],
  steps: [
    "木瓜去皮去籽,切成手指粗條。",
    "青江菜菜梗蒸5-6分鐘、薯仔蒸12-15分鐘至軟身,切成手指條狀。",
    "魚柳隔水蒸8分鐘至熟透,仔細檢查冇細骨後撕成碎狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pepaya, buang bijinya, potong stik seukuran jari.",
    "Kukus batang pokcoy 5-6 menit, kentang 12-15 menit hingga empuk, potong jadi stik seukuran jari.",
    "Kukus fillet ikan 8 menit hingga matang sempurna, periksa teliti tidak ada duri, suwir-suwir.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang papaya, alisin ang buto, hiwaing stick seukuran jari.",
    "Pasingawan ang tangkay ng pechay ng 5-6 minuto, ang patatas ng 12-15 minuto hanggang lumambot, hiwaing stick.",
    "Pasingawan ang fillet ng isda ng 8 minuto hanggang lutong-luto, suriin nang mabuti na walang tinik, tapon-tapunin.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-6-8-10.jpg",
  tips: "第一次食新魚種要留意觀察過敏反應,魚肉記得仔細檢查冇細骨先可以俾BB食。",
  tips_id: "Untuk jenis ikan baru pertama kali, perhatikan reaksi alergi, ingat periksa teliti tidak ada duri kecil sebelum diberikan ke bayi.",
  tips_fil: "Sa unang pagkain ng bagong uri ng isda, obserbahan ang reaksyong alerhiya, tandaang suriin nang mabuti na walang munting tinik bago ipakain sa sanggol."
},

// ========================================
// BLW手指食物組合餐盤(9-12個月)
// 重點:開始有餅狀/糰狀變化,訓練咀嚼同手眼協調。
// ========================================



{
  id: "combo-9-12-01",
  title: "提子雞柳南瓜餐盤",
  title_id: "Piring Anggur, Fillet Ayam & Labu Kuning",
  title_fil: "Plato ng Ubas, Fillet ng Manok at Kalabasa",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "提子", amount: "適量(去皮去籽切半)", name_id: "Anggur", amount_id: "secukupnya (kupas, buang biji, potong setengah)", name_fil: "Ubas", amount_fil: "sapat na dami (balatan, alisin ang buto, hatiin)" },
    { name: "西蘭花", amount: "適量(蒸軟切小朵)", name_id: "Brokoli", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Brokuli", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "雞柳", amount: "適量(蒸熟撕絲)", name_id: "Fillet ayam", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng manok", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" },
    { name: "南瓜", amount: "適量(蒸軟切塊)", name_id: "Labu kuning", amount_id: "secukupnya (kukus lunak, potong dadu)", name_fil: "Kalabasa", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" }
  ],
  steps: [
    "提子去皮去籽,切半。",
    "西蘭花蒸8-10分鐘、紅蘿蔔蒸12-15分鐘至軟身,切成小朵/條狀。",
    "雞柳隔水蒸10-12分鐘至熟透,撕成幼絲。",
    "南瓜隔水蒸12-15分鐘至軟身,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas anggur, buang bijinya, potong setengah.",
    "Kukus brokoli 8-10 menit, wortel 12-15 menit hingga empuk, potong jadi kuntum kecil/stik.",
    "Kukus fillet ayam 10-12 menit hingga matang sempurna, suwir-suwir.",
    "Kukus labu kuning 12-15 menit hingga empuk, potong dadu kecil.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang ubas, alisin ang buto, hatiin.",
    "Pasingawan ang brokuli ng 8-10 minuto, ang karot ng 12-15 minuto hanggang lumambot, hiwaing maliit/stick.",
    "Pasingawan ang fillet ng manok ng 10-12 minuto hanggang lutong-luto, tapon-tapunin.",
    "Pasingawan ang kalabasa ng 12-15 minuto hanggang lumambot, hiwaing maliit.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-01.jpg",
  tips: "提子建議去皮去籽同切半先俾BB食,減低哽塞風險。",
  tips_id: "Anggur disarankan dikupas, dibuang bijinya, dan dipotong setengah sebelum diberikan ke bayi, untuk mengurangi risiko tersedak.",
  tips_fil: "Inirerekomendang balatan, alisin ang buto, at hatiin ang ubas bago ipakain sa sanggol, para mabawasan ang panganib ng pagkasamid."
},
{
  id: "combo-9-12-02",
  title: "藍莓水煮蛋薯仔餐盤",
  title_id: "Piring Blueberry, Telur Rebus & Kentang",
  title_fil: "Plato ng Blueberry, Nilagang Itlog at Patatas",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 25,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)", name_id: "Blueberry", amount_id: "secukupnya (pipihkan)", name_fil: "Blueberry", amount_fil: "sapat na dami (pisain)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)", name_id: "Kembang kol", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Coliflor", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)", name_id: "Jagung muda (baby corn)", amount_id: "secukupnya (kukus lunak, potong)", name_fil: "Baby corn", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "雞蛋", amount: "1隻(煮熟切瓣)", name_id: "Telur", amount_id: "1 butir (rebus, potong perempat)", name_fil: "Itlog", amount_fil: "1 piraso (pakuluan, hiwaing kuwarto)" },
    { name: "薯仔", amount: "適量(蒸軟切條)", name_id: "Kentang", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Patatas", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" }
  ],
  steps: [
    "藍莓洗淨,用叉背壓扁,減低哽塞風險。",
    "椰菜花蒸8-10分鐘、粟米筍蒸6-8分鐘至軟身,切成小朵/段。",
    "雞蛋連殼煮熟,剝殼切瓣。",
    "薯仔隔水蒸12-15分鐘至軟身,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Cuci blueberry, pipihkan dengan punggung garpu, untuk mengurangi risiko tersedak.",
    "Kukus kembang kol 8-10 menit, baby corn 6-8 menit hingga empuk, potong jadi kuntum kecil/potongan.",
    "Rebus telur utuh dengan cangkangnya, kupas, potong perempat.",
    "Kukus kentang 12-15 menit hingga empuk, potong stik.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Hugasan ang blueberry, pisain gamit ang likod ng tinidor, para mabawasan ang panganib ng pagkasamid.",
    "Pasingawan ang coliflor ng 8-10 minuto, ang baby corn ng 6-8 minuto hanggang lumambot, hiwaing maliit/piraso.",
    "Pakuluan ang buong itlog na may balat, balatan, hiwaing kuwarto.",
    "Pasingawan ang patatas ng 12-15 minuto hanggang lumambot, hiwaing stick.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-02.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。",
  tips_id: "Blueberry disarankan dipipihkan atau dipotong setengah sebelum diberikan ke bayi, untuk mengurangi risiko tersedak.",
  tips_fil: "Inirerekomendang pisain o hatiin ang blueberry bago ipakain sa sanggol, para mabawasan ang panganib ng pagkasamid."
},
{
  id: "combo-9-12-03",
  title: "蘋果魚柳迷你饅頭餐盤",
  title_id: "Piring Apel, Fillet Ikan & Mini Mantou",
  title_fil: "Plato ng Mansanas, Fillet ng Isda at Mini Mantou",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮", "麩質"],
  prep_time: 25,
  ingredients: [
    { name: "蘋果", amount: "適量(蒸軟切片)", name_id: "Apel", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Mansanas", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "露筍", amount: "適量(蒸軟切條)", name_id: "Asparagus", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Asparagus", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "青江菜", amount: "適量(蒸軟切成菜梗條)", name_id: "Pokcoy", amount_id: "secukupnya (kukus lunak, potong batang jadi stik)", name_fil: "Pechay", amount_fil: "sapat na dami (pasingawan, hiwaing stick ang tangkay)" },
    { name: "魚柳", amount: "適量(蒸熟撕碎)", name_id: "Fillet ikan", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng isda", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" },
    { name: "迷你饅頭", amount: "適量(蒸熱)", name_id: "Mini mantou", amount_id: "secukupnya (kukus panas)", name_fil: "Mini mantou", amount_fil: "sapat na dami (pasingawan)" }
  ],
  steps: [
    "蘋果去皮去芯切片,隔水蒸8-10分鐘至軟身。",
    "露筍蒸6-8分鐘、青江菜菜梗蒸5-6分鐘至軟身,切成手指條狀。",
    "魚柳隔水蒸8分鐘至熟透,仔細檢查冇細骨後撕碎。",
    "迷你饅頭隔水蒸5分鐘至熱透,放涼至適合溫度。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas apel, buang bijinya, iris, kukus 8-10 menit hingga empuk.",
    "Kukus asparagus 6-8 menit, batang pokcoy 5-6 menit hingga empuk, potong jadi stik seukuran jari.",
    "Kukus fillet ikan 8 menit hingga matang sempurna, periksa teliti tidak ada duri, suwir-suwir.",
    "Kukus mini mantou 5 menit hingga panas merata, dinginkan hingga suhu yang sesuai.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang mansanas, alisin ang buto, hiwain, pasingawan ng 8-10 minuto hanggang lumambot.",
    "Pasingawan ang asparagus ng 6-8 minuto, ang tangkay ng pechay ng 5-6 minuto hanggang lumambot, hiwaing stick.",
    "Pasingawan ang fillet ng isda ng 8 minuto hanggang lutong-luto, suriin nang mabuti na walang tinik, tapon-tapunin.",
    "Pasingawan ang mini mantou ng 5 minuto hanggang mainit, palamigin sa tamang temperatura.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-03.jpg",
  tips: "第一次食新魚種要留意觀察過敏反應,魚肉記得仔細檢查冇細骨先可以俾BB食。",
  tips_id: "Untuk jenis ikan baru pertama kali, perhatikan reaksi alergi, ingat periksa teliti tidak ada duri kecil sebelum diberikan ke bayi.",
  tips_fil: "Sa unang pagkain ng bagong uri ng isda, obserbahan ang reaksyong alerhiya, tandaang suriin nang mabuti na walang munting tinik bago ipakain sa sanggol."
},
{
  id: "combo-9-12-04",
  title: "士多啤梨肉餅淮山餐盤",
  title_id: "Piring Stroberi, Perkedel Daging & Yam Cina",
  title_fil: "Plato ng Strawberry, Patty ng Baboy at Chinese Yam",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "士多啤梨", amount: "適量(切半)", name_id: "Stroberi", amount_id: "secukupnya (potong setengah)", name_fil: "Strawberry", amount_fil: "sapat na dami (hatiin)" },
    { name: "牛油果", amount: "適量(切條)", name_id: "Alpukat", amount_id: "secukupnya (potong stik)", name_fil: "Avocado", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "豬肉餅", amount: "適量(蒸熟切條)", name_id: "Perkedel daging babi", amount_id: "secukupnya (kukus matang, potong stik)", name_fil: "Patty ng baboy", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "淮山", amount: "適量(蒸軟切條)", name_id: "Yam Cina (huai shan)", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Chinese yam (huai shan)", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" }
  ],
  steps: [
    "士多啤梨洗淨切半。",
    "牛油果去皮去核切條;紅蘿蔔隔水蒸12-15分鐘至軟身,切條。",
    "豬肉碎整成肉餅,隔水蒸12-15分鐘至熟透,切成手指條狀。",
    "淮山隔水蒸12-15分鐘至軟身,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Cuci stroberi, potong setengah.",
    "Kupas alpukat, buang bijinya, potong stik; kukus wortel 12-15 menit hingga empuk, potong stik.",
    "Bentuk daging babi cincang jadi perkedel, kukus 12-15 menit hingga matang sempurna, potong jadi stik seukuran jari.",
    "Kukus yam Cina 12-15 menit hingga empuk, potong stik.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Hugasan ang strawberry, hatiin.",
    "Balatan ang avocado, alisin ang buto, hiwaing stick; pasingawan ang karot ng 12-15 minuto hanggang lumambot, hiwaing stick.",
    "Hulmahin ang giniling na baboy na maging patty, pasingawan ng 12-15 minuto hanggang lutong-luto, hiwaing stick seukuran jari.",
    "Pasingawan ang Chinese yam ng 12-15 minuto hanggang lumambot, hiwaing stick.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-04.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-9-12-05",
  title: "香蕉三文魚蕃薯糕餐盤",
  title_id: "Piring Pisang, Salmon & Kue Ubi Jalar",
  title_fil: "Plato ng Saging, Salmon at Steamed na Kamote Cake",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 35,
  ingredients: [
    { name: "香蕉", amount: "適量(蒸軟切片)", name_id: "Pisang", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Saging", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)", name_id: "Kembang kol", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Coliflor", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "翠玉瓜", amount: "適量(蒸軟切條)", name_id: "Zucchini", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Zucchini", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "三文魚", amount: "適量(蒸熟撕碎)", name_id: "Salmon", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Salmon", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" },
    { name: "蕃薯蒸糕", amount: "適量(蒸熱切塊)", name_id: "Kue kukus ubi jalar", amount_id: "secukupnya (kukus panas, potong dadu)", name_fil: "Steamed na kamote cake", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" }
  ],
  steps: [
    "香蕉去皮切片,隔水蒸3-4分鐘至軟身。",
    "椰菜花蒸8-10分鐘、翠玉瓜蒸8-10分鐘至軟身,切成小朵/條狀。",
    "三文魚隔水蒸8分鐘至熟透,仔細檢查冇細骨後撕碎。",
    "蕃薯蒸糕隔水蒸5-6分鐘至熱透,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pisang, iris, kukus 3-4 menit hingga empuk.",
    "Kukus kembang kol 8-10 menit, zucchini 8-10 menit hingga empuk, potong jadi kuntum kecil/stik.",
    "Kukus salmon 8 menit hingga matang sempurna, periksa teliti tidak ada duri, suwir-suwir.",
    "Kukus kue ubi jalar 5-6 menit hingga panas merata, potong dadu kecil.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang saging, hiwain, pasingawan ng 3-4 minuto hanggang lumambot.",
    "Pasingawan ang coliflor ng 8-10 minuto, ang zucchini ng 8-10 minuto hanggang lumambot, hiwaing maliit/stick.",
    "Pasingawan ang salmon ng 8 minuto hanggang lutong-luto, suriin nang mabuti na walang tinik, tapon-tapunin.",
    "Pasingawan ang steamed na kamote cake ng 5-6 minuto hanggang mainit, hiwaing maliit.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-05.jpg",
  tips: "三文魚含豐富DHA,第一次食要留意過敏反應。",
  tips_id: "Salmon kaya akan DHA, untuk pertama kali makan perhatikan reaksi alergi.",
  tips_fil: "Mayaman sa DHA ang salmon, sa unang pagkain obserbahan ang reaksyong alerhiya."
},
{
  id: "combo-9-12-06",
  title: "雪梨雞柳淮山肉餅餐盤",
  title_id: "Piring Pir Salju, Fillet Ayam & Perkedel Yam",
  title_fil: "Plato ng Snow Pear, Fillet ng Manok at Patty na Yam",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 35,
  ingredients: [
    { name: "雪梨", amount: "適量(蒸軟切片)", name_id: "Pir salju (Asian pear)", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Snow pear", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "茄子", amount: "適量(蒸軟切條)", name_id: "Terong", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Talong", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "黃甜椒", amount: "適量(蒸軟切條)", name_id: "Paprika kuning", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Dilaw na bell pepper", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "雞柳", amount: "適量(蒸熟撕絲)", name_id: "Fillet ayam", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng manok", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" },
    { name: "淮山豬肉餅", amount: "適量(蒸熟切塊)", name_id: "Perkedel yam & daging babi", amount_id: "secukupnya (kukus matang, potong dadu)", name_fil: "Patty na yam at baboy", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" }
  ],
  steps: [
    "雪梨去皮去芯切片,隔水蒸8-10分鐘至軟身。",
    "茄子蒸8-10分鐘、黃甜椒蒸6-8分鐘至軟身,切成手指條狀。",
    "雞柳隔水蒸10-12分鐘至熟透,撕成幼絲。",
    "淮山豬肉餅隔水蒸12-15分鐘至熟透,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pir salju, buang bijinya, iris, kukus 8-10 menit hingga empuk.",
    "Kukus terong 8-10 menit, paprika kuning 6-8 menit hingga empuk, potong jadi stik seukuran jari.",
    "Kukus fillet ayam 10-12 menit hingga matang sempurna, suwir-suwir.",
    "Kukus perkedel yam-babi 12-15 menit hingga matang sempurna, potong dadu kecil.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang snow pear, alisin ang buto, hiwain, pasingawan ng 8-10 minuto hanggang lumambot.",
    "Pasingawan ang talong ng 8-10 minuto, ang dilaw na bell pepper ng 6-8 minuto hanggang lumambot, hiwaing stick.",
    "Pasingawan ang fillet ng manok ng 10-12 minuto hanggang lutong-luto, tapon-tapunin.",
    "Pasingawan ang patty na yam-baboy ng 12-15 minuto hanggang lutong-luto, hiwaing parisukat.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-06.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-9-12-07",
  title: "藍莓蘋果豬柳蕃薯條餐盤",
  title_id: "Piring Blueberry, Apel, Fillet Babi & Stik Ubi Jalar",
  title_fil: "Plato ng Blueberry, Mansanas, Fillet ng Baboy at Kamote Sticks",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)", name_id: "Blueberry", amount_id: "secukupnya (pipihkan)", name_fil: "Blueberry", amount_fil: "sapat na dami (pisain)" },
    { name: "蘋果", amount: "適量(蒸軟切片)", name_id: "Apel", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Mansanas", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "露筍", amount: "適量(蒸軟切條)", name_id: "Asparagus", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Asparagus", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)", name_id: "Jagung muda (baby corn)", amount_id: "secukupnya (kukus lunak, potong)", name_fil: "Baby corn", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "豬柳", amount: "適量(蒸熟撕絲)", name_id: "Fillet babi", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng baboy", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" },
    { name: "蕃薯", amount: "適量(蒸軟切條)", name_id: "Ubi jalar", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Kamote", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" }
  ],
  steps: [
    "藍莓洗淨壓扁;蘋果去皮去芯切片,隔水蒸8-10分鐘至軟身。",
    "露筍同粟米筍分別隔水蒸6-8分鐘至軟身,切成手指條/段。",
    "豬柳隔水蒸10-12分鐘至熟透,撕成幼絲。",
    "蕃薯隔水蒸15分鐘至軟身,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Cuci blueberry, pipihkan; kupas apel, buang bijinya, iris, kukus 8-10 menit hingga empuk.",
    "Kukus asparagus dan baby corn masing-masing 6-8 menit hingga empuk, potong jadi stik/potongan seukuran jari.",
    "Kukus fillet babi 10-12 menit hingga matang sempurna, suwir-suwir.",
    "Kukus ubi jalar 15 menit hingga empuk, potong stik.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Hugasan ang blueberry, pisain; balatan ang mansanas, alisin ang buto, hiwain, pasingawan ng 8-10 minuto hanggang lumambot.",
    "Pasingawan ang asparagus at baby corn nang hiwalay ng 6-8 minuto hanggang lumambot, hiwaing stick/piraso seukuran jari.",
    "Pasingawan ang fillet ng baboy ng 10-12 minuto hanggang lutong-luto, tapon-tapunin.",
    "Pasingawan ang kamote ng 15 minuto hanggang lumambot, hiwaing stick.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-07.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。",
  tips_id: "Blueberry disarankan dipipihkan atau dipotong setengah sebelum diberikan ke bayi, untuk mengurangi risiko tersedak.",
  tips_fil: "Inirerekomendang pisain o hatiin ang blueberry bago ipakain sa sanggol, para mabawasan ang panganib ng pagkasamid."
},
{
  id: "combo-9-12-08",
  title: "火龍果香菇迷你饅頭餐盤",
  title_id: "Piring Buah Naga, Jamur Shiitake & Mini Mantou",
  title_fil: "Plato ng Dragon Fruit, Shiitake at Mini Mantou",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 25,
  ingredients: [
    { name: "火龍果", amount: "適量(切塊)", name_id: "Buah naga", amount_id: "secukupnya (potong dadu)", name_fil: "Dragon fruit", amount_fil: "sapat na dami (hiwaing parisukat)" },
    { name: "秋葵", amount: "適量(去頭尾蒸軟切片)", name_id: "Okra", amount_id: "secukupnya (buang ujung, kukus lunak, iris)", name_fil: "Okra", amount_fil: "sapat na dami (alisin ang dulo, pasingawan, hiwain)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切片)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "鮮香菇", amount: "適量(蒸熟切片)", name_id: "Jamur shiitake segar", amount_id: "secukupnya (kukus matang, iris)", name_fil: "Sariwang shiitake", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "迷你饅頭", amount: "適量(蒸熱)", name_id: "Mini mantou", amount_id: "secukupnya (kukus panas)", name_fil: "Mini mantou", amount_fil: "sapat na dami (pasingawan)" }
  ],
  steps: [
    "火龍果去皮切塊。",
    "秋葵去頭尾蒸5-6分鐘、紅蘿蔔蒸12-15分鐘至軟身,切成薄片。",
    "鮮香菇隔水蒸5-6分鐘至熟透,切成薄片。",
    "迷你饅頭隔水蒸5分鐘至熱透,放涼至適合溫度。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas buah naga, potong dadu.",
    "Kukus okra (buang ujungnya) 5-6 menit, wortel 12-15 menit hingga empuk, iris tipis.",
    "Kukus jamur shiitake 5-6 menit hingga matang sempurna, iris tipis.",
    "Kukus mini mantou 5 menit hingga panas merata, dinginkan hingga suhu yang sesuai.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang dragon fruit, hiwaing parisukat.",
    "Pasingawan ang okra (alisin ang dulo) ng 5-6 minuto, ang karot ng 12-15 minuto hanggang lumambot, hiwaing manipis.",
    "Pasingawan ang shiitake ng 5-6 minuto hanggang lutong-luto, hiwaing manipis.",
    "Pasingawan ang mini mantou ng 5 minuto hanggang mainit, palamigin sa tamang temperatura.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-08.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-9-12-09",
  title: "士多啤梨三文魚淮山條餐盤",
  title_id: "Piring Stroberi, Salmon & Stik Yam Cina",
  title_fil: "Plato ng Strawberry, Salmon at Chinese Yam Sticks",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "士多啤梨", amount: "適量(切半)", name_id: "Stroberi", amount_id: "secukupnya (potong setengah)", name_fil: "Strawberry", amount_fil: "sapat na dami (hatiin)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)", name_id: "Kembang kol", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Coliflor", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "青瓜", amount: "適量(切條)", name_id: "Timun", amount_id: "secukupnya (potong stik)", name_fil: "Pipino", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "三文魚", amount: "適量(蒸熟撕碎)", name_id: "Salmon", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Salmon", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" },
    { name: "淮山", amount: "適量(蒸軟切條)", name_id: "Yam Cina (huai shan)", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Chinese yam (huai shan)", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" }
  ],
  steps: [
    "士多啤梨洗淨切半。",
    "椰菜花隔水蒸8-10分鐘至軟身,切小朵;青瓜去皮切條。",
    "三文魚隔水蒸8分鐘至熟透,仔細檢查冇細骨後撕碎。",
    "淮山隔水蒸12-15分鐘至軟身,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Cuci stroberi, potong setengah.",
    "Kukus kembang kol 8-10 menit hingga empuk, potong kuntum kecil; kupas timun, potong stik.",
    "Kukus salmon 8 menit hingga matang sempurna, periksa teliti tidak ada duri, suwir-suwir.",
    "Kukus yam Cina 12-15 menit hingga empuk, potong stik.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Hugasan ang strawberry, hatiin.",
    "Pasingawan ang coliflor ng 8-10 minuto hanggang lumambot, hiwaing maliit; balatan ang pipino, hiwaing stick.",
    "Pasingawan ang salmon ng 8 minuto hanggang lutong-luto, suriin nang mabuti na walang tinik, tapon-tapunin.",
    "Pasingawan ang Chinese yam ng 12-15 minuto hanggang lumambot, hiwaing stick.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-09.jpg",
  tips: "三文魚含豐富DHA,第一次食要留意過敏反應。",
  tips_id: "Salmon kaya akan DHA, untuk pertama kali makan perhatikan reaksi alergi.",
  tips_fil: "Mayaman sa DHA ang salmon, sa unang pagkain obserbahan ang reaksyong alerhiya."
},
{
  id: "combo-9-12-10",
  title: "提子水煮蛋芋頭糕餐盤",
  title_id: "Piring Anggur, Telur Rebus & Kue Talas",
  title_fil: "Plato ng Ubas, Nilagang Itlog at Gabi Cake",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋"],
  prep_time: 35,
  ingredients: [
    { name: "提子", amount: "適量(去皮去籽切半)", name_id: "Anggur", amount_id: "secukupnya (kupas, buang biji, potong setengah)", name_fil: "Ubas", amount_fil: "sapat na dami (balatan, alisin ang buto, hatiin)" },
    { name: "白蘿蔔", amount: "適量(蒸軟切條)", name_id: "Lobak putih (daikon)", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Labanos", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "茄子", amount: "適量(蒸軟切條)", name_id: "Terong", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Talong", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "雞蛋", amount: "1隻(煮熟切瓣)", name_id: "Telur", amount_id: "1 butir (rebus, potong perempat)", name_fil: "Itlog", amount_fil: "1 piraso (pakuluan, hiwaing kuwarto)" },
    { name: "芋頭蒸糕", amount: "適量(蒸熱切塊)", name_id: "Kue kukus talas", amount_id: "secukupnya (kukus panas, potong dadu)", name_fil: "Steamed na gabi cake", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" }
  ],
  steps: [
    "提子去皮去籽,切半。",
    "白蘿蔔蒸12-15分鐘、茄子蒸8-10分鐘至軟身,切成手指條狀。",
    "雞蛋連殼煮熟,剝殼切瓣。",
    "芋頭蒸糕隔水蒸5-6分鐘至熱透,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas anggur, buang bijinya, potong setengah.",
    "Kukus lobak putih 12-15 menit, terong 8-10 menit hingga empuk, potong jadi stik seukuran jari.",
    "Rebus telur utuh dengan cangkangnya, kupas, potong perempat.",
    "Kukus kue talas 5-6 menit hingga panas merata, potong dadu kecil.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang ubas, alisin ang buto, hatiin.",
    "Pasingawan ang labanos ng 12-15 minuto, ang talong ng 8-10 minuto hanggang lumambot, hiwaing stick seukuran jari.",
    "Pakuluan ang buong itlog na may balat, balatan, hiwaing kuwarto.",
    "Pasingawan ang gabi cake ng 5-6 minuto hanggang mainit, hiwaing parisukat.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-10.jpg",
  tips: "提子建議去皮去籽同切半先俾BB食,減低哽塞風險。",
  tips_id: "Anggur disarankan dikupas, dibuang bijinya, dan dipotong setengah sebelum diberikan ke bayi, untuk mengurangi risiko tersedak.",
  tips_fil: "Inirerekomendang balatan, alisin ang buto, at hatiin ang ubas bago ipakain sa sanggol, para mabawasan ang panganib ng pagkasamid."
},
{
  id: "combo-9-12-11",
  title: "藍莓韭菜蛋捲小饅頭餐盤",
  title_id: "Piring Blueberry, Telur Gulung Kucai & Mantou Kecil",
  title_fil: "Plato ng Blueberry, Itlog na may Kutsai at Maliit na Mantou",
  stage: "9-12個月",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋", "麩質"],
  prep_time: 25,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)", name_id: "Blueberry", amount_id: "secukupnya (pipihkan)", name_fil: "Blueberry", amount_fil: "sapat na dami (pisain)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "青瓜", amount: "適量(切條)", name_id: "Timun", amount_id: "secukupnya (potong stik)", name_fil: "Pipino", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "韭菜蛋捲", amount: "適量(煎熟切件)", name_id: "Telur gulung kucai", amount_id: "secukupnya (goreng matang, potong)", name_fil: "Rolyo ng itlog na may kutsai", amount_fil: "sapat na dami (iprito, hiwain)" },
    { name: "小饅頭", amount: "適量(蒸熱)", name_id: "Mantou kecil", amount_id: "secukupnya (kukus panas)", name_fil: "Maliit na mantou", amount_fil: "sapat na dami (pasingawan)" }
  ],
  steps: [
    "藍莓洗淨壓扁。",
    "紅蘿蔔隔水蒸12-15分鐘至軟身,切條;青瓜去皮切條。",
    "韭菜切碎同雞蛋拌勻,煎成蛋捲,切成適合BB嘅小件。",
    "小饅頭隔水蒸5分鐘至熱透,放涼至適合溫度。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Cuci blueberry, pipihkan.",
    "Kukus wortel 12-15 menit hingga empuk, potong stik; kupas timun, potong stik.",
    "Cincang kucai, campur dengan telur, goreng jadi telur gulung, potong sesuai ukuran untuk bayi.",
    "Kukus mantou kecil 5 menit hingga panas merata, dinginkan hingga suhu yang sesuai.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Hugasan ang blueberry, pisain.",
    "Pasingawan ang karot ng 12-15 minuto hanggang lumambot, hiwaing stick; balatan ang pipino, hiwaing stick.",
    "Tadtarin ang kutsai, ihalo sa itlog, iprito maging rolyo ng itlog, hiwain nang angkop na sukat para sa sanggol.",
    "Pasingawan ang maliit na mantou ng 5 minuto hanggang mainit, palamigin sa tamang temperatura.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-9-12-11.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。",
  tips_id: "Blueberry disarankan dipipihkan atau dipotong setengah sebelum diberikan ke bayi, untuk mengurangi risiko tersedak.",
  tips_fil: "Inirerekomendang pisain o hatiin ang blueberry bago ipakain sa sanggol, para mabawasan ang panganib ng pagkasamid."
},

// ========================================
// BLW手指食物組合餐盤(1-3歲)
// 重點:造型更多元(餅、糰、卷、意粉、帶骨小禽類),過渡到同桌飲食。
// ========================================



{
  id: "combo-1-3-01",
  title: "火龍果豬柳芋頭糕餐盤",
  title_id: "Piring Buah Naga, Fillet Babi & Kue Talas",
  title_fil: "Plato ng Dragon Fruit, Fillet ng Baboy at Gabi Cake",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "火龍果", amount: "適量(切塊)", name_id: "Buah naga", amount_id: "secukupnya (potong dadu)", name_fil: "Dragon fruit", amount_fil: "sapat na dami (hiwaing parisukat)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "白蘿蔔", amount: "適量(蒸軟切條)", name_id: "Lobak putih (daikon)", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Labanos", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "豬柳", amount: "適量(蒸熟撕條)", name_id: "Fillet babi", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng baboy", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" },
    { name: "芋頭蒸糕", amount: "適量(蒸熱切塊)", name_id: "Kue kukus talas", amount_id: "secukupnya (kukus panas, potong dadu)", name_fil: "Steamed na gabi cake", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" }
  ],
  steps: [
    "火龍果去皮切塊。",
    "紅蘿蔔同白蘿蔔分別隔水蒸12-15分鐘至軟身,切成手指條狀。",
    "豬柳隔水蒸10-12分鐘至熟透,撕成粗條。",
    "芋頭蒸糕隔水蒸5-6分鐘至熱透,切成小塊。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas buah naga, potong dadu.",
    "Kukus wortel dan lobak putih masing-masing 12-15 menit hingga empuk, potong jadi stik seukuran jari.",
    "Kukus fillet babi 10-12 menit hingga matang sempurna, suwir jadi potongan kasar.",
    "Kukus kue talas 5-6 menit hingga panas merata, potong dadu kecil.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang dragon fruit, hiwaing parisukat.",
    "Pasingawan ang karot at labanos nang hiwalay ng 12-15 minuto hanggang lumambot, hiwaing stick seukuran jari.",
    "Pasingawan ang fillet ng baboy ng 10-12 minuto hanggang lutong-luto, tapon-tapunin nang magaspang.",
    "Pasingawan ang gabi cake ng 5-6 minuto hanggang mainit, hiwaing parisukat.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-01.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-1-3-02",
  title: "蘋果雞柳紫蕃薯餐盤",
  title_id: "Piring Apel, Fillet Ayam & Ubi Ungu",
  title_fil: "Plato ng Mansanas, Fillet ng Manok at Purple na Kamote",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "蘋果", amount: "適量(蒸軟切片)", name_id: "Apel", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Mansanas", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)", name_id: "Kembang kol", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Coliflor", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)", name_id: "Jagung muda (baby corn)", amount_id: "secukupnya (kukus lunak, potong)", name_fil: "Baby corn", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "雞柳", amount: "適量(蒸熟撕條)", name_id: "Fillet ayam", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng manok", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" },
    { name: "紫蕃薯", amount: "適量(蒸軟切條)", name_id: "Ubi jalar ungu", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Purple na kamote", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" }
  ],
  steps: [
    "蘋果去皮去芯切片,隔水蒸8-10分鐘至軟身。",
    "椰菜花蒸8-10分鐘、粟米筍蒸6-8分鐘至軟身,切成小朵/段。",
    "雞柳隔水蒸10-12分鐘至熟透,撕成粗條。",
    "紫蕃薯隔水蒸15分鐘至軟身,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas apel, buang bijinya, iris, kukus 8-10 menit hingga empuk.",
    "Kukus kembang kol 8-10 menit, baby corn 6-8 menit hingga empuk, potong jadi kuntum kecil/potongan.",
    "Kukus fillet ayam 10-12 menit hingga matang sempurna, suwir jadi potongan kasar.",
    "Kukus ubi ungu 15 menit hingga empuk, potong stik.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang mansanas, alisin ang buto, hiwain, pasingawan ng 8-10 minuto hanggang lumambot.",
    "Pasingawan ang coliflor ng 8-10 minuto, ang baby corn ng 6-8 minuto hanggang lumambot, hiwaing maliit/piraso.",
    "Pasingawan ang fillet ng manok ng 10-12 minuto hanggang lutong-luto, tapon-tapunin nang magaspang.",
    "Pasingawan ang purple na kamote ng 15 minuto hanggang lumambot, hiwaing stick.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-02.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-1-3-03",
  title: "木瓜香菇椰菜煎餅餐盤",
  title_id: "Piring Pepaya, Jamur Shiitake & Perkedel Kubis",
  title_fil: "Plato ng Papaya, Shiitake at Patty na Repolyo",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋", "麩質"],
  prep_time: 30,
  ingredients: [
    { name: "木瓜", amount: "適量(切條)", name_id: "Pepaya", amount_id: "secukupnya (potong stik)", name_fil: "Papaya", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "絲瓜", amount: "適量(蒸軟切片)", name_id: "Gambas (luffa)", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Patola", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "鮮香菇", amount: "適量(蒸熟切片)", name_id: "Jamur shiitake segar", amount_id: "secukupnya (kukus matang, iris)", name_fil: "Sariwang shiitake", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "椰菜煎餅", amount: "適量(煎熟切件)", name_id: "Perkedel kubis", amount_id: "secukupnya (goreng matang, potong)", name_fil: "Patty na repolyo", amount_fil: "sapat na dami (iprito, hiwain)" }
  ],
  steps: [
    "木瓜去皮去籽,切成手指粗條。",
    "絲瓜蒸8-10分鐘、紅蘿蔔蒸12-15分鐘至軟身,切成薄片/條狀。",
    "鮮香菇隔水蒸5-6分鐘至熟透,切成薄片。",
    "椰菜切碎拌入蛋汁同少量麵粉,煎成小餅,切成適合BB嘅小件。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pepaya, buang bijinya, potong stik seukuran jari.",
    "Kukus gambas 8-10 menit, wortel 12-15 menit hingga empuk, potong jadi irisan tipis/stik.",
    "Kukus jamur shiitake 5-6 menit hingga matang sempurna, iris tipis.",
    "Cincang kubis, campur dengan telur kocok dan sedikit tepung, goreng jadi perkedel kecil, potong sesuai ukuran untuk bayi.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang papaya, alisin ang buto, hiwaing stick seukuran jari.",
    "Pasingawan ang patola ng 8-10 minuto, ang karot ng 12-15 minuto hanggang lumambot, hiwaing manipis/stick.",
    "Pasingawan ang shiitake ng 5-6 minuto hanggang lutong-luto, hiwaing manipis.",
    "Tadtarin ang repolyo, ihalo sa binating itlog at kaunting harina, iprito maging maliit na patty, hiwain nang angkop na sukat para sa sanggol.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-03.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-1-3-04",
  title: "藍莓橙肉雞柳蕃薯餅餐盤",
  title_id: "Piring Blueberry, Jeruk, Fillet Ayam & Perkedel Ubi Jalar",
  title_fil: "Plato ng Blueberry, Dalandan, Fillet ng Manok at Patty na Kamote",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 35,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)", name_id: "Blueberry", amount_id: "secukupnya (pipihkan)", name_fil: "Blueberry", amount_fil: "sapat na dami (pisain)" },
    { name: "橙肉", amount: "適量(去籽切小塊)", name_id: "Daging jeruk", amount_id: "secukupnya (buang biji, potong kecil)", name_fil: "Hiwa ng dalandan", amount_fil: "sapat na dami (alisin ang buto, hiwaing maliit)" },
    { name: "秋葵", amount: "適量(去頭尾蒸軟切片)", name_id: "Okra", amount_id: "secukupnya (buang ujung, kukus lunak, iris)", name_fil: "Okra", amount_fil: "sapat na dami (alisin ang dulo, pasingawan, hiwain)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切片)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "雞柳", amount: "適量(蒸熟撕絲)", name_id: "Fillet ayam", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Fillet ng manok", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" },
    { name: "蕃薯豬肉餅", amount: "適量(蒸熟切件)", name_id: "Perkedel ubi jalar & daging babi", amount_id: "secukupnya (kukus matang, potong)", name_fil: "Patty na kamote at baboy", amount_fil: "sapat na dami (pasingawan, hiwain)" }
  ],
  steps: [
    "藍莓洗淨壓扁;橙肉去籽切成小塊。",
    "秋葵去頭尾蒸5-6分鐘、紅蘿蔔蒸12-15分鐘至軟身,切成薄片。",
    "雞柳隔水蒸10-12分鐘至熟透,撕成幼絲。",
    "蕃薯豬肉餅隔水蒸12-15分鐘至熟透,切成適合BB嘅小件。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Cuci blueberry, pipihkan; buang biji jeruk, potong kecil.",
    "Kukus okra (buang ujungnya) 5-6 menit, wortel 12-15 menit hingga empuk, iris tipis.",
    "Kukus fillet ayam 10-12 menit hingga matang sempurna, suwir-suwir.",
    "Kukus perkedel ubi-babi 12-15 menit hingga matang sempurna, potong sesuai ukuran untuk bayi.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Hugasan ang blueberry, pisain; alisin ang buto ng dalandan, hiwaing maliit.",
    "Pasingawan ang okra (alisin ang dulo) ng 5-6 minuto, ang karot ng 12-15 minuto hanggang lumambot, hiwaing manipis.",
    "Pasingawan ang fillet ng manok ng 10-12 minuto hanggang lutong-luto, tapon-tapunin.",
    "Pasingawan ang patty na kamote-baboy ng 12-15 minuto hanggang lutong-luto, hiwaing angkop na sukat para sa sanggol.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-04.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。",
  tips_id: "Blueberry disarankan dipipihkan atau dipotong setengah sebelum diberikan ke bayi, untuk mengurangi risiko tersedak.",
  tips_fil: "Inirerekomendang pisain o hatiin ang blueberry bago ipakain sa sanggol, para mabawasan ang panganib ng pagkasamid."
},
{
  id: "combo-1-3-05",
  title: "士多啤梨三文魚薯仔餅餐盤",
  title_id: "Piring Stroberi, Perkedel Salmon Kentang & Mini Onigiri",
  title_fil: "Plato ng Strawberry, Patty na Salmon at Patatas at Mini Rice Ball",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮", "蛋"],
  prep_time: 35,
  ingredients: [
    { name: "士多啤梨", amount: "適量(切半)", name_id: "Stroberi", amount_id: "secukupnya (potong setengah)", name_fil: "Strawberry", amount_fil: "sapat na dami (hatiin)" },
    { name: "西蘭花", amount: "適量(蒸軟切小朵)", name_id: "Brokoli", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Brokuli", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "青瓜", amount: "適量(切條)", name_id: "Timun", amount_id: "secukupnya (potong stik)", name_fil: "Pipino", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "三文魚薯仔煎餅", amount: "適量(煎熟切件)", name_id: "Perkedel salmon kentang", amount_id: "secukupnya (goreng matang, potong)", name_fil: "Patty na salmon at patatas", amount_fil: "sapat na dami (iprito, hiwain)" },
    { name: "迷你飯糰", amount: "適量(捏成小飯糰)", name_id: "Mini onigiri (bola nasi)", amount_id: "secukupnya (bentuk bola kecil)", name_fil: "Mini rice ball", amount_fil: "sapat na dami (hulmahin nang maliit)" }
  ],
  steps: [
    "士多啤梨洗淨切半。",
    "西蘭花隔水蒸8-10分鐘至軟身,切小朵;青瓜去皮切條。",
    "三文魚拆碎拌入薯蓉同少量蛋汁,煎成小餅,切成適合BB嘅小件。",
    "白飯捏成迷你飯糰。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Cuci stroberi, potong setengah.",
    "Kukus brokoli 8-10 menit hingga empuk, potong kuntum kecil; kupas timun, potong stik.",
    "Suwir salmon, campur dengan puree kentang dan sedikit telur kocok, goreng jadi perkedel kecil, potong sesuai ukuran untuk bayi.",
    "Bentuk nasi putih jadi mini onigiri.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Hugasan ang strawberry, hatiin.",
    "Pasingawan ang brokuli ng 8-10 minuto hanggang lumambot, hiwaing maliit; balatan ang pipino, hiwaing stick.",
    "Tapon-tapunin ang salmon, ihalo sa mashed na patatas at kaunting binating itlog, iprito maging maliit na patty, hiwain nang angkop na sukat para sa sanggol.",
    "Hulmahin ang puting kanin maging mini rice ball.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-05.jpg",
  tips: "三文魚含豐富DHA,第一次食要留意過敏反應。",
  tips_id: "Salmon kaya akan DHA, untuk pertama kali makan perhatikan reaksi alergi.",
  tips_fil: "Mayaman sa DHA ang salmon, sa unang pagkain obserbahan ang reaksyong alerhiya."
},
{
  id: "combo-1-3-06",
  title: "提子番茄牛肉意粉餐盤",
  title_id: "Piring Anggur, Pasta Tomat & Daging Sapi",
  title_fil: "Plato ng Ubas, Pasta na may Kamatis at Baka",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 30,
  ingredients: [
    { name: "提子", amount: "適量(去皮去籽切半)", name_id: "Anggur", amount_id: "secukupnya (kupas, buang biji, potong setengah)", name_fil: "Ubas", amount_fil: "sapat na dami (balatan, alisin ang buto, hatiin)" },
    { name: "椰菜花", amount: "適量(蒸軟切小朵)", name_id: "Kembang kol", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Coliflor", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "短意粉", amount: "適量(煮軟剪短)", name_id: "Pasta pendek", amount_id: "secukupnya (masak lunak, gunting pendek)", name_fil: "Maikling pasta", amount_fil: "sapat na dami (lutuin, guntingin nang maikli)" },
    { name: "牛肉碎", amount: "適量(炒熟)", name_id: "Daging sapi cincang", amount_id: "secukupnya (tumis matang)", name_fil: "Giniling na baka", amount_fil: "sapat na dami (igisa)" },
    { name: "番茄", amount: "適量(煮軟切碎)", name_id: "Tomat", amount_id: "secukupnya (rebus lunak, cincang)", name_fil: "Kamatis", amount_fil: "sapat na dami (pakuluan, tadtarin)" }
  ],
  steps: [
    "提子去皮去籽,切半。",
    "椰菜花蒸8-10分鐘、紅蘿蔔蒸12-15分鐘至軟身,切成小朵/條狀。",
    "短意粉煮軟,剪成適合BB嘅長度。",
    "番茄去皮切碎,同牛肉碎一齊煮成醬,拌入意粉。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas anggur, buang bijinya, potong setengah.",
    "Kukus kembang kol 8-10 menit, wortel 12-15 menit hingga empuk, potong jadi kuntum kecil/stik.",
    "Rebus pasta pendek hingga lunak, gunting sesuai panjang untuk bayi.",
    "Kupas tomat, cincang, masak bersama daging sapi cincang jadi saus, campurkan ke pasta.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang ubas, alisin ang buto, hatiin.",
    "Pasingawan ang coliflor ng 8-10 minuto, ang karot ng 12-15 minuto hanggang lumambot, hiwaing maliit/stick.",
    "Pakuluan ang maikling pasta hanggang lumambot, guntingin nang angkop na haba para sa sanggol.",
    "Balatan ang kamatis, tadtarin, lutuin kasama ang giniling na baka maging sarsa, ihalo sa pasta.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-06.jpg",
  tips: "提子建議去皮去籽同切半先俾BB食,減低哽塞風險。",
  tips_id: "Anggur disarankan dikupas, dibuang bijinya, dan dipotong setengah sebelum diberikan ke bayi, untuk mengurangi risiko tersedak.",
  tips_fil: "Inirerekomendang balatan, alisin ang buto, at hatiin ang ubas bago ipakain sa sanggol, para mabawasan ang panganib ng pagkasamid."
},
{
  id: "combo-1-3-07",
  title: "雪梨三文魚薯仔餅餐盤",
  title_id: "Piring Pir Salju, Perkedel Salmon Kentang & Perkedel Kubis",
  title_fil: "Plato ng Snow Pear, Patty na Salmon at Patatas at Patty na Repolyo",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮", "蛋", "麩質"],
  prep_time: 35,
  ingredients: [
    { name: "雪梨", amount: "適量(蒸軟切片)", name_id: "Pir salju (Asian pear)", amount_id: "secukupnya (kukus lunak, iris)", name_fil: "Snow pear", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "西蘭花", amount: "適量(蒸軟切小朵)", name_id: "Brokoli", amount_id: "secukupnya (kukus lunak, potong kuntum kecil)", name_fil: "Brokuli", amount_fil: "sapat na dami (pasingawan, hiwaing maliit)" },
    { name: "黃甜椒", amount: "適量(蒸軟切條)", name_id: "Paprika kuning", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Dilaw na bell pepper", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "三文魚薯仔煎餅", amount: "適量(煎熟切件)", name_id: "Perkedel salmon kentang", amount_id: "secukupnya (goreng matang, potong)", name_fil: "Patty na salmon at patatas", amount_fil: "sapat na dami (iprito, hiwain)" },
    { name: "椰菜煎餅", amount: "適量(煎熟切件)", name_id: "Perkedel kubis", amount_id: "secukupnya (goreng matang, potong)", name_fil: "Patty na repolyo", amount_fil: "sapat na dami (iprito, hiwain)" }
  ],
  steps: [
    "雪梨去皮去芯切片,隔水蒸8-10分鐘至軟身。",
    "西蘭花蒸8-10分鐘、黃甜椒蒸6-8分鐘至軟身,切成小朵/條狀。",
    "三文魚拆碎拌入薯蓉同少量蛋汁,煎成小餅,切成適合BB嘅小件。",
    "椰菜切碎拌入蛋汁同少量麵粉,煎成小餅,切成適合BB嘅小件。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pir salju, buang bijinya, iris, kukus 8-10 menit hingga empuk.",
    "Kukus brokoli 8-10 menit, paprika kuning 6-8 menit hingga empuk, potong jadi kuntum kecil/stik.",
    "Suwir salmon, campur dengan puree kentang dan sedikit telur kocok, goreng jadi perkedel kecil, potong sesuai ukuran untuk bayi.",
    "Cincang kubis, campur dengan telur kocok dan sedikit tepung, goreng jadi perkedel kecil, potong sesuai ukuran untuk bayi.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang snow pear, alisin ang buto, hiwain, pasingawan ng 8-10 minuto hanggang lumambot.",
    "Pasingawan ang brokuli ng 8-10 minuto, ang dilaw na bell pepper ng 6-8 minuto hanggang lumambot, hiwaing maliit/stick.",
    "Tapon-tapunin ang salmon, ihalo sa mashed na patatas at kaunting binating itlog, iprito maging maliit na patty, hiwain nang angkop na sukat para sa sanggol.",
    "Tadtarin ang repolyo, ihalo sa binating itlog at kaunting harina, iprito maging maliit na patty, hiwain nang angkop na sukat para sa sanggol.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-07.jpg",
  tips: "三文魚含豐富DHA,第一次食要留意過敏反應。",
  tips_id: "Salmon kaya akan DHA, untuk pertama kali makan perhatikan reaksi alergi.",
  tips_fil: "Mayaman sa DHA ang salmon, sa unang pagkain obserbahan ang reaksyong alerhiya."
},
{
  id: "combo-1-3-08",
  title: "藍莓番茄雞肉意粉餐盤",
  title_id: "Piring Blueberry, Pasta Tomat & Ayam",
  title_fil: "Plato ng Blueberry, Pasta na may Kamatis at Manok",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["麩質"],
  prep_time: 30,
  ingredients: [
    { name: "藍莓", amount: "適量(壓扁)", name_id: "Blueberry", amount_id: "secukupnya (pipihkan)", name_fil: "Blueberry", amount_fil: "sapat na dami (pisain)" },
    { name: "茄子", amount: "適量(蒸軟切條)", name_id: "Terong", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Talong", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "紅蘿蔔", amount: "適量(蒸軟切條)", name_id: "Wortel", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Karot", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "短意粉", amount: "適量(煮軟剪短)", name_id: "Pasta pendek", amount_id: "secukupnya (masak lunak, gunting pendek)", name_fil: "Maikling pasta", amount_fil: "sapat na dami (lutuin, guntingin nang maikli)" },
    { name: "雞肉碎", amount: "適量(炒熟)", name_id: "Daging ayam cincang", amount_id: "secukupnya (tumis matang)", name_fil: "Giniling na manok", amount_fil: "sapat na dami (igisa)" },
    { name: "番茄", amount: "適量(煮軟切碎)", name_id: "Tomat", amount_id: "secukupnya (rebus lunak, cincang)", name_fil: "Kamatis", amount_fil: "sapat na dami (pakuluan, tadtarin)" }
  ],
  steps: [
    "藍莓洗淨壓扁。",
    "茄子蒸8-10分鐘、紅蘿蔔蒸12-15分鐘至軟身,切成手指條狀。",
    "短意粉煮軟,剪成適合BB嘅長度。",
    "番茄去皮切碎,同雞肉碎一齊煮成醬,拌入意粉。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Cuci blueberry, pipihkan.",
    "Kukus terong 8-10 menit, wortel 12-15 menit hingga empuk, potong jadi stik seukuran jari.",
    "Rebus pasta pendek hingga lunak, gunting sesuai panjang untuk bayi.",
    "Kupas tomat, cincang, masak bersama daging ayam cincang jadi saus, campurkan ke pasta.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Hugasan ang blueberry, pisain.",
    "Pasingawan ang talong ng 8-10 minuto, ang karot ng 12-15 minuto hanggang lumambot, hiwaing stick seukuran jari.",
    "Pakuluan ang maikling pasta hanggang lumambot, guntingin nang angkop na haba para sa sanggol.",
    "Balatan ang kamatis, tadtarin, lutuin kasama ang giniling na manok maging sarsa, ihalo sa pasta.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-08.jpg",
  tips: "藍莓建議壓扁或切半先俾BB食,減低哽塞風險。",
  tips_id: "Blueberry disarankan dipipihkan atau dipotong setengah sebelum diberikan ke bayi, untuk mengurangi risiko tersedak.",
  tips_fil: "Inirerekomendang pisain o hatiin ang blueberry bago ipakain sa sanggol, para mabawasan ang panganib ng pagkasamid."
},
{
  id: "combo-1-3-09",
  title: "火龍果豬肉餅飯糰餐盤",
  title_id: "Piring Buah Naga, Perkedel Babi & Mini Onigiri",
  title_fil: "Plato ng Dragon Fruit, Patty na Baboy at Mini Rice Ball",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "火龍果", amount: "適量(切塊)", name_id: "Buah naga", amount_id: "secukupnya (potong dadu)", name_fil: "Dragon fruit", amount_fil: "sapat na dami (hiwaing parisukat)" },
    { name: "秋葵", amount: "適量(去頭尾蒸軟切片)", name_id: "Okra", amount_id: "secukupnya (buang ujung, kukus lunak, iris)", name_fil: "Okra", amount_fil: "sapat na dami (alisin ang dulo, pasingawan, hiwain)" },
    { name: "粟米筍", amount: "適量(蒸軟切段)", name_id: "Jagung muda (baby corn)", amount_id: "secukupnya (kukus lunak, potong)", name_fil: "Baby corn", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "淮山豬肉餅", amount: "適量(蒸熟切件)", name_id: "Perkedel yam & daging babi", amount_id: "secukupnya (kukus matang, potong)", name_fil: "Patty na yam at baboy", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "迷你飯糰", amount: "適量(捏成小飯糰)", name_id: "Mini onigiri (bola nasi)", amount_id: "secukupnya (bentuk bola kecil)", name_fil: "Mini rice ball", amount_fil: "sapat na dami (hulmahin nang maliit)" }
  ],
  steps: [
    "火龍果去皮切塊。",
    "秋葵去頭尾蒸5-6分鐘、粟米筍蒸6-8分鐘至軟身,切成薄片/段。",
    "淮山豬肉餅隔水蒸12-15分鐘至熟透,切成適合BB嘅小件。",
    "白飯捏成迷你飯糰。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas buah naga, potong dadu.",
    "Kukus okra (buang ujungnya) 5-6 menit, baby corn 6-8 menit hingga empuk, potong jadi irisan tipis/potongan.",
    "Kukus perkedel yam-babi 12-15 menit hingga matang sempurna, potong sesuai ukuran untuk bayi.",
    "Bentuk nasi putih jadi mini onigiri.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang dragon fruit, hiwaing parisukat.",
    "Pasingawan ang okra (alisin ang dulo) ng 5-6 minuto, ang baby corn ng 6-8 minuto hanggang lumambot, hiwaing manipis/piraso.",
    "Pasingawan ang patty na yam-baboy ng 12-15 minuto hanggang lutong-luto, hiwaing angkop na sukat para sa sanggol.",
    "Hulmahin ang puting kanin maging mini rice ball.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-09.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-1-3-10",
  title: "木瓜蕃薯豬肉餅餐盤",
  title_id: "Piring Pepaya, Perkedel Ubi Jalar & Babi",
  title_fil: "Plato ng Papaya, Patty na Kamote at Baboy",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 30,
  ingredients: [
    { name: "木瓜", amount: "適量(切條)", name_id: "Pepaya", amount_id: "secukupnya (potong stik)", name_fil: "Papaya", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "露筍", amount: "適量(蒸軟切條)", name_id: "Asparagus", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Asparagus", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" },
    { name: "青瓜", amount: "適量(切條)", name_id: "Timun", amount_id: "secukupnya (potong stik)", name_fil: "Pipino", amount_fil: "sapat na dami (hiwaing stick)" },
    { name: "蕃薯豬肉餅", amount: "適量(蒸熟切件)", name_id: "Perkedel ubi jalar & daging babi", amount_id: "secukupnya (kukus matang, potong)", name_fil: "Patty na kamote at baboy", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "紫蕃薯", amount: "適量(蒸軟切條)", name_id: "Ubi jalar ungu", amount_id: "secukupnya (kukus lunak, potong stik)", name_fil: "Purple na kamote", amount_fil: "sapat na dami (pasingawan, hiwaing stick)" }
  ],
  steps: [
    "木瓜去皮去籽,切成手指粗條。",
    "露筍隔水蒸6-8分鐘至軟身,切條;青瓜去皮切條。",
    "蕃薯豬肉餅隔水蒸12-15分鐘至熟透,切成適合BB嘅小件。",
    "紫蕃薯隔水蒸15分鐘至軟身,切成條狀。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas pepaya, buang bijinya, potong stik seukuran jari.",
    "Kukus asparagus 6-8 menit hingga empuk, potong stik; kupas timun, potong stik.",
    "Kukus perkedel ubi-babi 12-15 menit hingga matang sempurna, potong sesuai ukuran untuk bayi.",
    "Kukus ubi ungu 15 menit hingga empuk, potong stik.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang papaya, alisin ang buto, hiwaing stick seukuran jari.",
    "Pasingawan ang asparagus ng 6-8 minuto hanggang lumambot, hiwaing stick; balatan ang pipino, hiwaing stick.",
    "Pasingawan ang patty na kamote-baboy ng 12-15 minuto hanggang lutong-luto, hiwaing angkop na sukat para sa sanggol.",
    "Pasingawan ang purple na kamote ng 15 minuto hanggang lumambot, hiwaing stick.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-10.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-1-3-11",
  title: "哈密瓜蝦仁鱈魚餐盤",
  title_id: "Piring Melon Cantaloupe, Udang & Ikan Kod",
  title_fil: "Plato ng Melon, Hipon at Bakalaw",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["海鮮"],
  prep_time: 30,
  ingredients: [
    { name: "哈密瓜", amount: "適量(切塊)", name_id: "Melon cantaloupe", amount_id: "secukupnya (potong dadu)", name_fil: "Melon", amount_fil: "sapat na dami (hiwaing parisukat)" },
    { name: "蘆筍", amount: "適量(蒸軟切段)", name_id: "Asparagus", amount_id: "secukupnya (kukus lunak, potong)", name_fil: "Asparagus", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "紅椒", amount: "適量(蒸軟切粒)", name_id: "Paprika merah", amount_id: "secukupnya (kukus lunak, potong dadu)", name_fil: "Pulang bell pepper", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" },
    { name: "蝦仁", amount: "適量(去腸蒸熟切碎)", name_id: "Udang kupas", amount_id: "secukupnya (buang urat, kukus matang, cincang)", name_fil: "Hipon na balat", amount_fil: "sapat na dami (alisin ang ugat, pasingawan, tadtarin)" },
    { name: "鱈魚", amount: "適量(蒸熟撕碎)", name_id: "Ikan kod", amount_id: "secukupnya (kukus matang, suwir)", name_fil: "Bakalaw", amount_fil: "sapat na dami (pasingawan, tapon-tapunin)" }
  ],
  steps: [
    "哈密瓜去皮去籽,切成小塊。",
    "蘆筍隔水蒸6-8分鐘至軟身,切段;紅椒隔水蒸6-8分鐘至軟身,切粒。",
    "蝦仁去腸洗淨,隔水蒸3-4分鐘至熟,切碎。",
    "鱈魚隔水蒸8分鐘至熟透,仔細檢查冇細骨後撕碎。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas melon, buang bijinya, potong dadu kecil.",
    "Kukus asparagus 6-8 menit hingga empuk, potong; kukus paprika merah 6-8 menit hingga empuk, potong dadu.",
    "Buang urat udang, cuci bersih, kukus 3-4 menit hingga matang, cincang.",
    "Kukus ikan kod 8 menit hingga matang sempurna, periksa teliti tidak ada duri, suwir-suwir.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang melon, alisin ang buto, hiwaing maliit na parisukat.",
    "Pasingawan ang asparagus ng 6-8 minuto hanggang lumambot, hiwain; pasingawan ang pulang bell pepper ng 6-8 minuto hanggang lumambot, hiwaing parisukat.",
    "Alisin ang ugat ng hipon, hugasan, pasingawan ng 3-4 minuto hanggang maluto, tadtarin.",
    "Pasingawan ang bakalaw ng 8 minuto hanggang lutong-luto, suriin nang mabuti na walang tinik, tapon-tapunin.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-11.jpg",
  tips: "蝦仁、鱈魚屬首次引入嘅海鮮食材,建議先單獨試食,留意有冇過敏反應。",
  tips_id: "Udang dan ikan kod adalah bahan makanan laut yang baru diperkenalkan, disarankan dicoba sendiri-sendiri dulu, perhatikan reaksi alergi.",
  tips_fil: "Ang hipon at bakalaw ay mga bagong ipinakilalang sangkap na pagkaing-dagat, inirerekomendang subukan muna nang hiwalay, obserbahan ang reaksyong alerhiya."
},
{
  id: "combo-1-3-12",
  title: "蜜瓜小饅頭蛋捲餐盤",
  title_id: "Piring Melon Madu, Mantou Kecil & Telur Gulung",
  title_fil: "Plato ng Honeydew, Maliit na Mantou at Rolyo ng Itlog",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: ["蛋", "麩質"],
  prep_time: 25,
  ingredients: [
    { name: "蜜瓜", amount: "適量(切塊)", name_id: "Melon madu (honeydew)", amount_id: "secukupnya (potong dadu)", name_fil: "Honeydew melon", amount_fil: "sapat na dami (hiwaing parisukat)" },
    { name: "紅椒", amount: "適量(蒸軟切粒)", name_id: "Paprika merah", amount_id: "secukupnya (kukus lunak, potong dadu)", name_fil: "Pulang bell pepper", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" },
    { name: "粟米", amount: "1條(蒸熟)", name_id: "Jagung", amount_id: "1 tongkol (kukus matang)", name_fil: "Mais", amount_fil: "1 mais (pasingawan)" },
    { name: "小饅頭", amount: "適量(蒸熱)", name_id: "Mantou kecil", amount_id: "secukupnya (kukus panas)", name_fil: "Maliit na mantou", amount_fil: "sapat na dami (pasingawan)" },
    { name: "雞蛋", amount: "適量(煎成蛋捲切件)", name_id: "Telur", amount_id: "secukupnya (goreng jadi gulungan, potong)", name_fil: "Itlog", amount_fil: "sapat na dami (iprito maging rolyo, hiwain)" }
  ],
  steps: [
    "蜜瓜去皮去籽,切成小塊。",
    "紅椒隔水蒸6-8分鐘至軟身,切粒;粟米整條隔水蒸10-12分鐘至熟。",
    "小饅頭隔水蒸5分鐘至熱透,放涼至適合溫度。",
    "雞蛋打散煎成蛋捲,切成適合BB嘅小件。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas melon madu, buang bijinya, potong dadu kecil.",
    "Kukus paprika merah 6-8 menit hingga empuk, potong dadu; kukus jagung utuh 10-12 menit hingga matang.",
    "Kukus mantou kecil 5 menit hingga panas merata, dinginkan hingga suhu yang sesuai.",
    "Kocok telur, goreng jadi telur gulung, potong sesuai ukuran untuk bayi.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang honeydew, alisin ang buto, hiwaing maliit na parisukat.",
    "Pasingawan ang pulang bell pepper ng 6-8 minuto hanggang lumambot, hiwaing parisukat; pasingawan ang buong mais ng 10-12 minuto hanggang maluto.",
    "Pasingawan ang maliit na mantou ng 5 minuto hanggang mainit, palamigin sa tamang temperatura.",
    "Batihin ang itlog, iprito maging rolyo, hiwain nang angkop na sukat para sa sanggol.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-12.jpg",
  tips: "",
  tips_id: "",
  tips_fil: ""
},
{
  id: "combo-1-3-13",
  title: "哈密瓜咖喱雞髀餐盤",
  title_id: "Piring Melon Cantaloupe & Paha Ayam Kari",
  title_fil: "Plato ng Melon at Hita ng Manok na Curry",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 35,
  ingredients: [
    { name: "哈密瓜", amount: "適量(切塊)", name_id: "Melon cantaloupe", amount_id: "secukupnya (potong dadu)", name_fil: "Melon", amount_fil: "sapat na dami (hiwaing parisukat)" },
    { name: "紅椒", amount: "適量(蒸軟切粒)", name_id: "Paprika merah", amount_id: "secukupnya (kukus lunak, potong dadu)", name_fil: "Pulang bell pepper", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" },
    { name: "粟米", amount: "1條(蒸熟)", name_id: "Jagung", amount_id: "1 tongkol (kukus matang)", name_fil: "Mais", amount_fil: "1 mais (pasingawan)" },
    { name: "小雞髀", amount: "適量(咖喱燜熟)", name_id: "Paha ayam kecil", amount_id: "secukupnya (masak kari hingga empuk)", name_fil: "Maliit na hita ng manok", amount_fil: "sapat na dami (lutuin sa curry hanggang lumambot)" }
  ],
  steps: [
    "哈密瓜去皮去籽,切成小塊。",
    "紅椒隔水蒸6-8分鐘至軟身,切粒;粟米整條隔水蒸10-12分鐘至熟。",
    "小雞髀用少量咖喱粉同水燜煮15-20分鐘至熟透軟身。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas melon, buang bijinya, potong dadu kecil.",
    "Kukus paprika merah 6-8 menit hingga empuk, potong dadu; kukus jagung utuh 10-12 menit hingga matang.",
    "Masak paha ayam kecil dengan sedikit bubuk kari dan air, ungkep 15-20 menit hingga matang dan empuk.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang melon, alisin ang buto, hiwaing maliit na parisukat.",
    "Pasingawan ang pulang bell pepper ng 6-8 minuto hanggang lumambot, hiwaing parisukat; pasingawan ang buong mais ng 10-12 minuto hanggang maluto.",
    "Lutuin ang maliit na hita ng manok sa kaunting curry powder at tubig, nilaga ng 15-20 minuto hanggang lutong-luto at lumambot.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-13.jpg",
  tips: "⚠️帶骨食材:骨較細,建議先撕走大部分肉畀BB自己拎,家長在旁睇住,避免BB直接較大力咬骨。呢個組合屬首次引入嘅食材,建議留意有冇過敏反應。",
  tips_id: "⚠️Bahan bertulang: tulangnya cukup kecil, disarankan lepaskan sebagian besar dagingnya dulu agar bayi bisa pegang sendiri, orang tua harus mengawasi, hindari bayi menggigit tulang terlalu keras. Kombinasi ini adalah bahan yang baru diperkenalkan, disarankan perhatikan reaksi alergi.",
  tips_fil: "⚠️May-butong sangkap: manipis ang buto, inirerekomendang tanggalin muna ang karamihan ng laman para hawakan mismo ng sanggol, dapat bantayan ng magulang, iwasan ang malakas na pagkagat ng buto ng sanggol. Bagong ipinakilalang kombinasyon ito, inirerekomendang obserbahan ang reaksyong alerhiya."
},
{
  id: "combo-1-3-14",
  title: "蜜瓜鵪鶉髀餐盤",
  title_id: "Piring Melon Madu & Paha Burung Puyuh",
  title_fil: "Plato ng Honeydew at Hita ng Pugo",
  stage: "1-3歲",
  category: "手指食物",
  g6pd_status: "safe",
  g6pd_note: "",
  allergens: [],
  prep_time: 35,
  ingredients: [
    { name: "蜜瓜", amount: "適量(切塊)", name_id: "Melon madu (honeydew)", amount_id: "secukupnya (potong dadu)", name_fil: "Honeydew melon", amount_fil: "sapat na dami (hiwaing parisukat)" },
    { name: "蘆筍", amount: "適量(蒸軟切段)", name_id: "Asparagus", amount_id: "secukupnya (kukus lunak, potong)", name_fil: "Asparagus", amount_fil: "sapat na dami (pasingawan, hiwain)" },
    { name: "紅椒", amount: "適量(蒸軟切粒)", name_id: "Paprika merah", amount_id: "secukupnya (kukus lunak, potong dadu)", name_fil: "Pulang bell pepper", amount_fil: "sapat na dami (pasingawan, hiwaing parisukat)" },
    { name: "鵪鶉髀", amount: "適量(蒸熟)", name_id: "Paha burung puyuh", amount_id: "secukupnya (kukus matang)", name_fil: "Hita ng pugo", amount_fil: "sapat na dami (pasingawan)" }
  ],
  steps: [
    "蜜瓜去皮去籽,切成小塊。",
    "蘆筍蒸6-8分鐘、紅椒蒸6-8分鐘至軟身,切成段/粒。",
    "鵪鶉髀隔水蒸15-20分鐘至熟透軟身。",
    "全部放喺分格餐盤,唔同格分開擺,等BB自己揀住食。"
  ],
  steps_id: [
    "Kupas melon madu, buang bijinya, potong dadu kecil.",
    "Kukus asparagus 6-8 menit, paprika merah 6-8 menit hingga empuk, potong jadi potongan/dadu.",
    "Kukus paha burung puyuh 15-20 menit hingga matang sempurna dan empuk.",
    "Susun semua di piring bersekat, taruh terpisah di setiap sekat, biarkan bayi memilih makan sendiri."
  ],
  steps_fil: [
    "Balatan ang honeydew, alisin ang buto, hiwaing maliit na parisukat.",
    "Pasingawan ang asparagus ng 6-8 minuto, ang pulang bell pepper ng 6-8 minuto hanggang lumambot, hiwaing piraso/parisukat.",
    "Pasingawan ang hita ng pugo ng 15-20 minuto hanggang lutong-luto at lumambot.",
    "Ilagay lahat sa hating-hating na plato, ilagay nang magkakahiwalay sa bawat compartment, hayaang pumili at kumain mismo ang sanggol."
  ],
  image: "combo-1-3-14.jpg",
  tips: "⚠️帶骨食材:骨較細,建議先撕走大部分肉畀BB自己拎,家長在旁睇住,避免BB直接較大力咬骨。",
  tips_id: "⚠️Bahan bertulang: tulangnya cukup kecil, disarankan lepaskan sebagian besar dagingnya dulu agar bayi bisa pegang sendiri, orang tua harus mengawasi, hindari bayi menggigit tulang terlalu keras.",
  tips_fil: "⚠️May-butong sangkap: manipis ang buto, inirerekomendang tanggalin muna ang karamihan ng laman para hawakan mismo ng sanggol, dapat bantayan ng magulang, iwasan ang malakas na pagkagat ng buto ng sanggol."
}

];
