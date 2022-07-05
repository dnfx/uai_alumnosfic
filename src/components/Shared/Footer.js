import React from "react";
import facebook_logo from "../Home/facebook_logo.png";
import twitter_logo from "../Home/twitter_logo.png";
import lin_logo from "../Home/lin_logo.png";


const Footer = () => {
    return(
        <>
        <div className="Container">
            <div className="d-none d-lg-block">    
                <div className="row">
                    <div className="col-4 bg-facebook position-relative p-5">
                        <div>
                            <img src={facebook_logo} alt="" className="custom-size-logo ms-3 mt-2  position-absolute top-0 start-0 "></img>
                        </div>
                        <div className="text-light fs-2 position-absolute top-50 start-50 translate-middle logo-top">
                            Facebook
                        </div>
                        <div className="p-5"/>
                        <div className="position-absolute top-100 start-50 translate-middle ">
                            <a href="#facebook" className="btn btn-outline-light button-bottom">Siguenos</a>
                        </div>
                        <div className="p-4"/>
                    </div>
                    <div className="col-4 bg-twitter position-relative p-5">
                        <div>
                            <img src={twitter_logo} alt="" className="custom-size-logo ms-3 mt-2  position-absolute top-0 start-0 "></img>
                        </div>
                        <div className="text-light fs-2 position-absolute top-50 start-50 translate-middle logo-top">
                            Twitter
                        </div>
                        <div className="p-5"/>
                        <div className="position-absolute top-100 start-50 translate-middle ">
                            <a href="#facebook" className="btn btn-outline-light button-bottom">Siguenos</a>
                        </div>
                        <div className="p-4"/>
                    </div>
                    <div className="col-4 bg-lin position-relative p-5">
                        <div>
                            <img src={lin_logo} alt="" className="custom-size-logo ms-3 mt-2  position-absolute top-0 start-0 "></img>
                        </div>
                        <div className="text-light fs-2 position-absolute top-50 start-50 translate-middle logo-top">
                            Linkedin
                        </div>
                        <div className="p-5"/>
                        <div className="position-absolute top-100 start-50 translate-middle ">
                            <a href="#facebook" className="btn btn-outline-light button-bottom">Siguenos</a>
                        </div>
                        <div className="p-4"/>
                    </div>

                    <div className="col-12 bg-dark p-3 position-relative">
                        <p className="text-light">SANTIAGO</p>
                        <p className="text-light">Diagonal las Torres 2640, Peñalolén.</p>
                        <p className="text-light">Av. Presidente Errázuriz 3485, Las Condes.</p>
                        <p className="text-light">Av. Santa María 5870, Vitacura.</p>
                        <p className="text-light">VIÑA DEL MAR</p>
                        <p className="text-light">Padre Hurtado 750, Viña del Mar.</p>
                        <img src="https://www.uai.cl/assets/uploads/2022/03/acreditacion_2022_6_anos.png" className="position-absolute end-0 top-50 translate-middle img-botton" alt=""></img>
                    </div>

                </div>
            </div>
            <div className="d-lg-none">
                <div className="row">
                    <div className="col-4 position-relative bg-facebook p-5">
                        <img src={facebook_logo} alt="" className="custom-size-small-logo position-absolute top-50 start-50 translate-middle"></img>
                    </div>
                    <div className="col-4 position-relative bg-twitter p-5">
                        <img src={twitter_logo} alt="" className="custom-size-small-logo position-absolute top-50 start-50 translate-middle"></img>
                    </div>
                    <div className="col-4 position-relative bg-lin p-5">
                        <img src={lin_logo} alt="" className="custom-size-small-logo position-absolute top-50 start-50 translate-middle"></img>
                    </div>

                    <div className="col-12 bg-dark position-relative">
                        <div>
                            <p className="text-light ms-3">SANTIAGO<br/>Diagonal las Torres 2640, Peñalolén.<br/>Av. Presidente Errázuriz 3485, Las Condes.<br/>Av. Santa María 5870, Vitacura.<br/>VIÑA DEL MAR<br/>Padre Hurtado 750, Viña del Mar.</p>
                            <div className="p-4"/>
                        </div>
                    
                    <div>
                        <img src="https://www.uai.cl/assets/uploads/2022/03/acreditacion_2022_6_anos.png" className="position-absolute start-50 translate-middle" alt=""></img>
                    </div>
                    <div className="p-5"/>
                </div>
                </div>

            </div>
        </div>
    </>
    )


}
export default Footer