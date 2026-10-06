const easyQuestions = [
        { q: "আধুনিক কম্পিউটারের জনক কাকে বলা হয়?", ans: "চার্লস ব্যাবেজ", wrong: ["থমাস এডিসন"] },
        { q: "প্রথম প্রোগ্রামার হিসেবে কাকে গণ্য করা হয়?", ans: "অ্যাডা লাভলেস", wrong: ["স্টিভ জবস"] },
        { q: "কম্পিউটারের প্রধান প্রসেসর ডিভাইস কোনটি?", ans: "CPU", wrong: ["RAM"] },
        { q: "ইন্টারনেটের জনক কে?", ans: "ভিন্টন সার্ফ", wrong: ["বিল গেটস"] },
        { q: "HTML-এর পূর্ণরূপ কী?", ans: "Hypertext Markup Language", wrong: ["High Textile Markup Link"] },
        { q: "ওয়েব পেজের ডিজাইন সুন্দর করতে কোনটি ব্যবহৃত হয়?", ans: "CSS", wrong: ["C++"] },
        { q: "জাভাস্ক্রিপ্ট প্রধানত কিসের জন্য ব্যবহৃত হয়?", ans: "ওয়েবসাইটে ইন্টারঅ্যাক্টিভিটি যোগ করতে", wrong: ["ওয়েবসাইটের ডিজাইন তৈরি করতে"] },
        { q: "RGB কালার মডেলের তিনটি রং কী কী?", ans: "Red, Green, Blue", wrong: ["Red, Gray, Black"] },
        { q: "ফটোশপ কোন ধরণের সফটওয়্যার?", ans: "গ্রাফিক্স ডিজাইন", wrong: ["ভিডিও এডিটিং"] },
        { q: "গ্রাফিক্স ডিজাইনে ব্যাকগ্রাউন্ড ছাড়া ছবির ফরম্যাট কোনটি?", ans: "PNG", wrong: ["JPG"] },
        { q: "ভিডিও এডিটিংয়ে FPS-এর পূর্ণরূপ কী?", ans: "Frames Per Second", wrong: ["Files Per Second"] },
        { q: "ভিডিও এডিটিং সফটওয়্যার Premiere Pro কোন কোম্পানির?", ans: "Adobe", wrong: ["Microsoft"] },
        { q: "Wi-Fi যোগাযোগের জন্য কোন তরঙ্গ ব্যবহার করে?", ans: "রেডিও তরঙ্গ", wrong: ["শব্দ তরঙ্গ"] },
        { q: "ফেসবুক কোন ধরনের সাইট?", ans: "সোশ্যাল মিডিয়া", wrong: ["সার্চ ইঞ্জিন"] },
        { q: "ইমেইল পাঠাতে কোন প্রোটোকল প্রয়োজন?", ans: "SMTP", wrong: ["HTTP"] },
        { q: "কম্পিউটার ভাইরাস কী?", ans: "ক্ষতিকর প্রোগ্রাম", wrong: ["হার্ডওয়্যারের সমস্যা"] },
        { q: "Android অপারেটিং সিস্টেম কোন কোম্পানির?", ans: "Google", wrong: ["Apple"] },
        { q: "ইউটিউব কোন ধরনের প্ল্যাটফর্ম?", ans: "ভিডিও শেয়ারিং", wrong: ["অডিও কলিং"] },
        { q: "PDF ফাইল ওপেন করতে কোনটি লাগে?", ans: "PDF Reader", wrong: ["Adobe Photoshop"] },
        { q: "কিবোর্ডে সবচেয়ে বড় কি (Key) কোনটি?", ans: "Spacebar", wrong: ["Enter"] },
        { q: "কম্পিউটার মাউস কে উদ্ভাবন করেন?", ans: "ডগলাস এঙ্গেলবার্ট", wrong: ["বিল গেটস"] },
        { q: "পেনড্রাইভ কোন ধরনের ডিভাইস?", ans: "স্টোরেজ ডিভাইস", wrong: ["প্রসেসিং ডিভাইস"] },
        { q: "কম্পিউটারের অস্থায়ী মেমোরি কোনটি?", ans: "RAM", wrong: ["Hard Disk"] },
        { q: "১ বাইট = কত বিট?", ans: "৮ বিট", wrong: ["৪ বিট"] },
        { q: "MS Word কোন কাজের জন্য ব্যবহৃত হয়?", ans: "লেখালেখি ও ডকুমেন্ট তৈরি", wrong: ["ভিডিও এডিট"] },
        { q: "ওয়েবসাইট ব্রাউজ করার সফটওয়্যার কোনটি?", ans: "Google Chrome", wrong: ["Photoshop"] },
        { q: "ভিডিও এডিটিংয়ে টাইমলাইন কী কাজে লাগে?", ans: "ক্লিপ সাজাতে ও কাটতে", wrong: ["সাউন্ড বাড়াতে"] },
        { q: "অনলাইন মিটিং অ্যাপ কোনটি?", ans: "Zoom", wrong: ["Notepad"] },
        { q: "পাওয়ারপয়েন্ট কি কাজে লাগে?", ans: "প্রেেজেন্টেশন তৈরি", wrong: ["কোডিং করতে"] },
        { q: "কম্পিউটার বন্ধ করার সঠিক প্রক্রিয়া কোনটি?", ans: "Shut Down", wrong: ["Power Off Switch"] },
        { q: "কিবোর্ডে 'Ctrl + Z' দিলে কী হয়?", ans: "Undo (আগের অবস্থায় ফেরা)", wrong: ["Save"] },
        { q: "কিবোর্ডে 'Ctrl + S' এর কাজ কী?", ans: "Save করা", wrong: ["Select All"] },
        { q: "AI-এর পূর্ণরূপ কী?", ans: "Artificial Intelligence", wrong: ["Automatic Intelligence"] },
        { q: "কোনটি সার্চ ইঞ্জিনের উদাহরণ?", ans: "Google", wrong: ["Windows"] },
        { q: "গ্রাফিক্স ডিজাইনে DPI দিয়ে কী বোঝায়?", ans: "Dots Per Inch", wrong: ["Data Per Inch"] },
        { q: "অপারেটিং সিস্টেমের উদাহরণ কোনটি?", ans: "Linux", wrong: ["Python"] },
        { q: "ব্লুটুথের রেঞ্জ কতটুকু হয়ে থাকে?", ans: "স্বল্প দূরত্ব (প্রায় ১০ মিটার)", wrong: ["আনলিমিটেড"] },
        { q: "QR Code-এর পূর্ণরূপ কী?", ans: "Quick Response Code", wrong: ["Quality Read Code"] },
        { q: "কম্পিউটার চালুর প্রক্রিয়াকে কী বলে?", ans: "Booting", wrong: ["Loading"] },
        { q: "১ মেগাবাইট (MB) = কত কিলোবাইট?", ans: "১০২৪ KB", wrong: ["১০০০ KB"] }  
];

const mediumQuestions = [
         { q: "প্রথম পূর্ণাঙ্গ ইলেকট্রনিক কম্পিউটার কোনটি ছিল?", ans: "ENIAC", wrong: ["UNIVAC", "Abacus"] },
        { q: "ইন্টিগ্রেটেড সার্কিট কোন প্রজন্মে ব্যবহৃত হয়?", ans: "তৃতীয় প্রজন্ম", wrong: ["প্রথম প্রজন্ম", "দ্বিতীয় প্রজন্ম"] },
        { q: "Python প্রোগ্রামিং ভাষায় প্রিন্ট করার কমান্ড কোনটি?", ans: "print()", wrong: ["printf()", "Console.WriteLine()"] },
        { q: "C প্রোগ্রামিং ভাষায় ভ্যারিয়েবল ডিক্লেয়ার করতে পূর্ণসংখ্যার টাইপ কোনটি?", ans: "int", wrong: ["string", "float"] },
        { q: "CSS-এ কোনো টেক্সট লাল করতে কোনটি সঠিক?", ans: "color: red;", wrong: ["text-color: red;", "font-color: red;"] },
        { q: "HTML-এ টেবিলের সারি (Row) তৈরির ট্যাগ কোনটি?", ans: "<tr>", wrong: ["<td>", "<table>"] },
        { q: "CMYK রঙের মোড প্রধানত কিসের জন্য ব্যবহৃত হয়?", ans: "প্রিন্টিং বা ছাপা কাজের জন্য", wrong: ["ওয়েব ডিজাইনের জন্য", "ভিডিও এডিটিংয়ের জন্য"] },
        { q: "UI/UX ডিজাইনে UI-এর পূর্ণরূপ কী?", ans: "User Interface", wrong: ["User Interaction", "Universal Interface"] },
        { q: "ভেক্টর ইমেজ ও রাস্টার ইমেজের প্রধান পার্থক্য কী?", ans: "ভেক্টর জুম করলেও ফেটে যায় না", wrong: ["ভেক্টরে কালার কম থাকে", "রাস্টার সাইজে ছোট"] },
        { q: "ভিডিও এডিটিংয়ে দুটি ক্লিপের মাঝে পরিবর্তনকে কী বলে?", ans: "Transition", wrong: ["Keyframe", "Render"] },
        { q: "সবুজ ব্যাকগ্রাউন্ড সরিয়ে অন্য ব্যাকগ্রাউন্ড বসানোকে কী বলে?", ans: "Chroma Key (Green Screen)", wrong: ["Color Grading", "Masking"] },
        { q: "4K রেজুলেশনের পিক্সেল সাইজ কত?", ans: "3840 x 2160", wrong: ["1920 x 1080", "1280 x 720"] },
        { q: "ফিশিং (Phishing) অ্যাটাক মূলত কীভাবে করা হয়?", ans: "নকল লিংক ও ইমেইল পাঠিয়ে", wrong: ["হার্ডওয়্যার ভেঙে", "ওয়াইফাই পাসওয়ার্ড হ্যাক করে"] },
        { q: "HTTP এবং HTTPS-এর মূল পার্থক্য কী?", ans: "HTTPS-এ SSL সিকিউরিটি থাকে", wrong: ["HTTPS দ্রুত কাজ করে", "HTTP শুধু ফাইলে কাজ করে"] },
        { q: "LAN-এর পূর্ণরূপ কী?", ans: "Local Area Network", wrong: ["Large Area Network", "Logical Area Network"] },
        { q: "IP Address-এর পূর্ণরূপ কী?", ans: "Internet Protocol Address", wrong: ["Internal Process Address", "Internet Path Address"] },
        { q: "3D মডেলিং ও অ্যানিমেশন তৈরির ওপেন সোর্স সফটওয়্যার কোনটি?", ans: "Blender", wrong: ["After Effects", "Figma"] },
        { q: "অ্যানিমেশনে নির্দিষ্ট সময় পরপর পজিশন সেভ করার বিন্দুকে কী বলে?", ans: "Keyframe", wrong: ["Timeline", "Frame Rate"] },
        { q: "Adobe Illustrator দিয়ে মূলত কী তৈরি করা হয়?", ans: "ভেক্টর লোগো ও ভেক্টর আর্ট", wrong: ["ওয়েব সার্ভার", "পিক্সেল আর্ট"] },
        { q: "ChatGPT কোন প্রযুক্তির ওপর ভিত্তি করে তৈরি?", ans: "Large Language Model (LLM)", wrong: ["Graphics Engine", "Database System"] },
        { q: "ডোমেইন নামের .com দিয়ে কী বোঝায়?", ans: "Commercial", wrong: ["Company", "Communication"] },
        { q: "নেটওয়ার্কে কম্পিউটার যুক্ত করার কেন্দ্রীয় ডিভাইস কোনটি?", ans: "Switch/Hub", wrong: ["Modem", "Hard Disk"] },
        { q: "C++ প্রোগ্রামিং ভাষার উদ্ভাবক কে?", ans: "Bjarne Stroustrup", wrong: ["Dennis Ritchie", "Guido van Rossum"] },
        { q: "Git কিসের জন্য ব্যবহৃত হয়?", ans: "ভার্সন কন্ট্রোল ও কোড ম্যানেজমেন্ট", wrong: ["ভিডিও রেন্ডারিং", "ছবি এডিটিং"] },
        { q: "ওয়েব পেজে বাহ্যিক CSS যুক্ত করার ট্যাগ কোনটি?", ans: "<link>", wrong: ["<script>", "<style>"] },
        { q: "ভিডিও ফাইল ফরম্যাট কোনটি?", ans: "MP4", wrong: ["MP3", "PNG"] },
        { q: "অডিও ফাইল ফরম্যাট কোনটি?", ans: "WAV", wrong: ["SVG", "GIF"] },
        { q: "ইলাস্ট্রেটরের ফাইল এক্সটেনশন কোনটি?", ans: ".ai", wrong: [".psd", ".pdf"] },
        { q: "ফটোশপের নেটিভ ফাইল এক্সটেনশন কোনটি?", ans: ".psd", wrong: [".ai", ".eps"] },
        { q: "ক্লাউড স্টোরেজের উদাহরণ কোনটি?", ans: "Google Drive", wrong: ["MS Excel", "RAM"] } 
];
const hardQuestions = [
        { q: "JavaScript-এ '===' এবং '==' এর মধ্যে প্রধান পার্থক্য কী?", ans: "=== ভ্যালু ও ডাটা টাইপ দুটিই চেক করে", wrong: ["== দ্রুত কাজ করে", "=== শুধু নাম্বার চেক করে", "কোনো পার্থক্য নেই"] },
        { q: "SQL-এ টেবিল থেকে সব ডাটা সিলেক্ট করার সঠিক কমান্ড কোনটি?", ans: "SELECT * FROM table_name;", wrong: ["GET ALL table_name;", "EXTRACT * FROM table_name;", "FETCH ALL;"] },
        { q: "Python-এ লিস্টের মান পরিবর্তন করা যায় কিন্তু কীসের মান পরিবর্তন করা যায় না?", ans: "Tuple", wrong: ["Dictionary", "Set", "Array"] },
        { q: "HTML5-এ ভিডিও প্লে করার জন্য সরাসরি ট্যাগ কোনটি?", ans: "<video>", wrong: ["<media>", "<embed>", "<play>"] },
        { q: "IPv4 অ্যাড্রেস কত বিটের এবং IPv6 অ্যাড্রেস কত বিটের?", ans: "IPv4 = ৩২ বিট, IPv6 = ১২৮ বিট", wrong: ["IPv4 = ১৬ বিট, IPv6 = ৬৪ বিট", "IPv4 = ৬৪ বিট, IPv6 = ২৫৬ বিট", "IPv4 = ১২৮ বিট, IPv6 = ২৫৬ বিট"] },
        { q: "DDoS অ্যাটাকের মূল উদ্দেশ্য কী?", ans: "সার্ভারে অতিরিক্ত ট্রাফিক পাঠিয়ে অচল করা", wrong: ["পাসওয়ার্ড চুরি করা", "ফাইল ডিলিট করা", "মনিটর হ্যাক করা"] },
        { q: "DNS-এর মূল কাজ কী?", ans: "ডোমেইন নামকে IP Address-এ রূপান্তর করা", wrong: ["ইমেইল এনক্রিপ্ট করা", "ফাইল দ্রুত আপলোড করা", "ওয়েবসাইট ব্যাকআপ রাখা"] },
        { q: "Adobe After Effects মূলত কিসের জন্য বিখ্যাত?", ans: "মোশন গ্রাফিক্স ও ভিএফএক্স (VFX)", wrong: ["3D বিল্ডিং প্রিন্টিং", "অডিও মিক্সিং", "ভেক্টর লোগো"] },
        { q: "Colour Grading-এ 'LUT'-এর পূর্ণরূপ কী?", ans: "Look-Up Table", wrong: ["Light-Up Texture", "Level-Up Tone", "Linear Utility Template"] },
        { q: "গ্রাফিক্স ইন্টারফেসের ফরম্যাট SVG-এর পূর্ণরূপ কী?", ans: "Scalable Vector Graphics", wrong: ["Standard Vector Graphics", "Sequential Visual Graphics", "System Visual Grid"] },
        { q: "কম্পিউটারের BIOS কোথায় সংরক্ষিত থাকে?", ans: "ROM চিপে", wrong: ["RAM-এ", "Hard Disk-এ", "Cache Memory-তে"] },
        { q: "SRAM এবং DRAM-এর মধ্যে কোনটি দ্রুতগতির?", ans: "SRAM", wrong: ["DRAM", "দুটিই সমান", "নির্ভর করে CPU-র ওপর"] },
        { q: "C প্রোগ্রামিং ভাষায় পয়েন্টার কী ধরে রাখে?", ans: "অন্য ভ্যারিয়েবলের মেমোরি অ্যাড্রেস", wrong: ["শুধু টেক্সট ডাটা", "ফ্লোটিং পয়েন্ট নাম্বার", "ফাইল অবজেক্ট"] },
        { q: "অপারেটিং সিস্টেমে 'Deadlock' কী?", ans: "দুই বা ততধিক প্রসেস একে অপরের রিসোর্সের জন্য আটকে থাকা", wrong: ["কম্পিউটার ক্র্যাশ করা", "পাসওয়ার্ড ভুলে যাওয়া", "হার্ডডিস্ক নষ্ট হওয়া"] },
        { q: "মেশিন লার্নিংয়ে Supervised Learning কী?", ans: "লেবেলযুক্ত ডাটা দিয়ে মডেলকে ট্রেনিং দেওয়া", wrong: ["কোনো ডাটা ছাড়া শেখা", "শুধু ইমেজ নিয়ে কাজ করা", "সার্ভার কনফিগার করা"] },
        { q: "OSI মডেলের কত নম্বর লেয়ারে রাউটার কাজ করে?", ans: "Network Layer (Layer 3)", wrong: ["Data Link Layer", "Physical Layer", "Application Layer"] },
        { q: "ফায়ারওয়াল-এর প্রাথমিক দায়িত্ব কী?", ans: "অননুমোদিত নেটওয়ার্ক অ্যাক্সেস আটকানো", wrong: ["কম্পিউটারের স্পিড বাড়ানো", "ভাইরাস ডিলিট করা", "ফাইল জিপ করা"] },
        { q: "Python প্রোগ্রামিং ভাষার উদ্ভাবক কে?", ans: "Guido van Rossum", wrong: ["Dennis Ritchie", "James Gosling", "Tim Berners-Lee"] },
        { q: "C ভাষার মূল উদ্ভাবক কে এবং এটি কোন ল্যাবে তৈরি হয়?", ans: "Dennis Ritchie (AT&T Bell Labs)", wrong: ["Ken Thompson (IBM)", "Bjarne Stroustrup (MIT)", "Steve Jobs (Apple)"] },
        { q: "ওয়ার্ল্ড ওয়াইড ওয়েবের প্রথম ওয়েব ব্রাউজারের নাম কী ছিল?", ans: "WorldWideWeb (পরে Nexus)", wrong: ["Mosaic", "Internet Explorer", "Netscape Navigator"] }
];

const extremeQuestions = [
        { q: "OSI মডেলের ৭টি লেয়ারের সঠিক ক্রম কোনটি (নিচ থেকে উপরে)?", ans: "Physical, Data Link, Network, Transport, Session, Presentation, Application", wrong: ["Application, Session, Network, Transport, Physical, Data Link, Presentation", "Physical, Network, Data Link, Transport, Presentation, Session, Application", "Data Link, Physical, Network, Transport, Session, Presentation, Application"] },
        { q: "ক্রিপ্টোগ্রাফিতে RSA অ্যালগরিদম কোন ধরনের এনক্রিপশন ব্যবহার করে?", ans: "Asymmetric Encryption (Public/Private Key)", wrong: ["Symmetric Encryption", "Hashing Only", "Block Cipher System"] },
        { q: "XOR গেটের আউটপুট ১ (High) হবে কখন?", ans: "ইনপুট দুটি বিজোড়সংখ্যক ১ হলে", wrong: ["সব ইনপুট সমান হলে", "সব ইনপুট ০ হলে", "যেকোনো একটি ০ হলে"] },
        { q: "টাইম কমপ্লেক্সিটি O(n log n) নিচের কোন সর্টিং অ্যালগরিদমের ক্ষেত্রে প্রযোজ্য?", ans: "Merge Sort", wrong: ["Bubble Sort", "Selection Sort", "Insertion Sort"] },
        { q: "ডিজিটাল সার্কিটে ফ্লিপ-ফ্লপ (Flip-Flop) সর্বনিম্ন কত বিট ডাটা ধরে রাখতে পারে?", ans: "১ বিট", wrong: ["৮ বিট", "৪ বিট", "১৬ বিট"] },
        { q: "কম্পিউটার আর্কিটেকচারে 'Von Neumann Bottleneck' কী নির্দেশ করে?", ans: "CPU এবং Memory-র মধ্যে ডাটা স্থানান্তরের গতিসীমা", wrong: ["প্রসেসরের ওভারহিটিং সমস্যা", "গ্রাফিক্স কার্ডের মেমোরি সংকট", "মনিটরের রিফ্রেশ রেট কমে যাওয়া"] },
        { q: "Linux কার্নেলে 'Kernel Panic' বলতে কী বোঝায়?", ans: "অপারেটিং সিস্টেমের একটি মারাত্মক রিকভারি-অযোগ্য ভুল", wrong: ["ইউজার পাসওয়ার্ড ভুল দেওয়া", "নেটওয়ার্ক বিচ্ছিন্ন হওয়া", "সফ্টওয়্যার আপডেট ব্যর্থ হওয়া"] },
        { q: "React JS-এ Virtual DOM কীভাবে কাজ করে?", ans: "মেমোরিতে রিয়েল DOM-এর কপি রেখে শুধু পরিবর্তিত অংশ আপডেট করে", wrong: ["সার্ভার থেকে সরাসরি ডাটা ডিলিট করে", "CSS ফাইল প্রসেস করে", "ডাটাবেজ রিফ্রেশ করে"] },
        { q: "3D ভিডিও রেন্ডারিংয়ে 'Ray Tracing' প্রযুক্তির মূল কাজ কী?", ans: "আলোর বাস্তবসম্মত প্রতিফলন ও ছায়া গণনা করা", wrong: ["ভিডিও ফাইল ছোট করা", "অডিও নয়েজ কমানো", "ফ্রেমে কালার দেওয়া"] },
        { q: "বাইনারি নম্বর সিস্টেমে '-5' এর '2's Complement' মান কত (৮-বিট রেজিস্টারে)?", ans: "11111011", wrong: ["11110101", "10000101", "00000101"] }
];
const allQuestions = [
    ...easyQuestions.map(q => ({ ...q, level: 'easy', badge: 'Easy', optionsCount: 2 })),
    ...mediumQuestions.map(q => ({ ...q, level: 'medium', badge: 'Medium', optionsCount: 3 })),
    ...hardQuestions.map(q => ({ ...q, level: 'hard', badge: 'Hard', optionsCount: 4 })),
    ...extremeQuestions.map(q => ({ ...q, level: 'extreme', badge: 'Extreme', optionsCount: 5 }))
];

let currentIndex = 0;
let score = 0;

function startGame() {
    currentIndex = 0;
    score = 0;
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    if (currentIndex >= allQuestions.length) {
        finishQuiz();
        return;
    }

    const qData = allQuestions[currentIndex];

    document.getElementById('q-count').innerText = currentIndex + 1;
    document.getElementById('score').innerText = score;
    document.getElementById('feedback').innerText = '';

    const badgeEl = document.getElementById('level-badge');
    badgeEl.innerText = qData.badge;
    badgeEl.className = `badge badge-${qData.level}`;

    document.getElementById('question').innerText = `প্রশ্ন: ${qData.q}`;

    const wrongNeeded = qData.optionsCount - 1;
    let options = [qData.ans, ...qData.wrong.slice(0, wrongNeeded)];
    options.sort(() => Math.random() - 0.5);

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, qData.ans);
        container.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (selected === correct) {
        score++;
        document.getElementById('score').innerText = score;
        document.getElementById('feedback').innerText = 'সঠিক উত্তর';
        document.getElementById('feedback').style.color = '#22c55e';
    } else {
        document.getElementById('feedback').innerText = `ভুল হয়েছে। 
                সঠিক উত্তর: ${correct}`;
        document.getElementById('feedback').style.color = '#ef4444';
    }

    currentIndex++;
    setTimeout(showQuestion, 1000);
}

function finishQuiz() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('user-form-screen').classList.remove('hidden');
}

function generateCertificate(event) {
    event.preventDefault();

    const name = document.getElementById('u-name').value;
    const uClass = document.getElementById('u-class').value;
    const section = document.getElementById('u-section').value;
    const roll = document.getElementById('u-roll').value;

    document.getElementById('c-name').innerText = name;
    document.getElementById('c-class').innerText = uClass;
    document.getElementById('c-section').innerText = section;
    document.getElementById('c-roll').innerText = roll;
    document.getElementById('c-score').innerText = score;

    document.getElementById('user-form-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
}