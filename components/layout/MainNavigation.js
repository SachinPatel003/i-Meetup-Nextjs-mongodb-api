import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>I meetup app</div>
      <nav>
        <ul>
          <li>
            <Link href="/">all Meetup</Link>
          </li>
          <li>
            <Link href="/new-meetup">let's add</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
