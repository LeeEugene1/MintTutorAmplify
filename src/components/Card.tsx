import { FC } from 'react';

interface CardTypeProps{
    newCardType? : string
}

const Card: FC<CardTypeProps> = ({newCardType = 'default'}) => {
  return (
    <div>
        <img
        src={`/images/${newCardType}.png`}
        width="300"
        height="300"
        alt="Picture of the author"
        />
    </div>
  )
}

export default Card