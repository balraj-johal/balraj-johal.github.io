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
            <div className="content" dangerouslySetInnerHTML={{ __html : props.item.content}}></div>
        </div>
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