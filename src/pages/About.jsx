import React from 'react';
import FreeButton from '../components/UI/buttons/FreeButton';
import task1 from '../img/task1.jpg';
import task2 from '../img/task2.jpg';
import task3 from '../img/task3.jpg';

const About = () => {

    return (
        <div className='page'>
            <div className="page__container">
                <h2 className='page__title'>This page was created to show navigation functionality</h2>
                <h3 className='page__subtitle'>But the Statistics page has real statistic about your tasks ;)</h3>
                <p className='page__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tempora nam. Itaque nobis quas soluta corrupti explicabo sint amet exercitationem earum. Quibusdam officiis dolore a facere eaque harum maiores sunt.
                    Dolorum sunt porro iste commodi. Officia quod distinctio iusto velit sint exercitationem dicta tempora, quasi fuga rerum, ratione doloribus eos dolorum praesentium vitae impedit odit ducimus. Asperiores reprehenderit explicabo dignissimos!
                    Vel expedita itaque labore quod laborum quaerat numquam, ut possimus recusandae harum corrupti? Nulla cumque veritatis eaque accusamus necessitatibus quod sunt quo earum labore, pariatur, inventore sapiente deleniti soluta facere.
                </p>
                <div className="img__box">
                    <img className='about__img' src={task1} alt="alt" />
                    <img className='about__img' src={task2} alt="alt" />
                    <img className='about__img' src={task3} alt="alt" />
                </div>
                <p className='page__text page__text--bottom'>
                Sit amet consectetur adipisicing elit. Nesciunt fugit pariatur quis est commodi, adipisci reiciendis ipsum eligendi repellat sed consequatur? Odio et repellendus suscipit laborum molestias iusto a quia!
                </p>
                <FreeButton/>
            </div>
        </div>
    );
};

export default About;