/**
 * ============================================================================
 * MELODIES OF GRACE (MOG) - CENTRAL DATA HUB & CONTENT MANAGEMENT
 * ============================================================================
 * 
 * 💡 NON-TECHNICAL EDITING GUIDE:
 * Anyone can easily update information on this website!
 * - To change phone numbers or social media, edit the `config` object below.
 * - To update a team member's name, role, bio, or country, find their entry
 *   in the `team` array below and change the text inside quotes.
 * - To add a new team member, copy an existing block and fill in the details.
 * - To update flyers, add images to `assets/images/flyers/` and link them here.
 * ============================================================================
 */

const mogData = {
  // Brand Configuration & Real Contact Details
  config: {
    brandName: "Melodies of Grace",
    shortName: "MOG",
    tagline: "Be Part of Our Crew in Praise",
    mission: "A premier multinational musical ensemble and commercial brand delivering African vocal majesty, symphonic precision, youth empowerment, and heartfelt worship to audiences worldwide.",
    foundedYear: 2024,
    foundedDate: "December 5, 2024",
    bookingEmail: "melodiesofgrace9@gmail.com",
    generalEmail: "melodiesofgrace9@gmail.com",
    phone: "+91 93114 06305",
    directInquiriesPhone: "+919311406305",
    phoneSecondary: "+255681865105",
    phoneTertiary: "+917838224974",
    whatsAppNumber: "919311406305", // Direct WhatsApp dispatch
    location: "New Delhi & Greater Noida, India / International",

    // Google Drive Links for Full Photo & Event Archives
    googleDriveTeamPhotos: "https://drive.google.com/drive/folders/1BOJa6Fn6AClE84l_LwaE102ekSdRLDb4",
    googleDriveEventsPhotos: "https://drive.google.com/drive/folders/1875mIv14RWVuWqL6kyP_RPzvdpRum34L",
    googleDriveGalleryUrl: "https://drive.google.com/drive/folders/1BOJa6Fn6AClE84l_LwaE102ekSdRLDb4",

    socials: {
      instagram: {
        handle: "@melodiesofgrace3",
        url: "https://www.instagram.com/melodiesofgrace3?stkn=NW5rcDM3Z2xoZHg5",
        display: "Instagram"
      },
      tiktok: {
        handle: "@melodiesofgrace3",
        url: "https://www.tiktok.com/@melodiesofgrace3?_t=ZS-8tFVZcW9mL4&_r=1",
        display: "TikTok"
      },
      youtube: {
        handle: "@melodies_of_grace",
        url: "https://www.youtube.com/@melodies_of_grace?si=TB2gU3RAY-7OCiRP",
        display: "YouTube"
      },
      facebook: {
        handle: "Melodies of Grace",
        url: "https://www.facebook.com/share/1BRxwUJJGP",
        display: "Facebook"
      },
      whatsappChannel: {
        handle: "Melodies of Grace Channel",
        url: "https://whatsapp.com/channel/0029Vb7E9P53LdQQMmp7Mz2N",
        display: "WhatsApp Channel"
      },
      whatsapp: {
        handle: "+91 93114 06305",
        url: "https://wa.me/919311406305?text=Hello%20Melodies%20of%20Grace,%20I%20would%20like%20to%20connect!",
        display: "WhatsApp Direct"
      },
      whatsappTZ: {
        handle: "+255681865105",
        url: "https://wa.me/255681865105?text=Hello%20Melodies%20of%20Grace,%20I%20would%20like%20to%20connect!",
        display: "WhatsApp Direct Tanzania"
      }

    }
  },

  // Executive Management & Department Heads
  management: {
    director: {
      name: "Zolani Clarence Mpofu",
      title: "Founder & Director",
      department: "Management",
      image: "assets/images/management/Zolani_Clarence_Mpofu_Director.jpg",
      bio: "As Founder and Director, Zolani carries the vision of Melodies of Grace while also serving as one of its Tenor vocalists. An accomplished choral visionary devoted to vocal excellence, youth mentorship, and cultural unity.",
      statement: "Music is not merely sound; it is the language of grace that dissolves borders, heals the wounded spirit, and elevates souls into true worship.",
      highlights: ["Founder & Artistic Director", "Master Arranger & Choral Conductor", "Tenor Vocalist"]
    },
    assistantDirector: {
      name: "Kudzaishe Mazonde (Kudzi)",
      title: "Assistant Director",
      department: "Management",
      image: "assets/images/management/Kudzaishe_Mazonde_Asst_Director.jpg",
      bio: "Kudzaishe serves as Assistant Director and is part of the Management Team. She coordinates ensemble rehearsals, staging, and group operations, and has also led the Alto section as its Part Leader.",
      statement: "True excellence in harmony begins with humility in the heart and dedication to the collective sound. At MOG, every voice is valued and polished.",
      highlights: ["Assistant Director", "Ensemble Operations & Rehearsals", "Alto Vocalist & Former Part Leader"]
    },
    secretary: {
      name: "Nqoba Mackson Gumbo",
      title: "Secretary",
      department: "Management",
      image: "assets/images/team/Nqoba_Mackson_Gumbo.jpg"
    },
    advisory: {
      name: "Charles Kwabena Ahenkorah",
      title: "Advisory",
      department: "Management"
    },
    cfo: {
      name: "Blessing Christine Chigutsa (Blessy)",
      title: "Chief Financial Officer (CFO)",
      department: "Management & Finance",
      image: "assets/images/team/Blessing_Christine_Chigutsa.jpg"
    },
    eventsManager: {
      name: "Neema Christopher Mkama",
      title: "Events Manager",
      department: "Management",
      image: "assets/images/team/Neema_Christopher_Mkama.jpg"
    },
    groupPhoto: "assets/images/management/management.jpg",
    groupPhotoAlt: "assets/images/management/management_1.jpg",
    groupPhoto3: "assets/images/management/management_3.jpg",
    groupPhoto4: "assets/images/management/management_4.jpg"
  },

  // Official Department Leadership Roster
  departments: [
    {
      name: "Management",
      members: [
        { role: "Founder and Director", name: "Zolani Clarence Mpofu" },
        { role: "Assistant Director", name: "Kudzaishe Mazonde (Kudzi)" },
        { role: "Secretary", name: "Nqoba Mackson Gumbo" },
        { role: "Advisory", name: "Charles Kwabena Ahenkorah" },
        { role: "CFO", name: "Blessing Christine Chigutsa (Blessy)" },
        { role: "Events Manager", name: "Neema Christopher Mkama" }
      ]
    },
    {
      name: "Vocal Department",
      members: [
        { role: "Head", name: "Ebenezer Wilfred Kileo" },
        { role: "Soprano Part Leader", name: "Blessing Christine Chigutsa" },
        { role: "Alto Part Leader", name: "Faith Tinotenda Ndalimani" },
        { role: "Tenor Part Leader", name: "Ebenezer Wilfred Kileo" },
        { role: "Music Director (MD)", name: "Andindilile Anghanile" }
      ]
    },
    {
      name: "Financial Department",
      members: [
        { role: "CFO", name: "Blessing Christine Chigutsa" },
        { role: "Assistant", name: "Victor Mathayo Ngonye" },
        { role: "Controller", name: "Sithabisiwe Nkomo (Thabie)" }
      ]
    },
    {
      name: "Marketing and Media Department",
      members: [
        { role: "HOD", name: "Rachael Akinhanmi" }
      ]
    },
    {
      name: "Welfare Department",
      members: [
        { role: "HOD", name: "Ruvarashe Rusere (Ruva)" },
        { role: "Assistant", name: "Ayanda Dadiso Mtambarika" }
      ]
    },
    {
      name: "Uniform and Fashion Department",
      members: [
        { role: "HOD", name: "Kudzai Auxilia Pick" }
      ]
    },
    {
      name: "IT Department",
      members: [
        { role: "HOD", name: "Wesley Emmanuel Wende" }
      ]
    }
  ],

  // ==========================================================================
  // ENSEMBLE MEMBERS ROSTER (Meet the Team - All 27 verified members)
  // Categorised cleanly by vocal parts (Soprano, Alto, Tenor) and musicians/mgmt
  // ==========================================================================
  team: [
    // 1. Blessing Christine Chigutsa
    {
      id: "blessing-chigutsa",
      name: "Blessing Christine Chigutsa",
      part: "Soprano",
      vocalPart: "soprano",
      category: "soprano",
      departmentRole: "Chief Financial Officer (CFO) • Soprano Part Leader",
      country: "Zimbabwe",
      image: "assets/images/team/Blessing_Christine_Chigutsa.jpg",
      isLeadership: true,
      bio: "Blessing leads the Soprano section while serving as our Chief Financial Officer, where she oversees one of the group's most trusted responsibilities—our finances.",
      quote: "Grace and stewardship walk hand in hand. Every note and resource is dedicated to our highest purpose."
    },
    // 2. Nqoba Mackson Gumbo
    {
      id: "nqoba-gumbo",
      name: "Nqoba Mackson Gumbo",
      part: "Soprano",
      vocalPart: "soprano",
      category: "soprano",
      departmentRole: "Secretary • Management Team",
      country: "Zimbabwe",
      image: "assets/images/team/Nqoba_Mackson_Gumbo.jpg",
      isLeadership: true,
      bio: "Nqoba serves as the group's Secretary, helping keep our administration organised and moving forward. She is part of the Management team.",
      quote: "True praise breaks every chain, and order behind the scenes keeps our vision soaring."
    },
    // 3. Marvelous Kangeta
    {
      id: "marvelous-kangeta",
      name: "Marvelous Kangeta",
      part: "Soprano",
      vocalPart: "soprano",
      category: "soprano",
      departmentRole: "Soprano Vocalist",
      country: "Zambia",
      image: "assets/images/team/Marvelous_Kangeta.jpg",
      isLeadership: false,
      bio: "Marvelous brings a strong Soprano voice and a striking stage presence that has become part of the Melodies of Grace experience.",
      quote: "Singing with MOG is experiencing pure joy wrapped in heavenly, majestic sound."
    },
    // 4. Zolani Clarence Mpofu
    {
      id: "zolani-mpofu",
      name: "Zolani Clarence Mpofu",
      part: "Tenor",
      vocalPart: "tenor",
      category: "tenor",
      departmentRole: "Founder & Director • Tenor Vocalist",
      country: "Zimbabwe",
      image: "assets/images/team/Zolani_Clarence_Mpofu.jpg",
      isLeadership: true,
      bio: "As Founder and Director, Zolani carries the vision of Melodies of Grace while also serving as one of its Tenor vocalists.",
      quote: "Grace is our foundation; vocal majesty and spiritual authenticity are our daily pursuit."
    },
    // 5. Faith Tinotenda Ndalimani
    {
      id: "faith-ndalimani",
      name: "Faith Tinotenda Ndalimani",
      part: "Alto",
      vocalPart: "alto",
      category: "alto",
      departmentRole: "Alto Part Leader",
      country: "Zimbabwe",
      image: "assets/images/team/Faith_Tinotenda_Ndalimani.jpg",
      isLeadership: true,
      bio: "Faith is one of our powerful Altos and the newly appointed Alto Part Leader, taking on a greater role in shaping and coordinating the section.",
      quote: "When the Alto line is resonant and pure, it lifts the entire harmonic atmosphere."
    },
    // 6. Godswill Anong
    {
      id: "godswill-anong",
      name: "Godswill Anong",
      part: "Tenor",
      vocalPart: "tenor",
      category: "tenor",
      departmentRole: "Tenor Vocalist & Composer",
      country: "Cameroon",
      image: "assets/images/team/Godswill_Anong.jpg",
      isLeadership: false,
      bio: "A dedicated Tenor with a gift for composition, Godswill gave the ensemble Je t'aime Seigneur, an original piece featured at our previous concert.",
      quote: "Excellence honors God and touches the soul. Composing for this ensemble is a sacred joy."
    },
    // 7. Victor Mathayo Ngonye
    {
      id: "victor-ngonye",
      name: "Victor Mathayo Ngonye",
      part: "Tenor",
      vocalPart: "tenor",
      category: "tenor",
      departmentRole: "Assistant CFO • Tenor Vocalist",
      country: "Tanzania",
      image: "assets/images/team/Victor_Mathayo_Ngonye.jpg",
      isLeadership: true,
      bio: "Victor brings his voice to the Tenor section while also serving as Assistant CFO, supporting the financial administration of the ensemble.",
      quote: "Precision in finance and passion on the stage anchor the growth of our ensemble."
    },
    // 8. Kudzai Auxilia Pick
    {
      id: "kudzai-auxilia-pick",
      name: "Kudzai Auxilia Pick",
      part: "Alto",
      vocalPart: "alto",
      category: "alto",
      departmentRole: "HOD - Uniform and Fashion Department",
      country: "Zimbabwe",
      image: "assets/images/team/Kudzai_Auxilia_Pick.jpg",
      isLeadership: true,
      bio: "Auxilia is an Alto vocalist and the newly appointed Head of the Uniforms and Fashion Department, shaping how Melodies of Grace presents itself beyond the music.",
      quote: "Our visual presentation reflects the royalty and dignity of the praise we bring."
    },
    // 9. Sithabisiwe Nkomo
    {
      id: "sithabisiwe-nkomo",
      name: "Sithabisiwe Nkomo (Thabie)",
      part: "Alto",
      vocalPart: "alto",
      category: "alto",
      departmentRole: "Controller - Financial Department",
      country: "Zimbabwe",
      image: "assets/images/team/Sithabisiwe_Nkomo.jpg",
      isLeadership: true,
      bio: "Known to the team as Thabie, Sithabisiwe is an Alto vocalist who also serves as part of the Financial Department.",
      quote: "Every note matters, every ledger counts, and every heart in the room is lifted."
    },
    // 10. Andindilile Anghanile
    {
      id: "andindilile-anghanile",
      name: "Andindilile Anghanile",
      part: "Keyboard",
      vocalPart: "instrumentalist",
      category: "musicians",
      departmentRole: "Music Director (MD) • Lead Keyboardist",
      country: "Zambia",
      image: "assets/images/team/Andindilile_Anghanile.jpg",
      isLeadership: true,
      bio: "Andi is our Keyboardist and Music Director, helping shape the instrumental direction and overall sound of the ensemble.",
      quote: "Every chord progression is a prayer; every crescendo is a testament of grace."
    },
    // 11. Ebenezer Wilfred Kileo
    {
      id: "ebenezer-kileo",
      name: "Ebenezer Wilfred Kileo",
      part: "Tenor",
      vocalPart: "tenor",
      category: "tenor",
      departmentRole: "Head of Vocal Department • Tenor Part Leader",
      country: "Tanzania",
      image: "assets/images/team/Ebenezer_Wilfred_Kileo.jpg",
      isLeadership: true,
      bio: "Ebenezer leads the Tenor section and is our newly appointed Head of the Vocal Department, overseeing the development of our vocal team.",
      quote: "Our strength comes from our unity; individual voices blended into one majestic sound."
    },
    // 12. Tariro Chibhamu
    {
      id: "tariro-chibhamu",
      name: "Tariro Chibhamu",
      part: "Soprano",
      vocalPart: "soprano",
      category: "soprano",
      departmentRole: "Soprano Vocalist",
      country: "Zimbabwe",
      image: "assets/images/team/Tariro_Chibhamu.jpg",
      isLeadership: false,
      bio: "Tariro is a Soprano vocalist whose impressive range and distinctive voice add another layer to our vocal blend.",
      quote: "When we raise our voices together, beauty and healing resonate in every listener's heart."
    },
    // 13. Oluwatobi Abolade
    {
      id: "oluwatobi-abolade",
      name: "Oluwatobi Abolade",
      part: "Keyboard",
      vocalPart: "instrumentalist",
      category: "musicians",
      departmentRole: "Aux Keyboardist • Instrumental Team",
      country: "Liberia",
      image: "assets/images/team/Oluwatobi_Abolade.jpg",
      isLeadership: false,
      bio: "Toby is one of our Keyboardists, bringing his musical skill to the Instrumental Team and helping build the foundation behind our vocals.",
      quote: "The warmth of our sound is built on the subtle textures supporting the choir."
    },
    // 14. Neema Christopher Mkama
    {
      id: "neema-mkama",
      name: "Neema Christopher Mkama",
      part: "Events Manager",
      vocalPart: "management",
      category: "management",
      departmentRole: "Events Manager • Management Team",
      country: "Tanzania",
      image: "assets/images/team/Neema_Christopher_Mkama.jpg",
      isLeadership: true,
      bio: "Neema is part of the Management Team as Events Manager, coordinating the logistics that turn our plans into actual events.",
      quote: "Excellence behind the scenes creates unforgettable encounters on the stage."
    },
    // 15. Ruvarashe Rusere
    {
      id: "ruvarashe-rusere",
      name: "Ruvarashe Rusere",
      part: "Alto",
      vocalPart: "alto",
      category: "alto",
      departmentRole: "HOD - Welfare Department",
      country: "Zimbabwe",
      image: "assets/images/team/Ruvarashe_Rusere.jpg",
      isLeadership: true,
      bio: "Ruvarashe is an Alto vocalist who has also led both the Welfare and Prayer Departments, playing a significant role in the wellbeing of the ensemble.",
      quote: "Caring for the hearts of our team is what enables our voices to pour out true ministry."
    },
    // 16. Ayanda Dadiso Mtambarika
    {
      id: "ayanda-mtambarika",
      name: "Ayanda Dadiso Mtambarika",
      part: "Soprano",
      vocalPart: "soprano",
      category: "soprano",
      departmentRole: "Assistant - Welfare Department",
      country: "Zimbabwe",
      image: "assets/images/team/Ayanda_Dadiso_Mtambarika.jpg",
      isLeadership: false,
      bio: "Ayanda is a Soprano vocalist and a newly appointed member of the Welfare Department, contributing to the care and wellbeing of the team.",
      quote: "Every song is a message of hope and restoration for everyone who listens."
    },
    // 17. Emmanuel Innocent Umor
    {
      id: "emmanuel-umor",
      name: "Emmanuel Innocent Umor",
      part: "Bass Guitar",
      vocalPart: "instrumentalist",
      category: "musicians",
      departmentRole: "Bass Guitarist • Instrumental Team",
      country: "Nigeria",
      image: "assets/images/team/Emmanuel_Innocent_Umor.jpg",
      isLeadership: false,
      bio: "Manny holds down the low end as our Bass Guitarist, giving the band's sound its essential foundation.",
      quote: "The bass is where harmony meets rhythm—it anchors the spirit and power of the song."
    },
    // 18. Kudzaishe Mazonde
    {
      id: "kudzaishe-mazonde",
      name: "Kudzaishe Mazonde",
      part: "Alto",
      vocalPart: "alto",
      category: "alto",
      departmentRole: "Assistant Director • Management Team",
      country: "Zimbabwe",
      image: "assets/images/team/Kudzaishe_Mazonde.jpg",
      isLeadership: true,
      bio: "Kudzaishe serves as Assistant Director and is part of the Management Team. She has also led the Alto section as its Part Leader.",
      quote: "When voices unite with one pure intention, impossible barriers come tumbling down."
    },
    // 19. Tinashe Mafukidzwa
    {
      id: "tinashe-mafukidzwa",
      name: "Tinashe Mafukidzwa",
      part: "Tenor",
      vocalPart: "tenor",
      category: "tenor",
      departmentRole: "Tenor Vocalist (Former Head of Vocal & Uniforms)",
      country: "Zimbabwe",
      image: "assets/images/team/Tinashe_Mafukidzwa.jpg",
      isLeadership: false,
      bio: "Tinashe is a Tenor vocalist who has served as Head of both the Vocal and Uniforms & Fashion Departments, taking on leadership beyond the stage.",
      quote: "Unity in song creates an unstoppable force of inspiration."
    },
    // 20. Devine Chinyama
    {
      id: "devine-chinyama",
      name: "Devine Chinyama",
      part: "Soprano",
      vocalPart: "soprano",
      category: "soprano",
      departmentRole: "Soprano Vocalist (Former Head of Uniforms)",
      country: "Zimbabwe",
      image: "assets/images/team/Devine_Chinyama.jpg",
      isLeadership: false,
      bio: "Devine is a Soprano vocalist with an impressive range and agility. She previously served as Head of the Uniforms and Fashion Department.",
      quote: "Singing with clarity, joy, and reverence brings deep fulfillment."
    },
    // 21. Rejoice Jesine Mangena
    {
      id: "rejoice-mangena",
      name: "Rejoice Jesine Mangena",
      part: "Alto",
      vocalPart: "alto",
      category: "alto",
      departmentRole: "Alto Vocalist",
      country: "Zimbabwe",
      image: "assets/images/team/Rejoice_Jesine_Mangena.jpg",
      isLeadership: false,
      bio: "Jesine is one of our powerful Altos, bringing strength and character to the ensemble's harmonies.",
      quote: "Music heals what words alone cannot reach. Grace fills every gap."
    },
    //  22. Rachael Akinhanmi
    {
      id: "rachael-akinhanmi",
      name: "Rachael Akinhanmi",
      part: "Media and Marketing Director",
      vocalPart: "management",
      category: "management",
      departmentRole: "HOD - Marketing and Media Department",
      country: "Nigeria",
      image: "assets/images/team/Rachael_Akinhanmi.jpg",
      isLeadership: true,
      bio: "Rachael drives our media and marketing efforts, from managing our social platforms and creating content to promoting our events and engagements.",
      quote: "Visual beauty communicates the spirit of our music before a single note is heard."
    },
    // 23. Wesley Emmanuel Wende
    {
      id: "wesley-wende",
      name: "Wesley Emmanuel Wende",
      part: "Drums",
      vocalPart: "instrumentalist",
      category: "musicians",
      departmentRole: "HOD - IT Department • Drummer",
      country: "Liberia",
      image: "assets/images/team/Wesley_Emmanuel_Wende.jpg",
      isLeadership: true,
      bio: "Wesley sits behind the drums, keeping the ensemble anchored to the tempo and giving our performances their rhythmic pulse.",
      quote: "Rhythm is the pulse of our worship; it drives our collective heartbeat."
    },
    // 24. Recida Faith Sarno
    {
      id: "recida-sarno",
      name: "Recida Faith Sarno",
      part: "Alto",
      vocalPart: "alto",
      category: "alto",
      departmentRole: "Alto Vocalist",
      country: "Liberia",
      image: "assets/images/team/Recida_Faith_Sarno.jpg",
      isLeadership: false,
      bio: "Recida is an Alto vocalist whose rich tone and strong vocal ability add depth to the ensemble's harmonies.",
      quote: "When purpose meets musical talent, the atmosphere shifts completely."
    },
    // 25. Caren Lawi
    {
      id: "caren-lawi",
      name: "Caren Lawi",
      part: "Soprano",
      vocalPart: "soprano",
      category: "soprano",
      departmentRole: "Soprano Vocalist",
      country: "Tanzania",
      image: "assets/images/team/Caren_Lawi.jpg",
      isLeadership: false,
      bio: "Caren brings an impressive vocal range to the Soprano section, adding a fresh sound and dimension to the ensemble.",
      quote: "Harmony is a reflection of community: living, breathing, and singing as one."
    },
    // 26. Ruth Magamche
    {
      id: "ruth-magamche",
      name: "Ruth Magamche",
      part: "Drums",
      vocalPart: "instrumentalist",
      category: "musicians",
      departmentRole: "Drummer • Instrumental Team",
      country: "Cameroon",
      image: "assets/images/team/Ruth_Magamche.jpg",
      isLeadership: false,
      bio: "Ruth is part of our Instrumental Team as a Drummer, bringing her own rhythm and musical expression to the ensemble.",
      quote: "Dynamic sensitivity behind the kit lets the message and the melody soar."
    }
  ],

  // History & Milestones (Corrected to December 5, 2024 founding)
  history: [
    {
      period: "December 5, 2024",
      title: "The Genesis & Foundation",
      tagline: "Started on December 5, 2024",
      description: "Melodies of Grace was officially founded on December 5, 2024, when Founder Zolani Clarence Mpofu and a passionate circle of young international vocalists and musicians united to create a premier musical ensemble combining African vocal majesty, symphonic precision, and spiritual devotion."
    },
    {
      period: "Early 2025",
      title: "Sound Crafting & Intensive Clinics",
      tagline: "Forging the MOG Identity",
      description: "Months of intensive vocal masterclasses, harmonic experimentation, and rhythm section clinics. The group forged its signature sound—effortlessly shifting from rich traditional polyphony to contemporary arrangements with full live band."
    },
    {
      period: "2025",
      title: "The Breakthrough Concerts & Outreach",
      tagline: "A Sold-Out Revelation",
      description: "MOG presented landmark live concerts and fellowship outreach ministrations before electric audiences, establishing the ensemble as a recognized artistic and spiritual force across university campuses and regional communities."
    },
    {
      period: "2026 & Beyond",
      title: "Self-Composed Original Repertoire & Live Recordings",
      tagline: "Live Album & Global Stages",
      description: "Now writing and recording original self-composed songs while hosting major live events including 'He Sees He Answers, We Praise', 'Worship Night at Kingdomcity', and the Sharda Christian Fellowship Live Concert."
    }
  ],

  // Photo Gallery
  gallery: [
    {
      id: "gal-1",
      title: "Ensemble Unity — Live Stage",
      category: "Performances",
      src: "assets/images/gallery/1.jpg",
      caption: "The full MOG family on stage in the signature Sand Khaki performance tees."
    },
    {
      id: "gal-2",
      title: "Sisterhood & Harmony",
      category: "Styles",
      src: "assets/images/gallery/2.jpg",
      caption: "Ensemble vocalists showcasing the official brand apparel and joyful fellowship."
    },
    {
      id: "gal-3",
      title: "Stage Elevation",
      category: "Performances",
      src: "assets/images/gallery/3.jpg",
      caption: "Vocalists during a climactic crescendo at our live concert."
    },
    {
      id: "gal-4",
      title: "Concert Lights & Worship",
      category: "Events",
      src: "assets/images/gallery/4.jpg",
      caption: "Vibrant stage moments filled with passion and atmosphere."
    },
    {
      id: "gal-5",
      title: "Vocal Rehearsal Focus",
      category: "Behind the Scenes",
      src: "assets/images/gallery/5.jpg",
      caption: "Intense rehearsal sessions where harmonies are sculpted and polished."
    },
    {
      id: "gal-6",
      title: "Ensemble Fellowship & Joy",
      category: "Official Photos",
      src: "assets/images/gallery/6.jpg",
      caption: "Spontaneous laughter and genuine connection between section rehearsals."
    },
    {
      id: "gal-7",
      title: "Acoustic Reflection",
      category: "Performances",
      src: "assets/images/gallery/7.jpg",
      caption: "Capturing delicate acoustic moments of contemplative worship."
    },
    {
      id: "gal-8",
      title: "Modern Elegance & Brand",
      category: "Styles",
      src: "assets/images/gallery/8.jpg",
      caption: "Blending contemporary streetwear fashion with high-art musical discipline."
    },
    {
      id: "gal-9",
      title: "Sectional Precision",
      category: "Behind the Scenes",
      src: "assets/images/gallery/9.jpg",
      caption: "Vocal warm-ups and sectional blend checks before stepping onto the stage."
    },
    {
      id: "gal-10",
      title: "Radiant Camaraderie",
      category: "Official Photos",
      src: "assets/images/gallery/10.jpg",
      caption: "The radiant energy that defines the youth and vibrancy of MOG."
    },
    {
      id: "gal-11",
      title: "Curtain Call Triumph",
      category: "Performances",
      src: "assets/images/gallery/11.jpg",
      caption: "Final bow after an unforgettable evening of praise and musical excellence."
    },
    {
      id: "gal-concert-hero",
      title: "Milestone Concert Finale",
      category: "Debut Concert",
      src: "assets/images/concert/DSC_5891.jpg",
      caption: "Historic full ensemble portrait at our live concert stage."
    }
  ],

  // Real Events using authentic flyers
  events: {
    upcoming: [
      {
        id: "event-campus-tours",
        title: "Sing to the Lord a New Song",
        subtitle: "Church & Campus Outreach Tour 2026 (Psalm 96:1)",
        date: "Currently On Tour — 2026 Season",
        time: "University & Church Services",
        venue: "Campuses & Churches Across Delhi NCR & Beyond",
        city: "Delhi NCR & Across North India",
        flyer: "assets/images/flyers/campus_tours_outreach.jpg",
        description: "'Sing to the Lord a new song; sing to the Lord, all the earth.' (Psalm 96:1). Melodies of Grace is currently on tour bringing choral dynamism, vocal workshops, and vibrant worship directly to university campuses, student fellowships, and regional churches.",
        status: "Currently Touring",
        price: "Ministry Outreach / Open for Invitations",
        ticketUrl: "connect.html#booking",
        featured: true,
        contactPhones: ["+91 93114 06305", "+91 93112 31098", "+91 96670 24366"]
      }
    ],
    past: [
      {
        id: "event-worship-night-kingdomcity",
        title: "Worship Night with Melodies of Grace",
        subtitle: "Atmospheric Praise & Intimate Fellowship",
        date: "Saturday, May 23, 2026",
        time: "5:30 PM",
        venue: "Kingdomcity Hub, Green Park",
        city: "New Delhi, India",
        flyer: "assets/images/flyers/worship_night_kingdomcity.jpg",
        description: "Join Melodies of Grace for an immersive evening of high-energy praise and deep, contemplative worship in the heart of New Delhi. Open to all believers, students, and lovers of choral music.",
        status: "Free Entry / RSVP",
        price: "Free Entry / Registration Recommended",
        ticketUrl: "connect.html#booking",
        featured: true,
        contactPhones: ["+91 93114 06305"]
      }
    ],
    past: [
      // 1. Newly Added Flyer: Sharda Christian Fellowship Live Performance (Done & Dusted)
      {
        id: "past-freshers-scf-2026",
        title: "Sharda Christian Fellowship — Freshers Welcome",
        subtitle: "Melodies of Grace Performing Live!",
        date: "Thursday, September 17 • 4:40 PM – 6:10 PM",
        venue: "APJ Abdul Kalam Auditorium, Room 005, Block 3, Sharda University",
        city: "Greater Noida, UP, India",
        flyer: "assets/images/flyers/freshers_welcome_fellowship_scf.jpg",
        status: "Done & Dusted",
        recap: "Melodies of Grace performed live at the Sharda Christian Fellowship Freshers Welcome Fellowship! An electrifying afternoon welcoming new university students through uplifting gospel praise, vibrant rhythms, and choral fellowship.",
        contacts: ["+91 92896 24692", "+231 77 590 4195"]
      },
      // 2. He Sees, He Answers Live Recording
      {
        id: "past-he-sees-live-recording",
        title: "He Sees, He Answers, We Praise",
        subtitle: "Live Concert & Audio-Visual Recording",
        date: "May 2, 2026",
        venue: "YMCA Programme Centre",
        city: "Greater Noida, UP, India",
        flyer: "assets/images/flyers/live_recording_he_sees_he_answers.jpg",
        status: "Done & Dusted",
        recap: "A historic, sold-out live concert & audio-visual album recording! Packed to capacity at the YMCA Greater Noida, Melodies of Grace ministered 14 choral anthems with a full live band and guest ministers to overwhelming acclaim."
      },
      // 3. African Students Fellowship Christmas Concert
      {
        id: "past-christmas-asf",
        title: "African Students Fellowship Christmas Concert",
        subtitle: "Annual Festive Choral Celebration",
        date: "December 20, 2025",
        venue: "Main Auditorium Hall",
        city: "Greater Noida, India",
        flyer: "assets/images/flyers/christmas_concert_asf.jpg",
        status: "Done & Dusted",
        recap: "A glorious holiday celebration uniting African international students and local communities through vibrant African carols, brass, and soaring choir harmonies."
      },
      // 4. Milestone Concert Finale
      {
        id: "past-debut-concert",
        title: "The Historic Live Concert",
        subtitle: "Ensemble Landmark Stage",
        date: "May 2, 2024",
        venue: "Auditorium Main Stage",
        city: "Greater Noida / Delhi NCR",
        flyer: "assets/images/concert/DSC_5891.jpg",
        status: "Done & Dusted",
        recap: "A landmark milestone featuring 14 original choral arrangements, an electrifying rhythm section, and an emotional standing ovation from a capacity auditorium."
      }
    ]
  },

  // Auditions & Recruitment Hub
  auditions: {
    isOpen: true,
    title: "Auditions: Be Part of Our Crew in Praise",
    subtitle: "Melodies of Grace is looking for passionate, committed vocalists and instrumentalists to join our growing ensemble family.",
    flyer: "assets/images/flyers/audition_flyer.png",
    rolesLookingFor: [
      {
        category: "Vocalists",
        parts: ["Soprano", "Alto", "Tenor", "Bass"],
        desc: "Pitch accuracy, ear for harmony, vocal blending, and expressive stage delivery."
      },
      {
        category: "Instrumentalists",
        parts: ["Keyboards / Piano", "Drums & Percussion", "Bass Guitar", "Strings / Violin", "Lead / Acoustic Guitar"],
        desc: "Rhythmic consistency, worship sensitivity, fluency in contemporary gospel & African genres."
      }
    ],
    timeline: {
      status: "Registration Open",
      venue: "Greater Noida / Delhi NCR & Online Pre-Screening",
      contacts: ["+91 93114 06305", "+91 93112 31098", "+91 96670 24366"],
      email: "melodiesofgrace9@gmail.com"
    },
    process: [
      {
        step: "01",
        name: "Online Audition Request",
        detail: "Send your details via our Audition Form or directly through WhatsApp (+91 93114 06305)."
      },
      {
        step: "02",
        name: "Audio / Video Submission",
        detail: "Share a 60-second video clip singing an a cappella hymn or demonstrating your instrument."
      },
      {
        step: "03",
        name: "Live Ensemble Audition",
        detail: "Attend an in-person vocal/instrumental blend session with Director Zolani and the section leads."
      },
      {
        step: "04",
        name: "Ensemble Induction",
        detail: "Successful candidates are welcomed into MOG, receive official band gear, and start rehearsals."
      }
    ],
    requirements: [
      "Demonstrated vocal pitch accuracy, tonal control, or instrumental fluency",
      "Ability to hear and hold your harmony part in close multi-part chords",
      "Punctuality, humility, teachability, and commitment to weekly rehearsals",
      "Passion for worship, team camaraderie, and musical excellence",
      "Availability for weekend concerts, tours, and live recordings"
    ],
    closedMessage: "Auditions for the current season are currently closed. Follow @melodiesofgrace3 on Instagram to be notified when the next intake opens!"
  },

  // Official Merchandise (Authentic MOG Tees)
  merchandise: [
    {
      id: "merch-mocha-tee",
      name: "MOG Signature Mocha Oversized Tee",
      category: "Apparel",
      price: 25.00,
      priceInr: 1299,
      priceDisplay: "₹1,299 INR / $25.00 USD",
      image: "assets/images/merch/IMG_4479.jpg",
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      badge: "Best Seller",
      description: "Crafted from luxury 260 GSM heavy combed cotton in signature Mocha Brown. Features puff-printed 'Melodies of Grace' cursive script across the chest, oversized white MOG monogram below, and sleeve insignia. Comfortable drop-shoulder streetwear cut."
    },
    {
      id: "merch-black-tee",
      name: "MOG Classic Noir Black Oversized Tee",
      category: "Apparel",
      price: 25.00,
      priceInr: 1299,
      priceDisplay: "₹1,299 INR / $25.00 USD",
      image: "assets/images/merch/IMG_4488.jpg",
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      badge: "Signature Collection",
      description: "Deep obsidian black heavyweight cotton tee with crisp white high-density screen-printed branding. Perfect for both rehearsals and everyday style. Durable, shrink-resistant, and ultra-soft."
    },
    {
      id: "merch-khaki-tee",
      name: "MOG Concert Heritage Sand Khaki Tee",
      category: "Apparel",
      price: 25.00,
      priceInr: 1299,
      priceDisplay: "₹1,299 INR / $25.00 USD",
      image: "assets/images/gallery/2.jpg",
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      badge: "Concert Heritage Edition",
      description: "The historic concert edition tee in warm sand khaki with sage green and gold MOG monogram. The exact signature design worn by the ensemble during our milestone Debut Concert."
    }
  ]
};

// Export to window for global multi-page access
if (typeof window !== "undefined") {
  window.mogData = mogData;
}
