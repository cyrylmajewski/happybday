import { Roboto_Flex } from 'next/font/google';
import Image from 'next/image'
import styles from './page.module.scss'
import clsx from 'clsx';

const robotoFlex = Roboto_Flex({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.Hero}>
        <div className='container'>
          <div className="col-12">
            <Image className={styles.HeroBg} src='/hero-bg.png' alt='Hero' width={1100} height={632} />
            <div className={styles.HeroContent}>
              <h1 className={clsx(robotoFlex.className, styles.HeroHeadline)}>Дорогой папа!</h1>
              <p className={styles.HeroText}>
                В такой важный день мы подумали, что было бы классно показать, каким на самом деле героем для нас ты являешься :) <br />
                <br />
                Ведь кто, как не ты...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PhotoLeft}>
        <div className="container">
          <div className="col-12">
            <div className={styles.PhotoLeftContainer}>
              <div className={styles.PhotoLeftImage}>
                <Image src='/photo-1.png' alt='Photo 1' width={553} height={615} />
              </div>
              <p className={styles.PhotoLeftContent}>
                Сойдётся с лучшей в мире мамой!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PhotoRight}>
        <div className="container">
          <div className="col-12">
            <div className={styles.PhotoRightContainer}>
              <p className={styles.PhotoRightContent}>
                Создаст лучшую на свете семью!
              </p>
              <div className={styles.PhotoRightImage}>
                <Image src='/photo-2.png' alt='Photo 1' width={553} height={615} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PhotoLeft}>
        <div className="container">
          <div className="col-12">
            <div className={styles.PhotoLeftContainer}>
              <div className={styles.PhotoLeftImage}>
                <Image src='/photo-3.png' alt='Photo 1' width={553} height={615} />
              </div>
              <p className={styles.PhotoLeftContent}>
                Будет готовить лучший в мире плов 🥘
                <br />
                <br />
               <span>Но нужно не только уметь готовить...</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PhotoRight}>
        <div className="container">
          <div className="col-12">
            <div className={styles.PhotoRightContainer}>
              <p className={styles.PhotoRightContent}>
                Но и уметь наслаждаться каждым моментом 🍲
              </p>
              <div className={styles.PhotoRightImage}>
                <Image src='/photo-4.png' alt='Photo 1' width={553} height={615} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PhotoLeft}>
        <div className="container">
          <div className="col-12">
            <div className={styles.PhotoLeftContainer}>
              <div className={styles.PhotoLeftImage}>
                <Image src='/photo-5.png' alt='Photo 1' width={553} height={615} />
              </div>
              <p className={styles.PhotoLeftContent}>
                Каждая минута, проведённая с тобой - ценна, как никогда. Поэтому хочется пожелать самого важного - чтобы твои мечты сбывались чаще. 💭
                <br />
                <br />
                И какие бы трудности тебя не встречали на пути
                <br />
                <span>главное помни...</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.PhotoRight}>
        <div className="container">
          <div className="col-12">
            <div className={styles.PhotoRightContainer}>
              <p className={styles.PhotoRightContent}>
                Мы тебя очень сильно любим ❤️
              </p>
              <div className={styles.PhotoRightImage}>
                <Image src='/photo-6.png' alt='Photo 1' width={553} height={615} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Finish}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={styles.FinishContainer}>
                <h2 className={styles.FinishHeadline}>С ДНЕМ РОЖДЕНИЯ!</h2>
                <div className={styles.FinishImage}>
                  <Image src='/finish.png' alt='Photo 1' width={553} height={615} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
