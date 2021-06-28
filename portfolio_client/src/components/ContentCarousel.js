import { useEffect } from "react";
import { connect } from "react-redux";
import MobileContentItem from "./MobileContentItem";

function ContentCarousel(props) {
    let aboutItem;
    let skillsItem;
    let socialsItem;
    props.entries.forEach(elem => {
        switch (elem.id) {
            case "about":
                aboutItem = elem;
                break;
            case "SKILLS":
                skillsItem = elem;
                break;
            case "SOCIALS":
                socialsItem = elem;
                break;
            default:
                break;
        }
    });
    const PROFESSIONAL_INDEX = 0;
    const OTHER_INDEX = 6;
    
    function isInViewport(element) {
        if (element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    }

    useEffect(() => {
        let aboutNavItem = document.getElementById(`list-category-2`);
        let aboutItem = document.getElementById(`mobile-contentItem-about`);
        aboutNavItem.classList.add("highlight");
        aboutItem.scrollIntoView(false, {behavior: "smooth", inline: "end"});
    }, [])

    //top nav behaviour
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
    let handleHighlight = () => {
        for (let i = 0; i < props.entries.length; i++) {
            let elem = document.getElementById(`mobile-contentItem-${props.entries[i].id}`)
            //clear entry highlight
            let listItem = document.getElementById(`list-item-${props.entries[i].id}`)
            // let listItem = document.getElementById(`list-item-${i}`)
            if (listItem) {
                listItem.classList.remove("highlight");
            }
            if (isInViewport(elem)) {
                // clear all category highlights
                for (let i = 1; i <=4; i++) {
                    let elem = document.getElementById(`list-category-${i}`);
                    elem.classList.remove("highlight")
                }
                //get category element
                let categoryElem;
                switch (props.entries[i].category) {
                    case "skills":
                        categoryElem = document.getElementById(`list-category-1`);
                        break;
                    case "about":
                        categoryElem = document.getElementById(`list-category-2`);
                        break;
                    case "professional":
                        categoryElem = document.getElementById(`list-category-3`);
                        break;
                    case "other":
                        categoryElem = document.getElementById(`list-category-4`);
                        break;
                    case "socials":
                        categoryElem = document.getElementById(`list-category-5`);
                        break;
                    default:
                        break;
                }
                console.log(categoryElem)
                // if (i >= PROFESSIONAL_INDEX && i < OTHER_INDEX) {
                //     categoryElem = document.getElementById(`list-category-3`);
                // } else if (i >= OTHER_INDEX) {
                //     categoryElem = document.getElementById(`list-category-4`);
                // } else {
                //     categoryElem = document.getElementById(`list-category-1`);
                // }
                //scroll to correct entries and add highlights
                listItem.classList.add("highlight");
                listItem.scrollIntoView(false, {behavior: "smooth", inline: "end"});
                categoryElem.classList.add("highlight");
                categoryElem.scrollIntoView(false, {behavior: "smooth", inline: "end"});
            } else {
                console.log("not in vp")
            }
        }
    }

    return(
        <div className="carousel-wrap" 
            onScroll={setScrolling}
            style={{gridTemplateColumns: `repeat(${props.entries.length}, 100%)`}}
        >
            <MobileContentItem item={socialsItem} />
            <MobileContentItem item={skillsItem} />
            <MobileContentItem item={aboutItem} />
            {props.entries.map((item, index) => (
                <MobileContentItem item={item} key={index} />
            ))}

        </div>
    )
}

const mapStateToProps = state => ({
    entries: state.allEntries
})

export default connect(
    mapStateToProps,
    {
    }
)(ContentCarousel);