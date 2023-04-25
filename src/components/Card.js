const CardProduct = (props) => {
    const {title,description,images,price}= props.product;
    return(
        <>
        <div className="col-md-4 col-lg-3 col-xl-3">
        <div class="card" style="width: 18rem;">
            <img src={images[0]} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
            <a href="#" class="btn btn-primary">{price}</a>
            </div>
            </div>
        </div>
        </>
    )
}
export default CardProduct