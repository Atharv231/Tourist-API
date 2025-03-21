const express = require('express');
const cors = require('cors');
const { apiKey } = require('../config/apikey');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Middleware to check API key
function checkApiKey(req, res, next) {
  const { api_key } = req.query;

  if (api_key !== apiKey) {
    return res.status(403).json({ error: 'Forbidden, invalid API key.' });
  }

  next();
}

    const users = [
  { name: 'Delhi', info:'The capital city of India, Delhi is a perfect blend of history and modernity. It houses historical landmarks like India Gate, Qutub Minar, and Humayuns Tomb. The Red Fort and Jama Masjid reflect Mughal architecture, while Lotus Temple and Akshardham represent modern design. Connaught Place and Chandni Chowk are famous for shopping and food. It also serves as the political center of India with Parliament House and Rashtrapati Bhavan.', imageUrl:'./images/fig1.jpg' },
  { name: 'Agra', info:'Agra is globally known for the Taj Mahal, a symbol of love and one of the Seven Wonders of the World. Apart from this, Agra Fort and Fatehpur Sikri reflect Mughal grandeur. It was once the capital of the Mughal Empire and has rich historical significance. The Yamuna River flows through the city, enhancing its beauty. Agra is famous for its handicrafts, leather goods, and marble inlay work. The local delicacy, "Petha," is a must-try sweet.', imageUrl:'./images/fig2.jpg' },
  { name: 'Jaipur', info:'Popularly called the "Pink City," Jaipur is known for its royal heritage and stunning architecture. The Hawa Mahal, City Palace, and Jantar Mantar are key attractions. Amer Fort, with its massive ramparts and artistic elements, is a must-visit. Jaipur is a paradise for shoppers, offering traditional Rajasthani handicrafts, jewelry, and textiles. The city is famous for its vibrant festivals, including the Jaipur Literature Festival and Teej. ', imageUrl:'./images/fig3.jpg' },
  { name: 'Varanasi', info:'Varanasi, also called Kashi, is one of the oldest living cities in the world. It is considered the spiritual capital of India, situated on the banks of the sacred Ganges River. The city is famous for its numerous ghats, where pilgrims perform rituals and take holy dips. The evening Ganga Aarti at Dashashwamedh Ghat is a mesmerizing experience. Varanasi is home to the famous Kashi Vishwanath Temple, dedicated to Lord Shiva.', imageUrl:'./images/fig4.jpg' },
  { name: 'Amritsar', info:'Amritsar is known for the Golden Temple, one of the holiest Sikh shrines. The city’s significance in Sikh history and its peaceful atmosphere makes it a must-visit. The Jallianwala Bagh Memorial, highlighting India’s struggle for freedom, and the Wagah Border Ceremony add to Amritsar’s charm. The city is also famous for its food, particularly Punjabi cuisine, with dishes like Amritsari Kulcha and Lassi.', imageUrl:'./images/fig5.jpg' },
  { name: 'Udaipur', info:'Udaipur, often referred to as the "City of Lakes," is known for its stunning palaces and lakes. The City Palace, Lake Pichola, and Jag Mandir are key attractions. Udaipur also boasts beautiful gardens, temples, and historic sites. The serene atmosphere and romantic vibe make it a popular destination for couples. The city is famous for its handicrafts, including miniature paintings and traditional Rajasthani jewelry.', imageUrl:'./images/fig6.jpg' },
  { name: 'Jaisalmer', info:'Jaisalmer, also known as the "Golden City," is famous for its magnificent sandstone architecture and desert landscape. The Jaisalmer Fort, Patwon Ki Haveli, and Sam Sand Dunes are must-visit spots. The fort and haveli architecture display intricate carvings and designs. Jaisalmer is a gateway to the Thar Desert, and camel rides are a popular way to explore its beauty.', imageUrl:'./images/fig7.jpg' },
  { name: 'Shimla', info:'Shimla, the capital of Himachal Pradesh, is known for its scenic beauty and colonial charm. The Ridge, Mall Road, and Jakhoo Temple are popular tourist spots. The city is surrounded by snow-capped mountains, making it an ideal destination for nature lovers. Shimla also offers a variety of adventure sports, including skiing and trekking, especially during the winter months.', imageUrl:'./images/fig8.jpg' },
  { name: 'Rishikesh', info:'Rishikesh, often referred to as the "Yoga Capital of the World," is a hub for spiritual seekers and adventure enthusiasts. It is located on the banks of the Ganges and is famous for its yoga centers, meditation retreats, and temples. The Laxman Jhula and Ram Jhula are iconic suspension bridges. Rishikesh also offers thrilling activities like white-water rafting and trekking.', imageUrl:'./images/fig9.jpg' },
  { name: 'Mumbai', info:'Mumbai, the financial capital of India, is known for its bustling lifestyle and cultural diversity. The Gateway of India, Marine Drive, and Colaba Causeway are popular attractions. Mumbai is home to the Indian film industry, Bollywood, and offers vibrant nightlife. The city is also known for its delicious street food, including vada pav, pav bhaji, and bhel puri.', imageUrl:'./images/fig10.jpg' },
  { name: 'Goa', info:'Goa is famous for its beautiful beaches, Portuguese colonial architecture, and vibrant nightlife. The beaches like Baga, Anjuna, and Palolem are popular for water sports, sunbathing, and beach parties. Goa is also known for its unique blend of Indian and Portuguese culture, which is reflected in its churches, forts, and cuisine. The Carnival festival is one of the biggest celebrations in the state.', imageUrl:'./images/fig2.jpg' },
  { name: 'Pune', info:'Pune is a vibrant city known for its cultural richness and educational prominence. Key attractions include the historical Shaniwar Wada, the iconic Aga Khan Palace, and the scenic Sinhagad Fort. For spiritual seekers, the Osho Ashram offers a peaceful retreat. The city’s pleasant weather, along with beautiful spots like the Pune University campus and Khadakwasla Dam, make it a perfect blend of tradition and modernity.', imageUrl:'./images/fig2.jpg' },
  { name: 'Ujjain', info:'Ujjain is an ancient city known for its religious significance and rich history. It is one of the seven holiest cities in India, and the Mahakaleshwar Temple, dedicated to Lord Shiva, is a key attraction. Ujjain also hosts the Kumbh Mela, one of the largest religious gatherings in the world. The city is also known for its ghats and other temples along the Shipra River.', imageUrl:'./images/fig2.jpg' },
  { name: 'Mount Abu', info:'Mount Abu, located in Rajasthan, is a beautiful hill station known for its cool climate and lush greenery. The Dilwara Temples, famous for their intricate marble carvings, and the Nakki Lake are key attractions. The city also offers panoramic views of the surrounding Aravalli Range and is a popular destination for honeymooners and nature lovers.', imageUrl:'./images/fig2.jpg' },
  { name: 'Bengaluru', info:'Bengaluru, also known as Bangalore, is the Silicon Valley of India and a hub for technology and innovation. The city is famous for its gardens, with Lalbagh and Cubbon Park being key attractions. Bengaluru’s vibrant culture is reflected in its food, music, and nightlife. It is also home to numerous IT parks, shopping malls, and historical landmarks.', imageUrl:'./images/fig2.jpg' },
  { name: 'Mysore', info:'Mysore, the cultural capital of Karnataka, is famous for its royal heritage and stunning palaces. The Mysore Palace, Chamundi Hill, and Brindavan Gardens are popular attractions. Mysore is also known for its yoga centers, silk sarees, and sandalwood products. The city’s Dussehra festival is one of the most important events in South India.', imageUrl:'./images/fig2.jpg' },
  { name: 'Hampi', info:'Hampi, a UNESCO World Heritage site, is known for its ancient temples and ruins. The Vijayanagara Empire once ruled this region, and its architectural wonders, like the Virupaksha Temple and Vittala Temple, still stand. Hampi is also a haven for history lovers and trekkers, with rocky hills and the Tungabhadra River adding to the city’s charm.', imageUrl:'./images/fig2.jpg' },
  { name: 'Hyderabad', info:'Hyderabad, the city of pearls, is known for its rich history, culture, and food. The Charminar, Golkonda Fort, and the Qutb Shahi Tombs are key landmarks. The city is famous for its biryani, a must-try dish. Hyderabad is also home to the tech industry and is often referred to as "Cyberabad" due to its booming IT sector.', imageUrl:'./images/fig2.jpg' },
  { name: 'Chennai', info:'Chennai, the capital of Tamil Nadu, is known for its traditional culture, classical music, and dance forms like Bharatanatyam. The city’s Marina Beach, Kapaleeshwarar Temple, and Fort St. George are top attractions. Chennai is also famous for its South Indian cuisine, especially dosa, idli, and filter coffee.', imageUrl:'./images/fig2.jpg' },
  { name: 'Pondicherry', info:'Pondicherry, a French colonial settlement, is known for its tranquil beaches, quaint streets, and vibrant French Quarter. The Aurobindo Ashram and Auroville are key spiritual destinations. Pondicherry also offers a variety of water sports and is a great place to explore French-inspired cafes and boutiques.', imageUrl:'./images/fig2.jpg' },
  { name: 'Madurai', info: 'Madurai, known as the "Athens of the East," is famous for the magnificent Meenakshi Temple. This ancient city is a hub of Tamil culture and heritage. Visitors can explore the Thirumalai Nayakkar Mahal, enjoy bustling local markets, and experience the vibrant food scene. The Vaigai River adds to its charm, while the Chithirai Festival attracts thousands of devotees annually.', imageUrl: 'https://example.com/madurai.jpg' },
  { name: 'Kodaikanal', info: 'Kodaikanal, the "Princess of Hill Stations," offers breathtaking landscapes, serene lakes, and lush forests. Tourists can explore the scenic Kodaikanal Lake, hike to Pillar Rocks, and visit Coaker’s Walk for a mesmerizing view. The city is known for its pleasant climate, vibrant flora, and homemade chocolates. Bryant Park and Silver Cascade Falls further enhance its appeal.', imageUrl: 'https://example.com/kodaikanal.jpg' },
  { name: 'Munnar', info: 'Munnar, a paradise for nature lovers, is known for its tea plantations, misty hills, and breathtaking valleys. The Eravikulam National Park is home to the endangered Nilgiri Tahr. Visitors can enjoy a boat ride at Mattupetty Dam, visit the Tea Museum, and trek to Anamudi Peak. Munnar’s cool climate and green landscapes make it a perfect retreat.', imageUrl: 'https://example.com/munnar.jpg' },
  { name: 'Alleppey', info: 'Alleppey, often called the "Venice of the East," is famous for its picturesque backwaters and houseboat cruises. Visitors can relax on Alappuzha Beach, explore the serene Vembanad Lake, and witness the vibrant Nehru Trophy Boat Race. The city is also known for Ayurvedic therapies and delicious Kerala cuisine, offering an authentic cultural experience.', imageUrl: 'https://example.com/alleppey.jpg' },
  { name: 'Kochi', info: 'Kochi, a blend of modernity and tradition, is known for its colonial architecture, backwaters, and bustling spice markets. Fort Kochi, Mattancherry Palace, and Chinese Fishing Nets are key attractions. The city’s vibrant arts scene, including the Kochi-Muziris Biennale, attracts artists from around the world. Kochi’s rich history and coastal charm make it a must-visit.', imageUrl: 'https://example.com/kochi.jpg' },
  { name: 'Kolkata', info: 'Kolkata, the "City of Joy," is renowned for its colonial charm, cultural festivals, and literary heritage. Key attractions include the Victoria Memorial, Howrah Bridge, and Dakshineswar Temple. The city’s vibrant street food scene offers delicacies like puchkas and kathi rolls. Durga Puja, a grand annual celebration, showcases Kolkata’s deep-rooted traditions.', imageUrl: 'https://example.com/kolkata.jpg' },
  { name: 'Darjeeling', info: 'Darjeeling, famous for its tea plantations, offers breathtaking views of the Kanchenjunga mountains. The Darjeeling Himalayan Railway, a UNESCO World Heritage site, provides a scenic train ride experience. Tiger Hill is the best spot for sunrise views. Tourists can also visit the Peace Pagoda, Batasia Loop, and experience the charm of colonial-era hotels.', imageUrl: 'https://example.com/darjeeling.jpg' },
  { name: 'Gangtok', info: 'Gangtok, the capital of Sikkim, is a beautiful hill station known for its monasteries, scenic landscapes, and adventure activities. The Rumtek Monastery, Tsomgo Lake, and Nathula Pass are must-visit places. The city offers a mix of traditional Sikkimese culture and modern attractions, making it a favorite destination for tourists.', imageUrl: 'https://example.com/gangtok.jpg' },
  { name: 'Shillong', info: 'Shillong, the "Scotland of the East," is known for its rolling hills, waterfalls, and vibrant culture. Visitors can explore Elephant Falls, Shillong Peak, and Ward’s Lake. The city is famous for its music scene, pleasant weather, and unique Khasi cuisine. The nearby Living Root Bridges and Dawki River add to its charm.', imageUrl: 'https://example.com/shillong.jpg' },
  { name: 'Kaziranga', info: 'Kaziranga National Park, a UNESCO World Heritage site, is home to the rare one-horned rhinoceros. Spread across Assam, it boasts diverse wildlife, including tigers, elephants, and wild buffaloes. Safari tours offer close encounters with these animals in their natural habitat. The Brahmaputra River enhances its scenic beauty, making it a nature lover’s paradise.', imageUrl: 'https://example.com/kaziranga.jpg' },
  { name: 'Aurangabad', info: 'Aurangabad, known for its historic charm, is home to the UNESCO-listed Ajanta and Ellora Caves. The city also features Bibi Ka Maqbara, often called the "Mini Taj Mahal." Aurangabad’s Mughal history, vibrant local markets, and traditional Paithani sarees attract tourists. It serves as a gateway to Maharashtra’s cultural and architectural heritage.', imageUrl: 'https://example.com/aurangabad.jpg' },
  { name: 'Nashik', info: 'Nashik, often called the "Wine Capital of India," blends spirituality, history, and nature. The city hosts the famous Kumbh Mela and features Trimbakeshwar Temple. Wine enthusiasts can explore vineyards like Sula. The ancient Pandav Leni Caves and Anjneri Hills add to its charm. Nashik’s blend of religious and scenic sites attracts many visitors.', imageUrl: 'https://example.com/nashik.jpg' },
  { name: 'Shirdi', info: 'Shirdi is renowned as the home of Sai Baba, attracting millions of devotees yearly. The Sai Baba Temple is the town’s main attraction, along with Dwarkamai and Chavadi. Visitors experience spiritual peace and can explore nearby Shani Shingnapur Temple. Shirdi’s vibrant markets offer religious souvenirs and prasad, making it a sacred pilgrimage spot.', imageUrl: 'https://example.com/shirdi.jpg' },
  { name: 'Kolhapur', info: 'Kolhapur is known for the famous Mahalakshmi Temple and its rich Maratha heritage. The city is also popular for its spicy cuisine, particularly Kolhapuri misal and tambda rassa. Visitors can explore the historic Panhala Fort and Rankala Lake. Kolhapuri chappals and jewelry are renowned worldwide, making it a shopper’s delight.', imageUrl: 'https://example.com/kolhapur.jpg' },
  { name: 'Ratnagiri', info: 'Ratnagiri, a coastal paradise, is known for its pristine beaches and Alphonso mangoes. Ganpatipule Beach, Thibaw Palace, and Jaigad Fort are key attractions. The city’s lush landscapes, seafood delicacies, and Konkani culture make it a perfect getaway. Scenic cliffs and coconut groves enhance its beauty.', imageUrl: 'https://example.com/ratnagiri.jpg' },
  { name: 'Alibaug', info: 'Alibaug, a popular beach destination, offers stunning sea views and historic forts. Visitors can explore Alibaug Beach, Kolaba Fort, and Kashid Beach. Water sports like jet skiing and parasailing attract adventure lovers. The city’s proximity to Mumbai makes it a perfect weekend getaway.', imageUrl: 'https://example.com/alibaug.jpg' },
  { name: 'Lonavala', info: 'Lonavala, a picturesque hill station in Maharashtra, is famous for its lush green valleys, misty hills, and scenic waterfalls. Tourists flock to attractions like Tiger’s Leap, Bhushi Dam, and Rajmachi Fort. The town is also known for its chikki, a traditional sweet. During monsoons, Lonavala transforms into a breathtaking retreat, making it a favorite getaway for nature lovers and adventure seekers alike.', imageUrl: './images/lonavala.jpg' },
  { name: 'Mahabaleshwar', info: 'Mahabaleshwar is a serene hill station in Maharashtra, known for its strawberry farms, scenic viewpoints, and pleasant climate. Key attractions include Arthur’s Seat, Venna Lake, and Pratapgad Fort. The lush greenery and cascading waterfalls make it an ideal destination for nature lovers. Boating, trekking, and visiting Mapro Garden for fresh strawberries and jams are popular activities among tourists.', imageUrl: './images/mahabaleshwar.jpg' },
  { name: 'Matheran', info: 'Matheran, India’s smallest hill station, is known for its vehicle-free environment and colonial charm. Situated in Maharashtra, it offers mesmerizing views from points like Panorama Point, Louisa Point, and Charlotte Lake. The town is perfect for trekking and horseback riding. The toy train ride through dense forests enhances its vintage appeal, making it a favorite weekend retreat from Mumbai and Pune.', imageUrl: './images/matheran.jpg' },
  { name: 'Tadoba', info: 'Tadoba National Park, located in Maharashtra, is a paradise for wildlife enthusiasts. Known for its thriving population of Bengal tigers, the park offers thrilling jungle safaris. Other wildlife includes leopards, sloth bears, and crocodiles. Tadoba Lake and dense teak forests add to its natural beauty. The park is an important conservation area, attracting nature lovers and photographers from across the country.', imageUrl: './images/tadoba.jpg' }
]; 


// `/api/udata` endpoint
app.get('/api/udata', checkApiKey, (req, res) => {
  const { name } = req.query;
  
  if (name) {
    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    if (user) {
      return res.json({
        message: 'User found!',
        data: user,
      });
    } else {
      return res.json({
        message: 'User not found.',
        data: null,
      });
    }
  } else {
    return res.json({
      message: 'Please provide a name to search.',
      data: null,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

