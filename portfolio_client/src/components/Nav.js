import { useEffect } from "react";
import { connect } from "react-redux";
import { selectItem } from "../actions/actions";

function Nav(props) {

    const CATEGORIES = [
        {
            name: "Skills",
            id: 1
        },
        {
            name: "About Me",
            id: 2
        },
        {
            name: "Profressional Work",
            id: 3
        },
        {
            name: "Other Stuff",
            id: 4
        },
        {
            name: "Socials",
            id: 5
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
                {CATEGORIES.map((item, index) => (
                    <div className="list-item" id={"list-item-"+item.id} key={index} onClick={() => {
                        // props.selectItem(item.id); //TODO SELECT CATEGORY HERE
                    }} >
                       <a>{item.name}</a>
                    </div>
                ))}
            </div>
            
            <ul id="item-list">
                {/* {other.map((item, index) => (
                    <li className="list-item" id={"list-item-"+item.id} key={index} onClick={() => {
                        props.selectItem(item.id);
                    }} >
                        {item.name}
                    </li>
                ))} */}
            </ul>
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
)(Nav);