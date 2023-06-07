import { useState, useEffect } from 'react';
import Idea from './Idea';
import * as IdeasService from "./services/IdeasService"

const IdeasCatalog = () => {
  const [ideas, setIdea] = useState([]);
  useEffect(() => {
    IdeasService.getAll()
      .then( result => setIdea(result));
  });

  return (
    <div id="dashboard-holder">
      {ideas.length > 0 ? ideas.map(x => <Idea key={x._id} data={x} />) : <h1>No ideas yet! Be the first one :)</h1>}
    </div>
  );
}

export default IdeasCatalog;