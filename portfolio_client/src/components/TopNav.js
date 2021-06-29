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

    // //scroll to desired category point on load
    // useEffect(() => {
    //     let catList = document.getElementById("category-list");
    //     catList.scrollTo(40, 0);
    // }, [])

    useEffect(() => {
        let items = document.getElementsByClassName("list-item")
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("highlight")
        }
        if (props.selectedItem.id !== "about") {
            document.getElementById("list-item-"+(props.selectedItem.id)).classList.add("highlight")
        }
    }, [props.selectedItem])

    return(
        <div className="mobile-nav" id="mobile-nav-elem">
            <div id="category-list">
                {CATEGORIES.map((category, index) => (
                    <div className="list-item category" id={"list-category-"+category.id} 
                    key={index} onClick={() => {
                        let elem = document.getElementById(`mobile-contentItem-${category.startItemID}`);
                        elem.scrollIntoView(false, {behavior: "smooth"});
                        props.selectItem(category.startItemID);
                    }} >
                       {category.name}
                    </div>
                ))}
                <div className="list-item category filler" id={"list-category-filler"}></div>
            </div>
            
            <div id="item-list">
                {props.entries.map((item, index) => (
                    <div className="list-item" id={"list-item-"+item.id} 
                    key={index} onClick={() => {
                        let elem = document.getElementById(`mobile-contentItem-${item.id}`);
                        elem.scrollIntoView(false, {behavior: "smooth"});
                        props.selectItem(item.id);
                    }} >
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