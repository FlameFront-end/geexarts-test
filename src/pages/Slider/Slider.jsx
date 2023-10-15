import React from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import Header from '../../components/Header/Header.jsx'

import './Slider.scss'

import 'swiper/css'

const Slider = ({ allItems }) => {
	let { id } = useParams()

	return (
		<div className='slider'>
			<Header />
			<Swiper
				slidesPerView={3}
				spaceBetween={140}
				className='mySwiper'
				initialSlide={id}
				loop={true}
				centeredSlides={true}
			>
				{allItems.map(item => (
					<SwiperSlide
						key={item.id}
						style={{
							background: `url(${item.img})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover'
						}}
					></SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default Slider
