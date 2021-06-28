import { useEffect } from "react";
import { connect } from "react-redux";
import { selectItem } from "../actions/actions";

function SideNav(props) {
    //li highlighting
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
        <div className="side-nav" id="sidenav-scrollbar-cust">
            <h2 className="list-header">Professional Work</h2>
            <ul>
                {props.entries.map((item, index) => (
                    <div key={index} >
                        {(item.category.includes("professional") ? <ListItem item={item} selectItem={props.selectItem} /> : null)}
                    </div>
                ))}
            </ul>
            
            <h2 className="list-header">Other Stuff</h2>
            <ul>
                {props.entries.map((item, index) => (
                    <div key={index} >
                        {(item.category.includes("other") ? <ListItem item={item} selectItem={props.selectItem} /> : null)}
                    </div>
                ))}
            </ul>
        </div>
    )
}

function ListItem(props) {
    return(
        <li className="list-item" id={"list-item-"+props.item.id} onClick={() => {
            props.selectItem(props.item.id);
        }} >
            {props.item.name}
        </li>
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
)(SideNav);