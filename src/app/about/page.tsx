"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    "Number1ByCarla is a Lebanese skincare brand that believes in the power of self-care. Our journey began with a simple idea - to create skincare products that not only nourish your skin but also provide a luxurious experience.",
    "Our product range includes moisturizers, body oils, and tanning oils, each carefully crafted to provide the ultimate skincare experience. We source the finest ingredients and combine them with innovative formulas to create products that pamper your skin.",
    "At Number1ByCarla, we're not just about skincare, we're about creating a lifestyle. We believe that everyone deserves to feel beautiful and confident in their own skin. That's why we're committed to providing products that help you achieve just that.",
    "Our commitment to quality and customer satisfaction is what sets us apart. We're proud to be a brand that our customers trust and love. At Number1ByCarla, we're not just selling products, we're offering a transformative skincare experience.",
    "Join us on this skincare journey and discover the difference Number1ByCarla can make to your daily routine. Experience the sheer joy of moisturizing with our premium skincare products and let your skin thank you!"
  ]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:4}}>
           <Typography sx={{mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            ABOUT US
        </Typography>
        <Box sx={{width:'100%',height:'400px'}}>
            <img src="https://ucarecdn.com/416d79f7-b2f0-405a-a62d-a575cf8e405e/410140937_1411199259826354_1255657051340304468_n.jpg" alt="" className="img contain" />
        </Box>
    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/>
    </Container>
  )
}

export default Index