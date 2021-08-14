import { connect } from "react-redux";

function ContentItem(props) {
    return(
        <div className="content-item" id="content-scrollbar-cust">
            <div className={`image-container ${props.item.img_src ? "" : "hideit"}`}>
                <img src={`/res/${props.item.img_src}`} 
                    alt={props.img_alt}
                    draggable="false">
                </img>
            </div>
            {props.item.link ? <Link link={props.item.link} /> : null}
            <div className="content" dangerouslySetInnerHTML={{ __html : props.item.content}}></div>
        </div>
    )
}

function Link(props) {
    return(
        <a className="content-link" href={props.link} target="_blank" >
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