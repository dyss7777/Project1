function Navigation(){
	return(
		<div className="hd-menu">
			<nav className="gnb-wrap">
				<ul className="gnb">
					<li className="no-depth">
						<a href="">Intro</a>
					</li>
					<li className="no-depth">
						<a href="">About</a>
					</li>
					<li>
						<a href="">Skill</a>
						<div className="depth">
							<ul>
								<li><a href="">Web</a></li>
								<li><a href="">Front End</a></li>
								<li><a href="">Back End</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="">Portfolio</a>
						<div className="depth">
							<ul>
								<li><a href="">Oksuro</a></li>
								<li><a href="">Purito Seoul</a></li>
								<li><a href="">Lifeplus</a></li>
								<li><a href="">Men Noblesse</a></li>
								<li><a href="">b.state design</a></li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
			<span className="hd-mark"></span>
		</div>
	);
}

export default Navigation;