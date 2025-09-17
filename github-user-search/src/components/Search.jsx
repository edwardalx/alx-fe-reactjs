import React from 'react'
import { useStore } from '../useStore/gitHubSrore'
import githubService from '../services/githubService'
import { useEffect } from 'react'

function SearchForm() {
const username = useStore(state => state.username)
const setUsername = useStore(state => state.setUsername)
const githubData = useStore(state => state.githubData)
const fetchData =useStore(state => state.fetchData)

// useEffect(()=>{
//   const getData = async() => {
//     if (!username){
//       return
//     }
//   let response = await githubService.getRepos(username)
//   fetchData([response]);
// }
// getData()
// }, [])
const handleSubmit = async(e)=>{
  e.preventDefault()
     if (!username){
      return
    }
  let response = await githubService.getRepos(username)
  fetchData([response]);
    // console.log(`Form ready data: ${JSON.stringify(githubData)}`)
    console.log("Form ready data:", githubData)

}

  return (
    <div className='ceter-text'>
      <form onSubmit={handleSubmit} className='center-form'>
        <label htmlFor="search">Search</label>
        <input type="text" id='search' placeholder='input search here' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <button className="button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchForm