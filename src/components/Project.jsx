import React, { useState } from 'react'
import repo from "../components/repo.json"
import "../css/project.css"
import Footer from "./Footer"
import customerImg from "../assets/customer_dashboard.jpeg"
import retailImg from "../assets/Dashboard1.png"
import cafeImg from "../assets/dashboard.png"
import mentalImg from "../assets/mental_health.jpeg"


const Project = () => {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedRepo, setSelectedRepo] = useState(null);

  const techs = ["All", ...new Set(repo.flatMap(e => e.tech))]
  // const mentalImg = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"

  const filtered = repo.filter(e => {
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.desc.toLowerCase().includes(search.toLowerCase())
    const matchFilter = activeFilter === "All" || e.tech.includes(activeFilter)
    return matchSearch && matchFilter
  })
  const imageMap = {
    customer: customerImg,
    retail: retailImg,
    cafe: cafeImg,
    mental: mentalImg,
  }
  return (
    <div className='project'>
      <h2 className='title'>Popular Repositories</h2>

      {/* Search + Filter Bar */}
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Find a repository...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search-input'
        />
        <div className='filters'>
          {techs.map((t, i) => (
            <button
              key={i}
              className={`filter-btn ${activeFilter === t ? "active-filter" : ""}`}
              onClick={() => setActiveFilter(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className='grid'>
        {filtered.length > 0 ? filtered.map((e) => (
          <div className='thing' key={e.id} onClick={() => setSelectedRepo(e)}>
            <img src={imageMap[e.imgKey]} alt={e.name} className='image' />
            <div className='header'>
              <h4>{e.name || "Project Name"}</h4>
              <span className='status'>Public</span>
            </div>
            <p className='desc'>{e.desc || "No description provided yet."}</p>
            <div className='footer'>
              <div className='tech-stack'>
                {e.tech.map((t, index) => (
                  <span key={index} className='tag'>
                    <span className='dot'></span> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        )) : (
          <p className='no-results'>No repositories match your search or filter.</p>
        )}
        {selectedRepo && (
          <div className="modal-overlay" onClick={() => setSelectedRepo(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>

              <div className="modal-header">
                <h3>{selectedRepo.name}</h3>
                <span onClick={() => setSelectedRepo(null)}>✕</span>
              </div>

              <img src={imageMap[selectedRepo.imgKey]} alt={selectedRepo.name} className="modal-img" />

              <p className="modal-desc">{selectedRepo.desc}</p>

              <div className="modal-actions">
                <button onClick={() => setSelectedRepo(null)} className="cancel">
                  Cancel
                </button>
                <a href={selectedRepo.link} target="_blank" rel="noreferrer">
                  <button className="live">View Live Repository</button>
                </a>
              </div>

            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Project