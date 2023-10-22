import React, { useContext } from 'react'
import '../style/Target.css'
import Navigate from './Navigate'
import { CounterContext } from '../context/counterContext'
import { useTranslation } from 'react-i18next'



export default function Target() {

    const {data} = useContext(CounterContext)
    const { t } = useTranslation();




    return (
        <div>
        <section className='mt-5'>
            <div className="container">
            <div className="card rounded-3">
                <div className="row p-4 text-center">
                    <div className="col-md-3">
                        <p className='text-body-secondary'>{t("deliveryNumber")}{data &&  data.TrackingNumber}</p>
                        <h2 className='h6 fw-bold text-success' >{data && data.CurrentStatus?.state}</h2>
                    </div>
                    <div className="col-md-3">
                        <p className='text-body-secondary'>{t("LastUpdated")}</p>
                        <h2 className='h6 fw-bold'>{data &&  data.CreateDate.split("T")[0]}</h2>
                    </div>
                    <div className="col-md-3">
                        <p className='text-body-secondary'>{t("MerchantName")}</p>
                        <h2 className='h6 fw-bold'>{data &&  data.provider}</h2>
                    </div>
                    <div className="col-md-3">
                        <p className='text-body-secondary'>{t("deliveryNumber")}</p>
                        <h2 className='h6 fw-bold'>{ data &&  data.nextWorkingDay?.[0].dayDate} {data &&  data.nextWorkingDay?.[0].dayName}</h2>
                    </div>
                </div>
                <hr/>
                <div className="card-body">
                    <Navigate/>
                </div>
            </div>
            </div>
        </section>

        </div>
    )
}
