import React from 'react'
import '../style/Address.css'
import Ask from '../assets/image/ask.png'
import { useTranslation } from 'react-i18next';

export default function Address() {

    const { t } = useTranslation();

    return (
        <>
            <section className='details sec-gap'>
            <div className="container">
                <div className="main-header">
                    <h1 className='h5 mb-4'>{t("address")}</h1>
                </div>
                <div className="address border rounded-2 p-3 bg-light">
                    <p>{t("clientAddress")}</p>
                </div>
                <div className="problem border rounded-2 p-3 bg-light mt-2">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Ask} className="w-100"></img>
                        </div>
                        <div className="col-md-8">
                            <h3 className='h6'>{t("problem")}</h3>
                            <button className='btn btn-danger m-auto'> {t("button")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
