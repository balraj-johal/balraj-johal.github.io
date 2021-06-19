import { useEffect } from "react";
import { connect } from "react-redux";
import { selectItem } from "../actions/actions";

function Nav(props) {

    const categories = [
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
    const other = [
        {
            name: "Routes",
            id: 6
        },
        {
            name: "XR Stories - Treo",
            id: 7
        },
        {
            name: "IoC Student Enterprises Website",
            id: 8
        },
        {
            name: "Robot Theatre",
            id: 9
        },
        {
            name: "AR/AI Visual Programming Toolkit",
            id: 10
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
                {categories.map((item, index) => (
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