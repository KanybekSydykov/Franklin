import Image from 'next/image'
import styles from './about.module.css'
import Principes from '../../components/shared-components/principes/Principes'
import Subtleties from '../../components/shared-components/subtleties/Subtleties'
import QuoteSection from '../../components/shared-components/quote/QuoteSection'
import UpArrow from '../../components/shared-components/up-arrow/UpArrow'
import Philosophy from '../../components/shared-components/philosophy/Philosophy'

export default function page() {

    

    return (
        <>
            <section id='first' className=''>



                <div className={styles.about_content}>
                    <div>

                        <h1>О компании</h1>
                        <p>

                            <span>
                                FRANKLIN Design Studio
                            </span> существует с 2012 года, за это время нашей студией реализовано большое количество объектов различного назначения. За срок своего существования компания зарекомендовала себя как современная успешная студия, способная воплотить проект любой сложности и объема в жизнь.
                            <br></br>
                            <br></br>

                            Мы собрали в своем офисе отличную команду профессионалов с большим опытом работы, огромным потенциалом и непритворным желанием удовлетворить всем пожеланиям заказчика и реализовать каждый свой проект индивидуальным, интересным, запоминающимся, наполненным всеми техническими новшествами и актуальными дизайнерскими решениями, а также максимально удовлетворяющий пожеланиям и бюджеты заказчика.
                            <br></br>
                            <br></br>

                            Каждый клиент нашей компании действительно важен для нас, а положительный отклик о нас и заказчик, оправдавший все свои ожидания и реализовавший все свои мечты с нашей помощью – это наша главная цель.
                        </p>
                    </div>

                    <Image src="/video-poster.png" alt="logo" width={500} height={500} />
                </div>


            </section>

            <section>
                <Philosophy />
            </section>

            <section id='second' className=''>
                <div id=''>

                    <Principes />
                </div>


            </section>


            <section id='third' className=''>
                <div id=''>

                    <Subtleties />
                </div>


            </section>

            <section id='fourth' className=''>
                <QuoteSection UpArrowComponent={UpArrow} />
            </section>

        </>
    )
}
