import CardList from '../CardList/CardList';
import React from "react";
import Preloader from '../Preloader/Preloader';
import { api } from '../api/api';
import apiImg from '../api/apiImage';
import { Routes, Route } from "react-router-dom";
import CardDetals from '../CardDetals/CardDetals';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import CardInfo from '../../types/Card';
import CardsResponse from '../../types/CardsResponse'
import ImageResponse from '../../types/ImageResponse'

function App() {

  const [isVerticalLeayout, setIsVerticalLeayout] = React.useState<boolean>(true);
  const [count, setCount] = React.useState(1);
  const [cards, setCards] = React.useState<CardInfo[]>([]);

  const [cardDetails, setCardDetals] = React.useState<CardInfo | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const [isLastError, setIsLastError] = React.useState<boolean>(false);
  const [isShowMoreLoading, setIsShowMoreLoading] = React.useState<boolean>(false);

  const [scroll, setScroll] = React.useState(0);
  const onScroll = React.useCallback(() => setScroll(Math.round(window.scrollY)), []);

  const [isCardsNull, setIsCardsNull] = React.useState(false);

  React.useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
  }, [onScroll]);


  function handleAddCards() {
    if (count === 10) {
      return
    } else {
      setCount(count + 1);
      setIsShowMoreLoading(true)
    }
  }

  function handleChange() {
    setIsLastError(false)
  }

  function handleScroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  React.useEffect(() => {
    api.getCards(count)
      .then((data: CardsResponse) => {
        if (data.items.length === 0) {
          setIsCardsNull(true)
        } else {
          apiImg.getImages()
            .then((images: ImageResponse[]) => {

              const updatedCards = data.items.map(card => {
                card.images = images.map(img => img.url);
                return card;
              });

              setCards(prevCards => {
                const uniqueCards = [...prevCards, ...updatedCards]
                  .reduce((acc: CardInfo[], curr: CardInfo) => {
                    if (!acc.find(card => card.id === curr.id)) {
                      acc.push(curr);
                    }
                    return acc;
                  }, []);

                return uniqueCards;
              });

              setIsLoading(false);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err, 'Error on cards request');
        setIsLastError(true);
      })
      .finally(() => setIsShowMoreLoading(false));
  }, [count]);


  const rowSkeleton = 16;
  let rows: Array<React.JSX.Element> = [];

  if (isLoading) {
    for (let index = 0; index < rowSkeleton; index++) {
      rows.push(
        <li className='card-skeleton'>
          <div>
            <Skeleton width={224} height={260} />
          </div>
          <div className='card__swapper'>
            <Skeleton width={56} height={8} baseColor='#F8F8F8' />
          </div>
          <h2 className='card__price'>
            <Skeleton width={160} height={25} />
          </h2>
          <p className='card__name'>
            <Skeleton height={16} width={200} />
          </p>
          <button className='card__icon' >
            <Skeleton height={25} width={25} />
          </button>

          <div className='card__container'>
            <p className='card__adress'>
              <Skeleton height={14} width={200} />
            </p>
          </div>
        </li>
      )
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <>
            {isLoading ? (<div>
              <div className='header__skelet'>
                <Skeleton height={39} width={84} borderRadius={8} />
              </div>
              <CardList setCardDetals={setCardDetals} list={cards} isVerticalLeayout={isVerticalLeayout} />
              
              <SkeletonTheme baseColor='#EAEAEA' highlightColor='#F8F8F8' >
                <ul className='cards'>
                  {rows}
                </ul>
              </SkeletonTheme>

              <div className='button__skelet'>
                <Skeleton width={125} height={32} borderRadius={45} />
              </div>

            </div>) : (isCardsNull ?
              <div className='null-data'>
                <p className='null-data__title'>ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО</p>
                <p className='null-data__text'>Простите, по вашему запросу товаров сейчас нет. Задайте запрос по-другому или измените характеристики</p>
              </div> : (<>
                <button onClick={handleScroll} className={`button-scroll ${(scroll > 100) ? 'button-scroll_active ' : ''}`}>
                  <div className='button-scroll__icon' />
                  <p className='button-scroll__text'>Вверх</p>
                </button>

                <div className='leayout'>
                  <button className='leayout__button' onClick={() => setIsVerticalLeayout(false)}>
                    <svg fill="none" className={`leayout__menu ${isVerticalLeayout ? "" : 'leayout__menu_active'}`} viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.1" y="18.1" width="28.8" height="11.8" rx="1.9" strokeWidth="2.2" />
                      <rect x="1.1" y="1.1" width="28.8" height="11.8" rx="1.9" strokeWidth="2.2" />
                    </svg>
                  </button>

                  <button className='leayout__button' onClick={() => setIsVerticalLeayout(true)}>
                    <svg className={`leayout__menu ${isVerticalLeayout ? "leayout__menu_active" : ''}`} fill="none" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.1" y="1.1" width="11.8" height="11.8" rx="1.9" strokeWidth="2.2" />
                      <rect x="18.1" y="1.1" width="11.8" height="11.8" rx="1.9" strokeWidth="2.2" />
                      <rect x="1.1" y="18.1" width="11.8" height="11.8" rx="1.9" strokeWidth="2.2" />
                      <rect x="18.1" y="18.1" width="11.8" height="11.8" rx="1.9" strokeWidth="2.2" />
                    </svg>
                  </button>
                </div>

                <CardList setCardDetals={setCardDetals} list={cards} isVerticalLeayout={isVerticalLeayout} />

                {
                  isLastError ?
                    <div className='button-container-error'>
                      <p className='button-container__text'>Ошибка при загрузке</p>
                      <button className='button-container__button' onClick={handleChange}>Повторить попытку</button>
                    </div>
                    : count === 10
                      ? ""
                      : isShowMoreLoading ? <Preloader /> : <div className='button-container'>
                        <button onClick={handleAddCards} className='button-add-card'>Показать еще</button>
                      </div>
                }

              </>))}
          </>
        } />

        <Route path={`${cardDetails?.id}`} element={
          <CardDetals card={cardDetails}></CardDetals>
        } />
      </Routes>
    </div>
  );
}

export default App;
