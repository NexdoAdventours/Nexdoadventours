const BASE = 'https://www.gadgetcraze.ug';
const products = [
  { id:1, name:"Powerology 65W GaN USB Power Strip", category:"Charging", price:120000, desc:"65W GaN USB power strip with 3 USB-C, 1 USB-A, AC outlets. Compact for travel.", img:"/web/image/product.product/918/image_1024/Powerology%2065W%20GaN%20USB%20Power%20Strip", rating:4, reviews:23 },
  { id:2, name:"Apple MagSafe Charger", category:"Charging", price:95000, desc:"Apple MagSafe wireless charger 15W fast charging for iPhone 12-16. Magnetic alignment.", img:"/web/image/product.product/317/image_1024/Apple%20MagSafe%20Charger", rating:5, reviews:47 },
  { id:3, name:"Apple USB-C 20W Power Adapter", category:"Charging", price:45000, desc:"Apple original 20W USB-C adapter with fast charging for iPhone and iPad.", img:"/web/image/product.product/274/image_1024/Apple%20USB-C%2020W%20Power%20Adapter", rating:4, reviews:31 },
  { id:4, name:"Samsung 25W PD Super Fast Charger", category:"Charging", price:35000, desc:"Samsung original 25W PD adapter with Super Fast Charging for Galaxy devices.", img:"/web/image/product.product/275/image_1024/Samsung%2025W%20PD%20Adapter%20%28Black%29", rating:4, reviews:18 },
  { id:5, name:"Green Lion 4-in-1 Wireless Charging Station", category:"Charging", price:85000, desc:"4-in-1 station for phone, earbuds, watch. 15W fast charging with LED.", img:"/web/image/product.product/1800/image_1024/Green%20Lion%204%20in%201%20Wireless%20Charging%20Station%2015W", rating:4, reviews:12 },
  { id:6, name:"Powerology 200W GaN Smart Terminal", category:"Charging", price:180000, desc:"200W GaN terminal with 4 USB-C and 2 USB-A. Charges 6 devices at once.", img:"/web/image/product.product/1085/image_1024/Powerology%20200W%20GaN%20Smart%20Terminal", rating:5, reviews:9 },
  { id:7, name:"Powerology 100W Triple PD GaN Charger", category:"Charging", price:95000, desc:"100W triple PD GaN with 2 USB-C and 1 USB-A. Compact travel-friendly.", img:"/web/image/product.product/1152/image_1024/Powerology%20100W%20Triple%20PD%20GaN%20Charger", rating:4, reviews:15 },
  { id:8, name:"Powerology Braided USB-C to Lightning 1.2M", category:"Charging", price:25000, desc:"Durable braided USB-C to Lightning cable 60W PD. MFi certified for iPhone.", img:"/web/image/product.product/284/image_1024/Powerology%20Braided%20USB-C%20to%20Lightning%20Cable%20PD%2060W%20%28Black%2C%201.2M%29", rating:4, reviews:42 },
  { id:9, name:"Samsung 45W PD Adapter with Cable", category:"Charging", price:65000, desc:"45W PD super fast charger with USB-C to USB-C cable. Charges Galaxy S25 full speed.", img:"/web/image/product.product/1119/image_1024/Samsung%2045W%20PD%20Adapter%20with%20USB-C%20to%20USB-%20C%20Cable", rating:5, reviews:21 },
  { id:10, name:"Green Lion PD30W Power Socket", category:"Charging", price:45000, desc:"30W PD power socket with dual USB ports. Fast charging for phones & tablets.", img:"/web/image/product.product/1755/image_1024/Green%20Lion%20PD30W%20Power%20Socket", rating:4, reviews:8 },
  { id:11, name:"Apple Silicone Case iPhone 16 Pro Max", category:"Cases & Guards", price:55000, desc:"Apple original silicone case with MagSafe. Soft microfiber lining.", grad:"linear-gradient(135deg,#2c3e50,#bdc3c7)", emoji:"📲", rating:4, reviews:33 },
  { id:12, name:"Samsung Galaxy S25 Ultra Clear Case", category:"Cases & Guards", price:32000, desc:"Military-grade transparent shockproof case. 10ft drop protection.", grad:"linear-gradient(135deg,#1a1a2e,#e94560)", emoji:"🛡️", rating:4, reviews:27 },
  { id:13, name:"Tempered Glass Screen Guard 9H", category:"Cases & Guards", price:15000, desc:"Premium 9H hardness tempered glass. Anti-scratch oleophobic coating.", grad:"linear-gradient(135deg,#2980b9,#6dd5fa)", emoji:"🪟", rating:4, reviews:56 },
  { id:14, name:"Spigen Ultra Hybrid Case iPhone 15 Pro", category:"Cases & Guards", price:45000, desc:"Clear hybrid case with military-grade drop protection. MagSafe compatible.", grad:"linear-gradient(135deg,#2d3436,#dfe6e9)", emoji:"📎", rating:5, reviews:19 },
  { id:15, name:"PopSocket Phone Grip Stand", category:"Cases & Guards", price:20000, desc:"Expandable phone grip and stand. Works with most phones and cases.", grad:"linear-gradient(135deg,#e84393,#fd79a8)", emoji:"🔄", rating:3, reviews:11 },
  { id:16, name:"Apple Magic Mouse 3 (Silver)", category:"Computing", price:280000, desc:"Apple Magic Mouse with Lightning port. Multi-touch surface rechargeable.", img:"/web/image/product.product/1516/image_1024/Apple%20Magic%20Mouse%203%20with%20Lightning%20Charging%20Port%20%28Silver%29", rating:4, reviews:24 },
  { id:17, name:"Apple Pencil USB-C", category:"Computing", price:350000, desc:"Apple Pencil with USB-C port. Pixel-perfect precision for iPad Air and Pro.", img:"/web/image/product.product/191/image_1024/Apple%20Pencil%20with%20USB-C%20Charging%20Port", rating:5, reviews:38 },
  { id:18, name:"Seagate Expansion 1TB Portable Drive", category:"Computing", price:150000, desc:"1TB portable external HDD with USB 3.0. Up to 140MB/s transfers.", img:"/web/image/product.product/267/image_1024/Seagate%20Expansion%20Portable%20Drive%20%281TB%29", rating:4, reviews:15 },
  { id:19, name:"Logitech MX Master 3S Mouse", category:"Computing", price:220000, desc:"Premium wireless mouse 8K DPI laser sensor. Silent clicks MagSpeed scroll.", grad:"linear-gradient(135deg,#0f0f0f,#333)", emoji:"🖱️", rating:5, reviews:41 },
  { id:20, name:"Logitech K380 Keyboard", category:"Computing", price:120000, desc:"Compact Bluetooth keyboard Easy-Switch for 3 devices. Mac Windows Android.", grad:"linear-gradient(135deg,#1a1a2e,#a29bfe)", emoji:"⌨️", rating:4, reviews:29 },
  { id:21, name:"Nintendo Switch Lite (Blue)", category:"Gaming", price:1600000, desc:"Nintendo Switch Lite with built-in controls. Compact handheld system.", img:"/web/image/product.product/1451/image_1024/Nintendo%20Switch%20Lite%20%28Blue%29", rating:5, reviews:62 },
  { id:22, name:"PlayStation DualSense Controller (Blue)", category:"Gaming", price:280000, desc:"Sony DualSense with haptic feedback and adaptive triggers for PS5.", img:"/web/image/product.product/1453/image_1024/Playstation%20DualSense%20Controller%20%28Blue%29", rating:4, reviews:35 },
  { id:23, name:"Xbox Series X|S Wireless Controller", category:"Gaming", price:250000, desc:"Microsoft Xbox controller with textured grip and dedicated share button.", img:"/web/image/product.product/329/image_1024/Xbox%20Series%20X%7CS%20Wireless%20Controller%20%28Carbon%20Black%29", rating:4, reviews:22 },
  { id:24, name:"PS5 Pulse 3D Wireless Headset", category:"Gaming", price:350000, desc:"PlayStation Pulse 3D headset with 3D audio for immersive gaming on PS5.", img:"/web/image/product.product/333/image_1024/Playstation%20Pulse%203D%20Wireless%20Headset", rating:4, reviews:17 },
  { id:25, name:"Razer Kraken V3 Pro Headset", category:"Gaming", price:280000, desc:"Wireless gaming headset THX Spatial Audio haptic feedback. Immersive gameplay.", grad:"linear-gradient(135deg,#0f0c29,#302b63)", emoji:"🎧", rating:4, reviews:13 },
  { id:26, name:"Sony WH-1000XM5 (Silver)", category:"Headphones & Earbuds", price:520000, desc:"Industry-leading ANC with Auto NC Optimizer. 30hr battery Hi-Res Audio.", img:"/web/image/product.product/802/image_1024/Sony%20WH1000-XM5%20%28Silver%29", rating:5, reviews:89 },
  { id:27, name:"JBL Tune 520BT Wireless (Blue)", category:"Headphones & Earbuds", price:140000, desc:"JBL Pure Bass sound Bluetooth 5.3. 40hr battery on-ear design.", img:"/web/image/product.product/1796/image_1024/JBL%20Tune%20520bt%20Wireless%20Headphones%20%28Blue%29", rating:4, reviews:44 },
  { id:28, name:"Beats Studio Pro (Black)", category:"Headphones & Earbuds", price:480000, desc:"Beats Studio Pro wireless with spatial audio ANC and 40hr battery.", img:"/web/image/product.product/1147/image_1024/Beats%20Studio%20Pro%20Wireless%20Headphones%20%28Black%29", rating:4, reviews:28 },
  { id:29, name:"Sony WF-1000XM5 Wireless Earbuds", category:"Headphones & Earbuds", price:450000, desc:"World's smallest hi-res wireless earbuds dual ANC. 8hr battery.", img:"/web/image/product.product/1162/image_1024/Sony%20WF-1000XM5", rating:5, reviews:73 },
  { id:30, name:"Anker Soundcore Space Q45 (Blue)", category:"Headphones & Earbuds", price:220000, desc:"Adaptive ANC headphones Hi-Res Audio. 50hr ultra-long battery life.", img:"/web/image/product.product/1016/image_1024/Anker%20Soundcore%20Space%20Q45%20Wireless%20ANC%20Headphones%20%28Blue%29", rating:4, reviews:31 },
  { id:31, name:"Anker Soundcore Space One (Blue)", category:"Headphones & Earbuds", price:180000, desc:"Lightweight ANC headphones 40hr battery foldable comfortable ear cups.", img:"/web/image/product.product/3787/image_1024/Anker%20Soundcore%20Space%20One%20%28Blue%29", rating:4, reviews:19 },
  { id:32, name:"Sony WH-CH720N (Silver)", category:"Headphones & Earbuds", price:230000, desc:"Lightweight wireless ANC headphones 35hr battery multipoint connection.", img:"/web/image/product.product/2558/image_1024/Sony%20WH-CH720N%20%28Silver%29", rating:4, reviews:15 },
  { id:33, name:"Beats Studio Buds+ (Transparent)", category:"Headphones & Earbuds", price:350000, desc:"True wireless earbuds ANC transparency mode 36hr battery life.", img:"/web/image/product.product/969/image_1024/Beats%20Studio%20Buds%20%2B%20Wireless%20Earbuds%20%28Transparent%29", rating:4, reviews:38 },
  { id:34, name:"Anker Soundcore R50i (Blue)", category:"Headphones & Earbuds", price:55000, desc:"Compact wireless earbuds BassUp technology IPX5 waterproof 28hr battery.", img:"/web/image/product.product/4380/image_1024/Anker%20Soundcore%20R50i%20%28Blue%29", rating:4, reviews:22 },
  { id:35, name:"Anker Q20i Wireless ANC Headphones", category:"Headphones & Earbuds", price:150000, desc:"Affordable ANC headphones Hi-Res Audio 40hr battery Pure Bass sound.", img:"/web/image/product.product/1109/image_1024/Anker%20Q20i%20Wireless%20ANC%20Headphones", rating:4, reviews:26 },
  { id:36, name:"iPhone 15 Pro Max 256GB (Black Titanium)", category:"Phones", price:5200000, desc:"Apple iPhone 15 Pro Max A17 Pro 256GB. Titanium design 48MP camera.", img:"/web/image/product.product/1205/image_1024/iPhone%2015%20Pro%20Max%20256GB%20%28Black%20Titanium%29", rating:5, reviews:95 },
  { id:37, name:"iPhone 16 Pro 256GB (Black Titanium)", category:"Phones", price:5800000, desc:"Apple iPhone 16 Pro A18 Pro 256GB. 48MP Fusion camera system.", img:"/web/image/product.product/1945/image_1024/iPhone%2016%20Pro%20256GB%20%28Black%20Titanium%29", rating:5, reviews:112 },
  { id:38, name:"iPhone 15 128GB (Blue)", category:"Phones", price:3200000, desc:"Apple iPhone 15 A16 Bionic 128GB. 48MP camera Dynamic Island.", img:"/web/image/product.product/1213/image_1024/iPhone%2015%20128GB%20%28Blue%29", rating:5, reviews:78 },
  { id:39, name:"Google Pixel 8a 128GB (Obsidian)", category:"Phones", price:1500000, desc:"Google Pixel 8a Tensor G3 128GB. 64MP camera 7 years OS updates.", img:"/web/image/product.product/1766/image_1024/Google%20Pixel%208a%20128GB%20%28Obsidian%29", rating:4, reviews:34 },
  { id:40, name:"Samsung Galaxy Z Flip 6 256GB (Blue)", category:"Phones", price:3200000, desc:"Samsung Galaxy Z Flip 6 50MP camera 256GB. Foldable IP48 rating.", img:"/web/image/product.product/2414/image_1024/Samsung%20Galaxy%20Z%20Flip%206%20256GB%20%28Blue%29", rating:4, reviews:41 },
  { id:41, name:"Samsung Galaxy Z Fold 6 256GB (Pink)", category:"Phones", price:5200000, desc:"Samsung Galaxy Z Fold 6 7.6 foldable 256GB. S Pen multitasking.", img:"/web/image/product.product/4053/image_1024/Samsung%20Galaxy%20Z%20Fold%206%20256GB%20%28Pink%29", rating:4, reviews:27 },
  { id:42, name:"Nokia 105 2022 Dual Sim (Blue)", category:"Phones", price:35000, desc:"Nokia 105 feature phone dual SIM FM radio torchlight. 3G connectivity.", img:"/web/image/product.product/628/image_1024/Nokia%20105%202022%20Dual%20Sim%20%28Blue%29", rating:3, reviews:14 },
  { id:43, name:"Nokia 5710 Xpress Audio", category:"Phones", price:120000, desc:"Nokia 5710 with built-in wireless earphones that slide out. Classic modern.", img:"/web/image/product.product/961/image_1024/Nokia%205710%20Xpress%20Audio", rating:4, reviews:9 },
  { id:44, name:"Nokia 6310 (2024)", category:"Phones", price:95000, desc:"Nokia 6310 classic USB-C charging FM radio long battery life.", img:"/web/image/product.product/1778/image_1024/Nokia%206310", rating:3, reviews:7 },
  { id:45, name:"Nokia 3210 (Plastic Black)", category:"Phones", price:85000, desc:"Nokia 3210 2024 reissue. 2.4 display MP3 player Bluetooth.", img:"/web/image/product.product/1939/image_1024/Nokia%203210%20%28Plastic%20black%29", rating:4, reviews:11 },
  { id:46, name:"Canon EOS R50 Mirrorless Camera", category:"Photography", price:2800000, desc:"Canon EOS R50 24.2MP APS-C 4K video. Lightweight mirrorless creator camera.", grad:"linear-gradient(135deg,#2d2d2d,#555)", emoji:"📷", rating:5, reviews:23 },
  { id:47, name:"DJI Osmo Pocket 3", category:"Photography", price:1100000, desc:"Handheld 4K gimbal camera 1-inch CMOS. 2-inch rotatable touchscreen.", grad:"linear-gradient(135deg,#1a1a2e,#0f3460)", emoji:"🎥", rating:5, reviews:37 },
  { id:48, name:"GoPro Hero 12 Black", category:"Photography", price:950000, desc:"Action camera 5.3K video HyperSmooth 6.0 stabilization waterproof 33ft.", grad:"linear-gradient(135deg,#0f0f0f,#333)", emoji:"🏄", rating:4, reviews:29 },
  { id:49, name:"Professional Tripod 72-inch", category:"Photography", price:85000, desc:"Lightweight aluminum tripod 360 ball head quick release phone mount.", grad:"linear-gradient(135deg,#636e72,#2d3436)", emoji:"📐", rating:4, reviews:16 },
  { id:50, name:"LED Ring Light 12-inch", category:"Photography", price:65000, desc:"12-inch LED ring light with tripod phone holder. 3 color modes 10 brightness.", grad:"linear-gradient(135deg,#ffeaa7,#fdcb6e)", emoji:"💡", rating:4, reviews:22 },
  { id:51, name:"JBL Flip 7 Portable Speaker", category:"Speakers", price:320000, desc:"JBL Flip 7 Original Pro Sound IP67 waterproof 14hr battery party boost.", grad:"linear-gradient(135deg,#e74c3c,#c0392b)", emoji:"🔊", rating:5, reviews:54 },
  { id:52, name:"Sony SRS-XB100 Portable Speaker", category:"Speakers", price:95000, desc:"Compact speaker clear sound bass boost IP67 waterproof 16hr battery.", grad:"linear-gradient(135deg,#2c3e50,#3498db)", emoji:"🔊", rating:4, reviews:31 },
  { id:53, name:"Marshall Emberton III", category:"Speakers", price:380000, desc:"Iconic Marshall design True Stereophonic sound IP67 30hr playtime.", grad:"linear-gradient(135deg,#1a1a1a,#333)", emoji:"🔊", rating:5, reviews:42 },
  { id:54, name:"Ultimate Ears Boom 4", category:"Speakers", price:350000, desc:"360 immersive sound deep bass IP68 waterproof 20hr battery drop-proof.", grad:"linear-gradient(135deg,#6c5ce7,#a29bfe)", emoji:"🔊", rating:4, reviews:28 },
  { id:55, name:"Anker Soundcore Motion 300", category:"Speakers", price:180000, desc:"Portable speaker 30W stereo deep bass 13hr battery IPX7.", grad:"linear-gradient(135deg,#0f3460,#1a5276)", emoji:"🔊", rating:4, reviews:19 },
  { id:56, name:"Anker PowerCore 20000mAh", category:"Power Banks", price:85000, desc:"20000mAh power bank 30W PD fast charging. Dual USB-C and USB-A.", grad:"linear-gradient(135deg,#1a1a2e,#16213e)", emoji:"🔋", rating:4, reviews:37 },
  { id:57, name:"Baseus 30000mAh Power Bank", category:"Power Banks", price:110000, desc:"30000mAh high-capacity 65W PD dual USB-C digital display.", grad:"linear-gradient(135deg,#2d3436,#636e72)", emoji:"🔋", rating:4, reviews:18 },
  { id:58, name:"Samsung Wireless Battery Pack 10K", category:"Power Banks", price:95000, desc:"10000mAh wireless charging power bank 25W fast charging dual charge.", grad:"linear-gradient(135deg,#142850,#27496d)", emoji:"🔋", rating:3, reviews:9 },
  { id:59, name:"TP-Link WiFi Smart Plug", category:"Smart Home", price:35000, desc:"Mini WiFi smart plug voice control Alexa Google. Energy monitoring.", grad:"linear-gradient(135deg,#1b1464,#c31432)", emoji:"🔌", rating:4, reviews:25 },
  { id:60, name:"WiFi RGB Smart Bulb", category:"Smart Home", price:25000, desc:"16 million color WiFi smart bulb Alexa Google Home. 9W 800 lumens.", grad:"linear-gradient(135deg,#6c5ce7,#fd79a8)", emoji:"💡", rating:4, reviews:33 },
  { id:61, name:"Echo Dot 5th Gen (Alexa)", category:"Smart Home", price:180000, desc:"Amazon Echo Dot 5th Gen improved audio Alexa voice control LED display.", grad:"linear-gradient(135deg,#0f3460,#533483)", emoji:"🔊", rating:4, reviews:61 },
  { id:62, name:"Google Nest Mini (2nd Gen)", category:"Smart Home", price:150000, desc:"Smart speaker Google Assistant compact wall-mountable.", grad:"linear-gradient(135deg,#4285f4,#34a853)", emoji:"🔊", rating:4, reviews:27 },
  { id:63, name:"1080p WiFi Security Camera", category:"Smart Home", price:150000, desc:"Indoor/outdoor WiFi camera 1080p night vision motion detection 2-way audio.", grad:"linear-gradient(135deg,#1a1a2e,#2d2d44)", emoji:"📹", rating:4, reviews:16 },
  { id:64, name:"Amazon Fire HD 10 Kids Pro (Blue)", category:"Kids", price:450000, desc:"Kid-proof tablet 10.1 FHD parental controls 2-year worry-free guarantee.", img:"/web/image/product.product/136/image_1024/Amazon%20Fire%20HD%2010%20Kids%20Pro%2013th%20Gen%20%20%28Blue%29", rating:5, reviews:44 },
  { id:65, name:"Kids Smartwatch K5 Pro", category:"Kids", price:95000, desc:"Kids smartwatch GPS tracker SOS call 1.3MP camera games parental control.", grad:"linear-gradient(135deg,#00b894,#00cec9)", emoji:"⌚", rating:3, reviews:8 },
  { id:66, name:"Apple Watch Series 10 46mm", category:"Wearables & Tags", price:1200000, desc:"Latest Apple Watch LTPO OLED health sensors GPS always-on display.", grad:"linear-gradient(135deg,#1a1a2e,#434343)", emoji:"⌚", rating:5, reviews:76 },
  { id:67, name:"Samsung Galaxy Watch7 44mm", category:"Wearables & Tags", price:850000, desc:"Samsung Watch7 BioActive sensor Wear OS sleep tracking ECG.", grad:"linear-gradient(135deg,#1c1f2b,#3b3f5c)", emoji:"⌚", rating:4, reviews:33 },
  { id:68, name:"Fitbit Charge 6 Tracker", category:"Wearables & Tags", price:320000, desc:"Advanced fitness tracker built-in GPS heart rate sleep ECG app.", grad:"linear-gradient(135deg,#2c3e50,#3498db)", emoji:"⌚", rating:4, reviews:29 },
  { id:69, name:"Apple AirTag 4-Pack", category:"Wearables & Tags", price:220000, desc:"Apple AirTag 4-pack for keys bags more. Precision Finding U1 chip.", grad:"linear-gradient(135deg,#e0e0e0,#fff)", emoji:"🏷️", rating:4, reviews:51 },
  { id:70, name:"Popl Instant Social Sharing Tag", category:"Wearables & Tags", price:65000, desc:"Popl tag 1-tap social sharing NFC QR code works without battery.", img:"/web/image/product.product/214/image_1024/Popl%20Instant%20Social%20Sharing%20Tag", rating:4, reviews:13 },
  { id:71, name:"Samsung Galaxy Tab S10+ 256GB", category:"Tablets", price:2200000, desc:"Tab S10+ 12.4 Dynamic AMOLED 2X S Pen included 256GB storage.", grad:"linear-gradient(135deg,#1c1f2b,#3b3f5c)", emoji:"📱", rating:5, reviews:38 },
  { id:72, name:"iPad Air M2 11-inch 128GB", category:"Tablets", price:2600000, desc:"Apple iPad Air 11 M2 chip 128GB Liquid Retina display.", grad:"linear-gradient(135deg,#2d3436,#b2bec3)", emoji:"📱", rating:5, reviews:55 },
  { id:73, name:"Lenovo Tab M11 128GB", category:"Tablets", price:550000, desc:"Lenovo Tab M11 11 display 128GB quad speakers 8MP camera.", grad:"linear-gradient(135deg,#0f3460,#1a5276)", emoji:"📱", rating:4, reviews:12 },
  { id:74, name:"Xiaomi Pad 6 256GB", category:"Tablets", price:750000, desc:"Xiaomi Pad 6 11 144Hz display Snapdragon 870 8GB RAM 256GB.", grad:"linear-gradient(135deg,#ff6b35,#f7931e)", emoji:"📱", rating:4, reviews:21 },
  { id:75, name:"Samsung 43 Crystal UHD 4K TV", category:"Home Cinema", price:1800000, desc:"43 Crystal UHD 4K Smart TV HDR PurColor built-in streaming apps.", grad:"linear-gradient(135deg,#0f0c29,#302b63)", emoji:"📺", rating:4, reviews:17 },
  { id:76, name:"LG 55 OLED C4 4K TV", category:"Home Cinema", price:4800000, desc:"55 OLED evo C4 4K Smart TV Dolby Vision Atmos a9 AI processor.", grad:"linear-gradient(135deg,#1a1a2e,#0f3460)", emoji:"📺", rating:5, reviews:29 },
  { id:77, name:"Amazon Fire TV Stick 4K", category:"Home Cinema", price:120000, desc:"Streaming stick 4K Ultra HD HDR Dolby Atmos Alexa voice remote.", grad:"linear-gradient(135deg,#232f3e,#ff9900)", emoji:"📺", rating:4, reviews:63 },
  { id:78, name:"2.1 Soundbar with Subwoofer", category:"Home Cinema", price:450000, desc:"2.1 channel soundbar wireless subwoofer 300W Bluetooth 5.3 HDMI ARC.", grad:"linear-gradient(135deg,#1a1a2e,#2d2d44)", emoji:"🔊", rating:4, reviews:14 },
  { id:79, name:"Rode NT-USB Mini Condenser Mic", category:"Microphones", price:220000, desc:"Professional USB condenser mic studio-quality streaming podcasting.", grad:"linear-gradient(135deg,#1a1a1a,#333)", emoji:"🎤", rating:5, reviews:32 },
  { id:80, name:"Shure MV7 Podcast Microphone", category:"Microphones", price:650000, desc:"Premium dynamic mic USB-C XLR touch interface app control.", grad:"linear-gradient(135deg,#0f0f0f,#555)", emoji:"🎤", rating:5, reviews:24 },
  { id:81, name:"Wireless Lavalier Microphone", category:"Microphones", price:120000, desc:"Clip-on wireless lavalier mic noise cancellation 50m range 6hr battery.", grad:"linear-gradient(135deg,#2c3e50,#3498db)", emoji:"🎙️", rating:4, reviews:18 },
  { id:82, name:"Elgato Stream Deck MK.2", category:"Streaming", price:280000, desc:"15 customizable LCD keys for instant scene media action switching.", grad:"linear-gradient(135deg,#1a1a2e,#16213e)", emoji:"🎮", rating:5, reviews:37 },
  { id:83, name:"Logitech C920 Pro HD Webcam", category:"Streaming", price:180000, desc:"1080p Pro HD webcam autofocus dual microphones Carl Zeiss optics.", grad:"linear-gradient(135deg,#2d3436,#636e72)", emoji:"📹", rating:4, reviews:45 },
  { id:84, name:"Collapsible Green Screen 5x6.5ft", category:"Streaming", price:85000, desc:"Portable chroma key green screen with stand. Collapsible design.", grad:"linear-gradient(135deg,#00b894,#00cec9)", emoji:"🟢", rating:4, reviews:11 },
  { id:85, name:"4K Dash Cam with GPS", category:"Car Tech", price:220000, desc:"4K dash camera night vision GPS tracking parking monitor wide-angle.", grad:"linear-gradient(135deg,#1a1a2e,#16213e)", emoji:"🚗", rating:4, reviews:16 },
  { id:86, name:"Bluetooth FM Car Adapter", category:"Car Tech", price:35000, desc:"Bluetooth 5.3 FM transmitter USB-C fast charging hands-free calling.", grad:"linear-gradient(135deg,#2c3e50,#3498db)", emoji:"📻", rating:3, reviews:22 },
  { id:87, name:"Magnetic Car Phone Mount", category:"Car Tech", price:45000, desc:"360 magnetic car phone mount strong grip universal for all smartphones.", grad:"linear-gradient(135deg,#636e72,#2d3436)", emoji:"📱", rating:4, reviews:31 },
  { id:88, name:"Waterproof Laptop Backpack 40L", category:"Tech Bags", price:120000, desc:"40L water-resistant backpack USB charging anti-theft pocket padded straps.", grad:"linear-gradient(135deg,#1a1a2e,#2d2d44)", emoji:"🎒", rating:4, reviews:25 },
  { id:89, name:"Padded Laptop Sleeve 15.6", category:"Tech Bags", price:55000, desc:"Shockproof neoprene laptop sleeve with handle. Fits 15.6-inch laptops.", grad:"linear-gradient(135deg,#2d3436,#636e72)", emoji:"💼", rating:4, reviews:14 },
  { id:90, name:"Travel Cable Organizer Pouch", category:"Tech Bags", price:35000, desc:"Compact waterproof travel pouch cables adapters power banks compartments.", grad:"linear-gradient(135deg,#0f3460,#1a5276)", emoji:"👝", rating:3, reviews:8 },
  { id:91, name:"Samsung T7 Portable 1TB SSD", category:"Storage", price:320000, desc:"1TB portable SSD 1050MB/s read USB 3.2 Gen 2 AES 256-bit encryption.", grad:"linear-gradient(135deg,#0f3460,#533483)", emoji:"💾", rating:5, reviews:43 },
  { id:92, name:"SanDisk 128GB USB 3.2 Drive", category:"Storage", price:45000, desc:"128GB USB 3.2 flash drive 400MB/s read compact retractable design.", grad:"linear-gradient(135deg,#e74c3c,#c0392b)", emoji:"💿", rating:4, reviews:28 },
  { id:93, name:"MicroSD 256GB U3 Memory Card", category:"Storage", price:75000, desc:"256GB UHS-I U3 microSD A2 speed 160MB/s read for 4K video.", grad:"linear-gradient(135deg,#2c3e50,#f1c40f)", emoji:"💾", rating:4, reviews:36 },
  { id:94, name:"Robot Vacuum Cleaner LiDAR", category:"Home Care", price:550000, desc:"Smart robot vacuum LiDAR navigation 2500Pa suction app control self-charging.", grad:"linear-gradient(135deg,#1a1a2e,#16213e)", emoji:"🤖", rating:4, reviews:19 },
  { id:95, name:"Cordless Handheld Vacuum", category:"Home Care", price:150000, desc:"Cordless handheld vacuum HEPA filter 8000Pa suction USB-C charging.", grad:"linear-gradient(135deg,#0f3460,#1a5276)", emoji:"🧹", rating:4, reviews:12 },
  { id:96, name:"HEPA Air Purifier Large Room", category:"Home Care", price:450000, desc:"HEPA purifier for 500 sq ft True HEPA filter quiet sleep mode.", grad:"linear-gradient(135deg,#00b894,#00cec9)", emoji:"💨", rating:5, reviews:27 },
  { id:97, name:"Electric Kettle 1.7L", category:"Kitchen", price:55000, desc:"1.7L stainless steel kettle auto shut-off boil-dry protection 1500W.", grad:"linear-gradient(135deg,#2d3436,#b2bec3)", emoji:"🫖", rating:4, reviews:33 },
  { id:98, name:"Digital Air Fryer 5.5L", category:"Kitchen", price:280000, desc:"5.5L digital air fryer 8 presets touch screen shake reminder 200C.", grad:"linear-gradient(135deg,#e74c3c,#c0392b)", emoji:"🍟", rating:4, reviews:41 },
  { id:99, name:"Powerful Blender 1500W", category:"Kitchen", price:120000, desc:"1500W blender 6 stainless steel blades 1.8L pitcher variable speed.", grad:"linear-gradient(135deg,#3498db,#2980b9)", emoji:"🥤", rating:4, reviews:23 },
  { id:100, name:"Digital Blood Pressure Monitor", category:"Health", price:85000, desc:"Clinical-grade upper arm monitor irregular heartbeat detection.", grad:"linear-gradient(135deg,#e74c3c,#c0392b)", emoji:"❤️", rating:4, reviews:17 },
  { id:101, name:"Bluetooth Smart Scale", category:"Health", price:75000, desc:"Smart body composition scale Bluetooth 16 measurements app sync.", grad:"linear-gradient(135deg,#00b894,#00cec9)", emoji:"⚖️", rating:4, reviews:14 },
  { id:102, name:"Deep Tissue Massage Gun", category:"Health", price:220000, desc:"Massage gun 6 head attachments 30 speed levels 2800mAh battery.", grad:"linear-gradient(135deg,#1a1a2e,#16213e)", emoji:"💪", rating:4, reviews:21 },
  { id:103, name:"Portable Power Station 300W", category:"Travel & Outdoor", price:950000, desc:"300W power station 280Wh capacity AC outlet USB-C PD solar input.", grad:"linear-gradient(135deg,#0f3460,#533483)", emoji:"🔋", rating:5, reviews:16 },
  { id:104, name:"Foldable Solar Panel 100W", category:"Travel & Outdoor", price:650000, desc:"100W portable solar panel kickstand USB DC outputs. Perfect for camping.", grad:"linear-gradient(135deg,#f39c12,#e67e22)", emoji:"☀️", rating:4, reviews:11 },
  { id:105, name:"Waterproof BT Speaker IPX7", category:"Travel & Outdoor", price:85000, desc:"Floating waterproof speaker carabiner clip 15hr battery 360 sound.", grad:"linear-gradient(135deg,#1a5276,#2e86c1)", emoji:"🔊", rating:4, reviews:18 },
  { id:106, name:"LED Camping Lantern", category:"Travel & Outdoor", price:45000, desc:"LED camping lantern 3 brightness modes 2000mAh battery USB-C charging.", grad:"linear-gradient(135deg,#ffeaa7,#fdcb6e)", emoji:"🏮", rating:3, reviews:9 },
];

const deliveryFees = { Kampala:5000, Nansana:8000, Mukono:10000, Wakiso:7000, Gayaza:8000, Entebbe:12000, Jinja:15000 };

let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let sortBy = 'default';

// Cart persistence
function saveCart() { localStorage.setItem('nexdo_cart', JSON.stringify(cart)); }
function loadCart() {
  try {
    const d = localStorage.getItem('nexdo_cart');
    if (d) cart = JSON.parse(d);
  } catch(e) {}
}

function getImg(p) { return p.img ? `${BASE}${p.img}?unique=1` : null; }
function imgStyle(p) {
  const url = getImg(p);
  return url ? `background-image:url('${url}');background-size:cover;background-position:center` : `background:${p.grad}`;
}
function imgContent(p) { return p.img ? '' : (p.emoji || ''); }

function starsHtml(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5;
  return '<span class="stars">' + '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half?1:0)) + '</span>';
}

function productCardHtml(p, idx) {
  const url = getImg(p);
  const hasImg = !!url;
  return `
  <div class="product-card" style="animation-delay:${(idx||0)*0.05}s">
    <div class="product-img${hasImg ? ' has-img' : ''}" style="${imgStyle(p)}" ${hasImg ? `onclick="openLightbox('${url}')"` : ''}>${imgContent(p)}</div>
    ${p.rating ? `<div class="product-rating">${starsHtml(p.rating)} <span>(${p.reviews})</span></div>` : ''}
    <div class="product-body">
      <div class="product-category">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-footer">
        <div class="product-price">${formatPrice(p.price)}</div>
        <button class="add-btn" onclick="addToCart(${p.id})"><i class="fas fa-plus"></i><span>Add</span></button>
      </div>
    </div>
  </div>`;
}

function skeletonHtml(count) {
  return Array(count).fill(0).map(() => `
    <div class="skeleton">
      <div class="skeleton-img"></div>
      <div class="skeleton-line shorter"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line short"></div>
    </div>`).join('');
}

function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  const featured = [...products].sort((a,b) => (b.reviews||0) - (a.reviews||0)).slice(0, 8);
  grid.innerHTML = featured.map((p, i) => productCardHtml(p, i)).join('');
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  let filtered = [...products];
  if (currentCategory !== 'all') filtered = filtered.filter(p => p.category === currentCategory);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  if (sortBy === 'low') filtered.sort((a,b) => a.price - b.price);
  else if (sortBy === 'high') filtered.sort((a,b) => b.price - a.price);
  document.getElementById('productCount').textContent = `(${filtered.length} products)`;
  grid.innerHTML = filtered.map((p, i) => productCardHtml(p, i)).join('');
}

function formatPrice(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' UGX';
}

function addToCart(id, qty = 1) {
  const prod = products.find(p => p.id === id);
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty += qty; } else { cart.push({ ...prod, qty }); }
  updateCart();
  saveCart();
  showToast(`Added ${prod.name} to cart`);
  // Animate badge
  const badge = document.getElementById('cartBadge');
  badge.classList.remove('bounce');
  void badge.offsetWidth;
  badge.classList.add('bounce');
}

function removeFromCart(id) { cart = cart.filter(c => c.id !== id); updateCart(); saveCart(); }
function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  updateCart();
  saveCart();
}

function updateCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.qty * i.price, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.classList.toggle('hide', count === 0);
  document.getElementById('cartTotalHeader').textContent = count ? formatPrice(total) : '0 UGX';
  document.getElementById('cartItemCount').textContent = `(${count})`;
  document.getElementById('cartTotal').textContent = formatPrice(total);
  document.getElementById('checkoutBtn').disabled = count === 0;
  // Mobile badge
  const mb = document.getElementById('mnavBadge');
  if (mb) { mb.textContent = count; mb.classList.toggle('hide', count === 0); }

  const container = document.getElementById('cartItems');
  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p></div>`;
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img" style="${imgStyle(item)}">${imgContent(item)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-cat">${item.category}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)"><i class="fas fa-minus"></i></button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)"><i class="fas fa-plus"></i></button>
          <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    </div>
  `).join('');
}

function showToast(msg) {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<i class="fas fa-check-circle"></i> ${msg} <button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>`;
  c.appendChild(t);
  setTimeout(() => { if (t.parentElement) t.remove(); }, 3500);
}

function openCheckout() {
  if (!cart.length) return;
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderOrderSummary();
}
function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

function renderOrderSummary() {
  document.getElementById('orderItemsList').innerHTML = cart.map(item =>
    `<li><span>${item.emoji || '📦'} ${item.name} x${item.qty}</span><span>${formatPrice(item.price * item.qty)}</span></li>`
  ).join('');
  updateModalTotals();
}

function updateModalTotals() {
  const subtotal = cart.reduce((s, i) => s + i.qty * i.price, 0);
  const method = document.querySelector('input[name="delivery"]:checked').value;
  const loc = document.getElementById('locationSelect').value;
  let delFee = 0;
  if (method === 'delivery' && loc && deliveryFees[loc]) delFee = deliveryFees[loc];
  document.getElementById('modalSubtotal').textContent = formatPrice(subtotal);
  document.getElementById('deliveryFeeRow').style.display = (method === 'delivery' && loc && loc !== 'other') ? 'flex' : 'none';
  if (method === 'delivery' && loc && loc !== 'other') document.getElementById('modalDeliveryFee').textContent = formatPrice(delFee);
  document.getElementById('modalTotal').textContent = formatPrice(subtotal + delFee);
}

function orderWhatsApp() {
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const method = document.querySelector('input[name="delivery"]:checked').value;
  const loc = document.getElementById('locationSelect').value;
  const subtotal = cart.reduce((s, i) => s + i.qty * i.price, 0);
  let delFee = 0, delStr = '';
  if (method === 'delivery') {
    if (loc && deliveryFees[loc]) delFee = deliveryFees[loc];
    delStr = loc || 'To be confirmed';
  }
  let msg = '🛍️ *Nexdo Shoppers - New Order*\n';
  if (name) msg += `👤 *Name:* ${name}\n`;
  if (phone) msg += `📞 *Phone:* ${phone}\n`;
  msg += '📋 *Items:*\n';
  cart.forEach(item => { msg += `- ${item.emoji || '📦'} ${item.name} x${item.qty} = ${formatPrice(item.price * item.qty)}\n`; });
  msg += `💰 *Subtotal:* ${formatPrice(subtotal)}\n`;
  if (method === 'delivery' && loc && deliveryFees[loc]) msg += `🚚 *Delivery:* ${formatPrice(delFee)} (${delStr})\n`;
  else if (method === 'delivery') msg += `🚚 *Delivery:* Contact us for fee (${delStr})\n`;
  msg += `*Method:* ${method === 'pickup' ? 'Shop In (Pickup)' : 'Delivery'}\n`;
  msg += `💵 *Total:* ${formatPrice(subtotal + delFee)}\n`;
  if (method === 'delivery') msg += `📍 *Location:* ${delStr}\n`;
  else msg += `📍 *Pickup:* Nexdo Shoppers, Kampala\n`;
  window.open(`https://wa.me/256782725895?text=${encodeURIComponent(msg)}`, '_blank');
}

function openLightbox(url) {
  document.getElementById('lightboxImg').src = url;
  document.getElementById('lightboxOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightboxOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
function closeMobileNav() { document.querySelectorAll('.mnav-item').forEach(i => i.classList.remove('active')); }

// Init
loadCart();

// Skeleton then render
['productsGrid', 'featuredGrid'].forEach(id => {
  document.getElementById(id).innerHTML = skeletonHtml(id === 'featuredGrid' ? 4 : 8);
});
setTimeout(() => {
  renderFeatured();
  renderProducts();
  updateCart();
}, 400);

// Events
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeLightbox(); closeCheckout(); }
});

document.getElementById('cartToggle').addEventListener('click', () => {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
});
document.getElementById('cartClose').addEventListener('click', () => {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
});
document.getElementById('cartOverlay').addEventListener('click', () => {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
});
document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
document.getElementById('checkoutModal').addEventListener('click', function(e) { if (e.target === this) closeCheckout(); });

document.querySelectorAll('input[name="delivery"]').forEach(r => {
  r.addEventListener('change', function() {
    document.querySelectorAll('.delivery-method label').forEach(l => l.classList.remove('selected'));
    this.closest('label').classList.add('selected');
    document.getElementById('locationWrap').style.display = this.value === 'delivery' ? 'block' : 'none';
    updateModalTotals();
  });
});
document.getElementById('locationSelect').addEventListener('change', function() {
  document.getElementById('otherLocationNote').style.display = this.value === 'other' ? 'flex' : 'none';
  updateModalTotals();
});
document.getElementById('whatsappOrder').addEventListener('click', orderWhatsApp);

document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    currentCategory = this.dataset.cat;
    renderProducts();
    document.getElementById('sortSelect').value = 'default';
    sortBy = 'default';
  });
});

document.getElementById('sortSelect').addEventListener('change', function() {
  sortBy = this.value;
  renderProducts();
});

// Debounced search
let searchTimer;
document.getElementById('searchInput').addEventListener('input', function() {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    searchQuery = this.value;
    renderProducts();
  }, 300);
});

// Scroll to top
window.addEventListener('scroll', () => {
  document.getElementById('scrollTopBtn').classList.toggle('show', window.scrollY > 400);
});
document.getElementById('scrollTopBtn').addEventListener('click', scrollToTop);

// Hero slideshow
(function() {
  const slides = document.querySelectorAll('#heroBg .slide');
  if (slides.length < 2) return;
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 5000);
})();
