import "../Index.css"
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home() {
     return ( 
<main className="home-page">
     <section className="home-hero">
         <div className="home-content">
             <p className="home-label">WELCOME TO BOOKVERSE</p>
              <h1> Find your next <br /> 
              <span>favorite story.</span> 
              </h1> <p className="home-description"> Explore a carefully collected library of stories,
                 ideas, and adventures. Search, discover, and find something worth reading. </p>
                  <div className="home-actions"> 
                    <Link to="/books" className="home-button">
                    Explore books </Link>
                     <Link to="/about" className="home-link"> About BookVerse → </Link>
                      </div> 
                      </div>
                       </section>
                        <section className="home-intro">
                             <div>
                                 <p className="home-label">DISCOVER</p>
                                  <h2>There is a book for every mood.</h2>
                                   </div> 
                                   <p> Whether you're looking for an exciting adventure, 
                                    a thoughtful classic, or something completely new,
                                     BookVerse makes it easy to explore different stories and genres.
                                      </p>
                                       </section> 
                                       <section className="home-features"> 
                                        <article> 
                                           
                                            <h3>Explore</h3> 
                                            <p>Browse books from different genres and discover new authors.</p>
                                             </article> <article> 
                                                 <h3>Search</h3>
                                                  <p>Find exactly what you're looking for by title or author.</p>
                                                   </article> <article> <h3>Add</h3> <p>Add your own books and make the collection your own.</p> </article> </section> </main> ); }
