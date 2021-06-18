import { useEffect } from "react";
import { connect } from "react-redux";
import { selectItem } from "../actions/actions";

function SideNav(props) {

    const professional = [
        {
            name: "Routes",
            id: 1
        },
        {
            name: "XR Stories - Treo",
            id: 2
        },
        {
            name: "IoC Student Enterprises Website",
            id: 3
        },
        {
            name: "Robot Theatre",
            id: 4
        },
        {
            name: "AR/AI Visual Programming Toolkit",
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
        <div className="side-nav" id="sidenav-scrollbar-cust">
            <h2 className="list-header">Professional Work</h2>
            <ul>
                {professional.map((item, index) => (
                    <li className="list-item" id={"list-item-"+item.id} key={index} onClick={() => {
                        props.selectItem(item.id);
                    }} >
                       {item.name}
                    </li>
                ))}
            </ul>
            
            <h2 className="list-header">Other Stuff</h2>
            <ul>
                {other.map((item, index) => (
                    <li className="list-item" id={"list-item-"+item.id} key={index} onClick={() => {
                        props.selectItem(item.id);
                    }} >
                        {item.name}
                    </li>
                ))}
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
)(SideNav);