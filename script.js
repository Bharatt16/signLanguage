let home = document.querySelector('.home');
let aboutUs = document.querySelector('.aboutUs');
let howItWorks = document.querySelector('.howItWorks');
let main = document.querySelector('main');

howItWorks.addEventListener('click', ()=>{
      main.innerHTML=` <div class="workflowWrapper">
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
});

home.addEventListener('click',()=>{
    main.innerHTML=` <div class="headingContainer">
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
      
      
      `
});

aboutUs.addEventListener('click',()=>{
    main.innerHTML=``;
});