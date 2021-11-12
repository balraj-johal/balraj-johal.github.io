import { connect } from "react-redux";

function ContentItem(props) {
    return(
        <div className="content-item" id="content-scrollbar-cust">
            <div className={`${props.item.img_src ? "" : "hideit"} image-container`}>
                <img src={"https://d2hks59q0iv04y.cloudfront.net/" + props.item.img_src}
                    alt={props.img_alt}
                    draggable="false">
                </img>
                {/* <img src={`/res/${props.item.img_src}`} 
                    alt={props.img_alt}
                    draggable="false">
                </img> */}
            </div>
            {props.item.link ? <Link link={props.item.link} /> : null}
            <div
                className="content" 
                dangerouslySetInnerHTML={{ __html : props.item.content}} //TODO: make this secure
            ></div>
        </div>
    )
}

// link to content URL
function Link(props) {
    return(
        <a className="content-link" rel="noreferrer" href={props.link} target="_blank" >
            click for more
        </a>
    )
}


const mapStateToProps = state => ({
    item: state.selectedItem
})

export default connect(
    mapStateToProps,
    {
    }
)(ContentItem);