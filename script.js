    const fullQuestionPool = [
        {
            question: "Who is the main protagonist in Naruto?",
            a: "Sasuke Uchiha",
            b: "Kakashi Hatake",
            c: "Naruto Uzumaki",
            d: "Itachi Uchiha",
            correct: "c",
        },
        {
            question: "What is the name of the notebook in Death Note?",
            a: "Life Note",
            b: "Dead Book",
            c: "Death Note",
            d: "Hell Note",
            correct: "c",
        },
        {
            question: "Which anime features 'One For All' and 'All For One'?",
            a: "My Hero Academia",
            b: "Attack on Titan",
            c: "Bleach",
            d: "One Piece",
            correct: "a",
        },
        {
            question: "Who wields the sword Ryuko Matoi uses in Kill la Kill?",
            a: "Satsuki Kiryuuin",
            b: "Ryuko Matoi",
            c: "Mako Mankanshoku",
            d: "Ragyo Kiryuuin",
            correct: "b",
        },
        {
            question: "In One Piece, what is the name of Luffy's ship?",
            a: "Going Merry",
            b: "Thousand Sunny",
            c: "Red Force",
            d: "Black Pearl",
            correct: "b",
        },
        {
            question: "Who is the captain of Squad 6 in Bleach?",
            a: "Kenpachi Zaraki",
            b: "Byakuya Kuchiki",
            c: "Toshiro Hitsugaya",
            d: "Aizen Sosuke",
            correct: "b",
        },
        {
            question: "What is the goal of the Survey Corps in Attack on Titan?",
            a: "Protect the King",
            b: "Kill Eren",
            c: "Reclaim land from Titans",
            d: "Guard the inner city",
            correct: "c",
        },
        {
            question: "What is Tanjiro’s sister’s name in Demon Slayer?",
            a: "Mitsuri",
            b: "Kanao",
            c: "Nezuko",
            d: "Shinobu",
            correct: "c",
        },
        {
            question: "Who is the main character in Tokyo Ghoul?",
            a: "Arima Kishou",
            b: "Touka Kirishima",
            c: "Kaneki Ken",
            d: "Hideyoshi Nagachika",
            correct: "c",
        },
        {
            question: "Which anime is set inside a virtual MMORPG world?",
            a: "No Game No Life",
            b: "Sword Art Online",
            c: "Overlord",
            d: "Konosuba",
            correct: "b",
        },
        {
            question: "Which anime features the character Edward Elric?",
            a: "Fullmetal Alchemist",
            b: "Naruto",
            c: "Bleach",
            d: "Fairy Tail",
            correct: "a",
        },
        {
            question: "What is the power source of Goku in Dragon Ball Z?",
            a: "Chakra",
            b: "Ki",
            c: "Reiryoku",
            d: "Nen",
            correct: "b",
        },
        {
            question: "Which anime is known for the phrase 'I am gonna be King of the Pirates!'?",
            a: "Naruto",
            b: "Bleach",
            c: "One Piece",
            d: "Dragon Ball",
            correct: "c",
        },
        {
            question: "Who is the author of the manga 'Death Note'?",
            a: "Eiichiro Oda",
            b: "Tite Kubo",
            c: "Tsugumi Ohba",
            d: "Masashi Kishimoto",
            correct: "c",
        },
        {
            question: "What is the main setting of Sword Art Online?",
            a: "Virtual MMORPG",
            b: "High school",
            c: "Space station",
            d: "Post-apocalyptic world",
            correct: "a",
        },
        {
            question: "Which anime features the character Levi Ackerman?",
            a: "Attack on Titan",
            b: "Tokyo Ghoul",
            c: "Naruto",
            d: "Bleach",
            correct: "a",
        },
        {
            question: "What is the Shinigami’s weapon called in Bleach?",
            a: "Zanpakuto",
            b: "Bankai",
            c: "Katanas",
            d: "Soul Reaper",
            correct: "a",
        },
        {
            question: "In Demon Slayer, what is Tanjiro's special breathing technique?",
            a: "Water Breathing",
            b: "Fire Breathing",
            c: "Wind Breathing",
            d: "Thunder Breathing",
            correct: "a",
        },
        {
            question: "What is the signature move of Naruto Uzumaki?",
            a: "Rasengan",
            b: "Chidori",
            c: "Kamehameha",
            d: "Bankai",
            correct: "a",
        },
        {
            question: "Which anime features a cat named Luna?",
            a: "Sailor Moon",
            b: "My Hero Academia",
            c: "One Piece",
            d: "Dragon Ball Z",
            correct: "a",
        },
        {
            question: "What is the profession of Light Yagami in Death Note?",
            a: "Student",
            b: "Detective",
            c: "Lawyer",
            d: "Teacher",
            correct: "a",
        },
        {
            question: "In My Hero Academia, who is known as 'All Might'?",
            a: "Toshinori Yagi",
            b: "Izuku Midoriya",
            c: "Katsuki Bakugo",
            d: "Shoto Todoroki",
            correct: "a",
        },
        {
            question: "Which anime features a giant humanoid creature called a Titan?",
            a: "Attack on Titan",
            b: "Tokyo Ghoul",
            c: "Naruto",
            d: "Fairy Tail",
            correct: "a",
        },
        {
            question: "What kind of creature is Goku in Dragon Ball?",
            a: "Saiyan",
            b: "Ninja",
            c: "Wizard",
            d: "Demon",
            correct: "a",
        },
        {
            question: "In One Piece, who is the cook of the Straw Hat Pirates?",
            a: "Zoro",
            b: "Sanji",
            c: "Nami",
            d: "Franky",
            correct: "b",
        },
        {
            question: "Which anime features 'Alchemists' searching for the Philosopher’s Stone?",
            a: "Fullmetal Alchemist",
            b: "Bleach",
            c: "Naruto",
            d: "Hunter x Hunter",
            correct: "a",
        },
        {
            question: "In Tokyo Ghoul, what does Kaneki Ken become?",
            a: "Ghoul",
            b: "Human",
            c: "Titan",
            d: "Shinigami",
            correct: "a",
        },
        {
            question: "Who is the author of 'Naruto' manga?",
            a: "Masashi Kishimoto",
            b: "Tite Kubo",
            c: "Eiichiro Oda",
            d: "Hajime Isayama",
            correct: "a",
        },
        {
            question: "What is the power system used in Hunter x Hunter?",
            a: "Nen",
            b: "Chakra",
            c: "Ki",
            d: "Reiryoku",
            correct: "a",
        },
        {
            question: "In Fairy Tail, which guild does Natsu belong to?",
            a: "Phantom Lord",
            b: "Sabertooth",
            c: "Fairy Tail",
            d: "Lamia Scale",
            correct: "c",
        },
        {
            question: "Which anime features a 'Quirk' system of superpowers?",
            a: "My Hero Academia",
            b: "Naruto",
            c: "Dragon Ball Z",
            d: "Bleach",
            correct: "a",
        },
        {
            question: "What is the signature move of Goku?",
            a: "Kamehameha",
            b: "Rasengan",
            c: "Bankai",
            d: "Chidori",
            correct: "a",
        },
        {
            question: "Who is the 'God of Death' in Bleach?",
            a: "Aizen Sosuke",
            b: "Ichigo Kurosaki",
            c: "Rukia Kuchiki",
            d: "Shinigami",
            correct: "d",
        },
        {
            question: "In One Piece, what fruit did Luffy eat?",
            a: "Gomu Gomu no Mi",
            b: "Mera Mera no Mi",
            c: "Hie Hie no Mi",
            d: "Gura Gura no Mi",
            correct: "a",
        },
        {
            question: "Which anime features the 'Titan Shifter' power?",
            a: "Attack on Titan",
            b: "Tokyo Ghoul",
            c: "Naruto",
            d: "One Piece",
            correct: "a",
        },
        {
            question: "Who is the main antagonist in Naruto?",
            a: "Orochimaru",
            b: "Madara Uchiha",
            c: "Pain (Nagato)",
            d: "Itachi Uchiha",
            correct: "c",
        },
        {
            question: "What anime features a giant robot called Eva?",
            a: "Neon Genesis Evangelion",
            b: "Gundam",
            c: "Code Geass",
            d: "Ghost in the Shell",
            correct: "a",
        },
        {
            question: "Which anime has characters called 'Shinobi'?",
            a: "Naruto",
            b: "Bleach",
            c: "One Piece",
            d: "Dragon Ball Z",
            correct: "a",
        },
        {
            question: "What is the name of the pirate crew in One Piece?",
            a: "Straw Hat Pirates",
            b: "Blackbeard Pirates",
            c: "Red Hair Pirates",
            d: "Whitebeard Pirates",
            correct: "a",
        },
        {
            question: "Which anime features the fight for the 'Holy Grail'?",
            a: "Fate/stay night",
            b: "Bleach",
            c: "Naruto",
            d: "Fullmetal Alchemist",
            correct: "a",
        },
        {
            question: "What is the theme of the anime 'Death Note'?",
            a: "Justice and morality",
            b: "Magic and fantasy",
            c: "Sports competition",
            d: "Cooking",
            correct: "a",
        },
        {
            question: "Who is the protagonist in 'Your Name'?",
            a: "Taki Tachibana",
            b: "Mitsuha Miyamizu",
            c: "Kaneki Ken",
            d: "Naruto Uzumaki",
            correct: "a",
        },
        {
            question: "Which anime features 'Soul Reapers'?",
            a: "Bleach",
            b: "Naruto",
            c: "Dragon Ball Z",
            d: "One Piece",
            correct: "a",
        },
        {
            question: "What is the signature weapon of Ichigo Kurosaki?",
            a: "Zanpakuto",
            b: "Kunai",
            c: "Naginata",
            d: "Katana",
            correct: "a",
        },
        {
            question: "Which anime features a character named Mikasa Ackerman?",
            a: "Attack on Titan",
            b: "Tokyo Ghoul",
            c: "Naruto",
            d: "My Hero Academia",
            correct: "a",
        },
        {
            question: "Who is the mentor of Naruto Uzumaki?",
            a: "Jiraiya",
            b: "Kakashi Hatake",
            c: "Iruka Umino",
            d: "Tsunade",
            correct: "a",
        },
        {
            question: "Which anime features the phrase 'Plus Ultra'?",
            a: "My Hero Academia",
            b: "Naruto",
            c: "Bleach",
            d: "One Piece",
            correct: "a",
        },
    ];

    // This function shufles 10 random questions //
    function getRandomQuestions(pool, count) {
        const shuffled = pool.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    const quizData = getRandomQuestions(fullQuestionPool, 10);

    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");
    const progressText = document.getElementById("progress");

    let currentQuiz = 0;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;

        if (progressText) {
            progressText.innerText = `Question ${currentQuiz + 1} of ${quizData.length}`;
        }
    }

    function deselectAnswers() {
        answerEls.forEach((el) => (el.checked = false));
    }

    function getSelected() {
        let selected = undefined;
        answerEls.forEach((el) => {
            if (el.checked) selected = el.id;
        });
        return selected;
    }

    submitBtn.addEventListener("click", () => {
        const answer = getSelected();
        if (answer) {
            if (answer === quizData[currentQuiz].correct) score++;
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `
                    <h2 style="text-align: center;">🎉 You got ${score}/${quizData.length} correct!</h2>
                    <button onclick="location.reload()">Try Again</button>
                `;
            }
        }
    });