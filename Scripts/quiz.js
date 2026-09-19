const easyQuestions = [
    { q: "Who is called the father of modern computers?", ans: "Charles Babbage", wrong: ["Thomas Edison"] },
    { q: "Who is considered to be the first programmer?", ans: "Ada Lovelace", wrong: ["Steve Jobs"] },
    { q: "Which is the main processing device of a computer?", ans: "CPU", wrong: ["RAM"] },
    { q: "Who is the father of the Internet?", ans: "Vint Cerf", wrong: ["Bill Gates"] },
    { q: "What is the full form of HTML?", ans: "Hypertext Markup Language", wrong: ["High Textile Markup Link"] },
    { q: "Which is used to style and design a web page?", ans: "CSS", wrong: ["C++"] },
    { q: "What is JavaScript mainly used for?", ans: "Adding interactivity to websites", wrong: ["Creating website designs"] },
    { q: "What are the three colors in the RGB color model?", ans: "Red, Green, Blue", wrong: ["Red, Gray, Black"] },
    { q: "What type of software is Photoshop?", ans: "Graphics Design", wrong: ["Video Editing"] },
    { q: "Which image format can have no background in graphics design?", ans: "PNG", wrong: ["JPG"] },
    { q: "What is the full form of FPS in video editing?", ans: "Frames Per Second", wrong: ["Files Per Second"] },
    { q: "Which company owns the video editing software Premiere Pro?", ans: "Adobe", wrong: ["Microsoft"] },
    { q: "Which waves does Wi-Fi use for communication?", ans: "Radio waves", wrong: ["Sound waves"] },
    { q: "What type of site is Facebook?", ans: "Social Media", wrong: ["Search Engine"] },
    { q: "Which protocol is required to send emails?", ans: "SMTP", wrong: ["HTTP"] },
    { q: "What is a computer virus?", ans: "Harmful program", wrong: ["Hardware issue"] },
    { q: "Which company owns the Android operating system?", ans: "Google", wrong: ["Apple"] },
    { q: "What type of platform is YouTube?", ans: "Video Sharing", wrong: ["Audio Calling"] },
    { q: "What is needed to open a PDF file?", ans: "PDF Reader", wrong: ["Adobe Photoshop"] },
    { q: "Which is the largest key on a keyboard?", ans: "Spacebar", wrong: ["Enter"] },
    { q: "Who invented the computer mouse?", ans: "Douglas Engelbart", wrong: ["Bill Gates"] },
    { q: "What type of device is a pen drive?", ans: "Storage device", wrong: ["Processing device"] },
    { q: "Which is the temporary memory of a computer?", ans: "RAM", wrong: ["Hard Disk"] },
    { q: "1 Byte = how many bits?", ans: "8 bits", wrong: ["4 bits"] },
    { q: "What is MS Word used for?", ans: "Writing and creating documents", wrong: ["Editing videos"] },
    { q: "Which software is used for browsing websites?", ans: "Google Chrome", wrong: ["Photoshop"] },
    { q: "What is the timeline used for in video editing?", ans: "Arranging and cutting clips", wrong: ["Increasing sound"] },
    { q: "Which is an online meeting app?", ans: "Zoom", wrong: ["Notepad"] },
    { q: "What is PowerPoint used for?", ans: "Creating presentations", wrong: ["Coding"] },
    { q: "What is the correct procedure to turn off a computer?", ans: "Shut Down", wrong: ["Power Off Switch"] },
    { q: "What happens when you press 'Ctrl + Z' on a keyboard?", ans: "Undo (return to previous state)", wrong: ["Save"] },
    { q: "What is the function of 'Ctrl + S' on a keyboard?", ans: "Save", wrong: ["Select All"] },
    { q: "What is the full form of AI?", ans: "Artificial Intelligence", wrong: ["Automatic Intelligence"] },
    { q: "Which is an example of a search engine?", ans: "Google", wrong: ["Windows"] },
    { q: "What does DPI stand for in graphics design?", ans: "Dots Per Inch", wrong: ["Data Per Inch"] },
    { q: "Which is an example of an operating system?", ans: "Linux", wrong: ["Python"] },
    { q: "What is the range of Bluetooth?", ans: "Short distance (approx. 10 meters)", wrong: ["Unlimited"] },
    { q: "What is the full form of QR Code?", ans: "Quick Response Code", wrong: ["Quality Read Code"] },
    { q: "What is the process of starting a computer called?", ans: "Booting", wrong: ["Loading"] },
    { q: "1 Megabyte (MB) = how many Kilobytes?", ans: "1024 KB", wrong: ["1000 KB"] }
];

const mediumQuestions = [
    { q: "Which was the first fully electronic computer?", ans: "ENIAC", wrong: ["UNIVAC", "Abacus"] },
    { q: "Which generation used Integrated Circuits?", ans: "Third Generation", wrong: ["First Generation", "Second Generation"] },
    { q: "Which command is used to print in the Python programming language?", ans: "print()", wrong: ["printf()", "Console.WriteLine()"] },
    { q: "Which integer type is used to declare a variable in C programming?", ans: "int", wrong: ["string", "float"] },
    { q: "Which is correct to make text red in CSS?", ans: "color: red;", wrong: ["text-color: red;", "font-color: red;"] },
    { q: "Which tag creates a table row in HTML?", ans: "<tr>", wrong: ["<td>", "<table>"] },
    { q: "What is the CMYK color mode mainly used for?", ans: "For printing work", wrong: ["For web design", "For video editing"] },
    { q: "What is the full form of UI in UI/UX design?", ans: "User Interface", wrong: ["User Interaction", "Universal Interface"] },
    { q: "What is the main difference between a vector image and a raster image?", ans: "Vector images do not pixelate when zoomed in", wrong: ["Vectors have fewer colors", "Rasters are smaller in size"] },
    { q: "What is the transition between two clips in video editing called?", ans: "Transition", wrong: ["Keyframe", "Render"] },
    { q: "What is it called to remove a green background and replace it with another background?", ans: "Chroma Key (Green Screen)", wrong: ["Color Grading", "Masking"] },
    { q: "What is the pixel size of 4K resolution?", ans: "3840 x 2160", wrong: ["1920 x 1080", "1280 x 720"] },
    { q: "How is a Phishing attack primarily conducted?", ans: "By sending fake links and emails", wrong: ["By breaking hardware", "By hacking Wi-Fi passwords"] },
    { q: "What is the main difference between HTTP and HTTPS?", ans: "HTTPS has SSL security", wrong: ["HTTPS works faster", "HTTP only works on files"] },
    { q: "What is the full form of LAN?", ans: "Local Area Network", wrong: ["Large Area Network", "Logical Area Network"] },
    { q: "What is the full form of IP Address?", ans: "Internet Protocol Address", wrong: ["Internal Process Address", "Internet Path Address"] },
    { q: "Which open-source software is used for 3D modeling and animation?", ans: "Blender", wrong: ["After Effects", "Figma"] },
    { q: "What is the point that saves positions at specific intervals in animation called?", ans: "Keyframe", wrong: ["Timeline", "Frame Rate"] },
    { q: "What is primarily created using Adobe Illustrator?", ans: "Vector logos and vector art", wrong: ["Web servers", "Pixel art"] },
    { q: "Which technology is ChatGPT based on?", ans: "Large Language Model (LLM)", wrong: ["Graphics Engine", "Database System"] },
    { q: "What does .com stand for in a domain name?", ans: "Commercial", wrong: ["Company", "Communication"] },
    { q: "Which central device connects computers in a network?", ans: "Switch/Hub", wrong: ["Modem", "Hard Disk"] },
    { q: "Who is the creator of the C++ programming language?", ans: "Bjarne Stroustrup", wrong: ["Dennis Ritchie", "Guido van Rossum"] },
    { q: "What is Git used for?", ans: "Version control and code management", wrong: ["Video rendering", "Image editing"] },
    { q: "Which tag is used to link an external CSS file to a web page?", ans: "<link>", wrong: ["<script>", "<style>"] },
    { q: "Which one is a video file format?", ans: "MP4", wrong: ["MP3", "PNG"] },
    { q: "Which one is an audio file format?", ans: "WAV", wrong: ["SVG", "GIF"] },
    { q: "Which is the file extension for Illustrator?", ans: ".ai", wrong: [".psd", ".pdf"] },
    { q: "Which is Photoshop's native file extension?", ans: ".psd", wrong: [".ai", ".eps"] },
    { q: "Which is an example of cloud storage?", ans: "Google Drive", wrong: ["MS Excel", "RAM"] }
];

const hardQuestions = [
    { q: "What is the main difference between '===' and '==' in JavaScript?", ans: "=== checks both value and data type", wrong: ["== works faster", "=== only checks numbers", "There is no difference"] },
    { q: "What is the correct command to select all data from a table in SQL?", ans: "SELECT * FROM table_name;", wrong: ["GET ALL table_name;", "EXTRACT * FROM table_name;", "FETCH ALL;"] },
    { q: "Values in a Python list can be changed, but values in what cannot be changed?", ans: "Tuple", wrong: ["Dictionary", "Set", "Array"] },
    { q: "Which direct tag is used to play video in HTML5?", ans: "<video>", wrong: ["<media>", "<embed>", "<play>"] },
    { q: "How many bits are in an IPv4 address and an IPv6 address?", ans: "IPv4 = 32 bits, IPv6 = 128 bits", wrong: ["IPv4 = 16 bits, IPv6 = 64 bits", "IPv4 = 64 bits, IPv6 = 256 bits", "IPv4 = 128 bits, IPv6 = 256 bits"] },
    { q: "What is the primary objective of a DDoS attack?", ans: "To crash a server by sending excessive traffic", wrong: ["To steal passwords", "To delete files", "To hack monitors"] },
    { q: "What is the main purpose of DNS?", ans: "To convert domain names into IP Addresses", wrong: ["To encrypt emails", "To upload files faster", "To keep website backups"] },
    { q: "What is Adobe After Effects primarily famous for?", ans: "Motion graphics and VFX", wrong: ["3D building printing", "Audio mixing", "Vector logos"] },
    { q: "What is the full form of 'LUT' in Color Grading?", ans: "Look-Up Table", wrong: ["Light-Up Texture", "Level-Up Tone", "Linear Utility Template"] },
    { q: "What is the full form of SVG in graphics interface format?", ans: "Scalable Vector Graphics", wrong: ["Standard Vector Graphics", "Sequential Visual Graphics", "System Visual Grid"] },
    { q: "Where is the computer's BIOS stored?", ans: "In the ROM chip", wrong: ["In RAM", "In the Hard Disk", "In Cache Memory"] },
    { q: "Which is faster between SRAM and DRAM?", ans: "SRAM", wrong: ["DRAM", "Both are equal", "Depends on the CPU"] },
    { q: "What does a pointer hold in C programming language?", ans: "Memory address of another variable", wrong: ["Text data only", "Floating point numbers", "File objects"] },
    { q: "What is a 'Deadlock' in an operating system?", ans: "Two or more processes waiting indefinitely for each other's resources", wrong: ["Computer crash", "Forgetting the password", "Hard disk failure"] },
    { q: "What is Supervised Learning in Machine Learning?", ans: "Training a model using labeled data", wrong: ["Learning without any data", "Working only with images", "Configuring servers"] },
    { q: "At which layer of the OSI model does a router operate?", ans: "Network Layer (Layer 3)", wrong: ["Data Link Layer", "Physical Layer", "Application Layer"] },
    { q: "What is the primary responsibility of a firewall?", ans: "To block unauthorized network access", wrong: ["To increase computer speed", "To delete viruses", "To zip files"] },
    { q: "Who is the creator of the Python programming language?", ans: "Guido van Rossum", wrong: ["Dennis Ritchie", "James Gosling", "Tim Berners-Lee"] },
    { q: "Who is the primary creator of the C language and in which lab was it created?", ans: "Dennis Ritchie (AT&T Bell Labs)", wrong: ["Ken Thompson (IBM)", "Bjarne Stroustrup (MIT)", "Steve Jobs (Apple)"] },
    { q: "What was the name of the first web browser on the World Wide Web?", ans: "WorldWideWeb (later Nexus)", wrong: ["Mosaic", "Internet Explorer", "Netscape Navigator"] }
];

const extremeQuestions = [
    { q: "What is the correct order of the 7 layers of the OSI model (from bottom to top)?", ans: "Physical, Data Link, Network, Transport, Session, Presentation, Application", wrong: ["Application, Session, Network, Transport, Physical, Data Link, Presentation", "Physical, Network, Data Link, Transport, Presentation, Session, Application", "Data Link, Physical, Network, Transport, Session, Presentation, Application"] },
    { q: "Which type of encryption does the RSA algorithm use in cryptography?", ans: "Asymmetric Encryption (Public/Private Key)", wrong: ["Symmetric Encryption", "Hashing Only", "Block Cipher System"] },
    { q: "When will the output of an XOR gate be 1 (High)?", ans: "When an odd number of inputs are 1", wrong: ["When all inputs are equal", "When all inputs are 0", "When any one input is 0"] },
    { q: "Time complexity O(n log n) applies to which of the following sorting algorithms?", ans: "Merge Sort", wrong: ["Bubble Sort", "Selection Sort", "Insertion Sort"] },
    { q: "What is the minimum number of bits a Flip-Flop can store in digital circuits?", ans: "1 bit", wrong: ["8 bits", "4 bits", "16 bits"] },
    { q: "What does the 'Von Neumann Bottleneck' indicate in computer architecture?", ans: "Speed limit of data transfer between CPU and Memory", wrong: ["Processor overheating issue", "Graphics card memory crisis", "Decrease in monitor refresh rate"] },
    { q: "What does 'Kernel Panic' mean in the Linux kernel?", ans: "A severe, unrecoverable error in the operating system", wrong: ["User entering an incorrect password", "Network disconnection", "Software update failure"] },
    { q: "How does Virtual DOM work in React JS?", ans: "Keeps a copy of the real DOM in memory and updates only the changed parts", wrong: ["Deletes data directly from the server", "Processes CSS files", "Refreshes the database"] },
    { q: "What is the main task of 'Ray Tracing' technology in 3D video rendering?", ans: "Calculating realistic reflections and shadows of light", wrong: ["Compressing video files", "Reducing audio noise", "Adding color to frames"] },
    { q: "What is the 2's Complement value of '-5' in binary number system (in an 8-bit register)?", ans: "11111011", wrong: ["11110101", "10000101", "00000101"] }
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

    document.getElementById('question').innerText = `Question: ${qData.q}`;

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
        document.getElementById('feedback').innerText = 'Correct answer';
        document.getElementById('feedback').style.color = '#22c55e';
    } else {
        document.getElementById('feedback').innerText = `Incorrect. 
            Correct answer: ${correct}`;
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