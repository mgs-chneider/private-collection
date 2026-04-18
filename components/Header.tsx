import Link from "next/link"; 
import { siteContent } from "@/content/site"; 

export function Header() 
  { return ( 
    <header className="site-header"> 
      <div className="container header-inner"> 
        <Link href="/" className="site-brand"> 
          {siteContent.siteTitle} 
        </Link> 
        
        <nav className="site-nav"> 
          <Link href="/">Galerie</Link>
          <a href={`mailto:${siteContent.contactEmail}`}>Kontakt</a> 
        </nav> 
      </div> 
    </header> 
  ); 
  }
