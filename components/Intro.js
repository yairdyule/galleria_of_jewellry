import Image from 'next/image'
import Selfie from '../public/images/vanity/selfie.jpg'

export default function Intro({ text }) {
  return (
    <div className="intro">
      <Image src={Selfie} />
      <h1><span>{"< "}</span> {text + " "} <span>{"  />"}</span></h1>
    </div>
  )
}
