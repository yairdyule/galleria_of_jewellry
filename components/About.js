import Experience from "../components/Experience.jsx"
export default function About() {
  return (
    <div className="about">
      <div className="tidbit">
        <h2>About me</h2>
        <div className="content">
          <p>Howdy! I&apos;m a 4th-year computer science student here at CU Boulder, in Colorado. During my time here, I&apos;ve discovered and fallen in love with programming. I&apos;ve found it to be a source of never-ending challenge and opportunities for growth, learning, and excitement! </p>

          <br />

          <p>In my free time, I love learning about web development, reading classic novels, and recreating outdoors. I&apos;m also a sucker for mindfulness meditation, a practice which I find improves all aspects of my life.</p>
        </div>
      </div>
      <div className="tidbit">
        <h2>Fun facts</h2>
        <ul>
          <li>I love workspace ergonomics!</li>
          <li>I&apos;m a (neo)vim geek—I love configuring my IDE!</li>
          <li>I use Colemak, a non-QWERTY keyboard layout designed for ergonomics.</li>
          <li>I&apos;m AIARE I certified, meaning I&apos;m qualified to assess avalanche conditions in backcountry skiing terrain!</li>
        </ul>
      </div>
      <div className="tidbit">
        <Experience />
      </div>
    </div>
  )
}
