import Card from "../Card/Card";
import CardHorizontal from '../CardHorizontal/CardHorizontal';
import 'react-loading-skeleton/dist/skeleton.css'
import CardInfo from "../../types/Card";

function CardList(props:{ setCardDetals: React.Dispatch<CardInfo>, isVerticalLeayout: boolean, list: CardInfo[] }) {
    return (
        <>
            {
                props.isVerticalLeayout ?
                    (<ul className='cards'>
                        {
                            props.list?.map((card, i) => {

                                return <Card key={i} setCardDetails={props.setCardDetals} isVerticalLeayout={props.isVerticalLeayout} card={card} />
                            })
                        }
                    </ul>) :
                    (<ul className='cards-horizontal'>
                        {props.list?.map((card) => {
                            return <CardHorizontal setCardDetails={props.setCardDetals} isVerticalLeayout={props.isVerticalLeayout} card={card} />
                        })
                        }
                    </ul>)

            }
        </>
    )
}

export default CardList;