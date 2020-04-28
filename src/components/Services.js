import React, {Component} from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer,FaBaseballBall,FaSwimmer} from "react-icons/fa";
import Title from './Title';
class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Free Cocktail",
                info:'"Lorem ipsum dolor sit amet consectetur' +
                    '  adipiscing elit,Magnil,corporis!'
            },
            {
                icon:<FaShuttleVan />,
                title:"Free shuttle",
                info:'"Lorem ipsum dolor sit amet consectetur' +
                    '  adipiscing elit,Magnil,corporis!'
            },{
                icon:<FaBaseballBall />,
                title:"Free Games",
                info:'"Lorem ipsum dolor sit amet consectetur' +
                    '  adipiscing elit,Magnil,corporis!'

            },{
                icon:<FaSwimmer />,
                title:"Free Swimming",
                info:'"Lorem ipsum dolor sit amet consectetur' +
                    '  adipiscing elit,Magnil,corporis!'

            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    }
                    )}
                </div>
            </section>
        );
    }
}

export default Services;
