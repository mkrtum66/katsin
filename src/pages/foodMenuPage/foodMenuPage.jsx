import React, { useEffect, useState } from 'react';
import './foodMenuPage.scss';
import ScrollToHeader from '../../components/scrollToHeader';
import { foodMenu } from './mock';
import { scrollToSection } from '../../utils/scrollToSection';
// import { Player } from 'video-react';
import video from '../../assets/video/steak-video.mp4';

const FoodMenuPage = () => {
  const [myRef, setMyRef] = useState();

  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  return (
    <div className={`foodMenuPage`}>
      <ScrollToHeader links={foodMenu} setMyRef={setMyRef} />
      <video className="video-background" autoPlay muted loop playsInline preload={'metadata'}>
        <source src={video} type="video/mp4" />
      </video>
      {/*<Player*/}
      {/*  autoPlay*/}
      {/*  muted*/}
      {/*  loop*/}
      {/*  playsInline*/}
      {/*  preload={'metadata'}*/}
      {/*  poster="/assets/poster.png"*/}
      {/*  src={video}*/}
      {/*/>*/}
      <div className="container">
        {foodMenu.map(item => {
          return (
            <div key={item.id} id={item.title.toUpperCase()} className="content">
              <h2>{item.title.toUpperCase()}</h2>
              <ul className="foodList">
                {item.type.map(food => {
                  return (
                    <li key={food.id}>
                      <p className="foodName">{food.name.toUpperCase()}</p>
                      <p className="foodDescription">{food.description}</p>
                      <p className="foodPrice">{food.price}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodMenuPage;
