import Experience from "../components/Experience.jsx";
import Posts from "../components/Posts";
export default function About({ posts }) {
  return (
    <div className="container">
      <div className="tidbit">
        <h2>About me</h2>
        <div className="content">
          <p>
            Howdy! I&apos;m a 4th-year computer science student here at{" "}
            <span>CU Boulder</span>, in Colorado. During my time here, I&apos;ve
            discovered and fallen in love with <span>programming</span>.
            I&apos;ve found it to be a source of never-ending challenge and
            opportunities for growth, {" learning"}, and excitement!{" "}
          </p>

          <br />

          <p>
            In my free time, I love <span>learning</span> about web development,
            <span>{" reading"}</span> classic novels, and recreating outdoors.
            I&apos;m also a sucker for <span>mindfulness</span> meditation, a
            practice which I find improves all aspects of my life.
          </p>
        </div>
      </div>
      <div className="tidbit">
        <h2>Fun facts</h2>
        <ul>
          <li>
            I love workspace <span>ergonomics</span>! I stand at my desk and use
            a split, ortholinear keyboard.
          </li>
          <li>
            I&apos;m a <span>(neo)vim</span> geek—I love configuring my IDE!
          </li>
          <li>
            I use <span>Colemak</span>, a non-QWERTY keyboard layout which
            places the most frequently-used keys right beneath your fingertips.
          </li>
          <li>
            I&apos;m AIARE I certified, meaning I&apos;m qualified to assess
            avalanche conditions in <span>backcountry skiing</span> terrain!
          </li>
        </ul>
      </div>
      <div className="tidbit">
        <Experience />
      </div>
      <Posts posts={posts} />
    </div>
  );
}
