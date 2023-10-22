import React, { useContext } from 'react'
import '../style/Details.css'
import { CounterContext } from '../context/counterContext'
import {useTranslation} from "react-i18next";

export default function Details() {
    const { data } = useContext(CounterContext);

    const { t } = useTranslation();

    return (
        <section className='details pt-5'>
            <div className="container">
                <div className="main-header">
                    <h1 className='h5 mb-4'>{t('details')}</h1>
                    {/* <h1 className='h5 mb-4'>Details</h1> */}
                </div>
                <table className="table table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="col">{t('branch')}</th>
                            <th scope="col">{t('date')}</th>
                            <th scope="col">{t('time')}</th>
                            <th scope="col">{t('detail')}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data && data.TransitEvents.map((item) => (
                            <tr key={item.id}>
                                <td>{item?.hub}</td>
                                <td>{item?.timestamp.split("T")[0]}</td>
                                <td>{item?.timestamp.split("T")[1]}</td>
                                <td>{item?.state}<br></br>{item?.reason}</td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
        </section>
    )
}





                        