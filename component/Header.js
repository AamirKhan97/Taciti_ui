import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="headermain">
        <div className="brandLogo">
          <Link href="#Home">
            <Image src="./images/tactiti.svg" height="50" width="170" alt='' />
          </Link>
        </div>
        <div className="LinkBox">
          <Link href="#About">About Us</Link>
          <Link href="#Services">Our Services</Link>
          <Link href="#Industries">Industries</Link>
          <Link href="#Studies">Case Studies</Link>
          <Link href="#Contact">Contact Us</Link>
        </div>
      </div>
    </>
  )
}
