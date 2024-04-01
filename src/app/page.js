import styles from "./page.module.css";
import Image from 'next/image'
import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

export const links = [
  {
    id: 1,
    title: 'Franklin',
    subtitle: 'О компании',
    href: 'about',
  },
  {
    id: 2,
    title: 'ПОРТФОЛИО',
    subtitle: 'Наши работы',
    href: 'portfolio',
  },
  {
    id: 3,
    title: 'Услуги',
    subtitle: 'Наши услуги',
    href: 'services',
  },
  {
    id: 4,
    title: 'Контакты',
    subtitle: 'Как с нами связаться',
    href: 'contacts',
  },
]


export default function Home() {

  return (
    <>

      <main className={styles.main}>

        <section className='section'>

          <div className='container'>

            <div className={styles.container_head}>
              <div>

                <Image src="/LOGO-svg.png" alt="logo" width={100} height={100} className={styles.logo} />
              </div>

              <div className={styles.language_bar}>
                <Link href="/ru" className={styles.active} >РУ </Link>
                <Link href="/en" >EN </Link>
              </div>
            </div>
            <div className={styles.video}>
              <video muted src="/preview.mp4" poster="/video-poster.png" ></video>
            </div>
            <div>

              <div className={styles.container_links}>

                {links.map((link) => 
                <ChakraLink as={Link} key={link.title} textDecoration={'none'} href={link.href}> 
                <LinkContent data={link} /> 
                </ChakraLink>
                )}


              </div>

            </div>

          </div>

        </section>

      </main>


    </>

  );

}

export function LinkContent({ data }) {

  return (
    <div className={styles.link_content}>
      <div className={styles.link_body}>

        <div className={styles.link_id}>
          <h1  >
            {data.id}
          </h1>
        </div>
        <div className={styles.link_text}>
          <div className={styles.link_title}>
            <h4>{data.title}</h4>
          </div>
          <div className={styles.link_subtitle}>
            <p>
              {data.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.link_border}></div>

    </div>
  )
}

