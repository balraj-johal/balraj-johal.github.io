import { connect } from "react-redux";
import { selectItem } from "../actions/actions";

function Header(props) {
    return(
        <div className={`header`} onClick={() => {props.selectItem(0)}}>
            <h1 className={`${props.selectedItem.name ? "moveitleft" : "moveitright"}`}>
                BALRAJ JOHAL
            </h1>
            <div className={`header-selected-item ${(props.selectedItem.name ? "nottransparent" : "transparent")} 
                ${props.selectedItem.name ? "movetitleleft" : "movetitleright"}`} 
            >
                {(props.selectedItem.name ? props.selectedItem.name : "")}
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
)(Header);