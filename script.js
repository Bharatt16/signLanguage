let home = document.querySelector('.home');
let aboutUs = document.querySelector('.aboutUs');
let howItWorks = document.querySelector('.howItWorks');
let main = document.querySelector('main');
let startBtn = document.querySelector('.startBtn');




const pageContent = {
  home: ` <div class="headingContainer">
        <div class="signHeading">
          <img
            src="./utilities/handsign-A.png"
            class="handSignTitle lower"
            alt="S"
          />
          <img src="./utilities/handsign-Y.png" class="handSignTitle" alt="Y" />
          <img
            src="./utilities/handsign-G.png"
            class="handSignTitle lower"
            alt="G"
          />
          <img src="./utilities/handsign-N.png" class="handSignTitle" alt="N" />
          <img
            src="./utilities/handsign-A.png"
            class="handSignTitle lower"
            alt="A"
          />
          <img src="./utilities/handsign-L.png" class="handSignTitle" alt="L" />
        </div>

        <div class="headingWrapper">
          <h2 class="headingContent">
            Communicate with Deaf and Hard of Hearing People
          </h2>

          <p>
            Studying asl promotes better awareness of and sensitivity to the
            deaf and hard of hearing community. SYGNAL is all you need to
            communicate with deaf and hard of hearing people.
          </p>
        </div>
      </div>

      <div class="boxContent">
        <h1>Our Real-Time Sign Language Translator Solution</h1>
        <div class="boxContainer">
          <div class="boxes">
            <h3>Gesture Detection</h3>
            <p>
              Ours ystem accuratelydetects specific hand gestures that
              correspond to individual letters of the alphabet.
            </p>
          </div>
          <div class="boxes">
            <h3>ML Model Prediction</h3>
            <p>
              As ophisticatedMachineLearning (ML) model processes the detected
              gestures to predict each corresponding alphabet with high
              accuracy.
            </p>
          </div>
          <div class="boxes">
            <h3>Alphabet Sequencing</h3>
            <p>
              Recogniseda lphabets are intelligently sequenced and stored to
              form coherent words and phrases.
            </p>
          </div>
          <div class="boxes">
            <h3>Sentence to Speech</h3>
            <p>
              Once ac ompletephraseor sentence is formed and validated, it is
              then converted into spoken language using a text-to-speech engine.
            </p>
          </div>
        </div>
      </div>
      
      
      
      <div class="handsSigns">
        <h2>Hands Signs</h2>
        <img src="./utilities/handSigns.png" alt="handsSigns">
      </div>


      <div class="cameraWrapper">
        <h1>space for camera</h1>
        <div class="cameraBox"></div>
        <button>start</button>
      </div>
      
      
      `,
  aboutUs: ` <div class="about-container">
    <h1>Our Vision</h1>
    <p class="intro">
      We are building <strong>SYGNAL</strong>, a real-time sign language translator that bridges
      the communication gap between the Deaf/Hard-of-Hearing community and the hearing world.
    </p>

    <div class="about-grid">
      <div class="about-card">
        <h2>What We Do</h2>
        <p>
          Our system detects <strong>hand gestures</strong> using a camera,
          processes them with an <strong>AI model</strong> to predict the signs,
          and then converts the text into speech using an <strong>AI-powered voice engine</strong>.
        </p>
      </div>

      <div class="about-card">
        <h2>Why It Matters</h2>
        <p>
          Communication is a fundamental right. By enabling conversations between
          sign language users and non-signers, we promote
          <strong>inclusion, accessibility, and understanding</strong>.
        </p>
      </div>

      <div class="about-card">
        <h2>Our Vision</h2>
        <p>
          We believe technology should empower people. With SYGNAL, we aim to create
          a world where communication barriers disappear, and everyone can connect freely.
        </p>
      </div>
    </div>
  </div>`,
  howItWorks: ` <div class="workflowWrapper">
        <h1>Workflow: From Gesture to Spoken Sentence</h1>
        <div class="stepsContainer">
            <div class="steps">
                <img src="./utilities/camera.svg" alt="camera">
                <div class="contentWrapper">
                    <h2>Capture</h2>
                    <p>A camera captures individual hand gestures, one at a time, serving as the initial input for the system.</p>
                </div>
            </div>
            <div class="steps">
                <img src="./utilities/search.svg" alt="search">
                <div class="contentWrapper">
                    <h2>Detect</h2>
                    <p>Our Machine Learning model processes the captured gesture to identify the corresponding letter (A-Z) from the American Sign Language (ASL) alphabet.
                        </p>
                </div>
            </div>
            <div class="steps">
                <img src="./utilities/sequence.svg" alt="sequence">
                <div class="contentWrapper">
                    <h2>Sequence</h2>
                    <p>The detected letters are stored in memory and arranged in the correct chronological order, forming a sequence of alphabets.
                    </p>
                </div>
            </div>
            <div class="steps">
                <img src="./utilities/alphabet.svg" alt="alphabet">
                <div class="contentWrapper">
                    <h2>Forms Words</h2>
                    <p>Letters are grouped into complete words upon the detection of a space or a significant pause in gestures, indicating the end of a word.
                    </p>
                </div>
            </div>
            <div class="steps">
                <img src="./utilities/thought.svg" alt="thoughts">
                <div class="contentWrapper">
                    <h2>Form Sentence</h2>
                    <p>Multiple wordsarethenlogically grouped together to construct a complete and meaningful sentence.
                    </p>
                </div>
            </div>
            <div class="steps">
                <img src="./utilities/speak.svg" alt="speak">
                <div class="contentWrapper">
                    <h2>Speak</h2>
                    <p>The complete sentence is finally spoken aloud using an integrated text-to-speech engine, providing real-time voice output.
                    </p>
                </div>
            </div>
        </div>
      </div>`
};


document.getElementById("navbar").addEventListener("click", function(event) {
  const page = event.target.dataset.page;
  if (page && pageContent.hasOwnProperty(page)) {
    main.innerHTML = pageContent[page];
  }

   // remove active class from all nav items
   document.querySelectorAll("#navbar div").forEach(item => {
    item.classList.remove("active");
  });

  // add active class to the clicked one
  event.target.classList.add("active");

});


// Start Now button click
startBtn.addEventListener("click", function() {
  main.innerHTML = pageContent["home"];

  setTimeout(() => {
    const cameraSection = document.querySelector(".cameraWrapper");
    if (cameraSection) {
      cameraSection.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
});


const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menuContainer");

// toggle menu when hamburger clicked
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// close menu when any nav option is clicked
menu.querySelectorAll("div, .startBtn").forEach(item => {
  item.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});


//Animations----->


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* === HOME SECTION === */
gsap.from(".signHeading img", {
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2,
  ease: "back.out(1.7)"
});

gsap.from(".headingWrapper h2", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.8,
  ease: "power2.out"
});

gsap.from(".headingWrapper p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 1,
  ease: "power2.out"
});

gsap.from(".boxContent .boxes", {
  scrollTrigger: {
    trigger: ".boxContent",
    start: "top 30%",  // animate when section comes into view
  },
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power3.out"
});

gsap.from(".handsSigns img", {
  scrollTrigger: {
    trigger: ".handsSigns",
    start: "top 30%",
  },
  scale: 0.5,
  opacity: 0,
  duration: 1.2,
  ease: "elastic.out(1, 0.6)"
});

gsap.from(".cameraWrapper", {
  scrollTrigger: {
    trigger: ".cameraWrapper",
    start: "top 80%",
  },
  opacity: 0,
  y: 80,
  duration: 1.2,
  ease: "power2.out"
});


/* === ABOUT US === */
gsap.from(".about-container h1", {
  scrollTrigger: {
    trigger: ".about-container",
    start: "top 80%",
  },
  y: -40,
  opacity: 0,
  duration: 1
});

gsap.from(".intro", {
  scrollTrigger: {
    trigger: ".about-container",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.3
});

gsap.from(".about-card", {
  scrollTrigger: {
    trigger: ".about-grid",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out"
});


/* === HOW IT WORKS === */
gsap.from(".workflowWrapper h1", {
  scrollTrigger: {
    trigger: ".workflowWrapper",
    start: "top 80%",
  },
  opacity: 0,
  y: -40,
  duration: 1
});

gsap.from(".steps", {
  scrollTrigger: {
    trigger: ".stepsContainer",
    start: "top 80%",
  },
  opacity: 0,
  x: -60,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out"
});




