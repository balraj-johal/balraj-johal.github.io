import { SELECT_ITEM } from "../actions/types";

const initialState = {
    selectedItem: {
        name: "Routes",
        id: 1
    },
    test: 1
};

const items = [
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
        id: 0,
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
]
  
export default function(state = initialState, action) {
    switch (action.type) {
        case SELECT_ITEM:
            //return new state
            return {
                ...state,
                selectedItem: items[action.payload]
            };
        default:
            return {
                ...state,
                selectedItem: items[0]
            };
        // default:
        //     return state;
    }
}