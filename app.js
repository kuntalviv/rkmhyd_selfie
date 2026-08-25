// ======================================================
// ELEMENTS
// ======================================================

const selfie_btn = document.getElementById("selfie_btn");
const selfie_section = document.getElementById("selfie_taker");

const speech_content = document.getElementById("speech_content");
const speech_main_text = document.getElementById("speech_main_text");

const audio = document.getElementById("speech_audio");

const play_btn = document.getElementById("play_btn");
const pause_btn = document.getElementById("pause_btn");
const stop_btn = document.getElementById("stop_btn");

const toggle_speech_btn =
  document.getElementById("toggle_speech_btn");

const next_btn = document.getElementById("next_btn");
const prev_btn = document.getElementById("prev_btn");


// ======================================================
// SPEECH WORD SPANS
// ======================================================

const paragraphRanges = [
  {
    start: 0,
    end: 4,
    element: document.getElementById("para_1")
  },
  {
    start: 5,
    end: 73,
    element: document.getElementById("para_2")
  },
  {
    start: 74,
    end: 311,
    element: document.getElementById("para_3")
  },
  {
    start: 312,
    end: english_lyrics.length - 1,
    element: document.getElementById("para_4")
  }
];


english_lyrics.forEach((lyric, index) => {
  const span = document.createElement("span");

  span.textContent = lyric.word + " ";
  span.classList.add("word");
  span.dataset.index = index;

  const paragraph = paragraphRanges.find(
    range =>
      index >= range.start &&
      index <= range.end
  );

  if (paragraph) {
    paragraph.element.appendChild(span);
  }
});


const word_spans =
  document.querySelectorAll(".word");


// ======================================================
// SPEECH STATE
// ======================================================

let active_word_index = -1;
let active_paragraph = null;


// ======================================================
// SPEECH PAGE SCROLL HELPER
// ======================================================

const scroll_to_speech = () => {
  const speechTop =
    speech_content.getBoundingClientRect().top +
    window.scrollY;

  window.scrollTo({
    top: speechTop + 100,
    behavior: "smooth"
  });
};


// ======================================================
// RESET SPEECH
// ======================================================

const reset_speech = () => {
  audio.pause();
  audio.currentTime = 0;

  word_spans.forEach(span => {
    span.classList.remove("word-active");
  });

  active_word_index = -1;
  active_paragraph = null;

  // Default mode = full speech
  speech_main_text.classList.remove("follow-speech");

  speech_main_text.scrollTop = 0;

  toggle_speech_btn.textContent = "Follow Speech";
  toggle_speech_btn.disabled = true;
};


// ======================================================
// AUDIO CONTROLS
// ======================================================

play_btn.addEventListener("click", () => {
  scroll_to_speech();
  audio.play();
});


pause_btn.addEventListener("click", () => {
  audio.pause();
});


stop_btn.addEventListener("click", () => {
  reset_speech();
});


audio.addEventListener("play", () => {
  // Follow Speech becomes available while audio is running.
  if (
    !speech_main_text.classList.contains("follow-speech")
  ) {
    toggle_speech_btn.disabled = false;
  }
});


audio.addEventListener("pause", () => {
  // If we're currently showing the full speech,
  // Follow Speech is unavailable while paused.
  if (
    !speech_main_text.classList.contains("follow-speech")
  ) {
    toggle_speech_btn.disabled = true;
  }
});


audio.addEventListener("ended", () => {
  reset_speech();
});


// ======================================================
// SPEECH WORD HIGHLIGHTING
// ======================================================

audio.addEventListener("timeupdate", () => {
  const current_time = audio.currentTime;

  for (let i = 0; i < english_lyrics.length; i++) {
    const current = english_lyrics[i];
    const next = english_lyrics[i + 1];

    if (
      current_time >= current.time &&
      (!next || current_time < next.time)
    ) {
      // Already highlighting this word.
      if (i === active_word_index) {
        break;
      }

      // Remove previous highlight.
      if (active_word_index >= 0) {
        word_spans[active_word_index]
          .classList.remove("word-active");
      }

      active_word_index = i;

      const activeWord =
        word_spans[active_word_index];

      activeWord.classList.add("word-active");


      // ==================================================
      // FOLLOW MODE / TELEPROMPTER
      // ==================================================

      if (
        speech_main_text.classList.contains(
          "follow-speech"
        )
      ) {
        const wordRect =
          activeWord.getBoundingClientRect();

        const containerRect =
          speech_main_text.getBoundingClientRect();

        const scrollThreshold =
          containerRect.top +
          containerRect.height * 0.7;

        if (wordRect.bottom > scrollThreshold) {
          speech_main_text.scrollBy({
            top: containerRect.height * 0.3,
            behavior: "smooth"
          });
        }
      }


      // ==================================================
      // FULL SPEECH MODE
      // ==================================================

      else {
        const paragraph =
          activeWord.closest("p");

        if (
          paragraph &&
          paragraph !== active_paragraph
        ) {
          const paragraphTop =
            paragraph.getBoundingClientRect().top +
            window.scrollY;

          window.scrollTo({
            top: paragraphTop - 150,
            behavior: "smooth"
          });

          active_paragraph = paragraph;
        }
      }

      break;
    }
  }
});


// ======================================================
// FOLLOW SPEECH / VIEW FULL SPEECH
// ======================================================

toggle_speech_btn.addEventListener("click", () => {
  const isCurrentlyFollowing =
    speech_main_text.classList.contains(
      "follow-speech"
    );

  // User is trying to enter Follow mode,
  // but playback isn't running.
  if (!isCurrentlyFollowing && audio.paused) {
    return;
  }


  const isFollowing =
    speech_main_text.classList.toggle(
      "follow-speech"
    );


  toggle_speech_btn.textContent =
    isFollowing
      ? "View Full Speech"
      : "Follow Speech";


  // No word active yet.
  if (active_word_index < 0) {
    return;
  }


  const activeWord =
    word_spans[active_word_index];


  // ==================================================
  // ENTER FOLLOW MODE
  // ==================================================

  if (isFollowing) {
    toggle_speech_btn.disabled = false;

    scroll_to_speech();

    const wordRect =
      activeWord.getBoundingClientRect();

    const containerRect =
      speech_main_text.getBoundingClientRect();

    const target =
      speech_main_text.scrollTop +
      wordRect.top -
      containerRect.top -
      containerRect.height * 0.4;

    speech_main_text.scrollTo({
      top: target,
      behavior: "smooth"
    });
  }


  // ==================================================
  // RETURN TO FULL SPEECH
  // ==================================================

  else {
    const paragraph =
      activeWord.closest("p");

    if (paragraph) {
      const paragraphTop =
        paragraph.getBoundingClientRect().top +
        window.scrollY;

      window.scrollTo({
        top: paragraphTop - 150,
        behavior: "smooth"
      });

      active_paragraph = paragraph;
    }

    // Button now means "Follow Speech".
    toggle_speech_btn.disabled = audio.paused;
  }
});


// ======================================================
// SELFIE STATE
// ======================================================

let selfie_section_states = {
  camera: "IDLE"
};

let media_stream = null;
let video_ele = null;
let capture_btn = null;
let retake_btn = null;
let download_btn = null;
let share_cert_btn = null;
let canvas = null;


// ======================================================
// RESET SELFIE
// ======================================================

const reset_selfie = () => {
  selfie_btn.innerText = "Click a Selfie";


  // ==================================================
  // STOP CAMERA HARDWARE
  // ==================================================

  if (media_stream) {
    media_stream.getTracks().forEach(track => {
      track.stop();
    });

    media_stream = null;
  }


  // ==================================================
  // REMOVE VIDEO
  // ==================================================

  if (video_ele) {
    video_ele.srcObject = null;
    video_ele.remove();
    video_ele = null;
  }


  // ==================================================
  // REMOVE TEMPORARY BUTTONS
  // ==================================================

  if (capture_btn) {
    capture_btn.remove();
    capture_btn = null;
  }

  if (retake_btn) {
    retake_btn.remove();
    retake_btn = null;
  }

  if (download_btn) {
    download_btn.remove();
    download_btn = null;
  }
  if (share_cert_btn) {
    share_cert_btn.remove();
    share_cert_btn = null;
  }


  // ==================================================
  // REMOVE CANVAS
  // ==================================================

  if (canvas) {
    canvas.remove();
    canvas = null;
  }


  selfie_btn.style.display = "inline-block";
  selfie_btn.disabled = false;

  selfie_section_states.camera = "IDLE";
};


// ======================================================
// START CAMERA
// ======================================================

selfie_btn.addEventListener("click", async () => {

  // Stop button behaviour.
  if (selfie_btn.innerText === "Stop") {
    reset_selfie();
    return;
  }

  if (selfie_btn.innerText === "Retake") {
    reset_selfie();
  }


  selfie_btn.innerText = "Stop";

  selfie_section_states.camera =
    "REQUESTING";


  // ==================================================
  // REQUEST CAMERA
  // ==================================================

  try {
    media_stream =
      await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: {
            ideal: 400
          },
          height: {
            ideal: 600
          }
        },

        audio: false
      });

    selfie_section_states.camera =
      "RUNNING";

  } catch (error) {
    alert("Camera Access is required.");

    selfie_section_states.camera =
      "IDLE";

    selfie_btn.innerText =
      "Click a Selfie";

    selfie_btn.disabled = false;

    return;
  }




  // ==================================================
  // CREATE VIDEO ELEMENT
  // ==================================================

  video_ele = document.createElement("video");

  video_ele.autoplay = true;
  video_ele.playsInline = true;
  video_ele.tabIndex = 0;

  video_ele.srcObject = media_stream;

  selfie_section.appendChild(video_ele);

  video_ele.addEventListener("loadedmetadata", () => {
    video_ele.focus();

    video_ele.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
  // ==================================================
  // CREATE CAPTURE BUTTON
  // ==================================================

  capture_btn =
    document.createElement("button");

  capture_btn.classList.add("capture-btn");

  capture_btn.id =
    "capture_btn";

  capture_btn.innerText =
    "Capture";

  selfie_section.appendChild(
    capture_btn
  );

  // ==================================================
  // CAPTURE SELFIE
  // ==================================================

  capture_btn.addEventListener(
    "click",
    async () => {

      // Prevent double capture.
      capture_btn.disabled = true;



      const certificate_template =
        new Image();

      certificate_template.src =
        "./Certificate_Template_Sample.png";



      try {
        await certificate_template.decode();
      } catch (error) {
        console.error(
          "Certificate template could not be loaded.",
          error
        );

        capture_btn.disabled = false;
        return;
      }
      // ==================================================
      // CREATE CANVAS
      // ==================================================

      canvas =
        document.createElement("canvas");

      canvas.id = "canvas";
      canvas.width = certificate_template.naturalWidth;
      canvas.width = certificate_template.naturalHeight;
      canvas.height = 1347;
      const ctx =
        canvas.getContext("2d");



      // ==================================================
      // CANVAS DIMENSIONS
      // ==================================================

      canvas.width =
        certificate_template.naturalWidth;

      canvas.height =
        certificate_template.naturalHeight;


      // ==================================================
      // DRAW TEMPLATE
      // ==================================================

      ctx.drawImage(
        certificate_template,
        0,
        0,
        canvas.width,
        canvas.height
      );


      // ==================================================
      // VIDEO DIMENSIONS
      // ==================================================

      const vWidth =
        video_ele.videoWidth;

      const vHeight =
        video_ele.videoHeight;


      if (!vWidth || !vHeight) {
        console.error(
          "Camera video dimensions are not available."
        );

        capture_btn.disabled = false;
        return;
      }


      // ==================================================
      // CERTIFICATE PHOTO SLOT
      // ==================================================

      const photoX = 115;
      const photoY = 290;

      const photoWidth = 200 * 2;
      const photoHeight = 265 * 2;


      let sx;
      let sy;
      let sw;
      let sh;


      const videoRatio =
        vWidth / vHeight;

      const photoRatio =
        photoWidth / photoHeight;


      // ==================================================
      // CENTER CROP
      // ==================================================

      if (videoRatio > photoRatio) {
        // Video is relatively wider.
        // Crop left and right.

        sh = vHeight;

        sw =
          vHeight * photoRatio;

        sx =
          (vWidth - sw) / 2;

        sy = 0;

      } else {
        // Video is relatively taller.
        // Crop top and bottom.

        sw = vWidth;

        sh =
          vWidth / photoRatio;

        sx = 0;

        sy =
          (vHeight - sh) / 2;
      }


      // ==================================================
      // DRAW SELFIE
      // ==================================================

      // ==========================================
      // DRAW ROUNDED SELFIE
      // ==========================================

      const cornerRadius = 30;
      const borderWidth = 8;

      // Save current canvas state
      ctx.save();

      // Create rounded rectangle clipping path
      ctx.beginPath();

      ctx.roundRect(
        photoX,
        photoY,
        photoWidth,
        photoHeight,
        cornerRadius
      );

      ctx.clip();

      // Draw selfie inside rounded rectangle
      ctx.drawImage(
        video_ele,

        // Source
        sx,
        sy,
        sw,
        sh,

        // Destination
        photoX,
        photoY,
        photoWidth,
        photoHeight
      );

      // Remove clipping region
      ctx.restore();


      // ==========================================
      // DRAW BORDER
      // ==========================================

      ctx.save();

      ctx.beginPath();

      ctx.roundRect(
        photoX,
        photoY,
        photoWidth,
        photoHeight,
        cornerRadius
      );

      ctx.lineWidth = borderWidth;
      ctx.strokeStyle = "#d4af37";

      ctx.stroke();

      ctx.restore();


      const user_name =
        document.getElementById("user_name").value;

      ctx.font = "bold 40px Georgia";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillText(
        user_name,
        950,
        410
      );


      // ==================================================
      // STOP CAMERA
      // ==================================================

      if (media_stream) {
        media_stream
          .getTracks()
          .forEach(track => {
            track.stop();
          });

        media_stream = null;
      }


      // ==================================================
      // REMOVE VIDEO
      // ==================================================

      if (video_ele) {
        video_ele.srcObject = null;

        video_ele.remove();

        video_ele = null;
      }


      // ==================================================
      // REMOVE CAPTURE BUTTON
      // ==================================================

      if (capture_btn) {
        capture_btn.remove();
        capture_btn = null;
      }


      // ==================================================
      // ADD CANVAS PREVIEW
      // ==================================================

      selfie_section.appendChild(
        canvas
      );


      selfie_section_states.camera =
        "PREVIEW";


      selfie_btn.innerText = "Retake";

      const download_certificate = () => {
        canvas.toBlob((blob) => {
          if (!blob) {
            alert("Could not generate certificate.");
            return;
          }

          const blob_url = URL.createObjectURL(blob);

          const link = document.createElement("a");

          link.href = blob_url;
          link.download = "Universal_Brotherhood_Certificate.png";

          document.body.appendChild(link);

          link.click();
          link.remove();

          // Don't revoke immediately — Safari/iPhone
          // may still be processing the download.
          setTimeout(() => {
            URL.revokeObjectURL(blob_url);
          }, 1000);

        }, "image/png");
      };


      download_btn = document.createElement("button");
      download_btn.innerText = "Download Certificate";
      download_btn.classList.add("download-btn");
      download_btn.addEventListener("click", () => {
        download_certificate();
      });

      selfie_section.appendChild(download_btn);

      share_cert_btn = document.createElement("button");
      share_cert_btn.innerText = "Share Certificate";
      share_cert_btn.classList.add("share-cert-btn");
      share_cert_btn.addEventListener("click", () => {
        canvas.toBlob(async (blob) => {

          const file = new File(
            [blob],
            "Vivekananda_Certificate.png",
            {
              type: "image/png"
            }
          );


          if (
            navigator.share &&
            navigator.canShare?.({
              files: [file]
            })
          ) {

            try {

              await navigator.share({
                title: "Universal Brotherhood Day",
                text: "I celebrated Universal Brotherhood Day with Ramakrishna Math Hyderabad.",
                files: [file]
              });

            } catch (error) {

              console.log(
                "Share cancelled:",
                error
              );
            }

          } else {

            alert(
              "Sharing is not supported on this browser. Please download the certificate instead."
            );
          }

        }, "image/png");
      });

      selfie_section.appendChild(share_cert_btn);
      const participation_message = document.createElement("div");

      participation_message.classList.add("participation-message");

      participation_message.innerHTML = `
  <span class="participation-icon">✦</span>

  <p class="thank-you">
    Thank you for participating!
  </p>

  <p class="invitation">
    You are cordially invited to
    <strong>Ramakrishna Math, Hyderabad</strong>
    on <strong>September 11, 2026</strong>,
    along with your friends and family members.
  </p>

  <p class="invitation-closing">
    We look forward to welcoming you. 🙏
  </p>
`;

      selfie_section.appendChild(participation_message);
    }

  );
});


// ======================================================
// PAGE NAVIGATION
// ======================================================

const pages = [
  document.getElementById("speech_content"),
  document.getElementById("quiz_content"),
  document.getElementById("selfie_content")
];

const journey_steps = [
  document.getElementById("speech_journey_step"),
  document.getElementById("quiz_journey_step"),
  document.getElementById("selfie_journey_step")
];

let current_page = 0;
let current_journey_step = 0;

const show_page = (index) => {
  pages.forEach((page, i) => {
    page.style.display =
      i === index ? "block" : "none";
  });
  journey_steps.forEach((step, i) => {
    i === index ? step.classList.add("active") : step.classList.remove("active");
  });

  // Disable Previous on first page
  prev_btn.disabled = index === 0;

  // Disable Next on last page
  next_btn.disabled = index === pages.length - 1;
};

// ======================================================
// NEXT PAGE
// ======================================================

next_btn.addEventListener("click", () => {
  if (
    current_page <
    pages.length - 1
  ) {
    current_page++;

    show_page(current_page);


    // Leaving speech page resets speech.
    if (current_page !== 0) {
      reset_speech();
    }
  }
});


// ======================================================
// PREVIOUS PAGE
// ======================================================

prev_btn.addEventListener("click", () => {
  if (current_page > 0) {
    current_page--;

    show_page(current_page);
  }
});


// ======================================================
// QUIZ ELEMENTS
// ======================================================

const quiz_questions =
  document.getElementById(
    "quiz_questions"
  );

const evaluate_quiz_btn =
  document.getElementById(
    "evaluate_quiz_btn"
  );

const reroll_quiz_btn =
  document.getElementById(
    "reroll_quiz_btn"
  );

const quiz_result =
  document.getElementById(
    "quiz_result"
  );


// ======================================================
// SHUFFLE
// ======================================================

const shuffle = (array) => {
  const result = [...array];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      result[i],
      result[j]
    ] = [
        result[j],
        result[i]
      ];
  }

  return result;
};


// ======================================================
// SELECT RANDOM QUESTIONS
// ======================================================

let selected_questions =
  shuffle(question_bank)
    .slice(0, 5);


// ======================================================
// RENDER QUIZ
// ======================================================

const render_quiz = () => {
  quiz_questions.innerHTML = "";


  selected_questions.forEach(
    (
      question,
      questionIndex
    ) => {

      const question_container =
        document.createElement("div");

      question_container
        .classList
        .add("quiz-question");


      const question_title =
        document.createElement("h3");

      question_title.textContent =
        `${questionIndex + 1}. ${question.question}`;

      question_container.appendChild(
        question_title
      );


      question.options.forEach(
        (
          option,
          optionIndex
        ) => {

          const label =
            document.createElement(
              "label"
            );

          label.classList.add(
            "quiz-option"
          );


          const radio =
            document.createElement(
              "input"
            );

          radio.type =
            "radio";

          radio.name =
            `question_${questionIndex}`;

          radio.value =
            optionIndex;


          label.appendChild(
            radio
          );


          label.append(
            document.createTextNode(
              option
            )
          );


          question_container
            .appendChild(
              label
            );
        }
      );


      quiz_questions.appendChild(
        question_container
      );
    }
  );
};


// ======================================================
// EVALUATE QUIZ
// ======================================================

evaluate_quiz_btn.addEventListener(
  "click",
  () => {

    let score = 0;


    selected_questions.forEach(
      (
        question,
        questionIndex
      ) => {

        const radios =
          document.querySelectorAll(
            `input[name="question_${questionIndex}"]`
          );


        const selected =
          document.querySelector(
            `input[name="question_${questionIndex}"]:checked`
          );


        radios.forEach(radio => {
          const label =
            radio.closest(
              ".quiz-option"
            );

          const optionIndex =
            Number(
              radio.value
            );


          // Correct answer.
          if (
            optionIndex ===
            question.answer
          ) {
            label.classList.add(
              "correct"
            );
          }


          // User chose wrong answer.
          if (
            radio.checked &&
            optionIndex !==
            question.answer
          ) {
            label.classList.add(
              "wrong"
            );
          }


          // Lock question.
          radio.disabled = true;
        });


        if (
          selected &&
          Number(
            selected.value
          ) ===
          question.answer
        ) {
          score++;
        }
      }
    );


    quiz_result.textContent =
      `Score: ${score}/${selected_questions.length}`;


    evaluate_quiz_btn.disabled =
      true;
  }
);


// ======================================================
// REROLL QUIZ
// ======================================================

reroll_quiz_btn.addEventListener(
  "click",
  () => {

    selected_questions =
      shuffle(question_bank)
        .slice(0, 5);


    quiz_result.textContent =
      "";


    evaluate_quiz_btn.disabled =
      false;


    render_quiz();
  }
);


// ======================================================
// INITIAL QUIZ RENDER
// ======================================================

render_quiz();
