import React from 'react'
import Timeserie from './graphs/Timeseries'
import FeedMaladie from './graphs/FeedMaladie'
import Topwords from './graphs/topwords'

const dashboard = () => {
  return (
    <div className="container Dashboardstyle">
    
          <div className="row">
        <Timeserie title="Graphique d'occurence des mots suivant la date" />
        <FeedMaladie />
        <Topwords />
          
          </div>    
          
    </div>
  )
}

export default dashboard
