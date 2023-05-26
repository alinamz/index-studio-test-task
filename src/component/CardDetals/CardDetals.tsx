import CardInfo from '../../types/Card';

function CardDetals(props: {card : CardInfo | null}) {
    const { card } = props
    return(
        <div className="card-detals">
        <div className="card-detals__image">
            <img className="card-detals__image-link" alt={card?.title} src={card?.images != null && card.images.length > 1 ? card.images[0] : ''} />
        </div>
        <div className="card-detals__description">
            <h2 className="card-detals__name">{card?.title}</h2>
            <p className="card-detals__price">{card?.price}</p>
            <p className="card-datals__content">{card?.about}</p>
        </div>
    </div>
    )
    
}

export default CardDetals;