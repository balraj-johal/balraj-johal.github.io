import { connect } from "react-redux";

function ContentCarousel(props) {
    const ENTRIES = [
        // {
        //     name: "",
        //     img_src: "",
        //     content: `
        //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        //     sed do eiusmod tempor incididunt ut labore et dolore magna 
        //     aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        //     ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        //     Duis aute irure dolor in reprehenderit in voluptate velit 
        //     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        //     occaecat cupidatat non proident, sunt in culpa qui officia 
        //     deserunt mollit anim id est laborum.
        //     `,
        //     id: "HOME"
        // },
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
    
    return(
        <div className="carousel-wrap" 
            style={{gridTemplateColumns: `repeat(${ENTRIES.length}, 100%)`}}
        >
            {ENTRIES.map((item, index) => (
                <div className="mobile-content-item" 
                    id={"mobile-contentItem-"+item.id} key={index}
                >
                    <div className={`image-container ${item.img_src ? "" : "hideit"}`}>
                        <img src={`/res/${item.img_src}`} alt={item.img_alt}
                            width="auto" height={200}
                            draggable="false">
                        </img>
                    </div>
                    <div className="content cust-scroll">
                        <h1>{item.name}</h1>
                        {item.content}
                    </div>
                    <div className="swipe-prompt">
                        SWIPE ------&gt; {/* TODO: REPLACE WITH SVG ARROW */}
                    </div>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
})

export default connect(
    mapStateToProps,
    {
    }
)(ContentCarousel);