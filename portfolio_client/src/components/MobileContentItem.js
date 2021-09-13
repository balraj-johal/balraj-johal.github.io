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
            {props.item.link ? <Link link={props.item.link} /> : null}
            <div className="content cust-scroll">
                {props.item.name ? <h1>{props.item.name}</h1> : null }
                <div className="content-override" dangerouslySetInnerHTML={{ __html: props.item.content }}></div>
            </div>
        </div>
    )
}

function Link(props) {
    return(
        <a className="content-link" rel="noreferrer" href={props.link} target="_blank" >
            click for more
        </a>
    )
}

export default MobileContentItem;