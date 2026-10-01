# melodies-of-grace
Melodies Of Grace Website
# Melodies of Grace (MOG) — Website Content Editing Guide
*A plain-English guide for non-technical team members and administrators.*

---

## 🌟 Overview: How the Website Works

All website information (member bios, leadership roles, flyers, phone numbers, and Drive links) is centralized in one easy-to-read file:
👉 **[`js/mog-data.js`](js/mog-data.js)**

When you update this file, the changes will **automatically show up** across the website (`team.html`, `about.html`, `gallery-events.html`, `index.html`, etc.) without needing to touch complex HTML or CSS code.

---

## 1. 👥 How to Edit a Team Member

Open [`js/mog-data.js`](js/mog-data.js) in any text editor and scroll down to the `team:` section.

Each member looks like this:

```javascript
{
  id: "blessing-chigutsa",
  name: "Blessing Christine Chigutsa",      // Full Name
  part: "Soprano",                          // Vocal Part or Instrument
  vocalPart: "soprano",                     // Filter Category (soprano, alto, tenor, or instrumentalist)
  category: "soprano",                      
  departmentRole: "Chief Financial Officer (CFO) • Soprano Part Leader", // Leadership role(s)
  country: "Zimbabwe",                      // Country of origin
  image: "assets/images/team/Blessing_Christine_Chigutsa.jpg", // Photo path
  isLeadership: true,                       // true if member is in leadership, false otherwise
  bio: "Blessing leads the Soprano section while serving as our Chief Financial Officer...",
  quote: "Grace and stewardship walk hand in hand."
}
```

### To Change a Member's Details:
- **Change Name:** Simply edit the text inside the quotes for `name: "..."`.
- **Change Vocal Part / Instrument:** Edit `part: "..."`.
- **Change Department Role:** Edit `departmentRole: "..."`.
- **Change Country:** Edit `country: "..."`.
- **Change Bio:** Edit `bio: "..."`.
- **Change Photo:** Place the new photo into the `assets/images/team/` folder (save as `.jpg` or `.png`), and set `image: "assets/images/team/Your_Photo_Name.jpg"`.

---

## 2. ➕ How to Add a New Team Member

To add a new member, copy one of the member blocks in `js/mog-data.js`, paste it at the end of the `team:` array (before the closing `]`), and fill in their information.

**Tip:** Make sure to put a comma `,` between members!

---

## 3. 📞 How to Update Direct Inquiry Phone Numbers

At the top of [`js/mog-data.js`](js/mog-data.js), look for the `config` block:

```javascript
config: {
  phone: "+91 93114 06305",
  directInquiriesPhone: "+919311406305",
  whatsAppNumber: "919311406305", // No spaces or plus sign for WhatsApp links
  bookingEmail: "melodiesofgrace9@gmail.com",
}
```

Change the number inside the quotes and save the file.

---

## 4. 🖼️ How to Add a New Flyer to "Done & Dusted"

1. Place your flyer image into the `assets/images/flyers/` folder (e.g., `my_concert_flyer.jpg`).
2. Open [`js/mog-data.js`](js/mog-data.js) and locate `events: { past: [ ... ] }`.
3. Add a new event entry at the top:

```javascript
{
  id: "past-my-new-event",
  title: "Event Name",
  subtitle: "Concert Subtitle",
  date: "Date of the event",
  venue: "Auditorium / Hall Name",
  city: "City, Country",
  flyer: "assets/images/flyers/my_concert_flyer.jpg",
  status: "Done & Dusted",
  recap: "A short recap celebrating the completed event."
},
```

---

## 5. 📂 How to Update Google Drive Gallery Links

In [`js/mog-data.js`](js/mog-data.js), find these lines near the top:

```javascript
// Google Drive Links for Full Photo & Event Archives
googleDriveTeamPhotos: "https://drive.google.com/drive/folders/1BOJa6Fn6AClE84l_LwaE102ekSdRLDb4",
googleDriveEventsPhotos: "https://drive.google.com/drive/folders/1875mIv14RWVuWqL6kyP_RPzvdpRum34L",
```

Simply replace the links inside the quotes with any new Google Drive folder URLs.

---

## 6. 🌐 Testing Your Changes

1. Open any HTML file (like `index.html` or `team.html`) by double-clicking it to open it in your browser (Google Chrome, Safari, Edge, or Firefox).
2. Refresh the browser page (`Command + R` on Mac, or `F5` on Windows) to see your updates live!
