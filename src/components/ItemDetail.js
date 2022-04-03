import React from 'react'

function ItemDetail({ beerDetail }) {
    return (
        <>
            <div className='detailSection row col-xl-8 mx-auto my-5 py-3'>
                <div className='col-xl-6'>
                    <img src={beerDetail.pictureURL} ></img>
                </div>
                <div className='col-xl-6 mt-5'>
                    <h3> {beerDetail.name} {beerDetail.Size} </h3>
                    <h5>{beerDetail.type} | {beerDetail.origin} </h5>
                    <h5>ABV: {beerDetail.ABV} </h5>
                    <h3 className='mt-4'>$ {beerDetail.price} </h3>
                    <p className='mt-4'> {beerDetail.Description} </p>

                </div>
            </div>
        </>
    )
}

export default ItemDetail