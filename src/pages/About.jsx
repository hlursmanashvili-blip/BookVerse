import "../Index.css"
import "./About.css"

export default function About() { 
    return (
         <main className="about-page"> 
         <section className="about-hero"> 
            <p className="about-label">ABOUT BOOKVERSE</p>
             <h1> A small space <br /> for big stories. </h1>
             <p className="about-intro"> BookVerse is a simple digital library
                 created for people who enjoy discovering, exploring, and keeping
                  track of books they love. </p> 
                  </section>
                   <section className="about-features"> 
                    <div className="about-card"> 
                       
                        <h2>Explore</h2>
                        <p> Browse a collection of books and discover something new to read. </p> 
                        </div> <div className="about-card">
                              
                             <h2>Search</h2> 
                             <p> Quickly find your favorite books by title or author. </p> 
                             </div> <div className="about-card"> 
                                <h2>Discover</h2>
                                 <p> Explore different genres and find stories that match your mood. </p> 
                                 </div> <div className="about-card"> 
                                 <h2>Collect</h2>
                                  <p> Add your own books and create a collection that feels personal. </p>
                                  </div> </section> <section className="about-story">
                                 <div> <p className="about-label">THE IDEA</p>
                                  <h2>Books can take us somewhere else.</h2> 
                                  </div>
                                   <p> BookVerse was created as a small project inspired by the simple pleasure 
                                    
                                    of discovering a great book. The goal is to keep the experience clean,
                                     calm, and focused on what matters most — the stories. </p> 
                                     </section> <section className="about-ending"> <h2>Keep reading.</h2>
                                   <p>There is always another story waiting to be discovered.</p>
                                    </section> 
                                    </main> ); }
