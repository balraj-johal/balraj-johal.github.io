import { useEffect } from "react";
import { connect } from "react-redux";
import { selectItem } from "../actions/actions";

function TopNav(props) {

    const CATEGORIES = [
        {
            name: "Socials",
            id: 5,
            startItemID: "SOCIALS"
        },
        {
            name: "Skills",
            id: 1,
            startItemID: "SKILLS"
        },
        {
            name: "About Me",
            id: 2,
            startItemID: "about"
        },
        {
            name: "Profressional Work",
            id: 3,
            startItemID: "0"
        },
        {
            name: "Other Stuff",
            id: 4,
            startItemID: "5"
        },
    ]

    // highlight selected item
    useEffect(() => {
        let items = document.getElementsByClassName("list-item")
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("highlight")
        }
        if (props.selectedItem.id !== "about") {
            let elem = document.getElementById("list-item-"+(props.selectedItem.id))
            elem.classList.add("highlight")
        }
    }, [props.selectedItem])

    let selectAndScrollToItem = (itemID) => {
        let elemID = `mobile-contentItem-${itemID}`;
        let elem = document.getElementById(elemID);
        elem.scrollIntoView(false, {behavior: "smooth"});
        props.selectItem(itemID);
    }

    return(
        <div className="mobile-nav" id="mobile-nav-elem">
            <div id="category-list">
                {CATEGORIES.map((category, index) => (
                    <div 
                        className="list-item category" 
                        id={"list-category-"+category.id} 
                        onClick={() => {
                            selectAndScrollToItem(category.startItemID);
                        }}
                        key={index}
                    >
                       {category.name}
                    </div>
                ))}
                <div className="list-item category filler" id={"list-category-filler"}></div>
            </div>
            <div id="item-list">
                {props.entries.map((item, index) => (
                    <div 
                        className="list-item" 
                        id={"list-item-"+item.id}
                        onClick={() => {
                            selectAndScrollToItem(item.id);
                        }}
                        key={index}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    selectedItem: state.selectedItem,
    entries: state.allEntries
})

export default connect(
    mapStateToProps,
    {
        selectItem
    }
)(TopNav);