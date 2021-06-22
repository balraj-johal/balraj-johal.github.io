import { useEffect } from "react";
import { connect } from "react-redux";
import { selectItem } from "../actions/actions";

function TopNav(props) {

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

    let itemList;

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

                    }} >
                       <a>{category.name}</a>
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
                       <a>{item.name}</a>
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