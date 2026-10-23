import Image from "next/image";
import { links } from "@/lib/site-content";

export function PodcastPlatformLinks() {
  return (
    <div className="podcast-platform-links" aria-label="Karma mit Zimt und Zucker abonnieren">
      <a href={links.podcastYoutube} target="_blank" rel="noopener noreferrer">
        <Image src="/podcast/youtube-logo-gold.png" alt="" width={1254} height={1254} sizes="58px" />
        <span>Auf YouTube abonnieren</span>
      </a>
      <a href={links.podcastSpotify} target="_blank" rel="noopener noreferrer">
        <Image src="/podcast/spotify-logo-gold.png" alt="" width={1254} height={1254} sizes="58px" />
        <span>Auf Spotify abonnieren</span>
      </a>
    </div>
  );
}
