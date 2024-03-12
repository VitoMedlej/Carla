"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';

import useLanguage from '@/Hooks/useLanguage';
import Btn from '../Btn/Btn';



const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
      
        
      {
        img: 'https://ucarecdn.com/6a296c50-9220-4e44-bc46-5973867c64da/',
        position:'',
    },
     ])
     const redir = () => {
        router.push('/collection/products')
        // console.log('abc')
     }
    useEffect(() => {
        console.log('res: ', res);
    if (res && res?.length > 0) {
        // console.log('res: ', );
        setImgs(res)
    }
    }, [])
//   const {text} = useLanguage()
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            transform:'translateY(-1px)',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:{xs:'550px',sm:'500px',lg:'600px'},
            maxHeight:{sm:'550px',md:'600px',lg:'100vh'},
            margin: '0 auto',
         
            height : {xs:'500px',sm:'600px',md:'100vh'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 4000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                        <Container className='   absolute ' 
                        
                        
                        sx={{
                            background: '#ffffffed',

                            right:{xs:'',lg:'50%'},
                            top:{xs:'60%',md:'60%'},
                        }} maxWidth='sm' disableGutters>
                            
                            <Box 
                            className='  '
                            sx={{
                                top:'50%',
                                background: '#ffffffed',
                                width:{xs:'auto',sm:'400px',md:'450px'},
                                // maxWidth:'850px',
                                mx: {xs:1},
                                px:3,
                                py:3,
                                borderRadius:'8px',
                                transform:{xs:'translateY(-25%)',sm:'translateY(-50%)'},
                                zIndex:123456,
                                position:'absolute'}}>
                         <Typography
component={'h1'}
    className='sectionTitle uppercase  box'
    sx={{
 
    fontSize: {
        xs: '19px',
        sm: '24px'
    },
    padding:.5,
    fontWeight: '900'
}}>
                             
                             enhance your tan while keeping your skin moisturized.
                                </Typography>
                                <Typography
component={'p'}
    className='sectionTitle  box'
    sx={{
 
    fontSize: {
        xs: '.8em',
        sm: '1.1em'
    },
    padding:.5,
    fontWeight: '300'
}}>
Our products are made with care, ensuring that each application leaves your skin highly moisturized, refreshed and shiny.

                                </Typography>
                                <Box className="flex ">

                                {/* <Btn
                                onClick={()=>redir()}
                                
                                className='   ' sx={{mx:'0',mt:1}}>
                            Join us

                                </Btn> */}
                            
                                </Box>
                            </Box>
                            </Container>
                            <img
            
                                className={`img   
                                
                                ${item?.position}d`}
                                // ${item?.className}
                                src={`${item.img} `}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader3