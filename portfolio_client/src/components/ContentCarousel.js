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
            if (listItem) {
                listItem.classList.remove("highlight");
            }
            if (isInViewport(elem)) {
                let categoryElem;
                let highlightException;
                switch (props.entries[i].category) {
                    case "skills":
                        categoryElem = document.getElementById(`list-category-1`);
                        highlightException = 1;
                        break;
                    case "about":
                        categoryElem = document.getElementById(`list-category-2`);
                        highlightException = 2;
                        break;
                    case "professional":
                        categoryElem = document.getElementById(`list-category-3`);
                        highlightException = 3;
                        break;
                    case "other":
                        categoryElem = document.getElementById(`list-category-4`);
                        highlightException = 4;
                        break;
                    case "socials":
                        categoryElem = document.getElementById(`list-category-5`);
                        highlightException = 5;
                        break;
                    default:
                        break;
                }
                //remove highlights where appropriate
                for (let i = 1; i <=4; i++) {
                    if (i != highlightException) {
                        let elem = document.getElementById(`list-category-${i}`);
                        elem.classList.remove("highlight")
                    }
                }
                //scroll to correct entries and add highlights
                let itemList = document.getElementById("item-list");
                let catList = document.getElementById("category-list");
                listItem.classList.add("highlight");
                categoryElem.classList.add("highlight");
                itemList.scrollTo(listItem.offsetLeft, 0, {behavior: "smooth"});
                catList.scrollTo(categoryElem.offsetLeft, 0, {behavior: "smooth"});
            }
        }
    }

    return(
        <div>
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
            <div className="swipe-prompt">
                <span>SWIPE &gt;</span> 
            </div>
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