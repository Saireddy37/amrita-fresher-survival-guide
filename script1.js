// Dark Mode Toggle

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";
        }
        else{
            answer.style.display = "block";
        }

    });

});


// Club Finder Quiz

function showClub(clubName){

    document.getElementById("quizResult").innerHTML =
        "🎉 Recommended Club: <b>" + clubName + "</b>";

}


// Welcome Message

window.onload = function(){

    console.log("Campus Compass Loaded Successfully!");

}
// Hero Image Slider

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000);


const academicSlides =
document.querySelectorAll(".academics-slide");

let academicCurrent = 0;

function changeAcademicSlide(){

    academicSlides[academicCurrent]
        .classList.remove("active");

    academicCurrent++;

    if(academicCurrent >= academicSlides.length){
        academicCurrent = 0;
    }

    academicSlides[academicCurrent]
        .classList.add("active");
}

setInterval(changeAcademicSlide, 4000);


function showAcademicInfo(type){

    const details = document.getElementById("academic-details");

    if(type === "programs"){

        details.innerHTML = `
        <h3>🎓 B.Tech Programs</h3>
        <p>
        The specific B.Tech specializations offered at AMRITA-Amaravathi :Computer Science and Engineering (CSE),Computer Science and Engineering (Artificial Intelligence),Artificial Intelligence and Data Science(AI&DS),Computer and Communication Engineering (CCE)
        </p>
        `;
    }

    else if(type === "classes"){

        details.innerHTML = `
        <h3>📚 Classes & Lectures</h3>
       <p>
    Classes at Amrita Amaravati are designed to create an engaging and
    interactive learning environment. Students attend theory lectures,
    tutorial sessions, and discussions conducted by experienced faculty
    members using modern teaching methods and smart classroom facilities.
    </p>

    <p>
    Each course combines classroom learning with assignments, quizzes,
    presentations, and collaborative activities that help students develop
    both technical knowledge and problem-solving skills. Faculty members
    encourage active participation, curiosity, and innovative thinking,
    making learning more practical and industry-oriented.
    </p>

    <p>
    Regular attendance, effective note-taking, and timely completion of
    assignments are key habits that help students perform well academically.
    Building a strong foundation during the first year makes advanced
    courses easier and prepares students for projects, internships,
    and placement opportunities.
    </p>        `;
    }

    else if(type === "labs"){

        details.innerHTML = `
        <h3>🔬 Labs & Practicals</h3>
        <p>
        Students gain hands-on experience through programming labs,
        electronics labs, mini-projects and practical experiments.
        </p>
     
          <p>
    Laboratory sessions are an essential part of academic life at Amrita
    Amaravati. They provide students with hands-on experience and help
    bridge the gap between theoretical concepts and real-world applications.
    Through practical experiments and project-based learning, students gain
    a deeper understanding of the subjects taught in classrooms.
    </p>

    <p>
    Depending on the branch, students work in programming labs, electronics
    laboratories, engineering workshops, and specialized research facilities.
    Lab sessions encourage teamwork, problem-solving, creativity, and the
    ability to apply technical knowledge to practical challenges.
    </p>

    <p>
    Students are expected to complete experiments, maintain lab records,
    submit observations, and participate actively during practical sessions.
    Consistent involvement in laboratory work not only improves academic
    performance but also develops skills that are valuable for internships,
    projects, research opportunities, and future careers.
    </p>
        `;
    }

    else if(type === "attendance"){

        details.innerHTML = `
        <h3>📋 Attendance System</h3>
        <p>
    Attendance is an important part of academic life at Amrita Amaravati.
    Students are generally required to maintain a minimum of <b>75% attendance</b>
    in each course to be eligible for semester examinations.
    </p>

    <p>
    Regular attendance helps students stay updated with lectures, understand
    concepts better, participate in classroom activities, and perform well in
    assessments. Maintaining good attendance from the beginning of the semester
    can help avoid last-minute shortages and academic complications.
    </p>
        `;
    }
}


const clubSlides = document.querySelectorAll(".club-slide");

let clubIndex = 0;

function changeClubSlide(){

    clubSlides[clubIndex].classList.remove("active");

    clubIndex++;

    if(clubIndex >= clubSlides.length){
        clubIndex = 0;
    }

    clubSlides[clubIndex].classList.add("active");
}

setInterval(changeClubSlide, 4000);


function showHostelInfo(type){

    const details =
    document.getElementById("hostel-details");

    if(type === "hostel"){

    details.innerHTML = `
    <h3>🏠 Hostel Facilities</h3>

    <ul style="text-align:left; max-width:800px; margin:auto; line-height:2;">
        <li>1-sharing, 2-sharing and 4-sharing room options.</li>
        <li>Filtered drinking water dispensers on every floor.</li>
        <li>Free unlimited Wi-Fi access for laptops and mobile devices.</li>
        <li>Separate gym facilities for boys and girls hostels.</li>
        <li>24/7 hot water availability.</li>
        <li>Laundry and housekeeping services.</li>
        <li>Common study and recreation areas.</li>
        <li>Power backup for uninterrupted living.</li>
        <li>24/7 security with wardens and CCTV surveillance.</li>
        <li>Safe, clean, and student-friendly environment.</li>
    </ul>
    `;
} 
    else if(type === "mess"){

    details.innerHTML = `
    <h3>🍽️ Mess & Food</h3>

    <ul style="text-align:left; max-width:800px; margin:auto; line-height:2;">
        <li>Nutritious and hygienic vegetarian meals are served daily.</li>
        <li>Breakfast, lunch, evening snacks, and dinner are provided.</li>
        <li>Breakfast: 7:15 AM – 9:00 AM</li>
        <li>Lunch: 12:150 PM – 2:00 PM</li>
        <li>Snacks: 5:15 PM – 5:45 PM</li>
        <li>Dinner: 7:15 PM – 9:00 PM</li>
        <li>Special meals and sweets during festivals and celebrations.</li>
        <li>Filtered drinking water available in dining areas.</li>
        <li>Clean and well-maintained mess facilities.</li>
        <li>Campus canteen/cafeteria available for additional snacks and beverages.</li>
        <li>Students can provide feedback and suggestions on food quality.</li>
        <li>Balanced meals to support a healthy student lifestyle.</li>
    </ul>
    `;
}
else if(type === "campus"){

    details.innerHTML = `
    <h3>🏫 Campus Facilities</h3>

    <ul style="text-align:left; max-width:800px; margin:auto; line-height:2;">
        <li>Modern academic blocks with smart classrooms.</li>
        <li>Well-equipped laboratories for practical learning.</li>
        <li>Central library with books, journals, and digital resources.</li>
        <li>High-speed Wi-Fi connectivity across the campus.</li>
        <li>Sports grounds and indoor game facilities.</li>
        <li>Cafeteria and refreshment centers for students.</li>
        <li>Medical center for basic healthcare and emergencies.</li>
        <li>ATM and essential convenience facilities within campus.</li>
        <li>Auditoriums and seminar halls for events and workshops.</li>
        <li>Green and eco-friendly campus with peaceful surroundings.</li>
    </ul>
    `;
}
    else if(type === "tips"){

        details.innerHTML = `
        <h3>🎒 First Week Tips</h3>
         <ul style="text-align:left; max-width:800px; margin:auto; line-height:2;">
        <li>Attend all orientation and induction sessions.</li>
        <li>Carry your ID card at all times on campus.</li>
        <li>Explore academic blocks, hostels, library, and cafeteria.</li>
        <li>Make friends and interact with seniors and classmates.</li>
        <li>Join clubs and participate in campus activities.</li>
        <li>Keep track of your class schedule and attendance.</li>
        <li>Save important contacts such as wardens and faculty advisors.</li>
        <li>Stay organized with notes, assignments, and deadlines.</li>
        <li>Don't hesitate to ask questions or seek help when needed.</li>
        </ul>
       <p>
        Attend orientation sessions, explore the campus,
        make new friends, locate important facilities,
        and don't hesitate to seek help from seniors
        and faculty members.
        </p>
        `;
    }
}

const survivalSlides =
document.querySelectorAll(".survival-slide");

let survivalIndex = 0;

function changeSurvivalSlide(){

    survivalSlides[survivalIndex]
        .classList.remove("active");

    survivalIndex++;

    if(survivalIndex >= survivalSlides.length){
        survivalIndex = 0;
    }

    survivalSlides[survivalIndex]
        .classList.add("active");
}

setInterval(changeSurvivalSlide, 4000);


function showSurvivalInfo(type){

    const details =
    document.getElementById("survival-details");

    if(type === "dos"){

        details.innerHTML = `
        <h3>✅ Do's</h3>

        <ul style="text-align:left; max-width:800px; margin:auto; line-height:2;">
            <li>Attend classes regularly.</li>
            <li>Maintain at least 75% attendance.</li>
            <li>Participate in clubs and events.</li>
            <li>Build good relationships with classmates and seniors.</li>
            <li>Keep track of assignments and deadlines.</li>
            <li>Use library and online resources effectively.</li>
            <li>Take care of your health and sleep schedule.</li>
        </ul>
        `;
    }

    else if(type === "donts"){

        details.innerHTML = `
        <h3>❌ Don'ts</h3>

        <ul style="text-align:left; max-width:800px; margin:auto; line-height:2;">
            <li>Don't skip classes unnecessarily.</li>
            <li>Don't wait until exams to start studying.</li>
            <li>Don't ignore attendance requirements.</li>
            <li>Don't spend excessive time on social media.</li>
            <li>Don't hesitate to ask doubts.</li>
            <li>Don't compare yourself with others constantly.</li>
        </ul>
        `;
    }

    else if(type === "mistakes"){

        details.innerHTML = `
        <h3>⚠️ Common Mistakes Seniors Made</h3>

        <ul style="text-align:left; max-width:800px; margin:auto; line-height:2;">
            <li>Ignoring attendance during the first semester.</li>
            <li>Starting exam preparation at the last minute.</li>
            <li>Missing club opportunities.</li>
            <li>Not networking with seniors and faculty.</li>
            <li>Poor time management.</li>
        </ul>
        `;
    }

    else if(type === "time"){

        details.innerHTML = `
        <h3>⏰ Time Management</h3>

        <ul style="text-align:left; max-width:800px; margin:auto; line-height:2;">
            <li>Use a planner or calendar.</li>
            <li>Complete assignments early.</li>
            <li>Study a little every day.</li>
            <li>Balance academics and extracurricular activities.</li>
            <li>Avoid procrastination.</li>
        </ul>
        `;
    }

    else if(type === "mental"){

        details.innerHTML = `
        <h3>🧠 Mental Health & Well-being</h3>

        <ul style="text-align:left; max-width:800px; margin:auto; line-height:2;">
            <li>Take breaks and avoid burnout.</li>
            <li>Talk to friends and mentors when stressed.</li>
            <li>Maintain a healthy sleep schedule.</li>
            <li>Exercise regularly.</li>
            <li>Focus on learning and growth, not perfection.</li>
        </ul>
        `;
    }
}


function showResourceInfo(type){

    const details =
    document.getElementById("resource-details");

    if(type === "gfg"){

        details.innerHTML = `
        <h3>📘 GeeksforGeeks</h3>
        <ul>
            <li>Learn Data Structures and Algorithms.</li>
            <li>Practice coding problems.</li>
            <li>Read interview preparation articles.</li>
            <li>Useful for placements and internships.</li>
        </ul>
        `;
    }

    else if(type === "leetcode"){

        details.innerHTML = `
        <h3>💻 LeetCode</h3>
        <ul>
            <li>Practice coding questions daily.</li>
            <li>Improve problem-solving skills.</li>
            <li>Prepare for coding interviews.</li>
            <li>Participate in weekly contests.</li>
        </ul>
        `;
    }

    else if(type === "nptel"){

        details.innerHTML = `
        <h3>🎓 NPTEL</h3>
        <ul>
            <li>Free courses from IIT professors.</li>
            <li>Earn certificates.</li>
            <li>Learn programming and core subjects.</li>
            <li>Great for skill development.</li>
        </ul>
        `;
    }

    else if(type === "github"){

        details.innerHTML = `
        <h3>🐙 GitHub</h3>
        <ul>
            <li>Store and manage projects.</li>
            <li>Collaborate with teammates.</li>
            <li>Create an impressive portfolio.</li>
            <li>Learn Git version control.</li>
        </ul>
        `;
    }

    else if(type === "notion"){

        details.innerHTML = `
        <h3>📝 Notion</h3>
        <ul>
            <li>Organize notes and assignments.</li>
            <li>Create study schedules.</li>
            <li>Track goals and projects.</li>
            <li>Improve productivity.</li>
        </ul>
        `;
    }

    else if(type === "erp"){

        details.innerHTML = `
        <h3>🏫 ERP Portal</h3>
        <ul>
            <li>Check attendance records.</li>
            <li>View course details.</li>
            <li>Access academic information.</li>
            <li>Track semester progress.</li>
        </ul>
        `;
    }

    else if(type === "vs"){

        details.innerHTML = `
        <h3>⚡ VS Code</h3>
        <ul>
            <li>Most popular coding editor.</li>
            <li>Supports multiple programming languages.</li>
            <li>Helpful extensions available.</li>
            <li>Perfect for projects and assignments.</li>
        </ul>
        `;
    }

    else if(type === "chatgpt"){

        details.innerHTML = `
        <h3>🤖 ChatGPT</h3>
        <ul>
            <li>Understand difficult concepts.</li>
            <li>Get coding help and explanations.</li>
            <li>Generate project ideas.</li>
            <li>Improve productivity and learning.</li>
        </ul>
        `;
    }
}
