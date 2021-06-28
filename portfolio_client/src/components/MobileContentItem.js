function MobileContentItem(props) {
    return(
        <div className="mobile-content-item" id={"mobile-contentItem-"+props.item.id}>
            <div className={`image-container ${props.item.img_src ? "" : "hideit"}`}>
                <img src={`/res/${props.item.img_src}`} alt={props.item.img_alt}
                    width="auto" height={200}
                    draggable="false">
                </img>
            </div>
            <div className="content cust-scroll">
                <h1>{props.item.name}</h1>
                <div dangerouslySetInnerHTML={{ __html: props.item.content }}></div>
            </div>
            <div className="swipe-prompt">
                <span>SWIPE &gt;</span> {/* TODO: REPLACE WITH SVG ARROW */}
            </div>
        </div>
    )
}

export default MobileContentItem;