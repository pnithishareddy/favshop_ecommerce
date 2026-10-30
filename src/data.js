// const P = (id, name, category, price, rating, reviews, emoji, c1, c2, featured, stock, desc) =>
//   ({ id, name, category, price, rating, reviews, emoji, c1, c2, featured, stock, desc })

// export const CATEGORIES = ['Electronics', 'Fashion', 'Home', 'Sports']
// export const CAT_COLORS = { Electronics: ['#111827', '#6b7280'], Fashion: ['#ea580c', '#fdba74'], Home: ['#44403c', '#a8a29e'], Sports: ['#c2410c', '#fbbf24'] }
// export const payLabel = (p) => (p.type === 'card' ? `${p.brand} •••• ${p.last4}` : `UPI: ${p.upi}`)
// export const money = (n) => '₹' + Math.round(Number(n)).toLocaleString('en-IN')
// export const mrp = (p) => Math.round((p.price * 1.25) / 10) * 10

// export const SEED = [
//   P(1, 'Wireless Headphones', 'Electronics', 2499, 4.6, 214, '🎧', '#ea580c', '#8da2ff', true, 25, 'Over-ear Bluetooth headphones with active noise cancelling and a 30-hour battery.'),
//   P(2, 'Smart Watch Series 5', 'Electronics', 3999, 4.4, 168, '⌚', '#0f172a', '#64748b', true, 12, 'Track heart rate, sleep and workouts. Water resistant with a bright always-on display.'),
//   P(3, 'Portable Speaker', 'Electronics', 1799, 4.3, 97, '🔊', '#7c3aed', '#c4b5fd', false, 40, 'Pocket-sized speaker with deep bass and 12 hours of playtime.'),
//   P(4, 'Mechanical Keyboard', 'Electronics', 2999, 4.7, 302, '⌨️', '#334155', '#94a3b8', true, 18, 'Hot-swappable tactile switches, per-key backlight and a sturdy aluminium frame.'),
//   P(5, 'Denim Jacket', 'Fashion', 1999, 4.2, 81, '🧥', '#1d4ed8', '#93c5fd', false, 30, 'Classic mid-wash denim jacket with a relaxed fit and brass buttons.'),
//   P(6, 'Canvas Sneakers', 'Fashion', 1299, 4.5, 190, '👟', '#be185d', '#f9a8d4', true, 50, 'Lightweight everyday sneakers with a cushioned insole and durable rubber sole.'),
//   P(7, 'Leather Backpack', 'Fashion', 3499, 4.8, 143, '🎒', '#78350f', '#fcd34d', false, 15, 'Full-grain leather backpack with a padded 15-inch laptop sleeve.'),
//   P(8, 'Ceramic Table Lamp', 'Home', 1199, 4.1, 64, '💡', '#0f766e', '#99f6e4', false, 22, 'Hand-glazed ceramic base with a warm linen shade. Bulb included.'),
//   P(9, 'Aroma Diffuser', 'Home', 899, 4.4, 120, '🪴', '#15803d', '#bbf7d0', true, 35, 'Ultrasonic diffuser with seven ambient light modes and auto shut-off.'),
//   P(10, 'Cotton Bedding Set', 'Home', 2499, 4.6, 76, '🛏️', '#475569', '#cbd5e1', false, 10, 'Soft 300-thread-count cotton: duvet cover and two pillowcases.'),
//   P(11, 'Yoga Mat Pro', 'Sports', 799, 4.5, 211, '🧘', '#c2410c', '#fdba74', true, 60, 'Non-slip 6 mm mat with alignment lines and a carry strap.'),
//   P(12, 'Insulated Water Bottle', 'Sports', 699, 4.7, 340, '🥤', '#0369a1', '#7dd3fc', false, 80, 'Keeps drinks cold for 24 hours or hot for 12. Leak-proof lid.'),
//   P(13, 'Power Bank 20000 mAh', 'Electronics', 1499, 4.5, 412, '🔋', '#0f766e', '#5eead4', false, 45, 'Fast-charging power bank with dual USB ports and a USB-C input. Charges a phone about four times.'),
//   P(14, 'Wireless Mouse', 'Electronics', 799, 4.3, 256, '🖱️', '#475569', '#a5b4fc', false, 70, 'Quiet-click ergonomic mouse with adjustable DPI and a year of battery life.'),
//   P(15, 'Bluetooth Earbuds', 'Electronics', 1999, 4.4, 530, '🎶', '#7c3aed', '#f0abfc', true, 9, 'True wireless earbuds with a charging case, touch controls and 24 hours of total playtime.'),
//   P(16, '4K Action Camera', 'Electronics', 5499, 4.6, 88, '📷', '#1e293b', '#38bdf8', false, 14, 'Waterproof 4K camera with image stabilisation, Wi-Fi and a mounting kit.'),
//   P(17, 'Cotton Kurta', 'Fashion', 1299, 4.4, 175, '👘', '#b45309', '#fde68a', true, 40, 'Breathable pure-cotton kurta with a straight cut. Easy for daily wear and festive days alike.'),
//   P(18, 'Aviator Sunglasses', 'Fashion', 899, 4.2, 132, '🕶️', '#334155', '#fcd34d', false, 55, 'UV400 polarised lenses in a lightweight metal frame.'),
//   P(19, 'Analog Wrist Watch', 'Fashion', 2199, 4.5, 99, '🕰️', '#854d0e', '#fde047', false, 20, 'Stainless steel case, leather strap and a scratch-resistant glass dial.'),
//   P(20, 'Printed Silk Scarf', 'Fashion', 699, 4.1, 58, '🧣', '#be185d', '#fda4af', false, 33, 'Soft printed scarf that works as a stole, headwrap or bag accent.'),
//   P(21, 'Non-stick Cookware Set', 'Home', 2999, 4.5, 207, '🍳', '#b91c1c', '#fca5a5', true, 16, 'Five-piece induction-friendly set with a kadai, tawa and frying pan.'),
//   P(22, 'Scented Candle Trio', 'Home', 599, 4.6, 144, '🕯️', '#9333ea', '#e9d5ff', false, 48, 'Three soy-wax candles in lavender, jasmine and sandalwood. About 25 hours each.'),
//   P(23, 'Framed Wall Art', 'Home', 1499, 4.3, 71, '🖼️', '#0e7490', '#a5f3fc', false, 12, 'Abstract canvas print in a solid wood frame, ready to hang.'),
//   P(24, 'Smart LED Bulb Pack', 'Home', 799, 4.4, 318, '🔆', '#ca8a04', '#fef08a', false, 90, 'Pack of two Wi-Fi bulbs with 16 million colours. Works with voice assistants.'),
//   P(25, 'Adjustable Dumbbell Set', 'Sports', 2499, 4.6, 164, '🏋️', '#1f2937', '#f97316', true, 11, 'Pair of dumbbells adjustable from 2 to 12 kg each with a secure locking collar.'),
//   P(26, 'Match Football', 'Sports', 899, 4.4, 233, '⚽', '#15803d', '#86efac', false, 38, 'Size 5 machine-stitched football with a durable rubber bladder.'),
//   P(27, 'Badminton Racket Set', 'Sports', 1299, 4.5, 187, '🏸', '#0369a1', '#bae6fd', true, 27, 'Two lightweight aluminium rackets, three shuttlecocks and a carry bag.'),
//   P(28, 'Resistance Bands Kit', 'Sports', 499, 4.5, 301, '🤸', '#c2410c', '#fdba74', false, 65, 'Set of five latex bands in different strengths with a door anchor and pouch.'),
//   P(29, 'Aluminium Laptop Stand', 'Electronics', 1299, 4.5, 190, '💻', '#334155', '#cbd5e1', false, 42, 'Foldable stand with six height settings and vented design that keeps your laptop cool.'),
//   P(30, 'Full HD Webcam', 'Electronics', 1799, 4.2, 121, '🎥', '#0f172a', '#7dd3fc', false, 26, '1080p webcam with a built-in noise-cancelling mic and auto light correction.'),
//   P(31, 'Streaming Media Stick', 'Electronics', 2499, 4.6, 276, '📺', '#7c3aed', '#c4b5fd', true, 19, 'Turn any TV into a smart TV with 4K streaming and a voice remote.'),
//   P(32, 'Women’s Tote Handbag', 'Fashion', 1899, 4.4, 102, '👜', '#9d174d', '#fbcfe8', true, 17, 'Roomy vegan-leather tote with an inner zip pocket and a detachable strap.'),
//   P(33, 'Baseball Cap', 'Fashion', 499, 4.1, 150, '🧢', '#1d4ed8', '#bfdbfe', false, 75, 'Adjustable cotton cap with a curved brim and breathable eyelets.'),
//   P(34, 'Slim Fit Formal Shirt', 'Fashion', 999, 4.3, 164, '👔', '#475569', '#e2e8f0', false, 36, 'Wrinkle-resistant cotton blend shirt, ideal for the office or an evening out.'),
//   P(35, 'Memory Foam Pillow', 'Home', 999, 4.5, 288, '😴', '#4338ca', '#c7d2fe', false, 31, 'Contoured orthopaedic pillow with a cooling gel layer and a washable cover.'),
//   P(36, 'Ceramic Dinner Set', 'Home', 2299, 4.6, 94, '🍽️', '#0f766e', '#ccfbf1', true, 8, 'Eighteen-piece microwave-safe dinner set that serves six.'),
//   P(37, 'Indoor Plant Pot Set', 'Home', 699, 4.4, 133, '🌿', '#15803d', '#d9f99d', false, 52, 'Set of three matte ceramic planters with bamboo trays and drainage holes.'),
//   P(38, 'Kashmir Willow Cricket Bat', 'Sports', 1999, 4.5, 117, '🏏', '#a16207', '#fde68a', false, 13, 'Full-size bat with a thick edge profile and a comfortable rubber grip.'),
//   P(39, 'Cycling Helmet', 'Sports', 1599, 4.6, 140, '🚴', '#0369a1', '#7dd3fc', true, 21, 'Lightweight ventilated helmet with an adjustable fit dial and a removable visor.'),
//   P(40, 'Swimming Goggles', 'Sports', 599, 4.3, 205, '🏊', '#0e7490', '#67e8f9', false, 60, 'Anti-fog, UV-protected goggles with a soft silicone seal.'),
// ]
















const P = (id, name, category, price, rating, reviews, emoji, c1, c2, featured, stock, desc) =>
  ({ id, name, category, price, rating, reviews, emoji, c1, c2, featured, stock, desc })

export const CATEGORIES = ['Electronics', 'Fashion', 'Home', 'Sports']
export const CAT_COLORS = { Electronics: ['#111827', '#6b7280'], Fashion: ['#ea580c', '#fdba74'], Home: ['#44403c', '#a8a29e'], Sports: ['#c2410c', '#fbbf24'] }
export const payLabel = (p) => (p.type === 'card' ? `${p.brand} •••• ${p.last4}` : `UPI: ${p.upi}`)
export const money = (n) => '₹' + Math.round(Number(n)).toLocaleString('en-IN')
export const mrp = (p) => Math.round((p.price * 1.25) / 10) * 10

const RAW = [
  P(1, 'Wireless Headphones', 'Electronics', 2499, 4.6, 214, '🎧', '#ea580c', '#8da2ff', true, 25, 'Over-ear Bluetooth headphones with active noise cancelling and a 30-hour battery.'),
  P(2, 'Smart Watch Series 5', 'Electronics', 3999, 4.4, 168, '⌚', '#0f172a', '#64748b', true, 12, 'Track heart rate, sleep and workouts. Water resistant with a bright always-on display.'),
  P(3, 'Portable Speaker', 'Electronics', 1799, 4.3, 97, '🔊', '#7c3aed', '#c4b5fd', false, 40, 'Pocket-sized speaker with deep bass and 12 hours of playtime.'),
  P(4, 'Mechanical Keyboard', 'Electronics', 2999, 4.7, 302, '⌨️', '#334155', '#94a3b8', true, 18, 'Hot-swappable tactile switches, per-key backlight and a sturdy aluminium frame.'),
  P(5, 'Denim Jacket', 'Fashion', 1999, 4.2, 81, '🧥', '#1d4ed8', '#93c5fd', false, 30, 'Classic mid-wash denim jacket with a relaxed fit and brass buttons.'),
  P(6, 'Canvas Sneakers', 'Fashion', 1299, 4.5, 190, '👟', '#be185d', '#f9a8d4', true, 50, 'Lightweight everyday sneakers with a cushioned insole and durable rubber sole.'),
  P(7, 'Leather Backpack', 'Fashion', 3499, 4.8, 143, '🎒', '#78350f', '#fcd34d', false, 15, 'Full-grain leather backpack with a padded 15-inch laptop sleeve.'),
  P(8, 'Ceramic Table Lamp', 'Home', 1199, 4.1, 64, '💡', '#0f766e', '#99f6e4', false, 22, 'Hand-glazed ceramic base with a warm linen shade. Bulb included.'),
  P(9, 'Aroma Diffuser', 'Home', 899, 4.4, 120, '🪴', '#15803d', '#bbf7d0', true, 35, 'Ultrasonic diffuser with seven ambient light modes and auto shut-off.'),
  P(10, 'Cotton Bedding Set', 'Home', 2499, 4.6, 76, '🛏️', '#475569', '#cbd5e1', false, 10, 'Soft 300-thread-count cotton: duvet cover and two pillowcases.'),
  P(11, 'Yoga Mat Pro', 'Sports', 799, 4.5, 211, '🧘', '#c2410c', '#fdba74', true, 60, 'Non-slip 6 mm mat with alignment lines and a carry strap.'),
  P(12, 'Insulated Water Bottle', 'Sports', 699, 4.7, 340, '🥤', '#0369a1', '#7dd3fc', false, 80, 'Keeps drinks cold for 24 hours or hot for 12. Leak-proof lid.'),
  P(13, 'Power Bank 20000 mAh', 'Electronics', 1499, 4.5, 412, '🔋', '#0f766e', '#5eead4', false, 45, 'Fast-charging power bank with dual USB ports and a USB-C input. Charges a phone about four times.'),
  P(14, 'Wireless Mouse', 'Electronics', 799, 4.3, 256, '🖱️', '#475569', '#a5b4fc', false, 70, 'Quiet-click ergonomic mouse with adjustable DPI and a year of battery life.'),
  P(15, 'Bluetooth Earbuds', 'Electronics', 1999, 4.4, 530, '🎶', '#7c3aed', '#f0abfc', true, 9, 'True wireless earbuds with a charging case, touch controls and 24 hours of total playtime.'),
  P(16, '4K Action Camera', 'Electronics', 5499, 4.6, 88, '📷', '#1e293b', '#38bdf8', false, 14, 'Waterproof 4K camera with image stabilisation, Wi-Fi and a mounting kit.'),
  P(17, 'Cotton Kurta', 'Fashion', 1299, 4.4, 175, '👘', '#b45309', '#fde68a', true, 40, 'Breathable pure-cotton kurta with a straight cut. Easy for daily wear and festive days alike.'),
  P(18, 'Aviator Sunglasses', 'Fashion', 899, 4.2, 132, '🕶️', '#334155', '#fcd34d', false, 55, 'UV400 polarised lenses in a lightweight metal frame.'),
  P(19, 'Analog Wrist Watch', 'Fashion', 2199, 4.5, 99, '🕰️', '#854d0e', '#fde047', false, 20, 'Stainless steel case, leather strap and a scratch-resistant glass dial.'),
  P(20, 'Printed Silk Scarf', 'Fashion', 699, 4.1, 58, '🧣', '#be185d', '#fda4af', false, 33, 'Soft printed scarf that works as a stole, headwrap or bag accent.'),
  P(21, 'Non-stick Cookware Set', 'Home', 2999, 4.5, 207, '🍳', '#b91c1c', '#fca5a5', true, 16, 'Five-piece induction-friendly set with a kadai, tawa and frying pan.'),
  P(22, 'Scented Candle Trio', 'Home', 599, 4.6, 144, '🕯️', '#9333ea', '#e9d5ff', false, 48, 'Three soy-wax candles in lavender, jasmine and sandalwood. About 25 hours each.'),
  P(23, 'Framed Wall Art', 'Home', 1499, 4.3, 71, '🖼️', '#0e7490', '#a5f3fc', false, 12, 'Abstract canvas print in a solid wood frame, ready to hang.'),
  P(24, 'Smart LED Bulb Pack', 'Home', 799, 4.4, 318, '🔆', '#ca8a04', '#fef08a', false, 90, 'Pack of two Wi-Fi bulbs with 16 million colours. Works with voice assistants.'),
  P(25, 'Adjustable Dumbbell Set', 'Sports', 2499, 4.6, 164, '🏋️', '#1f2937', '#f97316', true, 11, 'Pair of dumbbells adjustable from 2 to 12 kg each with a secure locking collar.'),
  P(26, 'Match Football', 'Sports', 899, 4.4, 233, '⚽', '#15803d', '#86efac', false, 38, 'Size 5 machine-stitched football with a durable rubber bladder.'),
  P(27, 'Badminton Racket Set', 'Sports', 1299, 4.5, 187, '🏸', '#0369a1', '#bae6fd', true, 27, 'Two lightweight aluminium rackets, three shuttlecocks and a carry bag.'),
  P(28, 'Resistance Bands Kit', 'Sports', 499, 4.5, 301, '🤸', '#c2410c', '#fdba74', false, 65, 'Set of five latex bands in different strengths with a door anchor and pouch.'),
  P(29, 'Aluminium Laptop Stand', 'Electronics', 1299, 4.5, 190, '💻', '#334155', '#cbd5e1', false, 42, 'Foldable stand with six height settings and vented design that keeps your laptop cool.'),
  P(30, 'Full HD Webcam', 'Electronics', 1799, 4.2, 121, '🎥', '#0f172a', '#7dd3fc', false, 26, '1080p webcam with a built-in noise-cancelling mic and auto light correction.'),
  P(31, 'Streaming Media Stick', 'Electronics', 2499, 4.6, 276, '📺', '#7c3aed', '#c4b5fd', true, 19, 'Turn any TV into a smart TV with 4K streaming and a voice remote.'),
  P(32, 'Women’s Tote Handbag', 'Fashion', 1899, 4.4, 102, '👜', '#9d174d', '#fbcfe8', true, 17, 'Roomy vegan-leather tote with an inner zip pocket and a detachable strap.'),
  P(33, 'Baseball Cap', 'Fashion', 499, 4.1, 150, '🧢', '#1d4ed8', '#bfdbfe', false, 75, 'Adjustable cotton cap with a curved brim and breathable eyelets.'),
  P(34, 'Slim Fit Formal Shirt', 'Fashion', 999, 4.3, 164, '👔', '#475569', '#e2e8f0', false, 36, 'Wrinkle-resistant cotton blend shirt, ideal for the office or an evening out.'),
  P(35, 'Memory Foam Pillow', 'Home', 999, 4.5, 288, '😴', '#4338ca', '#c7d2fe', false, 31, 'Contoured orthopaedic pillow with a cooling gel layer and a washable cover.'),
  P(36, 'Ceramic Dinner Set', 'Home', 2299, 4.6, 94, '🍽️', '#0f766e', '#ccfbf1', true, 8, 'Eighteen-piece microwave-safe dinner set that serves six.'),
  P(37, 'Indoor Plant Pot Set', 'Home', 699, 4.4, 133, '🌿', '#15803d', '#d9f99d', false, 52, 'Set of three matte ceramic planters with bamboo trays and drainage holes.'),
  P(38, 'Kashmir Willow Cricket Bat', 'Sports', 1999, 4.5, 117, '🏏', '#a16207', '#fde68a', false, 13, 'Full-size bat with a thick edge profile and a comfortable rubber grip.'),
  P(39, 'Cycling Helmet', 'Sports', 1599, 4.6, 140, '🚴', '#0369a1', '#7dd3fc', true, 21, 'Lightweight ventilated helmet with an adjustable fit dial and a removable visor.'),
  P(40, 'Swimming Goggles', 'Sports', 599, 4.3, 205, '🏊', '#0e7490', '#67e8f9', false, 60, 'Anti-fog, UV-protected goggles with a soft silicone seal.'),
]

const KW = {1:'headphones',2:'smartwatch',3:'bluetooth,speaker',4:'mechanical,keyboard',5:'denim,jacket',6:'canvas,sneakers',7:'leather,backpack',8:'table,lamp',9:'aroma,diffuser',10:'bedding',11:'yoga,mat',12:'water,bottle',13:'power,bank',14:'computer,mouse',15:'wireless,earbuds',16:'action,camera',17:'kurta',18:'aviator,sunglasses',19:'wrist,watch',20:'silk,scarf',21:'cookware',22:'scented,candle',23:'wall,art',24:'led,bulb',25:'dumbbell',26:'football',27:'badminton,racket',28:'resistance,bands',29:'laptop,stand',30:'webcam',31:'streaming,stick',32:'tote,handbag',33:'baseball,cap',34:'formal,shirt',35:'pillow',36:'dinner,set',37:'plant,pot',38:'cricket,bat',39:'bicycle,helmet',40:'swimming,goggles'}
export const SEED = RAW.map((p) => ({ ...p, images: [0, 1, 2].map((n) => `https://loremflickr.com/640/640/${KW[p.id]}?lock=${p.id * 10 + n}`) }))
