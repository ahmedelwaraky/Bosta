import React, { useContext } from 'react'
import '../style/Navbar.css'
import Logo from '../assets/image/a6d7cb1c389cd7727e0b9fb85060da24.svg'
// import { logDOM } from '@testing-library/react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import { CounterContext } from '../context/counterContext'

import { useTranslation } from 'react-i18next';




export default function Navbar() {

    // let [userInput , setUserInput]=useState('')
    // let [data , setData] = useState('')

    //     //get Value fron input
    // let handleInputChange =(event)=>{
    //     setUserInput(event.target.value)
    // }
    // console.log(userInput);


    // useEffect(() => {
    //     // Only make the API request if userInput is not empty
    //         const fetchData = async () => {
    //             try {
    //                 const response = await axios.get(`https://tracking.bosta.co/shipments/track/${userInput}`);
    //                 console.log(response.data);
    //                 setData(response.data);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //         if (userInput) {
    //             fetchData();
    //         }
    //         // ******************************************
    //         // fetch(ApiEndPoint)
    //         //     .then((response) => {    
    //         //         if (response.ok) {
    //         //             return response.json();
    //         //         }
    //         //         throw new Error('Network response was not ok');
    //         //     })
    //         //     .then((data) => {
    //         //         setData(data);
    //         //         console.log(data);
    //         //     })
    //         //     .catch((error) => {
    //         //         console.error('Error Message:', error);
    //         //     });
    //         // ******************************************
    // }, [userInput]);


    const { handleInputChange, userInput } = useContext(CounterContext)

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (newLanguage) => {

        i18n.changeLanguage(newLanguage);

        const htmlElement = document.querySelector('html');
        if (newLanguage === 'en') {
            htmlElement.setAttribute('dir', 'ltr');
        } else {
            htmlElement.setAttribute('dir', 'rtl');
        }

        
        };
    

    const currentLanguage = i18n.language;

    return (
        <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
            <Link className="fw-bold navbar-brand" to="#"><img src={Logo} className='w-50'/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="#">{t("main")} </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">{t("prices")}  </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#"> {t("AllSales")} </Link>
                    </li>
                </ul>
                <ul className="navbar-nav leftside ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {t("trackShipment")} 
                        </Link>
                        <ul className="dropdown-menu">
                            <li className='px-2'>
                                <div className="input-group mb-2">
                                    <label for="exampleFormControlInput1" className="form-label"> {t("TrackYourShipment")} </label>
                                </div>
                                <div className="input-group mb-2">
                                    <input onChange={handleInputChange} value={userInput} id="exampleFormControlInput1"  type="Text" className="form-control" placeholder={t("trackingNumber")}/>
                                    <span className="input-group-text border p-2 bg-danger text-white" id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">  {t("signOut")}  </Link>
                    </li>
                    <li className="nav-item">

                                {currentLanguage === 'ar' ? (
                                    <Link className="fw-bold nav-link" onClick={() => changeLanguage('en')}>
                                        EN
                                    </Link>
                                ) : (
                                    <Link className="fw-bold nav-link" onClick={() => changeLanguage('ar')}>
                                        عربي
                                    </Link>
                                )}

                                {/* <Link className="fw-bold nav-link" to="#" onClick={() => changeLanguage('ar')}>عربي</Link>   */}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
