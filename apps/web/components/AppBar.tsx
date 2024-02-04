"use client";
import Link from "next/link";
import styles from "../styles/AppBar.module.scss";
import { useBreakpoint } from "../hooks";
import { CreateIcon, ExploreFilledIcon, ExploreIcon, HomeFilledIcon, HomeIcon, IGIcon, InstagramIcon, MessangerFilledIcon, MessangerIcon, MoreIcon, NotificationFilledIcon, NotificationIcon, ReelsFilledIcon, ReelsIcon, SearchFilledIcon, SearchIcon } from "./icons";

const AppBar = () => {
  const { isSmall, isLarge } = useBreakpoint();
  if (isSmall) return null;

  const isCollapse = false;

  return (
    <aside className={`${styles._} ${!isLarge || isCollapse ? styles.collapse : styles.default}`}>
      <Link href="/">
        {isLarge && !isCollapse ? <InstagramIcon /> : <IGIcon />}
      </Link>

      <nav>
        <Link href="/" className={styles.active}>
          {true ? <HomeFilledIcon /> : <HomeIcon />}
          {isLarge && !isCollapse && <span>Home</span>}
        </Link>
        <Link href="/">
          {false ? <SearchFilledIcon /> : <SearchIcon />}
          {isLarge && !isCollapse && <span>Search</span>}
        </Link>
        <Link href="/">
          {false ? <ExploreFilledIcon /> : <ExploreIcon />}
          {isLarge && !isCollapse && <span>Explore</span>}
        </Link>
        <Link href="/">
          {false ? <ReelsFilledIcon /> : <ReelsIcon />}
          {isLarge && !isCollapse && <span>Reels</span>}
        </Link>
        <Link href="/">
          {false ? <MessangerFilledIcon /> : <MessangerIcon />}
          {isLarge && !isCollapse && <span>Messages</span>}
        </Link>
        <Link href="/">
          {false ? <NotificationFilledIcon /> : <NotificationIcon />}
          {isLarge && !isCollapse && <span>Notifications</span>}
        </Link>
        <Link href="/">
          <CreateIcon />
          {isLarge && !isCollapse && <span>Create</span>}
        </Link>
        <Link href="/">
          <img src="/images/user/placeholder.jpg" alt="" />
          {isLarge && !isCollapse && <span>Profile</span>}
        </Link>
      </nav>

      <button>
        <MoreIcon />
        {isLarge && !isCollapse && <span>More</span>}
      </button>
    </aside>
  );
};

export default AppBar;