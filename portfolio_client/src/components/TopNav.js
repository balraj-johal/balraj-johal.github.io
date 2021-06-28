import { useEffect } from "react";
import { connect } from "react-redux";
import { selectItem } from "../actions/actions";

function TopNav(props) {

    const CATEGORIES = [
        {
            name: "Skills",
            id: 1,
            index: 0
        },
        {
            name: "About Me",
            id: 2,
            index: 0
        },
        {
            name: "Profressional Work",
            id: 3,
            index: 0
        },
        {
            name: "Other Stuff",
            id: 4,
            index: 6
        },
        {
            name: "Socials",
            id: 5,
            index: 6
        },
    ]
    const ENTRIES = [
        {
            name: "",
            img_src: "",
            content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
            `,
            id: "HOME"
        },
        {
            name: "Routes",
            img_src: "routes.png",
            id: 0,
            content: `
            <p>
            As a freelance Software Developer for Megaverse
            I developed a full-stack (MERN) web application/game, that
            emulated the look and behvaiour of a late 90's 
            corporate desktop OS. The game was available as a limited
            time event. 
            </p><p>
            "Can you find out what happened to your missing friend,
            and also uncover evidence of illegal deforestation?"
            </p><p>
            The application used redux for state management heavily,
            handling desktop window functionality as well as 
            handling game logic. bcrypt and JSONWebTokens were used 
            for user authentication, which was integrated with the
            Theatre Royal Bath's ticket sales system. RESTful API design
            was used for server endpoints /WHY?/. SASS CSS-preprocessing
            was used for front-end styling.
            </p><p>
            I'm particularly proud of our satisfying 
            and accessible UX design, as well as testing my Full-Stack skills
            further in getting a robust product from conception to release within
            7 weeks.
            </p><p>
            The lessons learnt from this project will be built upon in
            my next freelance project with Megaverse!
            </p>
            `
        },
        {
            name: "XR Stories - Treo",
            img_src: "treo.png",
            id: 1,
            content: `
            <p>
                As an intern my role was to be the sole developer and 
                liaison between interdisciplinary partners for a VR 
                experience developed in Unreal Engine 4. 
            </p><p>
                The project incorporated generative audio/data 
                sonification elements that were developed in conjunction 
                with PHD researchers from the University of Sheffield.
            </p><p>
                The finished project is an interactive VR experience 
                in which the user can watch and hear the way that a 
                group of randomly generated (according to biomechanical 
                models) trees grow, especially the way that they are 
                influenced by user determined sunlight and water level 
                influences.
            </p>
            `
        },
        {
            name: "IoC Student Enterprises Website",
            img_src: "ioc.png",
            id: 2,
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
            name: "Robot Theatre",
            img_src: "robot.jpg",
            id: 3,
            content: `
            <p>
                Collaborated on a project exploring the use of AI and 
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
            id: 4,
            content: `a sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. `
        },
        {
            name: "TensorFlow Biomedical Image Segmentation",
            img_src: "routes.png",
            id: 6,
            content: `
            To teach myself TensorFlow, 
            I used the U-Net algorithm to create a Image 
            Segmentation model to segment liver scans.
            `
        },
        {
            name: "This website [WIP]",
            img_src: "treo.png",
            id: 7,
            content: `
            <p>
                As part of my continued practice of the MERN Stack
                I decided to rewrite my portfolio
                website to the one you're currently looking at.
            </p><p>
                The site uses redux for state management and SASS 
                CSS-preprocessing for styling. The website is 
                currently contuinually deployed using Heroku,
                with the repository being publicly available 
                on my GitHub.
            </p><p>
                Once I have finalised the front end design I intend
                to write a basic Content Management System such that
                it is easy for me to add new work and edit site content.
            </p>
            `
        },
        {
            name: "Paradoujin.com - Underground Music Blog",
            img_src: "ioc.png",
            id: 8,
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
            img_src: "robot.jpg",
            id: 9,
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
        {
            name: "I just need some ******* eggs [WIP]",
            img_src: "ar.png",
            id: 10,
            content: `
            <p>
                An FPS game I'm currently making about a mutated supermarket.
            </p><p>
                The concept is that you mush dash close to an enemy
                avoiding their projectiles until you're in close
                range to them, at which point you can grab them and use 
                their attacks against the other enemies until you run
                out of ammo. This back and forth of dodging projectiles vs
                firing them is intended to give combat a rhythm similar to
                DOOM 2016.
            </p><p>
                Currently very, very WIP!
            </p>
            `
        },
    ]

    useEffect(() => {
        let items = document.getElementsByClassName("list-item")
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("highlight")
        }
        if (props.selectedItem.id !== "HOME") {
            document.getElementById("list-item-"+(props.selectedItem.id+1)).classList.add("highlight")
        }
    }, [props.selectedItem])

    return(
        <div className="mobile-nav" id="mobile-nav-elem">
            <div id="category-list">
                {CATEGORIES.map((category, index) => (
                    <div className="list-item category" id={"list-category-"+category.id} 
                    key={index} onClick={() => {
                        let elem = document.getElementById(`mobile-contentItem-${category.index}`);
                        elem.scrollIntoView(false, {behavior: "smooth"});
                    }} >
                       {category.name}
                    </div>
                ))}
            </div>
            
            <div id="item-list">
                {ENTRIES.map((item, index) => (
                    <div className="list-item" id={"list-item-"+item.id} 
                    key={index} onClick={() => {
                        let elem = document.getElementById(`mobile-contentItem-${item.id}`);
                        elem.scrollIntoView(false, {behavior: "smooth"});
                    }} >
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedItem: state.selectedItem
})

export default connect(
    mapStateToProps,
    {
        selectItem
    }
)(TopNav);