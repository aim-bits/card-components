import React from 'react'
import Data from './constants/Data';

const NFT = () => {
  return (
    <div>
        <img src={`../assets/nft${Data.nft.image}`}/>
        <h4>{Data.nft.title}</h4>
        <p>{Data.nft.content}</p>
        <p>{Data.nft.amount}
            <span>{Data.nft.days}</span>
        </p>
        <hr/>
        <div>
            <img src='../assets/nft/image-avatar.png' />
            <p>{Data.nft.footer}</p>
        </div>
    </div>
  )
}

export default NFT