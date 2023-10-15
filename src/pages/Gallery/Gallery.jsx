import { Link } from 'react-router-dom'

import Header from '../../components/Header/Header.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'

import { arrow, coins } from '../../assets/index.js'
import { education } from '../../assets/index.js'

import s from './Gallery.module.scss'

const Gallery = ({ newPlaylist, trending }) => {
	return (
		<div className='wrapper'>
			<Sidebar isSlider={false} />
			<div className={s.gallery}>
				<Header isHome />
				<div className={s.wrapper}>
					<div>
						<div className={s.top}>
							<h2 className={s.heading}>New Playlist</h2>
							<Link to='/slider' className={s.all}>
								See All
								<img className={s.arrow} src={arrow} alt='arrow' />
							</Link>
						</div>
						<div className={s.card_wrapper}>
							{newPlaylist.map(item => (
								<Link to={`/slider/${item.id}`} key={item.id}>
									<div
										className={s.card}
										style={{
											backgroundImage: `url(${item.img})`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'center',
											backgroundSize: 'cover'
										}}
									>
										<div className={s.content}>
											<div className={s.card_top}>
												<div className={s.left}>
													<img src={coins} alt='coins' />
													Earn 2T
												</div>
												<div className={s.right}>
													<img src={education} alt='education' />
												</div>
											</div>
											<div className={s.card_bottom}>{item.title}</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
					<div className={s.trending}>
						<div className={s.top}>
							<h2 className={s.heading}>Trending</h2>
							<Link to='/slider' className={s.all}>
								See All
								<img className={s.arrow} src={arrow} alt='arrow' />
							</Link>
						</div>
						<div className={s.card_wrapper}>
							{trending.map(item => (
								<Link to={`/slider/${item.id}`} key={item.id}>
									<div
										className={s.card}
										style={{
											backgroundImage: `url(${item.img})`,
											backgroundRepeat: 'no-repeat',
											backgroundPosition: 'center',
											backgroundSize: 'cover'
										}}
									>
										<div className={s.content}>
											<div className={s.card_top}>
												<div className={s.left}>
													<img src={coins} alt='coins' />
													Earn 2T
												</div>
												<div className={s.right}>
													<img src={education} alt='education' />
												</div>
											</div>
											<div className={s.card_bottom}>{item.title}</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gallery
