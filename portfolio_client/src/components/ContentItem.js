import { useEffect, useState } from "react";
import { connect } from "react-redux";

function ContentItem(props) {
    let [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false);
    }, [props.item.img_src]);

    return(
        <div className="content-item" id="content-scrollbar-cust">
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
                                loading="lazy"
                            />
                        </svg>
                    </div>
                ) : null}
                <img
                    src={"https://d2hks59q0iv04y.cloudfront.net/" + props.item.img_src}
                    style={!imageLoaded ? { visibility: 'hidden' } : {}}
                    onLoad={() => setImageLoaded(true)}
                    loading="lazy"
                />
                {/* <img src={"https://d2hks59q0iv04y.cloudfront.net/" + props.item.img_src}
                    alt={props.img_alt}
                    draggable="false">
                </img> */}
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