import React from 'react'

import { arrow } from '../../assets/index.js'

import s from './Header.module.scss'

const Header = ({ isHome }) => {
	return (
		<header className={s.header}>
			<a href='' className={s.left}>
				<img src={arrow} alt='arrow' />
				<h1 className={s.heading}>Academy</h1>
			</a>
			{isHome ? (
				<div className={s.right}>
					<div className={s.filter}>
						<button className={s.active}>All</button>
						<button>Stocks</button>
						<button>ETFs</button>
						<button>Crypto</button>
						<button>NFTs</button>
					</div>
				</div>
			) : (
				<button className={s.btn}>Skip</button>
			)}
		</header>
	)
}

export default Header
