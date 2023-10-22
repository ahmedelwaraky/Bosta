import React from 'react'
import Navbar from './Navbar'
import Target from './Target'
import Details from './Details'
import Address from './Address'

export default function Home() {
    return (
    <>
        <Navbar/>
        <Target/>
        <section className='pt-2 '>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Details></Details>
                </div>
                <div className="col-md-4">
                    <Address/>
                </div>
            </div>
        </div>
        </section>
        
    </>
    )
}
