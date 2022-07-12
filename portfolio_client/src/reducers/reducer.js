import { SELECT_ITEM } from "../actions/types";

const PUBLIC_URL = process.env.PUBLIC_URL;

const ENTRIES = [
    {
        name: "Learn Punjabi",
        // img_src: "dontlookback.png",
        link: "https://www.learnpunjabi.academy",
        id: "LearnPunjabi",
        category: "professional",
        content: `
        <p>
            For my biggest project yet, I am building a full stack application to teach people Punjabi,
            a language that is the 10th most spoken in the world but is
            underserved in popular culture, and is not taught on popular alternatives
            such as Duolingo. The site is live at
            <a href="https://www.learnpunjabi.academy">https://www.learnpunjabi.academy</a> but is
            currently in beta testing.
        </p>
        <p>
            I'm using MongoDB, Node.js and Express for the back-end, and React and redux for the front-end.
            Media is uploaded to and stored in an Amazon S3 bucket, and then served to end users with
            runtime signed URL's. Authentication is currently handled using JSONWebTokens, but I plan 
            on expanding this with OAuth 2.0 support. I use TailwindCSS for inline styling, 
            but began the project using SASS pre-processing.
        </p>
        <p>
            The site is Unit/Integration tested using React Testing Library and Jest. I also 
            use Cypress for end-to-end testing.
        </p>
        <p>
            On the landing page I use React Three Fiber to render a
            scroll animated interaction showing the user the history
            of Punjab in a visually engaging way.
        </p>
        <p>
            The project is currently targeting a production-ready release with a small set of initial lessons.
        </p>
        <p>
            Once the first release milestone is hit, the platform will be expanded with more 
            content and lesson task types, including a planned AI character recognition task 
            type to allow users to better learn character forms.
        </p>
        `
    },
    {
        name: "Rendering MRI Scans in 3D",
        img_src: "brain.gif",
        id: "MRI",
        link: "https://www.youtube.com/watch?v=WRY_lzsbLio",
        category: "professional",
        content: `
        <p>
            I was hired by the University of Sheffield to take real world
            MRI scans and build a rendering system to show this data
            as a 3D object using three.js.
        </p>
        <p>
            I adapted a GLSL Volume Shader to work with a domain-specific
            datatype, and then rendered the data in such a way that is both
            medically accurate, immediately readable and visually interesting.
        </p>
        <p>
            The visualisation will be part of a physical installation built by 
            artist Ruby Fox, which will be used to educate the public on preventative dementia
            measures.
        </p>
        `
    },
    {
        name: "COP26 Climate Summit: Data Visualisation",
        // img_src: "COP26 UKRI.jpg",
        img_src: "COP26.gif",
        id: "COP26",
        link: "https://youtu.be/n3Ac6Ennn5k?t=1341",
        category: "professional",
        content: `
        <p>
            For the audience participation segments of a 
            presentation at the COP 26 Climate Summit,
            I was hired by award winning creative agency Coney to create a visualiser 
            displaying audience responses on an IMAX cinema screen
            in near real-time. We  wanted to create an immersive and meditative
            experience, so I used the Web Audio API
            to create a generative audio soundscape that reflected
            response content. This allowed the audience to
            reflect on and see their responses after each question.
        </p><p>
            The site used Three.js and CSS animations for visual 
            design, and was built using the MERN stack. 
        </p><p>
            This was my first experience building a system for a live "show",
            as well as my first experience working with Three.js,
            and it was a challenge working in the zero margin for error.
            However like always it all came together in the end, and
            the show went great! 
        </p><p>
            The click for more link above will take you to the
            recorded live-show at the timestamp of our first segment.
        </p>
        `
    },
    {
        name: "React Web Theatrical Experience",
        img_src: "routes.png",
        link: "https://www.theatreroyal.org.uk/event/routes/",
        id: "0",
        category: "professional",
        content: `
        <p>
            I was hired by Megaverse (a Sheffield based digital creative
            agency) to develop a web application/game, that
            emulated the look and behvaiour of a late 90's 
            corporate desktop OS. Throughout the experience the user 
            would navigate through a fully functional desktop,
            checking documents and using "applications", all within 
            the browser window.
        </p><p>
            "Can you find out what happened to your missing friend,
            and also uncover evidence of illegal deforestation?"
        </p><p>
            The application used redux for state management heavily,
            handling desktop window functionality as well as 
            handling game logic. bcrypt and JSONWebTokens were used 
            for user authentication, which was integrated with the
            Theatre Royal Bath's ticket sales system. RESTful API design
            was used for server endpoints and SASS CSS-preprocessing
            was used for front-end styling.
        </p><p>
            I'm particularly proud of our satisfying 
            and accessible UX design, as well as testing my Full-Stack skills
            further in getting a robust product from conception to release within
            7 weeks.
        </p><p>
            Further links: <br/>
            <a href="https://www.thestage.co.uk/reviews/routes-egg-assembly-theatre-royal-bath-online-2021" target="_blank">Review</a>
            <a href="https://thebathandwiltshireparent.co.uk/2021/04/the-egg-assembly-launches-routes-a-cutting-edge-interactive-digital-crime-thriller-for-ages-14/" target="_blank">Press Release</a>
        </p>
        `
    },
    {
        name: "Untitled Megaverse Game",
        // img_src: "crow flies.png",
        id: "mv2",
        category: "professional",
        content: `
        <p>
            Building on the work done for our previous game "Routes",
            a prototype for another Web game emulating a desktop OS
            was developed. See the "Routes" entry for a more detailed
            description of the tech used here.
        </p><p>
            The biggest technical challenge on this project was 
            developing a video streaming interface that allowed for
            seamless "choose your own adventure" style choices, affecting
            the flow of the experience (for an example, see Black Mirror: Bandersnatch).
        </p><p>
            Ensuring that user choice was handled and the next video
            was played seamlessly with zero buffering/stuttering was difficult,
            but was crucial to keeping the illusion that events were really
            playing out.
        </p><p>
            We hope to flesh out our foundation into a full game in the 
            near future!
        </p>
        `
    },
    {
        name: "Educational VR Experience - Treo",
        img_src: "TREOgif.gif",
        // img_src: "treo.png",
        id: "1",
        link: "https://www.youtube.com/watch?v=P1EUnEKnjmE",
        category: "professional",
        content: `
        <p>
            For this project my role was to be the sole developer and 
            liaison between interdisciplinary partners for a VR 
            experience developed in Unreal Engine 4.
        </p><p>
            The finished project is an interactive VR experience 
            in which the user can watch and hear the way that a 
            group of randomly generated (according to biomechanical 
            models) trees grow, especially the way that they are 
            influenced by user determined sunlight and water level 
            influences.
        </p><p>
            The project incorporated generative audio/data 
            sonification elements that were developed in conjunction 
            with PHD researchers from the University of Sheffield.
        </p>
        `
    },
    {
        name: "IoC Student Enterprises Website",
        img_src: "ioc.png",
        id: "2",
        link: "https://www.studententerprise.org.uk/",
        category: "professional",
        content: `
        <p>
            I was the sole developer of a website for the Institute 
            of Coding built with the Drupal 8 Content Management System, 
            intended to be a network for facilitating the creation of 
            Student Enterprises by providing resources and connecting 
            Industry and Higher Education organisations.
        </p><p>
            I communicated with stakeholders to gather and define 
            site specifications and created then iterated on 
            wireframe designs – considering modern UI/UX principles 
            and patterns - supported by User journey models and diagrams. 
        </p><p>
            I created interactive prototypes for final design 
            feedback, then developed and deployed the site to 
            a live server, creating an elegant and intuitive 
            front-end using twig (PHP & HTML templating) CSS 
            and JS, while matching the Institute of 
            Coding brand identity. 
        </p><p>
            I also extended the Drupal 8 framework developing 
            a custom module using PHP 7 to meet site requirements. 
        </p>
        `
    },
    {
        name: "Exploration of AI and Robotics in Theatre",
        img_src: "robot.jpg",
        id: "3",
        link: "https://festivalofthemind.sheffield.ac.uk/2020/spiegeltent/what-does-it-feel-like-film/",
        category: "professional",
        content: `
        <p>
            I collaborated on a project exploring the use of AI and 
            robotics in theatre experiences through the continued 
            development of a visual programming toolset (built 
            with JavaScript and Node.js). A particular focus 
            was placed on an intuitive and smooth end user 
            development experience, allowing people with no 
            programming experience to develop interactions 
            with complex and emerging technologies (AR, 
            Artificial Intelligence – Computer Vision, 
            Sentiment Analysis, Speech to Text and 
            Chatbot services) that they would otherwise 
            have no access to.
        </p><p>
            Throughout this project I gained experience of a 
            codesign paradigm, working face to face with 
            cross-disciplinary partners to create a flexible 
            and robust system with a focus on usability. I 
            also gained skills in managing client expectations 
            and prioritising requirements to deliver a solution 
            in the required timeframe. I put my knowledge of 
            correct software development workflows into practice, 
            using Git version control to collaborate efficiently 
            and iterating through the cycle of identifying 
            requirements, designing features, implementation 
            and testing. 
        </p><p>
            As the project progressed I also took on more 
            creative/production responsibilities, including 
            set creation, filming, writing and voice acting roles.
        </p>
        `
    },
    {
        name: "AR/AI Visual Programming Toolkit",
        img_src: "ar.png",
        id: "4",
        category: "professional",
        content: `
        <p>
            For my dissertation project I extended 
            <a href="https://github.com/andrewfstratton/quando" target="_blank">
                Quando</a>, 
            a block based visual programming toolkit, adding in tools
            to allow non-coders to have easy access to developing technologies 
            such as AI (Speech Processing, Chatbots, Computer Vision), and 
            marker based web Augmented Reality (a-frame and AR.js).
        </p><p>
            These tools were showcased through even more tools allowing for 
            the creation of simple Adventure Game logic. These were used to create
            an Augmented Reality adventure game using AI tools for puzzle elements.
        </p>
        `
    },
    {
        name: "Low-Poly 3D Modelling: Sea Shack",
        img_src: "seashack.png",
        link: "https://www.youtube.com/watch?v=BB05bpPVAXk",
        id: "sea_shack",
        category: "other",
        content: `
        <p>
            To improve my 3D modelling skills I worked on this low-poly
            Sea Shack scene following a tutorial by Grant Abbitt. This was my
            first render in Blender and I learnt a lot about animating and lighting the scene.
        </p><p>
            I'm especially proud of that little shark, look at him go...
        </p>`
    }, 
    {
        name: "dontlookback. [WIP]",
        // img_src: "dontlookback.png",
        id: "VR",
        category: "other",
        content: `
        <p>
            I recently got my hands on an Oculus Quest 2
            VR headset, and am now working on a short horror
            game. One of the strengths of VR is the spatial awareness
            you get when fully immersed, and I want to play off
            that by impying there is something malicious behind the player,
            while also ensuring they Dont Look Back.
        </p>
        `
    },
    {
        name: "TensorFlow Biomedical Image Segmentation",
        img_src: "liver seg.png",
        id: "5",
        category: "other",
        content: `
        <p>
            To teach myself TensorFlow, 
            I used the U-Net algorithm to create a Image 
            Segmentation model to segment liver scans using
            openly available datasets.
        </p><p>
            This project was a valuable learning experience
            for developing my machine learning skills.
        </p>
        `
    },
    {
        name: "This website [WIP]",
        // img_src: "portfolio sc.png",
        id: "6",
        category: "other",
        content: `
        <p>
            As part of my continued practice of the MERN Stack
            I decided to rewrite my portfolio
            website to the one you're currently looking at!
        </p><p>
            LATEST UPDATES:
                - new background styles and switching
                - image hosting and serving through AWS S3 buckets and Cloudfront
        </p><p>
            The site is build with MongoDB, React.js and Node.js,
             using react-redux for state management and SASS 
            CSS-preprocessing for styling. The website is 
            currently contuinually deployed using Heroku,
            with the repository being publicly visible 
            on my GitHub account.
        </p><p>
            Once I have finalised the front end design I intend
            to write a basic Content Management System such that
            it is easy for me to add new entries and edit site content.
        </p>
        `
    },
    {
        name: "Paradoujin.com - Underground Music Blog",
        img_src: "paradoujin screenshot.png",
        id: "7",
        link: "https://paradoujin.com/",
        category: "other",
        content: `
        <p>
            I developed and hosted a custom Wordpress site
            for the great people at Paradoujin, who ran an
            Instagram and Twitter page promoting underground UK
            music. 
        </p><p>
            I thought that they were doing great work but could
            have a wider reach with a web presence, and so reached out
            to them and made their website!
        </p>
        `
    },
    {
        name: "Constellations",
        img_src: "constellations.png",
        id: "8",
        link: "https://balraj-johal.itch.io/constellations",
        category: "other",
        content: `
        <p>
            A game made in Unity for the Paint Jam in about 6 hours,
            where every asset made in the game must be made in MS Paint
            and the theme was Starry Night by Van Gogh.
        </p><p>
            You must rotate a set of stars in 3D space with the mouse
            until they align to the displayed constellation.
        </p>
        `
    },
    // {
    //     name: "I just need some ******* eggs [WIP]",
    //     img_src: "ps1 horror.png",
    //     id: "9",
    //     category: "other",
    //     content: `
    //     <p>
    //         An FPS game I'm currently making about a mutated supermarket.
    //     </p><p>
    //         The concept is that you need to dash close to an enemy while
    //         avoiding their projectiles until you're in close
    //         range to them, at which point you can grab them and use 
    //         their attacks against the other enemies until you run
    //         out of ammo. This back and forth of dodging projectiles vs
    //         firing them is intended to give combat a rhythm similar to
    //         DOOM 2016.
    //     </p><p>
    //         Currently very, very WIP!
    //     </p>
    //     `
    // },
    {
        name: "",
        img_src: "",
        content: `
        <p>
            Hey I'm Balraj! I'm a Software Developer with
            experience working on full-stack projects with a range of 
            partners across varied disciplines.
        </p><p>
            I'm passionate about creative solutions to problems and
            especially creative applications of digital technology.
        </p>
        

        <a href="${PUBLIC_URL}/res/CV - Balraj Johal - June '22.pdf" target="_blank" class="cv-link-a" >
            <div class="cv-link">
                MY CV
                <span class="arrow">❯</span>
            </div>
        </a>

        <p>
            My skills lie primarily in JavaScript web development, 
            particularly in a full stack capacity using Node.js and React.
        </p><p>
            I am constantly striving to improve my skillset in every discipline,
            whether that be in Visual Design or User Experience, or in 3D work
            such as modelling in Blender or Shader Design and WebGL/Three.js libraries.
        </p>

        <div class="about-img-wrap">
            <img src="/res/me.jpg"
                draggable="false">
            </img>
            <span class="it-me">me hard at work</span>
        </div>

        <p>
            Please get in touch with me if you have somthing cool for us to work on! Contact me at balrajsjohal@gmail.com!
        </p>
        `,
        id: "about",
        category: "about"
    },
    {
        name: "",
        img_src: "",
        content: `
        <p>
            I have a strong technical background and have the creative skills to
            design and present that foundation in the best possible light.
        </p><p>
            I have development experience in multiple languages:
            <div class="skill">JavaScript (primarily Node.js & React)</div>
            <div class="skill">Java</div>
            <div class="skill">PHP</div>
        </p><p>
            I am also experienced in a variety of different disciplines:
            <div class="skill">Machine Learning & AI</div>
            <div class="skill">UI/UX Design</div>
            <div class="skill">Game Development (Unity & Unreal)</div>
        </p>
        `,
        id: "SKILLS",
        category: "skills"
    },
    {
        name: "",
        img_src: "",
        content: `
        <p>
            The best way to get in touch with me is via email, so hit me at
            <a href="mailto:balrajsjohal@gmail.com">balrajsjohal@gmail.com</a>!
        </p>
        <a class="linkedin-logo" href="https://www.linkedin.com/in/balraj-johal/">
            <img class="logo" src="/res/linkedin.png"></img>
        </a>
        `,
        id: "SOCIALS",
        category: "socials"
    },
]
let aboutItem;
ENTRIES.forEach(elem => {
    if (elem.category === "about") {
        aboutItem = elem;
    }
})

const initialState = {
    selectedItem: aboutItem,
    allEntries: ENTRIES,
};

  
export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_ITEM:
            let item;
            ENTRIES.forEach(elem => {
                if (elem.id === action.payload) {
                    item = elem;
                }
            });
            return {
                ...state,
                selectedItem: item
            };
        default:
            return initialState;
    }
}