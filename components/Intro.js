// import Image from 'next/image'
// import Selfie from '../public/images/vanity/selfie.jpg'

export default function Intro({ greeting, intro }) {
  return (
    <>
      <div className="intro container">
        <img src="/images/vanity/selfie.jpg" alt="Me!" />
        <h1>
          <span>{"< "}</span>
          {greeting}
        </h1>
        <h1>
          {intro}
          <span>{" />"}</span>
        </h1>
      </div>
    </>
  );
}
