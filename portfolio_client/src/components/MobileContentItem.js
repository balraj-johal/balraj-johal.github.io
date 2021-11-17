import { useEffect, useState } from "react";

function MobileContentItem(props) {
    let [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false);
    }, [props.item.img_src]);

    return(
        <div className="mobile-content-item" 
            id={"mobile-contentItem-"+props.item.id}
        >
            <div className={`${props.item.img_src ? "" : "hideit"} image-container`}>
                {!imageLoaded ? (
                    <div className="loader">
                        <svg className="circular-loader" viewBox="25 25 50 50" >
                            <circle 
                                className="loader-path" 
                                cx="50" cy="50" 
                                r="20" 
                                fill="none" 
                                stroke="#1f1f1f" 
                                strokeWidth="2" 
                            />
                        </svg>
                    </div>
                ) : null}
                <img
                    src={"https://d2hks59q0iv04y.cloudfront.net/" + props.item.img_src}
                    style={!imageLoaded ? { visibility: 'hidden' } : {}}
                    onLoad={() => setImageLoaded(true)}
                    alt={props.item.img_alt}
                    width="auto" height={200}
                    draggable="false"
                    loading="lazy"
                />
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