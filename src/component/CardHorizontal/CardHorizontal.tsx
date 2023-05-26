import React from "react";
import SimpleCarusel from "../SimpleCarusel/SimpleCarusel";
import { Link } from "react-router-dom";
import CardInfo from "../../types/Card";

function CardHorizontal(props: { setCardDetails: React.Dispatch<CardInfo>, card: CardInfo, isVerticalLeayout: boolean }) {
    const { setCardDetails, card,  isVerticalLeayout } = props;

    const [isActive, setIsActive] = React.useState<boolean>(false);

    function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        event.stopPropagation();
        let likes = JSON.parse(localStorage.getItem('selectedCards')!) || [];
        if (likes.includes(card.id)) {
            likes.remove(card.id);
            setIsActive(false);
        } else {
            likes.push(card.id);
            setIsActive(true);
        }
        localStorage.setItem('selectedCards', JSON.stringify(likes));
    }
    React.useEffect(() => {
        let likes = JSON.parse(localStorage.getItem('selectedCards')!) || [];
        if(likes.includes(card.id)) {
            setIsActive(true)
        }
    }, [])
    
    function handleClick() {
        setCardDetails(card)
        console.log(card)
    }

    return (
        <Link to={`${card.id}`} onClick={handleClick} className='element-link' >
            <li className='element'>
                {card.seen === true ? (<span className="element__span">Просмотрено</span>) : ''}
                <SimpleCarusel images={card.images} isVerticalLeayout={isVerticalLeayout} />
                <div className='element__desc'>
                    <h2 className='element__price'>{card.price}</h2>
                    <p className='element__name'>{card.title}</p>
                    <button className='element__icon' onClick={onClick}>
                        <svg className={`card__icon-svg ${isActive ? 'card__icon-svg_active' : ""}`} viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                            <path d="m19.432 9.2122c-0.8346 2.303-6.6078 7.4848-9.39 9.7878-2.4344-2.1111-7.6163-6.794-8.8683-8.6364-1.565-2.303-1.565-5.7571-1e-5 -8.0603 1.1284-1.6606 3.13-2.303 4.695-2.3033 1.7713-3.1814e-4 4.1733 2.303 4.1733 2.303s3.6517-3.4544 7.3034-1.1512c2.9001 1.8291 3.13 5.1816 2.0866 8.0604z" />
                        </svg>
                    </button>

                    <div className='element__container'>
                        <p className='element__adress'>{card.address}</p>
                        <p className='element__data'>{card.createdAt}</p>
                    </div>
                </div>
            </li>
        </Link>
    )
}
export default CardHorizontal;