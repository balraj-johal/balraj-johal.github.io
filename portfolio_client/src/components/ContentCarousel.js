import { useState, useEffect } from 'react';
import { connect } from "react-redux";

function ContentCarousel(props) {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. 
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.`
        },
        {
            name: "XR Stories - Treo",
            img_src: "treo.png",
            id: 1,
            content: `fcu. `
        },
        {
            name: "IoC Student Enterprises Website",
            img_src: "ioc.png",
            id: 2,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor asdincididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim asdas. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. `
        },
        {
            name: "Robot Theatre",
            img_src: "robot.jpg",
            id: 3,
            content: `tese sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. `
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
            name: "Routes",
            img_src: "routes.png",
            id: 6,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. 
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.`
        },
        {
            name: "XR Stories - Treo",
            img_src: "treo.png",
            id: 7,
            content: `fcu. `
        },
        {
            name: "IoC Student Enterprises Website",
            img_src: "ioc.png",
            id: 8,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor asdincididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim asdas. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. `
        },
        {
            name: "Robot Theatre",
            img_src: "robot.jpg",
            id: 9,
            content: `tese sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. `
        },
        {
            name: "AR/AI Visual Programming Toolkit",
            img_src: "ar.png",
            id: 10,
            content: `a sint occaecat 
            cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum. `
        },
    ]
    const PROFESSIONAL_INDEX = 0;
    const OTHER_INDEX = 6;
    
    function isInViewport(element) {
        if (element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }

    let index = 0;
    let handleHighlight = () => {
        index++;
        console.log(`handle called ${index} times`)
        for (let i = 0; i < ENTRIES.length; i++) {
            //handle category identification
            let categoryElem;
            if (i >= PROFESSIONAL_INDEX && i < OTHER_INDEX) {
                categoryElem = document.getElementById(`list-category-3`);
            } else if (i >= OTHER_INDEX) {
                categoryElem = document.getElementById(`list-category-4`);
            } else {
                categoryElem = document.getElementById(`list-category-1`);
            }
            // console.log(categoryElem)
        
            let elem = document.getElementById(`mobile-contentItem-${i}`)
            let listItem = document.getElementById(`list-item-${i}`)

            if (listItem) {
                listItem.classList.remove("highlight");
            }
            if (categoryElem) {
                categoryElem.classList.remove("highlight");
            }
            if (isInViewport(elem)) {
                listItem.classList.add("highlight");
                listItem.scrollIntoView(false, {behavior: "smooth", inline: "end"});
                categoryElem.classList.add("highlight");
                categoryElem.scrollIntoView(false, {behavior: "smooth", inline: "end"});
            }
        }
    }
    let scrolling = false;
    let setScrolling = () => {
        scrolling = true;
    };
    setInterval(() => {
        if (scrolling) {
            scrolling = false;
            handleHighlight();
        }
    }, 300);

    return(
        <div className="carousel-wrap" onScroll={setScrolling}
            style={{gridTemplateColumns: `repeat(${ENTRIES.length}, 100%)`}}
        >
            {ENTRIES.map((item, index) => (
                <div className="mobile-content-item" 
                    id={"mobile-contentItem-"+item.id} key={index}
                >
                    <div className={`image-container ${item.img_src ? "" : "hideit"}`}>
                        <img src={`/res/${item.img_src}`} alt={item.img_alt}
                            width="auto" height={200}
                            draggable="false">
                        </img>
                    </div>
                    <div className="content cust-scroll">
                        <h1>{item.name}</h1>
                        {item.content}
                    </div>
                    <div className="swipe-prompt">
                        <span>SWIPE &gt;</span> {/* TODO: REPLACE WITH SVG ARROW */}
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
})

export default connect(
    mapStateToProps,
    {
    }
)(ContentCarousel);