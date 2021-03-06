import React from 'react';
import './main.css';
import Icon1 from '../Images/Icon-Basket@1X.png';
import Icon2 from '../Images/Icon-Laptop@1X.png';
import Icon3 from '../Images/Icon-Locked@1X.png';


export default function Main({Main}) {
    return (
        <main className = {'main'}>
            <section className = {'services'}>

                <h5 className = {'services_logo'}>Services</h5>
                <p className = {'services_text'}>Proin iaculis purus consequat sem cure.</p>

                <div className = {'card_contaier'}>
                    <div className = {'services_card'}>
                        <div className = {'card_icon'}>
                            <img src={Icon1}  className = {'icon'}/>
                        </div>
                        
                        <h5 className = {'card_h4'}>E-Commerce</h5>
                        <p className = {'card_p'}>Proin iaculis purus consequat sem cure 
                      digni ssim. Donec porttitora entum suscipit 
                      aenean rhoncus posuere odio in tincidunt.</p>

                    </div>
                    
                    <div className = {'services_card'}>
                        <div className = {'card_icon'}>
                            <img src={Icon2}  className = {'icon'}/>
                        </div>
                        
                        <h5 className = {'card_h4'}>E-Commerce</h5>
                        <p className = {'card_p'}>Proin iaculis purus consequat sem cure 
                      digni ssim. Donec porttitora entum suscipit 
                      aenean rhoncus posuere odio in tincidunt.</p>

                    </div>

                    <div className = {'services_card'}>
                        <div className = {'card_icon'}>
                            <img src={Icon3}  className = {'icon'}/>
                        </div>
                        
                        <h5 className = {'card_h4'}>E-Commerce</h5>
                        <p className = {'card_p'}>Proin iaculis purus consequat sem cure 
                      digni ssim. Donec porttitora entum suscipit 
                      aenean rhoncus posuere odio in tincidunt.</p>

                    </div>
                    





                </div>


            </section>
        </main>
    )
}
