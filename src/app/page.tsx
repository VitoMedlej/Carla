
// "use client"
import PreLoader from "@/Components/PreLoader"
// import { server } from "@/Utils/Server"
// import { IProduct } from "@/Types/Types"
// import { server } from "@/Utils/Server"
// import { Box,  Container, Typography } from "@mui/material"
// import { useEffect, useState } from "react"
// https://www..com/view_video.php?viewkey=ph637450f5f16fd



// const fetchDataAndSetImgs = async () => {
//   try {

  
//     const response = await fetch('https://api.jsonbin.io/v3/b/65d0a0e41f5677401f30945c', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Master-Key': '$2a$10$oO7JF9H9fEhY6itLndL/kOBlo6DoOM0X6vXK8SnJxF4GOM7K4XWo2'
//       },
//     // next:{revalidate:1000}
//   },
//   )
//   if (!response?.ok) {
//     throw new Error(`Failed to fetch data. Status: ${response?.status}`);
//   }

//   const data = await response.json();
//   console.log('data: ', data);
//   if (data?.record) {

//     return data?.record; // Assuming 'record' is the property containing the images in the response
//   }
//   return null
// }
// catch(e){
//   console.log('e: ', e);
//   return null
// }
// }
const fetchData = async () => {
  try{

  
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`)
  // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{cache:'no-store', next: { revalidate: 0 }})
  // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`)
  let res = req &&  await req.json();
  if (res) {
    return res
  }
  return null
}
catch(e){
  return null

  console.log('e: ', e);

}
}
export default async function Home() {
  // export default async function Home() {
//   const [data,setData] = useState< {
//     products: IProduct[] | never[] ; 
//     featuredProducts:IProduct[] | never[];
// }>({
//     products : [],
//     featuredProducts :[]
//   })

//    const InitialFetch = async () => {
//     try {
  
//       const req = await fetch(`${server}/api/get-data`,{ next: { revalidate: 400 } })
//       const res = await req.json()
    
//       if (res?.success && res?.data) {
//         setData(res?.data)
//       }
//       return null
//     }
//     catch(er) {
//       console.log('er getAll: ', er);
  
//     }
//   }
//   useEffect(() => {
    
//     InitialFetch()

//   }, [])
try {

      // const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`,{ next: { revalidate: 10 } })
      const res = await fetchData()
      // console.log('res: ', res);
      // const reqImages = await fetch(`https://getpantry.cloud/apiv1/pantry/732d3c8c-d53a-4c4c-830c-fe9b7e021958/basket/Images`,{  cache:'no-store', next: { revalidate: 400 } })
      // let resImages : any = await  reqImages.json();
      // let resImages : any =await fetchDataAndSetImgs()
      let resImages : any = null
      // let res = {data:{featuredProducts:null}}
      
      return (
        <PreLoader resImages={resImages || null} data={res?.data?.featuredProducts}/>
       )
}
catch (e) {
  console.log('e main home: ', e);
  return (
    <PreLoader resImages={null} data={null}/>
   )

}
    


}
