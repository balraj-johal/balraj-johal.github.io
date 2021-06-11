import { connect } from "react-redux";

function ContentItem(props) {
    return(
        <div className="content-item" id="content-scrollbar-cust">
            {/* <section class="section parallax parallax-one"></section> */}
            <div className={(props.item.img_src ? "" : "hideit")} className={`image-container ${props.item.img_src ? "" : "hideit"}`}>
                <img src={`/res/${props.item.img_src}`}></img>
            </div>
            <div className="content">
                {props.item.content}
            </div>
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