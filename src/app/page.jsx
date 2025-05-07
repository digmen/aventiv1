import Image from 'next/image'
import React from 'react'
import { ClashDisplayVariable } from './fonst'

export default function page() {
  return (
    <main className='main bg-[#1A1A1A] h-screen' >
      <header className='mx-[50px] pt-[25px] flex justify-between items-center'>
        <Image
          src='logo.svg'
          width={63}
          height={42}
          alt='Logo'
        />
        <div className={`${ClashDisplayVariable.className} text-[20px] font-bold text-[#FFFFFF]`}>
          <div className='flex'>
            <span className='text-[#8CCEFF] font-light'>
              [&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <Image
              src='sun.svg'
              width={20}
              height={20}
              alt='sun'
            />
            <span className='text-[#8CCEFF] font-medium'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Menu
            </span>
          </div>
          <div className='flex'>
            <Image
              src='clock.svg'
              width={20}
              height={20}
              alt='clock'
            />
            <span className='text-[#8CCEFF] font-light'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;since 2022 &nbsp;&nbsp;]
            </span>
          </div>
        </div>
      </header>
      <article className='mt-[60px] relative'>
        <div className='inline-flex flex-col items-center absolute top-35 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <h1 className={`${ClashDisplayVariable.className} leading-28 text-[108px] font-semibold bg-gradient-to-b from-[#8CCEFF] to-[#ECECEC] bg-clip-text text-transparent`}>
            AVENTIA
          </h1>
          <p className={`${ClashDisplayVariable.className} leading-20 text-[76px] font-semibold bg-gradient-to-t from-[#8CCEFF] to-[#ECECEC] bg-clip-text text-transparent`}>
            studio
          </p>
          <Image
            src='star.svg'
            width={70}
            height={70}
            alt='star'
            className='absolute top-[-50px] right-[-25px] '
          />
        </div>
        <p className={`${ClashDisplayVariable.className} leading-70 text-center font-medium text-[300px] text-transparent uppercase stroke-text`}>WE ARE</p>
        <div className='px-[50px] text-end w-full'>
          <span className={`${ClashDisplayVariable.className}  font-medium text-[25px] bg-gradient-to-t from-[#ECECEC] to-[#8CCEFF] bg-clip-text text-transparent`}>YOUR DIGITAL PARTNER</span>
        </div>
      </article>
      <article className='px-[50px]'>
        <p className={`${ClashDisplayVariable.className} text-[#ECECEC] text-[14px] w-[370px] text-justify`}>THEY DO NOT LOCK FOR EASY WAYS, BUT SET OURSELVES THE TASK OF CONFRONTING STANDARDS AND CREATING UNQUE SOLUTIONS, THEY LISTEN TO CUSTOMERS, ANALYZE THERE EVERY STEP AND LOCK FOR INNOVATIVE SOLUTIONS TO TURN YOUR IDEAS INTO REALITY.</p>
      </article>

      <article className='px-[50px]'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <span className={`${ClashDisplayVariable.className} text-[#ECECEC] font-medium text-[40px]`}>BOLD SOLUTIONS FOR BIG GOALS</span>
          <Image
            src='ScrollDown.svg'
            width={40}
            height={40}
            alt='ScrollDown'
          />
        </div>
      </article>
    </main>
  )
}
