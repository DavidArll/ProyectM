import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
class Catalog extends Component {

    render() { 
        return ( 
            <section className="page-section bg-catalog" id="catalog">
            <Carousel autoPlay showThumbs={false}>      
                <div>
                    <img src="http://www.galamuebles.com.mx/Gala/RenderImage/168682" alt="{tags}"/>
                    <p className="legend">Mueble 1</p>
                </div>
                <div>
                    <img src="https://fotosdesalas.com/wp-content/uploads/2013/03/fotos-de-muebles-color-beige1.jpg" alt=""/>
                    <p className="legend">Mueble 2</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/homify/a_0,c_fit,q_70,w_1108/v1441129634/p/photo/image/729446/IMG_5127_copy.jpg" alt=""/>
                    <p className="legend">Mueble 3</p>
                </div>
                <div>
                    <img src="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2017/11/09/5a04df421d702.jpeg" alt=""/>
                    <p className="legend">Mueble 4</p>
                </div>
            </Carousel>
            </section>
         );
    }
}
 
export default Catalog;