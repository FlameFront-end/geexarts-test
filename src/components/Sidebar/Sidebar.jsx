import React from 'react'
import { Link } from 'react-router-dom'

import {
	ava,
	ava1,
	ava2,
	ava3,
	community,
	help,
	home,
	notifications,
	play
} from '../../assets/index.js'
import Input from '../Input/Input.jsx'

import s from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<nav className={s.nav}>
			<div>
				<div className={s.top}>
					<button className={s.top_item}>
						<img src={notifications} alt='Notifications' />
					</button>
					<button className={s.top_item}>
						<img src={ava} alt='Avatar' />
					</button>
				</div>
				<Input />
				<div className={s.main}>
					<div className={s.heading}>Main</div>
					<Link to='' className={s.link}>
						<div className={s.left}>
							<img src={home} alt='Home' />
							Home
						</div>
					</Link>
					<Link to='' className={s.link}>
						<div className={s.left}>
							<img src={play} alt='Play' />
							Watch
						</div>
						<div className={s.num}>2</div>
					</Link>
					<Link to='' className={s.link}>
						<div className={s.left}>
							<img src={community} alt='Community' />
							Community
						</div>
						<div className={s.avatars}>
							<img src={ava1} alt='First Avatar' />
							<img
								src={ava2}
								alt='Second Avatar'
								style={{ position: 'absolute', top: 0, left: 12, zIndex: 10 }}
							/>
							<img
								src={ava3}
								alt='Third Avatar'
								style={{ position: 'absolute', top: 0, left: 25, zIndex: 20 }}
							/>
						</div>
					</Link>
				</div>
			</div>
			<div className={s.bottom}>
				<a href='' className={s.help}>
					<img src={help} alt='Help' />
					Help
				</a>
				<div className={s.footer}>
					<a href=''>Privacy & Policy</a>
					<a href=''>Terms & Conditions</a>
				</div>
			</div>
		</nav>
	)
}
export default Sidebar
