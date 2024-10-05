import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
      const data = useLoaderData()
  //  const [data, setData] = useState({}) // this is not a best practice because it will make the app slow
  //   useEffect(() => {
  //       fetch('https://api.github.com/users/hiteshchoudhary')
  //       .then(res => res.json())
  //      .then(data => {
  //       console.log(data)
  //       setData(data)
  //      })
 
  //   })


  return (
    <div className='text-left m-4 bg-gray-600 text-white p-2 text-2xl flex'>Github name: {data.name}
    <img  className='m-auto' src={data.avatar_url} alt="Git picture" width={300} /> 
    </div>
  )
}

export default Github


export async function githubLoader() {

  const res = await fetch(`https://api.github.com/users/s-mahali`)
  const data = await res.json()
  return data
}
