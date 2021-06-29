function MobileContentItem(props) {
    return(
        <div className="mobile-content-item" 
            id={"mobile-contentItem-"+props.item.id}
        >
            <div className={`image-container ${props.item.img_src ? "" : "hideit"}`}>
                <img src={`/res/${props.item.img_src}`} 
                    alt={props.item.img_alt}
                    width="auto" height={200}
                    draggable="false">
                </img>
            </div>
            <h1>{props.item.name}</h1>
            <div className="content cust-scroll">
                <div className="content-override" dangerouslySetInnerHTML={{ __html: props.item.content }}></div>
            </div>
        </div>
    )
}

export default MobileContentItem;