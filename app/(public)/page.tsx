// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>
        <p>
          Welcome to Pocket Heist — the stealthy way to liven up the workday.
          Dream up a devious little mission, assign it to an unsuspecting colleague,
          and watch the chaos unfold before the clock runs out.
        </p>
        <p>
          Whether you&apos;re hiding someone&apos;s stapler in Jell-O or replacing every
          photo in the office with Nicolas Cage, Pocket Heist keeps score so the
          best prankster wins bragging rights.
        </p>
      </div>
    </div>
  )
}
